/* Consult editor extensions. Data remains in individual bank files. */
var ACTIVE_SCENARIO='', MED_BLOCKS=[], MED_SELECTED=null, QUICK_RECOMMENDED_MED=null, BUILDER_LOAD_REVISION=0;
var QTPL=window.CGMH_QUICK_TEMPLATES||[], QVARIANTS=window.CGMH_QUICK_VARIANTS||{}, QMAP={}, ACTIVE_QUICK_FAMILY='';
for(const it of [...QTPL.flatMap(g=>g.items),...Object.values(QVARIANTS).flat()])QMAP[it.id]=it;
function buildQuickTpl(){
 const query=(document.getElementById('quick-search').value||'').toLowerCase();
 const box=document.getElementById('quicktpl');box.replaceChildren();
 for(const group of QTPL){
   const items=group.items.filter(t=>!query||[t.label,group.group,...(QVARIANTS[t.familyId]||[]).map(v=>v.optionLabel)].join(' ').toLowerCase().includes(query));
   if(!items.length)continue;
   const title=document.createElement('div');title.className='consult-group-title';title.textContent=group.group;box.appendChild(title);
   const row=document.createElement('div');row.className='chips';
   for(const it of items){const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=it.label;b.dataset.family=it.familyId;b.setAttribute('aria-pressed',String(it.familyId===ACTIVE_QUICK_FAMILY));b.onclick=()=>fillQuick(it.id);row.appendChild(b);}box.appendChild(row);
 }
 if(!box.children.length)box.textContent='No matching quick template.';
}
function showQuickOptions(it){
 ACTIVE_QUICK_FAMILY=it.familyId;
 const choices=QVARIANTS[it.familyId]||[it],select=document.getElementById('quick-variant');
 select.replaceChildren();for(const choice of choices)select.add(new Option(choice.optionLabel,choice.id));select.value=it.id;
 document.getElementById('quick-variant-wrap').hidden=false;
 document.getElementById('quick-variant-field').hidden=choices.length<2;
 document.getElementById('quick-current').textContent=it.label;
 for(const chip of document.querySelectorAll('#quicktpl button'))chip.setAttribute('aria-pressed',String(chip.dataset.family===it.familyId));
}
function clearQuickSelection(){
 ACTIVE_QUICK_FAMILY='';QUICK_RECOMMENDED_MED=null;document.getElementById('quick-variant-wrap').hidden=true;
 for(const chip of document.querySelectorAll('#quicktpl button'))chip.setAttribute('aria-pressed','false');
}
function showQuickSource(){const it=QMAP[document.getElementById('quick-variant').value];if(it){showTab('bank');document.getElementById('k-search').value='';document.getElementById('k-category').value='';document.getElementById('k-source').value='';selectTpl(it.planTemplateId||it.templateId);}}
function syncExamSections(){
 document.getElementById('fundusbox').style.display=document.getElementById('o-fundus').checked?'block':'none';
 document.getElementById('eombox').style.display=document.getElementById('o-eom').checked?'block':'none';
}
function applyQuickFields(t){
 clearSOFields();
 const fields={cc:'s-cc',side:'s-side',onset:'s-onset',detail:'s-detail',nonoph:'s-nonoph',ophx:'s-ophx',otherhx:'s-otherhx',cl:'s-cl',ph:'s-ph',allergy:'s-allergy'};
 const side=document.getElementById('s-side');if(![...side.options].some(o=>o.value==='###'))side.add(new Option('### — choose eye','###'),0);
 for(const [key,id] of Object.entries(fields))document.getElementById(id).value=t.subjective[key]||'###';
 for(const row of EXAM){
   const value=t.objective.fields[row.id]||'###';
   for(const suffix of row.ou?['']:['-od','-os'])document.getElementById('o-'+row.id+suffix).value=value;
 }
 document.getElementById('o-iop-method').value=t.objective.method||'###';
 document.getElementById('o-extra').value=t.objective.extra||'';
 document.getElementById('o-extra').closest('details').open=!!t.objective.extra;
 document.getElementById('o-fundus').checked=!!t.objective.fundus;
 document.getElementById('o-fundod').value=t.objective.fundus?.od||'';document.getElementById('o-fundos').value=t.objective.fundus?.os||'';
 document.getElementById('o-eom').checked=!!t.objective.eom;document.getElementById('o-eomtext').value=t.objective.eom||'';syncExamSections();
}
async function fillQuick(id){
 const it=QMAP[id];if(!it)return;
 const revision=++BUILDER_LOAD_REVISION;
 try{
   setBankStatus('Loading '+it.optionLabel+'...');
   const [general,medicationData]=await Promise.all([window.CGMHConsult.loadQuick(it),window.CGMHConsult.medications()]);if(revision!==BUILDER_LOAD_REVISION)return;MED_BLOCKS=medicationData;
   applyQuickFields(general);document.getElementById('a-imp').value=general.impression;
   document.getElementById('a-plan').value=general.plan;document.getElementById('a-addendum').value=general.addendum||'';
   document.getElementById('b-tpl').value='';document.getElementById('med-search').value='';showQuickOptions(it);QUICK_RECOMMENDED_MED=it.medBlockId;setConsultScenario(it.scenario);
   const m=MED_BLOCKS.find(t=>t.id===it.medBlockId);document.getElementById('a-med').value=m?.lines||'';
   renderMedicationBlocks();if(m){document.getElementById('med-block').value=m.id;previewMedicationBlock();}
   document.getElementById('med-recommendation').textContent=m?'Most used recorded combination for '+it.optionLabel+': '+it.medSourceCount+' of '+it.medPoolCount+' examples with medication recorded; '+it.caseCount+' examples reviewed. Fill eye / patient-specific ###.':'No medication combination recorded for '+it.optionLabel+'.';
   setBankStatus(it.optionLabel+': general template loaded. Fill patient-specific ###.');
   renderPreview();toast('General scenario template loaded.');
 }catch(e){if(revision===BUILDER_LOAD_REVISION)setBankStatus(e.message+'. Check the external bank files and retry.');}
}
const DENY=['blurred vision','ocular pain','pain with eye movement','VF defect','curtain-like shadow','photopsia','increasing floaters','diplopia','photophobia','foreign body sensation','tearing','discharge','red eye','lid swelling','headache','nausea/vomiting','fever','weakness/numbness','trauma hx','chemical exposure','recent URI symptoms'];
function buildDenyChips(){
 const box=document.getElementById('denychips');box.replaceChildren();
 for(const symptom of DENY){const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=symptom;b.setAttribute('aria-pressed','false');b.onclick=()=>{const selected=b.classList.toggle('on');b.setAttribute('aria-pressed',String(selected));updateDeniedState();};box.appendChild(b);}updateDeniedState();
}
function updateDeniedState(){const n=document.querySelectorAll('#denychips .on').length;document.getElementById('denied-state').textContent=n?n+' denied symptoms selected':'No denied symptoms selected';}
function clearDenied(){document.querySelectorAll('#denychips .chip').forEach(b=>{b.classList.remove('on');b.setAttribute('aria-pressed','false');});updateDeniedState();}
function insertDenied(){
 const on=[...document.querySelectorAll('#denychips .chip.on')].map(b=>b.textContent);if(!on.length){toast('Select symptoms first');return;}
 const ta=document.getElementById('s-detail'),sentence='Denied '+on.join(', ')+'.';
 if(ta.value.includes(sentence)){toast('This denied sentence is already present');return;}
 ta.value=ta.value.includes('Pertinent negatives: ###.')?ta.value.replace('Pertinent negatives: ###.',sentence):(ta.value?ta.value.replace(/\s*$/,' '):'')+sentence;renderPreview();
}
const SNIPPETS=window.CGMH_PLAN_BLOCKS||[];
function buildScenarioSelects(){
 const labels=new Map(BUILTIN.filter(t=>t.scenario).map(t=>[t.scenario,t.diagnosis||t.originalTitle]));
 for(const it of Object.values(QVARIANTS).flat())if(!labels.has(it.scenario))labels.set(it.scenario,it.optionLabel);
 const items=[...labels.entries()].sort((a,b)=>a[1].localeCompare(b[1]));
 for(const id of ['plan-scenario','med-scenario']){
   const s=document.getElementById(id);s.replaceChildren(new Option(id==='plan-scenario'?'Common plan blocks':'All diagnoses',''));
   for(const [scenario,label] of items)s.add(new Option(label,scenario));
 }
}
function setConsultScenario(scenario){
 ACTIVE_SCENARIO=scenario||'';
 for(const id of ['plan-scenario','med-scenario'])document.getElementById(id).value=ACTIVE_SCENARIO;
 buildPlanChips();if(MED_BLOCKS.length)renderMedicationBlocks();
}
function buildPlanChips(){
 const scenario=document.getElementById('plan-scenario').value;
 const box=document.getElementById('planchips');box.replaceChildren();
 SNIPPETS.forEach((s,i)=>{if(s.scenarios.length&&!s.scenarios.includes(scenario))return;const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=s.t;b.onclick=()=>insertSnippet(i);box.appendChild(b);});
}
async function insertSnippet(i){
 const block=SNIPPETS[i];if(!block)return;
 try{
   let text=block.v;
   if(block.quickId){const t=await window.CGMHConsult.loadQuick(QMAP[block.quickId]);text=t.plan;if(t.addendum)text+='\n\n[Additional instructions]\n'+t.addendum;}
   if(block.templateId){const t=await ensureTemplate(block.templateId),m=t.reply.match(/\n[ \t\n]*Plan:[ \t]*\n?/i);text=m?t.reply.slice(m.index+m[0].length).trim():'';if(t.addendum)text+='\n\n[Addendum]\n'+t.addendum;}
   if(!text)return;const ta=document.getElementById('a-plan');if(ta.value.includes(text)){toast('Plan block already present');return;}ta.value=(ta.value?ta.value.replace(/\s*$/,'\n'):'')+text;renderPreview();
 }catch(e){setBankStatus(e.message);}
}
var medLoading=null;
async function openMedicationBlocks(){
 if(MED_BLOCKS.length){renderMedicationBlocks();return;}
 const status=document.getElementById('med-status');status.textContent='Loading medication combinations...';
 try{if(!medLoading)medLoading=window.CGMHConsult.medications().finally(()=>medLoading=null);MED_BLOCKS=await medLoading;renderMedicationBlocks();}
 catch(e){status.textContent=e.message+'. Use Retry after checking the consult_template folder.';}
}
function renderMedicationBlocks(){
 const scenario=document.getElementById('med-scenario').value,q=document.getElementById('med-search').value.toLowerCase();
 const quick=ACTIVE_QUICK_FAMILY&&scenario===ACTIVE_SCENARIO?QMAP[document.getElementById('quick-variant').value]:null;
 const list=MED_BLOCKS.filter(m=>(quick?quick.medBlockIds.includes(m.id):(!scenario||m.scenario===scenario))&&(!q||[m.label,m.lines,...m.sources].join(' ').toLowerCase().includes(q)));
 const s=document.getElementById('med-block');s.replaceChildren(new Option('Choose a recorded combination',''));
 for(const m of list)s.add(new Option(medicationTitle(m,!scenario),m.id));
 MED_SELECTED=null;document.getElementById('med-preview').textContent='Select a combination to review its order lines and source context.';
 document.getElementById('med-context').textContent='';document.getElementById('med-insert').disabled=true;
 document.getElementById('med-status').textContent=list.length+' matching combinations / '+MED_BLOCKS.length+' total';
}
function medicationTitle(m,includeDiagnosis){
 const shortName=drug=>{
   const combination=drug.match(/\(([^)]+\+[^)]+)\)/);
   if(combination){const brand=drug.slice(0,combination.index).replace(/eye drops\s*$/i,'').trim();return brand?brand+' ('+combination[1]+')':combination[1];}
   return [drug.replace(/\s+(?:\d|oph\b|inj\b|gel\b).*/i,'').trim(),drug.match(/\d+(?:\.\d+)?\s*(?:%|mcg|mg|gm|g\b|IU\b)/i)?.[0]].filter(Boolean).join(' ');
 };
 const drugs=m.orders?.length?m.orders.map(r=>[shortName(r.drug),r.dose&&r.dose!=='###'?r.dose+' '+(r.unit||''):'',r.freq,r.route&&r.route!=='###'?r.route:''].filter(Boolean).join(' ')):(m.drugs||[]).map(shortName);
 const summary=drugs.length?[...new Set(drugs)].join(' + '):'Plan instructions: '+m.lines.replace(/\s+/g,' ').slice(0,140);
 return [includeDiagnosis?m.diagnosis:'',summary,cleanDisplayContext(m.severity)].filter(Boolean).join(' · ');
}
function previewMedicationBlock(){
 MED_SELECTED=MED_BLOCKS.find(m=>m.id===document.getElementById('med-block').value)||null;
 const m=MED_SELECTED;document.getElementById('med-insert').disabled=!m;if(!m)return;
 document.getElementById('med-preview').textContent=m.lines;
 document.getElementById('med-context').textContent=[[m.kind,cleanDisplayContext(m.severity)].filter(Boolean).join(' · '),m.sources.length+' recorded source example'+(m.sources.length===1?'':'s'),...(m.reviewFlags||[]).map(cleanDisplayContext),m.planMentions?.length?'Source plan context:\n'+m.planMentions.join('\n'):''].filter(Boolean).join('\n\n');
}
function insertMedicationBlock(){
 const m=MED_SELECTED;if(!m)return;const ta=document.getElementById('a-med');
 ta.value=(document.getElementById('med-replace').checked?'':(ta.value?ta.value.replace(/\s*$/,'\n'):''))+m.lines;
 renderPreview();toast('Recorded combination inserted; fill ### and review the source context.');
}
function showMedicationSource(){
 const m=MED_SELECTED;if(!m)return;const meta=BUILTIN.find(t=>t.sourceId===m.sources[0]);if(meta){showTab('bank');document.getElementById('k-search').value='';document.getElementById('k-category').value='';document.getElementById('k-source').value='';selectTpl(meta.id);}
}

function parseS(s){
 if(!s)return;
 const header=/^[ \t]*(CC @ ER|Chief complaint|PI @ ER|Ophthalmic symptoms|Detail|Non-ophthalmic symptoms|OPH OP hx|Other related eye disease hx|Contact lens|PH\/Systemic disease|Allergy)[ \t]*[:：]?[ \t]*/gmi;
 const headers=[...s.matchAll(header)],values={},append=(id,text)=>{if(text)values[id]=[values[id],text.replace(/\bDENIED\b/g,'denied')].filter(Boolean).join('\n');};
 const destinations={'non-ophthalmic symptoms':'s-nonoph','oph op hx':'s-ophx','other related eye disease hx':'s-otherhx','contact lens':'s-cl','ph/systemic disease':'s-ph','allergy':'s-allergy'};
 let detailTarget='s-detail',cc='';
 for(let i=0;i<headers.length;i++){
   const h=headers[i],name=h[1].toLowerCase(),text=s.slice(h.index+h[0].length,headers[i+1]?.index??s.length).trim();
   if(name==='cc @ er'||name==='chief complaint'){if(!cc&&text)cc=text;continue;}
   if(name==='pi @ er'||name==='ophthalmic symptoms'){detailTarget='s-detail';append('s-detail',text);continue;}
   if(name==='detail'){append(detailTarget,text);continue;}
   if(name==='non-ophthalmic symptoms')detailTarget='s-nonoph';
   append(destinations[name],text);
 }
 if(cc){
   const side=cc.match(/\b(OD|OS|OU)\b/i);if(side)document.getElementById('s-side').value=side[1].toUpperCase();
   const onset=cc.match(/(?:onset(?:\/duration)?|duration)[ \t]*:[ \t]*(.*)/i);
   const timing=cc.match(/\b(?:since|for)[ \t]+(.+)$/i);
   document.getElementById('s-onset').value=onset?.[1]||timing?.[1]||'';
   document.getElementById('s-cc').value=cc.replace(/,?[ \t]*\b(OD|OS|OU)\b/i,'').replace(/,?[ \t]*(?:onset(?:\/duration)?|duration)[ \t]*:.*/i,'').replace(/\b(?:since|for)[ \t]+.+$/i,'').replace(/[, \t]+$/,'').trim();
 }
 const leading=s.slice(0,headers[0]?.index??s.length).replace(/^<S>[ \t]*:?[ \t]*\n?/i,'').trim();if(leading)append('s-detail',leading);
 for(const [id,text] of Object.entries(values))setIf(id,text);
}
function clearSOFields(){
 for(const id of ['s-cc','s-onset','s-detail','s-nonoph','s-ophx','s-otherhx','s-cl','s-ph','s-allergy','o-fundod','o-fundos','o-extra','o-iop-method','o-eomtext'])document.getElementById(id).value='';
 const side=document.getElementById('s-side');if(![...side.options].some(o=>o.value==='###'))side.add(new Option('### — choose eye','###'),0);side.value='###';
 for(const r of EXAM)for(const suffix of r.ou?['']:['-od','-os'])document.getElementById('o-'+r.id+suffix).value='';
 document.getElementById('o-eom').checked=false;document.getElementById('o-fundus').checked=false;clearDenied();syncExamSections();
}
function parseO(o){
 if(!o)return;let remaining=o.replace(/###Ophthalmic Examinations(?:###)?/g,'');
 const method=o.match(/^IOP[^\n]*\(measured with[ \t]+([^)]*)\)/mi);document.getElementById('o-iop-method').value=method?method[1].trim():'';
 for(const r of EXAM){
   const L=escRe(r.l);let m;
   if(r.ou){m=o.match(new RegExp('^[ \\t]*'+L+'[ \\t]*\\[OU\\][ \\t]*(.*)$','m'));if(m)document.getElementById('o-'+r.id).value=m[1].trim();}
   else{m=o.match(new RegExp('^[ \\t]*'+L+'[ \\t]*\\[OD\\][ \\t]*(.*?)[ \\t]*\\[OS\\][ \\t]*(.*)$','m'))||o.match(new RegExp('^[ \\t]*'+L+'[ \\t]*\\[OD\\][ \\t]*(.*)\\n[ \\t]*\\[OS\\][ \\t]*(.*)$','m'));if(m){document.getElementById('o-'+r.id+'-od').value=m[1].trim();document.getElementById('o-'+r.id+'-os').value=m[2].trim().replace(/\(measured with.*$/,'').trim();}}
   if(m)remaining=remaining.replace(m[0],'');
 }
 const eom=o.match(/^EOM[ \t]*\n?([\s\S]*?)(?=^\S[^\n]*\[O[DUS]\]|^Fundoscopy|$)/m);
 document.getElementById('o-eom').checked=!!eom;if(eom){document.getElementById('o-eomtext').value=eom[1].trimEnd();remaining=remaining.replace(eom[0],'');}
 const f=o.match(/Fundoscopy[ \t]*\n[ \t]*\[OD\][ \t]*([\s\S]*?)\n[ \t]*\[OS\][ \t]*([^\n]*(?:\n[ \t]+[^\n]*)*)/);
 document.getElementById('o-fundus').checked=!!f;if(f){document.getElementById('o-fundod').value=f[1].trim();document.getElementById('o-fundos').value=f[2].trim();remaining=remaining.replace(f[0],'');}
 document.getElementById('o-extra').value=remaining.replace(/\n{3,}/g,'\n\n').trim();
 syncExamSections();
}
