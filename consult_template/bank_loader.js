/* Loads individual static template files on demand, including file:// previews. */
(function(){
 'use strict';
 const cache=new Map(),pending=new Map(),quickCache=new Map(),quickPending=new Map();
 const base=new URL('./',document.currentScript.src);
 function script(file){
   if(!/^[a-zA-Z0-9_./-]+\.js$/.test(file)||file.includes('..'))return Promise.reject(new Error('Invalid bank path'));
   return new Promise((resolve,reject)=>{
     const el=document.createElement('script');el.src=new URL(file,base).href;
     el.onload=()=>{el.remove();resolve();};el.onerror=()=>{el.remove();reject(new Error('Could not load '+file));};
     document.head.appendChild(el);
   });
 }
 window.CGMHConsult={
   register(t){if(t&&typeof t.id==='string'&&typeof t.reply==='string')cache.set(t.id,t);},
   registerQuick(t){if(t&&typeof t.id==='string'&&typeof t.plan==='string')quickCache.set(t.id,t);},
   async loadQuick(meta){
     if(quickCache.has(meta.id))return quickCache.get(meta.id);
     if(!quickPending.has(meta.id))quickPending.set(meta.id,script(meta.quickFile).then(()=>{
       if(!quickCache.has(meta.id))throw new Error('General template did not load');
       return quickCache.get(meta.id);
     }).finally(()=>quickPending.delete(meta.id)));
     return quickPending.get(meta.id);
   },
   async load(meta){
     if(cache.has(meta.id))return cache.get(meta.id);
     if(!pending.has(meta.id))pending.set(meta.id,script(meta.file).then(()=>{
       if(!cache.has(meta.id))throw new Error('Template did not register: '+meta.sourceId);
       return cache.get(meta.id);
     }).finally(()=>pending.delete(meta.id)));
     return pending.get(meta.id);
   },
   async medications(){
     if(!Array.isArray(window.CGMH_CONSULT_MEDICATION_BLOCKS))await script('medication_blocks.js');
     if(!Array.isArray(window.CGMH_CONSULT_MEDICATION_BLOCKS))throw new Error('Medication blocks unavailable');
     return window.CGMH_CONSULT_MEDICATION_BLOCKS;
   }
 };
})();
