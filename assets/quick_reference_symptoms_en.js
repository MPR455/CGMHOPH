/* English symptom clarifications and laterality for conjunctival disease.
 * Source mapping is recorded in docs/quick-reference-review.md.
 * Laterality describes a typical pattern, not a diagnostic rule or a guarantee.
 */
(function (root) {
  'use strict';
  var records = {
    d1: {
      laterality: 'Usually bilateral, although eyelid inflammation and symptoms can be worse on one side. Chronic gland dysfunction is not contagious spread between eyes; persistent strictly unilateral inflammation warrants reassessment for a local cause.'
    },
    d2: {
      laterality: 'Usually bilateral, although dryness and discomfort can differ between eyes. This is autoimmune tear deficiency, not an infection spreading from one eye to the other.'
    },
    d6: {
      laterality: 'Usually bilateral and often asymmetric; unilateral disease also occurs. This is noninfectious inflammation, so fellow-eye involvement is not contagious spread.'
    },
    d7: {
      laterality: 'Usually bilateral, with unequal severity possible. Ocular rosacea can include blepharoconjunctivitis, but fellow-eye involvement reflects the inflammatory condition rather than contagious spread.'
    },
    d11: {
      laterality: 'Usually unilateral in an episode. Bilateral herpes simplex keratoconjunctivitis is less common but can occur, particularly with atopy or immunosuppression; do not assume it will follow the usual adenoviral pattern.'
    },
    d13: {
      laterality: 'Usually unilateral, on the side of the affected forehead and eyelid. The rash typically respects the midline; contralateral eye involvement is unusual and should prompt reassessment.'
    },
    d15: {
      symptom: 'Epithelial keratoconjunctivitis can cause redness, tearing, grittiness, photophobia and blurred vision after exposure to contaminated water or mud. Stromal disease may instead cause persistent discomfort and progressively blurred vision.',
      laterality: 'Commonly unilateral in otherwise healthy patients. Bilateral disease can occur, including in immunocompromised patients or after a shared exposure; automatic spread to the fellow eye over a fixed number of days should not be assumed.'
    },
    d31: {
      laterality: 'For topical medication-related keratoconjunctivitis, laterality follows exposure: one treated eye may be affected, or both if both receive the offending product. This is not contagious spread; systemic drug effects may involve both eyes.'
    },
    d34: {
      symptom: 'Redness, gritty irritation and mucopurulent discharge, with eyelids stuck together on waking. Uncomplicated infection usually causes little true pain and no persistent visual loss. Hyperacute gonococcal disease can cause rapidly recurring copious pus, marked swelling, pain or reduced vision and needs urgent assessment.',
      laterality: 'Ordinary bacterial conjunctivitis may affect one or both eyes; an initially unilateral infection can reach the fellow eye through contaminated hands or secretions. Bilateral involvement is common but not inevitable. Gonococcal disease may be unilateral or bilateral, so a quiet fellow eye does not make it safe.'
    },
    d35: {
      symptom: 'Watery red eye with grittiness, burning and tearing, sometimes after a cold or exposure to another affected person. Corneal involvement may cause photophobia or blurred vision.',
      laterality: 'Adenoviral disease commonly begins in one eye and involves the fellow eye over the next several days, often less severely; some cases stay unilateral. It is highly contagious. Herpes simplex keratoconjunctivitis is usually unilateral and should not be assumed to behave like adenovirus.'
    },
    d36: {
      symptom: 'Adult inclusion disease: a persistently red, gritty eye with mucoid or purulent discharge over weeks to months, often unresponsive to routine topical antibiotics. Trachoma: recurrent irritation and discharge in an endemic setting; advanced scarring and lashes rubbing the cornea may cause pain, photophobia and blurred vision.',
      laterality: 'Adult inclusion conjunctivitis is usually unilateral, although bilateral infection is possible. Trachoma typically affects both eyes, often unevenly, after repeated exposure. These are different clinical patterns; a fixed time to fellow-eye involvement cannot be promised.'
    },
    d37: {
      laterality: 'Usually bilateral, often starting in both eyes around the same time after allergen exposure, although severity can differ. It is not contagious and does not spread between eyes as an infection. Persistently unilateral symptoms warrant a search for another or additional cause.'
    },
    d38: {
      laterality: 'Typically bilateral but often asymmetric; one eye may be much worse. This allergic inflammation is not contagious, and worsening in the fellow eye reflects the disease rather than infection passing across.'
    },
    d39: {
      laterality: 'Usually bilateral, with unequal severity possible. This is chronic allergic inflammation associated with atopic disease, not contagious spread from one eye to the other.'
    },
    d40: {
      laterality: 'Often bilateral in people wearing contact lenses in both eyes, but it can be asymmetric or unilateral. A local trigger such as an exposed suture or an ocular prosthesis may affect only that side. It is a mechanical/inflammatory reaction, not a contagious infection.'
    },
    d41: {
      laterality: 'Ocular mucous membrane pemphigoid usually affects both eyes, often very asymmetrically; one eye can appear affected first. This is autoimmune progression rather than contagious spread. Other causes of conjunctival scarring can be unilateral; persistent one-sided disease needs assessment for local causes, including medication effects or a masquerading tumour.'
    },
    d42: {
      laterality: 'Ocular involvement is generally bilateral, although severity can differ substantially between eyes. This is part of a systemic inflammatory reaction, not an infection spreading across; both eyes need assessment even if only one is symptomatic.'
    },
    d43: {
      laterality: 'Can be unilateral or bilateral; published clinical descriptions report bilateral involvement in roughly half of cases. Fellow-eye lesions reflect the underlying fibrin-clearance disorder, not contagious spread, and there is no fixed interval for the second eye to become involved.'
    },
    d44: {
      laterality: 'Characteristically unilateral, with enlarged regional lymph nodes on the same side. Bilateral eye disease is unusual and should prompt reassessment of the cause rather than an assumption of ordinary spreading viral conjunctivitis.'
    },
    d64: {
      laterality: 'Often bilateral when the same solution or lenses expose both eyes, but unilateral or asymmetric reactions can occur. Toxicity and contact lens-related hypersensitivity are not contagious; the pattern follows exposure rather than infection spreading across.'
    },
    d311: {
      symptom: 'Red, swollen eyelids with watering or discharge during the first month of life. Onset can be within days or after the first week, depending on the cause; copious pus, corneal clouding or an unwell infant are particularly concerning.',
      laterality: 'May be unilateral or bilateral, depending on the organism or irritant, and infection may later involve the fellow eye. Laterality alone cannot identify the cause. Any suspected neonatal conjunctivitis needs prompt medical assessment; do not wait for both eyes to become involved.'
    },
    d312: {
      laterality: 'Conjunctivitis can affect one or both eyes: viral infection often reaches the fellow eye after a unilateral start, bacterial disease may also become bilateral, and allergy is usually bilateral from the outset. Preseptal cellulitis is usually unilateral eyelid infection and is not the same pattern; painful eye movements, proptosis or reduced vision require urgent assessment for orbital disease.'
    },
    d317: {
      laterality: 'Usually bilateral and often asymmetric, including associated blepharoconjunctivitis. The chronic lid/gland disorder is not contagious spread between eyes; persistent one-sided disease needs assessment for a local cause.'
    }
  };
  function apply(data) {
    var byId = {};
    data.forEach(function (record) { byId[record.id.split('-')[0]] = record; });
    Object.keys(records).forEach(function (id) {
      var record = byId[id], note = records[id];
      if (!record) throw new Error('Unknown disease symptom note: ' + id);
      if (note.symptom) record.symptom = note.symptom;
      record.laterality = note.laterality;
    });
  }
  root.QUICK_REFERENCE_SYMPTOMS_EN = {records: records, apply: apply};
})(typeof window !== 'undefined' ? window : globalThis);
