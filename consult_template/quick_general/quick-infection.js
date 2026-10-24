window.CGMHConsult.registerQuick({
  "id": "quick-infection",
  "label": "Preseptal cellulitis",
  "scenario": "preseptal",
  "impression": "1. Preseptal cellulitis, ### eye.",
  "plan": "- Adjust medications:\n gentamycin 1gt QID ###\n erythromycin QID ###\n augmentin Q12H PO\n= prescribe antibiotics for facial cellulitis as your expertise\n= explain the current condition is borderline(between preseptal and orbital cellulitis) but more likely preseptal, suggest try oral antibiotics first and watch out for the warning signs:\n - progressive swelling and redness\n - acute visual disturbance\n - EOM limitation and diplopia\n - fever\n= RTC IMMEDIATELY if the above sign presented\n= medication as suggested\n= warm packing (for 10 min) qid + prn\n= educate to have good hygiene\n\n- RTC to ### on ### (回診單請註明VA PT) 感謝急診同仁!!\n- return to ER or OPD earlier if symptoms worsen or other symptoms or sign noted (such as fever, increasing erythema, EOM limitation, etc.)",
  "subjective": {
    "cc": "lid / periocular swelling and pain",
    "side": "###",
    "onset": "###",
    "detail": "The patient presented with ### (lid / periocular swelling and pain), ### eye, for ###.\nOnset / progression: ###.\nFever / discharge / visual symptoms: ###.\nPrevious antibiotics / drainage: ###.\nAssociated symptoms: ###.\nPertinent negatives: ###.",
    "nonoph": "###",
    "ophx": "###",
    "otherhx": "###",
    "cl": "###",
    "ph": "###",
    "allergy": "###"
  },
  "objective": {
    "fields": {
      "lid": "Swelling/erythema/tenderness and extent: ###."
    },
    "method": "###",
    "extra": "EOM / diplopia / proptosis assessment: ###.\nLacrimal sac / punctum / discharge findings: ###.\nImaging / drainage findings, if obtained: ###.",
    "fundus": null,
    "eom": "OD: ###\nOS: ###"
  },
  "addendum": "",
  "provenance": {
    "sourceIds": [
      "ER-279"
    ],
    "medicationSourceId": "ER-279"
  }
});
