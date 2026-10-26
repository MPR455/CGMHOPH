// OPH Med tab — drug background shown under "?" (after the condition-specific note).
// Each entry: name, then [heading, line, line, ...] sections. **bold** is allowed.
// Doses/approvals as of 2025; always check the current label and Taiwan NHI criteria.
var OPHMED_DRUGS = {
  // ---------------- Anti-VEGF ----------------
  bevacizumab: { name: "Bevacizumab (Avastin; Lytenava = ophthalmic bevacizumab-gamma)", sec: [
    ["Name", "**beva-** (prefix, no meaning) · **-ci-** = circulatory/cardiovascular target (VEGF) · **-zu-** = humanized · **-mab** = monoclonal antibody", "VEGF = Vascular Endothelial Growth Factor: Latin *vasculum* 'little vessel' (from *vas*, vessel) + Greek *endon* 'within' + *thēlē* 'nipple' (endothelium)."],
    ["What it is", "**Full-length humanized IgG1**, ~149 kDa, made in CHO cells.", "Built from the **mouse** antibody A.4.6.1: mouse binding loops (CDRs) grafted onto a human frame → ~93% human, ~7% mouse."],
    ["Target", "Binds **all VEGF-A isoforms** (121, 165, 189…) → VEGF-A can't reach **VEGFR-1/VEGFR-2** on endothelial cells.", "Has an **Fc** tail → recycled by FcRn → long systemic half-life (~20 days) and the strongest drop in plasma VEGF of the older agents."],
    ["Status", "FDA 2004 for metastatic colorectal cancer (Genentech). **Intravitreal use is off-label** (since ~2005), split from the cancer vial by compounding pharmacies.", "EU approved an ophthalmic formulation (Lytenava, ONS-5010) for nAMD in 2024."],
    ["Eye dose", "**1.25 mg / 0.05 mL** intravitreal (ROP: 0.625 mg in BEAT-ROP; lower doses used now)."],
    ["Key trials", "**CATT / IVAN**: bevacizumab ≈ ranibizumab in nAMD.", "**Protocol T**: in DME with VA 20/50 or worse, aflibercept beat bevacizumab at 1 yr.", "**SCORE2**: bevacizumab non-inferior to aflibercept in CRVO oedema.", "**BEAT-ROP**: better than laser for zone I ROP."],
    ["Cautions", "Compounding risk: contamination outbreaks (e.g. streptococcal endophthalmitis clusters) and silicone-oil droplets from syringes.", "Most systemic exposure of the anti-VEGFs: caution after recent stroke/MI; avoid in pregnancy.", "Systemic (oncology) doses can rarely cause **PRES / cortical blindness**."]
  ]},
  ranibizumab: { name: "Ranibizumab (Lucentis; biosimilars Byooviz, Cimerli; Susvimo implant)", sec: [
    ["Name", "**ranibi-** (prefix, no meaning) · **-zu-** = humanized · **-mab** = monoclonal antibody."],
    ["What it is", "**Fab fragment** (antigen-binding piece only, no Fc), ~48 kDa, made in *E. coli* (not glycosylated).", "From the **same mouse parent antibody as bevacizumab**, then **affinity-matured** in the lab → binds VEGF-A more tightly than bevacizumab.", "Designed specifically for the eye: small enough to cross the retina; no Fc → cleared fast once it reaches the blood (serum half-life of hours), so less systemic VEGF suppression."],
    ["Target", "**All VEGF-A isoforms** → blocks VEGFR-1 and VEGFR-2 signalling (leak + new vessels)."],
    ["Status", "FDA **2006** (Genentech/Novartis) — first anti-VEGF to **improve** vision (not just slow loss).", "Biosimilars: **Byooviz** (SB11, 2021), **Cimerli** (2022).", "**Susvimo** = Port Delivery System: refillable implant, ranibizumab 100 mg/mL, refilled every 24 wk (FDA 2021; recalled 2022 for septum dislodgement; returned 2024)."],
    ["Eye dose", "**0.5 mg / 0.05 mL** (nAMD, RVO, mCNV; DME outside US).", "**0.3 mg / 0.05 mL** for DME/DR in the US.", "ROP: **0.2 mg / 0.02 mL** (RAINBOW, EU-approved)."],
    ["Key trials", "**MARINA** (vs sham) & **ANCHOR** (vs PDT) in nAMD.", "**RISE/RIDE** (DME), **BRAVO/CRUISE** (RVO), **RADIANCE** (mCNV), **RAINBOW** (ROP), **Protocol S** (vs PRP in PDR), **EVEREST II** (PCV + PDT)."],
    ["Cautions", "Usual intravitreal risks (endophthalmitis ~1 in 2000–3000, IOP spike, RD).", "Susvimo: higher endophthalmitis (~2%), conjunctival erosion/retraction, implant dislocation."]
  ]},
  aflibercept: { name: "Aflibercept 2 mg (Eylea; biosimilars Yesafili, Opuviz, Ahzantive, Enzeevu, Pavblu)", sec: [
    ["Name", "**afliber-** (prefix) · **-cept** = receptor fused to an antibody Fc (a 'receptor trap'). Development name: **VEGF Trap-Eye**."],
    ["What it is", "**Fusion protein**, ~115 kDa: **VEGFR-1 domain 2 + VEGFR-2 domain 3**, fused to the **Fc of human IgG1**.", "**Fully human** sequences; nothing from mouse (not an antibody, so no mouse CDRs).", "Acts as a soluble **decoy receptor**: grabs the ligand before it reaches the real receptors."],
    ["Target", "**VEGF-A** (all isoforms, very high affinity, Kd ~0.5 pM) + **VEGF-B** + **PlGF** (placental growth factor).", "Covering PlGF/VEGF-B (VEGFR-1 ligands) is the theoretical reason for longer duration."],
    ["Status", "FDA **2011** (Regeneron/Bayer). Systemic version ziv-aflibercept (Zaltrap) is an oncology drug with a different, hyperosmolar formulation — not for the eye.", "Several biosimilars FDA-approved in 2024."],
    ["Eye dose", "**2 mg / 0.05 mL**.", "nAMD: monthly ×3 → every 8 wk (VIEW), or treat-and-extend.", "DME: monthly ×5 → every 8 wk. RVO: monthly then extend. mCNV: 1 injection then PRN.", "ROP: **0.4 mg / 0.01 mL** (FDA 2023)."],
    ["Key trials", "**VIEW 1/2** (nAMD: q8w = monthly ranibizumab).", "**VIVID/VISTA** (DME), **Protocol T** (best in DME with VA ≤20/50), **COPERNICUS/GALILEO** (CRVO), **VIBRANT** (BRVO), **MYRROR** (mCNV), **PLANET** (PCV), **CLARITY** (PDR vs PRP), **Protocol W/PANORAMA** (NPDR), **FIREFLEYE** (ROP)."],
    ["Cautions", "Usual intravitreal risks. Fc → more systemic VEGF suppression than ranibizumab."]
  ]},
  aflibercept8: { name: "Aflibercept 8 mg (Eylea HD)", sec: [
    ["What it is", "Same molecule as aflibercept 2 mg at **4× the molar dose** (8 mg in 0.07 mL) → stays above the effective level longer."],
    ["Dose", "Monthly ×3 loading → every **8–16 wk** (longer extensions studied)."],
    ["Status", "FDA **2023** for nAMD, DME, DR."],
    ["Key trials", "**PULSAR** (nAMD) and **PHOTON** (DME): q12–16w non-inferior to 2 mg q8w."],
    ["Cautions", "As for aflibercept; the injected volume is slightly larger (0.07 mL)."]
  ]},
  brolucizumab: { name: "Brolucizumab (Beovu)", sec: [
    ["Name", "**brolu-** (prefix) · **-ci-** = circulatory target · **-zu-** = humanized · **-mab**."],
    ["What it is", "**Single-chain variable fragment (scFv)**, only ~26 kDa: the two variable domains joined by a linker, with no constant region or Fc. Made in *E. coli*.", "Being tiny, **6 mg** packs ~13× the molar dose of aflibercept 2 mg into 0.05 mL → strong drying, longer interval."],
    ["Target", "**All VEGF-A isoforms**."],
    ["Status", "FDA **2019** (nAMD), 2022 (DME). Use fell after safety signal."],
    ["Dose", "**6 mg / 0.05 mL**: nAMD q4w ×3 → q8–12w; DME q6w ×5 → q8–12w."],
    ["Key trials", "**HAWK/HARRIER** (nAMD; better fluid control than aflibercept), **KESTREL/KITE** (DME)."],
    ["⚠️ Safety", "**Intraocular inflammation ~4%** and **retinal vasculitis / retinal vascular occlusion** (can be blinding), linked to anti-drug antibodies.", "Examine for inflammation before every dose; stop if vasculitis; avoid if prior IOI with it."]
  ]},
  faricimab: { name: "Faricimab (Vabysmo)", sec: [
    ["Name", "**fari-** (prefix) · **-ci-** = circulatory target · **-mab** = monoclonal antibody (no -zu-/-u- source infix)."],
    ["What it is", "**Bispecific humanized IgG1** (~150 kDa, 'CrossMAb'): **one arm binds VEGF-A, the other binds angiopoietin-2 (Ang-2)**.", "Fc engineered to **not bind FcγR or FcRn** → less inflammation-triggering and faster systemic clearance."],
    ["Target & why Ang-2", "**Ang-1** activates the Tie2 receptor → stable, sealed vessels with pericyte cover. **Ang-2** (up in hypoxia, diabetes, inflammation) blocks Tie2 → vessels destabilise, leak, and become more sensitive to VEGF.", "Blocking **both** = 'dual pathway': aim is longer durability."],
    ["Status", "FDA **2022** (nAMD, DME), 2023 (RVO)."],
    ["Dose", "**6 mg / 0.05 mL**: q4w ×4 (nAMD; DME ×4–6) → treat-and-extend up to **q16w**."],
    ["Key trials", "**TENAYA/LUCERNE** (nAMD), **YOSEMITE/RHINE** (DME), **BALATON/COMINO** (RVO): non-inferior vision to aflibercept, with many eyes at q12–16w."],
    ["Cautions", "IOI similar to aflibercept; rare retinal vasculitis reports."]
  ]},
  conbercept: { name: "Conbercept (Lumitin; China)", sec: [
    ["Name", "**conber-** · **-cept** = receptor–Fc fusion."],
    ["What it is", "Fusion protein (~143 kDa): **VEGFR-1 domain 2 + VEGFR-2 domains 3 and 4** + human IgG1 Fc (the extra domain 4 improves binding stability vs aflibercept)."],
    ["Target", "VEGF-A, VEGF-B, PlGF."],
    ["Status", "Approved in China **2013** (Kanghong). Not FDA approved (global phase 3 PANDA trials stopped)."],
    ["Dose", "0.5 mg / 0.05 mL (PHOENIX)."]
  ]},
  pegaptanib: { name: "Pegaptanib (Macugen) — historical", sec: [
    ["Name", "**peg-** = PEGylated (polyethylene glycol attached, slows clearance) · **-apta-** = aptamer · **-anib** = angiogenesis inhibitor.", "*Aptamer*: Latin *aptus* 'fitted' + Greek *meros* 'part' — a short nucleic-acid strand folded to fit a target."],
    ["What it is", "28-nucleotide **RNA aptamer** (not a protein, not an antibody), ~50 kDa with PEG."],
    ["Target", "Only the **VEGF-165** isoform."],
    ["Status", "FDA **2004** — the **first** anti-VEGF for the eye. **VISION** trial: slowed vision loss but rarely improved it → replaced by ranibizumab/bevacizumab. Obsolete."],
    ["Dose", "0.3 mg every 6 wk."]
  ]},
  pipeline: { name: "Pipeline / longer-acting approaches (status changes fast)", sec: [
    ["TKI implants", "Block the VEGF **receptor's** tyrosine kinase inside the cell (so all VEGF ligands) from a slow-release implant: **vorolanib insert** (EYP-1901, Duravyu), **axitinib hydrogel** (OTX-TKI, Axpaxli) — phase 3."],
    ["Gene therapy", "Eye cells are made to produce their own anti-VEGF: **ABBV-RGX-314** (anti-VEGF Fab gene, subretinal/suprachoroidal), **4D-150** (aflibercept + anti-VEGF-C RNAi) — phase 3."],
    ["Antibody–polymer", "**Tarcocimab tedromer** (KSI-301): anti-VEGF antibody on a large biopolymer for longer stay — phase 3."],
    ["VEGF-C/D trap", "**Sozinibercept** (OPT-302): add-on blocking VEGF-C and -D; phase 3 trials reported not meeting the primary endpoint (2025)."]
  ]},
  // ---------------- Other intravitreal ----------------
  ozurdex: { name: "Dexamethasone implant 0.7 mg (Ozurdex)", sec: [
    ["What it is", "Biodegradable PLGA rod releasing dexamethasone over **~3–6 months**; injected with a 22G applicator."],
    ["Mechanism", "Corticosteroid → reduces VEGF, ICAM-1, prostaglandins and other cytokines; tightens the blood–retina barrier. Works on the **inflammatory** part of oedema that anti-VEGF misses."],
    ["Use", "DME (esp. **pseudophakic**, refractory, or can't come monthly; MEAD), RVO oedema (GENEVA), non-infectious posterior uveitis/uveitic CME (HURON, MERIT, POINT)."],
    ["Cautions", "**IOP rise ~30%** (peaks 6–8 wk), **cataract**; implant can migrate into AC in aphakia/ruptured capsule → corneal decompensation. Avoid in herpetic disease, advanced glaucoma."]
  ]},
  triam: { name: "Triamcinolone acetonide (Kenalog, Triesence)", sec: [
    ["Forms", "Intravitreal **4 mg/0.1 mL**; sub-Tenon or orbital floor **20–40 mg**; suprachoroidal (Xipere 4 mg, US)."],
    ["Mechanism", "Depot corticosteroid crystals; lasts ~3 months intravitreally."],
    ["Use", "Uveitic CME, DME (Protocol B/I), post-op CME, vitrectomy staining (visualise vitreous)."],
    ["Cautions", "IOP rise (more than Ozurdex), cataract; sterile 'pseudo-endophthalmitis'; preserved formulations are toxic intravitreally — use preservative-free."]
  ]},
  fluocinolone: { name: "Fluocinolone acetonide implant (Iluvien 0.19 mg; Yutiq 0.18 mg)", sec: [
    ["What it is", "Non-biodegradable micro-insert releasing steroid for **~3 years** (25G injector)."],
    ["Use", "Chronic DME after prior steroid without IOP rise (FAME); chronic non-infectious posterior uveitis."],
    ["Cautions", "Almost all phakic eyes get cataract; IOP-lowering surgery in a minority. Test steroid response first."]
  ]},
  pegcetacoplan: { name: "Pegcetacoplan (Syfovre) / Avacincaptad pegol (Izervay)", sec: [
    ["What they are", "**Pegcetacoplan**: PEGylated cyclic peptide that blocks complement **C3**. **Avacincaptad pegol**: PEGylated RNA **aptamer** against complement **C5**."],
    ["Why", "Geographic atrophy = complement over-activity (CFH risk genes) damaging RPE/photoreceptors. These **slow GA growth ~15–20%/yr**; they **don't restore vision**."],
    ["Dose", "Syfovre 15 mg/0.1 mL monthly or every other month (OAKS/DERBY, FDA 2023). Izervay 2 mg/0.1 mL monthly (GATHER1/2, FDA 2023)."],
    ["Cautions", "Conversion to **wet AMD** (more frequent with treatment); **occlusive retinal vasculitis** reported with pegcetacoplan; not available in Taiwan as of writing."]
  ]},
  verteporfin: { name: "Verteporfin photodynamic therapy (Visudyne PDT)", sec: [
    ["What it is", "IV photosensitiser (benzoporphyrin) 6 mg/m², then 689 nm laser 83 s → free radicals close abnormal choroidal vessels."],
    ["Use", "**PCV** with anti-VEGF (EVEREST II), chronic **CSC** (half-dose or half-fluence), some tumours (choroidal haemangioma)."],
    ["Cautions", "**Photosensitivity 48 h** (cover skin, avoid sunlight); infusion back pain; choroidal ischaemia with full dose."]
  ]}
};
