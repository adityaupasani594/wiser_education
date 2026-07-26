// src/data/translations_exp_4.2.ts
// Multilingual UI strings for Experiment 4.2 (3-Qubit Phase-Flip QEC).

import { LangCode } from "./translations";

export interface TopicTranslate {
  label: string;
  tag: string;
  bullets: string[];
  description: string;
  tableTitle?: string;
  basis1?: string;
  basis1_0?: string;
  basis1_1?: string;
  basis2?: string;
  basis2_0?: string;
  basis2_1?: string;
}

export interface QuizQuestionTranslate {
  q: string;
  options: string[];
}

export interface TourStepTranslate {
  title: string;
  desc: string;
}

export interface ExpTranslations {
  nav_exit_workspace: string;
  nav_theory: string;
  nav_playground: string;
  nav_quiz: string;
  title_basics: string;
  hero_title: string;
  hero_sub: string;
  btn_start_learning: string;
  btn_launch_playground: string;
  card_superposition_title: string;
  card_superposition_desc: string;
  card_nocloning_title: string;
  card_nocloning_desc: string;
  card_measurement_title: string;
  card_measurement_desc: string;
  section_title: string;
  section_sub: string;
  quick_summary: string;
  concept_kicker: string;
  concept_of: string;
  table_basis: string;
  table_bit0: string;
  table_bit1: string;
  math_vector_title: string;
  math_vector_def: string;
  math_vector_constraint: string;
  math_vector_desc: string;
  cta_title: string;
  cta_desc: string;
  cta_btn_playground: string;
  cta_btn_top: string;
  builder_title: string;
  builder_sub: string;
  btn_guided_tour: string;
  btn_clear_circuit: string;
  toolbox_title: string;
  toolbox_desc: string;
  timeline_title: string;
  timeline_desc: string;
  bloch_title: string;
  bloch_desc: string;
  histogram_title: string;
  histogram_desc: string;
  btn_go_quiz: string;
  quiz_title: string;
  quiz_time_left: string;
  quiz_next_question: string;
  quiz_submit_results: string;
  quiz_passed_title: string;
  quiz_passed_desc: string;
  btn_download_report: string;
  btn_download_cert: string;
  btn_back_dashboard: string;
  quiz_failed_title: string;
  quiz_failed_desc: string;
  btn_retake_quiz: string;
  btn_scroll_section: string;
  guided_tour_title: string;
  guided_tour_step: string;
  guided_tour_of: string;
  btn_next: string;
  btn_back: string;
  btn_finish: string;
  btn_skip: string;
  btn_done: string;
  note_drag: string;
  note_click: string;
  builder_outcome_0: string;
  builder_outcome_1: string;
  builder_state_vector: string;
  visual_basics_caption: string;
  visual_collapse_state: string;
  visual_superposition_state: string;
  visual_btn_reset: string;
  visual_btn_measure: string;
  visual_collapse_caption: string;
  visual_cloner: string;
  visual_blocked: string;
  visual_disturbed: string;
  visual_corrupted: string;
  visual_cloning_caption: string;
  visual_rectilinear: string;
  visual_diagonal: string;
  visual_bases_caption: string;
  topics: Record<string, TopicTranslate>;
  quiz_questions: QuizQuestionTranslate[];
  tour_steps: TourStepTranslate[];
}

export const TRANSLATIONS_EXP_4_2: Record<LangCode, ExpTranslations> = {
  en: {
    nav_exit_workspace: "Exit",
    nav_theory: "1. QEC Theory",
    nav_playground: "2. QEC Playground",
    nav_quiz: "3. Checkpoint Quiz",
    title_basics: "Experiment 4.2: 3-Qubit Phase-Flip Error Correction Code",
    hero_title: "Phase-Flip Protection.",
    hero_sub: "Learn how encoding in the superposition |+⟩/|-⟩ basis protects logical qubits against environmental phase-flip (dephasing) noise.",
    btn_start_learning: "Start Learning",
    btn_launch_playground: "Launch QEC Playground",
    card_superposition_title: "Phase Redundancy",
    card_superposition_desc: "Logical states are mapped to three-qubit repetition states in the X-basis: |0⟩_L = |+++⟩ and |1⟩_L = |---\rangle.",
    card_nocloning_title: "X-Basis Syndromes",
    card_nocloning_desc: "Syndromes measure relative phase parity using operators S1 = X0X1 and S2 = X1X2 to detect phase errors.",
    card_measurement_title: "Conditional Z correction",
    card_measurement_desc: "Bob applies conditional Pauli Z feedback gates to restore the dephased qubits without reading the logical data.",
    section_title: "Core Mechanics of 3-Qubit Phase-Flip QEC",
    section_sub: "Explore each theoretical concept below. Click cards to expand, or scroll down to view interactive animated diagrams.",
    quick_summary: "Quick Summary",
    concept_kicker: "Concept",
    concept_of: "of",
    table_basis: "Logical State",
    table_bit0: "Encoded Physical Qubits",
    table_bit1: "Protected Noise Limit",
    math_vector_title: "Three-Qubit Phase-Encoded State Vector",
    math_vector_def: "Logical State:",
    math_vector_constraint: "Fidelity Goal:",
    math_vector_desc: "The state is protected against any single-qubit phase-flip error. Parity measurement checks for phase consistency without altering amplitudes α and β.",
    cta_title: "Ready to Test Your QEC System?",
    cta_desc: "Enter the fault-tolerant playground to prepare a superposition, inject a channel phase flip, measure the syndrome, and correct the qubit state.",
    cta_btn_playground: "Go to QEC Playground",
    cta_btn_top: "Back to Top",
    builder_title: "3-Qubit Phase-Flip Playground",
    builder_sub: "Prepare an initial qubit state, encode it in the X-basis, inject a channel dephasing error, and verify full syndrome-based correction!",
    btn_guided_tour: "Start Guided Tour",
    btn_clear_circuit: "Reset Playground",
    toolbox_title: "Dephasing QEC Stages",
    toolbox_desc: "Follow steps 1-5 to prepare, encode, dephase, extract syndromes, and correct the system.",
    timeline_title: "Interactive Parity Metrics",
    timeline_desc: "Check values of syndromes S1 (X0X1) and S2 (X1X2). These indicate which qubit contains the phase flip.",
    bloch_title: "Input Qubit State |ψ⟩",
    bloch_desc: "Original state prepared on qubit q0 before encoding.",
    histogram_title: "Simulated Qubit Recovery Bloch Sphere",
    histogram_desc: "Shows Bob's recovered state vector after syndrome correction.",
    btn_go_quiz: "Go to Checkpoint Quiz",
    quiz_title: "Checkpoint Quiz",
    quiz_time_left: "Left",
    quiz_next_question: "Next Question",
    quiz_submit_results: "Submit Results",
    quiz_passed_title: "Validation Complete!",
    quiz_passed_desc: "You scored {score}/10. Excellent! You have successfully completed the checkpoint quiz for the 3-Qubit Phase-Flip QEC Code. You can now download your certificate and formal lab report below.",
    btn_download_report: "Download Lab Report",
    btn_download_cert: "Download Credentials",
    btn_back_dashboard: "Back to Dashboard",
    quiz_failed_title: "Passing Grade Required",
    quiz_failed_desc: "You scored {score}/10. A perfect 10/10 score is required to pass the checkpoint. Please review the theory slides and try again!",
    btn_retake_quiz: "Retake Quiz",
    btn_scroll_section: "Scroll to full section",
    guided_tour_title: "QEC Tour",
    guided_tour_step: "Step",
    guided_tour_of: "of",
    btn_next: "Next",
    btn_back: "Back",
    btn_finish: "Finish",
    btn_skip: "Skip Tour",
    btn_done: "Done",
    note_drag: "Interact with the controls on the left to walk through the error correction phases.",
    note_click: "Click buttons to change states and trigger dephasing corrections.",
    builder_outcome_0: "Fidelity to |ψ⟩:",
    builder_outcome_1: "Qubit Dephased:",
    builder_state_vector: "3-Qubit State Vector:",
    visual_basics_caption: "Prepared Input Bloch Sphere (Drag to rotate)",
    visual_collapse_state: "Encoded State (|+++⟩)",
    visual_superposition_state: "Logical Superposition α|+++⟩ + β|---\rangle",
    visual_btn_reset: "Reset State",
    visual_btn_measure: "Parity Check",
    visual_collapse_caption: "CNOT and Hadamard gates establish three-qubit logical phase repetition.",
    visual_cloner: "Syndromes",
    visual_blocked: "❌ Failed",
    visual_disturbed: "Syndrome 1 (X0X1)",
    visual_corrupted: "Syndrome 2 (X1X2)",
    visual_cloning_caption: "Syndrome Parities isolate the exact location of the phase-flip error.",
    visual_rectilinear: "Syndromes",
    visual_diagonal: "Parities",
    visual_bases_caption: "Collective parity check detects phase error without dephasing data.",
    topics: {
      "error-correction-need": {
        label: "Fragility of Quantum Phase",
        tag: "Why are phase states fragile?",
        bullets: [
          "Phase-flip (dephasing) noise is the most common error source in solid-state quantum processors.",
          "It randomizes the relative phase between |0⟩ and |1⟩ states (e.g. converting |+⟩ to |-⟩).",
          "Measuring a qubit to check for phase shifts collapses its state, destroying the stored quantum superposition."
        ],
        description: "Dephasing represents the loss of quantum coherence. Because a dephasing error alters the relative phase of a superposition without altering the energy state, it cannot be corrected by classical bit-flip checkers. We require quantum codes operating in conjugate bases."
      },
      "quantum-encoding": {
        label: "Hadamard & X-Basis Encoding",
        tag: "Phase Repetition Mapping",
        bullets: [
          "We encode a single logical qubit state by first creating a CNOT repetition state α|000⟩ + β|111⟩.",
          "Next, we apply Hadamard (H) gates to all three qubits, transforming Z-repetition into X-repetition: α|+++⟩ + β|---⟩.",
          "This distributes phase information non-locally across all three entangled physical qubits."
        ],
        description: "By encoding states in the X-basis using Hadamards, we ensure that phase-flip (Z) errors act as bit-flips in this new conjugate basis. This translates dephasing noise into structural changes that we can identify and correct."
      },
      "error-injection": {
        label: "Phase-Flip Environmental Noise",
        tag: "Phase Error Channel",
        bullets: [
          "A phase-flip error is represented by the Pauli Z gate: Z|0⟩ = |0⟩, Z|1⟩ = -|1⟩.",
          "Z dephases a single qubit, changing |+⟩ into |-⟩ and |-⟩ into |+⟩.",
          "If noise dephases qubit 1, the logical state becomes α|+-+⟩ + β|-+-⟩."
        ],
        description: "The 3-qubit phase-flip code can correct any single dephasing error. The environment injects a Pauli Z gate on one of the lines, transforming phase relations. Assuming a low error rate, dephasing is localized to a single qubit."
      },
      "syndrome-correction": {
        label: "X-Basis Parity & Z correction",
        tag: "Syndrome & Correction",
        bullets: [
          "To locate the dephasing, we measure X-basis parities: S1 = X0X1 and S2 = X1X2.",
          "S1 checks if q0 and q1 have the same phase sign. S2 checks q1 vs q2.",
          "Measuring these parities isolates the dephased qubit, allowing us to apply a corrective Pauli Z gate."
        ],
        description: "Syndrome measurements in the phase-flip code are performed by applying Hadamards, measuring Z-parity, and transforming back. Bob applies a conditional Pauli Z gate to the dephased qubit, restoring state fidelity to 100%."
      }
    },
    quiz_questions: [
      {
        q: "What type of error is the 3-qubit phase-flip code designed to protect against?",
        options: [
          "Single physical bit-flip (X) errors",
          "Single physical phase-flip (Z) errors",
          "Any arbitrary multi-qubit error",
          "Thermal relaxation errors to state |0⟩"
        ]
      },
      {
        q: "How is the logical state |0⟩_L encoded in the 3-qubit phase-flip code?",
        options: [
          "|0⟩_L = |000⟩",
          "|0⟩_L = |+ + +⟩",
          "|0⟩_L = |---⟩",
          "|0⟩_L = 1/v2(|000⟩ + |111⟩)"
        ]
      },
      {
        q: "Which sequence of gates is used to encode a state in the phase-flip code?",
        options: [
          "Hadamard gates followed by CNOT gates",
          "CNOT gates from q0 to target qubits, followed by Hadamard gates on all three qubits",
          "Pauli Z gates on all target qubits",
          "Toffoli gates controlled by q0 and q1"
        ]
      },
      {
        q: "Why can't we measure the individual qubits q0, q1, q2 directly in dephasing checks?",
        options: [
          "Direct measurement collapses the superposition, destroying the quantum data.",
          "Direct measurement causes qubits to overheat.",
          "Phase errors cannot be read by physical detectors.",
          "The state is protected by hardware shields."
        ]
      },
      {
        q: "What syndrome operators are measured to detect phase-flip errors?",
        options: [
          "Z0Z1 and Z1Z2",
          "X0X1 and X1X2",
          "Y0Y1 and Y1Y2",
          "H0H1 and H1H2"
        ]
      },
      {
        q: "If the syndrome measurement yields S1 = -1 and S2 = 1, which qubit is dephased?",
        options: [
          "Qubit q0",
          "Qubit q1",
          "Qubit q2",
          "No qubit is dephased"
        ]
      },
      {
        q: "If the syndrome checks yield S1 = -1 and S2 = -1, which qubit is dephased?",
        options: [
          "Qubit q0",
          "Qubit q1",
          "Qubit q2",
          "Both q0 and q2 are dephased"
        ]
      },
      {
        q: "How is the phase-flip correction physically performed once the dephased qubit is identified?",
        options: [
          "Apply a Hadamard gate to the dephased qubit.",
          "Apply a Pauli X gate to the dephased qubit.",
          "Apply a Pauli Z gate to the dephased qubit.",
          "Reset the dephased qubit to state |+⟩."
        ]
      },
      {
        q: "What is the limitation of the 3-qubit phase-flip code regarding bit-flip (X) errors?",
        options: [
          "It has 100% protection against bit-flips.",
          "It cannot detect or correct bit-flip errors.",
          "It converts bit-flips into phase-flips automatically.",
          "It corrects bit-flips but with lower fidelity."
        ]
      },
      {
        q: "What is the code distance (d) of the 3-qubit phase-flip code?",
        options: [
          "d = 3 (corrects up to 1 error)",
          "d = 1 (corrects no errors)",
          "d = 2 (detects 1 error, corrects none)",
          "d = 9 (corrects up to 4 errors)"
        ]
      }
    ],
    tour_steps: [
      {
        title: "Welcome to the Phase-Flip QEC Playground!",
        desc: "Here you will step through the 3-qubit phase-flip quantum error correction code. Let's see how syndromes protect phase superposition."
      },
      {
        title: "Step 1: Prepare State",
        desc: "Choose a target state preset or slide the angles to rotate qubit q0 on the Bloch sphere. Click Next to encode it."
      },
      {
        title: "Step 2: Redundant Phase Encoding",
        desc: "Click 'Simulate Encoding Circuit' on the left. This applies CNOTs followed by Hadamards to entangle q0, q1, and q2 into |+++⟩/|---⟩ repetition."
      },
      {
        title: "Step 3: Inject Phase-Flip Noise",
        desc: "Simulate dephasing noise. Select a qubit (q0, q1, or q2) to inject a phase-flip (Z) error, altering relative phase signs."
      },
      {
        title: "Step 4: Measure Parity Syndromes",
        desc: "Extract parities in X-basis. Click 'Extract Parity Syndromes' to read S1 and S2, pinpointing the dephased qubit without reading the data."
      },
      {
        title: "Step 5: Apply Corrective Z Gates",
        desc: "Perform active feedback. Click 'Apply Correction' to trigger the restoring Z gate, returning state fidelity to 100%!"
      }
    ]
  },
  hi: {} as any,
  kn: {} as any,
  ta: {} as any,
  es: {} as any,
  fr: {} as any
};

// Populate other languages with fallbacks of the English translation to prevent runtime crashes
const languages: LangCode[] = ["hi", "kn", "ta", "es", "fr"];
languages.forEach(l => {
  TRANSLATIONS_EXP_4_2[l] = { 
    ...TRANSLATIONS_EXP_4_2.en,
    topics: JSON.parse(JSON.stringify(TRANSLATIONS_EXP_4_2.en.topics))
  };
});

TRANSLATIONS_EXP_4_2.hi.title_basics = "प्रयोग 4.2: 3-क्यूबिट फेज-फ्लिप त्रुटि सुधार कोड";
TRANSLATIONS_EXP_4_2.hi.nav_exit_workspace = "बाहर निकलें";
TRANSLATIONS_EXP_4_2.hi.nav_theory = "1. QEC सिद्धांत";
TRANSLATIONS_EXP_4_2.hi.nav_playground = "2. QEC प्लेग्राउंड";
TRANSLATIONS_EXP_4_2.hi.nav_quiz = "3. चेकपॉइंट क्विज़";
TRANSLATIONS_EXP_4_2.hi.btn_start_learning = "सीखना शुरू करें";
TRANSLATIONS_EXP_4_2.hi.btn_launch_playground = "QEC प्लेग्राउंड लॉन्च करें";
TRANSLATIONS_EXP_4_2.hi.btn_go_quiz = "चेकपॉइंट क्विज़ पर जाएं";
TRANSLATIONS_EXP_4_2.hi.builder_title = "3-क्यूबिट फेज-फ्लिप त्रुटि सुधार प्लेग्राउंड";
TRANSLATIONS_EXP_4_2.hi.builder_sub = "एक क्यूबिट तैयार करें, उसे X-बेसिस में एनकोड करें, चैनल डीफेज़िंग त्रुटि डालें, और सुधार सत्यापित करें!";
TRANSLATIONS_EXP_4_2.hi.topics["error-correction-need"] = {
  label: "क्वांटम चरण (फेज़) की नाजुकता",
  tag: "फेज़ अवस्थाएं नाजुक क्यों होती हैं?",
  bullets: [
    "फेज़-फ्लिप (डीफेज़िंग) शोर सॉलिड-स्टेट क्वांटम प्रोसेसर में सबसे आम त्रुटि स्रोत है।",
    "यह |0⟩ और |1⟩ अवस्थाओं के बीच सापेक्ष फेज़ को यादृच्छिक बनाता है (उदा. |+⟩ को |-⟩ में बदलना)।",
    "सापेक्ष फेज़ में बदलाव की जांच करने के लिए क्यूबिट को मापने से इसकी अवस्था ढह जाती है, जिससे डेटा नष्ट हो जाता है।"
  ],
  description: "डीफेज़िंग क्वांटम सुसंगतता (कोहेरेंस) के नुकसान को दर्शाता है। चूंकि एक डीफेज़िंग त्रुटि एक सुपरपोजिशन के सापेक्ष चरण को बदल देती है, इसलिए शास्त्रीय बिट-फ्लिप चेकर्स द्वारा इसे ठीक नहीं किया जा सकता है।"
};
TRANSLATIONS_EXP_4_2.hi.topics["quantum-encoding"] = {
  label: "हाडामार्ड और X-बेसिस एन्कोडिंग",
  tag: "फेज़ पुनरावृत्ति मानचित्रण",
  bullets: [
    "हम पहले CNOT पुनरावृत्ति स्थिति α|000⟩ + β|111⟩ बनाकर एक एकल तार्किक क्यूबिट एन्कोड करते हैं।",
    "इसके बाद, हम तीनों क्यूबिट पर हाडामार्ड (H) गेट लागू करते हैं, जिससे तार्किक स्थिति α|+++⟩ + β|---⟩ बनती है।",
    "यह फेज़ जानकारी को गैर-स्थानीय रूप से तीनों उलझे हुए भौतिक क्यूबिट में वितरित करता है।"
  ],
  description: "हाडामार्ड का उपयोग करके X-बेसिस में राज्यों को एन्कोड करके, हम यह सुनिश्चित करते हैं कि चरण-फ्लिप (Z) त्रुटियां नए आधार में बिट-फ्लिप की तरह कार्य करती हैं।"
};
TRANSLATIONS_EXP_4_2.hi.topics["error-injection"] = {
  label: "फेज़-फ्लिप पर्यावरण शोर",
  tag: "फेज़ त्रुटि चैनल",
  bullets: [
    "एक फेज़-फ्लिप त्रुटि पाउली Z गेट द्वारा दर्शाई जाती है: Z|0⟩ = |0⟩, Z|1⟩ = -|1⟩।",
    "Z एकल क्यूबिट को डीफेज़ करता है, |+⟩ को |-⟩ में और |-⟩ को |+⟩ में बदलता है।",
    "यदि शोर क्यूबिट 1 को डीफेज़ करता है, तो तार्किक स्थिति α|+-+⟩ + β|-+-⟩ बन जाती है।"
  ],
  description: "3-क्यूबिट फेज़-फ्लिप कोड किसी भी एकल डीफेज़िंग त्रुटि को ठीक कर सकता है। पर्यावरण किसी एक लाइन पर पाउली Z गेट को इंजेक्ट करता है, जिससे फेज़ संबंध बदल जाते हैं।"
};
TRANSLATIONS_EXP_4_2.hi.topics["syndrome-correction"] = {
  label: "X-बेसिस पैरिटी और Z सुधार",
  tag: "सिंड्रोम और सुधार",
  bullets: [
    "डीफेज़िंग का पता लगाने के लिए, हम X-बेसिस पैरिटी को मापते हैं: S1 = X0X1 और S2 = X1X2।",
    "S1 जांचता है कि q0 और q1 का फेज़ साइन समान है या नहीं। S2 जांचता है q1 बनाम q2।",
    "इन पैरिटी को मापने से डीफेज़ज्ड क्यूबिट अलग हो जाता है, जिससे हम सुधारात्मक पाउली Z गेट लागू कर सकते हैं।"
  ],
  description: "फेज़-फ्लिप कोड में सिंड्रोम मापन हाडामार्ड लागू करके, पैरिटी को मापकर, और वापस बदलकर किया जाता है। बॉब डीफेज़्ड क्यूबिट पर सुधारात्मक पाउली Z गेट लगाता है, जिससे फिडेलिटी बहाल होती है।"
};

TRANSLATIONS_EXP_4_2.kn.title_basics = "ಪ್ರಯೋಗ 4.2: 3-ಕ್ಯುಬಿಟ್ ಫೇಸ್-ಫ್ಲಿಪ್ ದೋಷ ತಿದ್ದುಪಡಿ ಕೋಡ್";
TRANSLATIONS_EXP_4_2.kn.nav_exit_workspace = "ನಿರ್ಗಮಿಸು";
TRANSLATIONS_EXP_4_2.kn.nav_theory = "1. QEC ಸಿದ್ಧಾಂತ";
TRANSLATIONS_EXP_4_2.kn.nav_playground = "2. QEC ಆಟದ ಮೈದಾನ";
TRANSLATIONS_EXP_4_2.kn.nav_quiz = "3. ರಸಪ್ರಶ್ನೆ";
TRANSLATIONS_EXP_4_2.kn.btn_start_learning = "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ";
TRANSLATIONS_EXP_4_2.kn.btn_launch_playground = "QEC ಆಟದ ಮೈದಾನ ಪ್ರಾರಂಭಿಸಿ";
TRANSLATIONS_EXP_4_2.kn.btn_go_quiz = "ರಸಪ್ರಶ್ನೆಗೆ ಹೋಗಿ";
TRANSLATIONS_EXP_4_2.kn.builder_title = "3-ಕ್ಯುಬಿಟ್ ಫೇಸ್-ಫ್ಲಿಪ್ ದೋಷ ತಿದ್ದುಪಡಿ ಆಟದ ಮೈದಾನ";
TRANSLATIONS_EXP_4_2.kn.builder_sub = "ಆರಂಭಿಕ ಕ್ಯುಬಿಟ್ ಸ್ಥಿತಿಯನ್ನು ಸಿದ್ಧಪಡಿಸಿ, ಅದನ್ನು X-ಬೇಸಿಸ್‌ನಲ್ಲಿ ಎನ್ಕೋಡ್ ಮಾಡಿ, ಡಿಫೇಸಿಂಗ್ ದೋಷವನ್ನು ಚುಚ್ಚಿ ಮತ್ತು ತಿದ್ದುಪಡಿಯನ್ನು ಪರಿಶೀಲಿಸಿ!";
TRANSLATIONS_EXP_4_2.kn.topics["error-correction-need"] = {
  label: "ಕ್ವಾಂಟಮ್ ಹಂತದ ಸೂಕ್ಷ್ಮತೆ",
  tag: "ಹಂತದ ಸ್ಥಿತಿಗಳು ಏಕೆ ಸೂಕ್ಷ್ಮವಾಗಿವೆ?",
  bullets: [
    "ಹಂತ-ಫ್ಲಿಪ್ (ಡಿಫೇಸಿಂಗ್) ಶಬ್ದವು ಕ್ವಾಂಟಮ್ ಪ್ರೊಸೆಸರ್‌ಗಳಲ್ಲಿ ಸಾಮಾನ್ಯ ದೋಷದ ಮೂಲವಾಗಿದೆ.",
    "ಇದು |0⟩ ಮತ್ತು |1⟩ ಸ್ಥಿತಿಗಳ ನಡುವಿನ ಹಂತವನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ (ಉದಾ. |+⟩ ಇಂದ |-⟩ ಗೆ).",
    "ಹಂತದ ಬದಲಾವಣೆ ಪರಿಶೀಲಿಸಲು ಕ್ಯುಬಿಟ್ ಅಳೆಯುವುದರಿಂದ ಸ್ಥಿತಿಯು ನಾಶವಾಗುತ್ತದೆ."
  ],
  description: "ಡಿಫೇಸಿಂಗ್ ಕ್ವಾಂಟಮ್ ಸ್ಥಿರತೆಯ ನಷ್ಟವನ್ನು ತೋರಿಸುತ್ತದೆ. ಹಂತ-ಫ್ಲಿಪ್ ದೋಷವು ಸೂಪರ್‌ಪೊಸಿಷನ್ ಹಂತವನ್ನು ಬದಲಾಯಿಸುವುದರಿಂದ ಇದನ್ನು ಸುಲಭವಾಗಿ ಸರಿಪಡಿಸಲಾಗುವುದಿಲ್ಲ."
};
TRANSLATIONS_EXP_4_2.kn.topics["quantum-encoding"] = {
  label: "ಹಡಮಾರ್ಡ್ ಮತ್ತು X-ಬೇಸಿಸ್ ಎನ್ಕೋಡಿಂಗ್",
  tag: "ಹಂತದ ಪುನರಾವರ್ತನೆಯ ನಕ್ಷೆ",
  bullets: [
    "ನಾವು ಮೊದಲು CNOT ಪುನರಾವರ್ತನೆ ಸ್ಥಿತಿ α|000⟩ + β|111⟩ ಅನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ.",
    "ನಂತರ ಕ್ಯುಬಿಟ್‌ಗಳ ಮೇಲೆ ಹಡಮಾರ್ಡ್ (H) ಗೇಟ್‌ಗಳನ್ನು ಅನ್ವಯಿಸಿ X-ಪುನರಾವರ್ತನೆ ಸ್ಥಿತಿ α|+++⟩ + β|---⟩ ಗೆ ಬದಲಿಸುತ್ತೇವೆ.",
    "ಇದು ಹಂತದ ಮಾಹಿತಿಯನ್ನು ಮೂರು ಸಿಕ್ಕಿಹಾಕಿಕೊಂಡ ಕ್ಯುಬಿಟ್‌ಗಳಲ್ಲಿ ಹರಡುತ್ತದೆ."
  ],
  description: "ಹಡಮಾರ್ಡ್ ಬಳಸಿ X-ಬೇಸಿಸ್‌ನಲ್ಲಿ ಸ್ಥಿತಿಗಳನ್ನು ಎನ್ಕೋಡ್ ಮಾಡುವುದರಿಂದ ಹಂತ-ಫ್ಲಿಪ್ (Z) ದೋಷಗಳು ಬಿಟ್-ಫ್ಲಿಪ್‌ಗಳಂತೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ."
};
TRANSLATIONS_EXP_4_2.kn.topics["error-injection"] = {
  label: "ಹಂತ-ಫ್ಲಿಪ್ ಪರಿಸರ ಶಬ್ದ",
  tag: "ಹಂತದ ದೋಷ ಚಾನಲ್",
  bullets: [
    "ಹಂತ-ಫ್ಲಿಪ್ ದೋಷವನ್ನು ಪೌಲಿ Z ಗೇಟ್ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ: Z|0⟩ = |0⟩, Z|1⟩ = -|1⟩.",
    "Z ಗೇಟ್ ಒಂದು ಕ್ಯುಬಿಟ್ ಅನ್ನು ಬದಲಿಸಿ, |+⟩ ಅನ್ನು |-⟩ ಗೆ ಮತ್ತು |-⟩ ಅನ್ನು |+⟩ ಗೆ ತಿರುಗಿಸುತ್ತದೆ.",
    "ಶಬ್ದವು ಕ್ಯುಬಿಟ್ 1 ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಿದರೆ, ತಾರ್ಕಿಕ ಸ್ಥಿತಿ α|+-+⟩ + β|-+-⟩ ಆಗುತ್ತದೆ."
  ],
  description: "ಮೂರು ಕ್ಯುಬಿಟ್ ಹಂತ-ಫ್ಲಿಪ್ ಕೋಡ್ ಯಾವುದೇ ಒಂದು ಕ್ಯುಬಿಟ್‌ನ ಹಂತದ ದೋಷ ಸರಿಪಡಿಸುತ್ತದೆ. ಪರಿಸರವು ಪೌಲಿ Z ಗೇಟ್ ಅನ್ನು ಚುಚ್ಚುತ್ತದೆ."
};
TRANSLATIONS_EXP_4_2.kn.topics["syndrome-correction"] = {
  label: "X-ಬೇಸಿಸ್ ಸಮಾನತೆ ಮತ್ತು Z ತಿದ್ದುಪಡಿ",
  tag: "ಸಿಂಡ್ರೋಮ್ ಮತ್ತು ತಿದ್ದುಪಡಿ",
  bullets: [
    "ದೋಷ ಪತ್ತೆಹಚ್ಚಲು, ನಾವು X-ಬೇಸಿಸ್ ಸಮಾನತೆಯನ್ನು ಅಳೆಯುತ್ತೇವೆ: S1 = X0X1 ಮತ್ತು S2 = X1X2.",
    "S1 ಗೇಟ್ q0 ಮತ್ತು q1 ಅನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ. S2 ಗೇಟ್ q1 ಮತ್ತು q2 ಅನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ.",
    "ಈ ಸಮಾನತೆಗಳು ದೋಷದ ಕ್ಯುಬಿಟ್ ಅನ್ನು ಪ್ರತ್ಯೇಕಿಸಿ ನಮಗೆ ಪೌಲಿ Z ಗೇಟ್ ಬಳಸಲು ಅನುಮತಿಸುತ್ತದೆ."
  ],
  description: "ಸಿಂಡ್ರೋಮ್ ಅಳತೆಗಳನ್ನು ಹಡಮಾರ್ಡ್ ಅನ್ವಯಿಸಿ, ಸಮಾನತೆ ಅಳೆದು, ಮತ್ತು ಹಿಂತಿರುಗಿಸಿ ಮಾಡಲಾಗುತ್ತದೆ. ಬಾಬ್ ಪೌಲಿ Z ಗೇಟ್ ಬಳಸಿ ಕ್ಯುಬಿಟ್ ಅನ್ನು ಸರಿಪಡಿಸುತ್ತಾನೆ."
};

TRANSLATIONS_EXP_4_2.ta.title_basics = "பரிசோதனை 4.2: 3-குபிட் பேஸ்-பிளிப் பிழை திருத்த குறியீடு";
TRANSLATIONS_EXP_4_2.ta.nav_exit_workspace = "வெளியேறு";
TRANSLATIONS_EXP_4_2.ta.nav_theory = "1. QEC கோட்பாடு";
TRANSLATIONS_EXP_4_2.ta.nav_playground = "2. QEC விளையாட்டு மைதானம்";
TRANSLATIONS_EXP_4_2.ta.nav_quiz = "3. வினாடி வினா";
TRANSLATIONS_EXP_4_2.ta.btn_start_learning = "கற்க தொடங்குங்கள்";
TRANSLATIONS_EXP_4_2.ta.btn_launch_playground = "QEC விளையாட்டு மைதானத்தை துவக்கு";
TRANSLATIONS_EXP_4_2.ta.btn_go_quiz = "வினாடி வினாவுக்குச் செல்லவும்";
TRANSLATIONS_EXP_4_2.ta.builder_title = "3-குபிட் பேஸ்-பிளிப் பிழை திருத்த விளையாட்டு மைதானம்";
TRANSLATIONS_EXP_4_2.ta.builder_sub = "ஆரம்ப நிலையை தயார் செய்து, X-அடிப்படையில் குறியாக்கம் செய்து, டிஃபேசிங் பிழையை செலுத்தி, திருத்தத்தை சரிபார்க்கவும்!";
TRANSLATIONS_EXP_4_2.ta.topics["error-correction-need"] = {
  label: "குவாண்டம் பேஸின் உடையக்கூடிய தன்மை",
  tag: "பேஸ் நிலைகள் ஏன் உடையக்கூடியவை?",
  bullets: [
    "பேஸ்-பிளிப் (டிஃபேசிங்) சத்தம் குவாண்டம் செயலிகளில் மிகவும் பொதுவான பிழை மூலமாகும்.",
    "இது |0⟩ மற்றும் |1⟩ நிலைகளுக்கு இடையே உள்ள உறவினர் பேஸை மாற்றுகிறது (உதாரணமாக, |+⟩-ஐ |-⟩ ஆக மாற்றுவது).",
    "பேஸ் மாற்றங்களை சரிபார்க்க குபிட்டை நேரடியாக அளவிடுவது அதன் நிலையை அழித்துவிடும்."
  ],
  description: "டிஃபேசிங் என்பது குவாண்டம் ஒத்திசைவு இழப்பைக் குறிக்கிறது. ஒரு டிஃபேசிங் பிழையானது சூப்பர்போசிஷனின் பேஸை மாற்றுதால், அதை கிளாசிக்கல் முறைகளால் திருத்த முடியாது."
};
TRANSLATIONS_EXP_4_2.ta.topics["quantum-encoding"] = {
  label: "ஹடமார்ட் மற்றும் X-அடிப்படை குறியாக்கம்",
  tag: "பேஸ் மறுநிகழ்வு வரைபடம்",
  bullets: [
    "முதலில் CNOT மறுநிகழ்வு நிலை α|000⟩ + β|111⟩-ஐ உருவாக்குவதன் மூலம் ஒற்றை குபிட்டை குறியாக்கம் செய்கிறோம்.",
    "அடுத்து, மூன்று குபிட்களிலும் ஹடமார்ட் (H) வாயில்களைப் பயன்படுத்தி X-மறுநிகழ்வு நிலை α|+++⟩ + β|---⟩-ஐ உருவாக்குகிறோம்.",
    "இது பேஸ் தகவலை மூன்று குபிட்களிலும் சமமாக பரப்புகிறது."
  ],
  description: "ஹடமார்ட் பயன்படுத்தி X-அடிப்படையில் குறியாக்கம் செய்வதன் மூலம் பேஸ்-பிளிப் (Z) பிழைகள் பிட்-பிளிப் போல செயல்படும்."
};
TRANSLATIONS_EXP_4_2.ta.topics["error-injection"] = {
  label: "பேஸ்-பிளிப் சுற்றுச்சூழல் சத்தம்",
  tag: "பேஸ் பிழை சேனல்",
  bullets: [
    "பேஸ்-பிளிப் பிழையானது பாலி Z வாயிலால் குறிக்கப்படுகிறது: Z|0⟩ = |0⟩, Z|1⟩ = -|1⟩.",
    "Z வாயில் குபிட்டை மாற்றி, |+⟩-ஐ |-⟩ ஆகவும், |-⟩-ஐ |+⟩ ஆகவும் மாற்றுகிறது.",
    "சத்தம் குபிட் 1-ஐ பாதித்தால், தர்க்கரீதியான நிலை α|+-+⟩ + β|-+-⟩ ஆக மாறும்."
  ],
  description: "3-குபிட் பேஸ்-பிளிப் குறியீடு ஒற்றை டிஃபேசிங் பிழையை திருத்துகிறது. சுற்றுச்சூழல் பாலி Z வாயிலை செலுத்துகிறது."
};
TRANSLATIONS_EXP_4_2.ta.topics["syndrome-correction"] = {
  label: "X-அடிப்படை சமநிலை மற்றும் Z திருத்தம்",
  tag: "சிண்ட்ரோம் மற்றும் திருத்தம்",
  bullets: [
    "பரிசோதனை 4.2: 3-குபிட் பேஸ்-பிளிப் பிழை திருத்த குறியீடு.",
    "S1 குபிட் q0 மற்றும் q1-ஐ ஒப்பிடுகிறது. S2 குபிட் q1 மற்றும் q2-ஐ ஒப்பிடுகிறது.",
    "இந்த சமநிலைகள் பிழையான குபிட்டை பிரித்து நமக்கு பாலி Z வாயிலை பயன்படுத்த அனுமதிக்கிறது."
  ],
  description: "சிண்ட்ரோம் அளவீடுகள் ஹடமார்ட் பயன்படுத்தி, சமநிலை அளந்து செய்யப்படுகிறது. பாப் பாலி Z வாயிலை பயன்படுத்தி திருத்துகிறார்."
};

TRANSLATIONS_EXP_4_2.es.title_basics = "Experimento 4.2: Código de Corrección de Errores de 3 Qubits Fase-Flip";
TRANSLATIONS_EXP_4_2.es.nav_exit_workspace = "Salir";
TRANSLATIONS_EXP_4_2.es.nav_theory = "1. Teoría QEC";
TRANSLATIONS_EXP_4_2.es.nav_playground = "2. Laboratorio QEC";
TRANSLATIONS_EXP_4_2.es.nav_quiz = "3. Cuestionario";
TRANSLATIONS_EXP_4_2.es.btn_start_learning = "Comenzar a Aprender";
TRANSLATIONS_EXP_4_2.es.btn_launch_playground = "Lanzar Laboratorio QEC";
TRANSLATIONS_EXP_4_2.es.btn_go_quiz = "Ir al Cuestionario";
TRANSLATIONS_EXP_4_2.es.builder_title = "Laboratorio de Corrección de Errores de 3 Qubits Phase-Flip";
TRANSLATIONS_EXP_4_2.es.builder_sub = "¡Prepare un estado de qubit inicial, codifíquelo en la base X, inyecte un error de dephase y verifique la corrección!";
TRANSLATIONS_EXP_4_2.es.topics["error-correction-need"] = {
  label: "La Fragilidad de la Fase Cuántica",
  tag: "¿Por qué los estados de fase son frágiles?",
  bullets: [
    "El ruido de fase-flip (desfasamiento) es el más común en procesadores de estado sólido.",
    "Aleatoriza la fase relativa entre |0⟩ y |1⟩ (por ejemplo, convirtiendo |+⟩ en |-⟩).",
    "Medir un qubit para chequear el desfasamiento colapsa su estado, destruyendo la superposición."
  ],
  description: "El desfasamiento representa la pérdida de coherencia cuántica. Como altera la fase relativa sin alterar el estado de energía, se necesitan códigos en bases conjugadas."
};
TRANSLATIONS_EXP_4_2.es.topics["quantum-encoding"] = {
  label: "Codificación en Base X y Hadamard",
  tag: "Mapeo de Repetición de Fase",
  bullets: [
    "Codificamos creando primero un estado de repetición CNOT α|000⟩ + β|111⟩.",
    "Luego aplicamos compuertas Hadamard (H) a los tres qubits, transformando en repetición de base X: α|+++⟩ + β|---⟩.",
    "Esto distribuye la fase de forma no local a través de los tres qubits entrelazados."
  ],
  description: "Al codificar en base X con Hadamards, nos aseguramos de que los errores de fase-flip (Z) actúen como bit-flips en esta nueva base."
};
TRANSLATIONS_EXP_4_2.es.topics["error-injection"] = {
  label: "Ruido Ambiental de Fase-Flip",
  tag: "Canal de Error de Fase",
  bullets: [
    "Un error de fase-flip se representa con la compuerta Pauli Z: Z|0⟩ = |0⟩, Z|1⟩ = -|1⟩.",
    "Z desfasa un qubit, cambiando |+⟩ en |-⟩ y |-⟩ en |+⟩.",
    "Si afecta al qubit 1, el estado lógico se convierte en α|+-+⟩ + β|-+-⟩."
  ],
  description: "El código de 3 qubits puede corregir cualquier error de desfasamiento único. El entorno aplica Pauli Z en una línea."
};
TRANSLATIONS_EXP_4_2.es.topics["syndrome-correction"] = {
  label: "Paridad en Base X y Corrección Z",
  tag: "Síndrome y Corrección",
  bullets: [
    "Para localizar el desfasamiento, medimos paridades en base X: S1 = X0X1 y S2 = X1X2.",
    "S1 chequea si q0 y q1 tienen el mismo signo de fase. S2 chequea q1 vs q2.",
    "Medir paridades aísla el qubit desfasado, permitiendo aplicar Pauli Z correctivo."
  ],
  description: "Bob aplica una compuerta Pauli Z al qubit desfasado identificado por los síndromes, restaurando la fidelidad al 100%."
};

TRANSLATIONS_EXP_4_2.fr.title_basics = "Expérience 4.2 : Code de Correction d'Erreur 3 Qubits Phase-Flip";
TRANSLATIONS_EXP_4_2.fr.nav_exit_workspace = "Quitter";
TRANSLATIONS_EXP_4_2.fr.nav_theory = "1. Théorie QEC";
TRANSLATIONS_EXP_4_2.fr.nav_playground = "2. Laboratoire QEC";
TRANSLATIONS_EXP_4_2.fr.nav_quiz = "3. Quiz de contrôle";
TRANSLATIONS_EXP_4_2.fr.btn_start_learning = "Commencer à Apprendre";
TRANSLATIONS_EXP_4_2.fr.btn_launch_playground = "Lancer le Laboratoire QEC";
TRANSLATIONS_EXP_4_2.fr.btn_go_quiz = "Aller au Quiz";
TRANSLATIONS_EXP_4_2.fr.builder_title = "Laboratoire de Correction d'Erreur de 3 Qubits Phase-Flip";
TRANSLATIONS_EXP_4_2.fr.builder_sub = "Préparez un état initial de qubit, encodez-le dans la base X, injectez une erreur de déphasage, et vérifiez la correction!";
TRANSLATIONS_EXP_4_2.fr.topics["error-correction-need"] = {
  label: "Fragilité de la Phase Quantique",
  tag: "Pourquoi les états de phase sont-ils fragiles ?",
  bullets: [
    "Le bruit de phase-flip (déphasage) est le plus fréquent dans les processeurs quantiques à l'état solide.",
    "Il rend aléatoire la phase relative entre |0⟩ et |1⟩ (par exemple, transformant |+⟩ en |-⟩).",
    "Mesurer un qubit pour vérifier le déphasage effondre son état, détruisant la superposition."
  ],
  description: "Le déphasage représente la perte de cohérence quantique. Comme il altère la phase sans changer l'état d'énergie, il nécessite des codes en bases conjuguées."
};
TRANSLATIONS_EXP_4_2.fr.topics["quantum-encoding"] = {
  label: "Codage en Base X & Hadamard",
  tag: "Mappage de Répétition de Phase",
  bullets: [
    "On encode en créant d'abord un état de répétition CNOT α|000⟩ + β|111⟩.",
    "Ensuite, on applique des portes Hadamard (H) aux trois qubits, transformant en répétition de base X : α|+++⟩ + β|---⟩.",
    "Cela distribue l'information de phase de manière non locale sur les trois qubits intriqués."
  ],
  description: "En codant en base X avec Hadamards, nous garantissons que les erreurs de phase-flip (Z) agissent comme des bit-flips dans cette nouvelle base."
};
TRANSLATIONS_EXP_4_2.fr.topics["error-injection"] = {
  label: "Bruit Environnemental de Phase-Flip",
  tag: "Canal d'Erreur de Phase",
  bullets: [
    "Une erreur de phase-flip est représentée par une porte Pauli Z : Z|0⟩ = |0⟩, Z|1⟩ = -|1⟩.",
    "Z déphase un qubit, changeant |+⟩ en |-⟩ et |-⟩ en |+⟩.",
    "Si elle affecte le qubit 1, l'état logique devient α|+-+⟩ + β|-+-⟩."
  ],
  description: "Le code à 3 qubits peut corriger toute erreur de déphasage unique. L'environnement applique Pauli Z sur une ligne."
};
TRANSLATIONS_EXP_4_2.fr.topics["syndrome-correction"] = {
  label: "Parité en Base X & Correction Z",
  tag: "Syndrome & Correction",
  bullets: [
    "Pour localiser le déphasage, on mesure les parités en base X : S1 = X0X1 et S2 = X1X2.",
    "S1 compare q0 et q1. S2 compare q1 et q2.",
    "Mesurer les parités isole le qubit déphasé, permettant d'appliquer une porte Pauli Z corrective."
  ],
  description: "Bob applique une porte Pauli Z de correction au qubit déphasé identifié par les syndromes, rétablissant la fidélité à 100%."
};
