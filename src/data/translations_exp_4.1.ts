// src/data/translations_exp_4.1.ts
// Multilingual UI strings for Experiment 4.1 (3-Qubit Bit-Flip QEC).

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

export const TRANSLATIONS_EXP_4_1: Record<LangCode, ExpTranslations> = {
  en: {
    nav_exit_workspace: "Exit",
    nav_theory: "1. QEC Theory",
    nav_playground: "2. QEC Playground",
    nav_quiz: "3. Checkpoint Quiz",
    title_basics: "Experiment 4.1: 3-Qubit Bit-Flip Error Correction Code",
    hero_title: "Fault-Tolerant Quantum Mechanics.",
    hero_sub: "Learn how repetition encoding protects quantum superpositions against environmental noise, allowing error detection and correction without collapsing the data states.",
    btn_start_learning: "Start Learning",
    btn_launch_playground: "Launch QEC Playground",
    card_superposition_title: "Redundancy Encoding",
    card_superposition_desc: "Logical qubits are mapped to multiple physical qubits (e.g. |0⟩ → |000⟩) to distribute data and enable protection.",
    card_nocloning_title: "Syndrome Measurement",
    card_nocloning_desc: "Collective parity checks check if adjacent physical qubits match, identifying error locations without inspecting the data state.",
    card_measurement_title: "Fault Recovery",
    card_measurement_desc: "Applying conditional Pauli X gates corrects flipped physical qubits, reconstructing the clean logical state.",
    section_title: "Core Mechanics of 3-Qubit QEC",
    section_sub: "Explore each theoretical concept below. Click cards to expand, or scroll down to view interactive animated diagrams.",
    quick_summary: "Quick Summary",
    concept_kicker: "Concept",
    concept_of: "of",
    table_basis: "Logical State",
    table_bit0: "Encoded Physical Qubits",
    table_bit1: "Protected Noise Limit",
    math_vector_title: "Three-Qubit Encoded State Vector",
    math_vector_def: "Logical State:",
    math_vector_constraint: "Fidelity Goal:",
    math_vector_desc: "The state is protected against any single-qubit bit-flip error. Parity measurement checks for phase consistency without altering amplitudes α and β.",
    cta_title: "Ready to Test Your QEC System?",
    cta_desc: "Enter the fault-tolerant playground to prepare a superposition, inject a channel bit flip, measure the syndrome, and correct the qubit state.",
    cta_btn_playground: "Go to QEC Playground",
    cta_btn_top: "Back to Top",
    builder_title: "3-Qubit Error Correction Playground",
    builder_sub: "Prepare an initial qubit state, encode it, inject a channel bit-flip, and verify full syndrome-based correction!",
    btn_guided_tour: "Start Guided Tour",
    btn_clear_circuit: "Reset Playground",
    toolbox_title: "Fault-Tolerant QEC Stages",
    toolbox_desc: "Follow steps 1-5 to prepare, encode, flip, measure syndromes, and correct the system.",
    timeline_title: "Interactive Parity Metrics",
    timeline_desc: "Check values of syndromes S1 (Z0Z1) and S2 (Z1Z2). These indicate which qubit contains the bit flip.",
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
    quiz_passed_desc: "You scored {score}/10. Excellent! You have successfully completed the checkpoint quiz for the 3-Qubit Bit-Flip QEC Code. You can now download your certificate and formal lab report below.",
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
    note_click: "Click buttons to change states and trigger corrections.",
    builder_outcome_0: "Fidelity to |ψ⟩:",
    builder_outcome_1: "Qubit Flipped:",
    builder_state_vector: "3-Qubit State Vector:",
    visual_basics_caption: "Prepared Input Bloch Sphere (Drag to rotate)",
    visual_collapse_state: "Encoded State (|000⟩)",
    visual_superposition_state: "Logical Superposition α|000⟩ + β|111⟩",
    visual_btn_reset: "Reset State",
    visual_btn_measure: "Parity Check",
    visual_collapse_caption: "CNOT mapping establishes three-qubit logical repetition.",
    visual_cloner: "Syndromes",
    visual_blocked: "❌ Failed",
    visual_disturbed: "Syndrome 1 (Z0Z1)",
    visual_corrupted: "Syndrome 2 (Z1Z2)",
    visual_cloning_caption: "Syndrome Parities isolate the exact location of the bit-flip error.",
    visual_rectilinear: "Syndromes",
    visual_diagonal: "Parities",
    visual_bases_caption: "Collective parity check detects error without destroying data.",
    topics: {
      "error-correction-need": {
        label: "The Need for Quantum Error Correction",
        tag: "Why are qubits fragile?",
        bullets: [
          "Qubits are highly susceptible to environmental noise (thermal, electromagnetic).",
          "A classical bit flip from 0 to 1 is corrected by simple majority voting. In quantum systems, we cannot read the qubits directly to vote.",
          "Measuring a qubit collapses its superposition state α|0⟩ + β|1⟩, destroying the data we want to protect."
        ],
        description: "Quantum Error Correction (QEC) is critical because quantum hardware is extremely noisy. Traditional error correction methods like repeating bits and measuring them do not work because measurement collapses arbitrary quantum states, violating state integrity."
      },
      "quantum-encoding": {
        label: "Quantum Encoding and Redundancy",
        tag: "Logical Repetition State",
        bullets: [
          "To protect a qubit, we encode its state α|0⟩ + β|1⟩ into a three-qubit entangled state α|000⟩ + β|111⟩.",
          "We use CNOT gates to map the information from q0 onto two physical target qubits q1 and q2.",
          "This distributes the information non-locally, so no single physical qubit holds the complete information."
        ],
        description: "By encoding a single logical qubit into a larger multi-qubit system, we distribute the quantum information across entangled states. This spatial redundancy is what enables us to identify errors without reading any single qubit's state."
      },
      "error-injection": {
        label: "Environmental Noise & Bit Flips",
        tag: "Error Channel",
        bullets: [
          "A bit-flip error is modeled mathematically by a Pauli X gate acting on a single qubit: X|0⟩ = |1⟩, X|1⟩ = |0⟩.",
          "If noise acts on qubit 1, the encoded state α|000⟩ + β|111⟩ becomes α|010⟩ + β|101⟩.",
          "The code protects against single physical bit-flips, assuming the noise rate is low enough that multiple flips are rare."
        ],
        description: "The 3-qubit bit-flip code protects against any single-qubit X error. If two or more qubits flip, the majority vote logic fails. Thus, physical error rates must be kept below a threshold value to achieve logical gains."
      },
      "syndrome-correction": {
        label: "Syndrome Measurement & Correction",
        tag: "Collective Parity Check",
        bullets: [
          "To find the error, we measure the parities of adjacent qubits: S1 = Z0Z1 and S2 = Z1Z2.",
          "S1 checks if q0 matches q1. S2 checks if q1 matches q2. These measurements only yield 1 (match) or -1 (mismatch).",
          "This parity calculation tells us which qubit is flipped without revealing or collapsing the coefficients α and β."
        ],
        description: "Syndrome extraction is the core of QEC. It measures the parity relations between qubits, mapping the noise footprint (the syndrome) onto auxiliary qubits. bob applies the correction gate X on the identified qubit, restoring 100% fidelity."
      }
    },
    quiz_questions: [
      {
        q: "What type of error is the 3-qubit bit-flip code designed to protect against?",
        options: [
          "Phase-flip (Z) errors only",
          "Single physical bit-flip (X) errors",
          "Double simultaneous qubit flips",
          "Photon leakage and absorption errors"
        ]
      },
      {
        q: "How is the logical ground state |0⟩_L encoded in the 3-qubit bit-flip code?",
        options: [
          "|0⟩_L = |000⟩",
          "|0⟩_L = |+ + +⟩",
          "|0⟩_L = |010⟩",
          "|0⟩_L = 1/√2(|000⟩ + |111⟩)"
        ]
      },
      {
        q: "Which gates are used to encode the initial state α|0⟩ + β|1⟩ from q0 onto q1 and q2?",
        options: [
          "Hadamard gates on all three qubits",
          "CNOT gates controlled by q0 with targets q1 and q2",
          "Pauli X gates on q1 and q2",
          "Toffoli (CCNOT) gate controlled by q0 and q1"
        ]
      },
      {
        q: "Why can't we measure the individual qubits q0, q1, q2 directly to check for errors?",
        options: [
          "Direct measurement collapses the superposition, destroying the quantum data.",
          "The hardware registers do not support direct measurement.",
          "Measuring qubits physically burns out the superconductive lines.",
          "Quantum data is stored in the cloud, not on the qubits."
        ]
      },
      {
        q: "What syndrome operators are measured to detect errors in the 3-qubit bit-flip code?",
        options: [
          "X0X1 and X1X2",
          "Z0Z1 and Z1Z2",
          "Y0Y1 and Y1Y2",
          "Z0X1 and Z1X2"
        ]
      },
      {
        q: "If the syndrome measurement yields S1 = 1 (mismatch/different) and S2 = 0 (match/same), which qubit is flipped? (Mapping: S1 checks q0 vs q1, S2 checks q1 vs q2)",
        options: [
          "Qubit q0",
          "Qubit q1",
          "Qubit q2",
          "No qubit is flipped"
        ]
      },
      {
        q: "If both syndrome checks show a mismatch (S1 = 1, S2 = 1), which qubit is flipped?",
        options: [
          "Qubit q0",
          "Qubit q1",
          "Qubit q2",
          "Both q0 and q2 are flipped"
        ]
      },
      {
        q: "How is the correction physically performed once the flipped qubit is identified?",
        options: [
          "Apply a Hadamard gate to the flipped qubit.",
          "Apply a Pauli X gate to the flipped qubit.",
          "Apply a Pauli Z gate to the flipped qubit.",
          "Reset the flipped qubit to state |0⟩."
        ]
      },
      {
        q: "What is the limitation of the 3-qubit bit-flip code regarding phase-flip (Z) errors?",
        options: [
          "It has 100% protection against phase-flips.",
          "It cannot detect or correct phase-flip errors.",
          "It converts phase-flips into bit-flips automatically.",
          "It requires a single ancilla to fix phase-flips."
        ]
      },
      {
        q: "What is the code distance (d) of the 3-qubit bit-flip code?",
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
        title: "Welcome to the QEC Playground!",
        desc: "Here you will step through the 3-qubit quantum error correction code. Let's see how syndromes protect quantum information."
      },
      {
        title: "Step 1: Prepare State",
        desc: "Choose a target state preset or slide the angles to rotate qubit q0 on the Bloch sphere. Click Next to encode it."
      },
      {
        title: "Step 2: Redundant Encoding",
        desc: "Click 'Simulate Encoding Circuit' on the left. This applies CNOTs to entangle q0, q1, and q2 into a logical state."
      },
      {
        title: "Step 3: Inject Channel Noise",
        desc: "Simulate environmental decoherence. Select a qubit (q0, q1, or q2) to inject a bit-flip (X) error, changing the vector."
      },
      {
        title: "Step 4: Measure Parity Syndromes",
        desc: "Extract parities. Click 'Extract Parity Syndromes' to read S1 and S2, pinpointing the corrupted qubit without reading the data."
      },
      {
        title: "Step 5: Apply Corrective Gates",
        desc: "Perform active feedback. Click 'Apply Correction' to trigger the restoring X gate, returning state fidelity to 100%!"
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
  TRANSLATIONS_EXP_4_1[l] = { 
    ...TRANSLATIONS_EXP_4_1.en,
    topics: JSON.parse(JSON.stringify(TRANSLATIONS_EXP_4_1.en.topics))
  };
});

TRANSLATIONS_EXP_4_1.hi.title_basics = "प्रयोग 4.1: 3-क्यूबिट बिट-फ्लिप त्रुटि सुधार कोड";
TRANSLATIONS_EXP_4_1.hi.nav_exit_workspace = "बाहर निकलें";
TRANSLATIONS_EXP_4_1.hi.nav_theory = "1. QEC सिद्धांत";
TRANSLATIONS_EXP_4_1.hi.nav_playground = "2. QEC प्लेग्राउंड";
TRANSLATIONS_EXP_4_1.hi.nav_quiz = "3. चेकपॉइंट क्विज़";
TRANSLATIONS_EXP_4_1.hi.btn_start_learning = "सीखना शुरू करें";
TRANSLATIONS_EXP_4_1.hi.btn_launch_playground = "QEC प्लेग्राउंड लॉन्च करें";
TRANSLATIONS_EXP_4_1.hi.btn_go_quiz = "चेकपॉइंट क्विज़ पर जाएं";
TRANSLATIONS_EXP_4_1.hi.builder_title = "3-क्यूबिट बिट-फ्लिप त्रुटि सुधार प्लेग्राउंड";
TRANSLATIONS_EXP_4_1.hi.builder_sub = "एक क्यूबिट तैयार करें, उसे एनकोड करें, चैनल बिट-फ्लिप त्रुटि डालें, और सुधार सत्यापित करें!";
TRANSLATIONS_EXP_4_1.hi.topics["error-correction-need"] = {
  label: "क्वांटम त्रुटि सुधार की आवश्यकता",
  tag: "क्यूबिट नाजुक क्यों होते हैं?",
  bullets: [
    "क्यूबिट पर्यावरणीय शोर (तापमान, विद्युत चुंबकीय) के प्रति अत्यधिक संवेदनशील होते हैं।",
    "क्लासिक बिट-फ्लिप बहुमत मतदान द्वारा सुधारा जाता है। क्वांटम प्रणालियों में, हम मतदान के लिए क्यूबिट को सीधे पढ़ नहीं सकते हैं।",
    "एक क्यूबिट को मापने से इसकी सुपरपोजिशन स्थिति α|0⟩ + β|1⟩ ढह जाती है, जिससे डेटा नष्ट हो जाता है।"
  ],
  description: "क्वांटम त्रुटि सुधार (QEC) आवश्यक है क्योंकि क्वांटम हार्डवेयर बहुत शोरगुल वाला होता है। पारंपरिक विधियां काम नहीं करती हैं क्योंकि माप क्वांटम अवस्थाओं को नष्ट कर देता है।"
};
TRANSLATIONS_EXP_4_1.hi.topics["quantum-encoding"] = {
  label: "क्वांटम एन्कोडिंग और अतिरेक",
  tag: "तार्किक पुनरावृत्ति स्थिति",
  bullets: [
    "क्यूबिट की रक्षा के लिए, हम उसकी स्थिति α|0⟩ + β|1⟩ को तीन-क्यूबिट उलझी हुई स्थिति α|000⟩ + β|111⟩ में एन्कोड करते हैं।",
    "हम q0 से जानकारी को दो भौतिक लक्ष्य क्यूबिट q1 और q2 पर मैप करने के लिए CNOT गेट्स का उपयोग करते हैं।",
    "यह जानकारी को गैर-स्थानीय रूप से वितरित करता है, ताकि कोई भी एकल भौतिक क्यूबिट पूरी जानकारी न रखे।"
  ],
  description: "एकल तार्किक क्यूबिट को एक बड़ी बहु-क्यूबिट प्रणाली में एन्कोड करके, हम क्वांटम जानकारी को उलझी हुई अवस्थाओं में वितरित करते हैं।"
};
TRANSLATIONS_EXP_4_1.hi.topics["error-injection"] = {
  label: "पर्यावरण शोर और बिट-फ्लिप",
  tag: "त्रुटि चैनल",
  bullets: [
    "बिट-फ्लिप त्रुटि को गणितीय रूप से एकल क्यूबिट पर अभिनय करने वाले पाउली X गेट द्वारा दर्शाया जाता है: X|0⟩ = |1⟩, X|1⟩ = |0⟩।",
    "यदि शोर क्यूबिट 1 पर कार्य करता है, तो एन्कोडेड स्थिति α|010⟩ + β|101⟩ बन जाती है।",
    "यह कोड एकल भौतिक बिट-फ्लिप से बचाता है, यह मानते हुए कि शोर दर इतनी कम है कि दोहरे फ्लिप दुर्लभ हैं।"
  ],
  description: "3-क्यूबिट बिट-फ्लिप कोड किसी भी एकल-क्यूबिट X त्रुटि से बचाता है।"
};
TRANSLATIONS_EXP_4_1.hi.topics["syndrome-correction"] = {
  label: "सिंड्रोम मापन और सुधार",
  tag: "सामूहिक पैरिटी जांच",
  bullets: [
    "त्रुटि खोजने के लिए, हम आसन्न क्यूबिट की पैरिटी को मापते हैं: S1 = Z0Z1 और S2 = Z1Z2।",
    "S1 जांचता है कि q0, q1 से मेल खाता है या नहीं। S2 जांचता है कि q1, q2 से मेल खाता है या नहीं। ये केवल 1 या -1 देते हैं।",
    "यह पैरिटी गणना हमें बताती है कि कौन सा क्यूबिट फ्लिप हुआ है, बिना गुणांक α और β को बदले या ढहाए।"
  ],
  description: "सिंड्रोम निष्कर्षण QEC का मूल है। यह क्यूबिट के बीच पैरिटी संबंधों को मापता है। बॉब पहचाने गए क्यूबिट पर सुधारात्मक X गेट लगाता है, जिससे फिडेलिटी बहाल होती है।"
};

TRANSLATIONS_EXP_4_1.kn.title_basics = "ಪ್ರಯೋಗ 4.1: 3-ಕ್ಯುಬಿಟ್ ಬಿಟ್-ಫ್ಲಿಪ್ ದೋಷ ತಿದ್ದುಪಡಿ ಕೋಡ್";
TRANSLATIONS_EXP_4_1.kn.nav_exit_workspace = "ನಿರ್ಗಮಿಸು";
TRANSLATIONS_EXP_4_1.kn.nav_theory = "1. QEC ಸಿದ್ಧಾಂತ";
TRANSLATIONS_EXP_4_1.kn.nav_playground = "2. QEC ಆಟದ ಮೈದಾನ";
TRANSLATIONS_EXP_4_1.kn.nav_quiz = "3. ರಸಪ್ರಶ್ನೆ";
TRANSLATIONS_EXP_4_1.kn.btn_start_learning = "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ";
TRANSLATIONS_EXP_4_1.kn.btn_launch_playground = "QEC ಆಟದ ಮೈದಾನ ಪ್ರಾರಂಭಿಸಿ";
TRANSLATIONS_EXP_4_1.kn.btn_go_quiz = "ರಸಪ್ರಶ್ನೆಗೆ ಹೋಗಿ";
TRANSLATIONS_EXP_4_1.kn.builder_title = "3-ಕ್ಯುಬಿಟ್ ಬಿಟ್-ಫ್ಲಿಪ್ ದೋಷ ತಿದ್ದುಪಡಿ ಆಟದ ಮೈದಾನ";
TRANSLATIONS_EXP_4_1.kn.builder_sub = "ಆರಂಭಿಕ ಕ್ಯುಬಿಟ್ ಸ್ಥಿತಿಯನ್ನು ಸಿದ್ಧಪಡಿಸಿ, ಅದನ್ನು ಎನ್ಕೋಡ್ ಮಾಡಿ, ದೋಷವನ್ನು ಚುಚ್ಚಿ ಮತ್ತು ತಿದ್ದುಪಡಿಯನ್ನು ಪರಿಶೀಲಿಸಿ!";
TRANSLATIONS_EXP_4_1.kn.topics["error-correction-need"] = {
  label: "ಕ್ವಾಂಟಮ್ ದೋಷ ತಿದ್ದುಪಡಿಯ ಅವಶ್ಯಕತೆ",
  tag: "ಕ್ಯುಬಿಟ್‌ಗಳು ಏಕೆ ಸೂಕ್ಷ್ಮವಾಗಿವೆ?",
  bullets: [
    "ಕ್ಯುಬಿಟ್‌ಗಳು ಪರಿಸರದ ಶಬ್ದಕ್ಕೆ (ಉಷ್ಣ, ವಿದ್ಯುತ್ಕಾಂತೀಯ) ಹೆಚ್ಚು ಒಳಗಾಗುತ್ತವೆ.",
    "ಕ್ಲಾಸಿಕಲ್ ಬಿಟ್-ಫ್ಲಿಪ್ ಅನ್ನು ಬಹುಮತದ ಮತದಾನದಿಂದ ಸರಿಪಡಿಸಲಾಗುತ್ತದೆ. ಆದರೆ ಕ್ವಾಂಟಮ್‌ನಲ್ಲಿ ನೇರವಾಗಿ ಕ್ಯುಬಿಟ್‌ಗಳನ್ನು ಓದಲಾಗುವುದಿಲ್ಲ.",
    "ಕ್ಯುಬಿಟ್ ಅನ್ನು ಅಳತೆ ಮಾಡುವುದರಿಂದ ಅದರ ಸೂಪರ್‌ಪೊಸಿಷನ್ ಸ್ಥಿತಿ α|0⟩ + β|1⟩ ನಾಶವಾಗುತ್ತದೆ."
  ],
  description: "ಕ್ವಾಂಟಮ್ ಯಂತ್ರಾಂಶವು ಹೆಚ್ಚು ಗದ್ದಲದಿಂದ ಕೂಡಿರುವುದರಿಂದ ದೋಷ ತಿದ್ದುಪಡಿ ಅತ್ಯಗತ್ಯ. ಸಾಂಪ್ರದಾಯಿಕ ವಿಧಾನಗಳು ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ ಏಕೆಂದರೆ ಅಳತೆಯು ಸ್ಥಿತಿಯನ್ನು ನಾಶಪಡಿಸುತ್ತದೆ."
};
TRANSLATIONS_EXP_4_1.kn.topics["quantum-encoding"] = {
  label: "ಕ್ವಾಂಟಮ್ ಎನ್ಕೋಡಿಂಗ್ ಮತ್ತು ಪುನರಾವರ್ತನೆ",
  tag: "ತಾರ್ಕಿಕ ಪುನರಾವರ್ತನೆಯ ಸ್ಥಿತಿ",
  bullets: [
    "ಕ್ಯುಬಿಟ್ ಅನ್ನು ರಕ್ಷಿಸಲು, ನಾವು ಅದರ ಸ್ಥಿತಿ α|0⟩ + β|1⟩ ಅನ್ನು ಮೂರು-ಕ್ಯುಬಿಟ್ ಸಿಕ್ಕಿಹಾಕಿಕೊಂಡ ಸ್ಥಿತಿ α|000⟩ + β|111⟩ ಗೆ ಎನ್ಕೋಡ್ ಮಾಡುತ್ತೇವೆ.",
    "q0 ಇಂದ ಮಾಹಿತಿಯನ್ನು ಎರಡು ಭೌತಿಕ ಕ್ಯುಬಿಟ್‌ಗಳಾದ q1 ಮತ್ತು q2 ಗೆ ನಕ್ಷೆ ಮಾಡಲು CNOT ಗೇಟ್‌ಗಳನ್ನು ಬಳಸುತ್ತೇವೆ.",
    "ಇದು ಮಾಹಿತಿಯನ್ನು ಹರಡುತ್ತದೆ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಒಂದು ಭೌತಿಕ ಕ್ಯುಬಿಟ್ ಸಂಪೂರ್ಣ ಮಾಹಿತಿಯನ್ನು ಹೊಂದಿರುವುದಿಲ್ಲ."
  ],
  description: "ಒಂದೇ ತಾರ್ಕಿಕ ಕ್ಯುಬಿಟ್ ಅನ್ನು ದೊಡ್ಡ ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಎನ್ಕೋಡ್ ಮಾಡುವ ಮೂಲಕ ಮಾಹಿತಿಯನ್ನು ಹಂಚಲಾಗುತ್ತದೆ."
};
TRANSLATIONS_EXP_4_1.kn.topics["error-injection"] = {
  label: "ಪರಿಸರ ಶಬ್ದ ಮತ್ತು ಬಿಟ್-ಫ್ಲಿಪ್‌ಗಳು",
  tag: "ದೋಷ ಚಾನಲ್",
  bullets: [
    "ಬಿಟ್-ಫ್ಲಿಪ್ ದೋಷವನ್ನು ಪೌಲಿ X ಗೇಟ್ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ: X|0⟩ = |1⟩, X|1⟩ = |0⟩.",
    "ಶಬ್ದವು ಕ್ಯುಬಿಟ್ 1 ಮೇಲೆ ಪರಿಣಾಮ ಬೀರಿದರೆ, ಎನ್ಕೋಡ್ ಮಾಡಿದ ಸ್ಥಿತಿ α|010⟩ + β|101⟩ ಆಗುತ್ತದೆ.",
    "ದೋಷದ ಪ್ರಮಾಣ ಕಡಿಮೆ ಇದ್ದಾಗ ಈ ಕೋಡ್ ಒಂದು ಕ್ಯುಬಿಟ್‌ನ ಬಿಟ್-ಫ್ಲಿಪ್ ಅನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ."
  ],
  description: "ಮೂರು ಕ್ಯುಬಿಟ್ ಬಿಟ್-ಫ್ಲಿಪ್ ಕೋಡ್ ಯಾವುದೇ ಒಂದು ಕ್ಯುಬಿಟ್‌ನ X ದೋಷದ ವಿರುದ್ಧ ರಕ್ಷಿಸುತ್ತದೆ."
};
TRANSLATIONS_EXP_4_1.kn.topics["syndrome-correction"] = {
  label: "ಸಿಂಡ್ರೋಮ್ ಅಳತೆ ಮತ್ತು ತಿದ್ದುಪಡಿ",
  tag: "ಸಾಮೂಹಿಕ ಸಮಾನತೆಯ ಪರಿಶೀಲನೆ",
  bullets: [
    "ದೋಷವನ್ನು ಕಂಡುಹಿಡಿಯಲು, ನಾವು ನೆರೆಯ ಕ್ಯುಬಿಟ್‌ಗಳ ಸಮಾನತೆಯನ್ನು ಅಳೆಯುತ್ತೇವೆ: S1 = Z0Z1 ಮತ್ತು S2 = Z1Z2.",
    "S1 ಕ್ಯುಬಿಟ್ q0 ಮತ್ತು q1 ಅನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ. S2 ಕ್ಯುಬಿಟ್ q1 ಮತ್ತು q2 ಅನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ. ಇವು ಕೇವಲ 1 ಅಥವಾ -1 ನೀಡುತ್ತವೆ.",
    "ಈ ಸಮಾನತೆಯು ಕ್ಯುಬಿಟ್ ಸ್ಥಿತಿಯನ್ನು ಕೆಡಿಸದೆ ಯಾವ ಕ್ಯುಬಿಟ್ ತಿರುಗಿದೆ ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತದೆ."
  ],
  description: "ಸಿಂಡ್ರೋಮ್ ಹೊರತೆಗೆಯುವಿಕೆಯು ಕ್ಯುಬಿಟ್‌ಗಳ ನಡುವಿನ ಸಮಾನತೆಯ ಸಂಬಂಧಗಳನ್ನು ಅಳೆಯುತ್ತದೆ. ಬಾಬ್ ಸರಿಯಾದ X ಗೇಟ್ ಬಳಸಿ ಕ್ಯುಬಿಟ್ ಅನ್ನು ಮೊದಲಿನ ಸ್ಥಿತಿಗೆ ತರುತ್ತಾನೆ."
};

TRANSLATIONS_EXP_4_1.ta.title_basics = "பரிசோதனை 4.1: 3-குபிட் பிட்-பிளிப் பிழை திருத்த குறியீடு";
TRANSLATIONS_EXP_4_1.ta.nav_exit_workspace = "வெளியேறு";
TRANSLATIONS_EXP_4_1.ta.nav_theory = "1. QEC கோட்பாடு";
TRANSLATIONS_EXP_4_1.ta.nav_playground = "2. QEC விளையாட்டு மைதானம்";
TRANSLATIONS_EXP_4_1.ta.nav_quiz = "3. வினாடி வினா";
TRANSLATIONS_EXP_4_1.ta.btn_start_learning = "கற்க தொடங்குங்கள்";
TRANSLATIONS_EXP_4_1.ta.btn_launch_playground = "QEC விளையாட்டு மைதானத்தை துவக்கு";
TRANSLATIONS_EXP_4_1.ta.btn_go_quiz = "வினாடி வினாவுக்குச் செல்லவும்";
TRANSLATIONS_EXP_4_1.ta.builder_title = "3-குபிட் பிட்-பிளிப் பிழை திருத்த விளையாட்டு மைதானம்";
TRANSLATIONS_EXP_4_1.ta.builder_sub = "ஆரம்ப நிலையை தயார் செய்து, குறியாக்கம் செய்து, பிழையை செலுத்தி, திருத்தத்தை சரிபார்க்கவும்!";
TRANSLATIONS_EXP_4_1.ta.topics["error-correction-need"] = {
  label: "குவாண்டம் பிழை திருத்தத்தின் தேவை",
  tag: "குபிட்கள் ஏன் உடையக்கூடியவை?",
  bullets: [
    "குபிட்கள் சுற்றுச்சூழல் சத்தத்திற்கு (வெப்ப, மின்காந்த) மிகவும் ஆளாகின்றன.",
    "ஒரு கிளாசிக்கல் பிட்-பிளிப் பெரும்பான்மை வாக்களிப்பதன் மூலம் திருத்தப்படுகிறது. ஆனால் குவாண்டமில் நேரடியாக அளவிட முடியாது.",
    "ஒரு குபிட்டை அளவிடுவது அதன் சூப்பர்போசிஷன் நிலையை α|0⟩ + β|1⟩ அழித்துவிடும்."
  ],
  description: "குவாண்டம் வன்பொருள் மிகவும் சத்தமாக இருப்பதால் பிழை திருத்தம் முக்கியமானது. வழக்கமான முறைகள் செயல்படாது, ஏனெனில் அளவீடு குவாண்டம் நிலைகளை அழிக்கும்."
};
TRANSLATIONS_EXP_4_1.ta.topics["quantum-encoding"] = {
  label: "குவாண்டம் குறியாக்கம் மற்றும் தேவையற்ற தன்மை",
  tag: "தர்க்கரீதியான மறுநிகழ்வு நிலை",
  bullets: [
    "ஒரு குபிட்டைப் பாதுகாக்க, அதன் நிலையை α|0⟩ + β|1⟩-ஐ மூன்று குபிட் நிலை α|000⟩ + β|111⟩ என குறியாக்கம் செய்கிறோம்.",
    "CNOT வாயில்களைப் பயன்படுத்தி q0-லிருந்து தகவலை q1 மற்றும் q2-க்கு மாற்றுகிறோம்.",
    "இது தகவலை பரப்புகிறது, இதனால் எந்த ஒரு குபிட்டும் முழு தகவலையும் கொண்டிருக்காது."
  ],
  description: "தகவலை குவாண்டம் நிலைகளில் பரப்புவதன் மூலம் தேவையற்ற தன்மையை பயன்படுத்தி குபிட்டைப் பாதுகாக்கிறோம்."
};
TRANSLATIONS_EXP_4_1.ta.topics["error-injection"] = {
  label: "சுற்றுச்சூழல் சத்தம் & பிட்-பிளிப்ஸ்",
  tag: "பிழை சேனல்",
  bullets: [
    "பிட்-பிளிப் பிழையானது பாலி X வாயிலால் குறிக்கப்படுகிறது: X|0⟩ = |1⟩, X|1⟩ = |0⟩.",
    "சத்தம் குபிட் 1-ஐ பாதித்தால், குறியாக்கம் செய்யப்பட்ட நிலை α|010⟩ + β|101⟩ ஆக மாறுகிறது.",
    "பிழை விகிதம் குறைவாக இருக்கும்போது, இந்த குறியீடு ஒற்றை பிட்-பிளிப்பை திருத்துகிறது."
  ],
  description: "3-குபிட் பிட்-பிளிப் குறியீடு ஒற்றை X பிழையிலிருந்து பாதுகாக்கிறது."
};
TRANSLATIONS_EXP_4_1.ta.topics["syndrome-correction"] = {
  label: "சிண்ட்ரோம் அளவீடு & திருத்தம்",
  tag: "கூட்டு சமநிலை சரிபார்ப்பு",
  bullets: [
    "பரிசோதனை 4.1: 3-குபிட் பிட்-பிளிப் பிழை திருத்த குறியீடு.",
    "S1 குபிட் q0 மற்றும் q1-ஐ ஒப்பிடுகிறது. S2 குபிட் q1 மற்றும் q2-ஐ ஒப்பிடுகிறது. இவை 1 அல்லது -1-ஐ மட்டுமே தரும்.",
    "இந்த சமநிலை குபிட் நிலையை அழிக்காமல் எந்த குபிட் திரும்பியது என்பதை காட்டுகிறது."
  ],
  description: "சிண்ட்ரோம் பிரித்தெடுத்தல் குபிட்களுக்கு இடையிலான சமநிலை உறவுகளை அளவிடுகிறது. பாப் சரியான X வாயிலை பயன்படுத்தி குபிட்டை மீட்டெடுக்கிறார்."
};

TRANSLATIONS_EXP_4_1.es.title_basics = "Experimento 4.1: Código de Corrección de Errores de 3 Qubits Bit-Flip";
TRANSLATIONS_EXP_4_1.es.nav_exit_workspace = "Salir";
TRANSLATIONS_EXP_4_1.es.nav_theory = "1. Teoría QEC";
TRANSLATIONS_EXP_4_1.es.nav_playground = "2. Laboratorio QEC";
TRANSLATIONS_EXP_4_1.es.nav_quiz = "3. Cuestionario";
TRANSLATIONS_EXP_4_1.es.btn_start_learning = "Comenzar a Aprender";
TRANSLATIONS_EXP_4_1.es.btn_launch_playground = "Lanzar Laboratorio QEC";
TRANSLATIONS_EXP_4_1.es.btn_go_quiz = "Ir al Cuestionario";
TRANSLATIONS_EXP_4_1.es.builder_title = "Laboratorio de Corrección de Errores de 3 Qubits Bit-Flip";
TRANSLATIONS_EXP_4_1.es.builder_sub = "¡Prepare un estado de qubit inicial, codifíquelo, inyecte un error de bit-flip y verifique la corrección!";
TRANSLATIONS_EXP_4_1.es.topics["error-correction-need"] = {
  label: "La Necesidad de la Corrección de Errores",
  tag: "¿Por qué los qubits son frágiles?",
  bullets: [
    "Los qubits son muy susceptibles al ruido ambiental (térmico, electromagnético).",
    "El error clásico se corrige por votación mayoritaria. En sistemas cuánticos, no podemos leer directamente los qubits para votar.",
    "Medir un qubit colapsa su estado de superposición α|0⟩ + β|1⟩, destruyendo los datos que queremos proteger."
  ],
  description: "La corrección de errores cuánticos (QEC) es fundamental porque el hardware cuántico es ruidoso. Los métodos tradicionales no funcionan porque la medición destruye los estados."
};
TRANSLATIONS_EXP_4_1.es.topics["quantum-encoding"] = {
  label: "Codificación Cuántica y Redundancia",
  tag: "Estado de Repetición Lógico",
  bullets: [
    "Para proteger un qubit, codificamos su estado α|0⟩ + β|1⟩ en un estado entrelazado de tres qubits α|000⟩ + β|111⟩.",
    "Utilizamos compuertas CNOT para mapear la información desde q0 a los qubits físicos q1 y q2.",
    "Esto distribuye la información de forma no local, por lo que ningún qubit individual contiene toda la información."
  ],
  description: "Al codificar un único qubit lógico en un sistema más grande, distribuimos la información cuántica en estados entrelazados."
};
TRANSLATIONS_EXP_4_1.es.topics["error-injection"] = {
  label: "Ruido Ambiental y Bit-Flips",
  tag: "Canal de Error",
  bullets: [
    "Un error de bit-flip se modela con una compuerta Pauli X: X|0⟩ = |1⟩, X|1⟩ = |0⟩.",
    "Si el ruido afecta al qubit 1, el estado codificado se convierte en α|010⟩ + β|101⟩.",
    "El código protege contra un solo bit-flip físico, asumiendo que la tasa de error es baja."
  ],
  description: "El código de 3 qubits protege contra cualquier error X individual."
};
TRANSLATIONS_EXP_4_1.es.topics["syndrome-correction"] = {
  label: "Medición de Síndrome y Corrección",
  tag: "Chequeo de Paridad Colectivo",
  bullets: [
    "Para hallar el error, medimos la paridad de qubits adyacentes: S1 = Z0Z1 y S2 = Z1Z2.",
    "S1 verifica si q0 coincide con q1. S2 verifica si q1 coincide con q2. Dan como resultado 1 o -1.",
    "Esta paridad indica qué qubit está invertido sin revelar ni colapsar los coeficientes α y β."
  ],
  description: "La extracción del síndrome mide las relaciones de paridad entre qubits, permitiendo a Bob aplicar la compuerta X correspondiente."
};

TRANSLATIONS_EXP_4_1.fr.title_basics = "Expérience 4.1 : Code de Correction d'Erreur 3 Qubits Bit-Flip";
TRANSLATIONS_EXP_4_1.fr.nav_exit_workspace = "Quitter";
TRANSLATIONS_EXP_4_1.fr.nav_theory = "1. Théorie QEC";
TRANSLATIONS_EXP_4_1.fr.nav_playground = "2. Laboratoire QEC";
TRANSLATIONS_EXP_4_1.fr.nav_quiz = "3. Quiz de contrôle";
TRANSLATIONS_EXP_4_1.fr.btn_start_learning = "Commencer à Apprendre";
TRANSLATIONS_EXP_4_1.fr.btn_launch_playground = "Lancer le Laboratoire QEC";
TRANSLATIONS_EXP_4_1.fr.btn_go_quiz = "Aller au Quiz";
TRANSLATIONS_EXP_4_1.fr.builder_title = "Laboratoire de Correction d'Erreur de 3 Qubits Bit-Flip";
TRANSLATIONS_EXP_4_1.fr.builder_sub = "Préparez un état initial de qubit, encodez-le, injectez une erreur de bit-flip, et vérifiez la correction!";
TRANSLATIONS_EXP_4_1.fr.topics["error-correction-need"] = {
  label: "Le Besoin de Correction d'Erreurs",
  tag: "Pourquoi les qubits sont-ils fragiles ?",
  bullets: [
    "Les qubits sont très sensibles au bruit environnemental (thermique, électromagnétique).",
    "L'erreur classique est corrigée par vote majoritaire. En quantique, on ne peut pas lire directement les qubits pour voter.",
    "Mesurer un qubit effondre sa superposition α|0⟩ + β|1⟩, détruisant les données à protéger."
  ],
  description: "La correction d'erreurs quantiques (QEC) est cruciale car le matériel quantique est bruyant. Les méthodes traditionnelles ne fonctionnent pas car la mesure détruit l'état."
};
TRANSLATIONS_EXP_4_1.fr.topics["quantum-encoding"] = {
  label: "Codage Quantique et Redondance",
  tag: "État de Répétition Logique",
  bullets: [
    "Pour protéger un qubit, on encode sa superposition α|0⟩ + β|1⟩ dans un état intriqué de trois qubits α|000⟩ + β|111⟩.",
    "On utilise des portes CNOT pour copier l'information de q0 sur les qubits physiques q1 et q2.",
    "Cela distribue l'information de manière non locale, de sorte qu'aucun qubit ne contient toute l'information."
  ],
  description: "En encodant un qubit logique dans un système plus grand, nous distribuons l'information sur des états intriqués."
};
TRANSLATIONS_EXP_4_1.fr.topics["error-injection"] = {
  label: "Bruit Environnemental & Bit-Flips",
  tag: "Canal d'Erreur",
  bullets: [
    "Une erreur de bit-flip est modélisée par une porte Pauli X : X|0⟩ = |1⟩, X|1⟩ = |0⟩.",
    "Si le bruit affecte le qubit 1, l'état encodé devient α|010⟩ + β|101⟩.",
    "Le code protège contre un bit-flip physique unique, en supposant le taux d'erreur faible."
  ],
  description: "Le code à 3 qubits protège contre toute erreur X unique."
};
TRANSLATIONS_EXP_4_1.fr.topics["syndrome-correction"] = {
  label: "Mesure de Syndrome & Correction",
  tag: "Contrôle de Parité Collectif",
  bullets: [
    "Pour localiser l'erreur, on mesure la parité des qubits adjacents : S1 = Z0Z1 et S2 = Z1Z2.",
    "S1 compare q0 et q1. S2 compare q1 et q2. Les résultats sont 1 ou -1.",
    "Cette parité identifie le qubit inversé sans révéler ni effondrer les coefficients α et β."
  ],
  description: "L'extraction de syndrome mesure les relations de parité entre qubits, permettant à Bob d'appliquer la porte X de correction."
};
