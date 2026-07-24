// src/data/translations_exp_1.1.ts
// Multilingual UI strings for Experiment 1.1 (Quantum Basics).

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

export const TRANSLATIONS_EXP_1_1: Record<LangCode, ExpTranslations> = {
  en: {
    nav_exit_workspace: "Exit",
    nav_theory: "1. Theory Dashboard",
    nav_playground: "2. Circuit Playground",
    nav_quiz: "3. Checkpoint Quiz",
    title_basics: "Experiment 1.1: Qubits, Superposition & Complementarity",
    hero_title: "Foundations of Quantum Information.",
    hero_sub: "Before jumping into quantum secure channels and complex cryptography, understand the core physical properties of single qubits: superposition, no-cloning, and bases measurement collapse.",
    btn_start_learning: "Start Learning",
    btn_launch_playground: "Launch Circuit Playground",
    card_superposition_title: "Superposition",
    card_superposition_desc: "A qubit can exist in a linear combination of both 0 and 1, represented as probability amplitudes on the Bloch sphere.",
    card_nocloning_title: "No-Cloning",
    card_nocloning_desc: "Unlike classical bits, unknown quantum states cannot be duplicated perfectly, safeguarding QKD against copies.",
    card_measurement_title: "Measurement",
    card_measurement_desc: "Observing a qubit collapses its wavefunction and disturbs the state, revealing the presence of active observers.",
    section_title: "Core Principles of Quantum Mechanics",
    section_sub: "Each concept card provides a quick conceptual view. Click to expand summary, or scroll down to explore the interactive visualizer widgets.",
    quick_summary: "Quick Summary",
    concept_kicker: "Concept",
    concept_of: "of",
    table_basis: "Basis",
    table_bit0: "Bit 0 Representation",
    table_bit1: "Bit 1 Representation",
    math_vector_title: "Mathematical Superposition State Vector",
    math_vector_def: "Vector Definition:",
    math_vector_constraint: "Normalization Constraint:",
    math_vector_desc: "The complex coefficients α and β determine the probabilities of collapse to state |0⟩ or |1⟩ respectively.",
    cta_title: "Foundations Complete!",
    cta_desc: "Proceed to the drag-and-drop circuit playground to visually manipulate qubits in real-time.",
    cta_btn_playground: "Go to Circuit Playground",
    cta_btn_top: "Back to Top",
    builder_title: "Interactive Circuit Simulator",
    builder_sub: "Drag quantum logic gates onto the timeline grid and watch the qubit state vector calculate live.",
    btn_guided_tour: "Start Guided Tour",
    btn_clear_circuit: "Clear Circuit",
    toolbox_title: "1. Logic Gate Toolbox",
    toolbox_desc: "Drag a gate to a slot on the qubit timeline, or click a gate to place it in the first empty slot.",
    timeline_title: "2. Circuit Timeline (1 Qubit)",
    timeline_desc: "Drag gates here. Drag a gate away to discard it.",
    bloch_title: "3. 3D Bloch Sphere",
    bloch_desc: "Interactive 3D Bloch Sphere representation of the state vector.",
    histogram_title: "4. Measurement Histogram",
    histogram_desc: "Probabilities calculated mathematically based on the gate sequence.",
    btn_go_quiz: "Go to Checkpoint Quiz",
    quiz_title: "Checkpoint Quiz",
    quiz_time_left: "Left",
    quiz_next_question: "Next Question",
    quiz_submit_results: "Submit Results",
    quiz_passed_title: "Validation Complete!",
    quiz_passed_desc: "You scored {score}/10. Excellent! You have successfully completed the checkpoint quiz for Quantum Mechanics Basics. You can now download your certificate and formal lab report below.",
    btn_download_report: "Download Lab Report",
    btn_download_cert: "Download Credentials",
    btn_back_dashboard: "Back to Dashboard",
    quiz_failed_title: "Passing Grade Required",
    quiz_failed_desc: "You scored {score}/10. A perfect 10/10 score is required to pass the checkpoint. Please review the theory slides, practice in the sandbox, and try again!",
    btn_retake_quiz: "Retake Quiz",
    btn_scroll_section: "Scroll to full section",
    guided_tour_title: "Guided Tour",
    guided_tour_step: "Step",
    guided_tour_of: "of",
    btn_next: "Next",
    btn_back: "Back",
    btn_finish: "Finish",
    btn_skip: "Skip Tour",
    btn_done: "Done",
    note_drag: "Drag gates onto slots 1 to 5 to execute them sequentially.",
    note_click: "Click any gate badge 'x' to remove it.",
    builder_outcome_0: "Outcome |0⟩:",
    builder_outcome_1: "Outcome |1⟩:",
    builder_state_vector: "State Vector:",
    visual_basics_caption: "Interactive 3D Bloch Sphere (Drag to rotate)",
    visual_collapse_state: "Collapsed State (|0⟩)",
    visual_superposition_state: "Superposition (|0⟩ + |1⟩)",
    visual_btn_reset: "Reset",
    visual_btn_measure: "Measure",
    visual_collapse_caption: "Measurement Collapses Wavefunction",
    visual_cloner: "Cloner",
    visual_blocked: "❌ Blocked",
    visual_disturbed: "Disturbed",
    visual_corrupted: "Corrupted",
    visual_cloning_caption: "Perfect Copying Violates Physics",
    visual_rectilinear: "Rectilinear (+)",
    visual_diagonal: "Diagonal (×)",
    visual_bases_caption: "Conjugate Measurement Bases",
    topics: {
      "quantum-basics": {
        label: "Quantum Basics: The Qubit",
        tag: "What is a qubit?",
        bullets: [
          "A classical bit is either 0 or 1. A qubit can exist in a superposition of both 0 and 1 at the same time.",
          "This superposition is not uncertainty; it is a real physical state.",
          "Only when a qubit is measured does it collapse into a definite value."
        ],
        description: "Understanding qubits is the first step to grasping quantum mechanics and cryptography. Unlike classical bits that are definitively 0 or 1, qubits exist in superposition—a fundamental quantum property that enables advanced quantum protocols."
      },
      "measurement-disturbance": {
        label: "Measurement Disturbance",
        tag: "The core reason quantum channels are secure",
        bullets: [
          "In classical systems, you can read data without changing it.",
          "In quantum systems, measurement changes the state and destroys the original superposition.",
          "This disturbance is unavoidable and fundamental; this single fact guarantees secure communication."
        ],
        description: "The measurement disturbance principle is a cornerstone of quantum mechanics. Any attempt to observe or copy a quantum state inevitably alters it, making unauthorized measurement detectable by the laws of physics themselves."
      },
      "no-cloning": {
        label: "The No-Cloning Theorem",
        tag: "Why copying is impossible",
        bullets: [
          "It is impossible to create an identical copy of an unknown quantum state.",
          "An eavesdropper cannot copy a photon and forward it safely.",
          "Any attempt to extract information leaves a trace, directly preventing invisible interception."
        ],
        description: "The No-Cloning Theorem is a fundamental principle of quantum mechanics that guarantees the security of quantum communication. Unlike classical information, which can be copied perfectly, quantum states cannot be duplicated."
      },
      "bases-complementarity": {
        label: "Bases and Complementarity",
        tag: "Incompatible measurements",
        bullets: [
          "In quantum communication (like BB84), conjugate bases are used: Rectilinear basis (+) and Diagonal basis (×).",
          "If measured in the correct basis → the original bit is recovered. Wrong basis → completely random result.",
          "These bases are incompatible; knowing one gives no information about the other (complementarity)."
        ],
        description: "Complementarity is the quantum property that makes protocols like BB84 secure. The measurement bases are incompatible, ensuring that an eavesdropper's wrong guess produces detectable randomness.",
        tableTitle: "Basis Comparison",
        basis1: "Rectilinear (+)",
        basis1_0: "Horizontal (0°)",
        basis1_1: "Vertical (90°)",
        basis2: "Diagonal (×)",
        basis2_0: "45°",
        basis2_1: "135°"
      }
    },
    quiz_questions: [
      {
        q: "What is the key difference between a classical bit and a quantum qubit?",
        options: [
          "A qubit can only be 0 or 1, whereas a bit can be in superposition.",
          "A qubit can exist in a superposition of both |0⟩ and |1⟩ states simultaneously.",
          "A qubit requires classical cables to transfer information.",
          "There is no mathematical difference."
        ]
      },
      {
        q: "What does the No-Cloning Theorem state?",
        options: [
          "It is impossible to copy classical information.",
          "You can clone a qubit if you measure it in the Rectilinear basis first.",
          "It is physically impossible to create an identical copy of an arbitrary unknown quantum state.",
          "You can only copy qubits using entangling operations."
        ]
      },
      {
        q: "In quantum mechanics, what is the effect of measuring a qubit in superposition?",
        options: [
          "The qubit state remains in superposition.",
          "The wavefunction collapses to a definite state, disturbing the original superposition.",
          "The state becomes completely empty.",
          "The qubit is duplicated."
        ]
      },
      {
        q: "Which gate is commonly used to put a qubit into a 50/50 superposition from the state |0⟩?",
        options: [
          "Pauli-X gate",
          "Phase (S) gate",
          "Hadamard (H) gate",
          "Identity (I) gate"
        ]
      },
      {
        q: "What state is obtained by applying a Hadamard (H) gate to the ground state |0⟩?",
        options: [
          "|1⟩",
          "|+⟩ = 1/√2(|0⟩ + |1⟩)",
          "|−⟩ = 1/√2(|0⟩ − |1⟩)",
          "|+i⟩"
        ]
      },
      {
        q: "What are the standard states of the Diagonal (×) basis?",
        options: [
          "|0⟩ and |1⟩",
          "|+⟩ and |−⟩",
          "|+i⟩ and |−i⟩",
          "Only the zero state"
        ]
      },
      {
        q: "If a qubit is in state |+⟩ and you measure it in the Rectilinear (+) basis (states |0⟩ and |1⟩), what are the outcome probabilities?",
        options: [
          "100% chance of |0⟩, 0% chance of |1⟩",
          "0% chance of |0⟩, 100% chance of |1⟩",
          "50% chance of |0⟩, 50% chance of |1⟩",
          "75% chance of |0⟩, 25% chance of |1⟩"
        ]
      },
      {
        q: "Which of the following gates introduces a phase rotation of 90 degrees (π/2 radians) to the state |1⟩?",
        options: [
          "Hadamard (H) gate",
          "Pauli-X gate",
          "Phase (S) gate",
          "Identity (I) gate"
        ]
      },
      {
        q: "What does the normalization condition |α|² + |β|² = 1 represent for a qubit state |ψ⟩ = α|0⟩ + β|1⟩?",
        options: [
          "The total probability of all possible measurement outcomes must equal 1.",
          "The phase angle must be exactly 1 radian.",
          "The qubit must always collapse to |0⟩.",
          "The coefficients must be real integers."
        ]
      },
      {
        q: "Why does measurement disturbance protect quantum communication channels from eavesdroppers?",
        options: [
          "Eavesdropping attempts inevitably alter the quantum states, introducing errors that Alice and Bob can detect.",
          "Measurement physically destroys the communication fiber optics.",
          "The channel immediately blocks the connection if someone touches it.",
          "The eavesdropper's computers get infected by quantum noise."
        ]
      }
    ],
    tour_steps: [
      {
        title: "Welcome to the Quantum Sandbox!",
        desc: "Here, you will construct quantum circuits by dragging logic gates onto the qubit timeline. Let's learn how gates manipulate superposition."
      },
      {
        title: "Place a Hadamard Gate (H)",
        desc: "The H gate converts a definite classical state (|0⟩) into a superposition state. Drag H from the toolbox (or click it) and drop it into Slot 1."
      },
      {
        title: "Observe the Superposition",
        desc: "Excellent! Look at the Bloch sphere and amplitude cards. The vector now points along the X-axis (indicating 50% probability of |0⟩ and 50% probability of |1⟩). Click Next to proceed."
      },
      {
        title: "Introduce Phase Rotation (S)",
        desc: "Let's apply relative phase shift. Drag the S phase-gate (or click it) and drop it into Slot 2."
      },
      {
        title: "Relative Phase Shift Rotated",
        desc: "Outstanding! The vector has rotated along the equator of the sphere. Phase shifts adjust quantum amplitude phase coefficients without changing the measurement probabilities."
      },
      {
        title: "Sandbox Unlocked!",
        desc: "You have completed the guided tour. Drag other gates (X, Y, Z, I) to see how they rotate states across the Bloch Sphere coordinates. Have fun experimenting!"
      }
    ]
  },
  hi: {
    nav_exit_workspace: "कार्यस्थान से बाहर निकलें",
    nav_theory: "1. सिद्धांत डैशबोर्ड",
    nav_playground: "2. सर्किट प्लेग्राउंड",
    nav_quiz: "3. चेकपॉइंट क्विज़",
    title_basics: "प्रयोग 1.1: क्यूबिट, सुपरपोजिशन और पूरकता",
    hero_title: "क्वांटम सूचना की नींव।",
    hero_sub: "क्वांटम सुरक्षित चैनलों और जटिल क्रिप्टोग्राफी में जाने से पहले, एकल क्यूबिट के मुख्य भौतिक गुणों को समझें: सुपरपोजिशन, नो-क्लोनिंग और माप पतन।",
    btn_start_learning: "सीखना शुरू करें",
    btn_launch_playground: "सर्किट प्लेग्राउंड लॉन्च करें",
    card_superposition_title: "सुपरपोजिशन",
    card_superposition_desc: "एक क्यूबिट 0 और 1 दोनों के रैखिक संयोजन में मौजूद हो सकता है, जिसे ब्लोच क्षेत्र पर संभाव्यता आयाम के रूप में दर्शाया जाता है।",
    card_nocloning_title: "नो-क्लोनिंग",
    card_nocloning_desc: "शास्त्रीय बिट्स के विपरीत, अज्ञात क्वांटम अवस्थाओं को पूरी तरह से कॉपी नहीं किया जा सकता है, जो QKD की रक्षा करता है।",
    card_measurement_title: "माप (मेज़रमेंट)",
    card_measurement_desc: "एक क्यूबिट को मापने से उसका तरंग फलन (वेवफंक्शन) ढह जाता है और अवस्था बाधित हो जाती है, जिससे सक्रिय प्रेक्षकों की उपस्थिति का पता चलता है।",
    section_title: "क्वांटम मैकेनिक्स के मूल सिद्धांत",
    section_sub: "प्रत्येक अवधारणा कार्ड एक त्वरित वैचारिक दृश्य प्रदान करता है। विवरण देखने के लिए क्लिक करें या नीचे स्क्रॉल करें।",
    quick_summary: "त्वरित सारांश",
    concept_kicker: "अवधारणा",
    concept_of: "की",
    table_basis: "आधार",
    table_bit0: "बिट 0 निरूपण",
    table_bit1: "बिट 1 निरूपण",
    math_vector_title: "गणितीय सुपरपोजिशन स्टेट वेक्टर",
    math_vector_def: "वेक्टर परिभाषा:",
    math_vector_constraint: "सामान्यीकरणConstraint:",
    math_vector_desc: "जटिल गुणांक α और β क्रमशः |0⟩ या |1⟩ अवस्था में पतन की संभावनाओं को निर्धारित करते हैं।",
    cta_title: "बुनियाद पूरी हुई!",
    cta_desc: "वास्तविक समय में क्यूबिट्स को विज़ुअली हेरफेर करने के लिए ड्रैग-एंड-ड्रॉप सर्किट प्लेग्राउंड पर आगे बढ़ें।",
    cta_btn_playground: "सर्किट प्लेग्राउंड पर जाएं",
    cta_btn_top: "वापस ऊपर जाएं",
    builder_title: "इंटरैक्टिव सर्किट सिम्युलेटर",
    builder_sub: "क्वांटम लॉजिक गेट्स को टाइमलाइन ग्रिड पर ड्रैग करें और क्यूबिट स्टेट वेक्टर की लाइव गणना देखें।",
    btn_guided_tour: "गाइडेड टूर शुरू करें",
    btn_clear_circuit: "सर्किट साफ़ करें",
    toolbox_title: "1. लॉजिक गेट टूलबॉक्स",
    toolbox_desc: "क्यूबिट टाइमलाइन पर किसी स्लॉट में गेट ड्रैग करें, या पहले खाली स्लॉट में रखने के लिए गेट पर क्लिक करें।",
    timeline_title: "2. सर्किट टाइमलाइन (1 क्यूबिट)",
    timeline_desc: "गेट्स को यहाँ ड्रैग करें। किसी गेट को हटाने के लिए उसे बाहर खींचें।",
    bloch_title: "3. 3D ब्लोच स्फीयर",
    bloch_desc: "स्टेट वेक्टर का इंटरैक्टिव 3D ब्लोच स्फीयर निरूपण।",
    histogram_title: "4. माप हिस्टोग्राम",
    histogram_desc: "गेट अनुक्रम के आधार पर गणितीय रूप से गणना की गई संभावनाएँ।",
    btn_go_quiz: "चेकपॉइंट क्विज़ पर जाएं",
    quiz_title: "चेकपॉइंट क्विज़",
    quiz_time_left: "बचा है",
    quiz_next_question: "अगला प्रश्न",
    quiz_submit_results: "परिणाम सबमिट करें",
    quiz_passed_title: "सत्यापन पूर्ण!",
    quiz_passed_desc: "आपने {score}/10 अंक प्राप्त किए। बहुत बढ़िया! आपने क्वांटम मैकेनिक्स बेसिक्स के लिए चेकपॉइंट क्विज़ सफलतापूर्वक पूरा कर लिया है। आप नीचे अपनी रिपोर्ट और प्रमाणपत्र डाउनलोड कर सकते हैं।",
    btn_download_report: "लैब रिपोर्ट डाउनलोड करें",
    btn_download_cert: "प्रमाणपत्र डाउनलोड करें",
    btn_back_dashboard: "डैशबोर्ड पर वापस जाएं",
    quiz_failed_title: "उत्तीर्ण अंक आवश्यक",
    quiz_failed_desc: "आपने {score}/10 अंक प्राप्त किए। चेकपॉइंट पास करने के लिए 10/10 का सही स्कोर आवश्यक है। कृपया सिद्धांत स्लाइड्स की समीक्षा करें, सैंडबॉक्स में अभ्यास करें, और पुनः प्रयास करें!",
    btn_retake_quiz: "क्विज़ दोबारा लें",
    btn_scroll_section: "पूर्ण अनुभाग पर स्क्रॉल करें",
    guided_tour_title: "निर्देशित यात्रा",
    guided_tour_step: "चरण",
    guided_tour_of: "का",
    btn_next: "आगे",
    btn_back: "पीछे",
    btn_finish: "समाप्त करें",
    btn_skip: "यात्रा छोड़ें",
    btn_done: "पूर्ण",
    note_drag: "क्रमशः निष्पादित करने के लिए गेट्स को स्लॉट 1 से 5 पर ड्रैग करें।",
    note_click: "हटाने के लिए किसी भी गेट बैज 'x' पर क्लिक करें।",
    builder_outcome_0: "परिणाम |0⟩:",
    builder_outcome_1: "परिणाम |1⟩:",
    builder_state_vector: "स्टेट वेक्टर:",
    visual_basics_caption: "इंटरैक्टिव 3D ब्लोच क्षेत्र (घुमाने के लिए खींचें)",
    visual_collapse_state: "ढह गई अवस्था (|0⟩)",
    visual_superposition_state: "सुपरपोजिशन (|0⟩ + |1⟩)",
    visual_btn_reset: "रीसेट",
    visual_btn_measure: "मापें",
    visual_collapse_caption: "माप वेवफंक्शन को ढहा देता है",
    visual_cloner: "क्लोनर",
    visual_blocked: "❌ अवरुद्ध",
    visual_disturbed: "बाधित",
    visual_corrupted: "भ्रष्ट",
    visual_cloning_caption: "बिल्कुल सही नकल भौतिकी का उल्लंघन करती है",
    visual_rectilinear: "रेक्टिलिनियर (+)",
    visual_diagonal: "विकर्ण (×)",
    visual_bases_caption: "संयुग्मी माप आधार",
    topics: {
      "quantum-basics": {
        label: "क्वांटम बेसिक्स: क्यूबिट",
        tag: "क्यूबिट क्या है?",
        bullets: [
          "एक शास्त्रीय बिट या तो 0 होता है या 1। एक क्यूबिट एक ही समय में 0 और 1 दोनों के सुपरपोजिशन में मौजूद हो सकता है।",
          "यह सुपरपोजिशन अनिश्चितता नहीं है; यह एक वास्तविक भौतिक अवस्था है।",
          "केवल जब क्यूबिट को मापा जाता है तो वह एक निश्चित मान में ढह जाता है।"
        ],
        description: "क्वांटम मैकेनिक्स और क्रिप्टोग्राफी को समझने के लिए क्यूबिट को समझना पहला कदम है। शास्त्रीय बिट्स के विपरीत, जो निश्चित रूप से 0 या 1 होते हैं, क्यूबिट सुपरपोजिशन में मौजूद होते हैं।"
      },
      "measurement-disturbance": {
        label: "माप की गड़बड़ी",
        tag: "क्वांटम चैनल सुरक्षित होने का मुख्य कारण",
        bullets: [
          "शास्त्रीय प्रणालियों में, आप डेटा को बदले बिना पढ़ सकते हैं।",
          "क्वांटम प्रणालियों में, माप अवस्था को बदल देता है और मूल सुपरपोजिशन को नष्ट कर देता।",
          "यह अशांति अपरिहार्य और मौलिक है; यही एक तथ्य सुरक्षित संचार की गारंटी देता है।"
        ],
        description: "माप गड़बड़ी का सिद्धांत क्वांटम यांत्रिकी की आधारशिला है। क्वांटम स्थिति को देखने या कॉपी करने का कोई भी प्रयास अनिवार्य रूप से इसे बदल देता है।"
      },
      "no-cloning": {
        label: "नो-क्लोनिंग प्रमेय",
        tag: "कॉपी करना क्यों असंभव है",
        bullets: [
          "किसी अज्ञात क्वांटम अवस्था की बिल्कुल वैसी ही प्रतिलिपि बनाना असंभव है।",
          "एक ईव्सड्रॉपर (चोरी-छिपे सुनने वाला) फोटॉन को कॉपी करके सुरक्षित रूप से आगे नहीं भेज सकता।",
          "जानकारी निकालने का कोई भी प्रयास एक निशान छोड़ता है, जो अदृश्य रुकावट को रोकता है।"
        ],
        description: "नो-क्लोनिंग प्रमेय क्वांटम यांत्रिकी का एक मूल सिद्धांत है जो क्वांटम संचार की सुरक्षा की गारंटी देता है।"
      },
      "bases-complementarity": {
        label: "आधार और पूरकता",
        tag: "असंगत माप",
        bullets: [
          "क्वांटम संचार (जैसे BB84) में, पूरक आधारों का उपयोग किया जाता है: रेक्टिलिनियर आधार (+) और विकर्ण आधार (×)।",
          "यदि सही आधार में मापा जाता है → मूल बिट पुनर्प्राप्त हो जाता है। गलत आधार → पूरी तरह से यादृच्छिक परिणाम।",
          "ये आधार असंगत हैं; एक को जानने से दूसरे के बारे में कोई जानकारी नहीं मिलती (पूरकता)।"
        ],
        description: "पूरकता वह क्वांटम गुण है जो BB84 जैसे प्रोटोकॉल को सुरक्षित बनाता है।",
        tableTitle: "आधार तुलना",
        basis1: "रेक्टिलिनियर (+)",
        basis1_0: "क्षैतिज (0°)",
        basis1_1: "लंबवत (90°)",
        basis2: "विकर्ण (×)",
        basis2_0: "45°",
        basis2_1: "135°"
      }
    },
    quiz_questions: [
      {
        q: "शास्त्रीय बिट और क्वांटम क्यूबिट के बीच मुख्य अंतर क्या है?",
        options: [
          "एक क्यूबिट केवल 0 हो सकता है या 1, जबकि एक बिट सुपरपोजिशन में हो सकता है।",
          "एक क्यूबिट एक साथ |0⟩ और |1⟩ दोनों राज्यों के सुपरपोजिशन में मौजूद हो सकता है।",
          "क्यूबिट को सूचना स्थानांतरित करने के लिए शास्त्रीय केबलों की आवश्यकता होती है।",
          "कोई गणितीय अंतर नहीं है।"
        ]
      },
      {
        q: "नो-क्लोनिंग प्रमेय क्या कहता है?",
        options: [
          "शास्त्रीय जानकारी को कॉपी करना असंभव है।",
          "यदि आप पहले क्यूबिट को रेक्टिलिनियर आधार पर मापते हैं तो आप उसे क्लोन कर सकते हैं।",
          "एक मनमारी अज्ञात क्वांटम अवस्था की एक समान प्रतिलिपि बनाना भौतिक रूप से असंभव है।",
          "आप केवल उलझाव (entangling) संचालन का उपयोग करके क्यूबिट की प्रतिलिपि बना सकते हैं।"
        ]
      },
      {
        q: "क्वांटम मैकेनिक्स में, सुपरपोजिशन में क्यूबिट को मापने का क्या प्रभाव होता है?",
        options: [
          "क्यूबिट अवस्था सुपरपोजिशन में रहती है।",
          "तरंग फलन एक निश्चित अवस्था में ढह जाता है, जिससे मूल सुपरपोजिशन बाधित हो जाता है।",
          "अवस्था पूरी तरह खाली हो जाती है।",
          "क्यूबिट को डुप्लिकेट किया जाता है।"
        ]
      },
      {
        q: "क्यूबिट को |0⟩ अवस्था से 50/50 सुपरपोजिशन में डालने के लिए आमतौर पर किस गेट का उपयोग किया जाता है?",
        options: [
          "पाउली-X गेट",
          "फेज (S) गेट",
          "हाडामार्ड (H) गेट",
          "आइडेंटिटी (I) गेट"
        ]
      },
      {
        q: "ग्राउंड स्टेट |0⟩ पर हाडामार्ड (H) गेट लगाने से कौन सी अवस्था प्राप्त होती है?",
        options: [
          "|1⟩",
          "|+⟩ = 1/√2(|0⟩ + |1⟩)",
          "|−⟩ = 1/√2(|0⟩ − |1⟩)",
          "|+i⟩"
        ]
      },
      {
        q: "डायगोनल (×) आधार की मानक अवस्थाएँ क्या हैं?",
        options: [
          "|0⟩ और |1⟩",
          "|+⟩ और |−⟩",
          "|+i⟩ और |−i⟩",
          "केवल शून्य अवस्था"
        ]
      },
      {
        q: "यदि एक क्यूबिट |+⟩ अवस्था में है और आप इसे रेक्टिलिनियर (+) आधार (अवस्थाएँ |0⟩ और |1⟩) में मापते हैं, तो परिणाम की संभावनाएँ क्या हैं?",
        options: [
          "|0⟩ की 100% संभावना, |1⟩ की 0% संभावना",
          "|0⟩ की 0% संभावना, |1⟩ की 100% संभावना",
          "|0⟩ की 50% संभावना, |1⟩ की 50% संभावना",
          "|0⟩ की 75% संभावना, |1⟩ की 25% संभावना"
        ]
      },
      {
        q: "निम्नलिखित में से कौन सा गेट अवस्था |1⟩ में 90 डिग्री (π/2 रेडियन) का फेज रोटेशन पेश करता है?",
        options: [
          "हाडामार्ड (H) गेट",
          "पाउली-X गेट",
          "फेज (S) Gate",
          "आइडेंटिटी (I) गेट"
        ]
      },
      {
        q: "क्यूबिट अवस्था |ψ⟩ = α|0⟩ + β|1⟩ के लिए सामान्यीकरण स्थिति |α|² + |β|² = 1 क्या दर्शाता है?",
        options: [
          "सभी संभावित माप परिणामों की कुल संभावना 1 होनी चाहिए।",
          "फेज कोण बिल्कुल 1 रेडियन होना चाहिए।",
          "क्यूबिट हमेशा |0⟩ में ढह जाना चाहिए।",
          "गुणांक वास्तविक पूर्णांक होने चाहिए।"
        ]
      },
      {
        q: "माप की गड़बड़ी क्वांटम संचार चैनलों को ईव्सड्रॉपर्स से क्यों बचाती है?",
        options: [
          "ईव्सड्रॉइंग के प्रयास अनिवार्य रूप से क्वांटम अवस्थाओं को बदल देते हैं, जिससे ऐसी त्रुटियां उत्पन्न होती हैं जिनका एलिस और बॉब पता लगा सकते हैं।",
          "माप भौतिक रूप से संचार फाइबर ऑप्टिक्स को नष्ट कर देता है।",
          "यदि कोई चैनल को छूता है तो वह तुरंत कनेक्शन ब्लॉक कर देता है।",
          "ईव्सड्रॉपर के कंप्यूटर क्वांटम शोर से संक्रमित हो जाते हैं।"
        ]
      }
    ],
    tour_steps: [
      {
        title: "क्वांटम सैंडबॉक्स में आपका स्वागत है!",
        desc: "यहाँ, आप क्यूबिट टाइमलाइन पर लॉजिक गेट्स को ड्रैग करके क्वांटम सर्किट का निर्माण करेंगे। आइए जानें कि गेट्स सुपरपोजिशन में कैसे बदलाव करते हैं!"
      },
      {
        title: "हाडामार्ड गेट (H) लगाएं",
        desc: "H गेट एक निश्चित शास्त्रीय अवस्था (|0⟩) को सुपरपोजिशन अवस्था में बदलता है। टूलबॉक्स से H को ड्रैग करें (या क्लिक करें) और इसे स्लॉट 1 में छोड़ें।"
      },
      {
        title: "सुपरपोजिशन का निरीक्षण करें",
        desc: "बहुत बढ़िया! ब्लोच क्षेत्र और आयाम कार्ड देखें। वेक्टर अब X-अक्ष के साथ इंगित करता है (यह |0⟩ की 50% संभावना और |1⟩ की 50% संभावना दर्शाता है)। आगे बढ़ने के लिए अगला क्लिक करें।"
      },
      {
        title: "फेज रोटेशन (S) लागू करें",
        desc: "आइए सापेक्ष फेज शिफ्ट लागू करें। S फेज-गेट को ड्रैग करें (या उस पर क्लिक करें) और स्लॉट 2 में छोड़ें।"
      },
      {
        title: "सापेक्ष फेज शिफ्ट रोटेट हुआ",
        desc: "शानदार! वेक्टर ब्लोच क्षेत्र की भूमध्य रेखा के साथ घूम गया है। फेज शिफ्ट माप संभावनाओं को बदले बिना क्वांटम आयाम के फेज गुणांकों को समायोजित करता है।"
      },
      {
        title: "सैंडबॉक्स अनलॉक हुआ!",
        desc: "आपने निर्देशित यात्रा पूरी कर ली है। अन्य गेट्स (X, Y, Z, I) को ड्रैग करके देखें कि वे ब्लोच स्फीयर निर्देशांकों के पार स्टेट्स को कैसे घुमाते हैं। प्रयोग करने में मज़ा लें!"
      }
    ]
  },
  kn: {
    nav_exit_workspace: "ಕಾರ್ಯಕ್ಷೇತ್ರದಿಂದ ನಿರ್ಗಮಿಸಿ",
    nav_theory: "1. ಸಿದ್ಧಾಂತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    nav_playground: "2. ಸರ್ಕ್ಯೂಟ್ ಪ್ಲೇಗ್ರೌಂಡ್",
    nav_quiz: "3. ಚೆಕ್‌ಪಾಯಿಂಟ್ ಕ್ವಿಜ್",
    title_basics: "ಪ್ರಯೋಗ 1.1: ಕ್ಯೂಬಿಟ್‌ಗಳು, ಸೂಪರ್‌ಪೊಸಿಷನ್ ಮತ್ತು ಪೂರಕತೆ",
    hero_title: "ಕ್ವಾಂಟಮ್ ಮಾಹಿತಿಯ ಅಡಿಪಾಯ.",
    hero_sub: "ಕ್ವಾಂಟಮ್ ಸುರಕ್ಷಿತ ಚಾನಲ್‌ಗಳು ಮತ್ತು ಸಂಕೀರ್ಣ ಕ್ರಿಪ್ಟೋಗ್ರಫಿಗೆ ಹೋಗುವ ಮೊದಲು, ಕ್ಯೂಬಿಟ್‌ಗಳ ಮೂಲ ಗುಣಲಕ್ಷಣಗಳನ್ನು ತಿಳಿಯಿರಿ: ಸೂಪರ್‌ಪೊಸಿಷನ್, ನೋ-ಕ್ಲೋನಿಂಗ್ ಮತ್ತು ಮಾಪನ ಪತನ.",
    btn_start_learning: "ಕಲಿಕೆ ಪ್ರಾರಂಭಿಸಿ",
    btn_launch_playground: "ಸರ್ಕಿಟ್ ಆಟದ ಮೈದಾನವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
    card_superposition_title: "ಸೂಪರ್‌ಪೊಸಿಷನ್",
    card_superposition_desc: "ಒಂದು ಕ್ಯೂಬಿಟ್ 0 ಮತ್ತು 1 ಎರಡರ ರೇಖೀಯ ಸಂಯೋಜನೆಯಲ್ಲಿರಬಹುದು, ಇದನ್ನು ಬ್ಲೋಚ್ ಗೋಳದ ಮೇಲೆ ಸಂಭವನೀಯತೆಯಾಗಿ ಪ್ರತಿನಿಧಿಸಲされます.",
    card_nocloning_title: "ನೋ-ಕ್ಲೋನಿಂಗ್",
    card_nocloning_desc: "ಕ್ಲಾಸಿಕಲ್ ಬಿಟ್‌ಗಳಂತಲ್ಲದೆ, ಅಪರಿಚಿತ ಕ್ವಾಂಟಮ್ ಸ್ಥಿತಿಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ನಕಲಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.",
    card_measurement_title: "ಮಾಪನ (ಮೆಜರ್ಮೆಂಟ್)",
    card_measurement_desc: "ಕ್ಯೂಬಿಟ್ ಅನ್ನು ವೀಕ್ಷಿಸುವುದರಿಂದ ಅದರ ತರಂಗ ಕಾರ್ಯವು ಕುಸಿಯುತ್ತದೆ ಮತ್ತು ಮೂಲ ಸ್ಥಿತಿಯನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ.",
    section_title: "ಕ್ವಾಂಟಮ್ ಮೆಕ್ಯಾನಿಕ್ಸ್‌ನ ಮೂಲ ತತ್ವಗಳು",
    section_sub: "ಪ್ರತಿಯೊಂದು ಪರಿಕಲ್ಪನೆಯ ಕಾರ್ಡ್ ತ್ವರಿತ ನೋಟವನ್ನು ನೀಡುತ್ತದೆ. ಸಾರಾಂಶಕ್ಕಾಗಿ ಕ್ಲಿಕ್ ಮಾಡಿ ಅಥವಾ ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ.",
    quick_summary: "ತ್ವರಿತ ಸಾರಾಂಶ",
    concept_kicker: "ಪರಿಕಲ್ಪನೆ",
    concept_of: "ರ",
    table_basis: "ಬೇಸಿಸ್",
    table_bit0: "ಬಿಟ್ 0 ಪ್ರಾತಿನಿಧ್ಯ",
    table_bit1: "ಬಿಟ್ 1 ಪ್ರಾತಿನಿಧ್ಯ",
    math_vector_title: "ಗಣಿತದ ಸೂಪರ್‌ಪೊಸಿಷನ್ ಸ್ಟೇಟ್ ವೆಕ್ಟರ್",
    math_vector_def: "ವೆಕ್ಟರ್ ವ್ಯಾಖ್ಯಾನ:",
    math_vector_constraint: "ಸಾಮಾನ್ಯೀಕರಣ ಮಿತಿ:",
    math_vector_desc: "ಸಂಕೀರ್ಣ ಗುಣಾಂಕಗಳು α ಮತ್ತು β ಕ್ರಮವಾಗಿ |0⟩ ಅಥವಾ |1⟩ ಸ್ಥಿತಿಗೆ ಕುಸಿಯುವ ಸಂಭವನೀಯತೆಗಳನ್ನು ನಿರ್ಧರಿಸುತ್ತವೆ.",
    cta_title: "ಅಡಿಪಾಯ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    cta_desc: "ನೈಜ ಸಮಯದಲ್ಲಿ ಕ್ಯೂಬಿಟ್‌ಗಳನ್ನು ದೃಶ್ಯವಾಗಿ ಕುಶಲತೆಯಿಂದ ನಿರ್ವಹಿಸಲು ಡ್ರಾಗ್ ಮತ್ತು ಡ್ರಾಪ್ ಸರ್ಕ್ಯೂಟ್ ಮೈದಾನಕ್ಕೆ ಮುಂದುವರಿಯಿರಿ.",
    cta_btn_playground: "ಸರ್ಕ್ಯೂಟ್ ಮೈದಾನಕ್ಕೆ ಹೋಗಿ",
    cta_btn_top: "ವಾಪಸ್ ಮೇಲಕ್ಕೆ ಹೋಗಿ",
    builder_title: "ಸಂವಾದಾತ್ಮಕ ಸರ್ಕ್ಯೂಟ್ ಸಿಮ್ಯುಲೇಟರ್",
    builder_sub: "ಕ್ವಾಂಟಮ್ ಲಾಜಿಕ್ ಗೇಟ್‌ಗಳನ್ನು ಟೈಮ್‌ಲೈನ್‌ಗೆ ಡ್ರಾಗ್ ಮಾಡಿ ಮತ್ತು ಕ್ಯೂಬಿಟ್ ಸ್ಟೇಟ್ ವೆಕ್ಟರ್ ಲೈವ್ ಆಗಿ ಲೆಕ್ಕಾಚಾರವಾಗುವುದನ್ನು ವೀಕ್ಷಿಸಿ.",
    btn_guided_tour: "ಮಾರ್ಗದರ್ಶಿ ಪ್ರವಾಸವನ್ನು ಪ್ರಾರಂಭಿಸಿ",
    btn_clear_circuit: "ಸರ್ಕ್ಯೂಟ್ ತೆರವುಗೊಳಿಸಿ",
    toolbox_title: "1. ಲಾಜಿಕ್ ಗೇಟ್ ಟೂಲ್‌ಬಾಕ್ಸ್",
    toolbox_desc: "ಗೇಟ್ ಅನ್ನು ಕ್ಯೂಬಿಟ್ ಟೈಮ್‌ಲೈನ್‌ನಲ್ಲಿರುವ ಸ್ಲಾಟ್‌ಗೆ ಡ್ರಾಗ್ ಮಾಡಿ, ಅಥವಾ ಮೊದಲ ಖಾಲಿ ಸ್ಲಾಟ್‌ನಲ್ಲಿ ಇರಿಸಲು ಗೇಟ್ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    timeline_title: "2. ಸರ್ಕ್ಯೂಟ್ ಟೈಮ್‌ಲೈನ್ (1 ಕ್ಯೂಬಿಟ್)",
    timeline_desc: "ಗೇಟ್‌ಗಳನ್ನು ಇಲ್ಲಿಗೆ ಡ್ರಾಗ್ ಮಾಡಿ. ತೆಗೆದುಹಾಕಲು ಗೇಟ್ ಅನ್ನು ಹೊರಗೆ ಎಳೆಯಿರಿ.",
    bloch_title: "3. 3D ಬ್ಲೋಚ್ ಗೋಳ",
    bloch_desc: "ಸ್ಟೇಟ್ ವೆಕ್ಟರ್‌ನ ಸಂವಾದಾತ್ಮಕ 3D ಬ್ಲೋಚ್ ಗೋಳದ ಪ್ರಾತಿನಿಧ್ಯ.",
    histogram_title: "4. ಮಾಪನ ಹಿಸ್ಟೋಗ್ರಾಮ್",
    histogram_desc: "ಗೇಟ್ ಅನುಕ್ರಮದ ಆಧಾರದ ಮೇಲೆ ಗಣಿತದ ಪ್ರಕಾರ ಲೆಕ್ಕಹಾಕಿದ ಸಂಭವನೀಯತೆಗಳು.",
    btn_go_quiz: "ಕ್ವಿಜ್‌ಗೆ ಹೋಗಿ",
    quiz_title: "ಚೆಕ್‌ಪಾಯಿಂಟ್ ಕ್ವಿಜ್",
    quiz_time_left: "ಉಳಿದಿದೆ",
    quiz_next_question: "ಮುಂದಿನ ಪ್ರಶ್ನೆ",
    quiz_submit_results: "ಫಲಿತಾಂಶ ಸಲ್ಲಿಸಿ",
    quiz_passed_title: "ಮೌಲ್ಯೀಕರಣ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    quiz_passed_desc: "ನೀವು {score}/10 ಅಂಕಗಳನ್ನು ಗಳಿಸಿದ್ದೀರಿ. ಅದ್ಭುत! ನೀವು ಯಶಸ್ವಿಯಾಗಿ ಕ್ವಿಜ್ ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ. ನಿಮ್ಮ ವರದಿ ಮತ್ತು ಪ್ರಮಾಣಪತ್ರವನ್ನು ಕೆಳಗೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಬಹುದು.",
    btn_download_report: "ವರದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    btn_download_cert: "ಪ್ರಮಾಣಪತ್ರ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    btn_back_dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
    quiz_failed_title: "ಉತ್ತೀರ್ಣ ಅಂಕ ಅಗತ್ಯವಿದೆ",
    quiz_failed_desc: "ನೀವು {score}/10 ಅಂಕಗಳನ್ನು ಗಳಿಸಿದ್ದೀರಿ. ಉತ್ತೀರ್ಣರಾಗಲು 10/10 ಅಂಕಗಳ ಅಗತ್ಯವಿದೆ. ದಯವಿಟ್ಟು ಸಿದ್ಧಾಂತವನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ!",
    btn_retake_quiz: "ಮತ್ತೆ ಕ್ವಿಜ್ ತಗೊಳ್ಳಿ",
    btn_scroll_section: "ಪೂರ್ಣ ವಿಭಾಗಕ್ಕೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ",
    guided_tour_title: "ಮಾರ್ಗದರ್ಶಿ ಪ್ರವಾಸ",
    guided_tour_step: "ಹಂತ",
    guided_tour_of: "ರ",
    btn_next: "ಮುಂದೆ",
    btn_back: "ಹಿಂದೆ",
    btn_finish: "ಮುಕ್ತಾಯ",
    btn_skip: "ಪ್ರವಾಸ ಬಿಟ್ಟುಬಿಡು",
    btn_done: "ಮುಗಿಯಿತು",
    note_drag: "ಅನುಕ್ರಮವಾಗಿ ಕಾರ್ಯಗತಗೊಳಿಸಲು ಗೇಟ್‌ಗಳನ್ನು 1 ರಿಂದ 5 ರವರೆಗಿನ ಸ್ಲಾಟ್‌ಗಳಿಗೆ ಎಳೆಯಿರಿ.",
    note_click: "ತೆಗೆದುಹಾಕಲು ಯಾವುದೇ ಗೇಟ್ ಬ್ಯಾಡ್ಜ್ 'x' ಕ್ಲಿಕ್ ಮಾಡಿ.",
    builder_outcome_0: "ಫಲಿತಾಂಶ |0⟩:",
    builder_outcome_1: "ಫಲಿತಾಂಶ |1⟩:",
    builder_state_vector: "ಸ್ಟೇಟ್ ವೆಕ್ಟರ್:",
    visual_basics_caption: "ಸಂವಾದಾತ್ಮಕ 3D ಬ್ಲೋಚ್ ಗೋಳ (ತಿರುಗಿಸಲು ಎಳೆಯಿರಿ)",
    visual_collapse_state: "ಕುಸಿದ ಸ್ಥಿತಿ (|0⟩)",
    visual_superposition_state: "ಸೂಪರ್‌ಪೊಸಿಷನ್ (|0⟩ + |1⟩)",
    visual_btn_reset: "ಮರುಹೊಂದಿಸಿ",
    visual_btn_measure: "ಅಳೆಯಿರಿ",
    visual_collapse_caption: "ಮಾಪನವು ತರಂಗ ಕಾರ್ಯವನ್ನು ಕುಗ್ಗಿಸುತ್ತದೆ",
    visual_cloner: "ಕ್ಲೋನರ್",
    visual_blocked: "❌ ನಿರ್ಬಂಧಿಸಲಾಗಿದೆ",
    visual_disturbed: "ಅಡ್ಡಿಪಡಿಸಲಾಗಿದೆ",
    visual_corrupted: "ಭ್ರಷ್ಟಗೊಂಡಿದೆ",
    visual_cloning_caption: "ಪರಿಪೂರ್ಣ ನಕಲು ಭೌತಶಾಸ್ತ್ರವನ್ನು ಉಲ್ಲಂಘಿಸುತ್ತದೆ",
    visual_rectilinear: "ರೆಕ್ಟಿಲಿನಿಯರ್ (+)",
    visual_diagonal: "ಡಯಾಗನಲ್ (×)",
    visual_bases_caption: "ಸಂಯೋಜಿತ ಮಾಪನ ನೆಲೆಗಳು",
    topics: {
      "quantum-basics": {
        label: "ಕ್ವಾಂಟಮ್ ಬೇಸಿಕ್ಸ್: ಕ್ಯೂಬಿಟ್",
        tag: "ಕ್ಯೂಬಿಟ್ ಎಂದರೇನು?",
        bullets: [
          "ಒಂದು ಕ್ಲಾಸಿಕಲ್ ಬಿಟ್ 0 ಅಥವಾ 1 ಆಗಿರುತ್ತದೆ. ಕ್ಯೂಬಿಟ್ ಒಂದೇ ಸಮಯದಲ್ಲಿ 0 ಮತ್ತು 1 ಎರಡರ ಸೂಪರ್‌ಪೊಸಿಷನ್‌ನಲ್ಲಿ ಇರಬಹುದು.",
          "ಈ ಸೂಪರ್‌ಪೊಸಿಷನ್ ಅನಿಶ್ಚಿತತೆಯಲ್ಲ; ಇದು ನಿಜವಾದ ಭೌತಿಕ ಸ್ಥಿತಿ.",
          "ಕ್ಯೂಬಿಟ್ ಅನ್ನು ಅಳೆದಾಗ ಮಾತ್ರ ಅದು ಒಂದು ನಿರ್ದಿಷ್ಟ ಮೌಲ್ಯಕ್ಕೆ ಕುಸಿಯುತ್ತದೆ."
        ],
        description: "ಕ್ವಾಂಟಮ್ ಮೆಕ್ಯಾನಿಕ್ಸ್ ಮತ್ತು ಕ್ರಿಪ್ಟೋಗ್ರಫಿಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಕ್ಯೂಬಿಟ್ ಅನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಮೊದಲ ಹೆಜ್ಜೆಯಾಗಿದೆ."
      },
      "measurement-disturbance": {
        label: "ಮಾಪನ ಅಡಚಣೆ",
        tag: "ಕ್ವಾಂಟಮ್ ಚಾನೆಲ್‌ಗಳು ಸುರಕ್ಷಿತವಾಗಿರಲು ಪ್ರಮುಖ ಕಾರಣ",
        bullets: [
          "ಕ್ಲಾಸಿಕಲ್ ಸಿಸ್ಟಮ್‌ಗಳಲ್ಲಿ, ನೀವು ಡೇಟಾವನ್ನು ಬದಲಾಯಿಸದೆ ಓದಬಹುದು.",
          "ಕ್ವಾಂಟಮ್ ಸಿಸ್ಟಮ್‌ಗಳಲ್ಲಿ, ಮಾಪನವು ಸ್ಥಿತಿಯನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ ಮತ್ತು ಮೂಲ ಸೂಪರ್‌ಪೊಸಿಷನ್ ಅನ್ನು ನಾಶಪಡಿಸುತ್ತದೆ.",
          "ಈ ಅಡಚಣೆಯು ಅನಿವಾರ್ಯವಾಗಿದೆ; ಇದೊಂದೇ ಸತ್ಯ ಸುರಕ್ಷಿತ ಸಂಪರ್ಕವನ್ನು ಖಾತರಿಪಡಿಸುತ್ತದೆ."
        ],
        description: "ಮಾಪನ ಅಡಚಣೆಯ ತತ್ವವು ಕ್ವಾಂಟಮ್ ಮೆಕ್ಯಾನಿಕ್ಸ್‌ನ ಒಂದು ಆಧಾರಶಿಲೆಯಾಗಿದೆ."
      },
      "no-cloning": {
        label: "ನೋ-ಕ್ಲೋನಿಂಗ್ ಪ್ರಮೇಯ",
        tag: "ನಕಲು ಮಾಡುವುದು ಏಕೆ ಅಸಾಧ್ಯ",
        bullets: [
          "ಅಪರಿಚಿತ ಕ್ವಾಂಟಮ್ ಸ್ಥಿತಿಯ ಒಂದೇ ರೀತಿಯ ನಕಲನ್ನು ರಚಿಸುವುದು ಅಸಾಧ್ಯ.",
          "ಒಬ್ಬ ಇವ್ಸ್‌ಡ್ರಾಪರ್ ಫೋಟಾನ್ ಅನ್ನು ನಕಲಿಸಿ ಸುರಕ್ಷಿತವಾಗಿ ರವಾನಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.",
          "ಮಾಹಿತಿ ಹೊರತೆಗೆಯುವ ಯಾವುದೇ ಪ್ರಯತ್ನವು ಗುರುತನ್ನು ಬಿಡುತ್ತದೆ."
        ],
        description: "ನೋ-ಕ್ಲೋನಿಂಗ್ ಪ್ರಮೇಯವು ಕ್ವಾಂಟಮ್ ಮೆಕ್ಯಾನಿಕ್ಸ್‌ನ ಒಂದು ಪ್ರಮುಖ ತತ್ವವಾಗಿದೆ."
      },
      "bases-complementarity": {
        label: "ಬೇಸ್‌ಗಳು ಮತ್ತು ಪೂರಕತೆ",
        tag: "ಹೊಂದಾಣಿಕೆಯಾಗದ ಮಾಪನಗಳು",
        bullets: [
          "ಕ್ವಾಂಟಮ್ ಸಂಪರ್ಕದಲ್ಲಿ (BB84 ನಂತಹ), ಪೂರಕ ಬೇಸ್‌ಗಳನ್ನು ಬಳಸಲಾಗುತ್ತದೆ: ರೆಕ್ಟಿಲಿನಿಯರ್ ಬೇಸಿಸ್ (+) ಮತ್ತು ಡಯಾಗನಲ್ ಬೇಸಿಸ್ (×).",
          "ಸರಿಯಾದ ಬೇಸ್‌ನಲ್ಲಿ ಅಳೆದರೆ → ಮೂಲ ಬಿಟ್ ಹಿಂಪಡೆಯಲಾಗುತ್ತದೆ. ತಪ್ಪು ಬೇಸ್ → ಸಂಪೂರ್ಣವಾಗಿ ಯಾದೃಚ್ಛಿಕ ಫಲಿತಾಂಶ.",
          "ಈ ಬೇಸ್‌ಗಳು ಹೊಂದಾಣಿಕೆಯಾಗುವುದಿಲ್ಲ; ಒಂದನ್ನು ತಿಳಿಯುವುದರಿಂದ ಇನ್ನೊಂದರ ಬಗ್ಗೆ ಯಾವುದೇ ಮಾಹಿತಿ ಸಿಗುವುದಿಲ್ಲ."
        ],
        description: "ಪೂರಕತೆಯು BB84 ನಂತಹ ಪ್ರೋಟೋಕಾಲ್‌ಗಳನ್ನು ಸುರಕ್ಷಿತಗೊಳಿಸುವ ಕ್ವಾಂಟಮ್ ಗುಣಲಕ್ಷಣವಾಗಿದೆ.",
        tableTitle: "ಬೇಸಿಸ್ ಹೋಲಿಕೆ",
        basis1: "ರೆಕ್ಟಿಲಿನಿಯರ್ (+)",
        basis1_0: "ಸಮತಲ (0°)",
        basis1_1: "ಲಂಬ (90°)",
        basis2: "ಡಯಾಗನಲ್ (×)",
        basis2_0: "45°",
        basis2_1: "135°"
      }
    },
    quiz_questions: [
      {
        q: "ಕ್ಲಾಸಿಕಲ್ ಬಿಟ್ ಮತ್ತು ಕ್ವಾಂಟಮ್ ಕ್ಯೂಬಿಟ್ ನಡುವಿನ ಪ್ರಮುಖ ವ್ಯತ್ಯಾಸವೇನು?",
        options: [
          "ಕ್ಯೂಬಿಟ್ 0 ಅಥವಾ 1 ಮಾತ್ರ ಆಗಿರಬಹುದು, ಆದರೆ ಬಿಟ್ ಸೂಪರ್‌ಪೊಸಿಷನ್‌ನಲ್ಲಿ ಇರಬಹುದು.",
          "ಕ್ಯೂಬಿಟ್ ಏಕಕಾಲದಲ್ಲಿ |0⟩ ಮತ್ತು |1⟩ ಎರಡೂ ಸ್ಥಿತಿಗಳ ಸೂಪರ್‌ಪೊಸಿಷನ್‌ನಲ್ಲಿರಬಹುದು.",
          "ಕ್ಯೂಬಿಟ್‌ಗೆ ಮಾಹಿತಿ ವರ್ಗಾಯಿಸಲು ಕ್ಲಾಸಿಕಲ್ ಕೇಬಲ್‌ಗಳು ಬೇಕಾಗುತ್ತವೆ.",
          "ಯಾವುದೇ ಗಣಿತದ ವ್ಯತ್ಯಾಸವಿಲ್ಲ."
        ]
      },
      {
        q: "ನೋ-ಕ್ಲೋನಿಂಗ್ ಪ್ರಮೇಯವು ಏನನ್ನು ಹೇಳುತ್ತದೆ?",
        options: [
          "ಕ್ಲಾಸಿಕಲ್ ಮಾಹಿತಿಯನ್ನು ನಕಲಿಸುವುದು ಅಸಾಧ್ಯ.",
          "ನೀವು ಮೊದಲು ಕ್ಯೂಬಿಟ್ ಅನ್ನು ರೆಕ್ಟಿಲಿನಿಯರ್ ಬೇಸಿಸ್‌ನಲ್ಲಿ ಅಳೆದರೆ ಅದನ್ನು ಕ್ಲೋನ್ ಮಾಡಬಹುದು.",
          "ಅಪರಿಚಿತ ಕ್ವಾಂಟಮ್ ಸ್ಥಿತಿಯ ಒಂದೇ ರೀತಿಯ ನಕಲನ್ನು ರಚಿಸುವುದು ಭೌತಿಕವಾಗಿ ಅಸಾಧ್ಯ.",
          "ನೀವು ಎಂಟಾಂಗ್ಲಿಂಗ್ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಬಳಸಿ ಮಾತ್ರ ಕ್ಯೂಬಿಟ್‌ಗಳನ್ನು ನಕಲಿಸಬಹುದು."
        ]
      },
      {
        q: "ಕ್ವಾಂಟಮ್ ಮೆಕ್ಯಾನಿಕ್ಸ್‌ನಲ್ಲಿ, ಸೂಪರ್‌ಪೊಸಿಷನ್‌ನಲ್ಲಿ ಕ್ಯೂಬಿಟ್ ಅನ್ನು ಅಳೆಯುವುದರಿಂದ ಏನು ಪರಿಣಾಮ ಬೀರುತ್ತದೆ?",
        options: [
          "ಕ್ಯೂಬಿಟ್ ಸ್ಥಿತಿ ಸೂಪರ್‌ಪೊಸಿಷನ್‌ನಲ್ಲೇ ಇರುತ್ತದೆ.",
          "ತರಂಗ ಕಾರ್ಯವು ಒಂದು ನಿರ್ದಿಷ್ಟ ಸ್ಥಿತಿಗೆ ಕುಸಿಯುತ್ತದೆ, ಮೂಲ ಸೂಪರ್‌ಪೊಸಿಷನ್ ಅನ್ನು ಅಡ್ಡಿಪಡಿಸುತ್ತದೆ.",
          "ಸ್ಥಿತಿ ಸಂಪೂರ್ಣವಾಗಿ ಖಾಲಿಯಾಗುತ್ತದೆ.",
          "ಕ್ಯೂಬಿಟ್ ನಕಲಾಗುತ್ತದೆ."
        ]
      },
      {
        q: "ಕ್ಯೂಬಿಟ್ ಅನ್ನು |0⟩ ಸ್ಥಿತಿಯಿಂದ 50/50 ಸೂಪರ್‌ಪೊಸಿಷನ್‌ಗೆ ಹಾಕಲು ಸಾಮಾನ್ಯವಾಗಿ ಯಾವ ಗೇಟ್ ಅನ್ನು ಬಳಸಲಾಗುತ್ತದೆ?",
        options: [
          "ಪೌಲಿ-X ಗೇಟ್",
          "ಫೇಸ್ (S) ಗೇಟ್",
          "ಹಡಾಮಾರ್ಡ್ (H) ಗೇಟ್",
          "ಐಡೆಂಟಿಟಿ (I) ಗೇಟ್"
        ]
      },
      {
        q: "ನೆಲದ ಸ್ಥಿತಿ |0⟩ ಗೆ ಹಡಾಮಾರ್ಡ್ (H) ಗೇಟ್ ಅನ್ವಯಿಸುವುದರಿಂದ ಯಾವ ಸ್ಥಿತಿಯನ್ನು ಪಡೆಯಲಾಗುತ್ತದೆ?",
        options: [
          "|1⟩",
          "|+⟩ = 1/√2(|0⟩ + |1⟩)",
          "|−⟩ = 1/√2(|0⟩ − |1⟩)",
          "|+i⟩"
        ]
      },
      {
        q: "ಡಯಾಗನಲ್ (×) ಬೇಸಿಸ್‌ನ ಪ್ರಮಾಣಿತ ಸ್ಥಿತಿಗಳು ಯಾವುವು?",
        options: [
          "|0⟩ ಮತ್ತು |1⟩",
          "|+⟩ and |−⟩",
          "|+i⟩ ಮತ್ತು |−i⟩",
          "ಶೂನ್ಯ ಸ್ಥಿತಿ ಮಾತ್ರ"
        ]
      },
      {
        q: "ಒಂದು ಕ್ಯೂಬಿಟ್ |+⟩ ಸ್ಥಿತಿಯಲ್ಲಿದ್ದರೆ ಮತ್ತು ನೀವು ಅದನ್ನು ರೆಕ್ಟಿಲಿನಿಯರ್ (+) ಬೇಸಿಸ್‌ನಲ್ಲಿ ಅಳೆದರೆ, ಫಲಿತಾಂಶದ ಸಂಭವನೀಯತೆಗಳೇನು?",
        options: [
          "|0⟩ ಬರುವ 100% ಅವಕಾಶ, |1⟩ ಬರುವ 0% ಅವಕಾಶ",
          "|0⟩ ಬರುವ 0% ಅವಕಾಶ, |1⟩ ಬರುವ 100% ಅವಕಾಶ",
          "|0⟩ ಬರುವ 50% ಅವಕಾಶ, |1⟩ ಬರುವ 50% ಅವಕಾಶ",
          "|0⟩ ಬರುವ 75% ಅವಕಾಶ, |1⟩ ಬರುವ 25% ಅವಕಾಶ"
        ]
      },
      {
        q: "ಕೆಳಗಿನ ಯಾವ ಗೇಟ್ ಸ್ಥಿತಿ |1⟩ ನಲ್ಲಿ 90 ಡಿಗ್ರಿ ಫೇಸ್ ರೊಟೇಶನ್ ಅನ್ನು ಪರಿಚಯಿಸುತ್ತದೆ?",
        options: [
          "ಹಡಾಮಾರ್ಡ್ (H) ಗೇಟ್",
          "ಪೌಲಿ-X ಗೇಟ್",
          "ಫೇಸ್ (S) ಗೇಟ್",
          "ಐಡೆಂಟಿಟಿ (I) ಗೇಟ್"
        ]
      },
      {
        q: "ಕ್ಯೂಬಿಟ್ ಸ್ಥಿತಿ |ψ⟩ = α|0⟩ + β|1⟩ ಗೆ ಸಾಮಾನ್ಯೀಕರಣ ಸ್ಥಿತಿ |α|² + |β|² = 1 ಏನನ್ನು ಪ್ರತಿನಿಧಿಸುತ್ತದೆ?",
        options: [
          "ಎಲ್ಲಾ ಸಂಭಾವ್ಯ ಮಾಪನ ಫಲಿತಾಂಶಗಳ ಒಟ್ಟು ಸಂಭವನೀಯತೆ 1 ಆಗಿರಬೇಕು.",
          "ಫೇಸ್ ಕೋನವು ನಿಖರವಾಗಿ 1 ರೇಡಿಯನ್ ಆಗಿರಬೇಕು.",
          "ಕ್ಯೂಬಿಟ್ ಯಾವಾಗಲೂ |0⟩ ಗೆ ಕುಸಿಯಬೇಕು.",
          "ಗುಣಾಂಕಗಳು ನೈಜ ಪೂರ್ಣಾಂಕಗಳಾಗಿರಬೇಕು."
        ]
      },
      {
        q: "ಮಾಪನ ಅಡಚಣೆಯು ಕ್ವಾಂಟಮ್ ಚಾನೆಲ್‌ಗಳನ್ನು ಇವ್ಸ್‌ಡ್ರಾಪರ್‌ಗಳಿಂದ ಹೇಗೆ ರಕ್ಷಿಸುತ್ತದೆ?",
        options: [
          "ಇವ್ಸ್‌ಡ್ರಾಪಿಂಗ್ ಪ್ರಯತ್ನಗಳು ಕ್ವಾಂಟಮ್ ಸ್ಥಿತಿಗಳನ್ನು ಬದಲಾಯಿಸುತ್ತವೆ, ಇದರಿಂದಾಗಿ ಏಲಿಸ್ ಮತ್ತು ಬಾಬ್ ಪತ್ತೆಹಚ್ಚಬಹುದಾದ ದೋಷಗಳು ಉಂಟಾಗುತ್ತವೆ.",
          "ಮಾಪನವು ಭೌತಿಕವಾಗಿ ಫೈಬರ್ ಆಪ್ಟಿಕ್ಸ್ ಅನ್ನು ನಾಶಪಡಿಸುತ್ತದೆ.",
          "ಯಾರಾದರೂ ಚಾನೆಲ್ ಮುಟ್ಟಿದರೆ ಸಂಪರ್ಕವನ್ನು ನಿರ್ಬಂಧಿಸಲಾಗುತ್ತದೆ.",
          "ಇವ್ಸ್‌ಡ್ರಾಪರ್‌ನ ಕಂಪ್ಯೂಟರ್‌ಗಳು ಕ್ವಾಂಟಮ್ ಶಬ್ದದಿಂದ ಸೋಂಕಿಗೆ ಒಳಗಾಗುತ್ತವೆ."
        ]
      }
    ],
    tour_steps: [
      {
        title: "ಕ್ವಾಂಟಮ್ ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್‌ಗೆ ಸುಸ್ವಾಗತ!",
        desc: "ಇಲ್ಲಿ, ನೀವು ಕ್ಯೂಬಿಟ್ ಟೈಮ್‌ಲೈನ್‌ಗೆ ಲಾಜಿಕ್ ಗೇಟ್‌ಗಳನ್ನು ಎಳೆಯುವ ಮೂಲಕ ಕ್ವಾಂಟಮ್ ಸರ್ಕ್ಯೂಟ್‌ಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೀರಿ. ಗೇಟ್‌ಗಳು ಸೂಪರ್‌ಪೊಸಿಷನ್ ಅನ್ನು ಹೇಗೆ ಬದಲಾಯಿಸುತ್ತವೆ ಎಂಬುದನ್ನು ತಿಳಿಯೋಣ!"
      },
      {
        title: "ಹಡಾಮಾರ್ಡ್ ಗೇಟ್ (H) ಇರಿಸಿ",
        desc: "H ಗೇಟ್ ಒಂದು ನಿರ್ದಿಷ್ಟ ಸ್ಥಿತಿಯನ್ನು (|0⟩) ಸೂಪರ್‌ಪೊಸಿಷನ್ ಸ್ಥಿತಿಗೆ ಪರಿವರ್ತಿಸುತ್ತದೆ. ಟೂಲ್ಯ್‌ಬಾಕ್ಸ್‌ನಿಂದ H ಅನ್ನು ಎಳೆಯಿರಿ ಮತ್ತು ಅದನ್ನು ಸ್ಲಾಟ್ 1 ರಲ್ಲಿ ಬಿಡಿ."
      },
      {
        title: "ಸೂಪರ್‌ಪೊಸಿಷನ್ ಅನ್ನು ಗಮನಿಸಿ",
        desc: "ಅದ್ಭುತ! ಬ್ಲೋಚ್ ಗೋಳವನ್ನು ನೋಡಿ. ವೆಕ್ಟರ್ ಈಗ X-ಅಕ್ಷದ ಉದ್ದಕ್ಕೂ ತೋರಿಸುತ್ತದೆ (|0⟩ ಬರುವ 50% ಮತ್ತು |1⟩ ಬರುವ 50% ಅವಕಾಶ). ಮುಂದುವರಿಯಲು ಮುಂದಿನ ಕ್ಲಿಕ್ ಮಾಡಿ."
      },
      {
        title: "ಫೇಸ್ ರೊಟೇಶನ್ (S) ಅನ್ವಯಿಸಿ",
        desc: "ನಾವು ಫೇಸ್ ಶಿಫ್ಟ್ ಅನ್ನು ಅನ್ವಯಿಸೋಣ. S ಗೇಟ್ ಅನ್ನು ಎಳೆಯಿರಿ ಮತ್ತು ಅದನ್ನು ಸ್ಲಾಟ್ 2 ರಲ್ಲಿ ಬಿಡಿ."
      },
      {
        title: "ಫೇಸ್ ಶಿಫ್ಟ್ ರೊಟೇಟ್ ಆಗಿದೆ",
        desc: "ಅತ್ಯುತ್ತಮ! ವೆಕ್ಟರ್ ಗೋಳದ ಸಮಭಾಜಕದ ಉದ್ದಕ್ಕೂ ತಿರುಗಿದೆ. ಫೇಸ್ ಶಿಫ್ಟ್ ಮಾಪನ ಸಂಭವನೀಯತೆಗಳನ್ನು ಬದಲಾಯಿಸದೆ ಕ್ವಾಂಟಮ್ ಆಂಪ್ಲಿಟ್ಯೂಡ್ ಹಂತವನ್ನು ಸರಿಹೊಂದಿಸುತ್ತದೆ."
      },
      {
        title: "ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ ಅನ್‌ಲಾಕ್ ಆಗಿದೆ!",
        desc: "ನೀವು ಮಾರ್ಗದರ್ಶಿ ಪ್ರವಾಸವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ. ಇತರ ಗೇಟ್‌ಗಳನ್ನು (X, Y, Z, I) ಎಳೆದು ನೋಡಿ ಮತ್ತು ಪ್ರಯೋಗಿಸಿ!"
      }
    ]
  },
  ta: {
    nav_exit_workspace: "வேலை இடத்திலிருந்து வெளியேறு",
    nav_theory: "1. கோட்பாடு டாஷ்போர்டு",
    nav_playground: "2. மின்சுற்று விளையாட்டு மைதானம்",
    nav_quiz: "3. செக்பாயிண்ட் வினாடி வினா",
    title_basics: "சோதனை 1.1: க்யூபிட்டுகள், சூப்பர்போசிஷன் மற்றும் நிரப்புத்தன்மை",
    hero_title: "குவாண்டம் தகவலின் அடித்தளம்.",
    hero_sub: "குவாண்டம் பாதுகாப்பான சேனல்கள் மற்றும் சிக்கலான கிரிப்டோகிராஃபிக்குள் செல்வதற்கு முன், க்யூபிட்டுகளின் இயற்பியல் பண்புகளைப் புரிந்து கொள்ளுங்கள்: சூப்பர்போசிஷன், நோ-குளோனிங் மற்றும் அளவீட்டு சரிவு.",
    btn_start_learning: "கற்றலைத் தொடங்கு",
    btn_launch_playground: "மின்சுற்று மைதானத்தைத் தொடங்கு",
    card_superposition_title: "சூப்பர்போசிஷன்",
    card_superposition_desc: "ஒரு க்யூபிட் 0 மற்றும் 1 இரண்டின் நேரியல் கலவையில் இருக்க முடியும், இது ப்ளாச் கோளத்தில் நிகழ்தகவாகக் குறிக்கப்படுகிறது.",
    card_nocloning_title: "நோ-குளோனிங்",
    card_nocloning_desc: "கிளாசிக்கல் பிட்களைப் போலல்லாமல், அறியப்படாத குவாண்டம் நிலைகளை நகலெடுக்க முடியாது.",
    card_measurement_title: "அளவீடு",
    card_measurement_desc: "ஒரு க்யூபிட்டை அளவிடுவது அதன் அலைச் செயல்பாட்டைச் சிதைத்து, நிலையை மாற்றியமைக்கிறது.",
    section_title: "குவாண்டம் இயக்கவியலின் முக்கிய கோட்பாடுகள்",
    section_sub: "ஒவ்வொரு கருத்து அட்டையும் விரைவான பார்வையை வழங்குகிறது. விரிவாக அறிய கிளிக் செய்யவும் அல்லது கீழே உருட்டவும்.",
    quick_summary: "விரைவு சுருக்கம்",
    concept_kicker: "கருத்து",
    concept_of: "இல்",
    table_basis: "அடிபாகம்",
    table_bit0: "பிட் 0 பிரதிநிதித்துவம்",
    table_bit1: "பிட் 1 பிரதிநிதித்துவம்",
    math_vector_title: "கணித சூப்பர்போசிஷன் நிலை திசையன் (வெக்டர்)",
    math_vector_def: "திசையன் வரையறை:",
    math_vector_constraint: "சாதாரணமாக்கல் கட்டுப்பாடு:",
    math_vector_desc: "சிக்கலான குணகங்கள் α மற்றும் β முறையே |0⟩ அல்லது |1⟩ நிலைக்குச் சிதைவதற்கான நிகழ்தகவுகளைத் தீர்மானிக்கின்றன.",
    cta_title: "அடித்தளம் முடிந்தது!",
    cta_desc: "நிகழ்நேரத்தில் க்யூபிட்டுகளை பார்வைக்கு கையாள மின்சுற்று மைதானத்திற்குச் செல்லவும்.",
    cta_btn_playground: "மின்சுற்று மைதானத்திற்குச் செல்",
    cta_btn_top: "மீண்டும் மேலே செல்",
    builder_title: "ஊடாடும் மின்சுற்று சிமுலேட்டர்",
    builder_sub: "குவாண்டம் லாஜிக் கேட்களை காலவரிசை கட்டத்திற்குள் இழுத்து, க்யூபிட் நிலை திசையன் நிகழ்நேர கணக்கீட்டைப் பார்க்கவும்.",
    btn_guided_tour: "வழிகாட்டப்பட்ட சுற்றுப்பயணத்தைத் தொடங்கு",
    btn_clear_circuit: "மின்சுற்றை அழி",
    toolbox_title: "1. லாஜிக் கேட் கருவிப்பெட்டி",
    toolbox_desc: "மின்சுற்று காலவரிசையில் ஒரு ஸ்லாட்டிற்கு கேட்டை இழுக்கவும் அல்லது முதல் காலியான ஸ்லாட்டில் வைக்க கேட்டை கிளிக் செய்யவும்.",
    timeline_title: "2. மின்சுற்று காலவரிசை (1 க்யூபிட்)",
    timeline_desc: "கேட்களை இங்கே இழுக்கவும். அகற்ற கேட்டை வெளியே இழுக்கவும்.",
    bloch_title: "3. 3D ப்ளாச் கோளம்",
    bloch_desc: "நிலை திசையனின் ஊடாடும் 3D ப்ளாச் கோள பிரதிநிதித்துவம்.",
    histogram_title: "4. அளவீட்டு ஹிஸ்டோகிராம்",
    histogram_desc: "கேட் வரிசையின் அடிப்படையில் கணித ரீதியாக கணக்கிடப்பட்ட நிகழ்தகவுகள்.",
    btn_go_quiz: "வினாடி வினாவிற்குச் செல்",
    quiz_title: "செக்பாயிண்ட் வினாடி வினா",
    quiz_time_left: "மீதமுள்ளது",
    quiz_next_question: "அடுத்த கேள்வி",
    quiz_submit_results: "முடிவுகளை சமர்ப்பி",
    quiz_passed_title: "சரிபார்ப்பு முடிந்தது!",
    quiz_passed_desc: "நீங்கள் {score}/10 மதிப்பெண் பெற்றுள்ளீர்கள். அருமை! நீங்கள் குவாண்டம் வினாடி வினாவை வெற்றிகரமாக முடித்துவிட்டீர்கள். உங்கள் அறிக்கை மற்றும் சான்றிதழை கீழே பதிவிறக்கம் செய்யலாம்.",
    btn_download_report: "அறிக்கையைப் பதிவிறக்கு",
    btn_download_cert: "சான்றிதழைப் பதிவிறக்கு",
    btn_back_dashboard: "டாஷ்போர்டிற்குத் திரும்பு",
    quiz_failed_title: "தேர்ச்சி மதிப்பெண் தேவை",
    quiz_failed_desc: "நீங்கள் {score}/10 மதிப்பெண் பெற்றுள்ளீர்கள். தேர்ச்சி பெற 10/10 மதிப்பெண்கள் தேவை. தயவுசெய்து கோட்பாட்டை மதிப்பாய்வு செய்து மீண்டும் முயற்சிக்கவும்!",
    btn_retake_quiz: "மீண்டும் வினாடி வினா எழுது",
    btn_scroll_section: "முழு பகுதிக்கும் உருட்டவும்",
    guided_tour_title: "வழிகாட்டப்பட்ட சுற்றுப்பயணம்",
    guided_tour_step: "படி",
    guided_tour_of: "இல்",
    btn_next: "அடுத்து",
    btn_back: "பின்னால்",
    btn_finish: "முடி",
    btn_skip: "சுற்றுப்பயணத்தைத் தவிர்",
    btn_done: "முடிந்தது",
    note_drag: "வரிசையாக இயக்க கேட்களை ஸ்லாட்டுகள் 1 முதல் 5 வரை இழுக்கவும்.",
    note_click: "அகற்ற ஏதேனும் கேட் பேட்ஜ் 'x' ஐக் கிளிக் செய்யவும்.",
    builder_outcome_0: "முடிவு |0⟩:",
    builder_outcome_1: "முடிவு |1⟩:",
    builder_state_vector: "நிலை வெக்டர்:",
    visual_basics_caption: "ஊடாடும் 3D ப்ளாச் கோளம் (சுழற்ற இழுக்கவும்)",
    visual_collapse_state: "சரிந்த நிலை (|0⟩)",
    visual_superposition_state: "சூப்பர்போசிஷன் (|0⟩ + |1⟩)",
    visual_btn_reset: "மீட்டமை",
    visual_btn_measure: "அளவிடு",
    visual_collapse_caption: "அளவீடு அலைச் செயல்பாட்டைச் சிதைக்கிறது",
    visual_cloner: "குளோனர்",
    visual_blocked: "❌ தடுக்கப்பட்டது",
    visual_disturbed: "இடையூறு",
    visual_corrupted: "சிதைந்தது",
    visual_cloning_caption: "சரியான நகல் இயற்பியலை மீறுகிறது",
    visual_rectilinear: "ரெக்டிலினியர் (+)",
    visual_diagonal: "டயாகனல் (×)",
    visual_bases_caption: "இணை அளவீட்டு அலகுகள்",
    topics: {
      "quantum-basics": {
        label: "குவாண்டம் அடிப்படைகள்: க்யூபிட்",
        tag: "க்யூபிட் என்றால் என்ன?",
        bullets: [
          "ஒரு கிளாசிக்கல் பிட் 0 அல்லது 1 ஆகும். ஒரு க்யூபிட் ஒரே நேரத்தில் 0 மற்றும் 1 இரண்டின் சூப்பர்போசிஷனில் இருக்க முடியும்.",
          "இந்த சூப்பர்போசிஷன் நிச்சயமற்ற தன்மை அல்ல; அது ஒரு உண்மையான இயற்பியல் நிலை.",
          "க்யூபிட்டை அளவிடும் போது மட்டுமே அது ஒரு குறிப்பிட்ட மதிப்பிற்குச் சிதைகிறது."
        ],
        description: "குவாண்டம் இயக்கவியல் மற்றும் கிரிப்டோகிராபியைப் புரிந்துகொள்வதற்கான முதல் படி க்யூபிட்டைக் கற்றுக்கொள்வதாகும்."
      },
      "measurement-disturbance": {
        label: "அளவீட்டு இடையூறு",
        tag: "குவாண்டம் சேனல்கள் பாதுகாப்பாக இருப்பதற்கான முக்கிய காரணம்",
        bullets: [
          "கிளாசிக்கல் அமைப்புகளில், தரவை மாற்றாமல் படிக்கலாம்.",
          "குவாண்டம் அமைப்புகளில், அளவீடு நிலையை மாற்றுகிறது மற்றும் அசல் சூப்பர்போசிஷனை அழிக்கிறது.",
          "இந்த இடையூறு தவிர்க்க முடியாதது; இந்த ஒரு உண்மை பாதுகாப்பான தொடர்புக்கு உத்தரவாதம் அளிக்கிறது."
        ],
        description: "அளவீட்டு இடையூறு கோட்பாடு குவாண்டம் இயக்கவியலின் ஒரு மூலக்கல்லாகும்."
      },
      "no-cloning": {
        label: "நோ-குளோனிங் கோட்பாடு",
        tag: "நகலெடுப்பது ஏன் சாத்தியமற்றது",
        bullets: [
          "அறியப்படாத குவாண்டம் நிலையின் ஒரே மாதிரியான நகலை உருவாக்குவது சாத்தியமற்றது.",
          "ஒரு ஊடுருவல்காரர் ஃபோட்டானை நகலெடுத்து பாதுகாப்பாக அனுப்ப முடியாது.",
          "தகவலைப் பிரித்தெடுக்கும் எந்தவொரு முயற்சியும் ஒரு தடையை ஏற்படுத்துகிறது."
        ],
        description: "நோ-குளோனிங் கோட்பாடு குவாண்டம் இயக்கவியலின் ஒரு முக்கிய கோட்பாடாகும்."
      },
      "bases-complementarity": {
        label: "அடிபாகங்கள் மற்றும் நிரப்புத்தன்மை",
        tag: "பொருந்தாத அளவீடுகள்",
        bullets: [
          "குவாண்டம் தொடர்பில் (BB84 போன்றவை), நிரப்பு அலகுகள் பயன்படுத்தப்படுகின்றன: ரெக்டிலினியர் மற்றும் டயாகனல்.",
          "சரியான அலகில் அளந்தால் → அசல் பிட் மீட்டெடுக்கப்படும். தவறான அலகு → முற்றிலும் சீரற்ற முடிவு.",
          "இந்த அலகுகள் பொருந்தாதவை; ஒன்றை அறிவது மற்றொன்றைப் பற்றிய எந்த தகவலையும் தராது."
        ],
        description: "நிரப்புத்தன்மை என்பது BB84 போன்ற நெறிமுறைகளைப் பாதுகாக்கும் குவாண்டம் பண்பாகும்.",
        tableTitle: "அடிபாக ஒப்பீடு",
        basis1: "ரெக்டிலினியர் (+)",
        basis1_0: "கிடைமட்ட (0°)",
        basis1_1: "செங்குத்து (90°)",
        basis2: "டயாகனல் (×)",
        basis2_0: "45°",
        basis2_1: "135°"
      }
    },
    quiz_questions: [
      {
        q: "கிளாசிக்கல் பிட் மற்றும் குவாண்டம் க்யூபிட் ஆகியவற்றுக்கு இடையேயான முக்கிய வேறுபாடு என்ன?",
        options: [
          "ஒரு க்யூபிட் 0 அல்லது 1 ஆக மட்டுமே இருக்க முடியும், ஆனால் பிட் சூப்பர்போசிஷனில் இருக்க முடியும்.",
          "ஒரு க்யூபிட் ஒரே நேரத்தில் |0⟩ மற்றும் |1⟩ ஆகிய இரு நிலைகளின் சூப்பர்போசிஷனில் இருக்க முடியும்.",
          "க்யூபிட்டிற்கு தகவலை மாற்ற கிளாசிக்கல் கேபிள்கள் தேவை.",
          "கணித ரீதியாக எந்த வேறுபாடும் இல்லை."
        ]
      },
      {
        q: "நோ-குளோனிங் கோட்பாடு என்ன கூறுகிறது?",
        options: [
          "கிளாசிக்கல் தகவலை நகலெடுப்பது சாத்தியமற்றது.",
          "நீங்கள் முதலில் க்யூபிட்டை ரெக்டிலினியர் அலகில் அளந்தால் அதை குளோன் செய்யலாம்.",
          "அறியப்படாத குவாண்டம் நிலையின் ஒரே மாதிரியான நகலை உருவாக்குவது இயற்பியல் ரீதியாக சாத்தியமற்றது.",
          "எண்டாங்ಲಿங் செயல்பாடுகளைப் பயன்படுத்தி மட்டுமே நீங்கள் க்யூபிட்டுகளை நகலெடுக்க முடியும்."
        ]
      },
      {
        q: "குவாண்டம் இயக்கவியலில், சூப்பர்போசிஷனில் உள்ள க்யூபிட்டை அளவிடுவதன் விளைவு என்ன?",
        options: [
          "க்யூபிட் நிலை சூப்பர்போசிஷனிலேயே இருக்கும்.",
          "அலைச் செயல்பாடு ஒரு குறிப்பிட்ட நிலைக்குச் சிதைந்து, அசல் சூப்பர்போசிஷனை சீர்குலைக்கிறது.",
          "நிலை முற்றிலும் காலியாகிவிடும்.",
          "க்யூபிட் நகலெடுக்கப்படுகிறது."
        ]
      },
      {
        q: "ஒரு க்யூபிட்டை |0⟩ நிலையிலிருந்து 50/50 சூப்பர்போசிஷனுக்கு மாற்றுவதற்குப் பயன்படுத்தப்படும் கேட் எது?",
        options: [
          "பவுலி-X கேட்",
          "ஃபேஸ் (S) கேட்",
          "ஹடாமார்ட் (H) கேட்",
          "ஐடென்டிட்டி (I) கேட்"
        ]
      },
      {
        q: "|0⟩ நிலைக்கு ஹடாமார்ட் (H) கேட்டைப் பயன்படுத்துவதன் மூலம் பெறப்படும் நிலை எது?",
        options: [
          "|1⟩",
          "|+⟩ = 1/√2(|0⟩ + |1⟩)",
          "|−⟩ = 1/√2(|0⟩ − |1⟩)",
          "|+i⟩"
        ]
      },
      {
        q: "டயாகನல் (×) அலகின் நிலையான நிலைகள் யாவை?",
        options: [
          "|0⟩ மற்றும் |1⟩",
          "|+⟩ மற்றும் |−⟩",
          "|+i⟩ மற்றும் |−i⟩",
          "பூஜ்ய நிலை மட்டுமே"
        ]
      },
      {
        q: "ஒரு க்யூபிட் |+⟩ நிலையில் இருந்தால், அதை ரெக்டிலினியர் (+) அலகில் அளந்தால், நிகழ்தகவுகள் என்ன?",
        options: [
          "|0⟩ வர 100% வாய்ப்பு, |1⟩ வர 0% வாய்ப்பு",
          "|0⟩ வர 0% வாய்ப்பु, |1⟩ வர 100% வாய்ப்பு",
          "|0⟩ வர 50% வாய்ப்பு, |1⟩ வர 50% வாய்ப்பु",
          "|0⟩ வர 75% வாய்ப்பு, |1⟩ வர 25% வாய்ப்பு"
        ]
      },
      {
        q: "பின்வரும் எந்த கேட் நிலை |1⟩ இல் 90 டிகிரி ஃபேஸ் சுழற்சியை அறிமுகப்படுத்துகிறது?",
        options: [
          "ஹடாமார்ட் (H) கேட்",
          "பவுலி-X கேட்",
          "ஃபேஸ் (S) கேट",
          "ஐடென்டிட்டி (I) கேட்"
        ]
      },
      {
        q: "க்யூபிட் நிலை |ψ⟩ = α|0⟩ + β|1⟩ க்கான சாதாரணமாக்கல் நிலை |α|² + |β|² = 1 எதைக் குறிக்கிறது?",
        options: [
          "அனைத்து சாத்தியமான அளவீட்டு முடிவுகளின் மொத்த நிகழ்தகவு 1 ஆக இருக்க வேண்டும்.",
          "ஃபேஸ் கோணம் சரியாக 1 ரேடியனாக இருக்க வேண்டும்.",
          "க்யூபிட் எப்போதும் |0⟩ நிலைக்குச் சிதைய வேண்டும்.",
          "குணகங்கள் உண்மையான எண்களாக இருக்க வேண்டும்."
        ]
      },
      {
        q: "அளவீட்டு இடையூறு குவாண்டம் சேனல்களை ஊடுருவல்காரர்களிடமிருந்து எவ்வாறு பாதுகாக்கிறது?",
        options: [
          "ஊடுருவல் முயற்சிகள் குவாண்டம் நிலைகளை மாற்றுகின்றன, இதனால் ஏலிஸ் மற்றும் பாப் கண்டறியக்கூடிய பிழைகள் ஏற்படுகின்றன.",
          "அளவீடு ஃபைபர் ஆப்டிக்ஸை உடல் ரீதியாக அழிக்கிறது.",
          "யாராவது சேனலைத் தொட்டால் தொடர்பு உடனடியாகத் தடுக்கப்படும்.",
          "ஊடுருவல்கารரின் கணினிகள் குவாண்டம் சத்தத்தால் பாதிக்கப்படுகின்றன."
        ]
      }
    ],
    tour_steps: [
      {
        title: "குவாண்டம் சாண்ட்பாக்ஸிற்கு வரவேற்கிறோம்!",
        desc: "இங்கே, நீங்கள் குவாண்டம் மின்சுற்றுகளை உருவாக்குவீர்கள். கேட்கள் சூப்பர்போசிஷனை எவ்வாறு கையாளுகின்றன என்பதைக் கற்றுக்கொள்வோம்!"
      },
      {
        title: "ஹடாமார்ட் கேட்டை (H) வைக்கவும்",
        desc: "H கேட் एक குறிப்பிட்ட நிலையை (|0⟩) சூப்பர்போசிஷன் நிலைக்கு மாற்றுகிறது. கருவிப்பெட்டியிலிருந்து H ஐ இழுத்து ஸ்லாट 1 இல் போடவும்."
      },
      {
        title: "சூப்பர்போசிஷனை கவனிக்கவும்",
        desc: "அருமை! ப்ளாச் கோளத்தை பாருங்கள். வெக்ட்டர் இப்போது X-அச்சில் உள்ளது (|0⟩ வர 50% மற்றும் |1⟩ வர 50% வாய்ப்பு). தொடர அடுத்து என்பதை கிளிக் செய்யவும்."
      },
      {
        title: "ஃபேஸ் சுழற்சியை (S) அறிமுகப்படுத்தவும்",
        desc: "S கேட்டை இழுத்து ஸ்லாட் 2 இல் போடவும்."
      },
      {
        title: "ஃபேஸ் சுழற்சி சுழன்றது",
        desc: "அற்புதமானது! வெக்டர் கோளத்தின் பூமத்திய ரேகையில் சுழன்றுள்ளது. ஃபேஸ் சுழற்சியானது அளவீட்டு நிகழ்தகவகைளை மாற்றாமல் குவாண்டம் நிலைமை சரிசெய்கிறது."
      },
      {
        title: "சாண்ட்பாக்ஸ் திறக்கப்பட்டது!",
        desc: "நீங்கள் வழிகாட்டப்பட்ட சுற்றுப்பயணத்தை முடித்துவிட்டீர்கள். பிற கேட்களை (X, Y, Z, I) இழுத்து சோதித்துப் பாருங்கள்!"
      }
    ]
  },
  es: {
    nav_exit_workspace: "Salir del Espacio de Trabajo",
    nav_theory: "1. Panel de Teoría",
    nav_playground: "2. Laboratorio de Circuitos",
    nav_quiz: "3. Cuestionario de Verificación",
    title_basics: "Experimento 1.1: Qubits, Superposición y Complementariedad",
    hero_title: "Fundamentos de la Información Cuántica.",
    hero_sub: "Antes de sumergirte en canales cuánticos seguros y criptografía compleja, comprende las propiedades físicas esenciales de los qubits individuales: superposición, no clonación y colapso de medición de bases.",
    btn_start_learning: "Comenzar a Aprender",
    btn_launch_playground: "Iniciar el Laboratorio de Circuitos",
    card_superposition_title: "Superposición",
    card_superposition_desc: "Un qubit puede existir en una combinación lineal de ambos 0 y 1, representado como amplitudes de probabilidad en la esfera de Bloch.",
    card_nocloning_title: "No Clonación",
    card_nocloning_desc: "A diferencia de los bits clásicos, los estados cuánticos desconocidos no pueden duplicarse perfectamente, protegiendo QKD contra copias.",
    card_measurement_title: "Medición",
    card_measurement_desc: "Observar un qubit colapsa su función de onda y altera el estado, revelando la presencia de observadores activos.",
    section_title: "Principios Fundamentales de la Mecánica Cuántica",
    section_sub: "Cada tarjeta de concepto proporciona una vista rápida. Haz clic para expandir el resumen, o desplázate hacia abajo para explorar los widgets visualizadores interactivos.",
    quick_summary: "Resumen Rápido",
    concept_kicker: "Concepto",
    concept_of: "de",
    table_basis: "Base",
    table_bit0: "Representación del Bit 0",
    table_bit1: "Representación del Bit 1",
    math_vector_title: "Vector de Estado de Superposición Matemática",
    math_vector_def: "Definición del Vector:",
    math_vector_constraint: "Restricción de Normalización:",
    math_vector_desc: "Los coeficientes complejos α y β determinan las probabilidades de colapso al estado |0⟩ o |1⟩ respectivamente.",
    cta_title: "¡Fundamentos Completados!",
    cta_desc: "Procede al simulador de circuitos para manipular visualmente los qubits en tiempo real.",
    cta_btn_playground: "Ir al Laboratorio de Circuitos",
    cta_btn_top: "Volver Arriba",
    builder_title: "Simulador Interactivo de Circuitos",
    builder_sub: "Arrastra puertas lógicas cuánticas sobre la cuadrícula y observa el cálculo del vector de estado en vivo.",
    btn_guided_tour: "Iniciar Visita Guiada",
    btn_clear_circuit: "Limpiar Circuito",
    toolbox_title: "1. Caja de Herramientas de Puertas",
    toolbox_desc: "Arrastra una puerta a una ranura en la línea de tiempo del qubit, o haz clic para colocarla en la primera ranura libre.",
    timeline_title: "2. Línea de Tiempo del Circuito (1 Qubit)",
    timeline_desc: "Arrastra puertas aquí. Arrástralas fuera para descartarlas.",
    bloch_title: "3. Esfera de Bloch 3D",
    bloch_desc: "Representación interactiva en 3D de la Esfera de Bloch del vector de estado.",
    histogram_title: "4. Histograma de Medición",
    histogram_desc: "Probabilidades calculadas matemáticamente basadas en la secuencia de puertas.",
    btn_go_quiz: "Ir al Cuestionario de Verificación",
    quiz_title: "Cuestionario de Verificación",
    quiz_time_left: "Restante",
    quiz_next_question: "Siguiente Pregunta",
    quiz_submit_results: "Enviar Resultados",
    quiz_passed_title: "¡Validación Completa!",
    quiz_passed_desc: "Obtuviste {score}/10 puntos. ¡Excelente! Has completado con éxito el cuestionario de verificación. Puedes descargar tu informe y certificado a continuación.",
    btn_download_report: "Descargar Informe de Laboratorio",
    btn_download_cert: "Descargar Certificado de Finalización",
    btn_back_dashboard: "Volver al Panel",
    quiz_failed_title: "Calificación Aprobatoria Requerida",
    quiz_failed_desc: "Obtuviste {score}/10 puntos. Se requiere una puntuación perfecta de 10/10 para aprobar. ¡Revisa las diapositivas de teoría, practica en el simulador e inténtalo de nuevo!",
    btn_retake_quiz: "Repetir Cuestionario",
    btn_scroll_section: "Desplazarse a la sección completa",
    guided_tour_title: "Visita Guiada",
    guided_tour_step: "Paso",
    guided_tour_of: "de",
    btn_next: "Siguiente",
    btn_back: "Atrás",
    btn_finish: "Terminar",
    btn_skip: "Omitir Visita",
    btn_done: "Hecho",
    note_drag: "Arrastra las puertas a las ranuras 1 a 5 para ejecutarlas secuencialmente.",
    note_click: "Haz clic en la 'x' de cualquier puerta para eliminarla.",
    builder_outcome_0: "Resultado |0⟩:",
    builder_outcome_1: "Resultado |1⟩:",
    builder_state_vector: "Vector de estado:",
    visual_basics_caption: "Esfera de Bloch 3D Interactiva (Arrastra para rotar)",
    visual_collapse_state: "Estado Colapsado (|0⟩)",
    visual_superposition_state: "Superposición (|0⟩ + |1⟩)",
    visual_btn_reset: "Reiniciar",
    visual_btn_measure: "Medir",
    visual_collapse_caption: "La medición colapsa la función de onda",
    visual_cloner: "Clonador",
    visual_blocked: "❌ Bloqueado",
    visual_disturbed: "Perturbado",
    visual_corrupted: "Corrompido",
    visual_cloning_caption: "La copia perfecta viola las leyes de la física",
    visual_rectilinear: "Rectilínea (+)",
    visual_diagonal: "Diagonal (×)",
    visual_bases_caption: "Bases de Medición Conjugadas",
    topics: {
      "quantum-basics": {
        label: "Conceptos Cuánticos: El Qubit",
        tag: "¿Qué es un qubit?",
        bullets: [
          "Un bit clásico es 0 o 1. Un qubit puede existir en una superposición de ambos 0 y 1 al mismo tiempo.",
          "Esta superposición no es incertidumbre; es un estado físico real.",
          "Solo cuando se mide un qubit, este colapsa en un valor definido."
        ],
        description: "Comprender los qubits es el primer paso para entender la mecánica cuántica y la criptografía. A diferencia de los bits clásicos que son definitivamente 0 o 1, los qubits existen en superposición."
      },
      "measurement-disturbance": {
        label: "Perturbación por Medición",
        tag: "La razón principal por la que los canales cuánticos son seguros",
        bullets: [
          "En los sistemas clásicos, se pueden leer los datos sin alterarlos.",
          "En los sistemas cuánticos, la medición altera el estado y destruye la superposición original.",
          "Esta perturbación es inevitable y fundamental; garantiza la seguridad de la comunicación."
        ],
        description: "El principio de perturbación por medición es una piedra angular de la mecánica cuántica. Cualquier intento de observar o copiar un estado cuántico inevitablemente lo altera."
      },
      "no-cloning": {
        label: "El Teorema de No Clonación",
        tag: "Por qué es imposible copiar",
        bullets: [
          "Es imposible crear una copia idéntica de un estado cuántico desconocido.",
          "Un espía no puede copiar un fotón y reenviarlo de forma segura.",
          "Cualquier intento de extraer información deja una huella detectable."
        ],
        description: "El Teorema de No Clonación garantiza la seguridad de la comunicación cuántica."
      },
      "bases-complementarity": {
        label: "Bases y Complementariedad",
        tag: "Mediciones incompatibles",
        bullets: [
          "En la comunicación cuántica (como BB84), se utilizan bases conjugadas: Base Rectilínea (+) y Base Diagonal (×).",
          "Si se mide en la base correcta → se recupera el bit original. Base incorrecta → resultado completamente aleatorio.",
          "Estas bases son incompatibles; conocer una no da información sobre la otra."
        ],
        description: "La complementariedad asegura que la elección incorrecta de base por parte de un espía procesa aleatoriedad detectable.",
        tableTitle: "Comparación de Bases",
        basis1: "Rectilínea (+)",
        basis1_0: "Horizontal (0°)",
        basis1_1: "Vertical (90°)",
        basis2: "Diagonal (×)",
        basis2_0: "45°",
        basis2_1: "135°"
      }
    },
    quiz_questions: [
      {
        q: "¿Cuál es la diferencia clave entre un bit clásico y un qubit cuántico?",
        options: [
          "Un qubit solo puede ser 0 o 1, mientras que un bit puede estar en superposición.",
          "Un qubit puede existir en una superposición de los estados |0⟩ y |1⟩ simultáneamente.",
          "Un qubit requiere cables clásicos para transferir información.",
          "No existe ninguna diferencia matemática."
        ]
      },
      {
        q: "¿Qué establece el Teorema de No Clonación?",
        options: [
          "Es imposible copiar información clásica.",
          "Se puede clonar un qubit si se mide primero en la base Rectilínea.",
          "Es físicamente imposible crear una copia idéntica de un estado cuántico desconocido arbitrario.",
          "Solo se pueden copiar qubits usando operaciones de entrelazamiento."
        ]
      },
      {
        q: "En mecánica cuántica, ¿cuál es el efecto de medir un qubit en superposición?",
        options: [
          "El estado del qubit permanece en superposición.",
          "La función de onda colapsa a un estado definido, perturbando la superposición original.",
          "El estado se vuelve completamente vacío.",
          "El qubit se duplica."
        ]
      },
      {
        q: "¿Qué puerta se utiliza comúnmente para poner un qubit en una superposición 50/50 desde el estado |0⟩?",
        options: [
          "Puerta Pauli-X",
          "Puerta de Fase (S)",
          "Puerta de Hadamard (H)",
          "Puerta Identidad (I)"
        ]
      },
      {
        q: "¿Qué estado se obtiene aplicando una puerta de Hadamard (H) al estado fundamental |0⟩?",
        options: [
          "|1⟩",
          "|+⟩ = 1/√2(|0⟩ + |1⟩)",
          "|−⟩ = 1/√2(|0⟩ − |1⟩)",
          "|+i⟩"
        ]
      },
      {
        q: "¿Cuáles son los estados estándar de la base Diagonal (×)?",
        options: [
          "|0⟩ y |1⟩",
          "|+⟩ y |−⟩",
          "|+i⟩ y |−i⟩",
          "Solo el estado cero"
        ]
      },
      {
        q: "Si un qubit está en el estado |+⟩ y se mide en la base Rectilínea (+) (estados |0⟩ y |1⟩), ¿cuáles son las probabilidades del resultado?",
        options: [
          "100% de probabilidad de |0⟩, 0% de probabilidad de |1⟩",
          "0% de probabilidad de |0⟩, 100% de probabilidad de |1⟩",
          "50% de probabilidad de |0⟩, 50% de probabilidad de |1⟩",
          "75% de probabilidad de |0⟩, 25% de probabilidad de |1⟩"
        ]
      },
      {
        q: "¿Cuál de las siguientes puertas introduce una rotación de fase de 90 grados (π/2 radianes) al estado |1⟩?",
        options: [
          "Puerta de Hadamard (H)",
          "Puerta Pauli-X",
          "Puerta de Fase (S)",
          "Puerta Identidad (I)"
        ]
      },
      {
        q: "¿Qué representa la condición de normalización |α|² + |β|² = 1 para un estado de qubit |ψ⟩ = α|0⟩ + β|1⟩?",
        options: [
          "La probabilidad total de todos los resultados posibles de la medición debe ser igual a 1.",
          "El ángulo de fase debe ser exactamente de 1 radián.",
          "El qubit siempre debe colapsar a |0⟩.",
          "Los coeficientes deben ser números enteros reales."
        ]
      },
      {
        q: "¿Por qué la perturbación por medición protege los canales de comunicación cuántica de los espías?",
        options: [
          "Los intentos de espionaje alteran inevitablemente los estados cuánticos, introduciendo errores que Alice y Bob pueden detectar.",
          "La medición destruye físicamente la fibra óptica de comunicación.",
          "El canal bloquea inmediatamente la conexión si alguien lo toca.",
          "Las computadoras del espía se deprimen con ruido cuántico."
        ]
      }
    ],
    tour_steps: [
      {
        title: "¡Bienvenido al Sandbox Cuántico!",
        desc: "Aquí construirás circuitos cuánticos arrastrando puertas lógicas en la línea de tiempo. ¡Aprendamos cómo las puertas manipulan la superposición!"
      },
      {
        title: "Coloca una Puerta Hadamard (H)",
        desc: "La puerta H convierte un estado clásico definitivo (|0⟩) en un estado de superposición. Arrastra H desde la caja de herramientas (o haz clic en ella) y suéltala en la ranura 1."
      },
      {
        title: "Observa la Superposición",
        desc: "¡Excelente! Mira la esfera de Bloch y las tarjetas de amplitud. El vector ahora apunta a lo largo del eje X (indicando 50% de probabilidad de |0⟩ y 50% de |1⟩). Haz clic en Siguiente para continuar."
      },
      {
        title: "Introduce Rotación de Fase (S)",
        desc: "Apliquemos un desfase relativo. Arrastra la puerta de fase S (o haz clic en ella) y suéltala en la ranura 2."
      },
      {
        title: "Desfase Relativo Rotado",
        desc: "¡Sobresaliente! El vector ha rotado a lo largo del ecuador de la esfera. Los cambios de fase ajustan los coeficientes de fase sin cambiar las probabilidades de medición."
      },
      {
        title: "¡Sandbox Desbloqueado!",
        desc: "Has completado la visita guiada. Arrastra otras puertas (X, Y, Z, I) para ver cómo rotan los estados. ¡Diviértete experimentando!"
      }
    ]
  },
  fr: {
    nav_exit_workspace: "Quitter l'Espace de Travail",
    nav_theory: "1. Tableau de Théorie",
    nav_playground: "2. Espace Circuits",
    nav_quiz: "3. Quiz de Validation",
    title_basics: "Expérience 1.1: Qubits, Superposition & Complémentarité",
    hero_title: "Fondements de l'Information Quantique.",
    hero_sub: "Avant de plonger dans les canaux sécurisés quantiques et la cryptographie complexe, comprenez les propriétés physiques clés des qubits uniques : superposition, non-clonage et effondrement de mesure des bases.",
    btn_start_learning: "Commencer l'Apprentissage",
    btn_launch_playground: "Lancer l'Espace Circuits",
    card_superposition_title: "Superposition",
    card_superposition_desc: "Un qubit peut exister dans une combinaison linéaire de 0 et 1, représentée par des amplitudes de probabilité sur la sphère de Bloch.",
    card_nocloning_title: "Non-Clonage",
    card_nocloning_desc: "Contrairement aux bits classiques, les états quantiques inconnus ne peuvent pas être dupliqués parfaitement, sécurisant la QKD contre les copies.",
    card_measurement_title: "Mesure",
    card_measurement_desc: "L'observation d'un qubit effondre sa fonction d'onde et perturbe l'état, révélant la présence d'observateurs actifs.",
    section_title: "Principes Fondamentaux de la Mécanique Quantique",
    section_sub: "Chaque carte de concept fournit un aperçu rapide. Cliquez pour développer le résumé, ou faites défiler vers le bas pour explorer les widgets de visualisation interactifs.",
    quick_summary: "Résumé Rapide",
    concept_kicker: "Concept",
    concept_of: "sur",
    table_basis: "Base",
    table_bit0: "Représentation du Bit 0",
    table_bit1: "Représentation du Bit 1",
    math_vector_title: "Vecteur d'État de Superposition Mathématique",
    math_vector_def: "Définition du Vecteur:",
    math_vector_constraint: "Contrainte de Normalisation:",
    math_vector_desc: "Les coefficients complexes α et β déterminent les probabilités d'effondrement vers l'état |0⟩ ou |1⟩ respectivement.",
    cta_title: "Fondations Terminées !",
    cta_desc: "Passez à l'espace de circuits en glisser-déposer pour manipuler visuellement les qubits en temps réel.",
    cta_btn_playground: "Aller à l'Espace Circuits",
    cta_btn_top: "Retour en Haut",
    builder_title: "Simulateur Interactif de Circuits",
    builder_sub: "Faites glisser des portes logiques quantiques sur la grille et observez le calcul en direct du vecteur d'état.",
    btn_guided_tour: "Lancer la Visite Guidée",
    btn_clear_circuit: "Effacer le Circuit",
    toolbox_title: "1. Boîte à Outils des Portes",
    toolbox_desc: "Faites glisser une porte vers un emplacement sur la ligne de temps du qubit, ou cliquez pour la placer dans le premier emplacement vide.",
    timeline_title: "2. Ligne de Temps du Circuit (1 Qubit)",
    timeline_desc: "Faites glisser les portes ici. Glissez-les en dehors pour les rejeter.",
    bloch_title: "3. Sphère de Bloch 3D",
    bloch_desc: "Représentation interactive en 3D de la Sphère de Bloch du vecteur d'état.",
    histogram_title: "4. Histogramme de Mesure",
    histogram_desc: "Probabilités calculées mathématiquement en fonction de la séquence de portes.",
    btn_go_quiz: "Aller au Quiz de Validation",
    quiz_title: "Quiz de Validation",
    quiz_time_left: "Restant",
    quiz_next_question: "Question Suivante",
    quiz_submit_results: "Soumettre les Résultats",
    quiz_passed_title: "Validation Réussie !",
    quiz_passed_desc: "Vous avez obtenu {score}/10 points. Excellent ! Vous avez réussi le quiz de validation pour les bases de la mécanique quantique. Vous pouvez télécharger votre rapport et certificat ci-dessous.",
    btn_download_report: "Télécharger le Rapport de Lab",
    btn_download_cert: "Télécharger le Certificat de Réussite",
    btn_back_dashboard: "Retour au Tableau de Bord",
    quiz_failed_title: "Note d'Approbation Requise",
    quiz_failed_desc: "Vous avez obtenu {score}/10 points. Un score parfait de 10/10 est requis pour valider cette étape. Veuillez réviser les diapositives de théorie, vous exercer dans le simulateur et réessayer !",
    btn_retake_quiz: "Recommencer le Quiz",
    btn_scroll_section: "Défiler vers la section complète",
    guided_tour_title: "Visite Guidée",
    guided_tour_step: "Étape",
    guided_tour_of: "sur",
    btn_next: "Suivant",
    btn_back: "Retour",
    btn_finish: "Terminer",
    btn_skip: "Passer la visite",
    btn_done: "Terminé",
    note_drag: "Glissez les portes sur les emplacements 1 à 5 pour les exécuter séquentiellement.",
    note_click: "Cliquez sur le badge 'x' d'une porte pour la supprimer.",
    builder_outcome_0: "Résultat |0⟩:",
    builder_outcome_1: "Résultat |1⟩:",
    builder_state_vector: "Vecteur d'état:",
    visual_basics_caption: "Sphère de Bloch 3D Interactive (Glisser pour pivoter)",
    visual_collapse_state: "État Effondré (|0⟩)",
    visual_superposition_state: "Superposition (|0⟩ + |1⟩)",
    visual_btn_reset: "Réinitialiser",
    visual_btn_measure: "Mesurer",
    visual_collapse_caption: "La mesure effondre la fonction d'onde",
    visual_cloner: "Cloneur",
    visual_blocked: "❌ Bloqué",
    visual_disturbed: "Perturbé",
    visual_corrupted: "Corrompu",
    visual_cloning_caption: "La copie parfaite viole la physique",
    visual_rectilinear: "Rectiligne (+)",
    visual_diagonal: "Diagonale (×)",
    visual_bases_caption: "Bases de Mesure Conjuguées",
    topics: {
      "quantum-basics": {
        label: "Bases Quantiques : Le Qubit",
        tag: "Qu'est-ce qu'un qubit ?",
        bullets: [
          "Un bit classique est soit 0 soit 1. Un qubit peut exister dans une superposition de 0 et 1 en même temps.",
          "Cette superposition n'est pas une incertitude ; c'est un état physique réel.",
          "Ce n'est que lorsqu'un qubit est mesuré qu'il s'effondre dans une valeur définie."
        ],
        description: "Comprendre les qubits est la première étape pour appréhender la mécanique quantique et la cryptographie. Contrairement aux bits classiques qui sont définitivement 0 ou 1, les qubits existent en superposition."
      },
      "measurement-disturbance": {
        label: "Perturbation par la Mesure",
        tag: "La raison principale de la sécurité des canaux quantiques",
        bullets: [
          "Dans les systèmes classiques, on peut lire les données sans les modifier.",
          "Dans les systèmes quantiques, la mesure modifie l'état et détruit la superposition d'origine.",
          "Cette perturbation est inévitable et fondamentale ; ce seul fait garantit une communication sécurisée."
        ],
        description: "Le principe de perturbation par la mesure est une pierre angulaire de la mécanique quantique. Toute tentative d'observer ou de copier un état quantique l'altère inévitablement."
      },
      "no-cloning": {
        label: "Le Théorème de Non-Clonage",
        tag: "Pourquoi la copie est impossible",
        bullets: [
          "Il est impossible de créer une copie identique d'un état quantique inconnu.",
          "Un espion ne peut pas copier un photon et le transmettre en toute sécurité.",
          "Toute tentative d'extraire des informations laisse une trace détectable."
        ],
        description: "Le Théorème de Non-Clonage garantit la sécurité de la communication quantique."
      },
      "bases-complementarity": {
        label: "Bases et Complémentarité",
        tag: "Mesures incompatibles",
        bullets: [
          "Dans la communication quantique (comme BB84), des bases conjuguées sont utilisées : Base Rectiligne (+) et Base Diagonale (×).",
          "Si mesuré dans la bonne base → le bit d'origine est récupéré. Mauvaise base → résultat complètement aléatoire.",
          "Ces bases sont incompatibles ; connaître l'une ne donne aucune information sur l'autre."
        ],
        description: "La complémentarité garantit que le mauvais choix de base par un espion produit un caractère aléatoire détectable.",
        tableTitle: "Comparaison des Bases",
        basis1: "Rectiligne (+)",
        basis1_0: "Horizontal (0°)",
        basis1_1: "Vertical (90°)",
        basis2: "Diagonale (×)",
        basis2_0: "45°",
        basis2_1: "135°"
      }
    },
    quiz_questions: [
      {
        q: "Quelle est la différence clé entre un bit classique et un qubit quantique ?",
        options: [
          "Un qubit ne peut être que 0 ou 1, tandis qu'un bit peut être en superposition.",
          "Un qubit peut exister dans une superposition des états |0⟩ et |1⟩ simultanément.",
          "Un qubit nécessite des câbles classiques pour transférer les informations.",
          "Il n'y a pas de différence mathématique."
        ]
      },
      {
        q: "Que stipule le Théorème de Non-Clonage ?",
        options: [
          "Il est impossible de copier des informations classiques.",
          "Vous pouvez cloner un qubit si vous le mesurez d'abord dans la base Rectiligne.",
          "Il est physiquement impossible de créer une copie identique d'un état quantique inconnu arbitraire.",
          "Vous ne pouvez copier des qubits qu'en utilisant des opérations d'intrication."
        ]
      },
      {
        q: "En mécanique quantique, quel est l'effet de la mesure d'un qubit en superposition ?",
        options: [
          "L'état du qubit reste en superposition.",
          "La fonction d'onde s'effondre dans un état défini, perturbant la superposition d'origine.",
          "L'état devient complètement vide.",
          "Le qubit est dupliqué."
        ]
      },
      {
        q: "Quelle porte est couramment utilisée pour mettre un qubit dans une superposition 50/50 depuis l'état |0⟩ ?",
        options: [
          "Porte Pauli-X",
          "Porte de Phase (S)",
          "Porte de Hadamard (H)",
          "Porte Identité (I)"
        ]
      },
      {
        q: "Quel état obtient-on en appliquant une porte de Hadamard (H) à l'état fondamental |0⟩ ?",
        options: [
          "|1⟩",
          "|+⟩ = 1/√2(|0⟩ + |1⟩)",
          "|−⟩ = 1/√2(|0⟩ − |1⟩)",
          "|+i⟩"
        ]
      },
      {
        q: "Quels sont les états standard de la base Diagonale (×) ?",
        options: [
          "|0⟩ et |1⟩",
          "|+⟩ et |−⟩",
          "|+i⟩ et |−i⟩",
          "Seulement l'état zéro"
        ]
      },
      {
        q: "Si un qubit est dans l'état |+⟩ et que vous le mesurez dans la base Rectiligne (+) (états |0⟩ et |1⟩), quelles sont les probabilités du résultat ?",
        options: [
          "100% de chance pour |0⟩, 0% de chance pour |1⟩",
          "0% de chance pour |0⟩, 100% de chance pour |1⟩",
          "50% de chance pour |0⟩, 50% de chance pour |1⟩",
          "75% de chance pour |0⟩, 25% de chance pour |1⟩"
        ]
      },
      {
        q: "Laquelle de ces portes introduit une rotation de phase de 90 degrés (π/2 radians) sur l'état |1⟩ ?",
        options: [
          "Porte de Hadamard (H)",
          "Porte Pauli-X",
          "Porte de Phase (S)",
          "Porte Identité (I)"
        ]
      },
      {
        q: "Que représente la condition de normalisation |α|² + |β|² = 1 pour un état de qubit |ψ⟩ = α|0⟩ + β|1⟩ ?",
        options: [
          "La probabilité totale de tous les résultats de mesure possibles doit être égale à 1.",
          "L'angle de phase doit être exactement de 1 radian.",
          "Le qubit doit toujours s'effondrer vers |0⟩.",
          "Les coefficients doivent être des entiers réels."
        ]
      },
      {
        q: "Pourquoi la perturbation par la mesure protège-t-elle les canaux de communication quantiques des espions ?",
        options: [
          "Les tentatives d'espionnage modifient inévitablement les états quantiques, introduisant des erreurs qu'Alice et Bob peuvent détecter.",
          "La mesure détruit physiquement la fibre optique de communication.",
          "Le canal bloque immédiatement la connexion si quelqu'un le touche.",
          "Les ordinateurs de l'espion sont infectés par le bruit quantique."
        ]
      }
    ],
    tour_steps: [
      {
        title: "Bienvenue dans le Sandbox Quantique !",
        desc: "Ici, vous allez construire circuits quantiques en faisant glisser des portes logiques sur la ligne de temps. Apprenons comment les portes manipulent la superposition !"
      },
      {
        title: "Placer une porte Hadamard (H)",
        desc: "La porte H convertit un état classique défini (|0⟩) en un état de superposition. Glissez H depuis la boîte à outils (ou cliquez dessus) et déposez-la dans l'emplacement 1."
      },
      {
        title: "Observer la Superposition",
        desc: "Excellent ! Regardez la sphère de Bloch. Le vecteur pointe maintenant le long de l'axe X (50% de probabilité de |0⟩ et 50% de |1⟩). Cliquez sur Suivant pour continuer."
      },
      {
        title: "Introduire une Rotation de Phase (S)",
        desc: "Appliquons un déphasage relatif. Glissez la porte de phase S (ou cliquez dessus) et déposez-la dans l'emplacement 2."
      },
      {
        title: "Déphasage Relatif Pivoté",
        desc: "Remarquable ! Le vecteur a tourné le long de l'équateur de la sphère. Les déphasages ajustent les coefficients sans modifier les probabilités de mesure."
      },
      {
        title: "Sandbox Déverrouillé !",
        desc: "Vous avez terminé la visite guidée. Faites glisser d'autres portes (X, Y, Z, I) pour voir comment elles modifient les états. Bonnes expériences !"
      }
    ]
  }
};
