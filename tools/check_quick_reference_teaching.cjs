/* Run from any directory: node tools/check_quick_reference_teaching.cjs */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'quick_reference.html'), 'utf8');
const nodes = {};
function node() {
  return {innerHTML: '', value: '', style: {setProperty() {}}, classList: {add() {}, remove() {}, toggle() {}},
    addEventListener() {}, querySelectorAll() { return []; }, scrollIntoView() {}};
}
const document = {body: {...node(), className: ''}, documentElement: node(),
  querySelectorAll() { return []; }, addEventListener() {},
  getElementById(id) { return nodes[id] ||= node(); }};
const context = {document, localStorage: {getItem() {return null;}, setItem() {}},
  window: {scrollTo() {}}, setTimeout() {}, clearTimeout() {}, console};
vm.createContext(context);
for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
  const src = match[1].match(/src="([^"]+)"/);
  const filename = src ? path.join(root, src[1]) : 'quick_reference.html';
  vm.runInContext(src ? fs.readFileSync(filename, 'utf8') : match[2], context, {filename});
  // Browser globals assigned to window are also global bindings.
  if (src) Object.assign(context, context.window);
}
const {DATA, PROCS, QUICK_REFERENCE_TEACHING_ZH: copy} = context;
const education = context.QUICK_REFERENCE_PATIENT_EDUCATION_ZH;
const operationSteps = context.QUICK_REFERENCE_PROCEDURE_STEPS_ZH;
assert.equal(DATA.length, 475);
assert.equal(PROCS.length, 192);
assert.equal(Object.keys(education.diseases).length, DATA.length);
assert.equal(Object.keys(education.procedures).length, PROCS.length);
assert.equal(Object.keys(operationSteps).length, PROCS.length);
const plain = value => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
for (const record of DATA) {
  assert.ok(typeof record.symptom === 'string' && record.symptom.trim(), record.id + ': missing English symptoms');
  assert.doesNotMatch(record.symptom + (record.laterality || ''), /[\u3400-\u9fff]/, record.id + ': symptoms must be English');
  if (/conjunctivitis|ophthalmia neonatorum/i.test(record.t)) {
    assert.ok(record.laterality, record.id + ': missing conjunctivitis laterality');
  }
  context.curTab = 'symptom';
  const rendered = context.renderDiseaseDetail(record);
  assert.match(rendered, /data-tab="symptom">Symptoms<\/button>.*data-tab="criteria">Criteria<\/button>/);
  assert.match(rendered, /<div class="dtab-panel active" lang="en">/);
  assert.ok(rendered.includes(context.formatContent(record.symptom)), record.id + ': missing symptom content');
  if (record.laterality) assert.ok(rendered.includes(context.formatContent('**Laterality and fellow-eye involvement:** ' + record.laterality)), record.id + ': missing laterality content');
}
for (const [records, kind, field] of [[DATA, 'dis', 'teach'], [PROCS, 'proc', 'layzh']]) {
  assert.equal(new Set(records.map(record => record.id)).size, records.length);
  for (const record of records) {
    const panel = record[field];
    assert.match(panel, /lang="zh-Hant"/, record.id);
    const labels = kind === 'dis'
      ? ['成因與機轉', '治療方向與選擇', '療程與恢復時間', '癒合與預後', '後續照護', '再發與再次治療']
      : ['治療流程', '療程與恢復時間', '癒合與預後', '術後照護與注意事項', '後續追蹤與再次治療'];
    for (const label of labels) {
      assert.ok(panel.includes('<strong>' + label + '</strong>'), record.id + ': missing patient counselling section ' + label);
    }
    if (kind === 'proc') {
      assert.match(panel, /<ol class="teach-steps">/);
      for (const label of ['治療前：', '進行時：', '完成後：']) assert.ok(panel.includes('<b>' + label + '</b>'), record.id + ': missing flow step ' + label);
      const steps = operationSteps[record.id.split('-')[0]];
      assert.ok(Array.isArray(steps) && steps.length >= 4, record.id + ': incomplete treatment sequence');
      assert.match(panel, /<ol class="teach-operation-steps">/);
      for (const step of steps) {
        assert.ok(typeof step === 'string' && step.trim().length > 10, record.id + ': empty treatment step');
        assert.ok(panel.includes('<li>' + context.escapeHtml(step) + '</li>'), record.id + ': missing treatment step');
      }
    }
    assert.doesNotMatch(panel, /延伸閱讀|教學整理|提問：|解答：|重點複習|teach-sources|teach-reviewed|teach-additional/, record.id);
    assert.doesNotMatch(panel, /undefined|\[object Object\]|Additional knowledge|High-yield|HY question|Solution:|Explain:|Home plan:/, record.id);
    // Technical names may remain, but English prose must not leak from source tabs.
    assert.doesNotMatch(plain(panel), /(?:\b[A-Za-z][A-Za-z'-]*\b[ ,]+){7,}/, record.id);
    context.curTab = field;
    const rendered = kind === 'dis' ? context.renderDiseaseDetail(record) : context.renderProcDetail(record);
    assert.match(rendered, /data-tab="(?:teach|layzh)">教學<\/button>/);
    assert.ok(rendered.includes(panel.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')), record.id);
    for (const source of copy.sourceKeys(record)) assert.ok(copy.sources[source], record.id + ': missing source');
    const id = record.id.startsWith('ird-') ? record.id : record.id.split('-')[0];
    const patientCopy = education[kind === 'dis' ? 'diseases' : 'procedures'][id];
    const fields = ['options', 'course', 'outlook', 'recurrence'].concat(kind === 'proc' ? ['preparation', 'immediateCare', 'aftercare'] : []);
    for (const field of fields) {
      assert.ok(typeof patientCopy[field] === 'string' && patientCopy[field].trim().length > 10, record.id + ': incomplete ' + field);
    }
  }
}
const disease = prefix => DATA.find(d => d.id.startsWith(prefix + '-'));
const proc = prefix => PROCS.find(p => p.id.startsWith(prefix + '-'));
assert.match(disease('d35').laterality, /fellow eye over the next several days/);
assert.match(disease('d35').laterality, /some cases stay unilateral/);
assert.match(disease('d37').laterality, /Usually bilateral/);
assert.match(disease('d37').laterality, /not contagious/);
assert.match(disease('d36').laterality, /Adult inclusion conjunctivitis is usually unilateral/);
assert.match(disease('d36').laterality, /Trachoma typically affects both eyes/);
assert.match(disease('d40').laterality, /prosthesis may affect only that side/);
assert.match(disease('d311').symptom, /first month of life/);
assert.match(disease('d34').symptom, /Hyperacute gonococcal.*urgent assessment/);
assert.ok(context.matchesQuery(disease('d43'), 'fibrin-clearance', context.DIS_SEARCH_FIELDS), 'laterality notes are searchable');
assert.match(disease('d157').teach, /立刻.*急診/);
assert.match(disease('d157').treatment, /Do not routinely offer ocular massage/);
assert.doesNotMatch(proc('p111').indication, /possibly dislodge the embolus/);
assert.ok(!proc('p111').usedFor.some(d => /^d(156|157)-/.test(d.id)), 'arterial occlusion must not remain a paracentesis backlink');
assert.ok(!disease('d157').treatmentLinks.some(p => p.id.startsWith('p111-')));
assert.match(disease('d132').treatment, /benefit has not been proven/);
assert.doesNotMatch(disease('d132').treatment, /doxycycline 200/);
assert.match(disease('d199').treatment, /Do not routinely prescribe high-dose vitamin A/);
assert.match(disease('d357').teach, /立即.*沖洗至少 20 分鐘/);
assert.doesNotMatch(disease('d357').treatment, /Diphoterine are superior/);
assert.match(proc('p89').layzh, /氣泡完全吸收/);
assert.match(proc('p89').layzh, /一氧化二氮/);
assert.match(proc('p96').layzh, /不常規使用.*抗生素/);
assert.match(operationSteps.p0.join(' '), /前囊.*晶核.*人工水晶體/);
assert.match(operationSteps.p21.join(' '), /含薄層基質/);
assert.match(operationSteps.p22.join(' '), /僅含供體後彈力層與內皮/);
assert.match(operationSteps.p79.join(' '), /眼白外側/);
assert.match(operationSteps.p118.join(' '), /優碘/);
assert.match(operationSteps.p140.join(' '), /上下眼瞼部分靠攏/);
assert.match(operationSteps.p189.join(' '), /陽性不代表當場一律清除所有淋巴結/);
assert.match(operationSteps.p190.join(' '), /不足檢體不能當作陰性/);
assert.match(operationSteps.p191.join(' '), /不使用準分子雷射切削/);
assert.match(proc('p189').method, /not automatic completion/);
assert.match(proc('p190').method, /non-diagnostic, not negative/);
assert.doesNotMatch(disease('d37').t, /primary angle closure/);
assert.doesNotMatch(disease('d291').t, /anterior chamber/);
assert.match(education.diseases.d18.course, /1–3 天/);
assert.match(education.diseases.d68.course, /終生/);
assert.match(education.diseases.d35.course, /1–3 週/);
assert.match(education.diseases.d199.recurrence, /持續存在/);
assert.match(education.procedures.p19.course, /一年以上/);
assert.match(education.procedures.p96.course, /感染.*急症/);
assert.notEqual(education.diseases.d18.course, education.diseases.d68.course, 'acute injury and chronic disease need different course counselling');
assert.match(DATA.find(d => d.id === 'ird-mactel2').treatment, /ENCELTO/);
assert.ok(DATA.filter(d => d.id.startsWith('ird-')).every(d => d.prevNum === null), 'no fabricated common prevalence estimate');
assert.ok(context.matchesQuery(disease('d157'), '眼部中風', context.DIS_SEARCH_FIELDS), 'Chinese disease search');
assert.ok(context.matchesQuery(proc('p89'), '一氧化二氮', context.PROC_SEARCH_FIELDS), 'Chinese procedure search');
assert.doesNotMatch(context.findMatchSnippet(proc('p89'), '一氧化二氮', context.PROC_SEARCH_FIELDS), /<[^>]+>/);
assert.ok(!context.matchesQuery(proc('p89'), 'teach-section', context.PROC_SEARCH_FIELDS), 'markup is not searchable content');
console.log(`Validated ${DATA.length} English symptom panels, conjunctivitis laterality, ${DATA.length} disease and ${PROCS.length} intervention teaching panels, rendering, search and clinical safety regressions.`);
