// OPH Med tab — condition -> meds. Edit here; ophmed.js only renders.
// Med row: [type, order text, "?" note ("｜" = new line, **bold** ok), situation tag (optional), drug key in OPHMED_DRUGS (optional)]
// type: d = drops/ointment, o = oral/systemic, i = injection/intravitreal, p = procedure/other
// Rows WITHOUT a situation tag are the usual core; tagged rows are "only if…" alternatives.
var OPHMED_VEGF_NOTE = ''
 + '<h4>Why block VEGF?</h4><ul>'
 + '<li>Ischaemic or sick retina/RPE → <b>HIF-1α</b> switches on → cells pour out <b>VEGF</b>.</li>'
 + '<li>VEGF does two things: <b>leak</b> (it was first discovered as <i>vascular permeability factor</i>, Senger &amp; Dvorak 1983) and <b>new vessels</b> (cloned as VEGF by Ferrara, 1989). Leak = macular oedema / subretinal fluid; new vessels = CNV, NVD/NVE, NVI, ROP.</li>'
 + '<li>Anti-VEGF dries the macula within days and regresses neovessels, but VEGF keeps being made → <b>repeated injections</b> (monthly → treat-and-extend).</li></ul>'
 + '<h4>The VEGF family and its receptors</h4><div class="om-tablewrap"><table><tr><th>Ligand</th><th>Binds</th><th>Main job</th></tr>'
 + '<tr><td><b>VEGF-A</b> (isoforms 121, 165, 189, 206 by splicing; <b>165</b> = main disease isoform)</td><td>VEGFR-1, <b>VEGFR-2</b></td><td>Leak + angiogenesis — the main target of every drug</td></tr>'
 + '<tr><td>VEGF-B</td><td>VEGFR-1</td><td>Survival / metabolic; minor role</td></tr>'
 + '<tr><td>PlGF (placental growth factor)</td><td>VEGFR-1</td><td>Recruits inflammatory cells, amplifies VEGF-A</td></tr>'
 + '<tr><td>VEGF-C, VEGF-D</td><td>VEGFR-3 (and VEGFR-2 when processed)</td><td>Lymphangiogenesis; possible escape route</td></tr></table></div>'
 + '<ul><li><b>VEGFR-1</b> (Flt-1): high affinity but weak signal — partly a decoy/modulator.</li>'
 + '<li><b>VEGFR-2</b> (KDR/Flk-1): the main signalling receptor for permeability and new vessels.</li>'
 + '<li><b>VEGFR-3</b> (Flt-4): lymphatics.</li>'
 + '<li>Second pathway: <b>Ang-1 → Tie2</b> keeps vessels stable; <b>Ang-2</b> blocks Tie2 → leaky, VEGF-sensitive vessels (target of faricimab).</li></ul>'
 + '<h4>Reading the drug names (WHO INN stems)</h4><ul>'
 + '<li><b>-mab</b> = monoclonal antibody. Source infix (used until 2017): <b>-u-</b> human, <b>-o-</b> mouse, <b>-xi-</b> chimeric (mouse variable + human constant), <b>-zu-</b> humanized (only the mouse binding loops kept, ~5–10% mouse).</li>'
 + '<li>Target infix: <b>-ci(r)-</b> = circulatory/cardiovascular → beva<b>ci</b>zumab, brolu<b>ci</b>zumab, fari<b>ci</b>mab.</li>'
 + '<li><b>-cept</b> = receptor fused to an IgG Fc ("trap") → afliber<b>cept</b>, conber<b>cept</b>.</li>'
 + '<li><b>-anib</b> = angiogenesis inhibitor; <b>peg-</b> = PEGylated → <b>peg</b>apt<b>anib</b>.</li>'
 + '<li>Brand names are marketing; the generic (INN) name is the one that tells you the structure.</li></ul>'
 + '<h4>Side by side</h4><div class="om-tablewrap"><table><tr><th>Agent</th><th>Structure</th><th>Size</th><th>Targets</th><th>Fc?</th><th>Origin</th><th>Dose</th></tr>'
 + '<tr><td>Pegaptanib</td><td>PEGylated RNA aptamer</td><td>~50 kDa</td><td>VEGF-165 only</td><td>–</td><td>Synthetic</td><td>0.3 mg (obsolete)</td></tr>'
 + '<tr><td>Bevacizumab</td><td>Full IgG1</td><td>149 kDa</td><td>All VEGF-A</td><td>Yes</td><td>Humanized mouse antibody</td><td>1.25 mg off-label</td></tr>'
 + '<tr><td>Ranibizumab</td><td>Fab</td><td>48 kDa</td><td>All VEGF-A</td><td>No</td><td>Humanized, affinity-matured (same mouse parent)</td><td>0.5 / 0.3 mg</td></tr>'
 + '<tr><td>Aflibercept</td><td>VEGFR1 D2 + VEGFR2 D3 + IgG1 Fc</td><td>115 kDa</td><td>VEGF-A, VEGF-B, PlGF</td><td>Yes</td><td>Fully human fusion protein</td><td>2 mg / 8 mg</td></tr>'
 + '<tr><td>Conbercept</td><td>VEGFR1 D2 + VEGFR2 D3–4 + Fc</td><td>143 kDa</td><td>VEGF-A, VEGF-B, PlGF</td><td>Yes</td><td>Human fusion protein</td><td>0.5 mg (China)</td></tr>'
 + '<tr><td>Brolucizumab</td><td>scFv</td><td>26 kDa</td><td>All VEGF-A</td><td>No</td><td>Humanized</td><td>6 mg</td></tr>'
 + '<tr><td>Faricimab</td><td>Bispecific IgG1</td><td>150 kDa</td><td>VEGF-A + Ang-2</td><td>Silenced</td><td>Humanized</td><td>6 mg</td></tr></table></div>'
 + '<h4>Every intravitreal injection</h4><ul><li>Povidone-iodine 5% to the conjunctiva, lid speculum, 30G needle 3.5–4 mm behind the limbus (3–3.5 mm if pseudophakic).</li>'
 + '<li>Check perfusion after (count fingers / CRA pulsation); warn: pain, worse vision, redness → come back same day (endophthalmitis ~1 in 2000–3000).</li>'
 + '<li>Caution: recent stroke/MI (theoretical systemic VEGF suppression), pregnancy (avoid), active ocular/periocular infection (contraindicated).</li>'
 + '<li>Taiwan: NHI pays for anti-VEGF only with prior approval (事前審查) and per-indication limits — check the current criteria before booking.</li></ul>';

var OPHMED_MENU = [
{ slug: "retina", title: "Retina & anti-VEGF", icon: "🎯", blurb: "AMD, DME, RVO, PDR, ROP", items: [
  { name: "Anti-VEGF agents — compare & background", hint: "Tap ? on each drug: name meaning, structure, mouse vs human, receptors, trials", note: OPHMED_VEGF_NOTE, meds: [
    ["i", "Aflibercept 2 mg/0.05 mL (Eylea) IVI", "VEGF-A + VEGF-B + PlGF trap; workhorse for nAMD, DME, RVO, mCNV, ROP.", "", "aflibercept"],
    ["i", "Aflibercept 8 mg/0.07 mL (Eylea HD) IVI", "High-dose aflibercept: intervals up to q16w.", "", "aflibercept8"],
    ["i", "Faricimab 6 mg/0.05 mL (Vabysmo) IVI", "Bispecific VEGF-A + Ang-2: intervals up to q16w.", "", "faricimab"],
    ["i", "Ranibizumab 0.5 mg/0.05 mL (Lucentis) IVI", "Fab fragment; first anti-VEGF to improve vision; biosimilars available.", "", "ranibizumab"],
    ["i", "Bevacizumab 1.25 mg/0.05 mL (Avastin) IVI", "Off-label, cheapest; compounded from the cancer vial.", "off-label", "bevacizumab"],
    ["i", "Brolucizumab 6 mg/0.05 mL (Beovu) IVI", "Small scFv, strong drying; watch for retinal vasculitis.", "selected cases", "brolucizumab"],
    ["i", "Conbercept 0.5 mg/0.05 mL (Lumitin) IVI", "Chinese aflibercept-like trap.", "China", "conbercept"],
    ["i", "Ranibizumab port delivery system (Susvimo) 100 mg/mL", "Refillable implant, refill every 24 wk.", "US", "ranibizumab"],
    ["i", "Pegaptanib 0.3 mg (Macugen)", "First anti-VEGF (2004), now obsolete.", "historical", "pegaptanib"],
    ["p", "Pipeline: TKI implants, gene therapy, biopolymer conjugates", "Longer-acting approaches in phase 3.", "investigational", "pipeline"]
  ]},
  { name: "Neovascular (wet) AMD", hint: "incl. polypoidal choroidal vasculopathy (PCV) — common in Taiwan", meds: [
    ["i", "Aflibercept 2 mg IVI monthly ×3 → q8w or treat-and-extend", "**VIEW 1/2**: q8w after 3 loading = monthly ranibizumab.｜T&E: extend 2 wk at a time while dry, shorten if fluid returns.", "", "aflibercept"],
    ["i", "Faricimab 6 mg IVI q4w ×4 → q8–16w", "**TENAYA/LUCERNE**: non-inferior to aflibercept q8w; ~45% at q16w by 1 yr.", "", "faricimab"],
    ["i", "Aflibercept 8 mg IVI monthly ×3 → q12–16w", "**PULSAR**: q12/16w non-inferior to 2 mg q8w.", "", "aflibercept8"],
    ["i", "Ranibizumab 0.5 mg IVI monthly → PRN / T&E", "**MARINA/ANCHOR**: ~1/3 gained ≥15 letters with monthly dosing.", "", "ranibizumab"],
    ["i", "Bevacizumab 1.25 mg IVI monthly", "**CATT/IVAN**: equal to ranibizumab; NHI rules / cost decide use.", "off-label", "bevacizumab"],
    ["i", "Brolucizumab 6 mg IVI q4w ×3 → q8–12w", "**HAWK/HARRIER**: better fluid control; IOI/vasculitis risk.", "refractory", "brolucizumab"],
    ["p", "Verteporfin PDT + anti-VEGF", "**PCV**: **EVEREST II** — ranibizumab + PDT gave better vision and polyp closure than ranibizumab alone.｜**PLANET**: aflibercept alone works well; PDT as rescue.", "PCV", "verteporfin"],
    ["o", "AREDS2 supplement: vit C 500 mg, vit E 400 IU, zinc 80 mg (oxide), copper 2 mg, lutein 10 mg, zeaxanthin 2 mg daily", "For the **fellow eye** / intermediate AMD: **AREDS** reduced progression to advanced AMD by ~25% over 5 yr.｜AREDS2 swapped beta-carotene (lung cancer in smokers) for lutein/zeaxanthin.", "intermediate AMD / fellow eye"],
    ["p", "Amsler grid at home; stop smoking", "Smoking is the main modifiable risk factor."]
  ]},
  { name: "Diabetic macular oedema (centre-involved)", hint: "Anti-VEGF first; steroid for pseudophakic/refractory", meds: [
    ["i", "Aflibercept 2 mg IVI monthly ×5 → q8w / T&E", "**Protocol T**: if VA **20/50 or worse**, aflibercept > bevacizumab (and > ranibizumab at 1 yr; = ranibizumab by 2 yr).｜**VIVID/VISTA**.", "", "aflibercept"],
    ["i", "Faricimab 6 mg IVI q4w ×4–6 → T&E up to q16w", "**YOSEMITE/RHINE**: non-inferior to aflibercept, more eyes at q16w.", "", "faricimab"],
    ["i", "Ranibizumab 0.3–0.5 mg IVI monthly → PRN/T&E", "**RISE/RIDE**; also slows DR progression.", "", "ranibizumab"],
    ["i", "Bevacizumab 1.25 mg IVI monthly", "Fine when VA is 20/40 or better (Protocol T).｜**Protocol AC**: start bevacizumab, switch to aflibercept if poor response = as good as aflibercept first.", "VA ≥20/40", "bevacizumab"],
    ["i", "Aflibercept 8 mg IVI monthly ×3 → q12–16w", "**PHOTON**.", "", "aflibercept8"],
    ["i", "Dexamethasone implant 0.7 mg (Ozurdex) q3–6 mo", "Pseudophakic, poor anti-VEGF response, recent MI/stroke, can't attend monthly, pregnancy.｜**MEAD**.", "pseudophakic / refractory", "ozurdex"],
    ["i", "Fluocinolone implant 0.19 mg (Iluvien)", "Chronic DME, prior steroid without IOP rise. **FAME**.", "chronic", "fluocinolone"],
    ["p", "Observe if VA 20/25 or better", "**Protocol V**: observation (inject if VA drops) = immediate anti-VEGF or laser at 2 yr.", "good VA"],
    ["p", "Focal/grid laser", "Non-centre-involved DME with leakage (ETDRS CSME).", "non-centre-involved"],
    ["p", "Control HbA1c, BP, lipids; fenofibrate", "Fenofibrate slowed DR progression (**FIELD, ACCORD-Eye**)."]
  ]},
  { name: "Proliferative diabetic retinopathy / vitreous haemorrhage", hint: "PRP vs anti-VEGF", meds: [
    ["p", "Panretinal photocoagulation (PRP)", "Standard since **DRS/ETDRS** (halves severe vision loss in high-risk PDR).｜Best if follow-up is unreliable — durable.｜Side effects: peripheral field loss, night vision, worsened DME."],
    ["i", "Aflibercept 2 mg / ranibizumab 0.5 mg IVI, monthly then PRN", "**Protocol S**: ranibizumab non-inferior to PRP at 2 yr with less field loss and less DME/vitrectomy (similar at 5 yr).｜**CLARITY**: aflibercept better than PRP at 1 yr.｜⚠️ Needs reliable follow-up — lost-to-follow-up eyes on anti-VEGF alone do worse.", "reliable follow-up", "aflibercept"],
    ["i", "Bevacizumab 1.25 mg IVI 3–7 days before vitrectomy", "Shrinks fibrovascular membranes → less bleeding during surgery.｜⚠️ Can tighten traction ('crunch') → TRD; operate within ~1 week.", "pre-vitrectomy", "bevacizumab"],
    ["i", "Aflibercept IVI for dense VH", "**Protocol AB**: aflibercept vs early vitrectomy → similar 2-yr vision; vitrectomy clears vision faster.", "vitreous haemorrhage", "aflibercept"],
    ["p", "Pars plana vitrectomy + endolaser", "Non-clearing VH, macula-threatening TRD, combined TRD/RRD.", "non-clearing / TRD"],
    ["i", "Anti-VEGF for severe NPDR (prevention)", "**Protocol W / PANORAMA**: fewer complications, but **no vision benefit** at 4 yr — not routine.", "severe NPDR", "aflibercept"]
  ]},
  { name: "Macular oedema after retinal vein occlusion", hint: "BRVO / CRVO / HRVO", meds: [
    ["i", "Aflibercept 2 mg IVI monthly → extend", "**COPERNICUS/GALILEO** (CRVO), **VIBRANT** (BRVO: beat grid laser).｜**LEAVO** (CRVO): aflibercept non-inferior to ranibizumab; bevacizumab not shown non-inferior.", "", "aflibercept"],
    ["i", "Ranibizumab 0.5 mg IVI monthly ×6 → PRN", "**BRAVO/CRUISE**.", "", "ranibizumab"],
    ["i", "Bevacizumab 1.25 mg IVI monthly", "**SCORE2**: non-inferior to aflibercept at 6 mo in CRVO.", "off-label", "bevacizumab"],
    ["i", "Faricimab 6 mg IVI q4w ×6 → T&E", "**BALATON/COMINO**.", "", "faricimab"],
    ["i", "Dexamethasone implant 0.7 mg (Ozurdex)", "**GENEVA**; pseudophakic, frequent-injection burden, recent CV event.", "second line", "ozurdex"],
    ["p", "PRP if NVI/NVA or retinal/disc NV", "CVOS: don't give prophylactic PRP in ischaemic CRVO — watch monthly ×6 mo for NVI/NVA (gonioscopy)."],
    ["p", "Work-up: BP, glucose, lipids, IOP (glaucoma), FBC; thrombophilia if young", "Hypertension is the strongest risk factor; treat glaucoma (CRVO risk)."]
  ]},
  { name: "Myopic CNV", hint: "Usually 1–3 injections", meds: [
    ["i", "Ranibizumab 0.5 mg IVI, 1 dose → PRN", "**RADIANCE**: PRN by disease activity beat PDT; median ~2–3 injections in yr 1.", "", "ranibizumab"],
    ["i", "Aflibercept 2 mg IVI, 1 dose → PRN", "**MYRROR**.", "", "aflibercept"],
    ["i", "Bevacizumab 1.25 mg IVI", "Commonly used, similar effect.", "off-label", "bevacizumab"]
  ]},
  { name: "Retinopathy of prematurity", hint: "Zone I / posterior zone II, AP-ROP", meds: [
    ["i", "Bevacizumab 0.625 mg/0.025 mL IVI (lower doses now common)", "**BEAT-ROP**: fewer recurrences than laser in **zone I**, not zone II.｜Less myopia than laser; peripheral retina keeps developing.", "zone I / AP-ROP", "bevacizumab"],
    ["i", "Ranibizumab 0.2 mg/0.02 mL IVI", "**RAINBOW**: treatment success numerically higher than laser.", "", "ranibizumab"],
    ["i", "Aflibercept 0.4 mg/0.01 mL IVI", "**FIREFLEYE/BUTTERFLEYE**; FDA 2023.", "", "aflibercept"],
    ["p", "Laser photocoagulation to avascular retina", "**ETROP** type 1 ROP standard; durable, but field loss and more myopia."],
    ["p", "Follow after anti-VEGF until ≥65 wk PMA / full vascularisation", "⚠️ **Late reactivation** can occur months later. Systemic VEGF suppression — neurodevelopment concerns still studied."]
  ]},
  { name: "Geographic atrophy (dry AMD)", hint: "Complement inhibitors slow growth only", meds: [
    ["i", "Pegcetacoplan 15 mg/0.1 mL (Syfovre) IVI monthly / EOM", "Slows lesion growth; no vision gain. **OAKS/DERBY**.", "where available", "pegcetacoplan"],
    ["i", "Avacincaptad pegol 2 mg/0.1 mL (Izervay) IVI monthly", "**GATHER1/2**.", "where available", "pegcetacoplan"],
    ["o", "AREDS2 formula", "Does not slow GA itself, but use for intermediate AMD/fellow eye.", "fellow eye"],
    ["p", "Low-vision rehabilitation", "Magnifiers, lighting, eccentric viewing training."]
  ]},
  { name: "Central serous chorioretinopathy", hint: "Most resolve in 3 months", meds: [
    ["p", "Stop all steroids (any route, incl. creams, inhalers, nasal sprays)", "Steroids are the classic trigger; also stress, type A, pregnancy, H. pylori, PDE-5 inhibitors."],
    ["p", "Observe 3 months", "~80–90% of acute CSC resolves spontaneously."],
    ["p", "Half-dose verteporfin PDT", "Chronic (>3–4 mo) or recurrent CSC; **PLACE** trial: better than micropulse laser.", "chronic", "verteporfin"],
    ["o", "Eplerenone 25–50 mg daily", "**VICI** trial: **no benefit** over placebo — not recommended routinely.", "not recommended"],
    ["i", "Anti-VEGF", "Only if secondary CNV develops.", "secondary CNV", "aflibercept"]
  ]},
  { name: "Cystoid macular oedema after cataract (Irvine–Gass)", hint: "Peak 4–6 wk post-op", meds: [
    ["d", "Nepafenac 0.1% TID (or bromfenac 0.09% BID / ketorolac 0.5% QID)", "NSAID blocks COX → fewer prostaglandins (main driver of post-op CME).｜Combine with steroid — synergistic.｜⚠️ Corneal melt with prolonged NSAID, esp. dry eye/RA."],
    ["d", "Prednisolone acetate 1% QID", "Steroid + NSAID ×1–3 months, then taper."],
    ["i", "Sub-Tenon triamcinolone 40 mg / intravitreal 4 mg", "Refractory after 1–2 months of drops.", "refractory", "triam"],
    ["i", "Dexamethasone implant 0.7 mg (Ozurdex)", "Persistent CME.", "refractory", "ozurdex"],
    ["o", "Acetazolamide 250 mg BID", "Helps fluid pump across the RPE; adjunct.", "adjunct"]
  ]}
]},
{ slug: "infection", title: "Infection", icon: "🦠", blurb: "Conjunctivitis, ulcers, herpes, cellulitis, endophthalmitis", items: [
  { name: "Bacterial conjunctivitis", hint: "Mucopurulent discharge, lids stuck in the morning", meds: [
    ["d", "Levofloxacin 0.5% (Cravit) 1 gtt QID ×5–7 d", "Fluoroquinolone: blocks DNA gyrase/topoisomerase IV → bactericidal, broad Gram+/Gram−.｜Most cases self-limit; antibiotic shortens course."],
    ["d", "Moxifloxacin 0.5% (Vigamox) TID ×7 d", "4th-gen FQ: better Gram+ cover.", "alternative"],
    ["d", "Tobramycin 0.3% (Tobrex) QID ×7 d", "Aminoglycoside (30S); Gram− incl. Pseudomonas; epithelial toxicity.", "alternative"],
    ["d", "Erythromycin 0.5% ointment QID", "Children; easier than drops.", "children"],
    ["o", "Ceftriaxone 1 g IM single dose + saline lavage + admit/close review", "**Gonococcal** (hyperacute, copious pus): can perforate cornea within 24–48 h. Gram stain + culture; treat partner; co-treat chlamydia.", "gonococcal"],
    ["o", "Azithromycin 1 g PO single dose", "Chlamydial (inclusion) conjunctivitis, or GC co-treatment. Treat partner.｜Alternative doxycycline 100 mg BID ×7 d (not in pregnancy/children).", "chlamydia"]
  ]},
  { name: "Bacterial keratitis (corneal ulcer)", hint: "Scrape & culture first", meds: [
    ["p", "Corneal scraping: Gram stain, KOH, culture (blood/chocolate/Sabouraud), before antibiotics", "Culture if: central, >2 mm, deep, CL wearer, atypical, not improving."],
    ["d", "Levofloxacin 0.5% / moxifloxacin 0.5% q1h day & night ×48 h → taper", "Monotherapy fine for small, peripheral, non-severe ulcers."],
    ["d", "Fortified cefazolin 50 mg/mL q1h + fortified tobramycin 14 mg/mL q1h (alternate)", "Large, central, deep ulcers: fortified dual therapy covers Gram+ (cefazolin) and Gram− incl. Pseudomonas (tobramycin).", "severe / central"],
    ["d", "Fortified vancomycin 25–50 mg/mL q1h", "MRSA or resistant Gram+.", "MRSA"],
    ["d", "Cyclopentolate 1% TID", "Cycloplegia: pain relief and prevents synechiae."],
    ["d", "Prednisolone acetate 1% QID after 48–72 h of clear improvement", "**SCUT**: no overall benefit, possible benefit in severe non-Nocardia ulcers if started early. Never if fungal/Acanthamoeba not excluded.", "selected"],
    ["o", "Doxycycline 100 mg BID", "Inhibits MMPs → reduces corneal melting.", "melting"]
  ]},
  { name: "Fungal keratitis", hint: "Plant trauma, feathery edges, satellites", meds: [
    ["d", "Natamycin 5% q1h", "Filamentous fungi (**Fusarium**, Aspergillus). **MUTT I**: natamycin > voriconazole for filamentous, esp. Fusarium.｜Polyene: binds ergosterol in fungal membranes."],
    ["d", "Amphotericin B 0.15% q1h", "**Yeasts (Candida)**.", "yeast"],
    ["d", "Voriconazole 1% q1h", "Azole: blocks ergosterol synthesis; good penetration.", "add-on / Aspergillus"],
    ["o", "Voriconazole 200 mg PO BID", "Deep stromal or near-perforation. **MUTT II**: adding oral vori gave no overall benefit.", "deep"],
    ["i", "Intrastromal / intracameral voriconazole 50 µg/0.1 mL", "Deep lesions not responding.", "refractory"],
    ["p", "No steroids; early therapeutic keratoplasty if progressing", "Steroids worsen fungal keratitis."]
  ]},
  { name: "Acanthamoeba keratitis", hint: "Contact lens + water; pain out of proportion; ring infiltrate", meds: [
    ["d", "PHMB 0.02% (or chlorhexidine 0.02%) hourly, slow taper over months", "Biguanide: damages cyst & trophozoite membranes.｜**Polihexanide 0.08%** (Akantior) EU-approved 2024."],
    ["d", "Propamidine 0.1% (Brolene) hourly", "Diamidine; often combined with a biguanide.", "combination"],
    ["o", "NSAID (e.g. naproxen 250–500 mg BID)", "Pain / scleritis.", "pain"],
    ["p", "Avoid early steroids; confocal microscopy / PCR to confirm", "Often misdiagnosed as HSV (pseudodendrites)."]
  ]},
  { name: "HSV epithelial keratitis (dendrite)", hint: "Dendrite with terminal bulbs", meds: [
    ["d", "Ganciclovir 0.15% gel 5×/day until healed, then TID ×7 d", "Nucleoside analogue activated by viral thymidine kinase → stops viral DNA polymerase. Less toxic than trifluridine."],
    ["o", "Acyclovir 400 mg 5×/day ×7–10 d", "Oral as effective as topical; useful in children/poor compliance.｜Valacyclovir 500 mg TID is an alternative.", "alternative"],
    ["d", "Trifluridine 1% 9×/day (max 21 d)", "Epithelial toxicity.", "alternative"],
    ["p", "Gentle epithelial debridement", "Speeds healing.", "adjunct"],
    ["p", "No steroid for epithelial disease", "Steroids make dendrites spread (geographic ulcer)."]
  ]},
  { name: "HSV stromal keratitis / keratouveitis", hint: "Immune stromal haze, no ulcer", meds: [
    ["d", "Prednisolone acetate 1% QID, very slow taper (weeks–months)", "**HEDS**: steroid speeds resolution of stromal keratitis — always with antiviral cover."],
    ["o", "Acyclovir 400 mg BID (cover while on steroid; long-term prophylaxis)", "**HEDS**: 400 mg BID for 1 yr halved recurrences (esp. stromal).｜Valacyclovir 500 mg daily alternative."],
    ["o", "Acyclovir 800 mg 5×/day", "Active HSV keratouveitis / endotheliitis (raised IOP, KPs).", "keratouveitis"]
  ]},
  { name: "Herpes zoster ophthalmicus", hint: "V1 dermatome; Hutchinson sign = nose tip", meds: [
    ["o", "Valacyclovir 1 g TID ×7 d (start within 72 h of rash)", "Reduces ocular complications by ~50% if started early. Treat even after 72 h if new lesions.｜Adjust dose for renal function."],
    ["o", "Acyclovir 800 mg 5×/day ×7–10 d", "Alternative; IV 10 mg/kg q8h if immunocompromised/disseminated.", "alternative"],
    ["o", "Famciclovir 500 mg TID ×7 d", "Alternative.", "alternative"],
    ["d", "Prednisolone acetate 1% for stromal keratitis / uveitis, slow taper", "Under antiviral cover; many need long, low-dose tapers.", "keratitis / uveitis"],
    ["d", "Erythromycin ointment to skin lesions BID", "Prevents secondary bacterial infection of the rash.", "skin"],
    ["o", "Valacyclovir 1 g daily suppression ×1 yr", "**ZEDS**: did not reduce the 12-month primary endpoint but reduced repeated flares later — individualise.", "recurrent eye disease"],
    ["p", "Recombinant zoster vaccine (Shingrix) ≥50 y", "Prevention (~90%). Discuss once acute episode resolved."]
  ]},
  { name: "Adenoviral conjunctivitis (EKC)", hint: "Watery, follicles, preauricular node, contagious ~2 wk", meds: [
    ["d", "Preservative-free artificial tears QID–hourly + cold compresses", "Supportive; self-limiting 2–3 weeks."],
    ["p", "Hygiene: hand washing, separate towels, off work ~2 wk; clean tonometer", "Highly contagious; most clinic outbreaks spread via instruments."],
    ["p", "Peel pseudomembranes", "Prevents symblepharon and discomfort.", "membranes"],
    ["d", "Loteprednol 0.5% QID short taper", "Subepithelial infiltrates reducing vision or membranes — may prolong viral shedding; can recur on stopping.", "SEIs / membranes"],
    ["d", "Cyclosporine 0.05–0.1% BID", "Steroid-sparing for chronic SEIs.", "chronic SEIs"]
  ]},
  { name: "Neonatal conjunctivitis (ophthalmia neonatorum)", hint: "Day 1 chemical · 2–5 GC · 5–14 chlamydia · HSV", meds: [
    ["o", "Ceftriaxone 25–50 mg/kg IV/IM single dose (max 125 mg) + saline lavage", "**Gonococcal** (day 2–5): corneal perforation risk; admit; check for disseminated infection.", "gonococcal"],
    ["o", "Erythromycin 50 mg/kg/day PO in 4 doses ×14 d", "**Chlamydia** (day 5–14): systemic to prevent pneumonitis; infantile hypertrophic pyloric stenosis risk.｜Azithromycin 20 mg/kg daily ×3 d alternative.", "chlamydia"],
    ["o", "Acyclovir 20 mg/kg IV q8h ×14–21 d", "**HSV**: risk of disseminated/CNS disease — paediatrics referral.", "HSV"],
    ["p", "Treat mother and partner", "STI in parents."]
  ]},
  { name: "Preseptal cellulitis", hint: "No proptosis, normal motility & vision", meds: [
    ["o", "Amoxicillin-clavulanate 875/125 mg BID ×7–10 d (child 25–45 mg/kg/day amoxicillin)", "Covers Staph, Strep, H. influenzae, sinus flora."],
    ["o", "Clindamycin 300 mg QID / cefuroxime / doxycycline", "Penicillin allergy or MRSA risk.", "allergy / MRSA"],
    ["p", "Admit if child <1 y, toxic, not improving in 24–48 h, or can't exclude orbital", "Preseptal can progress to orbital in young children."]
  ]},
  { name: "Orbital cellulitis", hint: "Proptosis, painful motility, ↓VA/RAPD → emergency", meds: [
    ["o", "Ceftriaxone 1–2 g IV q12–24h + vancomycin 15–20 mg/kg IV q8–12h", "Broad cover incl. MRSA; usually from ethmoid sinusitis."],
    ["o", "Metronidazole 500 mg IV q8h", "Anaerobes: dental source, chronic sinusitis, intracranial extension.", "anaerobic / intracranial"],
    ["p", "CT orbit + sinuses with contrast; ENT consult", "Look for subperiosteal/orbital abscess, cavernous sinus thrombosis."],
    ["p", "Surgical drainage", "Large abscess, optic nerve compromise, no improvement in 24–48 h, adult (polymicrobial).", "abscess"],
    ["d", "Nasal decongestant (oxymetazoline) ×3 d", "Opens sinus ostia.", "adjunct"]
  ]},
  { name: "Endophthalmitis (post-op / post-injection)", hint: "Pain, ↓VA, hypopyon, vitritis → same day", meds: [
    ["p", "Vitreous tap or vitrectomy biopsy: Gram stain + culture (± PCR)", "Most common organism: coagulase-negative Staph."],
    ["i", "Vancomycin 1 mg/0.1 mL intravitreal", "Gram+ cover (incl. MRSA)."],
    ["i", "Ceftazidime 2.25 mg/0.1 mL intravitreal (amikacin 0.4 mg/0.1 mL if allergic)", "Gram− cover. Separate syringes (precipitate)."],
    ["p", "Pars plana vitrectomy", "**EVS**: immediate PPV if vision is **light perception only** (3× more likely to reach 20/40).｜Lower threshold now for early PPV.", "LP vision"],
    ["i", "Dexamethasone 0.4 mg/0.1 mL intravitreal", "Adjunct to reduce inflammation; evidence mixed.", "optional"],
    ["o", "Moxifloxacin 400 mg PO daily", "Good vitreous penetration; adjunct.", "adjunct"],
    ["i", "Amphotericin B 5–10 µg/0.1 mL or voriconazole 100 µg/0.1 mL intravitreal + systemic antifungal", "**Endogenous fungal** (Candida): IV drug use, lines, TPN. Blood cultures, echo.", "fungal / endogenous"]
  ]},
  { name: "Blepharitis / MGD / Demodex / hordeolum", hint: "Chronic lid-margin disease", meds: [
    ["p", "Warm compresses 5–10 min + lid massage & hygiene BID", "Mainstay; long-term."],
    ["d", "Azithromycin 1% (AzaSite) BID ×2 d then daily ×2–4 wk", "Anti-inflammatory + antibacterial on lid margin.", "moderate"],
    ["o", "Doxycycline 50–100 mg daily ×6–12 wk (or azithromycin 500 mg ×3 d pulses)", "Sub-antimicrobial dose: MMP and lipase inhibition, better meibum.｜Not <8 y or pregnancy (teeth/bone).", "MGD / rosacea"],
    ["d", "Lotilaner 0.25% (Xdemvy) BID ×6 wk", "**Demodex** (cylindrical dandruff): GABA-Cl channel blocker paralyses mites. Tea-tree oil alternative.", "Demodex"],
    ["d", "Erythromycin ointment HS", "Staphylococcal blepharitis.", "staph"],
    ["p", "Hordeolum: warm compresses; incision & drainage if pointing; chalazion: I&C or triamcinolone injection", "Oral antibiotic only if spreading cellulitis.", "stye / chalazion"]
  ]}
]},
{ slug: "inflammation", title: "Uveitis & scleritis", icon: "🔥", blurb: "Anterior, posterior, infectious, scleritis", items: [
  { name: "Acute anterior uveitis (non-infectious)", hint: "HLA-B27 etc.; exclude infection first", meds: [
    ["d", "Prednisolone acetate 1% q1–2h while awake → taper over 4–6 wk", "Shake the bottle (suspension). Taper by response (cells), not by calendar.｜Watch IOP (steroid response) and cataract."],
    ["d", "Difluprednate 0.05% (Durezol) QID", "More potent (≈ pred acetate 8×/day); higher IOP rise.", "severe"],
    ["d", "Cyclopentolate 1% TID", "Pain relief (ciliary spasm) and breaks/prevents posterior synechiae."],
    ["d", "Atropine 1% BID + phenylephrine 2.5–10%", "Severe inflammation, fibrin, or to break fresh synechiae.", "severe"],
    ["i", "Sub-conjunctival dexamethasone / sub-Tenon triamcinolone 40 mg", "Severe/poor compliance; uveitic CME.", "severe", "triam"],
    ["p", "Work-up if recurrent, bilateral, granulomatous or posterior: CBC, ESR/CRP, syphilis serology, CXR/TB test, HLA-B27, ACE/lysozyme", "Always exclude **syphilis** and **TB** before systemic immunosuppression."]
  ]},
  { name: "Non-infectious intermediate / posterior / panuveitis", hint: "VKH, Behçet, sarcoid, birdshot…", meds: [
    ["o", "Prednisolone 1 mg/kg/day (max 60–80 mg) → taper to ≤7.5 mg/day by 3 mo", "If you can't get below 7.5 mg/day → add steroid-sparing agent.｜Bone protection, PPI, check glucose/BP."],
    ["o", "Methylprednisolone 1 g IV daily ×3 d", "Severe sight-threatening disease (VKH, Behçet flare, serpiginous).", "severe"],
    ["o", "Methotrexate 15–25 mg once WEEKLY + folic acid 1 mg daily", "Antimetabolite (DHFR inhibitor). **FAST**: methotrexate ≈ mycophenolate (MTX trend better).｜LFT/CBC monitoring; avoid alcohol/pregnancy.", "steroid-sparing"],
    ["o", "Mycophenolate mofetil 1–1.5 g BID", "IMPDH inhibitor → stops lymphocyte proliferation.", "steroid-sparing"],
    ["o", "Azathioprine 2 mg/kg/day", "Check TPMT first; Behçet evidence.", "steroid-sparing"],
    ["o", "Cyclosporine 2.5–5 mg/kg/day", "Calcineurin inhibitor; BP, renal function. Behçet, VKH.", "steroid-sparing"],
    ["i", "Adalimumab 80 mg SC → 40 mg SC every 2 wk", "Anti-TNF-α (fully human: **-u-mab**). **VISUAL I/II**: fewer treatment failures. Screen TB/HBV; avoid in demyelinating disease.", "biologic"],
    ["i", "Infliximab 5 mg/kg IV wk 0, 2, 6 → q4–8w", "Chimeric anti-TNF (**-xi-mab**); fast for **Behçet**.", "Behçet"],
    ["i", "Dexamethasone implant / fluocinolone implant", "Local therapy for unilateral or CME-dominant disease (**POINT**, **MERIT**, **PSV-FAI**).", "local", "ozurdex"]
  ]},
  { name: "Uveitic macular oedema", hint: "Most common cause of vision loss in uveitis", meds: [
    ["i", "Intravitreal triamcinolone 4 mg or dexamethasone implant 0.7 mg", "**POINT**: intravitreal (triamcinolone or Ozurdex) better than periocular triamcinolone.｜**MERIT**: Ozurdex better than ranibizumab or methotrexate.", "", "ozurdex"],
    ["i", "Sub-Tenon triamcinolone 40 mg", "Less IOP risk; less effective.", "periocular", "triam"],
    ["d", "Nepafenac 0.1% TID / ketorolac 0.5% QID", "Adjunct.", "adjunct"],
    ["o", "Acetazolamide 250 mg BID", "Adjunct.", "adjunct"]
  ]},
  { name: "Toxoplasma retinochoroiditis", hint: "Headlight in fog next to old scar", meds: [
    ["o", "Trimethoprim-sulfamethoxazole 160/800 mg BID ×4–6 wk", "Cheap, well tolerated; similar to classic therapy. Treat if near disc/macula, large, or immunocompromised."],
    ["o", "Pyrimethamine 100 mg load → 25–50 mg daily + sulfadiazine 1 g QID + folinic acid 10–15 mg 3×/wk", "'Classic triple therapy': folate antagonists — **folinic** (not folic) acid protects bone marrow; weekly CBC.", "classic"],
    ["i", "Intravitreal clindamycin 1 mg/0.1 mL ± dexamethasone 0.4 mg", "Equivalent to oral therapy in trials; useful in pregnancy/intolerance.", "alternative"],
    ["o", "Prednisolone 0.5–1 mg/kg/day, start 24–48 h AFTER antimicrobials", "Reduces vitritis/damage when lesion threatens macula/disc. **Never steroid alone** (fulminant necrosis).", "sight-threatening"],
    ["o", "TMP-SMX 160/800 every 2–3 days", "Prophylaxis against recurrence after frequent episodes.", "recurrent"],
    ["o", "Spiramycin 1 g TID", "Pregnancy (1st trimester) — with obstetrics.", "pregnancy"]
  ]},
  { name: "CMV retinitis", hint: "Pizza-pie / brushfire; CD4 <50", meds: [
    ["o", "Valganciclovir 900 mg BID ×21 d → 900 mg daily maintenance", "Oral prodrug of ganciclovir (viral DNA polymerase). Neutropenia → CBC."],
    ["i", "Ganciclovir 2 mg/0.1 mL intravitreal twice weekly (induction)", "Immediately sight-threatening lesions (near fovea/disc).", "zone 1"],
    ["o", "Ganciclovir 5 mg/kg IV q12h or foscarnet 90 mg/kg IV q12h", "Severe / resistance. Foscarnet: nephrotoxic, electrolytes.", "IV"],
    ["p", "Start/optimise ART; stop maintenance when CD4 >100 for 3–6 mo", "Immune recovery uveitis can follow ART."]
  ]},
  { name: "Acute retinal necrosis (ARN)", hint: "VZV/HSV; peripheral necrosis, rapid spread", meds: [
    ["o", "Acyclovir 10 mg/kg IV q8h ×10–14 d → valacyclovir 1–2 g TID ×3 mo", "Or high-dose oral valacyclovir 2 g TID from the start (similar levels)."],
    ["i", "Foscarnet 2.4 mg/0.1 mL or ganciclovir 2–4 mg/0.1 mL intravitreal", "Adds faster local control; often repeated twice weekly.", "adjunct"],
    ["o", "Prednisolone 0.5–1 mg/kg after 24–48 h of antivirals", "Vitritis / optic nerve inflammation.", "after antiviral"],
    ["p", "Aqueous PCR (VZV/HSV/CMV); watch fellow eye; RD risk ~50–75%", "Prophylactic laser demarcation is debated."]
  ]},
  { name: "Ocular syphilis / tuberculosis", hint: "Great imitators", meds: [
    ["o", "Aqueous penicillin G 18–24 MU/day IV (3–4 MU q4h) ×10–14 d", "**Ocular syphilis = neurosyphilis**: treat as such; HIV test; LP.｜Ceftriaxone 2 g IV daily ×10–14 d if allergic (or desensitise).", "syphilis"],
    ["o", "Anti-TB 4 drugs (isoniazid, rifampicin, pyrazinamide, ethambutol) ≥6–9 mo ± steroid", "With chest/ID team. ⚠️ **Ethambutol** optic neuropathy (dose-related, check VA/colour), isoniazid.", "TB"]
  ]},
  { name: "Scleritis", hint: "Boring pain waking at night; check ANCA, RF", meds: [
    ["o", "Ibuprofen 600 mg TID / naproxen 500 mg BID / indomethacin 25–50 mg TID + PPI", "Non-necrotizing diffuse/nodular scleritis first line."],
    ["o", "Prednisolone 1 mg/kg/day", "NSAID failure or necrotizing disease.", "NSAID failure"],
    ["o", "Methylprednisolone 1 g IV ×3 d + rituximab or cyclophosphamide", "**Necrotizing** scleritis (often GPA/RA): life- and eye-threatening, with rheumatology.", "necrotizing"],
    ["o", "Methotrexate / mycophenolate", "Steroid-sparing.", "steroid-sparing"],
    ["p", "No periocular steroid in necrotizing scleritis", "Scleral melt risk."]
  ]},
  { name: "Episcleritis", hint: "Sectoral redness, blanches with phenylephrine, mild", meds: [
    ["d", "Cold compresses + artificial tears", "Usually self-limits in 1–3 weeks."],
    ["d", "Fluorometholone 0.1% QID ×1–2 wk", "Symptomatic relief; recurrence common.", "symptomatic"],
    ["o", "Ibuprofen 400–600 mg TID", "Nodular / recurrent.", "nodular"]
  ]}
]},
{ slug: "glaucoma", title: "Glaucoma", icon: "💧", blurb: "POAG drops, acute angle closure, NVG", items: [
  { name: "POAG / ocular hypertension — drops", hint: "Target ~20–30% IOP lowering", meds: [
    ["d", "Latanoprost 0.005% (Xalatan) QHS", "**Prostaglandin F2α analogue**: ↑ uveoscleral outflow; ~25–33% IOP lowering; once daily.｜Side effects: lash growth, iris darkening (permanent), periorbital fat atrophy (PAP), hyperaemia; CME/uveitis caution."],
    ["d", "Travoprost 0.004% / bimatoprost 0.01% / tafluprost 0.0015% (PF) QHS", "Other PGAs; bimatoprost most potent and most hyperaemia; tafluprost preservative-free.", "alternative PGA"],
    ["d", "Latanoprostene bunod 0.024% (Vyzulta) QHS", "PGA + nitric oxide donor (relaxes trabecular meshwork).", "alternative PGA"],
    ["d", "Timolol 0.5% BID (or 0.5% gel QD AM)", "**β-blocker**: ↓ aqueous production; ~20–25%.｜⚠️ Asthma/COPD, bradycardia/heart block; no effect at night.", "add-on / alternative"],
    ["d", "Brimonidine 0.15–0.2% BID–TID", "**α2-agonist**: ↓ production + ↑ uveoscleral outflow. Allergy ~15%.｜⚠️ **Contraindicated <2 y** (CNS depression, apnoea); MAOI interaction.", "add-on"],
    ["d", "Dorzolamide 2% TID / brinzolamide 1% TID", "**Carbonic anhydrase inhibitor**: ↓ aqueous (bicarbonate) production; sulfonamide; endothelial caution (Fuchs).", "add-on"],
    ["d", "Netarsudil 0.02% (Rhopressa) QHS / ripasudil 0.4% (Glanatec) BID", "**Rho-kinase inhibitor**: relaxes TM → ↑ conventional outflow, ↓ episcleral venous pressure. Conjunctival haemorrhages, cornea verticillata.", "add-on"],
    ["d", "Fixed combos: dorzolamide/timolol (Cosopt) BID, brimonidine/timolol (Combigan) BID, brinzolamide/brimonidine (Simbrinza) TID, PGA/timolol (Xalacom, Ganfort, DuoTrav) QD", "Fewer drops → better adherence and less preservative.", "≥2 drugs"],
    ["d", "Omidenepag isopropyl 0.002% (Eybelis) QD", "EP2 receptor agonist; option for PGA non-responders; no lash/iris change. ⚠️ Not with tafluprost; CME in pseudophakia.", "where available"],
    ["p", "Selective laser trabeculoplasty (SLT)", "**LiGHT**: SLT first-line = drops for IOP and better drop-free rate; cost-effective."]
  ]},
  { name: "Acute angle-closure crisis", hint: "Painful red eye, mid-dilated pupil, IOP 40–80", meds: [
    ["d", "Timolol 0.5% 1 gtt stat", "Lower aqueous production. Check asthma/heart block."],
    ["d", "Brimonidine 0.2% or apraclonidine 1% 1 gtt stat", "α2-agonist."],
    ["o", "Acetazolamide 500 mg IV or PO stat → 250 mg QID", "Systemic CAI. ⚠️ Sulfa allergy, sickle cell, renal failure/stones, hypokalaemia."],
    ["d", "Pilocarpine 1–2% 1 gtt ×2 (15 min apart) once IOP <40–50", "Miosis pulls iris off the angle. Ineffective when IOP very high (iris sphincter ischaemic); avoid in lens-induced (phacomorphic) closure."],
    ["d", "Prednisolone acetate 1% QID", "Reduces inflammation, prepares for laser."],
    ["o", "Mannitol 20% 1–2 g/kg IV over 30–45 min", "Hyperosmotic: dehydrates vitreous. ⚠️ Heart failure, renal failure, urinary retention.", "IOP still high"],
    ["o", "Glycerol 50% 1–1.5 g/kg PO", "Oral hyperosmotic. ⚠️ Diabetes (sugar load), vomiting.", "no IV access"],
    ["p", "Laser peripheral iridotomy both eyes once cornea clears (or lens extraction)", "Fellow eye: ~50% risk of attack in 5 yr without LPI.｜**EAGLE**: clear lens extraction better than LPI for PACG/high IOP."],
    ["p", "Corneal indentation; supine; analgesia + antiemetic", "Topical glycerin clears oedematous cornea for gonioscopy."]
  ]},
  { name: "Neovascular glaucoma", hint: "PDR, ischaemic CRVO, ocular ischaemic syndrome", meds: [
    ["i", "Anti-VEGF IVI (bevacizumab 1.25 mg / aflibercept 2 mg)", "Regresses NVI/NVA within days → buys time for PRP; doesn't treat the cause.", "", "bevacizumab"],
    ["p", "PRP (or cryo if media opaque)", "Removes ischaemic drive."],
    ["d", "Atropine 1% BID + prednisolone acetate 1% QID", "Comfort, less inflammation."],
    ["d", "Aqueous suppressants (timolol, brimonidine, dorzolamide); acetazolamide", "⚠️ Avoid pilocarpine (worsens inflammation, no open angle to work on)."],
    ["p", "Tube shunt / cyclophotocoagulation", "Uncontrolled IOP; CPC if poor visual potential.", "refractory"]
  ]},
  { name: "Steroid-induced / uveitic glaucoma", hint: "", meds: [
    ["p", "Taper/stop steroid or switch to loteprednol / fluorometholone", "Steroid response usually 2–6 wk after start; IOP falls within weeks of stopping (except depot)."],
    ["d", "Timolol, brimonidine, dorzolamide", "Aqueous suppressants first."],
    ["d", "Prostaglandin analogue", "Traditionally avoided in active uveitis (theoretical inflammation/CME), now often used when needed.", "with caution"],
    ["p", "Remove depot steroid / glaucoma surgery", "Refractory.", "refractory"]
  ]},
  { name: "Childhood glaucoma — medical bridge", hint: "Surgery is primary (goniotomy/trabeculotomy)", meds: [
    ["d", "Timolol 0.25% BID (or gel QD)", "Lowest dose; punctal occlusion.｜⚠️ Apnoea/bradycardia in infants, asthma."],
    ["d", "Dorzolamide 2% TID / brinzolamide 1% TID", "Safe and common in children."],
    ["d", "Latanoprost 0.005% QHS", "Less effective in infants; well tolerated.", "add-on"],
    ["o", "Acetazolamide 5–10 mg/kg/day PO in 3–4 doses", "Pre-op bridge. Metabolic acidosis, poor feeding.", "pre-op"],
    ["p", "⚠️ No brimonidine under 2 y", "CNS depression, apnoea, hypotonia."]
  ]}
]},
{ slug: "surface", title: "Allergy & ocular surface", icon: "🌿", blurb: "Allergy, VKC, dry eye, erosions, chemical injury", items: [
  { name: "Allergic conjunctivitis", hint: "Itch is the key symptom", meds: [
    ["d", "Olopatadine 0.1% BID (0.2% / 0.7% QD)", "**Dual-acting**: H1 antihistamine + mast-cell stabiliser — first line."],
    ["d", "Ketotifen 0.025% BID / epinastine 0.05% BID / alcaftadine 0.25% QD / bepotastine 1.5% BID", "Other dual-acting agents.", "alternative"],
    ["d", "Cromolyn sodium 2–4% QID", "Mast-cell stabiliser only — start before the season (takes ~2 wk).", "prophylaxis"],
    ["d", "Loteprednol 0.2% (Alrex) QID ≤2 wk / fluorometholone 0.1% QID", "Soft steroids for severe flares (low IOP risk).", "severe flare"],
    ["d", "Cold compresses + refrigerated preservative-free tears", "Dilutes allergens."],
    ["o", "Cetirizine 10 mg / loratadine 10 mg / fexofenadine 180 mg daily", "With rhinitis; may dry the eye.", "with rhinitis"]
  ]},
  { name: "Vernal / atopic keratoconjunctivitis", hint: "Giant papillae, Horner–Trantas dots, shield ulcer", meds: [
    ["d", "Olopatadine / ketotifen BID year-round", "Base therapy."],
    ["d", "Cyclosporine 0.1% cationic emulsion (Verkazia) QID", "Calcineurin inhibitor; steroid-sparing (VKC ≥4 y)."],
    ["d", "Tacrolimus 0.1% eye suspension BID / 0.03–0.1% skin ointment to lids", "Potent calcineurin inhibitor; AKC and severe VKC.", "severe"],
    ["d", "Prednisolone acetate 1% or fluorometholone 0.1% pulse (q2h → taper over 1–2 wk)", "Acute flares / shield ulcer. Monitor IOP — kids are strong steroid responders.", "flare"],
    ["i", "Supratarsal triamcinolone 40 mg / dexamethasone injection", "Refractory giant papillae.", "refractory", "triam"],
    ["p", "Debride shield-ulcer plaque ± amniotic membrane", "Plaque blocks epithelial healing.", "shield ulcer"]
  ]},
  { name: "Dry eye disease", hint: "Aqueous-deficient vs evaporative (MGD)", meds: [
    ["d", "Preservative-free artificial tears (hyaluronate 0.1–0.3% / CMC) QID–hourly", "Use PF if >4×/day (BAK is epithelial-toxic)."],
    ["d", "Lubricating gel / ointment HS", "Night-time exposure, lagophthalmos."],
    ["d", "Cyclosporine 0.05% (Restasis) BID / 0.1% (Ikervis) QD / 0.09% (Cequa) BID", "Calcineurin inhibitor → ↓ T-cell inflammation; takes 3–6 months; stinging.", "inflammatory"],
    ["d", "Lifitegrast 5% (Xiidra) BID", "LFA-1/ICAM-1 antagonist; dysgeusia.", "inflammatory"],
    ["d", "Diquafosol 3% (Diquas) 6×/day", "P2Y2 agonist → water + mucin secretion (Asia).", "Asia"],
    ["d", "Rebamipide 2% (Mucosta) QID", "Increases goblet cells / mucin (Japan).", "Japan"],
    ["d", "Perfluorohexyloctane (Miebo) QID", "Stops tear evaporation — MGD/evaporative.", "evaporative"],
    ["d", "Loteprednol 0.25% (Eysuvis) QID ≤2 wk", "Short pulse for flares.", "flare"],
    ["d", "Autologous serum 20% 4–8×/day", "Severe (Sjögren, GVHD, neurotrophic); growth factors, vitamin A.", "severe"],
    ["p", "Punctal plugs; IPL / thermal pulsation (LipiFlow) for MGD", "Plugs after inflammation controlled.", "adjunct"],
    ["o", "Omega-3", "**DREAM**: no better than olive-oil placebo.", "weak evidence"]
  ]},
  { name: "Neurotrophic keratitis / persistent epithelial defect", hint: "↓ corneal sensation; HSV/HZO, diabetes, CN V lesion", meds: [
    ["p", "Stop toxic/preserved drops; PF lubricants; bandage CL", "Medicamentosa often perpetuates defects."],
    ["d", "Cenegermin 0.002% (Oxervate) 6×/day ×8 wk", "Recombinant human **nerve growth factor**; stage 2–3 NK (**REPARO/NGF0214**).", "stage 2–3"],
    ["d", "Autologous serum 20–50%", "Growth factors.", ""],
    ["o", "Doxycycline 100 mg BID", "MMP inhibition when stroma thinning.", "thinning"],
    ["p", "Amniotic membrane / tarsorrhaphy / botulinum ptosis", "Non-healing defects.", "refractory"]
  ]},
  { name: "Recurrent corneal erosion", hint: "Pain on waking; EBMD or old abrasion", meds: [
    ["d", "Lubricating ointment or 5% NaCl ointment (Muro 128) HS ×3–6 mo", "Hypertonic saline draws water out of the epithelium → better adhesion."],
    ["o", "Doxycycline 50 mg BID + fluorometholone 0.1% BID ×2 mo", "MMP-9 inhibition prevents recurrences.", "recurrent"],
    ["p", "Bandage CL during episode; anterior stromal puncture / PTK", "Refractory cases.", "refractory"]
  ]},
  { name: "Chemical injury", hint: "Irrigate first, ask later — alkali worst", meds: [
    ["p", "Irrigate ≥30 min (≥2 L NS/Ringer) until pH 7.0–7.2; sweep & evert fornices", "Topical anaesthetic first; check pH 5 min after stopping; remove particles."],
    ["d", "Prednisolone acetate 1% q1h for 7–10 days, then taper", "Controls inflammation. After day 10–14 with an epithelial defect, reduce (collagenase → melt)."],
    ["d", "Sodium ascorbate 10% q2h + vitamin C 1 g PO BID", "Collagen synthesis cofactor; alkali depletes aqueous ascorbate.", "moderate–severe"],
    ["o", "Doxycycline 100 mg BID", "MMP inhibition → less melting.", "moderate–severe"],
    ["d", "Levofloxacin / chloramphenicol QID", "Prophylaxis while epithelium is open."],
    ["d", "Cyclopentolate 1% TID; IOP control (timolol, acetazolamide)", "Comfort; IOP often high."],
    ["p", "Amniotic membrane early; symblepharon ring", "Severe (Roper-Hall/Dua grade III–IV).", "severe"]
  ]},
  { name: "Corneal abrasion", hint: "Exclude foreign body & open globe", meds: [
    ["d", "Chloramphenicol / levofloxacin ointment QID ×3–5 d", "Prophylaxis; ointment soothes."],
    ["d", "Moxifloxacin / levofloxacin drops QID, no patch", "**Contact lens wearer**: cover Pseudomonas, never patch.", "CL wearer"],
    ["d", "Cyclopentolate 1% stat", "Pain from ciliary spasm.", "pain"],
    ["o", "Paracetamol / NSAID", "Pain relief."],
    ["p", "⚠️ Never send home with topical anaesthetic", "Toxic keratopathy and masks worsening."]
  ]}
]},
{ slug: "neuro", title: "Neuro-ophthalmology & orbit", icon: "🧠", blurb: "Optic neuritis, GCA, IIH, TED, myasthenia", items: [
  { name: "Optic neuritis (typical demyelinating)", hint: "Young, painful eye movements, RAPD", meds: [
    ["o", "Methylprednisolone 1 g IV daily ×3 d → prednisolone 1 mg/kg/day ×11 d → taper", "**ONTT**: faster recovery, same final vision; lowered 2-yr MS risk (effect gone by 3 yr).｜⚠️ **Oral prednisolone 1 mg/kg alone** increased recurrences — don't use."],
    ["p", "MRI brain & orbits with gadolinium; AQP4 / MOG antibodies", "Atypical (bilateral, severe, no pain, no recovery, Asian) → think NMOSD/MOG."],
    ["p", "Plasma exchange", "Severe steroid-refractory, NMOSD/MOG.", "refractory"]
  ]},
  { name: "Giant cell arteritis", hint: ">50 y, headache, jaw claudication, ESR/CRP ↑ — treat before biopsy", meds: [
    ["o", "Methylprednisolone 500 mg–1 g IV daily ×3 d", "If **visual loss** (AAION, CRAO) — fellow eye at risk within days.", "visual loss"],
    ["o", "Prednisolone 1 mg/kg/day (40–60 mg) PO, taper over 12–18 mo", "No visual loss: start immediately; don't wait for biopsy."],
    ["i", "Tocilizumab 162 mg SC weekly", "IL-6 receptor antibody (**-li-zu-mab**: immune target, humanized). **GiACTA**: steroid-sparing, more sustained remission.｜⚠️ Normalises CRP — can't use it to monitor.", "steroid-sparing"],
    ["o", "Aspirin 75–100 mg daily", "May reduce ischaemic events; evidence limited.", "consider"],
    ["p", "Temporal artery biopsy within 1–2 wk (≥1.5 cm) or vascular ultrasound", "Biopsy stays positive ≥2 weeks after steroids."],
    ["o", "PPI, calcium/vit D, bisphosphonate", "Long steroid course."]
  ]},
  { name: "Idiopathic intracranial hypertension", hint: "Young obese woman, headache, papilloedema", meds: [
    ["o", "Acetazolamide 500 mg BID → up to 2 g/day (max 4 g)", "**IIHTT**: acetazolamide + weight loss improved visual field more than weight loss alone.｜Paraesthesia, taste change, kidney stones."],
    ["p", "Weight loss 5–10% (diet, GLP-1 agonist, bariatric surgery)", "Disease-modifying."],
    ["o", "Topiramate 25–50 mg BID", "Weak CAI + weight loss + migraine. ⚠️ Can cause bilateral angle closure; contraception interaction.", "alternative"],
    ["p", "Optic nerve sheath fenestration / VP shunt / venous sinus stenting", "Vision failing despite meds — urgent.", "fulminant"],
    ["p", "Exclude venous sinus thrombosis (MRV), drugs (tetracyclines, vit A, steroid withdrawal)", "Before calling it idiopathic."]
  ]},
  { name: "Thyroid eye disease", hint: "Active (CAS ≥3) vs inactive; smoking cessation", meds: [
    ["o", "Selenium 100 µg BID ×6 mo", "Mild active TED in selenium-deficient areas (Europe).", "mild"],
    ["o", "Methylprednisolone IV 500 mg weekly ×6 → 250 mg weekly ×6 (cumulative 4.5 g)", "**EUGOGO** first line for moderate–severe active TED.｜Max 8 g cumulative (hepatotoxicity); LFTs."],
    ["o", "Mycophenolate 720 mg daily (+ IVMP)", "**MINGO**: combination better than IVMP alone.", "add-on"],
    ["i", "Teprotumumab 10 mg/kg IV → 20 mg/kg q3w ×8 infusions", "IGF-1R antibody (**-tu-mu-mab**: tumour target, human). **OPTIC**: reduces proptosis ~3 mm.｜⚠️ Hearing loss, hyperglycaemia, IBD flare.", "moderate–severe"],
    ["o", "Methylprednisolone 1 g IV ×3 d; urgent decompression if no response in 1–2 wk", "**Dysthyroid optic neuropathy**.", "DON"],
    ["p", "Orbital radiotherapy; rehabilitative surgery when inactive (decompression → strabismus → lids)", "Order matters.", "inactive"],
    ["d", "Lubricants, sunglasses, taping; prisms", "Exposure & diplopia."]
  ]},
  { name: "Ocular myasthenia gravis", hint: "Variable ptosis/diplopia, fatigable", meds: [
    ["o", "Pyridostigmine 30–60 mg q4–6h", "Acetylcholinesterase inhibitor; helps ptosis more than diplopia. GI cramps."],
    ["o", "Prednisolone low-dose, slow increase (start 10 mg, ↑ to 0.5–0.75 mg/kg)", "**EPITOME**: steroids effective in ocular MG; may lower generalisation risk. Start low (early worsening).", "persistent"],
    ["p", "AChR / MuSK antibodies, CT chest (thymoma), TFTs", "Thymectomy if thymoma."]
  ]},
  { name: "Central retinal artery occlusion", hint: "Stroke equivalent", meds: [
    ["p", "Send to stroke unit immediately (<4.5 h): consider IV thrombolysis per stroke protocol", "Thrombolysis trials (e.g. THEIA, TenCRAOS) ongoing; evidence still evolving."],
    ["p", "ESR/CRP (GCA if >50), carotid Doppler, echo, ECG/Holter", "Secondary prevention."],
    ["p", "Ocular massage, AC paracentesis, IOP-lowering", "No proven benefit; low-risk if done fast.", "unproven"]
  ]}
]},
{ slug: "peds", title: "Pupils, kids & refraction", icon: "👶", blurb: "Dilating drops, cycloplegia, myopia, amblyopia", items: [
  { name: "Dilated fundus exam", hint: "Check the angle first", meds: [
    ["d", "Tropicamide 0.5% + phenylephrine 0.5% (Mydrin-P) 1 gtt ×2, 5–10 min apart", "Tropicamide: short antimuscarinic (4–6 h). Phenylephrine: α1-agonist → dilator muscle.｜⚠️ Shallow AC → risk of angle closure."],
    ["d", "Tropicamide 1% + phenylephrine 2.5%", "Stronger dilation (diabetic, dark irides).", "poor dilation"],
    ["p", "⚠️ Phenylephrine 10%: avoid in infants, cardiac disease, hypertension", "Systemic hypertension, arrhythmia."]
  ]},
  { name: "Cycloplegic refraction (child)", hint: "Unmask latent hyperopia", meds: [
    ["d", "Cyclopentolate 1% 1 gtt ×2, 5 min apart → refract at 30–45 min", "Antimuscarinic; lasts up to 24 h. Use 0.5% (or Cyclomydril) in infants <1 y.｜Toxicity: flushed, dry, fever, tachycardia, hallucinations ('hot as a hare…')."],
    ["d", "Atropine 1% (0.5% <5 y) BID ×3 d before visit", "Strongest cycloplegia: accommodative esotropia, high hyperopia, dark irides. Lasts 1–2 weeks.", "esotropia / dark iris"],
    ["d", "Topical anaesthetic first (proparacaine)", "Less sting, better absorption.", "optional"]
  ]},
  { name: "Myopia control (children)", hint: "Slows progression; axial length monitoring", meds: [
    ["d", "Atropine 0.01–0.05% QHS", "**LAMP**: 0.05% most effective of low doses with little photophobia; 0.01% weak.｜**ATOM2**: higher doses work but rebound on stopping."],
    ["d", "Atropine 0.125–0.25% QHS", "Commonly used in Taiwan for fast progression; more glare/near blur.", "fast progression"],
    ["p", "Outdoor time ≥2 h/day; orthokeratology; DIMS/HAL spectacles; MiSight CL", "Outdoor time delays onset (Taiwan school programmes)."]
  ]},
  { name: "Amblyopia (penalisation)", hint: "Alternative to patching", meds: [
    ["d", "Atropine 1% to the BETTER eye daily or weekends only", "**PEDIG ATS**: as effective as patching for moderate amblyopia; weekend dosing = daily.", ""],
    ["p", "Patching 2 h/day (moderate) – 6 h/day (severe)", "PEDIG: 2 h = 6 h for moderate."]
  ]},
  { name: "Periocular infantile haemangioma", hint: "Risk: occlusion/astigmatism amblyopia", meds: [
    ["o", "Propranolol 1–3 mg/kg/day divided BID–TID (with feeds) ×6–12 mo", "Non-selective β-blocker → vasoconstriction, ↓ VEGF/bFGF, apoptosis.｜Watch hypoglycaemia, bradycardia, bronchospasm; paediatric baseline check."],
    ["d", "Timolol 0.5% gel BID", "Small, superficial lesions.", "small / superficial"],
    ["p", "Refraction & amblyopia treatment", "Induced astigmatism."]
  ]},
  { name: "Pharmacological pupil tests", hint: "Horner, Adie, pharmacological block", meds: [
    ["d", "Apraclonidine 0.5–1%", "**Horner**: denervation supersensitivity → affected pupil dilates & ptosis improves (reversal of anisocoria)."],
    ["d", "Cocaine 4–10%", "Horner: affected pupil fails to dilate (blocks NE reuptake).", "alternative"],
    ["d", "Hydroxyamphetamine 1%", "Localises Horner: no dilation = **post-ganglionic** (3rd order).", "localise"],
    ["d", "Pilocarpine 0.1% (dilute)", "**Adie tonic pupil** constricts (cholinergic supersensitivity).", "Adie"],
    ["d", "Pilocarpine 1%", "No constriction = **pharmacological blockade** (atropine-like); constricts = CN III palsy.", "fixed dilated pupil"]
  ]}
]},
{ slug: "periop", title: "Peri-operative & anaesthesia", icon: "✂️", blurb: "Cataract surgery, post-op, IOP spikes", items: [
  { name: "Before cataract surgery", hint: "", meds: [
    ["d", "Povidone-iodine 5% into conjunctival sac (≥3 min) before surgery", "**The only proven** endophthalmitis prophylaxis step."],
    ["d", "Tropicamide + phenylephrine (Mydrin-P) ×3 + phenylephrine 2.5–10%", "Pupil dilation."],
    ["d", "NSAID (ketorolac / nepafenac) 1–3 d pre-op", "Maintains mydriasis; lowers CME risk (diabetes, ERM, uveitis).", "high CME risk"],
    ["i", "Intracameral cefuroxime 1 mg/0.1 mL at end of surgery (or moxifloxacin 0.5 mg/0.1 mL)", "**ESCRS** study: ~5× fewer endophthalmitis cases."],
    ["p", "Tamsulosin (α1A-blocker) → plan for IFIS: iris hooks/ring, intracameral phenylephrine-ketorolac", "Don't stop tamsulosin (effect lasts years)."],
    ["d", "Proparacaine 0.5% / tetracaine; intracameral lidocaine 1% PF", "Topical/intracameral anaesthesia."]
  ]},
  { name: "Routine after cataract surgery", hint: "", meds: [
    ["d", "Prednisolone acetate 1% QID ×1 wk → taper over 3–4 wk", "Or combined tobramycin/dexamethasone (Tobradex) QID."],
    ["d", "Levofloxacin 0.5% QID ×1 wk", "Prophylaxis until wound seals."],
    ["d", "Nepafenac 0.1% TID ×4–6 wk", "Diabetics, ERM, uveitis, previous CME.", "high CME risk"],
    ["p", "Shield at night ×1 wk; no rubbing; review day 1 (IOP!), wk 1, wk 4", "Day-1 IOP spike from retained viscoelastic."]
  ]},
  { name: "Post-op IOP spike", hint: "Retained OVD, steroid, inflammation", meds: [
    ["d", "Timolol 0.5% / brimonidine 0.2% / dorzolamide 2%", "Topical suppressants."],
    ["o", "Acetazolamide 250–500 mg PO", "IOP >30–35 or optic nerve at risk.", "high IOP"],
    ["p", "Paracentesis 'burp' at the slit lamp", "Immediate relief.", "very high IOP"]
  ]},
  { name: "TASS vs endophthalmitis", hint: "TASS: 12–24 h, painless, limbus-to-limbus oedema", meds: [
    ["d", "Prednisolone acetate 1% hourly", "**TASS** (sterile, from toxins/solutions): responds to intensive steroid.｜If any doubt → treat as endophthalmitis (tap & inject).", "TASS"],
    ["i", "Tap & inject vancomycin + ceftazidime", "Endophthalmitis: usually day 3–7, painful, vitritis.", "endophthalmitis"]
  ]},
  { name: "Open globe injury", hint: "Shield, NPO, no pressure on the eye", meds: [
    ["o", "Vancomycin 1 g IV q12h + ceftazidime 1 g IV q8h (or moxifloxacin 400 mg PO daily)", "Prevents post-traumatic endophthalmitis (Bacillus with soil/IOFB)."],
    ["o", "Tetanus toxoid ± immunoglobulin", "If not up to date."],
    ["o", "Antiemetic + analgesia", "Vomiting raises IOP → extrusion."],
    ["p", "CT orbit (no MRI if metal); rigid shield; theatre ASAP", "Repair within 24 h."]
  ]},
  { name: "Traumatic hyphema", hint: "Rebleed day 3–5; check sickle status", meds: [
    ["d", "Prednisolone acetate 1% QID + atropine 1% BID", "Reduces inflammation and rebleeding; comfort."],
    ["d", "Timolol / brimonidine for IOP", "⚠️ Avoid CAIs in sickle cell (acidosis → sickling).", "IOP ↑"],
    ["p", "Head elevated 30°, shield, limit activity; no aspirin/NSAIDs", "Daily IOP early; washout if IOP uncontrolled or corneal blood staining."]
  ]}
]}
];

// Home screen: hot tiles (straight to a condition) then category tiles.
var OPHMED_HOME = {
  hot: [
    { icon: "💉", label: "Anti-VEGF agents", sub: "background & comparison", slug: "retina", item: 0 },
    { icon: "🚨", label: "Acute angle closure", sub: "IOP crisis", slug: "glaucoma", item: 1 },
    { icon: "🧪", label: "Chemical injury", sub: "irrigate first", slug: "surface", item: 5 },
    { icon: "🦠", label: "Endophthalmitis", sub: "tap & inject", slug: "infection", item: 11 },
    { icon: "🔴", label: "Corneal ulcer", sub: "scrape, fortified drops", slug: "infection", item: 1 },
    { icon: "🧠", label: "Giant cell arteritis", sub: "steroids now", slug: "neuro", item: 1 }
  ]
};
