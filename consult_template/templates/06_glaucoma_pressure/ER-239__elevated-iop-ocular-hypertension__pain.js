window.CGMHConsult.register({
  "id": "ER-239 | Elevated IOP / Ocular hypertension | pain",
  "category": "Glaucoma / Elevated IOP",
  "sourceId": "ER-239",
  "source": "ER notes",
  "diagnosis": "Elevated IOP / Ocular hypertension",
  "scenario": "oht",
  "severity": "Severity not specified",
  "symptoms": [
    "pain"
  ],
  "findings": [],
  "reply": "Impression:\n1. Elevated IOP, OS\n2. Chronic RD (OS), s/p VT+SB+SO on ###\n\nPlan:\n- Reported to ###, examined by ###\n- RTC ### on ### as scheduled\n- RTC earlier if symptoms or signs worsen\n\n- Adjust medications:\n cravit QID OS (自備)\n pred-forte QID OS (自備)\n atropine BID OS (自備)\n acetaminophen QID OS (自備)\n diamox PO QID 有改頻率**\n briminodine 1gt stat and BID OS **新增\n cosopt 1gt stat and BID OS **新增",
  "s": "CC @ ER: ocular pain OS since this morning\nPI @ ER:\nOphthalmic symptoms:\nDetail: The patient presented with ocular pain OS since this morning. Denied VF defect, photopsia, increasing floaters, diplopia, discharge.\nNon-ophthalmic symptoms: nil\nOPH OP hx :  No\nOther related eye disease hx: chronic RD (OS), s/p VT+SB+SO\nContact lens : No\nPH/Systemic disease: denied\nAllergy: denied",
  "o": "###Ophthalmic Examinations###\n[OS]\nVisual acuity        20/800\nIOP                  36mmHg\nLR                   dilated by medications\nLid/periocular skin  minimal swelling\nCornea               K clear\nConj. (& sclera)     congested\nIris                 np\nAC                   deep/cells 2+, air 30% in sulcus\nLens                 NS+\nFundoscopy   disc pinkish with intact rim  ,C/D 0.3*0.3; macula np; retina & vitreous (Dilated) no break or detachment; 50% gas in vitreous",
  "p": "藥      囑      名      稱    劑量 單位 頻率 AP 途徑 天數 自費天數 總量 自費總量\nAcetaZOLAMIDE 250mg/tab           1    PC  QID  P    PO   3      0    12        0\nBrimonidine oph.soln 0.15% 5mL/   1    GT  BID       OU   0      0     1        0\nbot(Alphagan P,Allergan)\n(Dorzolamide 2% +Timolol 0.5%)    1    GT  BID       OU   0      0     1        0\noph soln 5mL/bot\n   醫      囑      名      稱    數量 檢體\nSLIT LAMP EXAM                    1\nINDIRECT OPHTHALMOSCOPY           1",
  "addendum": "",
  "medicationOrders": [
    {
      "drug": "AcetaZOLAMIDE 250mg/tab",
      "dose": "1",
      "unit": "PC",
      "freq": "QID",
      "ap": "P",
      "sourceRoute": "PO",
      "route": "PO",
      "days": "  3 days",
      "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  P  PO  3 days"
    },
    {
      "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "dose": "1",
      "unit": "GT",
      "freq": "BID",
      "ap": "",
      "sourceRoute": "OU",
      "route": "###",
      "days": "",
      "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###"
    },
    {
      "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "dose": "1",
      "unit": "GT",
      "freq": "BID",
      "ap": "",
      "sourceRoute": "OU",
      "route": "###",
      "days": "",
      "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  GT  BID  ###"
    }
  ],
  "medicationMentions": [
    "cravit QID OS (自備)",
    "atropine BID OS (自備)",
    "acetaminophen QID OS (自備)",
    "diamox PO QID 有改頻率**",
    "cosopt 1gt stat and BID OS **新增"
  ],
  "reviewFlags": [
    "Plan includes medication instructions: reconcile with order table and addendum."
  ],
  "sourceFile": "er_notes/06_glaucoma_pressure/ER-239__elevated-iop-ocular-hypertension__pain.txt",
  "originalTitle": "",
  "duplicateOf": null
});
