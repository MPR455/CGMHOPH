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
assert.equal(DATA.length, 475);
assert.equal(PROCS.length, 192);
const plain = value => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');
for (const [records, kind, field] of [[DATA, 'dis', 'teach'], [PROCS, 'proc', 'layzh']]) {
  assert.equal(new Set(records.map(record => record.id)).size, records.length);
  for (const record of records) {
    const panel = record[field];
    assert.match(panel, /lang="zh-Hant"/, record.id);
    assert.match(panel, /提問：/);
    assert.match(panel, /解答：/);
    assert.match(panel, /延伸閱讀/);
    assert.doesNotMatch(panel, /undefined|\[object Object\]|Additional knowledge|High-yield|HY question|Solution:|Explain:|Home plan:/, record.id);
    // Technical names may remain, but English prose must not leak from source tabs.
    assert.doesNotMatch(plain(panel), /(?:\b[A-Za-z][A-Za-z'-]*\b[ ,]+){7,}/, record.id);
    context.curTab = field;
    const rendered = kind === 'dis' ? context.renderDiseaseDetail(record) : context.renderProcDetail(record);
    assert.match(rendered, /data-tab="(?:teach|layzh)">教學<\/button>/);
    assert.ok(rendered.includes(panel.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')), record.id);
    for (const source of copy.sourceKeys(record)) assert.ok(copy.sources[source], record.id + ': missing source');
  }
}
const disease = prefix => DATA.find(d => d.id.startsWith(prefix + '-'));
const proc = prefix => PROCS.find(p => p.id.startsWith(prefix + '-'));
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
assert.match(proc('p189').method, /not automatic completion/);
assert.match(proc('p190').method, /non-diagnostic, not negative/);
assert.doesNotMatch(disease('d37').t, /primary angle closure/);
assert.doesNotMatch(disease('d291').t, /anterior chamber/);
assert.match(DATA.find(d => d.id === 'ird-mactel2').treatment, /ENCELTO/);
assert.ok(DATA.filter(d => d.id.startsWith('ird-')).every(d => d.prevNum === null), 'no fabricated common prevalence estimate');
assert.ok(context.matchesQuery(disease('d157'), '眼部中風', context.DIS_SEARCH_FIELDS), 'Chinese disease search');
assert.ok(context.matchesQuery(proc('p89'), '一氧化二氮', context.PROC_SEARCH_FIELDS), 'Chinese procedure search');
assert.doesNotMatch(context.findMatchSnippet(proc('p89'), '一氧化二氮', context.PROC_SEARCH_FIELDS), /<[^>]+>/);
assert.ok(!context.matchesQuery(proc('p89'), 'teach-section', context.PROC_SEARCH_FIELDS), 'markup is not searchable content');
console.log(`Validated ${DATA.length} disease and ${PROCS.length} intervention teaching panels, rendering, Chinese search and clinical safety regressions.`);
