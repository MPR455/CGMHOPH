/* Browser edits use a versioned bank; legacy local templates are migrated without deleting the old bank. */
var selId=null,editingId=null,selectionRevision=0;
var TEMPLATE_TITLES=null;
function cleanDisplayContext(text){return String(text||'').replace(/(?:Standard\s*\/\s*)?Severity not specified/gi,'').replace(/\b(?:ER|LEG|MED|QUICK)-\d+\b/gi,'source example').replace(/^[\s/·—-]+|[\s/·—-]+$/g,'').trim();}
function baseTemplateTitle(t){
 return [t.originalTitle||t.diagnosis||cleanDisplayContext(t.id),cleanDisplayContext(t.severity),(t.symptoms||[]).slice(0,2).map(s=>s.replace(/-/g,' ')).join(', ')].filter(Boolean).join(' · ');
}
function templateTitle(t){
 if(!t)return '';if(t.displayTitle)return t.displayTitle;
 if(!TEMPLATE_TITLES){
   TEMPLATE_TITLES=new Map();const groups=new Map();
   for(const meta of BUILTIN){const title=baseTemplateTitle(meta);if(!groups.has(title))groups.set(title,[]);groups.get(title).push(meta);}
   for(const [title,items] of groups)items.forEach((meta,i)=>TEMPLATE_TITLES.set(meta.id,title+(items.length>1?' · Example '+(i+1):'')));
 }
 return TEMPLATE_TITLES.get(t.id)||baseTemplateTitle(t);
}
function setBankStatus(text){for(const id of ['bank-status','builder-bank-status'])document.getElementById(id).textContent=text;}
function saveBank(){
 try{localStorage.setItem(window.CGMH_CONSULT_STORAGE_KEY||'oph_bank_v3',JSON.stringify({overrides:BANK.filter(t=>LOCAL_IDS.has(t.id)),deleted:[...HIDDEN_IDS]}));}
 catch(e){toast('Browser storage unavailable; export your edits before closing.');}
}
function esc(x){return String(x).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function escRe(x){return x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}
function grab(re,txt){const m=txt.match(re);return m?m[1].trim():null;}
function setIf(id,value){if(value!==null&&value!==undefined)document.getElementById(id).value=value;}
function cats(){return [...new Set(BANK.map(t=>t.category))].sort((a,b)=>a.localeCompare(b));}
function fillCatSelect(){
 const s=document.getElementById('b-cat'),current=s.value,template=document.getElementById('b-tpl').value;
 s.replaceChildren(new Option('— all categories —',''));for(const c of cats())s.add(new Option(c,c));if(cats().includes(current))s.value=current;
 fillTplSelect(template);
 const bankCat=document.getElementById('k-category'),bc=bankCat.value;bankCat.replaceChildren(new Option('All categories',''));for(const c of cats())bankCat.add(new Option(c,c));if(cats().includes(bc))bankCat.value=bc;
}
function fillTplSelect(selected){
 const category=document.getElementById('b-cat').value,list=BANK.filter(t=>!category||t.category===category);
 const s=document.getElementById('b-tpl');s.replaceChildren(new Option('Choose a template to load',''));for(const t of list)s.add(new Option(templateTitle(t),t.id));if(selected&&list.some(t=>t.id===selected))s.value=selected;
}
function currentTpl(){return BANK.find(t=>t.id===document.getElementById('b-tpl').value);}
async function ensureTemplate(id){
 let t=BANK.find(x=>x.id===id);if(!t)throw new Error('Template unavailable');if(typeof t.reply==='string')return t;
 const data=await window.CGMHConsult.load(t);const i=BANK.findIndex(x=>x.id===id);
 if(i<0)throw new Error('Template was removed while loading');
 if(!LOCAL_IDS.has(id))BANK[i]={...BANK[i],...data};return BANK[i];
}
async function loadCategory(category){
 const c=category===undefined?document.getElementById('k-category').value:category;
 if(!c){setBankStatus('Choose a category first, or use Load all categories.');return;}
 const ids=BANK.filter(t=>t.category===c).map(t=>t.id);await loadTemplateBatch(ids,c);renderBank();
}
async function loadTemplateBatch(ids,label){
 let done=0,fail=0;
 for(let i=0;i<ids.length;i+=16){const results=await Promise.allSettled(ids.slice(i,i+16).map(ensureTemplate));done+=results.filter(r=>r.status==='fulfilled').length;fail+=results.filter(r=>r.status==='rejected').length;setBankStatus(label+': '+done+' loaded'+(fail?', '+fail+' failed; retry to load missing files.':''));}
 return fail;
}
async function loadAllCategories(){await loadTemplateBatch(BANK.map(t=>t.id),'All categories');renderBank();}
async function loadTpl(mode,tpl){
 const selected=tpl||currentTpl();if(!selected){toast('Select a template first');return;}
 const revision=++BUILDER_LOAD_REVISION;
 try{
   setBankStatus('Loading '+templateTitle(selected)+'...');const t=await ensureTemplate(selected.id);if(revision!==BUILDER_LOAD_REVISION)return;clearQuickSelection();
   if(mode==='reply'||mode==='all'){
     const m=t.reply.match(/Impression:[ \t]*\n([\s\S]*?)\n\s*Plan:[ \t]*\n?([\s\S]*)/i);
     document.getElementById('a-imp').value=m?m[1].trim():'';document.getElementById('a-plan').value=m?m[2].trim():t.reply;
     document.getElementById('a-addendum').value=t.addendum||'';
     document.getElementById('a-med').value=Array.isArray(t.medicationOrders)?t.medicationOrders.map(r=>r.line).join('\n'):(t.p||'').trim();
   }
   if(mode==='so'||mode==='all'){clearSOFields();parseS(t.s);parseO(t.o);}
   document.getElementById('b-cat').value=t.category;fillTplSelect(t.id);setConsultScenario(t.scenario);
   document.getElementById('med-recommendation').textContent='Medication lines from this specific source template.';
   renderPreview();showTab('builder');renderBank();setBankStatus('Loaded '+templateTitle(t)+'. '+(t.reviewFlags||[]).map(cleanDisplayContext).join(' '));toast('Template loaded');
 }catch(e){setBankStatus(e.message+'. Check the consult_template folder and retry.');toast('Template could not be loaded');}
}
async function saveBuilderToBank(){
 let selected=currentTpl();if(selected){try{selected=await ensureTemplate(selected.id);}catch(e){setBankStatus(e.message);return;}}
 editingId=selected?selected.id:null;
 openEdit({id:selected?.id||'',category:selected?.category||document.getElementById('b-cat').value||'Uncategorized',reply:'Impression:\n'+v('a-imp')+'\n\nPlan:\n'+v('a-plan'),s:buildS(),o:buildO(),p:v('a-med'),addendum:v('a-addendum')},selected?'Update template from current builder':'Save builder as new template');
}
function sel(){return BANK.find(t=>t.id===selId);}
function renderBank(){
 const q=document.getElementById('k-search').value.toLowerCase(),c=document.getElementById('k-category').value,source=document.getElementById('k-source').value;
 const hits=BANK.filter(t=>(!c||t.category===c)&&(!source||(t.source||'Local template')===source)&&(!q||[templateTitle(t),t.id,t.category,t.sourceId,t.originalTitle,...(t.symptoms||[]),...(t.findings||[]),t.reply||'',t.s||'',t.o||'',t.p||''].join(' ').toLowerCase().includes(q)));
 const box=document.getElementById('banklist');box.replaceChildren();
 for(const cat of [...new Set(hits.map(t=>t.category))].sort((a,b)=>a.localeCompare(b))){
   const heading=document.createElement('div');heading.className='bankcat';heading.textContent=cat+' · '+hits.filter(t=>t.category===cat).length;box.appendChild(heading);
   for(const t of hits.filter(t=>t.category===cat)){
     const b=document.createElement('button');b.type='button';b.className='bankitem'+(t.id===selId?' sel':'');b.textContent=templateTitle(t)+(t.reviewCount||t.reviewFlags?.length?' ⚑':'')+(t.duplicateOf?' · duplicate':'');b.onclick=()=>selectTpl(t.id);box.appendChild(b);
   }
 }
 if(!hits.length)box.textContent='No matches.';
 document.getElementById('bankcount').textContent=hits.length+' shown / '+BANK.length+' templates · '+BANK.filter(t=>typeof t.reply==='string').length+' loaded';
}
function viewText(){
 const t=sel();if(!t||typeof t.reply!=='string')return '';
 let out=t.reply;if(t.s)out+='\n\n<S>:\n'+t.s;if(t.o)out+='\n\n<O>:\n'+t.o;if(t.p)out+='\n\n<P>:\n'+t.p;if(t.addendum)out+='\n\n[Addendum]\n'+t.addendum;return out;
}
async function selectTpl(id){
 const revision=++selectionRevision;selId=id;renderBank();document.getElementById('v-title').textContent=templateTitle(sel());
 document.getElementById('v-actions').style.display='none';document.getElementById('v-body').textContent='Loading template...';document.getElementById('v-meta').textContent='';
 try{
   const t=await ensureTemplate(id);if(revision!==selectionRevision||selId!==id)return;
   document.getElementById('v-body').textContent=viewText();document.getElementById('v-actions').style.display='flex';
   document.getElementById('v-meta').textContent=[t.source||'Browser template',cleanDisplayContext(t.severity),...(t.reviewFlags||[]).map(cleanDisplayContext),t.duplicateOf?'Duplicate source example':''].filter(Boolean).join('\n');
   const link=document.getElementById('v-source');link.hidden=!t.sourceFile;if(t.sourceFile)link.href='consult_template/'+t.sourceFile;
   renderBank();
 }catch(e){if(revision!==selectionRevision)return;document.getElementById('v-body').textContent=e.message+'. Check the consult_template folder and select this template again to retry.';}
}
function useSelected(){const t=sel();if(t)loadTpl('all',t);}
function newTpl(){editingId=null;openEdit({id:'',category:'',reply:'Impression:\n1. \n\nPlan:\n- ',s:'',o:'',p:''},'New template');}
async function editTpl(){const t=sel();if(!t)return;try{const full=await ensureTemplate(t.id);editingId=t.id;openEdit(full,'Edit template');}catch(e){setBankStatus(e.message);}}
function openEdit(t,heading){
 document.getElementById('e-hd').textContent=heading;document.getElementById('catlist').innerHTML=cats().map(c=>'<option value="'+esc(c)+'">').join('');
 for(const field of ['id','cat','reply','s','o','p','addendum'])document.getElementById('e-'+field).value=(field==='id'?(t.id?templateTitle(BANK.find(x=>x.id===t.id)||t):''):field==='cat'?t.category:t[field])||'';document.getElementById('editdlg').showModal();
}
function saveTpl(){
 const prior=editingId?BANK.find(t=>t.id===editingId):null;
 const title=v('e-id');
 const nt={...(prior||{}),id:editingId||title,displayTitle:title,category:v('e-cat')||'Uncategorized',reply:v('e-reply'),s:v('e-s'),o:v('e-o'),p:v('e-p'),addendum:v('e-addendum')};
 if(!title){alert('Title is required');return;}if(!editingId&&BANK.some(t=>t.id===nt.id||templateTitle(t)===title)){alert('A template with this title already exists');return;}
 // A changed medication textarea replaces the parsed source orders for this local edit.
 delete nt.medicationOrders;nt.reviewCount=0;nt.reviewFlags=[];
 if(editingId){BANK=BANK.filter(t=>t.id!==editingId);LOCAL_IDS.delete(editingId);if(nt.id!==editingId&&BUILTIN.some(t=>t.id===editingId))HIDDEN_IDS.add(editingId);}
 else nt.source='Local template';
 BANK.push(nt);LOCAL_IDS.add(nt.id);saveBank();fillCatSelect();selectTpl(nt.id);document.getElementById('editdlg').close();toast('Saved in this browser bank');
}
function delTpl(){
 const t=sel();if(!t||!confirm('Delete "'+templateTitle(t)+'" from this browser bank?'))return;
 BANK=BANK.filter(x=>x.id!==t.id);LOCAL_IDS.delete(t.id);if(BUILTIN.some(x=>x.id===t.id))HIDDEN_IDS.add(t.id);saveBank();selId=null;selectionRevision++;
 document.getElementById('v-title').textContent='Select a template';document.getElementById('v-actions').style.display='none';document.getElementById('v-body').textContent='';document.getElementById('v-meta').textContent='';document.getElementById('v-source').hidden=true;fillCatSelect();renderBank();toast('Deleted from browser bank');
}
function downloadTemplateFile(filename,text,mime){const blob=new Blob([text],{type:(mime||'text/plain')+';charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
async function materializeBank(){const failures=await loadTemplateBatch(BANK.map(t=>t.id),'Preparing export');if(failures)throw new Error('Export stopped: some files could not be loaded.');return BANK;}
async function exportBank(){try{const all=await materializeBank();downloadTemplateFile('oph_consult_bank_'+new Date().toISOString().slice(0,10)+'.json',JSON.stringify(all,null,2),'application/json');}catch(e){setBankStatus(e.message);}}
async function exportConsultGithub(){try{const all=await materializeBank();downloadTemplateFile('custom_templates.js','window.CGMH_CONSULT_TEMPLATES = '+JSON.stringify(all,null,2)+';\n','text/javascript');toast('Browser bank exported');}catch(e){setBankStatus(e.message);}}
function importBank(input){
 const file=input.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{
   try{const list=JSON.parse(reader.result);if(!Array.isArray(list)||list.some(t=>!t||typeof t.id!=='string'||typeof t.category!=='string'||typeof t.reply!=='string'))throw new Error('Invalid schema');
     for(const item of list){const t={...item,s:item.s||'',o:item.o||'',p:item.p||'',source:item.source||'Local template'};const i=BANK.findIndex(x=>x.id===t.id);if(i>=0)BANK[i]=t;else BANK.push(t);LOCAL_IDS.add(t.id);HIDDEN_IDS.delete(t.id);}saveBank();fillCatSelect();renderBank();toast('Imported '+list.length+' templates');
   }catch(e){alert('Invalid template JSON. Each entry needs id, category and reply.');}
 };reader.readAsText(file);input.value='';
}
function resetBank(){
 if(!confirm('Discard browser edits/additions and restore the external catalog?'))return;
 LOCAL_IDS.clear();HIDDEN_IDS.clear();BANK=JSON.parse(JSON.stringify(BUILTIN));saveBank();selId=null;selectionRevision++;
 document.getElementById('v-title').textContent='Select a template';document.getElementById('v-actions').style.display='none';document.getElementById('v-body').textContent='';document.getElementById('v-meta').textContent='';document.getElementById('v-source').hidden=true;fillCatSelect();renderBank();setBankStatus('Catalog restored. Full notes load when selected.');toast('Catalog restored');
}
