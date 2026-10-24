window.CGMH_CONSULT_MEDICATION_BLOCKS = [
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-002",
      "ER-091",
      "ER-115"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-001",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 1 — Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "visual-disturbance",
    "diagnosis": "Subjective visual disturbance / Pain",
    "category": "Neuro-ophthalmology",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-003",
      "ER-048",
      "ER-099",
      "ER-137",
      "ER-227"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-002",
    "label": "Subjective visual disturbance / Pain / Severity not specified / Regimen 1 — Acetaminophen"
  },
  {
    "scenario": "open-globe",
    "diagnosis": "Open globe injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  PC  BID  ###\nMoxifloxacin 400mg/250mL/bot  1  PC  QD  IV\nAcetaminophen 500mg/tab  1  PC  QID  PO\nVancomycin HCl 1GM/vial (Vanlyo,台裕)  1  PC  ONCE  ###  1 day\nCeftazidime 500mg/vial  1  PC  ONCE  ###\nMoxifloxacin 400mg/250mL/bot  1  PC  STAT  IV\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  PC  Q1H  ###",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube",
      "Moxifloxacin 400mg/250mL/bot",
      "Acetaminophen 500mg/tab",
      "Vancomycin HCl 1GM/vial (Vanlyo,台裕)",
      "Ceftazidime 500mg/vial",
      "Moxifloxacin 400mg/250mL/bot",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot"
    ],
    "sources": [
      "ER-004",
      "ER-057",
      "ER-075",
      "ER-090"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Medication dose absent from source table; fill ### after review.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- toxoid 0.5cc im stat, Moxifloxacin 1amp IV stat",
      "***請先開立並於入開刀房時請讓病人攜帶Vancomycin HCl (ivf) 1GM/vial,Ceftazidime 500mg/vial 各一瓶一同進入開刀房***"
    ],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  PC  BID  ###"
      },
      {
        "drug": "Moxifloxacin 400mg/250mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "QD",
        "ap": "",
        "sourceRoute": "IV",
        "route": "IV",
        "days": "",
        "line": "Moxifloxacin 400mg/250mL/bot  1  PC  QD  IV"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "Vancomycin HCl 1GM/vial (Vanlyo,台裕)",
        "dose": "1",
        "unit": "PC",
        "freq": "ONCE",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Vancomycin HCl 1GM/vial (Vanlyo,台裕)  1  PC  ONCE  ###  1 day"
      },
      {
        "drug": "Ceftazidime 500mg/vial",
        "dose": "1",
        "unit": "PC",
        "freq": "ONCE",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Ceftazidime 500mg/vial  1  PC  ONCE  ###"
      },
      {
        "drug": "Moxifloxacin 400mg/250mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IV",
        "route": "IV",
        "days": "",
        "line": "Moxifloxacin 400mg/250mL/bot  1  PC  STAT  IV"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  PC  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-003",
    "label": "Open globe injury / Severity not specified / Regimen 1 — Gentamicin + Moxifloxacin + Acetaminophen + Vancomycin HCl"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula on",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-005"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-004",
    "label": "Retinal detachment / Macula on / Regimen 1 — Acetaminophen"
  },
  {
    "scenario": "hordeolum",
    "diagnosis": "Hordeolum / Chalazion",
    "category": "Lids / Lacrimal",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days\nTetracycline HCL 1% eye oint 5gm/tube  1  GT  BID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Tetracycline HCL 1% eye oint 5gm/tube"
    ],
    "sources": [
      "ER-006"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days"
      },
      {
        "drug": "Tetracycline HCL 1% eye oint 5gm/tube",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Tetracycline HCL 1% eye oint 5gm/tube  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-005",
    "label": "Hordeolum / Chalazion / Severity not specified / Regimen 1 — Acetaminophen + Tetracycline HCL"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "ER-007",
      "ER-243"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "TOPI",
        "route": "TOPI",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI"
      }
    ],
    "kind": "Order table",
    "id": "MED-006",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 1 — Gentamicin"
  },
  {
    "scenario": "vh",
    "diagnosis": "Vitreous hemorrhage",
    "category": "Retina / Vitreous",
    "severity": "VH grade 4",
    "lines": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days",
    "drugs": [
      "Tranexamic acid 250mg/tab"
    ],
    "sources": [
      "ER-008",
      "ER-053",
      "ER-113",
      "ER-255"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tranexamic acid 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-007",
    "label": "Vitreous hemorrhage / VH grade 4 / Regimen 1 — Tranexamic acid"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  1  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Acetaminophen 500mg/tab",
      "Atropine 1% eye drops 10mL/bot"
    ],
    "sources": [
      "ER-012"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID (自備藥)",
      "- Cosopt: 1gt stat then bid => asthma/heart disease(AV block) patient 不用 (自備藥)",
      "- Xalatan: 1gt stat and HS",
      "- atropine BID (自備藥)",
      "- Alphagan : 1gt stat and BID",
      "- Cosopt: 1gt BID",
      "- Xalatan: 1gt HS",
      "- Atropine 1gt BID"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-008",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 1 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula on",
    "lines": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###  1 day\nPhenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###  1 day",
    "drugs": [
      "Atropine 1% eye drops 10mL/bot",
      "Phenylephrine 10% oph soln, 5mL/bot"
    ],
    "sources": [
      "ER-013",
      "ER-216"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- dilate pupil (OS) : atropine 1% and Phenylephrine 10% stat and on call"
    ],
    "orders": [
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###  1 day"
      },
      {
        "drug": "Phenylephrine 10% oph soln, 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Phenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-009",
    "label": "Retinal detachment / Macula on / Regimen 2 — Atropine + Phenylephrine"
  },
  {
    "scenario": "sjs",
    "diagnosis": "SJS / TEN ocular assessment",
    "category": "Systemic / Ocular involvement",
    "severity": "Sotozono grade II",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/botBalanced salt solution, 15mL/bo   1    GT IRRE       OU   0      0     0        1t  1  GT  QID  ###\nNeomycin 0.35%+Betamethasone) oph.oint.3gm/tube  ###  QS  BID  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/botBalanced salt solution, 15mL/bo   1    GT IRRE       OU   0      0     0        1t",
      "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube"
    ],
    "sources": [
      "ER-015"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Medication table contains unparsed lines; see source.",
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/botBalanced salt solution, 15mL/bo   1    GT IRRE       OU   0      0     0        1t",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/botBalanced salt solution, 15mL/bo   1    GT IRRE       OU   0      0     0        1t  1  GT  QID  ###"
      },
      {
        "drug": "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube  ###  QS  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-010",
    "label": "SJS / TEN ocular assessment / Sotozono grade II / Regimen 1 — Levofloxacin + Neomycin"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  5 days\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "ER-016"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-011",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 2 — Chloramphenicol + Acetaminophen + Balanced salt solution"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-017"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q4H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-012",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 1 — Levofloxacin + Acetaminophen"
  },
  {
    "scenario": "orbital-fracture",
    "diagnosis": "Blunt injury with orbital fracture",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###",
    "drugs": [
      "Sulfamethoxazole oph soln 4%,10mL/bot"
    ],
    "sources": [
      "ER-020",
      "LEG-046"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-013",
    "label": "Blunt injury with orbital fracture / Severity not specified / Regimen 1 — Sulfamethoxazole"
  },
  {
    "scenario": "hzo",
    "diagnosis": "Herpes zoster ophthalmic assessment",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Acyclovir 400mg/tab  1  PC  BID  P  PO  3 days\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Acyclovir 400mg/tab",
      "Acetaminophen 500mg/tab",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "ER-021"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acyclovir 400mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acyclovir 400mg/tab  1  PC  BID  P  PO  3 days"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-014",
    "label": "Herpes zoster ophthalmic assessment / Severity not specified / Regimen 1 — Acyclovir + Acetaminophen + Balanced salt solution"
  },
  {
    "scenario": "canaliculitis",
    "diagnosis": "Canaliculitis",
    "category": "Lids / Lacrimal",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days\nTetracycline HCL 1% eye oint 5gm/tube  1  GT  BID  ###\n(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Tetracycline HCL 1% eye oint 5gm/tube",
      "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab"
    ],
    "sources": [
      "ER-023"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days"
      },
      {
        "drug": "Tetracycline HCL 1% eye oint 5gm/tube",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Tetracycline HCL 1% eye oint 5gm/tube  1  GT  BID  ###"
      },
      {
        "drug": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "Q12H",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-015",
    "label": "Canaliculitis / Severity not specified / Regimen 1 — Acetaminophen + Tetracycline HCL + (Clavulanic acid"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula off",
    "lines": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###  1 day\nPhenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###  1 day",
    "drugs": [
      "Atropine 1% eye drops 10mL/bot",
      "Phenylephrine 10% oph soln, 5mL/bot"
    ],
    "sources": [
      "ER-025",
      "ER-102",
      "ER-142",
      "ER-166",
      "ER-226",
      "ER-265",
      "ER-282",
      "LEG-061",
      "LEG-064",
      "LEG-065",
      "LEG-066",
      "LEG-067",
      "LEG-068"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- dilate pupil (OS) : atropine 1% and Phenylephrine 10% stat and on call",
      "- dilate pupil (OS) : atropine 1% and Phenylephrine 10% CM and on call",
      "- dilate pupil (OD) : atropine 1% and Phenylephrine 10% stat and on call",
      "-**請病患周一8:30AM至MA####診間檢查,務必於8:00點atropine 1%+ phenylephrine"
    ],
    "orders": [
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "  1 day",
        "line": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###  1 day"
      },
      {
        "drug": "Phenylephrine 10% oph soln, 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "  1 day",
        "line": "Phenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-016",
    "label": "Retinal detachment / Macula off / Regimen 3 — Atropine + Phenylephrine"
  },
  {
    "scenario": "aacg",
    "diagnosis": "Acute angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot"
    ],
    "sources": [
      "ER-027"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\" (if renal function is normal)",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then bid => asthma/heart disease (AV block) patient 不用"
    ],
    "orders": [
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-017",
    "label": "Acute angle closure / Severity not specified / Regimen 1 — AcetaZOLAMIDE + Mannitol + Brimonidine + Dorzolamide"
  },
  {
    "scenario": "dry-eye",
    "diagnosis": "Dry eye / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  PO  3 days\nSustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab",
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)"
    ],
    "sources": [
      "ER-029"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days"
      },
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-018",
    "label": "Dry eye / SPK / Severity not specified / Regimen 1 — Chloramphenicol + Acetaminophen + Sustain-tears"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nLevocetirizine 5mg/tab  1  PC  QD  P  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab",
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Levocetirizine 5mg/tab"
    ],
    "sources": [
      "ER-030"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Levocetirizine 5mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QD",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Levocetirizine 5mg/tab  1  PC  QD  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-019",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 1 — Chloramphenicol + Acetaminophen + Fluorometholone + Levocetirizine"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  5 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-031"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-020",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 3 — Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "postop-inflammation",
    "diagnosis": "Postoperative inflammation / Assessment",
    "category": "Cataract / Postoperative",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-032"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "timolol BID OS"
    ],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-021",
    "label": "Postoperative inflammation / Assessment / Severity not specified / Regimen 1 — Acetaminophen"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  P  PO  3 days\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###  1 day\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  GT  BID  ###  1 day",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot"
    ],
    "sources": [
      "ER-033",
      "ER-035"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Diamox 1PC PO QID",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then bid",
      "- cravit QID (自備)"
    ],
    "orders": [
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
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###  1 day"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  GT  BID  ###  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-022",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 2 — AcetaZOLAMIDE + Brimonidine + Dorzolamide"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###  1 day",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-034"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-023",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 2 — Acetaminophen + Chloramphenicol"
  },
  {
    "scenario": "open-globe",
    "diagnosis": "Open globe injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  PC  BID  ###\nMoxifloxacin 400mg/250mL/bot  1  PC  QD  IV\nAcetaminophen 500mg/tab  1  PC  QID  PO\nMoxifloxacin 400mg/250mL/bot  1  PC  STAT  IV\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  PC  Q1H  ###",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube",
      "Moxifloxacin 400mg/250mL/bot",
      "Acetaminophen 500mg/tab",
      "Moxifloxacin 400mg/250mL/bot",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot"
    ],
    "sources": [
      "ER-036"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- toxoid 0.5cc im stat, Moxifloxacin 1amp IV stat",
      "***請先開立並於入開刀房時請讓病人攜帶Vancomycin HCl (ivf) 1GM/vial,Ceftazidime 500mg/vial, Dexamethasone 5 mg/mL 各一瓶一同進入開刀房***"
    ],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  PC  BID  ###"
      },
      {
        "drug": "Moxifloxacin 400mg/250mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "QD",
        "ap": "",
        "sourceRoute": "IV",
        "route": "IV",
        "days": "",
        "line": "Moxifloxacin 400mg/250mL/bot  1  PC  QD  IV"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "Moxifloxacin 400mg/250mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IV",
        "route": "IV",
        "days": "",
        "line": "Moxifloxacin 400mg/250mL/bot  1  PC  STAT  IV"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  PC  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-024",
    "label": "Open globe injury / Severity not specified / Regimen 2 — Gentamicin + Moxifloxacin + Acetaminophen + Levofloxacin"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Fluorometholone oph susp. 0.02%,5mL/bot  1  GT  TID  ###  1 day\nSulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###  1 day\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Fluorometholone oph susp. 0.02%,5mL/bot",
      "Sulfamethoxazole oph soln 4%,10mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-037"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Fluorometholone oph susp. 0.02%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Fluorometholone oph susp. 0.02%,5mL/bot  1  GT  TID  ###  1 day"
      },
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###  1 day"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-025",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 2 — Fluorometholone + Sulfamethoxazole + Acetaminophen"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###  7 days\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###  7 days\nAtropine 1% eye drops 10mL/bot  1  GT  STAT  ###  1 day\nPhenylephrine 10% oph soln, 5mL/bot  1  GT  STAT  ###  1 day\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  TID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Atropine 1% eye drops 10mL/bot",
      "Atropine 1% eye drops 10mL/bot",
      "Phenylephrine 10% oph soln, 5mL/bot",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot"
    ],
    "sources": [
      "ER-038"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- dilate pupil (OS) : atropine 1% and Phenylephrine 10% stat and on call",
      "Acetaminophen QID * 3 days",
      "Atropine 1% BID (OS) (**出院時改頻次)",
      "levofloxacin 1gt QID (OS)"
    ],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  7 days",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###  7 days"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  7 days",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###  7 days"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  STAT  ###  1 day"
      },
      {
        "drug": "Phenylephrine 10% oph soln, 5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Phenylephrine 10% oph soln, 5mL/bot  1  GT  STAT  ###  1 day"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  TID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-026",
    "label": "Retinal detachment / Severity not specified / Regimen 4 — Acetaminophen + Prednisolone + Atropine + Phenylephrine"
  },
  {
    "scenario": "orbital-fracture",
    "diagnosis": "Blunt injury with orbital fracture",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days\nTobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###  1 day",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Tobramycin oph soln 0.3%,5mL/bot"
    ],
    "sources": [
      "ER-039"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days"
      },
      {
        "drug": "Tobramycin oph soln 0.3%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "  1 day",
        "line": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-027",
    "label": "Blunt injury with orbital fracture / Severity not specified / Regimen 2 — Acetaminophen + Tobramycin"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###  1 day\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###  1 day\nAcetaminophen 500mg/tab  1  PC  QID  PO  3 days",
    "drugs": [
      "Balanced salt solution, 15mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-041"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "  1 day",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###  1 day"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "  1 day",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###  1 day"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-028",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 3 — Balanced salt solution + Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "nvg",
    "diagnosis": "Neovascular glaucoma",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  150  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###\nIsosorbide solution 700mg/mL,500mL/bot  15  ML  TID  P  PO  1 day",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Isosorbide solution 700mg/mL,500mL/bot"
    ],
    "sources": [
      "ER-043"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 150ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then BID => asthma/heart disease(AV block) patient 不用",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "150",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  150  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###"
      },
      {
        "drug": "Isosorbide solution 700mg/mL,500mL/bot",
        "dose": "15",
        "unit": "ML",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "Isosorbide solution 700mg/mL,500mL/bot  15  ML  TID  P  PO  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-029",
    "label": "Neovascular glaucoma / Severity not specified / Regimen 1 — AcetaZOLAMIDE + Mannitol + Brimonidine + Dorzolamide"
  },
  {
    "scenario": "nvg",
    "diagnosis": "Neovascular glaucoma",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot"
    ],
    "sources": [
      "ER-044"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then BID => asthma/heart disease(AV block) patient 不用",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-030",
    "label": "Neovascular glaucoma / Severity not specified / Regimen 2 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "aau",
    "diagnosis": "Anterior uveitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  Q1H  ###  1 day\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-045"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "  1 day",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  Q1H  ###  1 day"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-031",
    "label": "Anterior uveitis / Severity not specified / Regimen 1 — Prednisolone + Acetaminophen"
  },
  {
    "scenario": "conjunctivitis",
    "diagnosis": "Acute conjunctivitis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###  1 day\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Emedastine oph.solution 0.05%,5mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-046"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "  1 day",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###  1 day"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-032",
    "label": "Acute conjunctivitis / Severity not specified / Regimen 1 — Emedastine + Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "ulcer",
    "diagnosis": "Corneal ulcer / Infectious keratitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  ###  GT  Q1H  ###  1 day\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-049"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "###",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "  1 day",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  ###  GT  Q1H  ###  1 day"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-033",
    "label": "Corneal ulcer / Infectious keratitis / Severity not specified / Regimen 1 — Levofloxacin + Acetaminophen"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###  1 day\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Balanced salt solution, 15mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-050"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "Norfloxacin QID + Tobramycin HS OS (自備)",
      "BSS Q1H",
      "acetaminophen QID"
    ],
    "orders": [
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "  1 day",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###  1 day"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-034",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 4 — Balanced salt solution + Acetaminophen"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###  1 day\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###  1 day\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-052"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###  1 day"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###  1 day"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-035",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 5 — Chloramphenicol + Balanced salt solution + Acetaminophen"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-054"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-036",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 6 — Acetaminophen"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###  1 day\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###  1 day",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "ER-055"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "  1 day",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###  1 day"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "  1 day",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-037",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 7 — Acetaminophen + Chloramphenicol + Balanced salt solution"
  },
  {
    "scenario": "aacg",
    "diagnosis": "Acute angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot"
    ],
    "sources": [
      "ER-056",
      "ER-112",
      "ER-210"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then bid => asthma/heart disease (AV block) patient 不用",
      "- Xalatan: 1gt stat and HS",
      "- Brimonidine : 1gt stat and BID (自備藥)",
      "- Cosopt: 1gt stat then bid"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-038",
    "label": "Acute angle closure / Severity not specified / Regimen 2 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot"
    ],
    "sources": [
      "ER-058"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then bid => asthma/heart disease(AV block) patient 不用",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-039",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 3 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###\nSustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  BID  ###\nEmedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
      "Emedastine oph.solution 0.05%,5mL/bot"
    ],
    "sources": [
      "ER-059"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q4H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###"
      },
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  BID  ###"
      },
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-040",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 8 — Acetaminophen + Levofloxacin + Sustain-tears + Emedastine"
  },
  {
    "scenario": "conjunctivitis",
    "diagnosis": "Acute conjunctivitis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nEmedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Emedastine oph.solution 0.05%,5mL/bot"
    ],
    "sources": [
      "ER-060",
      "ER-061",
      "ER-160",
      "ER-236",
      "ER-284",
      "ER-294"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-041",
    "label": "Acute conjunctivitis / Severity not specified / Regimen 2 — Chloramphenicol + Emedastine"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-062",
      "LEG-054"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-042",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 3 — Chloramphenicol"
  },
  {
    "scenario": "thermal",
    "diagnosis": "Thermal injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nGentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "ER-065"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "TOPI",
        "route": "TOPI",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI"
      }
    ],
    "kind": "Order table",
    "id": "MED-043",
    "label": "Thermal injury / Roper-Hall grade I / Regimen 1 — Chloramphenicol + Fluorometholone + Gentamicin"
  },
  {
    "scenario": "retinal-break",
    "diagnosis": "Retinal break / Tear",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-067"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-044",
    "label": "Retinal break / Tear / Severity not specified / Regimen 1 — Acetaminophen"
  },
  {
    "scenario": "retinal-break",
    "diagnosis": "Retinal break / Tear",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  TID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nIbuprofen 400mg/tab  1  PC  TID  P  PO  3 days",
    "drugs": [
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Ibuprofen 400mg/tab"
    ],
    "sources": [
      "ER-068"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  TID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Ibuprofen 400mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Ibuprofen 400mg/tab  1  PC  TID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-045",
    "label": "Retinal break / Tear / Severity not specified / Regimen 2 — Fluorometholone + Chloramphenicol + Ibuprofen"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  5 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-069"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-046",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 4 — Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "laceration",
    "diagnosis": "Eyelid / Conjunctival laceration",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  QID  TOPI",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "ER-071"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "TOPI",
        "route": "TOPI",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  QID  TOPI"
      }
    ],
    "kind": "Order table",
    "id": "MED-047",
    "label": "Eyelid / Conjunctival laceration / Severity not specified / Regimen 1 — Gentamicin"
  },
  {
    "scenario": "fb",
    "diagnosis": "Surface foreign body / Rust ring",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  5 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-072"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q4H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-048",
    "label": "Surface foreign body / Rust ring / Severity not specified / Regimen 1 — Levofloxacin + Balanced salt solution + Acetaminophen"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-073"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- Keep oph OPD medications: cravit QID OD, prednisolone QID OD"
    ],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-049",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 4 — Levofloxacin + Prednisolone + Acetaminophen"
  },
  {
    "scenario": "postop-wound",
    "diagnosis": "Postoperative wound leak / oozing",
    "category": "Cataract / Postoperative",
    "severity": "Postoperative",
    "lines": "(眼用調製品) Ceftazidime 25mg/mL/bot　　**2  1  GT  Q1H  ###  7 days\n(眼用調製品) Vancomycin 25mg/mLL/bot　　**4  1  GT  Q1H  ###  7 days\nSulfamethoxazole oph soln 4%,10ml/bot  2  PC  ONCE  ###\nCeftazidime 500mg/vial  1  PC  STAT  ###  1 day\nVancomycin HCl 1GM/vial (Vanlyo,台裕)  1  PC  STAT  ###  1 day",
    "drugs": [
      "(眼用調製品) Ceftazidime 25mg/mL/bot　　**2",
      "(眼用調製品) Vancomycin 25mg/mLL/bot　　**4",
      "Sulfamethoxazole oph soln 4%,10ml/bot",
      "Ceftazidime 500mg/vial",
      "Vancomycin HCl 1GM/vial (Vanlyo,台裕)"
    ],
    "sources": [
      "ER-074"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "===>    vancomycin (25mg/cc) 1gtt q1h (OS) (自備藥請協助冰存)",
      "** 請開立OSMD 2PC (自費), Fortum 0.5 g, Vancomycin 1g 及兩張病患標籤，請病人領藥後送至二區診間泡藥 **"
    ],
    "orders": [
      {
        "drug": "(眼用調製品) Ceftazidime 25mg/mL/bot　　**2",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  7 days",
        "line": "(眼用調製品) Ceftazidime 25mg/mL/bot　　**2  1  GT  Q1H  ###  7 days"
      },
      {
        "drug": "(眼用調製品) Vancomycin 25mg/mLL/bot　　**4",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  7 days",
        "line": "(眼用調製品) Vancomycin 25mg/mLL/bot　　**4  1  GT  Q1H  ###  7 days"
      },
      {
        "drug": "Sulfamethoxazole oph soln 4%,10ml/bot",
        "dose": "2",
        "unit": "PC",
        "freq": "ONCE",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10ml/bot  2  PC  ONCE  ###"
      },
      {
        "drug": "Ceftazidime 500mg/vial",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "  1 day",
        "line": "Ceftazidime 500mg/vial  1  PC  STAT  ###  1 day"
      },
      {
        "drug": "Vancomycin HCl 1GM/vial (Vanlyo,台裕)",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "  1 day",
        "line": "Vancomycin HCl 1GM/vial (Vanlyo,台裕)  1  PC  STAT  ###  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-050",
    "label": "Postoperative wound leak / oozing / Postoperative / Regimen 1 — (眼用調製品) Ceftazidime + (眼用調製品) Vancomycin + Sulfamethoxazole + Ceftazidime"
  },
  {
    "scenario": "aacg",
    "diagnosis": "Acute angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Tafluprost oph.soln 0.0015%, 2.5mL/bot  1  GT  HS  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  GT  BID  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Tafluprost oph.soln 0.0015%, 2.5mL/bot",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "AcetaZOLAMIDE 250mg/tab"
    ],
    "sources": [
      "ER-076"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Diamox 1PC QID PO  (自備藥)",
      "- cosopt BID"
    ],
    "orders": [
      {
        "drug": "Tafluprost oph.soln 0.0015%, 2.5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Tafluprost oph.soln 0.0015%, 2.5mL/bot  1  GT  HS  ###"
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
      },
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
      }
    ],
    "kind": "Order table",
    "id": "MED-051",
    "label": "Acute angle closure / Severity not specified / Regimen 3 — Tafluprost + Dorzolamide + AcetaZOLAMIDE"
  },
  {
    "scenario": "aacg",
    "diagnosis": "Acute angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\nDorzolamide oph soln 2% 5mL/bot  1  PC  TID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "Dorzolamide oph soln 2% 5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot"
    ],
    "sources": [
      "ER-078"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Dorzolamide: 1gt stat and TID",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "Dorzolamide oph soln 2% 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Dorzolamide oph soln 2% 5mL/bot  1  PC  TID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-052",
    "label": "Acute angle closure / Severity not specified / Regimen 4 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "visual-disturbance",
    "diagnosis": "Subjective visual disturbance / Pain",
    "category": "Neuro-ophthalmology",
    "severity": "Severity not specified",
    "lines": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Emedastine oph.solution 0.05%,5mL/bot"
    ],
    "sources": [
      "ER-080"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-053",
    "label": "Subjective visual disturbance / Pain / Severity not specified / Regimen 2 — Emedastine"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF\nDorzolamide 2% +Timolol 0.5%) oph soln 5mL/bot  1  PC  BID  ###\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Dorzolamide 2% +Timolol 0.5%) oph soln 5mL/bot",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)"
    ],
    "sources": [
      "ER-081"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then bid => asthma/heart disease(AV block) patient 不用"
    ],
    "orders": [
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF"
      },
      {
        "drug": "Dorzolamide 2% +Timolol 0.5%) oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Dorzolamide 2% +Timolol 0.5%) oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-054",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 4 — AcetaZOLAMIDE + Mannitol + Dorzolamide + Brimonidine"
  },
  {
    "scenario": "aacg",
    "diagnosis": "Acute angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO\nD-Mannitol (IVF) 20%,300ml/bag  300  ML  STAT  IVF\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  Q1H  ###\nDorzolamide 2% +Timolol 0.5%) oph soln 5mL/bot  1  GT  BID  ###\nBrimonidine oph.soln 0.15% 5ml/bot(Alphagan P,Allergan)  1  GT  BID  ###\nLatanoprost oph.soln 0.005%,2.5mL/bot(Xalatan,Pfizer/Viatris)  1  GT  QD  ###",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300ml/bag",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Dorzolamide 2% +Timolol 0.5%) oph soln 5mL/bot",
      "Brimonidine oph.soln 0.15% 5ml/bot(Alphagan P,Allergan)",
      "Latanoprost oph.soln 0.005%,2.5mL/bot(Xalatan,Pfizer/Viatris)"
    ],
    "sources": [
      "ER-082"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降!!",
      "- Brimonidine : 1GT STAT and BID",
      "- Cosopt: 1GT STAT then BID",
      "- latanoprost:1GT STAT then QD"
    ],
    "orders": [
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300ml/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "",
        "line": "D-Mannitol (IVF) 20%,300ml/bag  300  ML  STAT  IVF"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Dorzolamide 2% +Timolol 0.5%) oph soln 5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Dorzolamide 2% +Timolol 0.5%) oph soln 5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5ml/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5ml/bot(Alphagan P,Allergan)  1  GT  BID  ###"
      },
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot(Xalatan,Pfizer/Viatris)",
        "dose": "1",
        "unit": "GT",
        "freq": "QD",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot(Xalatan,Pfizer/Viatris)  1  GT  QD  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-055",
    "label": "Acute angle closure / Severity not specified / Regimen 5 — AcetaZOLAMIDE + Mannitol + Prednisolone + Dorzolamide"
  },
  {
    "scenario": "aacg",
    "diagnosis": "Acute angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO\nD-Mannitol (IVF) 20%,300ml/bag  300  ML  STAT  IVF\nPrednisolone acetate oph susp 1% 5ml/bot  1  PC  Q1H  ###\nDorzolamide oph soln 2% 5mL/bot  1  PC  BID  ###\nBrimonidine oph.soln 0.15% 5ml/bot(Alphagan P,Allergan)  1  PC  BID  ###\nLatanoprost oph.soln 0.005% 2.5ml/bot(Xalatan,Pfizer)  1  PC  HS  ###",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300ml/bag",
      "Prednisolone acetate oph susp 1% 5ml/bot",
      "Dorzolamide oph soln 2% 5mL/bot",
      "Brimonidine oph.soln 0.15% 5ml/bot(Alphagan P,Allergan)",
      "Latanoprost oph.soln 0.005% 2.5ml/bot(Xalatan,Pfizer)"
    ],
    "sources": [
      "ER-083"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Dorzolamide: 1gt stat and BID",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300ml/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "",
        "line": "D-Mannitol (IVF) 20%,300ml/bag  300  ML  STAT  IVF"
      },
      {
        "drug": "Prednisolone acetate oph susp 1% 5ml/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp 1% 5ml/bot  1  PC  Q1H  ###"
      },
      {
        "drug": "Dorzolamide oph soln 2% 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Dorzolamide oph soln 2% 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5ml/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5ml/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "Latanoprost oph.soln 0.005% 2.5ml/bot(Xalatan,Pfizer)",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005% 2.5ml/bot(Xalatan,Pfizer)  1  PC  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-056",
    "label": "Acute angle closure / Severity not specified / Regimen 6 — AcetaZOLAMIDE + Mannitol + Prednisolone + Dorzolamide"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula impending off",
    "lines": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###\nPhenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###",
    "drugs": [
      "Atropine 1% eye drops 10mL/bot",
      "Phenylephrine 10% oph soln, 5mL/bot"
    ],
    "sources": [
      "ER-084",
      "ER-174"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- dilate pupil (OD) : atropine 1% and Phenylephrine 10% stat and on call",
      "- dilate pupil (OD): atropine 1% and Phenylephrine 10% at \"### ###\" and on call"
    ],
    "orders": [
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###"
      },
      {
        "drug": "Phenylephrine 10% oph soln, 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Phenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-057",
    "label": "Retinal detachment / Macula impending off / Regimen 5 — Atropine + Phenylephrine"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-085",
      "ER-126",
      "ER-287"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-058",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 5 — Acetaminophen + Chloramphenicol"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula off",
    "lines": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###\nPhenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###",
    "drugs": [
      "Atropine 1% eye drops 10mL/bot",
      "Phenylephrine 10% oph soln, 5mL/bot"
    ],
    "sources": [
      "ER-086",
      "ER-151"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- dilate pupil (OD) : atropine 1% and Phenylephrine 10% stat and on call"
    ],
    "orders": [
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###"
      },
      {
        "drug": "Phenylephrine 10% oph soln, 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Phenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-059",
    "label": "Retinal detachment / Macula off / Regimen 6 — Atropine + Phenylephrine"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###\nIsosorbide solution 700mg/mL,500mL/bot  30  ML  TID  P  PO  1 day",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Isosorbide solution 700mg/mL,500mL/bot"
    ],
    "sources": [
      "ER-087"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then bid => asthma/heart disease(AV block) patient 不用",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###"
      },
      {
        "drug": "Isosorbide solution 700mg/mL,500mL/bot",
        "dose": "30",
        "unit": "ML",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "Isosorbide solution 700mg/mL,500mL/bot  30  ML  TID  P  PO  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-060",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 5 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "ulcer",
    "diagnosis": "Corneal ulcer / Infectious keratitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q1H  ###\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###\n(眼用調製品) Amikacin 12.5mg/mL/bot　　**2  1  GT  Q1H  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  5 days\nGentamicin oph oint 0.3%,5gm/tube  ###  QS  HS  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Atropine 1% eye drops 10mL/bot",
      "(眼用調製品) Amikacin 12.5mg/mL/bot　　**2",
      "Acetaminophen 500mg/tab",
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "ER-089"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "(眼用調製品) Amikacin 12.5mg/mL/bot　　**2",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(眼用調製品) Amikacin 12.5mg/mL/bot　　**2  1  GT  Q1H  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days"
      },
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-061",
    "label": "Corneal ulcer / Infectious keratitis / Severity not specified / Regimen 2 — Levofloxacin + Atropine + (眼用調製品) Amikacin + Acetaminophen"
  },
  {
    "scenario": "postop-inflammation",
    "diagnosis": "Postoperative inflammation / Assessment",
    "category": "Cataract / Postoperative",
    "severity": "Postoperative",
    "lines": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###\nDucressa eye drops (Dexamethasone 0.1%+ Levofloxacin 0.5%), 5mL/bot  1  GT  QID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "Ducressa eye drops (Dexamethasone 0.1%+ Levofloxacin 0.5%), 5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot"
    ],
    "sources": [
      "ER-092"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "brimonidine BID"
    ],
    "orders": [
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###"
      },
      {
        "drug": "Ducressa eye drops (Dexamethasone 0.1%+ Levofloxacin 0.5%), 5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Ducressa eye drops (Dexamethasone 0.1%+ Levofloxacin 0.5%), 5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-062",
    "label": "Postoperative inflammation / Assessment / Postoperative / Regimen 2 — Brimonidine + Levofloxacin + Prednisolone"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Postoperative",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  P  PO  3 days\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Fluorometholone oph susp. 0.1%,5mL/bot"
    ],
    "sources": [
      "ER-093"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "4. add medications as follows: diamox PO QID * 3 days + alphagan 1gt BID OD * 7 days"
    ],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
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
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-063",
    "label": "Elevated IOP / Ocular hypertension / Postoperative / Regimen 6 — Acetaminophen + AcetaZOLAMIDE + Brimonidine + Levofloxacin"
  },
  {
    "scenario": "vh",
    "diagnosis": "Vitreous hemorrhage",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Tranexamic acid 250mg/tab  1  PC  TID  PO  3 days",
    "drugs": [
      "Tranexamic acid 250mg/tab"
    ],
    "sources": [
      "ER-094"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tranexamic acid 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Tranexamic acid 250mg/tab  1  PC  TID  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-064",
    "label": "Vitreous hemorrhage / Severity not specified / Regimen 2 — Tranexamic acid"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-095"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-065",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 5 — Acetaminophen + Chloramphenicol"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-096"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-066",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 6 — Levofloxacin + Acetaminophen"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nCarbomer oph gel 0.2%,10gm/tube (健保初次開立限眼科專科醫師)  ###  QS  QID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Carbomer oph gel 0.2%,10gm/tube (健保初次開立限眼科專科醫師)"
    ],
    "sources": [
      "ER-098"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- Keep current OPH OPD medications (自備): BSS autoserum Q2H OU, chloramphanicol QID OU, carbomer QID OS, simbrinza BID OU"
    ],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Carbomer oph gel 0.2%,10gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Carbomer oph gel 0.2%,10gm/tube (健保初次開立限眼科專科醫師)  ###  QS  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-067",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 7 — Acetaminophen + Carbomer"
  },
  {
    "scenario": "vh",
    "diagnosis": "Vitreous hemorrhage",
    "category": "Retina / Vitreous",
    "severity": "VH grade 3",
    "lines": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days",
    "drugs": [
      "Tranexamic acid 250mg/tab"
    ],
    "sources": [
      "ER-100"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tranexamic acid 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-068",
    "label": "Vitreous hemorrhage / VH grade 3 / Regimen 3 — Tranexamic acid"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###  1 day\nPhenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###  1 day",
    "drugs": [
      "Atropine 1% eye drops 10mL/bot",
      "Phenylephrine 10% oph soln, 5mL/bot"
    ],
    "sources": [
      "ER-101",
      "ER-177",
      "LEG-062"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- dilate pupil (OS) : atropine 1% and Phenylephrine 10% stat and on call",
      "- dilate pupil (OD) : atropine 1% and Phenylephrine 10% stat and on call"
    ],
    "orders": [
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "  1 day",
        "line": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###  1 day"
      },
      {
        "drug": "Phenylephrine 10% oph soln, 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "  1 day",
        "line": "Phenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-069",
    "label": "Retinal detachment / Severity not specified / Regimen 7 — Atropine + Phenylephrine"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nIsosorbide solution 700mg/mL,500mL/bot  10  ML  TID  PO\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "Isosorbide solution 700mg/mL,500mL/bot",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Acetaminophen 500mg/tab",
      "Atropine 1% eye drops 10mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-104"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 150ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then bid => asthma/heart disease (AV block) patient 不用",
      "- Xalatan: 1gt stat and HS",
      "- atropine 1gt stat and BID",
      "- chloramphenicol 1gt QID"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "Isosorbide solution 700mg/mL,500mL/bot",
        "dose": "10",
        "unit": "ML",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "Isosorbide solution 700mg/mL,500mL/bot  10  ML  TID  PO"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-070",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 7 — Latanoprost + Isosorbide solution + Mannitol + Brimonidine"
  },
  {
    "scenario": "orbital-fracture",
    "diagnosis": "Blunt injury with orbital fracture",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Sulfamethoxazole oph soln 4%,10mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-105"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-071",
    "label": "Blunt injury with orbital fracture / Severity not specified / Regimen 3 — Sulfamethoxazole + Acetaminophen"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Bimatoprost 0.03%,0.4mL/amp,30's/box (整盒發放)  1  GT  QN  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Bimatoprost 0.03%,0.4mL/amp,30's/box (整盒發放)",
      "Acetaminophen 500mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot"
    ],
    "sources": [
      "ER-106"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Cosopt: 1gt stat then bid => asthma/heart disease(AV block) patient 不用",
      "- Acetaminophen QID",
      "- Cosopt: 1gt bid OS"
    ],
    "orders": [
      {
        "drug": "Bimatoprost 0.03%,0.4mL/amp,30's/box (整盒發放)",
        "dose": "1",
        "unit": "GT",
        "freq": "QN",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Bimatoprost 0.03%,0.4mL/amp,30's/box (整盒發放)  1  GT  QN  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-072",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 8 — Bimatoprost + Acetaminophen + Mannitol + Dorzolamide"
  },
  {
    "scenario": "sch",
    "diagnosis": "Subconjunctival hemorrhage",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Timolol maleate 0.5% oph soln,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Timolol maleate 0.5% oph soln,5mL/bot"
    ],
    "sources": [
      "ER-107"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "Subconjunctival haemorrhage is a very common phenomenon that is often idiopathic and apparently spontaneous. It may result from surgery, conjunctivitis and trauma. The hemorrhage is usually asymptomatic. Coughing, sneezing and vomiting are common precipitants. Systemic vascular disease (hypertension) is prevalent. Patients are often taking aspirin or have coagulopathy that have an effect on platelet function. The vision is usually UNAFFECTED. Spontaneous resolution over a week or two is typical. Emergent referral is NOT indicated in these cases unless patient reported other ocular signs such as VA decrease, eye pain, increased discharge, etc."
    ],
    "orders": [
      {
        "drug": "Timolol maleate 0.5% oph soln,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Timolol maleate 0.5% oph soln,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-073",
    "label": "Subconjunctival hemorrhage / Severity not specified / Regimen 1 — Timolol maleate"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot"
    ],
    "sources": [
      "ER-108"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-074",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 2 — Acetaminophen + Chloramphenicol + Prednisolone"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Atropine 1% eye drops 10mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-109"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-075",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 6 — Prednisolone + Atropine + Acetaminophen"
  },
  {
    "scenario": "retinal-break",
    "diagnosis": "Retinal break / Tear",
    "category": "Retina / Vitreous",
    "severity": "VH grade 2",
    "lines": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  TID  ###",
    "drugs": [
      "Tranexamic acid 250mg/tab",
      "Fluorometholone oph susp. 0.1%,5mL/bot"
    ],
    "sources": [
      "ER-111"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tranexamic acid 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  TID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-076",
    "label": "Retinal break / Tear / VH grade 2 / Regimen 3 — Tranexamic acid + Fluorometholone"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-114",
      "ER-189"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-077",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 7 — Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "migraine",
    "diagnosis": "Migraine / Transient visual disturbance",
    "category": "Neuro-ophthalmology",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-116"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-078",
    "label": "Migraine / Transient visual disturbance / Severity not specified / Regimen 1 — Acetaminophen"
  },
  {
    "scenario": "laceration",
    "diagnosis": "Eyelid / Conjunctival laceration",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Tobramycin oph soln 0.3%,5mL/bot"
    ],
    "sources": [
      "ER-117"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tobramycin oph soln 0.3%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-079",
    "label": "Eyelid / Conjunctival laceration / Severity not specified / Regimen 2 — Tobramycin"
  },
  {
    "scenario": "preseptal",
    "diagnosis": "Preseptal cellulitis",
    "category": "Lids / Lacrimal",
    "severity": "Severity not specified",
    "lines": "Augmentin syrup 457mg/5mL,35mL/bot (Amoxycillin 80mg+Clavulanate 11.4mg)/mL  5  ML  TID  P  PO  1 day\nTobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Augmentin syrup 457mg/5mL,35mL/bot (Amoxycillin 80mg+Clavulanate 11.4mg)/mL",
      "Tobramycin oph soln 0.3%,5mL/bot"
    ],
    "sources": [
      "ER-119"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Augmentin syrup 457mg/5mL,35mL/bot (Amoxycillin 80mg+Clavulanate 11.4mg)/mL",
        "dose": "5",
        "unit": "ML",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "Augmentin syrup 457mg/5mL,35mL/bot (Amoxycillin 80mg+Clavulanate 11.4mg)/mL  5  ML  TID  P  PO  1 day"
      },
      {
        "drug": "Tobramycin oph soln 0.3%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-080",
    "label": "Preseptal cellulitis / Severity not specified / Regimen 1 — Augmentin syrup + Tobramycin"
  },
  {
    "scenario": "postop-inflammation",
    "diagnosis": "Postoperative inflammation / Assessment",
    "category": "Cataract / Postoperative",
    "severity": "Severity not specified",
    "lines": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###\nSulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###",
    "drugs": [
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Atropine 1% eye drops 10mL/bot",
      "Sulfamethoxazole oph soln 4%,10mL/bot"
    ],
    "sources": [
      "ER-120"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "FML 0.1% QID OD",
      "atropine BID OD (自備)",
      "o.s.m.d. QID OD (自備)"
    ],
    "orders": [
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-081",
    "label": "Postoperative inflammation / Assessment / Severity not specified / Regimen 3 — Fluorometholone + Atropine + Sulfamethoxazole"
  },
  {
    "scenario": "vh",
    "diagnosis": "Vitreous hemorrhage",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days",
    "drugs": [
      "Tranexamic acid 250mg/tab"
    ],
    "sources": [
      "ER-121",
      "ER-214",
      "LEG-077",
      "LEG-078",
      "LEG-079",
      "LEG-080"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tranexamic acid 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-082",
    "label": "Vitreous hemorrhage / Severity not specified / Regimen 4 — Tranexamic acid"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  PO  3 days\nGentamicin oph oint 0.3%,5gm/tube  ###  QS  HS  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab",
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "ER-122"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days"
      },
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-083",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 8 — Chloramphenicol + Acetaminophen + Gentamicin"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-123",
      "ER-154"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-084",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 3 — Acetaminophen + Fluorometholone + Chloramphenicol"
  },
  {
    "scenario": "allergic",
    "diagnosis": "Allergic conjunctivitis / Chemosis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Betamethasone eye drops 0.1%, 0.5mL/tube  1  GT  QID  ###\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Betamethasone eye drops 0.1%, 0.5mL/tube",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-124"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Betamethasone eye drops 0.1%, 0.5mL/tube",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Betamethasone eye drops 0.1%, 0.5mL/tube  1  GT  QID  ###"
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
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-085",
    "label": "Allergic conjunctivitis / Chemosis / Severity not specified / Regimen 1 — Betamethasone eye drops + Brimonidine + Chloramphenicol"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Tobramycin oph soln 0.3%,5mL/bot"
    ],
    "sources": [
      "ER-125"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tobramycin oph soln 0.3%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-086",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 8 — Tobramycin"
  },
  {
    "scenario": "conjunctivitis",
    "diagnosis": "Acute conjunctivitis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Emedastine oph.solution 0.05%,5mL/bot",
      "Acetaminophen 500mg/tab",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-128"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-087",
    "label": "Acute conjunctivitis / Severity not specified / Regimen 3 — Emedastine + Acetaminophen + Chloramphenicol"
  },
  {
    "scenario": "trichiasis",
    "diagnosis": "Trichiasis / Conjunctival cyst",
    "category": "Lids / Lacrimal",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-130"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-088",
    "label": "Trichiasis / Conjunctival cyst / Severity not specified / Regimen 1 — Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot"
    ],
    "sources": [
      "ER-131"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-089",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 9 — Levofloxacin + Prednisolone"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-132"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "cravit QID",
      "prednisolone QID",
      "acetaminophen QID"
    ],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-090",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 10 — Levofloxacin + Prednisolone + Acetaminophen"
  },
  {
    "scenario": "ulcer",
    "diagnosis": "Corneal ulcer / Infectious keratitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q1H  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-133"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-091",
    "label": "Corneal ulcer / Infectious keratitis / Severity not specified / Regimen 3 — Levofloxacin + Acetaminophen"
  },
  {
    "scenario": "filament",
    "diagnosis": "Filamentary keratitis",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nBetamethasone eye drops 0.1%, 0.5mL/tube  1  GT  QID  ###",
    "drugs": [
      "Balanced salt solution, 15mL/bot",
      "Acetaminophen 500mg/tab",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Betamethasone eye drops 0.1%, 0.5mL/tube"
    ],
    "sources": [
      "ER-134"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Betamethasone eye drops 0.1%, 0.5mL/tube",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Betamethasone eye drops 0.1%, 0.5mL/tube  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-092",
    "label": "Filamentary keratitis / Severity not specified / Regimen 1 — Balanced salt solution + Acetaminophen + Chloramphenicol + Betamethasone eye drops"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "VH grade 2",
    "lines": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days",
    "drugs": [
      "Tranexamic acid 250mg/tab"
    ],
    "sources": [
      "ER-135"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tranexamic acid 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-093",
    "label": "Blunt ocular / Orbital injury / VH grade 2 / Regimen 9 — Tranexamic acid"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  5 days\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "ER-136",
      "ER-234"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-094",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 4 — Fluorometholone + Chloramphenicol + Acetaminophen + Balanced salt solution"
  },
  {
    "scenario": "orbital-fracture",
    "diagnosis": "Blunt injury with orbital fracture",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###  7 days",
    "drugs": [
      "Sulfamethoxazole oph soln 4%,10mL/bot"
    ],
    "sources": [
      "ER-138",
      "ER-180"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  7 days",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###  7 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-095",
    "label": "Blunt injury with orbital fracture / Severity not specified / Regimen 4 — Sulfamethoxazole"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot"
    ],
    "sources": [
      "ER-141"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-096",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 9 — Acetaminophen + Levofloxacin"
  },
  {
    "scenario": "secondary-angle",
    "diagnosis": "Secondary angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/botIsosorbide solution 700mg/mL,50  15    ML BIHS       PO   0      0     0        00mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  150  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  QID  ###\nPilocarpine oph soln 1%,10mL/bot  1  GT  BID  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/botIsosorbide solution 700mg/mL,50  15    ML BIHS       PO   0      0     0        00mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Pilocarpine oph soln 1%,10mL/bot"
    ],
    "sources": [
      "ER-144"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 150ml. stat, iv, \"FULL RUN\"",
      "=> oral diamox 1PC stat (自備藥)",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID (自備藥)",
      "- Cosopt: 1gt stat then bid (自備藥)",
      "- Xalatan: 1gt stat and HS (自備藥)",
      "- prednisolone forte 1gt stat and QID"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/botIsosorbide solution 700mg/mL,50  15    ML BIHS       PO   0      0     0        00mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/botIsosorbide solution 700mg/mL,50  15    ML BIHS       PO   0      0     0        00mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "150",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  150  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  QID  ###"
      },
      {
        "drug": "Pilocarpine oph soln 1%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Pilocarpine oph soln 1%,10mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-097",
    "label": "Secondary angle closure / Severity not specified / Regimen 1 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "aacg",
    "diagnosis": "Acute angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nIsosorbide solution 700mg/mL,500mL/bot  15  ML  TID  PO\nD-Mannitol (IVF) 20%,300mL/bag  150  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "Isosorbide solution 700mg/mL,500mL/bot",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-145"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 150ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then bid => asthma/heart disease(AV block) patient 不用",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "Isosorbide solution 700mg/mL,500mL/bot",
        "dose": "15",
        "unit": "ML",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "Isosorbide solution 700mg/mL,500mL/bot  15  ML  TID  PO"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "150",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  150  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-098",
    "label": "Acute angle closure / Severity not specified / Regimen 7 — Latanoprost + Isosorbide solution + Mannitol + Brimonidine"
  },
  {
    "scenario": "hzo",
    "diagnosis": "Herpes zoster ophthalmic assessment",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-146"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "chloramphenicol QID OD"
    ],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-099",
    "label": "Herpes zoster ophthalmic assessment / Severity not specified / Regimen 2 — Chloramphenicol"
  },
  {
    "scenario": "conjunctivitis",
    "diagnosis": "Acute conjunctivitis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###\nEmedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Tobramycin oph soln 0.3%,5mL/bot",
      "Emedastine oph.solution 0.05%,5mL/bot"
    ],
    "sources": [
      "ER-149"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tobramycin oph soln 0.3%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-100",
    "label": "Acute conjunctivitis / Severity not specified / Regimen 4 — Tobramycin + Emedastine"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  5 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-150"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q4H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-101",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 10 — Levofloxacin + Balanced salt solution + Acetaminophen"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Atropine 1% eye drops 10ml/bot  1  PC  STAT  ###\nPhenylephrine 10% oph soln 5ml/bot  1  PC  STAT  ###",
    "drugs": [
      "Atropine 1% eye drops 10ml/bot",
      "Phenylephrine 10% oph soln 5ml/bot"
    ],
    "sources": [
      "ER-152"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- dilate pupil (OS) : atropine 1% and Phenylephrine 10% stat and on call",
      "acetaminophen 1pc QID OS",
      "atropine 1% 1GT BID OS",
      "prednisolone sup 1GT QID OS"
    ],
    "orders": [
      {
        "drug": "Atropine 1% eye drops 10ml/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10ml/bot  1  PC  STAT  ###"
      },
      {
        "drug": "Phenylephrine 10% oph soln 5ml/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Phenylephrine 10% oph soln 5ml/bot  1  PC  STAT  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-102",
    "label": "Retinal detachment / Severity not specified / Regimen 8 — Atropine + Phenylephrine"
  },
  {
    "scenario": "hzo",
    "diagnosis": "Herpes zoster ophthalmic assessment",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Famciclovir 250mg/tab  2  PC  TID  PO  3 days",
    "drugs": [
      "Famciclovir 250mg/tab"
    ],
    "sources": [
      "ER-153"
    ],
    "reviewFlags": [
      "Medication table contains unparsed lines; see source."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Famciclovir 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Famciclovir 250mg/tab  2  PC  TID  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-103",
    "label": "Herpes zoster ophthalmic assessment / Severity not specified / Regimen 3 — Famciclovir"
  },
  {
    "scenario": "dacryocystitis",
    "diagnosis": "Dacryocystitis",
    "category": "Lids / Lacrimal",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  ###\n(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube",
      "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-155"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  ###"
      },
      {
        "drug": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "Q12H",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-104",
    "label": "Dacryocystitis / Severity not specified / Regimen 1 — Gentamicin + (Clavulanic acid + Acetaminophen"
  },
  {
    "scenario": "hzo",
    "diagnosis": "Herpes zoster ophthalmic assessment",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  PC  QID  ###\nFamciclovir 250mg/tab  2  PC  TID  PO  3 days\nTetracycline HCL 1% eye oint 5gm/tube  1  GT  BID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Famciclovir 250mg/tab",
      "Tetracycline HCL 1% eye oint 5gm/tube",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-156"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  PC  QID  ###"
      },
      {
        "drug": "Famciclovir 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Famciclovir 250mg/tab  2  PC  TID  PO  3 days"
      },
      {
        "drug": "Tetracycline HCL 1% eye oint 5gm/tube",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Tetracycline HCL 1% eye oint 5gm/tube  1  GT  BID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-105",
    "label": "Herpes zoster ophthalmic assessment / Severity not specified / Regimen 4 — Chloramphenicol + Famciclovir + Tetracycline HCL + Acetaminophen"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Tobramycin oph soln 0.3%,5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-158"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tobramycin oph soln 0.3%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-106",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 10 — Tobramycin + Acetaminophen"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-159",
      "ER-250"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-107",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 11 — Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "vh",
    "diagnosis": "Vitreous hemorrhage",
    "category": "Retina / Vitreous",
    "severity": "VH grade I",
    "lines": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days",
    "drugs": [
      "Tranexamic acid 250mg/tab"
    ],
    "sources": [
      "ER-161"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tranexamic acid 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-108",
    "label": "Vitreous hemorrhage / VH grade I / Regimen 5 — Tranexamic acid"
  },
  {
    "scenario": "exposure",
    "diagnosis": "Exposure keratitis",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nGentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI",
    "drugs": [
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab",
      "Balanced salt solution, 15mL/bot",
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "ER-163"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- Keep post-op meds, and add chloramphenicol QID OS."
    ],
    "orders": [
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "TOPI",
        "route": "TOPI",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI"
      }
    ],
    "kind": "Order table",
    "id": "MED-109",
    "label": "Exposure keratitis / Severity not specified / Regimen 1 — Sustain-tears + Chloramphenicol + Acetaminophen + Balanced salt solution"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Balanced salt solution, 15mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-165"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-110",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 11 — Balanced salt solution + Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "ER-167",
      "ER-201"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-111",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 12 — Chloramphenicol + Acetaminophen + Balanced salt solution"
  },
  {
    "scenario": "orbital-fracture",
    "diagnosis": "Blunt injury with orbital fracture",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-168"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-112",
    "label": "Blunt injury with orbital fracture / Severity not specified / Regimen 5 — Chloramphenicol"
  },
  {
    "scenario": "sch",
    "diagnosis": "Subconjunctival hemorrhage",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###\nEmedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Tobramycin oph soln 0.3%,5mL/bot",
      "Emedastine oph.solution 0.05%,5mL/bot"
    ],
    "sources": [
      "ER-169"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "Subconjunctival haemorrhage is a very common phenomenon that is often idiopathic and apparently spontaneous. It may result from surgery, conjunctivitis and trauma. The hemorrhage is usually asymptomatic. Coughing, sneezing and vomiting are common precipitants. Systemic vascular disease (hypertension) is prevalent. Patients are often taking aspirin or have coagulopathy that have an effect on platelet function. The vision is usually UNAFFECTED. Spontaneous resolution over a week or two is typical. Emergent referral is NOT*** indicated in these cases unless patient reported other ocular signs such as VA decrease, eye pain, increased discharge, etc."
    ],
    "orders": [
      {
        "drug": "Tobramycin oph soln 0.3%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-113",
    "label": "Subconjunctival hemorrhage / Severity not specified / Regimen 2 — Tobramycin + Emedastine"
  },
  {
    "scenario": "filament",
    "diagnosis": "Filamentary keratitis",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-170"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-114",
    "label": "Filamentary keratitis / Severity not specified / Regimen 2 — Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "hyphema",
    "diagnosis": "Hyphema / Microhyphema",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Atropine 1% eye drops 10mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot"
    ],
    "sources": [
      "ER-172"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-115",
    "label": "Hyphema / Microhyphema / Severity not specified / Regimen 1 — Atropine + Prednisolone"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Prednisolone acetate oph susp.1%,5mL/bot"
    ],
    "sources": [
      "ER-173"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-116",
    "label": "Retinal detachment / Severity not specified / Regimen 9 — Prednisolone"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Microhyphema",
    "lines": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Atropine 1% eye drops 10mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-175"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-117",
    "label": "Blunt ocular / Orbital injury / Microhyphema / Regimen 11 — Atropine + Prednisolone + Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "pvd",
    "diagnosis": "Vitreous degeneration / PVD",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nBimatoprost 0.01%,3mL/bot  1  GT  QN  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Bimatoprost 0.01%,3mL/bot"
    ],
    "sources": [
      "ER-176"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID (自備藥)",
      "- Cosopt: 1gt stat then bid(自備藥)  => asthma/heart disease(AV block) patient 不用",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Bimatoprost 0.01%,3mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QN",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Bimatoprost 0.01%,3mL/bot  1  GT  QN  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-118",
    "label": "Vitreous degeneration / PVD / Severity not specified / Regimen 1 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "conjunctivitis",
    "diagnosis": "Acute conjunctivitis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nTetracycline HCL 1% eye oint 5gm/tube  ###  QS  BID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab",
      "Tetracycline HCL 1% eye oint 5gm/tube"
    ],
    "sources": [
      "ER-178"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Tetracycline HCL 1% eye oint 5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Tetracycline HCL 1% eye oint 5gm/tube  ###  QS  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-119",
    "label": "Acute conjunctivitis / Severity not specified / Regimen 5 — Chloramphenicol + Acetaminophen + Tetracycline HCL"
  },
  {
    "scenario": "thermal",
    "diagnosis": "Thermal injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Fluorometholone oph susp. 0.1%,5mL/bot"
    ],
    "sources": [
      "ER-179"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-120",
    "label": "Thermal injury / Roper-Hall grade I / Regimen 2 — Chloramphenicol + Fluorometholone"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-181"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-121",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 5 — Chloramphenicol + Fluorometholone + Acetaminophen"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-182",
      "ER-200",
      "ER-259",
      "ER-304"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-122",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 6 — Fluorometholone + Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  Q4H  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "ER-183"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q4H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  Q4H  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-123",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 13 — Acetaminophen + Chloramphenicol + Balanced salt solution"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  P  PO  3 days\nCombigan (Brimonidine 0.2% +Timolol 0.5%) oph soln, 5mL/bot  1  GT  BID  ###\nTropicamide oph soln 0.5%,5mL/bot  1  GT  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "Combigan (Brimonidine 0.2% +Timolol 0.5%) oph soln, 5mL/bot",
      "Tropicamide oph soln 0.5%,5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot"
    ],
    "sources": [
      "ER-184",
      "ER-185"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Diamox 1PC PO QID"
    ],
    "orders": [
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
        "drug": "Combigan (Brimonidine 0.2% +Timolol 0.5%) oph soln, 5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Combigan (Brimonidine 0.2% +Timolol 0.5%) oph soln, 5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Tropicamide oph soln 0.5%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Tropicamide oph soln 0.5%,5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-124",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 9 — AcetaZOLAMIDE + Brimonidine + Tropicamide + Prednisolone"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nSustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  BID  ###\nAcetaZOLAMIDE 250mg/tab  0.5  PC  QD  P  PO  4 days\nIsosorbide solution 700mg/mL,500mL/bot  10  ML  TID  P  PO  1 day\nCromolyn sod. eye drops 20mg/mL (2%),0.5mL/tube  1  GT  BID  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
      "AcetaZOLAMIDE 250mg/tab",
      "Isosorbide solution 700mg/mL,500mL/bot",
      "Cromolyn sod. eye drops 20mg/mL (2%),0.5mL/tube"
    ],
    "sources": [
      "ER-187"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  BID  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "0.5",
        "unit": "PC",
        "freq": "QD",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  4 days",
        "line": "AcetaZOLAMIDE 250mg/tab  0.5  PC  QD  P  PO  4 days"
      },
      {
        "drug": "Isosorbide solution 700mg/mL,500mL/bot",
        "dose": "10",
        "unit": "ML",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "Isosorbide solution 700mg/mL,500mL/bot  10  ML  TID  P  PO  1 day"
      },
      {
        "drug": "Cromolyn sod. eye drops 20mg/mL (2%),0.5mL/tube",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Cromolyn sod. eye drops 20mg/mL (2%),0.5mL/tube  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-125",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 12 — Levofloxacin + Sustain-tears + AcetaZOLAMIDE + Isosorbide solution"
  },
  {
    "scenario": "open-globe",
    "diagnosis": "Open globe injury",
    "category": "Trauma",
    "severity": "Microhyphema",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  PC  BID  ###\nMoxifloxacin 400mg/250mL/bot  1  PC  QD  IV\nAcetaminophen 500mg/tab  1  PC  QID  PO\nVancomycin HCl 1GM/vial (Vanlyo,台裕)  1  PC  ONCE  ###  1 day\nCeftazidime 500mg/vial  1  PC  ONCE  ###\nMoxifloxacin 400mg/250mL/bot  1  PC  STAT  IV\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  PC  Q1H  ###",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube",
      "Moxifloxacin 400mg/250mL/bot",
      "Acetaminophen 500mg/tab",
      "Vancomycin HCl 1GM/vial (Vanlyo,台裕)",
      "Ceftazidime 500mg/vial",
      "Moxifloxacin 400mg/250mL/bot",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot"
    ],
    "sources": [
      "ER-188"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Medication dose absent from source table; fill ### after review.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- toxoid 0.5cc im stat, Moxifloxacin 1amp IV stat",
      "***請先開立並於入開刀房時請讓病人攜帶Vancomycin HCl (ivf) 1GM/vial,Ceftazidime 500mg/vial 各一瓶一同進入開刀房***"
    ],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  PC  BID  ###"
      },
      {
        "drug": "Moxifloxacin 400mg/250mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "QD",
        "ap": "",
        "sourceRoute": "IV",
        "route": "IV",
        "days": "",
        "line": "Moxifloxacin 400mg/250mL/bot  1  PC  QD  IV"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "Vancomycin HCl 1GM/vial (Vanlyo,台裕)",
        "dose": "1",
        "unit": "PC",
        "freq": "ONCE",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Vancomycin HCl 1GM/vial (Vanlyo,台裕)  1  PC  ONCE  ###  1 day"
      },
      {
        "drug": "Ceftazidime 500mg/vial",
        "dose": "1",
        "unit": "PC",
        "freq": "ONCE",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Ceftazidime 500mg/vial  1  PC  ONCE  ###"
      },
      {
        "drug": "Moxifloxacin 400mg/250mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IV",
        "route": "IV",
        "days": "",
        "line": "Moxifloxacin 400mg/250mL/bot  1  PC  STAT  IV"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  PC  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-126",
    "label": "Open globe injury / Microhyphema / Regimen 3 — Gentamicin + Moxifloxacin + Acetaminophen + Vancomycin HCl"
  },
  {
    "scenario": "orbital-fracture",
    "diagnosis": "Blunt injury with orbital fracture",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nGentamicin oph oint 0.3%,5gm/tube  ###  QS  QID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "ER-192"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-127",
    "label": "Blunt injury with orbital fracture / Severity not specified / Regimen 6 — Chloramphenicol + Gentamicin"
  },
  {
    "scenario": "orbital-fracture",
    "diagnosis": "Blunt injury with orbital fracture",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-193"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-128",
    "label": "Blunt injury with orbital fracture / Severity not specified / Regimen 7 — Gentamicin + Chloramphenicol"
  },
  {
    "scenario": "allergic",
    "diagnosis": "Allergic conjunctivitis / Chemosis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  TID  ###",
    "drugs": [
      "Emedastine oph.solution 0.05%,5mL/bot",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot"
    ],
    "sources": [
      "ER-194"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  TID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-129",
    "label": "Allergic conjunctivitis / Chemosis / Severity not specified / Regimen 2 — Emedastine + Levofloxacin"
  },
  {
    "scenario": "allergic",
    "diagnosis": "Allergic conjunctivitis / Chemosis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-195"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-130",
    "label": "Allergic conjunctivitis / Chemosis / Severity not specified / Regimen 3 — Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "visual-disturbance",
    "diagnosis": "Subjective visual disturbance / Pain",
    "category": "Neuro-ophthalmology",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nNeostigmine methylsulfate 0.01%eye drops,10mL/bot  1  GT  TID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Neostigmine methylsulfate 0.01%eye drops,10mL/bot"
    ],
    "sources": [
      "ER-196"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Neostigmine methylsulfate 0.01%eye drops,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Neostigmine methylsulfate 0.01%eye drops,10mL/bot  1  GT  TID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-131",
    "label": "Subjective visual disturbance / Pain / Severity not specified / Regimen 3 — Acetaminophen + Neostigmine methylsulfate"
  },
  {
    "scenario": "sch",
    "diagnosis": "Subconjunctival hemorrhage",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Tobramycin oph soln 0.3%,5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-197"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "Subconjunctival haemorrhage is a very common phenomenon that is often idiopathic and apparently spontaneous. It may result from surgery, conjunctivitis and trauma. The hemorrhage is usually asymptomatic. Coughing, sneezing and vomiting are common precipitants. Systemic vascular disease (hypertension) is prevalent. Patients are often taking aspirin or have coagulopathy that have an effect on platelet function. The vision is usually UNAFFECTED. Spontaneous resolution over a week or two is typical. Emergent referral is NOT*** indicated in these cases unless patient reported other ocular signs such as VA decrease, eye pain, increased discharge, etc."
    ],
    "orders": [
      {
        "drug": "Tobramycin oph soln 0.3%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Tobramycin oph soln 0.3%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-132",
    "label": "Subconjunctival hemorrhage / Severity not specified / Regimen 3 — Tobramycin + Acetaminophen"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "ER-198"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-133",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 12 — Chloramphenicol + Acetaminophen + Balanced salt solution"
  },
  {
    "scenario": "orbital-cellulitis",
    "diagnosis": "Orbital cellulitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nGentamicin oph oint 0.3%,5gm/tube  ###  QS  QID  ###",
    "drugs": [
      "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab",
      "Acetaminophen 500mg/tab",
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "ER-199"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "Q12H",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-134",
    "label": "Orbital cellulitis / Severity not specified / Regimen 1 — (Clavulanic acid + Acetaminophen + Gentamicin"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-203"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then bid => asthma/heart disease (AV block) patient 不用",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-135",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 10 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "ulcer",
    "diagnosis": "Corneal ulcer / Infectious keratitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q1H  ###\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Atropine 1% eye drops 10mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-204"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-136",
    "label": "Corneal ulcer / Infectious keratitis / Severity not specified / Regimen 4 — Levofloxacin + Atropine + Acetaminophen"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula on",
    "lines": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###\nPhenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###",
    "drugs": [
      "Atropine 1% eye drops 10mL/bot",
      "Phenylephrine 10% oph soln, 5mL/bot"
    ],
    "sources": [
      "ER-205"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- dilate pupil (OD) : atropine 1% and Phenylephrine 10% CM and on call"
    ],
    "orders": [
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  PC  STAT  ###"
      },
      {
        "drug": "Phenylephrine 10% oph soln, 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Phenylephrine 10% oph soln, 5mL/bot  1  PC  STAT  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-137",
    "label": "Retinal detachment / Macula on / Regimen 10 — Atropine + Phenylephrine"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot"
    ],
    "sources": [
      "ER-208"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-138",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 13 — Levofloxacin"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###",
    "drugs": [
      "Sulfamethoxazole oph soln 4%,10mL/bot"
    ],
    "sources": [
      "ER-209"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-139",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 14 — Sulfamethoxazole"
  },
  {
    "scenario": "allergic",
    "diagnosis": "Allergic conjunctivitis / Chemosis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Emedastine oph.solution 0.05%,5mL/bot"
    ],
    "sources": [
      "ER-211"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-140",
    "label": "Allergic conjunctivitis / Chemosis / Severity not specified / Regimen 4 — Emedastine"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Postoperative",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)"
    ],
    "sources": [
      "ER-215"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID(自備藥)",
      "- Cosopt: 1gt stat then BID => asthma/heart disease(AV block) patient 不用",
      "- Inflammatory: atropine 1% stat and BID(自備藥)"
    ],
    "orders": [
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-141",
    "label": "Elevated IOP / Ocular hypertension / Postoperative / Regimen 11 — AcetaZOLAMIDE + Mannitol + Dorzolamide + Brimonidine"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###\nAcetaminophen 500mg/tab  1  PC  QID  PO  3 days\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  TID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Balanced salt solution, 15mL/bot",
      "Acetaminophen 500mg/tab",
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-218"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  TID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-142",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 7 — Balanced salt solution + Acetaminophen + Fluorometholone + Chloramphenicol"
  },
  {
    "scenario": "secondary-angle",
    "diagnosis": "Secondary angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\nDorzolamide oph soln 2% 5mL/bot  1  PC  TID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "Dorzolamide oph soln 2% 5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot"
    ],
    "sources": [
      "ER-220"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "=> Diamox 2PC PO stat and 1PC PO QID",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Dorzolamide: 1gt stat then TID",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "Dorzolamide oph soln 2% 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Dorzolamide oph soln 2% 5mL/bot  1  PC  TID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-143",
    "label": "Secondary angle closure / Severity not specified / Regimen 2 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nLatanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###\nDorzolamide oph soln 2% 5mL/bot  1  GT  TID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Dorzolamide oph soln 2% 5mL/bot"
    ],
    "sources": [
      "ER-221"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Dorzolamide: 1gt stat then Tid",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###"
      },
      {
        "drug": "Dorzolamide oph soln 2% 5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Dorzolamide oph soln 2% 5mL/bot  1  GT  TID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-144",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 12 — Acetaminophen + Latanoprost + AcetaZOLAMIDE + Mannitol"
  },
  {
    "scenario": "endophthalmitis",
    "diagnosis": "Endophthalmitis",
    "category": "Ocular infection",
    "severity": "Postoperative",
    "lines": "Atropine 1% eye drops 10mL/botCeftazidime 500mg/vial            1    PC IRRE       OD   0      0     0        0Vancomycin HCl (ivf)  500mg/via   1    PC IRRE       OD   0      0     0        0l  1  GT  BID  ###  1 day\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Atropine 1% eye drops 10mL/botCeftazidime 500mg/vial            1    PC IRRE       OD   0      0     0        0Vancomycin HCl (ivf)  500mg/via   1    PC IRRE       OD   0      0     0        0l",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-224"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Compounded medication concentration: verify against the order table.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- IVI 0.05cc  Vancomycin 1mg/0.1cc and 0.05cc Fortum 2mg/0.1cc done",
      "===> atropine 1% BID",
      "vancomycin (25mg/cc in BSS) 1gtt q1h",
      "fortum (25mg/cc in BSS) 1gtt q1h",
      "** 由於為了搶救，注射藥物用了眼科緊急用藥，請開立以下藥物 (Fortum 0.5 g, Vancomycin 1g )，並協助將藥物送往11J補上，並註明\" 送往11J###醫師\"。(重要，謝謝急診同仁!!)"
    ],
    "orders": [
      {
        "drug": "Atropine 1% eye drops 10mL/botCeftazidime 500mg/vial            1    PC IRRE       OD   0      0     0        0Vancomycin HCl (ivf)  500mg/via   1    PC IRRE       OD   0      0     0        0l",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "  1 day",
        "line": "Atropine 1% eye drops 10mL/botCeftazidime 500mg/vial            1    PC IRRE       OD   0      0     0        0Vancomycin HCl (ivf)  500mg/via   1    PC IRRE       OD   0      0     0        0l  1  GT  BID  ###  1 day"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-145",
    "label": "Endophthalmitis / Postoperative / Regimen 1 — Atropine + Acetaminophen"
  },
  {
    "scenario": "pvd",
    "diagnosis": "Vitreous degeneration / PVD",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  GT  HS  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot"
    ],
    "sources": [
      "ER-228"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  GT  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-146",
    "label": "Vitreous degeneration / PVD / Severity not specified / Regimen 2 — Latanoprost"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Atropine 1% eye drops 10mL/bot"
    ],
    "sources": [
      "ER-231"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-147",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 13 — Acetaminophen + Prednisolone + Atropine"
  },
  {
    "scenario": "fb",
    "diagnosis": "Surface foreign body / Rust ring",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-232"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q4H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-148",
    "label": "Surface foreign body / Rust ring / Severity not specified / Regimen 2 — Levofloxacin + Acetaminophen"
  },
  {
    "scenario": "conjunctivitis",
    "diagnosis": "Acute conjunctivitis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###\nLevocetirizine 5mg/tab  1  PC  QD  P  PO  5 days\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nLevocetirizine 5mg/tab  1  PC  STAT  P  PO  3 days",
    "drugs": [
      "Emedastine oph.solution 0.05%,5mL/bot",
      "Levocetirizine 5mg/tab",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Levocetirizine 5mg/tab"
    ],
    "sources": [
      "ER-233"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Levocetirizine 5mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QD",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Levocetirizine 5mg/tab  1  PC  QD  P  PO  5 days"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Levocetirizine 5mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "STAT",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Levocetirizine 5mg/tab  1  PC  STAT  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-149",
    "label": "Acute conjunctivitis / Severity not specified / Regimen 6 — Emedastine + Levocetirizine + Chloramphenicol"
  },
  {
    "scenario": "conjunctivitis",
    "diagnosis": "Acute conjunctivitis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-235"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "cosopt BID OU (自備)",
      "add chloramphenicol QID OU"
    ],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-150",
    "label": "Acute conjunctivitis / Severity not specified / Regimen 7 — Acetaminophen + Chloramphenicol"
  },
  {
    "scenario": "hyphema",
    "diagnosis": "Hyphema / Microhyphema",
    "category": "Trauma",
    "severity": "Total hyphema",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###\nPilocarpine oph soln 1%,10mL/bot  1  GT  BID  ###",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Pilocarpine oph soln 1%,10mL/bot"
    ],
    "sources": [
      "ER-237"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then BID => asthma/heart disease(AV block) patient 不用",
      "- Xalatan: 1gt stat and HS",
      "- atropine 1% 1gt stat and BID",
      "- cravit 1gt QID (自備藥)"
    ],
    "orders": [
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###"
      },
      {
        "drug": "Pilocarpine oph soln 1%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Pilocarpine oph soln 1%,10mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-151",
    "label": "Hyphema / Microhyphema / Total hyphema / Regimen 2 — AcetaZOLAMIDE + Mannitol + Brimonidine + Dorzolamide"
  },
  {
    "scenario": "preseptal",
    "diagnosis": "Preseptal cellulitis",
    "category": "Lids / Lacrimal",
    "severity": "Severity not specified",
    "lines": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nTetracycline HCL 1% eye oint 5gm/tube  ###  QS  HS  ###",
    "drugs": [
      "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab",
      "Acetaminophen 500mg/tab",
      "Tetracycline HCL 1% eye oint 5gm/tube"
    ],
    "sources": [
      "ER-238"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "Q12H",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Tetracycline HCL 1% eye oint 5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Tetracycline HCL 1% eye oint 5gm/tube  ###  QS  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-152",
    "label": "Preseptal cellulitis / Severity not specified / Regimen 2 — (Clavulanic acid + Acetaminophen + Tetracycline HCL"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  P  PO  3 days\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  GT  BID  ###",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot"
    ],
    "sources": [
      "ER-239"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "cravit QID OS (自備)",
      "atropine BID OS (自備)",
      "acetaminophen QID OS (自備)",
      "diamox PO QID 有改頻率**",
      "cosopt 1gt stat and BID OS **新增"
    ],
    "orders": [
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
    "kind": "Order table",
    "id": "MED-153",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 13 — AcetaZOLAMIDE + Brimonidine + Dorzolamide"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Balanced salt solution, 15mL/bot  1  GT  Q1D  ###\nSustain-tears oph oint 3.5gm/tube  ###  QS  HS  ###",
    "drugs": [
      "Balanced salt solution, 15mL/bot",
      "Sustain-tears oph oint 3.5gm/tube"
    ],
    "sources": [
      "ER-242"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1D",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1D  ###"
      },
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube  ###  QS  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-154",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 15 — Balanced salt solution + Sustain-tears"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula impending off",
    "lines": "Atropine 1% eye drops 10mL/bot  1  GT  STAT  ###  1 day\nPhenylephrine 10% oph soln, 5mL/bot  1  GT  STAT  ###  1 day",
    "drugs": [
      "Atropine 1% eye drops 10mL/bot",
      "Phenylephrine 10% oph soln, 5mL/bot"
    ],
    "sources": [
      "ER-246"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- Dilate pupil (OS) : atropine 1% and Phenylephrine 10% stat and on call"
    ],
    "orders": [
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  STAT  ###  1 day"
      },
      {
        "drug": "Phenylephrine 10% oph soln, 5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "  1 day",
        "line": "Phenylephrine 10% oph soln, 5mL/bot  1  GT  STAT  ###  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-155",
    "label": "Retinal detachment / Macula impending off / Regimen 11 — Atropine + Phenylephrine"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-247"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-156",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 16 — Levofloxacin + Acetaminophen"
  },
  {
    "scenario": "conjunctivitis",
    "diagnosis": "Acute conjunctivitis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Emedastine oph.solution 0.05%,5mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-251"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-157",
    "label": "Acute conjunctivitis / Severity not specified / Regimen 8 — Emedastine + Chloramphenicol + Acetaminophen"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-253"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-158",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 14 — Levofloxacin + Acetaminophen"
  },
  {
    "scenario": "orbital-fracture",
    "diagnosis": "Blunt injury with orbital fracture",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "ER-254"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "TOPI",
        "route": "TOPI",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI"
      }
    ],
    "kind": "Order table",
    "id": "MED-159",
    "label": "Blunt injury with orbital fracture / Severity not specified / Regimen 8 — Gentamicin"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  5 days",
    "drugs": [
      "Sulfamethoxazole oph soln 4%,10mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-256"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  5 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-160",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 14 — Sulfamethoxazole + Acetaminophen"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nSulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###\nGentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "Sulfamethoxazole oph soln 4%,10mL/bot",
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "ER-257"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "TOPI",
        "route": "TOPI",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI"
      }
    ],
    "kind": "Order table",
    "id": "MED-161",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 15 — Acetaminophen + Sulfamethoxazole + Gentamicin"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Microhyphema",
    "lines": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Atropine 1% eye drops 10mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-258"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-162",
    "label": "Blunt ocular / Orbital injury / Microhyphema / Regimen 16 — Prednisolone + Atropine + Chloramphenicol"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Betamethasone eye drops 0.1%, 0.5mL/tube  1  GT  QID  ###\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nNeomycin 0.35%+Betamethasone) oph.oint.3gm/tube  ###  QS  BID  ###",
    "drugs": [
      "Betamethasone eye drops 0.1%, 0.5mL/tube",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube"
    ],
    "sources": [
      "ER-260"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Betamethasone eye drops 0.1%, 0.5mL/tube",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Betamethasone eye drops 0.1%, 0.5mL/tube  1  GT  QID  ###"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube  ###  QS  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-163",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 8 — Betamethasone eye drops + Levofloxacin + Balanced salt solution + Neomycin"
  },
  {
    "scenario": "aacg",
    "diagnosis": "Acute angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nCarteolol HCl eye drops 2% 5ml/bot  1  PC  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###\nAzarga(Brinzolamide 1%+Timolol0.5%) oph susp, 5mL/bot  1  GT  BID  ###\nTravoprost oph.soln 0.003%,2.5mL/bot  1  GT  QD  ###",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Carteolol HCl eye drops 2% 5ml/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Azarga(Brinzolamide 1%+Timolol0.5%) oph susp, 5mL/bot",
      "Travoprost oph.soln 0.003%,2.5mL/bot"
    ],
    "sources": [
      "ER-262"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的 [同時] 一定要點藥, 單靠mannitol眼壓無法降"
    ],
    "orders": [
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Carteolol HCl eye drops 2% 5ml/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Carteolol HCl eye drops 2% 5ml/bot  1  PC  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###"
      },
      {
        "drug": "Azarga(Brinzolamide 1%+Timolol0.5%) oph susp, 5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Azarga(Brinzolamide 1%+Timolol0.5%) oph susp, 5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Travoprost oph.soln 0.003%,2.5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QD",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Travoprost oph.soln 0.003%,2.5mL/bot  1  GT  QD  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-164",
    "label": "Acute angle closure / Severity not specified / Regimen 8 — AcetaZOLAMIDE + Mannitol + Carteolol HCl eye drops + Prednisolone"
  },
  {
    "scenario": "don",
    "diagnosis": "Dysthyroid optic neuropathy",
    "category": "Orbit / Thyroid",
    "severity": "Severity not specified",
    "lines": "Systane (Propylene glycol) EyeDrops, 10mL/bot  ###  QS  Q4H  ###\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Systane (Propylene glycol) EyeDrops, 10mL/bot",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot"
    ],
    "sources": [
      "ER-264"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- Keep LMD topical medications (自備) (OU): systane QID, cravit BID",
      "--->Methylprednisolone pulse therapy x3 days -> oral prednisolone",
      "--->Famotidine 1# BID concomitantly"
    ],
    "orders": [
      {
        "drug": "Systane (Propylene glycol) EyeDrops, 10mL/bot",
        "dose": "###",
        "unit": "QS",
        "freq": "Q4H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Systane (Propylene glycol) EyeDrops, 10mL/bot  ###  QS  Q4H  ###"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-165",
    "label": "Dysthyroid optic neuropathy / Severity not specified / Regimen 1 — Systane (Propylene glycol) EyeDrops, + Levofloxacin"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-266"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-166",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 17 — Chloramphenicol"
  },
  {
    "scenario": "ulcer",
    "diagnosis": "Corneal ulcer / Infectious keratitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "自備藥外用  1  PC  HS  ###\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q1H  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "自備藥外用",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-267"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "erythromycin HS",
      "cravit Q1H"
    ],
    "orders": [
      {
        "drug": "自備藥外用",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "自備藥外用  1  PC  HS  ###"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-167",
    "label": "Corneal ulcer / Infectious keratitis / Severity not specified / Regimen 5 — 自備藥外用 + Levofloxacin + Acetaminophen"
  },
  {
    "scenario": "laceration",
    "diagnosis": "Eyelid / Conjunctival laceration",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nTetracycline HCL 1% eye oint 5gm/tube  ###  QS  HS  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Tetracycline HCL 1% eye oint 5gm/tube",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-269"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Tetracycline HCL 1% eye oint 5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Tetracycline HCL 1% eye oint 5gm/tube  ###  QS  HS  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-168",
    "label": "Eyelid / Conjunctival laceration / Severity not specified / Regimen 3 — Levofloxacin + Tetracycline HCL + Acetaminophen"
  },
  {
    "scenario": "preseptal",
    "diagnosis": "Preseptal cellulitis",
    "category": "Lids / Lacrimal",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days\n(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days\nGentamicin oph oint 0.3%,5gm/tube  ###  QS  QID  ###",
    "drugs": [
      "Acetaminophen 500mg/tab",
      "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab",
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "ER-271"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days"
      },
      {
        "drug": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "Q12H",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days"
      },
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-169",
    "label": "Preseptal cellulitis / Severity not specified / Regimen 3 — Acetaminophen + (Clavulanic acid + Gentamicin"
  },
  {
    "scenario": "dry-eye",
    "diagnosis": "Dry eye / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nSustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  BID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-272"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  BID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-170",
    "label": "Dry eye / SPK / Severity not specified / Regimen 2 — Chloramphenicol + Balanced salt solution + Sustain-tears + Acetaminophen"
  },
  {
    "scenario": "dry-eye",
    "diagnosis": "Dry eye / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###",
    "drugs": [
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)"
    ],
    "sources": [
      "ER-273"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-171",
    "label": "Dry eye / SPK / Severity not specified / Regimen 3 — Sustain-tears"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot"
    ],
    "sources": [
      "ER-274"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID (自備藥)",
      "- Cosopt: 1gt stat then bid => asthma/heart disease (AV block)"
    ],
    "orders": [
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-172",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 17 — AcetaZOLAMIDE + Mannitol + Brimonidine + Dorzolamide"
  },
  {
    "scenario": "sjs",
    "diagnosis": "SJS / TEN ocular assessment",
    "category": "Systemic / Ocular involvement",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nSustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  BID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)"
    ],
    "sources": [
      "ER-275"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-173",
    "label": "SJS / TEN ocular assessment / Severity not specified / Regimen 2 — Chloramphenicol + Fluorometholone + Sustain-tears"
  },
  {
    "scenario": "preseptal",
    "diagnosis": "Preseptal cellulitis",
    "category": "Lids / Lacrimal",
    "severity": "Severity not specified",
    "lines": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days",
    "drugs": [
      "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab"
    ],
    "sources": [
      "ER-279"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "erythromycin QID OD (自備)"
    ],
    "orders": [
      {
        "drug": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "Q12H",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "(Clavulanic acid 125mg + Amoxycillin 875mg) 1Gm/tab  1  PC  Q12H  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-174",
    "label": "Preseptal cellulitis / Severity not specified / Regimen 4 — (Clavulanic acid"
  },
  {
    "scenario": "visual-disturbance",
    "diagnosis": "Subjective visual disturbance / Pain",
    "category": "Neuro-ophthalmology",
    "severity": "Severity not specified",
    "lines": "Neostigmine methylsulfate 0.01%eye drops,10mL/bot  1  GT  TID  ###",
    "drugs": [
      "Neostigmine methylsulfate 0.01%eye drops,10mL/bot"
    ],
    "sources": [
      "ER-280"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Neostigmine methylsulfate 0.01%eye drops,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Neostigmine methylsulfate 0.01%eye drops,10mL/bot  1  GT  TID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-175",
    "label": "Subjective visual disturbance / Pain / Severity not specified / Regimen 4 — Neostigmine methylsulfate"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nEmedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Emedastine oph.solution 0.05%,5mL/bot"
    ],
    "sources": [
      "ER-283"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-176",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 18 — Chloramphenicol + Emedastine"
  },
  {
    "scenario": "pvd",
    "diagnosis": "Vitreous degeneration / PVD",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-285"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-177",
    "label": "Vitreous degeneration / PVD / Severity not specified / Regimen 3 — Acetaminophen"
  },
  {
    "scenario": "retinal-break",
    "diagnosis": "Retinal break / Tear",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Fluorometholone oph susp. 0.02%,5mL/bot  1  GT  TID  ###",
    "drugs": [
      "Fluorometholone oph susp. 0.02%,5mL/bot"
    ],
    "sources": [
      "ER-286"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Fluorometholone oph susp. 0.02%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.02%,5mL/bot  1  GT  TID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-178",
    "label": "Retinal break / Tear / Severity not specified / Regimen 4 — Fluorometholone"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot"
    ],
    "sources": [
      "ER-288",
      "ER-292",
      "LEG-058"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時] 一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then bid => asthma/heart disease (AV block) patient 不用",
      "- Xalatan: 1gt stat and HS",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Cosopt: 1gt stat then bid => asthma/heart disease(AV block) patient 不用",
      "- Alphagan : 1gt stat and BID",
      "- Cosopt: 1gt BID",
      "- Xalatan: 1gt HS",
      "- Atropine 1gt BID",
      "- Cosopt: 1gt stat then BID",
      "- Atropine: 1gt stat and BID (自備藥)",
      "- neomycin+betamethasone: 1QS stat and BID (自備藥)"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-179",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 14 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "ER-289"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-180",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 9 — Fluorometholone + Chloramphenicol + Acetaminophen + Balanced salt solution"
  },
  {
    "scenario": "hzo",
    "diagnosis": "Herpes zoster ophthalmic assessment",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  PC  QID  ###\nFamciclovir 250mg/tab  1  PC  TID  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Famciclovir 250mg/tab"
    ],
    "sources": [
      "ER-290",
      "ER-291"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  PC  QID  ###"
      },
      {
        "drug": "Famciclovir 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Famciclovir 250mg/tab  1  PC  TID  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-181",
    "label": "Herpes zoster ophthalmic assessment / Severity not specified / Regimen 5 — Chloramphenicol + Famciclovir"
  },
  {
    "scenario": "orbital-inflammation",
    "diagnosis": "Orbital inflammation / Proptosis",
    "category": "Orbit / Thyroid",
    "severity": "Severity not specified",
    "lines": "Prednisolone 5mg/tab  2  PC  TID  P  PO  3 days\nFamotidine 20mg/tab  1  PC  BID  P  PO  3 days",
    "drugs": [
      "Prednisolone 5mg/tab",
      "Famotidine 20mg/tab"
    ],
    "sources": [
      "ER-293"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Prednisolone 5mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Prednisolone 5mg/tab  2  PC  TID  P  PO  3 days"
      },
      {
        "drug": "Famotidine 20mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Famotidine 20mg/tab  1  PC  BID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-182",
    "label": "Orbital inflammation / Proptosis / Severity not specified / Regimen 1 — Prednisolone + Famotidine"
  },
  {
    "scenario": "hzo",
    "diagnosis": "Herpes zoster ophthalmic assessment",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  PC  QID  ###\nFamciclovir 250mg/tab  2  PC  TID  PO  3 days",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Famciclovir 250mg/tab"
    ],
    "sources": [
      "ER-295"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  PC  QID  ###"
      },
      {
        "drug": "Famciclovir 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Famciclovir 250mg/tab  2  PC  TID  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-183",
    "label": "Herpes zoster ophthalmic assessment / Severity not specified / Regimen 6 — Chloramphenicol + Famciclovir"
  },
  {
    "scenario": "aacg",
    "diagnosis": "Acute angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  P  PO  3 days\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  GT  BID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-296"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- Diamox 2PC PO stat and 1PC PO",
      "# Brimonidine : 1gt stat and BID",
      "# Cosopt: 1gt stat then bid"
    ],
    "orders": [
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
        "sourceRoute": "OS",
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
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-184",
    "label": "Acute angle closure / Severity not specified / Regimen 9 — AcetaZOLAMIDE + Brimonidine + Dorzolamide + Acetaminophen"
  },
  {
    "scenario": "ulcer",
    "diagnosis": "Corneal ulcer / Infectious keratitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "(眼用調製品) Amikacin 12.5mg/mL/bot　　**2  1  GT  Q1H  ###\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  ###  GT  Q1H  ###\nBalanced salt solution, 15mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "(眼用調製品) Amikacin 12.5mg/mL/bot　　**2",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "ER-297"
    ],
    "reviewFlags": [
      "Addendum present: review later changes before reusing initial orders.",
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "(眼用調製品) Amikacin 12.5mg/mL/bot　　**2",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(眼用調製品) Amikacin 12.5mg/mL/bot　　**2  1  GT  Q1H  ###"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "###",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  ###  GT  Q1H  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-185",
    "label": "Corneal ulcer / Infectious keratitis / Severity not specified / Regimen 6 — (眼用調製品) Amikacin + Levofloxacin + Balanced salt solution + Acetaminophen"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Acetaminophen 500mg/tab",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "ER-298"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-186",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 10 — Chloramphenicol + Fluorometholone + Acetaminophen + Balanced salt solution"
  },
  {
    "scenario": "hyphema",
    "diagnosis": "Hyphema / Microhyphema",
    "category": "Trauma",
    "severity": "Microhyphema",
    "lines": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###",
    "drugs": [
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Atropine 1% eye drops 10mL/bot"
    ],
    "sources": [
      "ER-303"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-187",
    "label": "Hyphema / Microhyphema / Microhyphema / Regimen 3 — Prednisolone + Atropine"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days\nEmedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acetaminophen 500mg/tab",
      "Emedastine oph.solution 0.05%,5mL/bot"
    ],
    "sources": [
      "ER-305"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      },
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-188",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 19 — Chloramphenicol + Acetaminophen + Emedastine"
  },
  {
    "scenario": "superglue",
    "diagnosis": "Superglue exposure",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "ER-306"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-189",
    "label": "Superglue exposure / Roper-Hall grade I / Regimen 1 — Fluorometholone + Chloramphenicol"
  },
  {
    "scenario": "aacg",
    "diagnosis": "Acute angle closure",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nLatanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###",
    "drugs": [
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)"
    ],
    "sources": [
      "LEG-001",
      "LEG-002"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then BID => asthma/heart disease(AV block) patient 不用",
      "- Xalatan: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-190",
    "label": "Acute angle closure / Severity not specified / Regimen 10 — AcetaZOLAMIDE + Mannitol + Latanoprost + Dorzolamide"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Tetracycline HCL 1% eye oint 5gm/tube  ###  QS  BID  TOPI",
    "drugs": [
      "Tetracycline HCL 1% eye oint 5gm/tube"
    ],
    "sources": [
      "LEG-005"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- keep levofloxacin + artificial tears and erythromycin ointment OS"
    ],
    "orders": [
      {
        "drug": "Tetracycline HCL 1% eye oint 5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "TOPI",
        "route": "TOPI",
        "days": "",
        "line": "Tetracycline HCL 1% eye oint 5gm/tube  ###  QS  BID  TOPI"
      }
    ],
    "kind": "Order table",
    "id": "MED-191",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 15 — Tetracycline HCL"
  },
  {
    "scenario": "cataract",
    "diagnosis": "Cataract / Post-cataract assessment",
    "category": "Cataract / Postoperative",
    "severity": "Severity not specified",
    "lines": "Pirenoxine 0.005% oph. suspension, 5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Pirenoxine 0.005% oph. suspension, 5mL/bot"
    ],
    "sources": [
      "LEG-009"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Pirenoxine 0.005% oph. suspension, 5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Pirenoxine 0.005% oph. suspension, 5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-192",
    "label": "Cataract / Post-cataract assessment / Severity not specified / Regimen 1 — Pirenoxine"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I~II",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nNeomycin 0.35%+Betamethasone) oph.oint.3gm/tube  ###  QS  BID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "LEG-012"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube  ###  QS  BID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-193",
    "label": "Chemical injury / Roper-Hall grade I~II / Regimen 11 — Chloramphenicol + Fluorometholone + Neomycin + Balanced salt solution"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "LEG-013"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-194",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 12 — Fluorometholone + Levofloxacin + Balanced salt solution"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nNeomycin 0.35%+Betamethasone) oph.oint.3gm/tube  ###  QS  HS  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube"
    ],
    "sources": [
      "LEG-014"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Neomycin 0.35%+Betamethasone) oph.oint.3gm/tube  ###  QS  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-195",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 13 — Levofloxacin + Fluorometholone + Balanced salt solution + Neomycin"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "LEG-015"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-196",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 14 — Chloramphenicol + Fluorometholone + Balanced salt solution"
  },
  {
    "scenario": "chemical",
    "diagnosis": "Chemical injury",
    "category": "Chemical / Thermal injury",
    "severity": "Roper-Hall grade I",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nFluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Fluorometholone oph susp. 0.1%,5mL/bot"
    ],
    "sources": [
      "LEG-016"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-197",
    "label": "Chemical injury / Roper-Hall grade I / Regimen 15 — Chloramphenicol + Balanced salt solution + Fluorometholone"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nSustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)"
    ],
    "sources": [
      "LEG-017",
      "LEG-024",
      "LEG-025",
      "LEG-026",
      "LEG-027"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-198",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 16 — Chloramphenicol + Balanced salt solution + Sustain-tears"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Tetracycline HCL 1% eye oint 5gm/tube  ###  QS  BID  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Tetracycline HCL 1% eye oint 5gm/tube",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "LEG-018"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Tetracycline HCL 1% eye oint 5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Tetracycline HCL 1% eye oint 5gm/tube  ###  QS  BID  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-199",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 17 — Tetracycline HCL + Chloramphenicol + Balanced salt solution"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  ###  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nSustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)"
    ],
    "sources": [
      "LEG-019"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "###",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  ###  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-200",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 18 — Levofloxacin + Balanced salt solution + Sustain-tears"
  },
  {
    "scenario": "ced",
    "diagnosis": "Corneal epithelial defect / Abrasion",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nSustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)"
    ],
    "sources": [
      "LEG-020",
      "LEG-028"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OU",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-201",
    "label": "Corneal epithelial defect / Abrasion / Severity not specified / Regimen 19 — Levofloxacin + Balanced salt solution + Sustain-tears"
  },
  {
    "scenario": "laceration",
    "diagnosis": "Eyelid / Conjunctival laceration",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  ###\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot"
    ],
    "sources": [
      "LEG-021"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  ###"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-202",
    "label": "Eyelid / Conjunctival laceration / Severity not specified / Regimen 4 — Gentamicin + Levofloxacin"
  },
  {
    "scenario": "spk",
    "diagnosis": "Superficial punctate keratitis / SPK",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "LEG-022",
      "LEG-023"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-203",
    "label": "Superficial punctate keratitis / SPK / Severity not specified / Regimen 20 — Levofloxacin + Balanced salt solution"
  },
  {
    "scenario": "ulcer",
    "diagnosis": "Corneal ulcer / Infectious keratitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  HS  ###\nAcetaminophen 500mg/tab  1  PC  QID  PO  3 days\nLevofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube",
      "Acetaminophen 500mg/tab",
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot"
    ],
    "sources": [
      "LEG-029"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  HS  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  PO  3 days"
      },
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-204",
    "label": "Corneal ulcer / Infectious keratitis / Severity not specified / Regimen 7 — Gentamicin + Acetaminophen + Levofloxacin"
  },
  {
    "scenario": "ekc",
    "diagnosis": "Epidemic keratoconjunctivitis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nEmedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Emedastine oph.solution 0.05%,5mL/bot"
    ],
    "sources": [
      "LEG-032"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-205",
    "label": "Epidemic keratoconjunctivitis / Severity not specified / Regimen 1 — Chloramphenicol + Emedastine"
  },
  {
    "scenario": "ekc",
    "diagnosis": "Epidemic keratoconjunctivitis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nEmedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###\nTetracycline HCL 1% eye oint 5gm/tube  ###  QS  BID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Emedastine oph.solution 0.05%,5mL/bot",
      "Tetracycline HCL 1% eye oint 5gm/tube"
    ],
    "sources": [
      "LEG-033"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Tetracycline HCL 1% eye oint 5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Tetracycline HCL 1% eye oint 5gm/tube  ###  QS  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-206",
    "label": "Epidemic keratoconjunctivitis / Severity not specified / Regimen 2 — Chloramphenicol + Emedastine + Tetracycline HCL"
  },
  {
    "scenario": "ekc",
    "diagnosis": "Epidemic keratoconjunctivitis",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nEmedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Emedastine oph.solution 0.05%,5mL/bot"
    ],
    "sources": [
      "LEG-034"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Emedastine oph.solution 0.05%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Emedastine oph.solution 0.05%,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-207",
    "label": "Epidemic keratoconjunctivitis / Severity not specified / Regimen 3 — Chloramphenicol + Balanced salt solution + Emedastine"
  },
  {
    "scenario": "fb",
    "diagnosis": "Surface foreign body / Rust ring",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###\nGentamicin oph oint 0.3%,5gm/tube  ###  QS  HS  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Gentamicin oph oint 0.3%,5gm/tube",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "LEG-035"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q4H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###"
      },
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  HS  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-208",
    "label": "Surface foreign body / Rust ring / Severity not specified / Regimen 3 — Levofloxacin + Gentamicin + Balanced salt solution"
  },
  {
    "scenario": "fb",
    "diagnosis": "Surface foreign body / Rust ring",
    "category": "Cornea / Ocular surface",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###\nGentamicin oph oint 0.3%,5gm/tube  ###  QS  HS  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Gentamicin oph oint 0.3%,5gm/tube",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "LEG-036"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q4H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  Q4H  ###"
      },
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  HS  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-209",
    "label": "Surface foreign body / Rust ring / Severity not specified / Regimen 4 — Levofloxacin + Gentamicin + Acetaminophen"
  },
  {
    "scenario": "hsv",
    "diagnosis": "Herpetic keratitis / Endotheliitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###\nFamciclovir 250mg/tab  1  PC  TID  P  PO  5 days",
    "drugs": [
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "Famciclovir 250mg/tab"
    ],
    "sources": [
      "LEG-037"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- *keep levofloxacin Q1H, erythromycin HS, lubricants prescribed at LMD"
    ],
    "orders": [
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###"
      },
      {
        "drug": "Famciclovir 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  5 days",
        "line": "Famciclovir 250mg/tab  1  PC  TID  P  PO  5 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-210",
    "label": "Herpetic keratitis / Endotheliitis / Severity not specified / Regimen 1 — Brimonidine + Famciclovir"
  },
  {
    "scenario": "hzo",
    "diagnosis": "Herpes zoster ophthalmic assessment",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  PC  QID  ###\nAcyclovir oph oint 3%, 4.5gm/tube  1  GT  Q4H  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Acyclovir oph oint 3%, 4.5gm/tube"
    ],
    "sources": [
      "LEG-038"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  PC  QID  ###"
      },
      {
        "drug": "Acyclovir oph oint 3%, 4.5gm/tube",
        "dose": "1",
        "unit": "GT",
        "freq": "Q4H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Acyclovir oph oint 3%, 4.5gm/tube  1  GT  Q4H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-211",
    "label": "Herpes zoster ophthalmic assessment / Severity not specified / Regimen 7 — Chloramphenicol + Acyclovir"
  },
  {
    "scenario": "iol-dislocation",
    "diagnosis": "IOL dislocation / Zonular dialysis",
    "category": "Cataract / Postoperative",
    "severity": "Severity not specified",
    "lines": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###\nFluorometholone oph susp. 0.02%,5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Sulfamethoxazole oph soln 4%,10mL/bot",
      "Fluorometholone oph susp. 0.02%,5mL/bot"
    ],
    "sources": [
      "LEG-039"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Fluorometholone oph susp. 0.02%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.02%,5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-212",
    "label": "IOL dislocation / Zonular dialysis / Severity not specified / Regimen 1 — Sulfamethoxazole + Fluorometholone"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###\nTranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days",
    "drugs": [
      "Sulfamethoxazole oph soln 4%,10mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Atropine 1% eye drops 10mL/bot",
      "Tranexamic acid 250mg/tab"
    ],
    "sources": [
      "LEG-041"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Tranexamic acid 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-213",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 18 — Sulfamethoxazole + Prednisolone + Atropine + Tranexamic acid"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###",
    "drugs": [
      "Sulfamethoxazole oph soln 4%,10mL/bot"
    ],
    "sources": [
      "LEG-042",
      "LEG-050",
      "LEG-051",
      "LEG-053"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-214",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 19 — Sulfamethoxazole"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nTranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days\nTropicamide oph soln 0.5%,5mL/bot  1  GT  BID  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Tranexamic acid 250mg/tab",
      "Tropicamide oph soln 0.5%,5mL/bot"
    ],
    "sources": [
      "LEG-043"
    ],
    "reviewFlags": [
      "Medication table contains unparsed lines; see source."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Tranexamic acid 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days"
      },
      {
        "drug": "Tropicamide oph soln 0.5%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Tropicamide oph soln 0.5%,5mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-215",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 20 — Levofloxacin + Balanced salt solution + Tranexamic acid + Tropicamide"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI\nSustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube",
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Balanced salt solution, 15mL/bot"
    ],
    "sources": [
      "LEG-044"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "TOPI",
        "route": "TOPI",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI"
      },
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-216",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 21 — Gentamicin + Sustain-tears + Chloramphenicol + Balanced salt solution"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###\nBalanced salt solution, 15mL/bot  1  GT  Q1H  ###\nSustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###",
    "drugs": [
      "Chloramphenicol 0.25% oph soln5mL/bot",
      "Balanced salt solution, 15mL/bot",
      "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)"
    ],
    "sources": [
      "LEG-045",
      "LEG-055"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Balanced salt solution, 15mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Balanced salt solution, 15mL/bot  1  GT  Q1H  ###"
      },
      {
        "drug": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)",
        "dose": "###",
        "unit": "QS",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Sustain-tears oph oint 3.5gm/tube (健保初次開立限眼科專科醫師)  ###  QS  HS  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-217",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 22 — Chloramphenicol + Balanced salt solution + Sustain-tears"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Microhyphema",
    "lines": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  BID  ###\nTropicamide oph soln 0.5%,5mL/bot  1  GT  BID  ###\nAcetaminophen 500mg/tab  1  PC  QID  P  PO  3 days",
    "drugs": [
      "Sulfamethoxazole oph soln 4%,10mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Tropicamide oph soln 0.5%,5mL/bot",
      "Acetaminophen 500mg/tab"
    ],
    "sources": [
      "LEG-047",
      "LEG-060"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Tropicamide oph soln 0.5%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Tropicamide oph soln 0.5%,5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Acetaminophen 500mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Acetaminophen 500mg/tab  1  PC  QID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-218",
    "label": "Blunt ocular / Orbital injury / Microhyphema / Regimen 23 — Sulfamethoxazole + Prednisolone + Tropicamide + Acetaminophen"
  },
  {
    "scenario": "orbital-fracture",
    "diagnosis": "Blunt injury with orbital fracture",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI\nSulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube",
      "Sulfamethoxazole oph soln 4%,10mL/bot"
    ],
    "sources": [
      "LEG-048"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "TOPI",
        "route": "TOPI",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI"
      },
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-219",
    "label": "Blunt injury with orbital fracture / Severity not specified / Regimen 9 — Gentamicin + Sulfamethoxazole"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Microhyphema",
    "lines": "Atropine 0.5% eye drops 10mL/bot  1  GT  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  GT  BID  ###\nSulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###",
    "drugs": [
      "Atropine 0.5% eye drops 10mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Sulfamethoxazole oph soln 4%,10mL/bot"
    ],
    "sources": [
      "LEG-049"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Atropine 0.5% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Atropine 0.5% eye drops 10mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  GT  BID  ###"
      },
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-220",
    "label": "Blunt ocular / Orbital injury / Microhyphema / Regimen 24 — Atropine + Prednisolone + Sulfamethoxazole"
  },
  {
    "scenario": "orbital-fracture",
    "diagnosis": "Blunt injury with orbital fracture",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI\nChloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###",
    "drugs": [
      "Gentamicin oph oint 0.3%,5gm/tube",
      "Chloramphenicol 0.25% oph soln5mL/bot"
    ],
    "sources": [
      "LEG-052"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "TOPI",
        "route": "TOPI",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI"
      },
      {
        "drug": "Chloramphenicol 0.25% oph soln5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Chloramphenicol 0.25% oph soln5mL/bot  1  GT  QID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-221",
    "label": "Blunt injury with orbital fracture / Severity not specified / Regimen 10 — Gentamicin + Chloramphenicol"
  },
  {
    "scenario": "blunt",
    "diagnosis": "Blunt ocular / Orbital injury",
    "category": "Trauma",
    "severity": "Severity not specified",
    "lines": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###\nGentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI",
    "drugs": [
      "Sulfamethoxazole oph soln 4%,10mL/bot",
      "Gentamicin oph oint 0.3%,5gm/tube"
    ],
    "sources": [
      "LEG-056"
    ],
    "reviewFlags": [
      "Medication dose absent from source table; fill ### after review."
    ],
    "planMentions": [],
    "orders": [
      {
        "drug": "Sulfamethoxazole oph soln 4%,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Sulfamethoxazole oph soln 4%,10mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "Gentamicin oph oint 0.3%,5gm/tube",
        "dose": "###",
        "unit": "QS",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "TOPI",
        "route": "TOPI",
        "days": "",
        "line": "Gentamicin oph oint 0.3%,5gm/tube  ###  QS  BID  TOPI"
      }
    ],
    "kind": "Order table",
    "id": "MED-222",
    "label": "Blunt ocular / Orbital injury / Severity not specified / Regimen 25 — Sulfamethoxazole + Gentamicin"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Postoperative",
    "lines": "Isosorbide solution 700mg/mL,500mL/bot  15  ML  TID  PO\nLatanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\nIsosorbide solution 700mg/mL,500mL/bot  15  ML  STAT  PO  1 day",
    "drugs": [
      "Isosorbide solution 700mg/mL,500mL/bot",
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "Isosorbide solution 700mg/mL,500mL/bot"
    ],
    "sources": [
      "LEG-057"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then BID => asthma/heart disease(AV block) patient 不用",
      "- Xalatan: 1gt stat and HS",
      "- atropine 1% stat and BID"
    ],
    "orders": [
      {
        "drug": "Isosorbide solution 700mg/mL,500mL/bot",
        "dose": "15",
        "unit": "ML",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "Isosorbide solution 700mg/mL,500mL/bot  15  ML  TID  PO"
      },
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "Isosorbide solution 700mg/mL,500mL/bot",
        "dose": "15",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "Isosorbide solution 700mg/mL,500mL/bot  15  ML  STAT  PO  1 day"
      }
    ],
    "kind": "Order table",
    "id": "MED-223",
    "label": "Elevated IOP / Ocular hypertension / Postoperative / Regimen 15 — Isosorbide solution + Latanoprost + Dorzolamide + Brimonidine"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF",
    "drugs": [
      "D-Mannitol (IVF) 20%,300mL/bag"
    ],
    "sources": [
      "LEG-059"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "- Diamox:2PC stat and 1PC  QID (自備)",
      "-**Mannitol 300ml. stat, iv, \"FULL RUN\""
    ],
    "orders": [
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF"
      }
    ],
    "kind": "Order table",
    "id": "MED-224",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 16 — Mannitol"
  },
  {
    "scenario": "sch",
    "diagnosis": "Subconjunctival hemorrhage",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###",
    "drugs": [
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)"
    ],
    "sources": [
      "LEG-069"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "Subconjunctival haemorrhage is a very common phenomenon that is often idiopathic and apparently spontaneous. It may result from surgery, conjunctivitis and trauma. The hemorrhage is usually asymptomatic. Coughing, sneezing and vomiting are common precipitants. Systemic vascular disease (hypertension) is prevalent. Patients are often taking aspirin or have coagulopathy that have an effect on platelet function. The vision is usually UNAFFECTED. Spontaneous resolution over a week or two is typical. Emergent referral is NOT indicated in these cases unless patient reported other ocular signs such as VA decrease, eye pain, increased discharge, etc."
    ],
    "orders": [
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-225",
    "label": "Subconjunctival hemorrhage / Severity not specified / Regimen 4 — Brimonidine"
  },
  {
    "scenario": "retinal-break",
    "diagnosis": "Retinal break / Tear",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  TID  ###\nTranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days",
    "drugs": [
      "Fluorometholone oph susp. 0.1%,5mL/bot",
      "Tranexamic acid 250mg/tab"
    ],
    "sources": [
      "LEG-071"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  TID  ###"
      },
      {
        "drug": "Tranexamic acid 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "TID",
        "ap": "P",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  3 days",
        "line": "Tranexamic acid 250mg/tab  1  PC  TID  P  PO  3 days"
      }
    ],
    "kind": "Order table",
    "id": "MED-226",
    "label": "Retinal break / Tear / Severity not specified / Regimen 5 — Fluorometholone + Tranexamic acid"
  },
  {
    "scenario": "retinal-break",
    "diagnosis": "Retinal break / Tear",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  TID  ###",
    "drugs": [
      "Fluorometholone oph susp. 0.1%,5mL/bot"
    ],
    "sources": [
      "LEG-072",
      "LEG-073",
      "LEG-074"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Fluorometholone oph susp. 0.1%,5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Fluorometholone oph susp. 0.1%,5mL/bot  1  GT  TID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-227",
    "label": "Retinal break / Tear / Severity not specified / Regimen 6 — Fluorometholone"
  },
  {
    "scenario": "retinal-hemorrhage",
    "diagnosis": "Retinal hemorrhage",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Neostigmine methylsulfate 0.01%eye drops,10mL/bot  1  GT  TID  ###",
    "drugs": [
      "Neostigmine methylsulfate 0.01%eye drops,10mL/bot"
    ],
    "sources": [
      "LEG-075"
    ],
    "reviewFlags": [],
    "planMentions": [],
    "orders": [
      {
        "drug": "Neostigmine methylsulfate 0.01%eye drops,10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "TID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Neostigmine methylsulfate 0.01%eye drops,10mL/bot  1  GT  TID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-228",
    "label": "Retinal hemorrhage / Severity not specified / Regimen 1 — Neostigmine methylsulfate"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###\nAcetaZOLAMIDE 250mg/tab  1  PC  QID  PO\nAcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day\nD-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day\nBrimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###\n(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###\nPrednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###\nAtropine 1% eye drops 10mL/bot  1  GT  BID  ###",
    "drugs": [
      "Latanoprost oph.soln 0.005%,2.5mL/bot",
      "AcetaZOLAMIDE 250mg/tab",
      "AcetaZOLAMIDE 250mg/tab",
      "D-Mannitol (IVF) 20%,300mL/bag",
      "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
      "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
      "Prednisolone acetate oph susp.1%,5mL/bot",
      "Atropine 1% eye drops 10mL/bot"
    ],
    "sources": [
      "LEG-088"
    ],
    "reviewFlags": [
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "=> Mannitol 300ml. stat, iv, \"FULL RUN\"",
      "run mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降",
      "- Brimonidine : 1gt stat and BID",
      "- Cosopt: 1gt stat then BID => asthma/heart disease(AV block) patient 不用",
      "- atropine 1% BID(自備藥)",
      "- Latanoprost: 1gt stat and HS"
    ],
    "orders": [
      {
        "drug": "Latanoprost oph.soln 0.005%,2.5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "HS",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Latanoprost oph.soln 0.005%,2.5mL/bot  1  PC  HS  ###"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "1",
        "unit": "PC",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "",
        "line": "AcetaZOLAMIDE 250mg/tab  1  PC  QID  PO"
      },
      {
        "drug": "AcetaZOLAMIDE 250mg/tab",
        "dose": "2",
        "unit": "PC",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "PO",
        "route": "PO",
        "days": "  1 day",
        "line": "AcetaZOLAMIDE 250mg/tab  2  PC  STAT  PO  1 day"
      },
      {
        "drug": "D-Mannitol (IVF) 20%,300mL/bag",
        "dose": "300",
        "unit": "ML",
        "freq": "STAT",
        "ap": "",
        "sourceRoute": "IVF",
        "route": "IVF",
        "days": "  1 day",
        "line": "D-Mannitol (IVF) 20%,300mL/bag  300  ML  STAT  IVF  1 day"
      },
      {
        "drug": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Brimonidine oph.soln 0.15% 5mL/bot(Alphagan P,Allergan)  1  PC  BID  ###"
      },
      {
        "drug": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "(Dorzolamide 2% +Timolol 0.5%)oph soln 5mL/bot  1  PC  BID  ###"
      },
      {
        "drug": "Prednisolone acetate oph susp.1%,5mL/bot",
        "dose": "1",
        "unit": "PC",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Prednisolone acetate oph susp.1%,5mL/bot  1  PC  Q1H  ###"
      },
      {
        "drug": "Atropine 1% eye drops 10mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "BID",
        "ap": "",
        "sourceRoute": "OD",
        "route": "###",
        "days": "",
        "line": "Atropine 1% eye drops 10mL/bot  1  GT  BID  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-229",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 17 — Latanoprost + AcetaZOLAMIDE + Mannitol + Brimonidine"
  },
  {
    "scenario": "microsporidia",
    "diagnosis": "Suspected microsporidia keratitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###\n(眼用調製品) Amikacin 12.5mg/mL/bot　　**4  1  GT  QID  ###\n(眼用調製品) Voriconazole 10mg/%), 10mL/bot　　**2  1  GT  Q1H  ###",
    "drugs": [
      "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
      "(眼用調製品) Amikacin 12.5mg/mL/bot　　**4",
      "(眼用調製品) Voriconazole 10mg/%), 10mL/bot　　**2"
    ],
    "sources": [
      "LEG-090"
    ],
    "reviewFlags": [
      "Compounded medication concentration: verify against the order table.",
      "Plan includes medication instructions: reconcile with order table and addendum."
    ],
    "planMentions": [
      "-*請加給病患levofloxacin 0.5% oph soln.",
      "*levofloxacin 0.5% QID+ amikacin 12.5%(已給病患) QID+ voriconazole 1%(已給病患) Q1H"
    ],
    "orders": [
      {
        "drug": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "Levofloxacin oph. soln, 0.5%, 25mg/5mL/bot  1  GT  QID  ###"
      },
      {
        "drug": "(眼用調製品) Amikacin 12.5mg/mL/bot　　**4",
        "dose": "1",
        "unit": "GT",
        "freq": "QID",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(眼用調製品) Amikacin 12.5mg/mL/bot　　**4  1  GT  QID  ###"
      },
      {
        "drug": "(眼用調製品) Voriconazole 10mg/%), 10mL/bot　　**2",
        "dose": "1",
        "unit": "GT",
        "freq": "Q1H",
        "ap": "",
        "sourceRoute": "OS",
        "route": "###",
        "days": "",
        "line": "(眼用調製品) Voriconazole 10mg/%), 10mL/bot　　**2  1  GT  Q1H  ###"
      }
    ],
    "kind": "Order table",
    "id": "MED-230",
    "label": "Suspected microsporidia keratitis / Severity not specified / Regimen 1 — Levofloxacin + (眼用調製品) Amikacin + (眼用調製品) Voriconazole"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula impending off",
    "lines": "- dilate pupil (###) : atropine 1% and Phenylephrine 10% CM and on call",
    "drugs": [],
    "sources": [
      "ER-011"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-231",
    "label": "Retinal detachment / Macula impending off / Regimen 12 / Plan instructions"
  },
  {
    "scenario": "sch",
    "diagnosis": "Subconjunctival hemorrhage",
    "category": "Red eye / Conjunctiva",
    "severity": "Severity not specified",
    "lines": "Subconjunctival haemorrhage is a very common phenomenon that is often idiopathic and apparently spontaneous. It may result from surgery, conjunctivitis and trauma. The hemorrhage is usually asymptomatic. Coughing, sneezing and vomiting are common precipitants. Systemic vascular disease (hypertension) is prevalent. Patients are often taking aspirin or have coagulopathy that have an effect on platelet function. The vision is usually UNAFFECTED. Spontaneous resolution over a week or two is typical. Emergent referral is NOT*** indicated in these cases unless patient reported other ocular signs such as VA decrease, eye pain, increased discharge, etc.",
    "drugs": [],
    "sources": [
      "ER-028"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-232",
    "label": "Subconjunctival hemorrhage / Severity not specified / Regimen 5 / Plan instructions"
  },
  {
    "scenario": "uveitic-glaucoma",
    "diagnosis": "Uveitic glaucoma",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "=> Mannitol 300ml. stat, iv, \"FULL RUN\"\n=> prednisolone 5mg IRRE: 3PC QD, 2PC QN\nrun mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降\n- Brimonidine : 1gt stat and BID\n- Cosopt: 1gt stat then bid => asthma/heart disease (AV block) patient 不用\n- Xalatan: 1gt stat and HS",
    "drugs": [],
    "sources": [
      "ER-042"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-233",
    "label": "Uveitic glaucoma / Severity not specified / Regimen 1 / Plan instructions"
  },
  {
    "scenario": "optic-neuritis",
    "diagnosis": "Suspected optic neuritis",
    "category": "Neuro-ophthalmology",
    "severity": "Severity not specified",
    "lines": "--->Methylprednisolone pulse therapy x3 days\n--->Famotidine 1# BID concomitantly",
    "drugs": [],
    "sources": [
      "ER-088"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-234",
    "label": "Suspected optic neuritis / Severity not specified / Regimen 1 / Plan instructions"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula on",
    "lines": "- dilate pupil (###): atropine 1% and Phenylephrine 10% stat and on call",
    "drugs": [],
    "sources": [
      "ER-157"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-235",
    "label": "Retinal detachment / Macula on / Regimen 13 / Plan instructions"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula off",
    "lines": "- dilate pupil (###) : atropine 1% and Phenylephrine 10% on ### morning and on call",
    "drugs": [],
    "sources": [
      "ER-222"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-236",
    "label": "Retinal detachment / Macula off / Regimen 14 / Plan instructions"
  },
  {
    "scenario": "endophthalmitis",
    "diagnosis": "Endophthalmitis",
    "category": "Ocular infection",
    "severity": "Postoperative",
    "lines": "vancomycin 25mg/mL Q3H night DC\natropine BID (自備)\nbetason BID (自備)",
    "drugs": [],
    "sources": [
      "ER-223"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-237",
    "label": "Endophthalmitis / Postoperative / Regimen 2 / Plan instructions"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula on",
    "lines": "- dilate pupil (###) : atropine 1% and Phenylephrine 10% at \"### ###\"*** and on call",
    "drugs": [],
    "sources": [
      "ER-230"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-238",
    "label": "Retinal detachment / Macula on / Regimen 15 / Plan instructions"
  },
  {
    "scenario": "postop-inflammation",
    "diagnosis": "Postoperative inflammation / Assessment",
    "category": "Cataract / Postoperative",
    "severity": "Severity not specified",
    "lines": "FML 0.1% QID ### (自備)",
    "drugs": [],
    "sources": [
      "ER-245"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-239",
    "label": "Postoperative inflammation / Assessment / Severity not specified / Regimen 4 / Plan instructions"
  },
  {
    "scenario": "don",
    "diagnosis": "Dysthyroid optic neuropathy",
    "category": "Orbit / Thyroid",
    "severity": "Severity not specified",
    "lines": "--->Methylprednisolone pulse therapy x3 days -> oral prednisolone\n--->Famotidine 1# BID concomitantly",
    "drugs": [],
    "sources": [
      "ER-263"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-240",
    "label": "Dysthyroid optic neuropathy / Severity not specified / Regimen 2 / Plan instructions"
  },
  {
    "scenario": "oht",
    "diagnosis": "Elevated IOP / Ocular hypertension",
    "category": "Glaucoma / Elevated IOP",
    "severity": "Severity not specified",
    "lines": "=> *Mannitol 300ml. stat, iv, \"FULL RUN\"\nrun mannitol 的[同時]一定要點藥, 單靠mannitol眼壓無法降\n- Diamox: 1PC QID PO(自備)\n- Alphagan : stat and 1gt TID (自備)\n- Cosopt: stat and 1gt TID(自備)\n- Atropine: stat and 1gt BID(自備)",
    "drugs": [],
    "sources": [
      "LEG-003"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-241",
    "label": "Elevated IOP / Ocular hypertension / Severity not specified / Regimen 18 / Plan instructions"
  },
  {
    "scenario": "crao",
    "diagnosis": "Retinal artery occlusion",
    "category": "Retina / Vitreous",
    "severity": "Severity not specified",
    "lines": "Diamox 2PC stat PO\nAlphagan 1gt stat and BID, os\nsuggest start DAPT treatment (Aspirin+clopidegrel) as acute stroke management",
    "drugs": [],
    "sources": [
      "LEG-006"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-242",
    "label": "Retinal artery occlusion / Severity not specified / Regimen 1 / Plan instructions"
  },
  {
    "scenario": "ulcer",
    "diagnosis": "Corneal ulcer / Infectious keratitis",
    "category": "Ocular infection",
    "severity": "Severity not specified",
    "lines": "- **medication as: levofloxacin Q1H, gentamicin oint stat and bid",
    "drugs": [],
    "sources": [
      "LEG-030"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-243",
    "label": "Corneal ulcer / Infectious keratitis / Severity not specified / Regimen 8 / Plan instructions"
  },
  {
    "scenario": "rd",
    "diagnosis": "Retinal detachment",
    "category": "Retina / Vitreous",
    "severity": "Macula on",
    "lines": "- dilate pupil (###) : atropine 1% and Phenylephrine 10% stat and on call",
    "drugs": [],
    "sources": [
      "LEG-063"
    ],
    "kind": "Plan instructions",
    "orders": [],
    "reviewFlags": [
      "Plan instructions only: dose, concentration, route and frequency may be incomplete."
    ],
    "planMentions": [],
    "id": "MED-244",
    "label": "Retinal detachment / Macula on / Regimen 16 / Plan instructions"
  }
];
