// src/data/translations_exp_1.2.ts
// Multilingual UI strings for Experiment 1.2 (Bell State Entanglement).

import { LangCode } from "./translations";

export interface TopicTranslate {
  label: string;
  tag: string;
  bullets: string[];
  description: string;
  table?: {
    title: string;
    rows: Array<{
      gate: string;
      inputs: string;
      outputs: string;
    }>;
  };
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
  nav_activities: string;
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
  table_gate: string;
  table_inputs: string;
  table_outputs: string;
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
  builder_state_vector: string;

  // Specific to Exp 1.2
  activity_title: string;
  activity_desc: string;
  activity_target: string;
  activity_current: string;
  activity_match: string;
  activity_not_match: string;
  activity_phi_plus: string;
  activity_phi_minus: string;
  activity_psi_plus: string;
  activity_psi_minus: string;
  activity_psi_completed: string;
  activity_load_btn: string;

  topics: {
    "cnot-gate": TopicTranslate;
    "bell-states": TopicTranslate;
    "entanglement-applications": TopicTranslate;
    "swap-toffoli": TopicTranslate;
  };
  quiz_questions: QuizQuestionTranslate[];
  tour_steps: TourStepTranslate[];
}

export const TRANSLATIONS_EXP_1_2: Record<LangCode, ExpTranslations> = {
  en: {
    nav_exit_workspace: "Exit",
    nav_theory: "Aim & Theory",
    nav_playground: "Entanglement Lab",
    nav_activities: "Entanglement Activities",
    nav_quiz: "Validation Quiz",
    title_basics: "Experiment 1.2",
    hero_title: "Bell State Entanglement",
    hero_sub: "Explore multi-qubit systems, Einstein-Podolsky-Rosen (EPR) correlation, and build maximally entangled Bell states using multi-qubit gates.",
    btn_start_learning: "Start Learning",
    btn_launch_playground: "Sandbox Playground",
    card_superposition_title: "Quantum Entanglement",
    card_superposition_desc: "A physical phenomenon where pairs or groups of particles share states, such that one cannot be described independently of the other.",
    card_nocloning_title: "Multi-Qubit Operators",
    card_nocloning_desc: "Operations like CNOT, SWAP, and Toffoli that act on multiple qubits to construct entangled states and perform reversible classical gates.",
    card_measurement_title: "EPR Paradox",
    card_measurement_desc: "The famous thought experiment challenging classical local realism, showcasing how measuring one qubit instantly reveals the state of the other.",
    section_title: "Foundations of Entanglement",
    section_sub: "Review the theoretical principles of multi-qubit systems before proceeding to the active laboratory simulator.",
    quick_summary: "Quick Summary",
    concept_kicker: "Concept",
    concept_of: "of",
    table_gate: "Gate",
    table_inputs: "Inputs",
    table_outputs: "Outputs",
    math_vector_title: "2-Qubit State Vector Representation",
    math_vector_def: "General state representation",
    math_vector_constraint: "Normalization constraint",
    math_vector_desc: "A two-qubit state exists in a 4-dimensional complex space, spanned by computational basis states |00⟩, |01⟩, |10⟩, and |11⟩.",
    cta_title: "Ready to engineer entangled states?",
    cta_desc: "Enter the simulator workspace. Configure multi-qubit timelines, complete the Bell state challenges, and view live state vectors.",
    cta_btn_playground: "Enter Entanglement Lab",
    cta_btn_top: "Back to top",
    builder_title: "Multi-Qubit Builder Sandbox",
    builder_sub: "Drag gates onto the 3-qubit timeline, view probability amplitudes, and complete the Bell state tasks.",
    btn_guided_tour: "Onboarding Tour",
    btn_clear_circuit: "Reset Timeline",
    toolbox_title: "Operators Toolbox",
    toolbox_desc: "Drag gates onto the slots. H and Pauli gates are single-qubit. CNOT, SWAP, and CCX are multi-qubit.",
    timeline_title: "Circuit Timeline",
    timeline_desc: "Drag gates into slots. q0 controls q1 for CNOT, q1 controls q2 for CNOT12, and q0,q1 control q2 for Toffoli.",
    bloch_title: "Individual Bloch Spheres",
    bloch_desc: "Notice how local Bloch vectors shrink to zero when qubits become maximally entangled (monogamy of entanglement).",
    histogram_title: "State Probabilities",
    histogram_desc: "Live measurement probabilities across the 8 computational basis states (|000⟩ to |111\rangle).",
    btn_go_quiz: "Go to Checkpoint Quiz",
    quiz_title: "Checkpoint Quiz",
    quiz_time_left: "Left",
    quiz_next_question: "Next Question",
    quiz_submit_results: "Submit Results",
    quiz_passed_title: "Validation Complete!",
    quiz_passed_desc: "You scored {score}/10. Excellent! You have successfully completed the checkpoint quiz for Bell State Entanglement. Download your credentials below.",
    btn_download_report: "Download Lab Report",
    btn_download_cert: "Download Credentials",
    btn_back_dashboard: "Back to Dashboard",
    quiz_failed_title: "Passing Grade Required",
    quiz_failed_desc: "You scored {score}/10. A perfect 10/10 score is required to pass the checkpoint. Please review the theory slides and try again!",
    btn_retake_quiz: "Retake Quiz",
    btn_scroll_section: "Learn Theory",
    guided_tour_title: "Sandbox Tour",
    guided_tour_step: "Step",
    guided_tour_of: "of",
    btn_next: "Next",
    btn_back: "Back",
    btn_finish: "Finish",
    btn_skip: "Skip",
    btn_done: "Done",
    note_drag: "Drag",
    note_click: "Click",
    builder_state_vector: "State Vector Amplitudes",

    activity_title: "Bell State Engineering Activities",
    activity_desc: "Place gates on the circuit timeline to construct the target maximally entangled state. Hit Load to select a challenge.",
    activity_target: "Target State",
    activity_current: "Current Circuit State",
    activity_match: "State Match Verified! Well done!",
    activity_not_match: "Circuit does not match the target state. Keep editing!",
    activity_phi_plus: "Challenge 1: Build |Φ⁺⟩ = (|00⟩ + |11⟩)/√2",
    activity_phi_minus: "Challenge 2: Build |Φ⁻⟩ = (|00⟩ - |11⟩)/√2",
    activity_psi_plus: "Challenge 3: Build |Ψ⁺⟩ = (|01⟩ + |10⟩)/√2",
    activity_psi_minus: "Challenge 4: Build |Ψ⁻⟩ = (|01⟩ - |10⟩)/√2",
    activity_psi_completed: "Completed!",
    activity_load_btn: "Load Challenge",

    topics: {
      "cnot-gate": {
        label: "The CNOT Gate & Controlled Operations",
        tag: "Two-Qubit State Engineering",
        bullets: [
          "The CNOT (Controlled-X) gate applies a Pauli-X (NOT) on the target qubit if the control is |1⟩.",
          "It represents a fundamental building block for entangling operations in quantum networks.",
          "Mathematically, it performs mapping: |c⟩|t⟩ -> |c⟩|t ⊕ c⟩."
        ],
        description: "The CNOT gate acts on two qubits. When combined with a single-qubit Hadamard gate (H), it generates quantum entanglement by mapping product states into correlated, non-separable states.",
        table: {
          title: "CNOT (Control q0, Target q1) Action Table",
          rows: [
            { gate: "CNOT", inputs: "|00⟩", outputs: "|000⟩" }, // Note: output states represent q2 q1 q0, where control is q0, target is q1, q2 is 0
            { gate: "CNOT", inputs: "|01⟩", outputs: "|011⟩" },
            { gate: "CNOT", inputs: "|10⟩", outputs: "|010⟩" },
            { gate: "CNOT", inputs: "|11⟩", outputs: "|001⟩" }
          ]
        }
      },
      "bell-states": {
        label: "The Four Maximally Entangled Bell States",
        tag: "EPR Pairs & Maximal Correlation",
        bullets: [
          "The Bell states form an orthonormal basis for 2-qubit systems representing maximum entanglement.",
          "Measuring one qubit of a Bell pair collapses it to a random result (0 or 1) and immediately forces the other qubit to match.",
          "They cannot be factored into the tensor product of two independent single-qubit states (product states)."
        ],
        description: "Maximally entangled pairs, or EPR pairs, exhibit correlation that exceeds any possible classical bounds. They are defined as: |Φ⁺⟩ = (|00⟩+|11⟩)/√2, |Φ⁻⟩ = (|00⟩-|11⟩)/√2, |Ψ⁺⟩ = (|01⟩+|10⟩)/√2, and |Ψ⁻⟩ = (|01⟩-|10⟩)/√2."
      },
      "swap-toffoli": {
        label: "SWAP, CCNOT (Toffoli), and Multi-Qubit Gates",
        tag: "Reversible Computation & Multi-Qubit Circuits",
        bullets: [
          "The SWAP gate interchanges the states of two qubits: |q0 q1⟩ -> |q1 q0⟩.",
          "The Toffoli (CCNOT) gate is a 3-qubit gate that flips the target qubit if and only if both controls are in the state |11⟩.",
          "Toffoli is a universal gate for classical reversible computation, meaning any classical circuit can be built using it."
        ],
        description: "SWAP and CCNOT gates allow routing and multi-conditioned boolean operations. In the timeline, SWAP swaps q0 and q1, while CCNOT (CCX) uses q0 and q1 as controls to target q2."
      },
      "entanglement-applications": {
        label: "Real-World Applications of Entanglement",
        tag: "Quantum Protocols & Technologies",
        bullets: [
          "Quantum Key Distribution (QKD): Shared entangled pairs allow secure cryptographic key distribution via E91 protocol.",
          "Quantum Teleportation: Transfers unknown states using shared entanglement and classical channels.",
          "Superdense Coding: Allows transmitting two classical bits of information using just one physical qubit."
        ],
        description: "Entanglement is the core resource driving modern quantum networking and computing protocols. It serves as the physical backbone for distributed quantum networks, synchronization, and secure routing."
      }
    },
    quiz_questions: [
      {
        q: "Which gate combination is used to construct the standard Bell state |Φ⁺⟩ from initial state |00⟩?",
        options: [
          "H on q0, then CNOT (q0 to q1)",
          "CNOT (q0 to q1), then H on q0",
          "H on q0, H on q1",
          "X on q0, then H on q1"
        ]
      },
      {
        q: "What is the main property of a maximally entangled 2-qubit state?",
        options: [
          "It can be factored as the tensor product of two independent single-qubit states",
          "It cannot be factored into individual single-qubit product states",
          "Measuring one qubit gives no information about the second qubit",
          "It has zero superposition components"
        ]
      },
      {
        q: "For the CNOT gate, if control qubit q0 is in state (|0⟩ + |1⟩)/√2 and target q1 is in state |0⟩, what is the output state?",
        options: [
          "(|00⟩ + |10⟩)/√2",
          "(|00⟩ + |11⟩)/√2",
          "(|01⟩ + |10⟩)/√2",
          "|11⟩"
        ]
      },
      {
        q: "How many complex numbers represent the state vector of a 3-qubit system?",
        options: [
          "3",
          "6",
          "8",
          "16"
        ]
      },
      {
        q: "The SWAP gate acts on states by interchanging them. What is the output of SWAP on state |01⟩?",
        options: [
          "|01⟩",
          "|10⟩",
          "|11⟩",
          "|00⟩"
        ]
      },
      {
        q: "The CCNOT (Toffoli) gate requires how many control qubits?",
        options: [
          "1",
          "2",
          "3",
          "0"
        ]
      },
      {
        q: "If two qubits are in a maximally entangled Bell state, what happens to their local Bloch spheres?",
        options: [
          "They expand to twice the normal volume",
          "They point in opposite directions on the Z axis",
          "They contract to a single point at the origin (radius = 0)",
          "They point in the positive X direction"
        ]
      },
      {
        q: "Which Bell state is represented by (|01⟩ - |10⟩)/√2?",
        options: [
          "|Φ⁺⟩",
          "|Φ⁻⟩",
          "|Ψ⁺⟩",
          "|Ψ⁻⟩"
        ]
      },
      {
        q: "The principle that entanglement cannot be shared between multiple independent systems at full strength is called...",
        options: [
          "No-Cloning Theorem",
          "Monogamy of Entanglement",
          "Bell's Inequality",
          "Uncertainty Principle"
        ]
      },
      {
        q: "Which quantum communication protocol uses shared entanglement to send 2 classical bits via 1 qubit?",
        options: [
          "BB84 Protocol",
          "Quantum Teleportation",
          "Superdense Coding",
          "B92 Protocol"
        ]
      }
    ],
    tour_steps: [
      {
        title: "Welcome to Entanglement Lab!",
        desc: "In this experiment, you will explore multi-qubit gates and engineer the four maximally entangled Bell states."
      },
      {
        title: "Multi-Qubit Operators",
        desc: "The toolbox now contains H, X, Y, Z, and multi-qubit gates: CNOT (CX), CNOT12 (CX12), SWAP, and CCNOT (CCX)."
      },
      {
        title: "3-Qubit Timeline Wires",
        desc: "You can drag and drop gates onto three qubit timelines: q0, q1, and q2. Multi-qubit gates execute using adjacent control channels."
      },
      {
        title: "Bell State Engineering Activities",
        desc: "Use this panel to select a Bell State challenge. The validator will check if your circuit builds the exact mathematical target."
      },
      {
        title: "8-State Amplitude Grid",
        desc: "Watch the complex state vector expand across all 8 possible combinations (|000⟩ to |111⟩) in real time."
      },
      {
        title: "Local Bloch Spheres",
        desc: "Observe how the Bloch sphere vectors contract to the center as entanglement increases, illustrating mixed states!"
      }
    ]
  },
  hi: {
    nav_exit_workspace: "वर्कस्पेस से बाहर निकलें",
    nav_theory: "लक्ष्य और सिद्धांत",
    nav_playground: "एंटैंगलमेंट लैब",
    nav_activities: "उलझाव गतिविधियाँ",
    nav_quiz: "सत्यापन प्रश्नोत्तरी",
    title_basics: "प्रयोग 1.2",
    hero_title: "Bell State Entanglement",
    hero_sub: "मल्टी-क्यूबिट सिस्टम, आइंस्टीन-पोडोलस्की-रोसेन (EPR) सहसंबंध का पता लगाएं, और मल्टी-क्यूबिट गेट्स का उपयोग करके अधिकतम रूप से एंटैंगलड Bell स्टेट्स का निर्माण करें।",
    btn_start_learning: "सीखना शुरू करें",
    btn_launch_playground: "सैंडबॉक्स प्लेग्राउंड",
    card_superposition_title: "Quantum Entanglement",
    card_superposition_desc: "एक भौतिक घटना जहां कणों के जोड़े या समूह स्टेट्स साझा करते हैं, ताकि एक को दूसरे से स्वतंत्र रूप से वर्णित नहीं किया जा सके।",
    card_nocloning_title: "मल्टी-क्यूबिट ऑपरेटर्स",
    card_nocloning_desc: "CNOT, SWAP, और Toffoli जैसे ऑपरेशंस जो एंटैंगलड स्टेट्स बनाने और प्रतिवर्ती शास्त्रीय गेट्स करने के लिए कई क्यूबिट पर कार्य करते हैं।",
    card_measurement_title: "EPR Paradox",
    card_measurement_desc: "शास्त्रीय स्थानीय यथार्थवाद को चुनौती देने वाला प्रसिद्ध विचार प्रयोग, यह प्रदर्शित करता है कि कैसे एक क्यूबिट को मापने से दूसरे के स्टेट का तुरंत पता चलता है।",
    section_title: "एंटैंगलमेंट की नींव",
    section_sub: "सक्रिय प्रयोगशाला सिम्युलेटर पर आगे बढ़ने से पहले मल्टी-क्यूबिट सिस्टम के सैद्धांतिक सिद्धांतों की समीक्षा करें।",
    quick_summary: "त्वरित सारांश",
    concept_kicker: "अवधारणा",
    concept_of: "का",
    table_gate: "Gate",
    table_inputs: "इनपुट्स",
    table_outputs: "आउटपुट्स",
    math_vector_title: "2-क्यूबिट स्टेट वेक्टर प्रतिनिधित्व",
    math_vector_def: "सामान्य स्टेट प्रतिनिधित्व",
    math_vector_constraint: "सामान्यीकरण बाधा",
    math_vector_desc: "एक दो-क्यूबिट स्टेट 4-आयामी जटिल स्थान में मौजूद है, जो कम्प्यूटेशनल बेसिस स्टेट्स |00⟩, |01⟩, |10⟩, और |11⟩ द्वारा फैला हुआ है।",
    cta_title: "क्या आप एंटैंगलड स्टेट्स बनाने के लिए तैयार हैं?",
    cta_desc: "सिम्युलेटर वर्कस्पेस में प्रवेश करें। मल्टी-क्यूबिट टाइमलाइन कॉन्फ़िगर करें, Bell स्टेट चुनौतियों को पूरा करें, और लाइव स्टेट वेक्टर्स देखें।",
    cta_btn_playground: "एंटैंगलमेंट लैब में प्रवेश करें",
    cta_btn_top: "ऊपर वापस जाएं",
    builder_title: "मल्टी-क्यूबिट सैंडबॉक्स",
    builder_sub: "गेट्स को 3-क्यूबिट टाइमलाइन पर खींचें, संभाव्यता आयाम देखें, और Bell स्टेट कार्यों को पूरा करें।",
    btn_guided_tour: "मार्गदर्शित टूर",
    btn_clear_circuit: "टाइमलाइन रीसेट करें",
    toolbox_title: "ऑपरेटर्स टूलबॉक्स",
    toolbox_desc: "गेट्स को स्लॉट्स पर खींचें। H और Pauli गेट्स सिंगल-क्यूबिट हैं। CNOT, SWAP, और CCX मल्टी-क्यूबिट हैं।",
    timeline_title: "सर्किट टाइमलाइन",
    timeline_desc: "गेट्स को स्लॉट्स में खींचें। q0 CNOT के लिए q1 को नियंत्रित करता है, q1 CNOT12 के लिए q2 को नियंत्रित करता है, और q0, q1 Toffoli के लिए q2 को नियंत्रित करते हैं।",
    bloch_title: "व्यक्तिगत Bloch Spheres",
    bloch_desc: "ध्यान दें कि जब क्यूबिट अधिकतम रूप से एंटैंगलड हो जाते हैं तो स्थानीय Bloch वेक्टर्स शून्य हो जाते हैं (एंटैंगलमेंट की एकपत्नीत्व)।",
    histogram_title: "स्टेट संभाव्यताएं",
    histogram_desc: "8 कम्प्यूटेशनल बेसिस स्टेट्स (|000⟩ से |111\rangle) में लाइव माप संभाव्यताएं।",
    btn_go_quiz: "सत्यापन प्रश्नोत्तरी पर जाएं",
    quiz_title: "सत्यापन प्रश्नोत्तरी",
    quiz_time_left: "शेष",
    quiz_next_question: "अगला प्रश्न",
    quiz_submit_results: "परिणाम सबमिट करें",
    quiz_passed_title: "सत्यापन पूर्ण!",
    quiz_passed_desc: "आपने {score}/10 स्कोर किया। उत्कृष्ट! आपने Bell स्टेट एंटैंगलमेंट के लिए सत्यापन प्रश्नोत्तरी सफलतापूर्वक पूरी कर ली है। नीचे अपने क्रेडेंशियल डाउनलोड करें।",
    btn_download_report: "लैब रिपोर्ट डाउनलोड करें",
    btn_download_cert: "पूर्णता प्रमाण पत्र डाउनलोड करें",
    btn_back_dashboard: "डैशबोर्ड पर वापस जाएं",
    quiz_failed_title: "उत्तीर्ण ग्रेड आवश्यक",
    quiz_failed_desc: "आपने {score}/10 स्कोर किया। चेकपॉइंट पास करने के लिए 10/10 का सही स्कोर आवश्यक है। कृपया थ्योरी स्लाइड्स की समीक्षा करें और दोबारा प्रयास करें!",
    btn_retake_quiz: "प्रश्नोत्तरी दोबारा लें",
    btn_scroll_section: "सिद्धांत सीखें",
    guided_tour_title: "सैंडबॉक्स टूर",
    guided_tour_step: "चरण",
    guided_tour_of: "का",
    btn_next: "अगला",
    btn_back: "पीछे",
    btn_finish: "समाप्त करें",
    btn_skip: "छोड़ें",
    btn_done: "पूर्ण",
    note_drag: "खींचें",
    note_click: "क्लिक करें",
    builder_state_vector: "स्टेट वेक्टर आयाम",

    activity_title: "Bell स्टेट इंजीनियरिंग गतिविधियां",
    activity_desc: "लक्ष्य अधिकतम रूप से एंटैंगलड स्टेट के निर्माण के लिए सर्किट टाइमलाइन पर गेट्स रखें। चुनौती का चयन करने के लिए लोड पर क्लिक करें।",
    activity_target: "लक्ष्य स्टेट",
    activity_current: "वर्तमान सर्किट स्टेट",
    activity_match: "स्टेट मिलान सत्यापित! बहुत बढ़िया!",
    activity_not_match: "सर्किट लक्ष्य स्टेट से मेल नहीं खाता है। संपादन जारी रखें!",
    activity_phi_plus: "चुनौती 1: |Φ⁺⟩ = (|00⟩ + |11⟩)/√2 बनाएं",
    activity_phi_minus: "चुनौती 2: |Φ⁻⟩ = (|00⟩ - |11⟩)/√2 बनाएं",
    activity_psi_plus: "चुनौती 3: |Ψ⁺⟩ = (|01⟩ + |10⟩)/√2 बनाएं",
    activity_psi_minus: "चुनौती 4: |Ψ⁻⟩ = (|01⟩ - |10⟩)/√2 बनाएं",
    activity_psi_completed: "पूरा हुआ!",
    activity_load_btn: "चुनौती लोड करें",

    topics: {
      "cnot-gate": {
        label: "CNOT गेट और नियंत्रित ऑपरेशंस",
        tag: "दो-क्यूबिट स्टेट इंजीनियरिंग",
        bullets: [
          "CNOT (Controlled-X) गेट टारगेट क्यूबिट पर एक Pauli-X (NOT) लागू करता है यदि कंट्रोल क्यूबिट |1⟩ है।",
          "यह क्वांटम नेटवर्क में एंटैंगलिंग ऑपरेशंस के लिए एक बुनियादी बिल्डिंग ब्लॉक का प्रतिनिधित्व करता है।",
          "गणितीय रूप से, यह मैपिंग करता है: |c⟩|t⟩ -> |c⟩|t ⊕ c⟩।"
        ],
        description: "CNOT गेट दो क्यूबिट पर काम करता है। जब इसे सिंगल-क्यूबिट Hadamard गेट (H) के साथ जोड़ा जाता है, तो यह प्रोडक्ट स्टेट्स को सहसंबद्ध, गैर-पृथक स्टेट्स में मैप करके क्वांटम एंटैंगलमेंट उत्पन्न करता है।",
        table: {
          title: "CNOT (कंट्रोल q0, टारगेट q1) एक्शन टेबल",
          rows: [
            { gate: "CNOT", inputs: "|00⟩", outputs: "|000⟩" },
            { gate: "CNOT", inputs: "|01⟩", outputs: "|011⟩" },
            { gate: "CNOT", inputs: "|10⟩", outputs: "|010⟩" },
            { gate: "CNOT", inputs: "|11⟩", outputs: "|001⟩" }
          ]
        }
      },
      "bell-states": {
        label: "चार अधिकतम रूप से एंटैंगलड Bell स्टेट्स",
        tag: "EPR जोड़े और अधिकतम सहसंबंध",
        bullets: [
          "Bell स्टेट्स 2-क्यूबिट सिस्टम के लिए एक ऑर्थोनॉर्मल बेसिस बनाते हैं जो अधिकतम एंटैंगलमेंट का प्रतिनिधित्व करते हैं।",
          "एक Bell जोड़ी के एक क्यूबिट को मापने से यह एक यादृच्छिक परिणाम (0 या 1) में ढह जाता है और तुरंत दूसरे क्यूबिट को मेल खाने के लिए मजबूर करता है।",
          "उन्हें दो स्वतंत्र सिंगल-क्यूबिट स्टेट्स (उत्पाद स्टेट्स) के टेंसर उत्पाद में शामिल नहीं किया जा सकता है।"
        ],
        description: "अधिकतम रूप से एंटैंगलड जोड़े, या EPR जोड़े, सहसंबंध प्रदर्शित करते हैं जो किसी भी संभावित शास्त्रीय सीमा से अधिक है। उन्हें परिभाषित किया गया है: |Φ⁺⟩ = (|00⟩+|11⟩)/√2, |Φ⁻⟩ = (|00⟩-|11⟩)/√2, |Ψ⁺⟩ = (|01⟩+|10⟩)/√2, और |Ψ⁻⟩ = (|01⟩-|10⟩)/√2."
      },
      "swap-toffoli": {
        label: "SWAP, CCNOT (Toffoli), और मल्टी-क्यूबिट गेट्स",
        tag: "प्रतिवर्ती संगणना और मल्टी-क्यूबिट सर्किट",
        bullets: [
          "SWAP गेट दो क्यूबिट के स्टेट्स को आपस में बदल देता है: |q0 q1⟩ -> |q1 q0⟩।",
          "Toffoli (CCNOT) गेट एक 3-क्यूबिट गेट है जो टारगेट क्यूबिट को तभी फ्लिप करता है जब दोनों कंट्रोल क्यूबिट |11⟩ स्टेट में हों।",
          "शास्त्रीय प्रतिवर्ती संगणना के लिए Toffoli एक सार्वभौमल गेट है, जिसका अर्थ है कि इसका उपयोग करके कोई भी शास्त्रीय सर्किट बनाया जा सकता है।"
        ],
        description: "SWAP और CCNOT गेट्स रूटिंग और मल्टी-कंडीशन वाले बूलियन ऑपरेशंस की अनुमति देते हैं। टाइमलाइन में, SWAP q0 और q1 को बदलता है, जबकि CCNOT (CCX) q2 को टारगेट करने के लिए q0 और q1 को कंट्रोल के रूप में उपयोग करता है।"
      },
      "entanglement-applications": {
        label: "एंटैंगलमेंट के वास्तविक दुनिया के अनुप्रयोग",
        tag: "क्वांटम प्रोटोकॉल और तकनीक",
        bullets: [
          "क्वांटम कुंजी वितरण (QKD): साझा एंटैंगलड जोड़े E91 प्रोटोकॉल के माध्यम से सुरक्षित क्रिप्टोग्राफिक कुंजी वितरण की अनुमति देते हैं।",
          "क्वांटम टेलीपोर्टेशन: साझा एंटैंगलमेंट और शास्त्रीय चैनलों का उपयोग करके अज्ञात स्टेट्स को स्थानांतरित करता है।",
          "सुपरडेंस कोडिंग: केवल एक भौतिक क्यूबिट का उपयोग करके सूचना के दो शास्त्रीय बिट्स को प्रसारित करने की अनुमति देता है।"
        ],
        description: "एंटैंगलमेंट आधुनिक क्वांटम नेटवर्किंग और कंप्यूटिंग प्रोटोकॉल को चलाने वाला मुख्य संसाधन है। यह वितरित क्वांटम नेटवर्क, सिंक्रनाइज़ेशन और सुरक्षित रूटिंग के लिए भौतिक रीढ़ के रूप में कार्य करता है।"
      }
    },
    quiz_questions: [
      {
        q: "प्रारंभिक स्टेट |00⟩ से मानक Bell स्टेट |Φ⁺⟩ के निर्माण के लिए किस गेट संयोजन का उपयोग किया जाता है?",
        options: [
          "q0 पर H, फिर CNOT (q0 से q1)",
          "CNOT (q0 से q1), फिर q0 पर H",
          "q0 पर H, q1 पर H",
          "q0 पर X, फिर q1 पर H"
        ]
      },
      {
        q: "एक अधिकतम रूप से एंटैंगलड 2-क्यूबिट स्टेट की मुख्य विशेषता क्या है?",
        options: [
          "इसे दो स्वतंत्र सिंगल-क्यूबिट स्टेट्स के टेंसर उत्पाद के रूप में फैक्टराइज़ किया जा सकता है",
          "इसे व्यक्तिगत सिंगल-क्यूबिट उत्पाद स्टेट्स में फैक्टराइज़ नहीं किया जा सकता है",
          "एक क्यूबिट को मापने से दूसरे क्यूबिट के बारे में कोई जानकारी नहीं मिलती है",
          "इसमें शून्य सुपरपोजिशन घटक होते हैं"
        ]
      },
      {
        q: "CNOT गेट के लिए, यदि कंट्रोल क्यूबिट q0 स्टेट (|0⟩ + |1⟩)/√2 में है और टारगेट q1 स्टेट |0⟩ में है, तो आउटपुट स्टेट क्या है?",
        options: [
          "(|00⟩ + |10⟩)/√2",
          "(|00⟩ + |11⟩)/√2",
          "(|01⟩ + |10⟩)/√2",
          "|11⟩"
        ]
      },
      {
        q: "3-क्यूबिट सिस्टम के स्टेट वेक्टर को कितने जटिल नंबर दर्शाते हैं?",
        options: [
          "3",
          "6",
          "8",
          "16"
        ]
      },
      {
        q: "SWAP गेट स्टेट्स को आपस में बदलकर काम करता है। स्टेट |01⟩ पर SWAP का आउटपुट क्या है?",
        options: [
          "|01⟩",
          "|10⟩",
          "|11⟩",
          "|00⟩"
        ]
      },
      {
        q: "CCNOT (Toffoli) गेट के लिए कितने कंट्रोल क्यूबिट की आवश्यकता होती है?",
        options: [
          "1",
          "2",
          "3",
          "0"
        ]
      },
      {
        q: "यदि दो क्यूबिट अधिकतम रूप से एंटैंगलड Bell स्टेट में हैं, तो उनके स्थानीय Bloch Spheres का क्या होता है?",
        options: [
          "वे सामान्य आयतन से दुगने हो जाते हैं",
          "वे Z अक्ष पर विपरीत दिशाओं में इंगित करते हैं",
          "वे मूल बिंदु पर एक बिंदु तक सिकुड़ जाते हैं (त्रिज्या = 0)",
          "वे सकारात्मक X दिशा में इंगित करते हैं"
        ]
      },
      {
        q: "(|01⟩ - |10⟩)/√2 द्वारा कौन सा Bell स्टेट दर्शाया जाता है?",
        options: [
          "|Φ⁺⟩",
          "|Φ⁻⟩",
          "|Ψ⁺⟩",
          "|Ψ⁻⟩"
        ]
      },
      {
        q: "यह सिद्धांत कि एंटैंगलमेंट को पूर्ण शक्ति पर कई स्वतंत्र प्रणालियों के बीच साझा नहीं किया जा सकता है, कहलाता है...",
        options: [
          "नो-क्लोनिंग प्रमेय",
          "एंटैंगलमेंट की एकपत्नीत्व (Monogamy)",
          "बेल की असमानता",
          "अनिश्चितता सिद्धांत"
        ]
      },
      {
        q: "कौन सा क्वांटम संचार प्रोटोकॉल 1 क्यूबिट के माध्यम से 2 शास्त्रीय बिट्स भेजने के लिए साझा एंटैंगलमेंट का उपयोग करता है?",
        options: [
          "BB84 प्रोटोकॉल",
          "क्वांटम टेलीपोर्टेशन",
          "सुपरडेंस कोडिंग",
          "B92 प्रोटोकॉल"
        ]
      }
    ],
    tour_steps: [
      {
        title: "एंटैंगलमेंट लैब में आपका स्वागत है!",
        desc: "इस प्रयोग में, आप मल्टी-क्यूबिट गेट्स का पता लगाएंगे और चार अधिकतम रूप से एंटैंगलड Bell स्टेट्स का निर्माण करेंगे।"
      },
      {
        title: "मल्टी-क्यूबिट ऑपरेटर्स",
        desc: "टूलबॉक्स में अब H, X, Y, Z, और मल्टी-क्यूबिट गेट्स शामिल हैं: CNOT (CX), CNOT12 (CX12), SWAP, और CCNOT (CCX)।"
      },
      {
        title: "3-क्यूबिट टाइमलाइन वायर्स",
        desc: "आप गेट्स को तीन क्यूबिट टाइमलाइन पर खींच और छोड़ सकते हैं: q0, q1, और q2। मल्टी-क्यूबिट गेट आसन्न कंट्रोल चैनलों का उपयोग करके निष्पादित होते हैं।"
      },
      {
        title: "Bell स्टेट इंजीनियरिंग गतिविधियां",
        desc: "Bell स्टेट चुनौती का चयन करने के लिए इस पैनल का उपयोग करें। सत्यापनकर्ता जांच करेगा कि क्या आपका सर्किट सटीक गणितीय लक्ष्य बनाता है।"
      },
      {
        title: "8-स्टेट आयाम ग्रिड",
        desc: "वास्तविक समय में सभी 8 संभावित संयोजनों (|000⟩ से |111⟩) में जटिल स्टेट वेक्टर को विस्तारित होते देखें।"
      },
      {
        title: "स्थानीय Bloch Spheres",
        desc: "देखें कि कैसे एंटैंगलमेंट बढ़ने पर Bloch Sphere वेक्टर्स केंद्र की ओर सिकुड़ते हैं, जो मिश्रित स्टेट्स को दर्शाते हैं!"
      }
    ]
  },
  kn: {
    nav_exit_workspace: "ವರ್ಕ್‌ಸ್ಪೇಸ್‌ನಿಂದ ನಿರ್ಗಮಿಸಿ",
    nav_theory: "ಉದ್ದೇಶ ಮತ್ತು ಸಿದ್ಧಾಂತ",
    nav_playground: "ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಲ್ಯಾಬ್",
    nav_activities: "ಸಂಯೋಗ ಚಟುವಟಿಕೆಗಳು",
    nav_quiz: "ಮೌಲ್ಯೀಕರಣ ರಸಪ್ರಶ್ನೆ",
    title_basics: "ಪ್ರಯೋಗ 1.2",
    hero_title: "Bell State Entanglement",
    hero_sub: "ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ವ್ಯವಸ್ಥೆಗಳು, ಐನ್‌ಸ್ಟೈನ್-ಪೋಡೋಲ್ಸ್ಕಿ-ರೋಸೆನ್ (EPR) ಪರಸ್ಪರ ಸಂಬಂಧವನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ಗೇಟ್‌ಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಗರಿಷ್ಠ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಹೊಂದಿರುವ Bell ಸ್ಟೇಟ್‌ಗಳನ್ನು ನಿರ್ಮಿಸಿ.",
    btn_start_learning: "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ",
    btn_launch_playground: "ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ ಪ್ಲೇಗ್ರೌಂಡ್",
    card_superposition_title: "Quantum Entanglement",
    card_superposition_desc: "ಕಣಗಳ ಜೋಡಿಗಳು ಅಥವಾ ಗುಂಪುಗಳು ಸ್ಟೇಟ್‌ಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುವ ಭೌತಿಕ ವಿದ್ಯಮಾನ, ಇದರಿಂದ ಒಂದನ್ನು ಇನ್ನೊಂದರಿಂದ ಸ್ವತಂತ್ರವಾಗಿ ವಿವರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.",
    card_nocloning_title: "ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ಆಪರೇಟರ್ಸ್",
    card_nocloning_desc: "ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಸ್ಟೇಟ್‌ಗಳನ್ನು ರಚಿಸಲು ಮತ್ತು ರಿವರ್ಸಿಬಲ್ ಕ್ಲಾಸಿಕಲ್ ಗೇಟ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್‌ಗಳ ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುವ CNOT, SWAP, ಮತ್ತು Toffoli ನಂತಹ ಕಾರ್ಯಾಚರಣೆಗಳು.",
    card_measurement_title: "EPR Paradox",
    card_measurement_desc: "ಕ್ಲಾಸಿಕಲ್ ಲೋಕಲ್ ರಿಯಲಿಸಂ ಅನ್ನು ಸವಾಲು ಮಾಡುವ ಪ್ರಸಿದ್ಧ ಆಲೋಚನಾ ಪ್ರಯೋಗ, ಒಂದು ಕ್ಯೂಬಿಟ್ ಅನ್ನು ಅಳೆಯುವುದರಿಂದ ಇನ್ನೊಂದರ ಸ್ಟೇಟ್ ತಕ್ಷಣ ತಿಳಿಯುತ್ತದೆ ಎಂಬುದನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.",
    section_title: "ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್‌ನ ಅಡಿಪಾಯ",
    section_sub: "ಸಕ್ರಿಯ ಪ್ರಯೋಗಾಲಯ ಸಿಮ್ಯುಲೇಟರ್‌ಗೆ ಮುಂದುವರಿಯುವ ಮುನ್ನ ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ವ್ಯವಸ್ಥೆಗಳ ಸೈದ್ಧಾಂತಿಕ ತತ್ವಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
    quick_summary: "ತ್ವರಿತ ಸಾರಾಂಶ",
    concept_kicker: "ಪರಿಕಲ್ಪನೆ",
    concept_of: "ರ",
    table_gate: "Gate",
    table_inputs: "ಇನ್‌ಪುಟ್‌ಗಳು",
    table_outputs: "ಔಟ್‌ಪುಟ್‌ಗಳು",
    math_vector_title: "2-ಕ್ಯೂಬಿಟ್ ಸ್ಟೇಟ್ ವೆಕ್ಟರ್ ಪ್ರಾತಿನಿಧ್ಯ",
    math_vector_def: "ಸಾಮಾನ್ಯ ಸ್ಟೇಟ್ ಪ್ರಾತಿನಿಧ್ಯ",
    math_vector_constraint: "ಸಾಮಾನ್ಯೀಕರಣದ ನಿರ್ಬಂಧ",
    math_vector_desc: "ಎರಡು-ಕ್ಯೂಬಿಟ್ ಸ್ಟೇಟ್ 4-ಆಯಾಮದ ಕಾಂಪ್ಲೆಕ್ಸ್ ಸ್ಪೇಸ್‌ನಲ್ಲಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ, ಇದನ್ನು ಕಂಪ್ಯೂಟೇಶನಲ್ ಬೇಸಿಸ್ ಸ್ಟೇಟ್‌ಗಳಾದ |00⟩, |01⟩, |10⟩, ಮತ್ತು |11⟩ ಪ್ರತಿನಿಧಿಸುತ್ತವೆ.",
    cta_title: "ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಸ್ಟೇಟ್‌ಗಳನ್ನು ರಚಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    cta_desc: "ಸಿಮ್ಯುಲೇಟರ್ ವರ್ಕ್‌ಸ್ಪೇಸ್‌ಗೆ ಪ್ರವೇಶಿಸಿ. ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ಟೈಮ್‌ಲೈನ್‌ಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ, Bell ಸ್ಟೇಟ್ ಸವಾಲುಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ ಮತ್ತು ಲೈವ್ ಸ್ಟೇಟ್ ವೆಕ್ಟರ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
    cta_btn_playground: "ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಲ್ಯಾಬ್‌ಗೆ ಪ್ರವೇಶಿಸಿ",
    cta_btn_top: "ಮೇಲಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    builder_title: "ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್",
    builder_sub: "ಗೇಟ್‌ಗಳನ್ನು 3-ಕ್ಯೂಬಿಟ್ ಟೈಮ್‌ಲೈನ್‌ಗೆ ಎಳೆಯಿರಿ, ಪ್ರೋಬಾಬಿಲಿಟಿ ಆಂಪ್ಲಿಟ್ಯೂಡ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ office ಮತ್ತು Bell ಸ್ಟೇಟ್ ಸವಾಲುಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.",
    btn_guided_tour: "ಮಾರ್ಗದರ್ಶಿ ಪ್ರವಾಸ",
    btn_clear_circuit: "ಟೈಮ್‌ಲೈನ್ ಮರುಹೊಂದಿಸಿ",
    toolbox_title: "ಆಪರೇಟರ್ಸ್ ಟೂಲ್‌ಬಾಕ್ಸ್",
    toolbox_desc: "ಗೇಟ್‌ಗಳನ್ನು ಸ್ಲಾಟ್‌ಗಳಿಗೆ ಎಳೆಯಿರಿ. H ಮತ್ತು Pauli ಗೇಟ್‌ಗಳು ಸಿಂಗಲ್-ಕ್ಯೂಬಿಟ್ ಆಗಿವೆ. CNOT, SWAP, ಮತ್ತು CCX ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ಆಗಿವೆ.",
    timeline_title: "ಸರ್ಕಿಟ್ ಟೈಮ್‌ಲೈನ್",
    timeline_desc: "ಗೇಟ್‌ಗಳನ್ನು ಸ್ಲಾಟ್‌ಗಳಿಗೆ ಎಳೆಯಿರಿ. CNOT ಗಾಗಿ q0 ನಿಯಂತ್ರಕ ಮತ್ತು q1 ಗುರಿಯಾಗಿದೆ, CNOT12 ಗಾಗಿ q1 ನಿಯಂತ್ರಕ ಮತ್ತು q2 ಗುರಿಯಾಗಿದೆ, ಮತ್ತು Toffoli ಗಾಗಿ q0, q1 ನಿಯಂತ್ರಕಗಳಾಗಿದ್ದು q2 ಗುರಿಯಾಗಿದೆ.",
    bloch_title: "ವೈಯಕ್ತಿಕ Bloch Spheres",
    bloch_desc: "ಕ್ಯೂಬಿಟ್‌ಗಳು ಗರಿಷ್ಠ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಹೊಂದಿರುವಾಗ ಸ್ಥಳೀಯ Bloch ವೆಕ್ಟರ್‌ಗಳು ಶೂನ್ಯಕ್ಕೆ ಕುಗ್ಗುವುದನ್ನು ಗಮನಿಸಿ (ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಏಕಪತ್ನಿತ್ವ).",
    histogram_title: "ಸ್ಟೇಟ್ ಪ್ರೋಬಾಬಿಲಿಟಿಗಳು",
    histogram_desc: "8 ಕಂಪ್ಯೂಟೇಶನಲ್ ಬೇಸಿಸ್ ಸ್ಟೇಟ್‌ಗಳಲ್ಲಿ (|000⟩ ರಿಂದ |111\rangle) ಲೈವ್ ಮಾಪನ ಪ್ರೋಬಾಬಿಲಿಟಿಗಳು.",
    btn_go_quiz: "ರಸಪ್ರಶ್ನೆಗೆ ಹೋಗಿ",
    quiz_title: "ಮೌಲ್ಯೀಕರಣ ರಸಪ್ರಶ್ನೆ",
    quiz_time_left: "ಉಳಿದಿದೆ",
    quiz_next_question: "ಮುಂದಿನ ಪ್ರಶ್ನೆ",
    quiz_submit_results: "ಫಲಿತಾಂಶಗಳನ್ನು ಸಲ್ಲಿಸಿ",
    quiz_passed_title: "ಮೌಲ್ಯೀಕರಣ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    quiz_passed_desc: "ನೀವು {score}/10 ಅಂಕಗಳನ್ನು ಗಳಿಸಿದ್ದೀರಿ. ಅತ್ಯುತ್ತಮ! Bell ಸ್ಟೇಟ್ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಪ್ರಯೋಗದ ರಸಪ್ರಶ್ನೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ. ನಿಮ್ಮ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಕೆಳಗೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.",
    btn_download_report: "ಲ್ಯಾಬ್ ವರದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    btn_download_cert: "ಪ್ರಮಾಣಪತ್ರ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    btn_back_dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
    quiz_failed_title: "ಪಾಸಿಂಗ್ ಗ್ರೇಡ್ ಅಗತ್ಯವಿದೆ",
    quiz_failed_desc: "ನೀವು {score}/10 ಅಂಕಗಳನ್ನು ಗಳಿಸಿದ್ದೀರಿ. ಪಾಸಾಗಲು 10/10 ರ ಪರಿಪೂರ್ಣ ಅಂಕಗಳ ಅಗತ್ಯವಿದೆ. ದಯವಿಟ್ಟು ಸಿದ್ಧಾಂತದ ಸ್ಲೈಡ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ!",
    btn_retake_quiz: "ರಸಪ್ರಶ್ನೆ ಮತ್ತೆ ತೆಗೆದುಕೊಳ್ಳಿ",
    btn_scroll_section: "ಸಿದ್ಧಾಂತ ಕಲಿಯಿರಿ",
    guided_tour_title: "ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್ ಪ್ರವಾಸ",
    guided_tour_step: "ಹಂತ",
    guided_tour_of: "ರ",
    btn_next: "ಮುಂದೆ",
    btn_back: "ಹಿಂದೆ",
    btn_finish: "ಮುಕ್ತಾಯಗೊಳಿಸಿ",
    btn_skip: "ಸ್ಕಿಪ್",
    btn_done: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    note_drag: "ಎಳೆಯಿರಿ",
    note_click: "ಕ್ಲಿಕ್ ಮಾಡಿ",
    builder_state_vector: "ಸ್ಟೇಟ್ ವೆಕ್ಟರ್ ಆಂಪ್ಲಿಟ್ಯೂಡ್‌ಗಳು",

    activity_title: "Bell ಸ್ಟೇಟ್ ಇಂಜಿನಿಯರಿಂಗ್ ಚಟುವಟಿಕೆಗಳು",
    activity_desc: "ಗರಿಷ್ಠ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಹೊಂದಿರುವ ಸ್ಟೇಟ್ ರಚಿಸಲು ಸರ್ಕಿಟ್ ಟೈಮ್‌ಲೈನ್‌ನಲ್ಲಿ ಗೇಟ್‌ಗಳನ್ನು ಇರಿಸಿ. ಸವಾಲನ್ನು ಲೋಡ್ ಮಾಡಲು ಲೋಡ್ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    activity_target: "ಗುರಿ ಸ್ಟೇಟ್",
    activity_current: "ಪ್ರಸ್ತುತ ಸರ್ಕಿಟ್ ಸ್ಟೇಟ್",
    activity_match: "ಸ್ಟೇಟ್ ಮ್ಯಾಚ್ ಮೌಲ್ಯೀಕರಿಸಲಾಗಿದೆ! ಅದ್ಭುತ ಕೆಲಸ!",
    activity_not_match: "ಸರ್ಕಿಟ್ ಗುರಿ ಸ್ಟೇಟ್‌ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ. ಬದಲಾಯಿಸುವುದನ್ನು ಮುಂದುವರಿಸಿ!",
    activity_phi_plus: "ಸವಾಲು 1: |Φ⁺⟩ = (|00⟩ + |11⟩)/√2 ನಿರ್ಮಿಸಿ",
    activity_phi_minus: "ಸವಾಲು 2: |Φ⁻⟩ = (|00⟩ - |11⟩)/√2 ನಿರ್ಮಿಸಿ",
    activity_psi_plus: "ಸವಾಲು 3: |Ψ⁺⟩ = (|01⟩ + |10⟩)/√2 ನಿರ್ಮಿಸಿ",
    activity_psi_minus: "ಸವಾಲು 4: |Ψ⁻⟩ = (|01⟩ - |10⟩)/√2 ನಿರ್ಮಿಸಿ",
    activity_psi_completed: "ಪೂರ್ಣಗೊಂಡಿದೆ!",
    activity_load_btn: "ಸವಾಲನ್ನು ಲೋಡ್ ಮಾಡಿ",

    topics: {
      "cnot-gate": {
        label: "CNOT ಗೇಟ್ ಮತ್ತು ಕಂಟ್ರೋಲ್ಡ್ ಆಪರೇಷನ್‌ಗಳು",
        tag: "ದ್ವಿ-ಕ್ಯೂಬಿಟ್ ಸ್ಟೇಟ್ ಇಂಜಿನಿಯರಿಂಗ್",
        bullets: [
          "CNOT (Controlled-X) ಗೇಟ್ ನಿಯಂತ್ರಣ ಕ್ಯೂಬಿಟ್ |1⟩ ಆಗಿದ್ದಾಗ ಗುರಿ ಕ್ಯೂಬಿಟ್‌ಗೆ Pauli-X (NOT) ಅನ್ನು ಅನ್ವಯಿಸುತ್ತದೆ.",
          "ಇದು ಕ್ವಾಂಟಮ್ ನೆಟ್‌ವರ್ಕ್‌ಗಳಲ್ಲಿ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಕಾರ್ಯಾಚರಣೆಗಳಿಗೆ ಒಂದು ಮೂಲಭೂತ ಬಿಲ್ಡಿಂಗ್ ಬ್ಲಾಕ್ ಆಗಿದೆ.",
          "ಗಣಿತದ ಪ್ರಕಾರ, ಇದು ಮ್ಯಾಪಿಂಗ್ ಮಾಡುತ್ತದೆ: |c⟩|t⟩ -> |c⟩|t ⊕ c⟩."
        ],
        description: "CNOT ಗೇಟ್ ಎರಡು ಕ್ಯೂಬಿಟ್‌ಗಳ ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಇದನ್ನು ಸಿಂಗಲ್-ಕ್ಯೂಬಿಟ್ Hadamard ಗೇಟ್ (H) ನೊಂದಿಗೆ ಸಂಯೋಜಿಸಿದಾಗ, ಇದು ಉತ್ಪನ್ನ ಸ್ಟೇಟ್‌ಗಳನ್ನು ಪರಸ್ಪರ ಸಂಬಂಧ ಹೊಂದಿರುವ ಸ್ಟೇಟ್‌ಗಳಾಗಿ ಮ್ಯಾಪ್ ಮಾಡುವ ಮೂಲಕ ಕ್ವಾಂಟಮ್ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಅನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ.",
        table: {
          title: "CNOT (ಕಂಟ್ರೋಲ್ q0, ಟಾರ್ಗೆಟ್ q1) ಆಕ್ಷನ್ ಟೇಬಲ್",
          rows: [
            { gate: "CNOT", inputs: "|00⟩", outputs: "|000⟩" },
            { gate: "CNOT", inputs: "|01⟩", outputs: "|011⟩" },
            { gate: "CNOT", inputs: "|10⟩", outputs: "|010⟩" },
            { gate: "CNOT", inputs: "|11⟩", outputs: "|001⟩" }
          ]
        }
      },
      "bell-states": {
        label: "ನಾಲ್ಕು ಗರಿಷ್ಠ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಹೊಂದಿರುವ Bell ಸ್ಟೇಟ್‌ಗಳು",
        tag: "EPR ಜೋಡಿಗಳು ಮತ್ತು ಗರಿಷ್ಠ ಪರಸ್ಪರ ಸಂಬಂಧ",
        bullets: [
          "Bell ಸ್ಟೇಟ್‌ಗಳು 2-ಕ್ಯೂಬಿಟ್ ಸಿಸ್ಟಮ್‌ಗಳಿಗೆ ಗರಿಷ್ಠ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಅನ್ನು ಪ್ರತಿನಿಧಿಸುವ ಆರ್ಥೋನಾರ್ಮಲ್ ಬೇಸಿಸ್ ಅನ್ನು ರೂಪಿಸುತ್ತವೆ.",
          "ಒಂದು Bell ಜೋಡಿಯ ಒಂದು ಕ್ಯೂಬಿಟ್ ಅನ್ನು ಅಳೆಯುವುದರಿಂದ ಅದು ಯಾದೃಚ್ಛಿಕ ಫಲಿತಾಂಶಕ್ಕೆ (0 ಅಥವಾ 1) ಕುಸಿಯುತ್ತದೆ ಮತ್ತು ತಕ್ಷಣವೇ ಇನ್ನೊಂದು ಕ್ಯೂಬಿಟ್ ಅದೇ ಫಲಿತಾಂಶ ಪಡೆಯುವಂತೆ ಒತ್ತಾಯಿಸುತ್ತದೆ.",
          "ಅವುಗಳನ್ನು ಎರಡು ಸ್ವತಂತ್ರ ಸಿಂಗಲ್-ಕ್ಯೂಬಿಟ್ ಸ್ಟೇಟ್‌ಗಳ ಟೆನ್ಸರ್ ಉತ್ಪನ್ನವಾಗಿ ಅಪವರ್ತನಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ."
        ],
        description: "ಗರಿಷ್ಠ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಹೊಂದಿರುವ ಜೋಡಿಗಳು, ಅಥವಾ EPR ಜೋಡಿಗಳು, ಕ್ಲಾಸಿಕಲ್ ಮಿತಿಗಳನ್ನು ಮೀರಿದ ಪರಸ್ಪರ ಸಂಬಂಧವನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತವೆ. ಅವುಗಳನ್ನು ಹೀಗೆ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ: |Φ⁺⟩ = (|00⟩+|11⟩)/√2, |Φ⁻⟩ = (|00⟩-|11⟩)/√2, |Ψ⁺⟩ = (|01⟩+|10⟩)/√2, ಮತ್ತು |Ψ⁻⟩ = (|01⟩-|10⟩)/√2."
      },
      "swap-toffoli": {
        label: "SWAP, CCNOT (Toffoli), ಮತ್ತು ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ಗೇಟ್‌ಗಳು",
        tag: "ರಿವರ್ಸಿಬಲ್ ಕಂಪ್ಯೂಟೇಶನ್ ಮತ್ತು ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ಸರ್ಕಿಟ್‌ಗಳು",
        bullets: [
          "SWAP ಗೇಟ್ ಎರಡು ಕ್ಯೂಬಿಟ್‌ಗಳ ಸ್ಟೇಟ್‌ಗಳನ್ನು ಪರಸ್ಪರ ಬದಲಾಯಿಸುತ್ತದೆ: |q0 q1⟩ -> |q1 q0⟩.",
          "Toffoli (CCNOT) ಗೇಟ್ 3-ಕ್ಯೂಬಿಟ್ ಗೇಟ್ ಆಗಿದ್ದು, ಎರಡೂ ನಿಯಂತ್ರಣ ಕ್ಯೂಬಿಟ್‌ಗಳು |11⟩ ಸ್ಟೇಟ್‌ನಲ್ಲಿದ್ದಾಗ ಮಾತ್ರ ಗುರಿ ಕ್ಯೂಬಿಟ್ ಅನ್ನು ಫ್ಲಿಪ್ ಮಾಡುತ್ತದೆ.",
          "ಕ್ಲಾಸಿಕಲ್ ರಿವರ್ಸಿಬಲ್ ಕಂಪ್ಯೂಟೇಶನ್‌ಗೆ Toffoli ಒಂದು ಸಾರ್ವತ್ರಿಕ ಗೇಟ್ ಆಗಿದೆ, ಅಂದರೆ ಯಾವುದೇ ಕ್ಲಾಸಿಕಲ್ ಸರ್ಕಿಟ್ ಅನ್ನು ಇದನ್ನು ಬಳಸಿ ನಿರ್ಮಿಸಬಹುದು."
        ],
        description: "SWAP ಮತ್ತು CCNOT ಗೇಟ್‌ಗಳು ರೂಟಿಂಗ್ ಮತ್ತು ಮಲ್ಟಿ-ಕಂಡೀಷನ್ ಹೊಂದಿರುವ ಬೂಲಿಯನ್ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ಅನುಮತಿಸುತ್ತವೆ. ಟೈಮ್‌ಲೈನ್‌ನಲ್ಲಿ, SWAP q0 ಮತ್ತು q1 ಅನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ, ಆದರೆ CCNOT (CCX) q2 ಅನ್ನು ಗುರಿಯಾಗಿಸಲು q0 and q1 ಅನ್ನು ಕಂಟ್ರೋಲ್ ಆಗಿ ಬಳಸುತ್ತದೆ."
      },
      "entanglement-applications": {
        label: "ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್‌ನ ನೈಜ-ಪ್ರಪಂಚದ ಅನ್ವಯಗಳು",
        tag: "ಕ್ವಾಂಟಮ್ ಪ್ರೋಟೋಕಾಲ್‌ಗಳು ಮತ್ತು ತಂತ್ರಜ್ಞಾನಗಳು",
        bullets: [
          "ಕ್ವಾಂಟಮ್ ಕೀ ವಿತರಣೆ (QKD): ಹಂಚಿಕೆಯಾದ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಜೋಡಿಗಳು E91 ಪ್ರೋಟೋಕಾಲ್ ಮೂಲಕ ಸುರಕ್ಷಿತ ಕ್ರಿಪ್ಟೋಗ್ರಾಫಿಕ್ ಕೀ ವಿತರಣೆಯನ್ನು ಅನುಮತಿಸುತ್ತದೆ.",
          "ಕ್ವಾಂಟಮ್ ಟೆಲಿಪೋರ್ಟೇಶನ್: ಹಂಚಿಕೆಯಾದ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಮತ್ತು ಕ್ಲಾಸಿಕಲ್ ಚಾನಲ್‌ಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಅಜ್ಞಾತ ಸ್ಟೇಟ್‌ಗಳನ್ನು ವರ್ಗಾಯಿಸುತ್ತದೆ.",
          "ಸೂಪರ್‌ಡೆನ್ಸ್ ಕೋಡಿಂಗ್: ಕೇವಲ ಒಂದು ಭೌತಿಕ ಕ್ಯೂಬಿಟ್ ಬಳಸಿ ಎರಡು ಕ್ಲಾಸಿಕಲ್ ಬಿಟ್‌ಗಳ ಮಾಹಿತಿಯನ್ನು ರವಾನಿಸಲು ಅನುಮತಿಸುತ್ತದೆ."
        ],
        description: "ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಆಧುನಿಕ ಕ್ವಾಂಟಮ್ ನೆಟ್‌ವರ್ಕಿಂಗ್ ಮತ್ತು ಕಂಪ್ಯೂಟಿಂಗ್ ಪ್ರೋಟೋಕಾಲ್‌ಗಳನ್ನು ಚಾಲನೆ ಮಾಡುವ ಪ್ರಮುಖ ಸಂಪನ್ಮೂಲವಾಗಿದೆ. ಇದು ವಿತರಿಸಿದ ಕ್ವಾಂಟಮ್ ನೆಟ್‌ವರ್ಕ್‌ಗಳು, ಸಿಂಕ್ರೊನೈಸೇಶನ್ ಮತ್ತು ಸುರಕ್ಷಿತ ರೂಟಿಂಗ್‌ಗೆ ಭೌತಿಕ ಬೆನ್ನೆಲುಬಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ."
      }
    },
    quiz_questions: [
      {
        q: "ಪ್ರಾರಂಭದ ಸ್ಟೇಟ್ |00⟩ ಯಿಂದ ಪ್ರಮಾಣಿತ Bell ಸ್ಟೇಟ್ |Φ⁺⟩ ನಿರ್ಮಿಸಲು ಯಾವ ಗೇಟ್ ಸಂಯೋಜನೆಯನ್ನು ಬಳಸಲಾಗುತ್ತದೆ?",
        options: [
          "q0 ಮೇಲೆ H, ನಂತರ CNOT (q0 ರಿಂದ q1)",
          "CNOT (q0 ರಿಂದ q1), ನಂತರ q0 ಮೇಲೆ H",
          "q0 ಮೇಲೆ H, q1 ಮೇಲೆ H",
          "q0 ಮೇಲೆ X, ನಂತರ q1 ಮೇಲೆ H"
        ]
      },
      {
        q: "ಗರಿಷ್ಠ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಹೊಂದಿರುವ 2-ಕ್ಯೂಬಿಟ್ ಸ್ಟೇಟ್‌ನ ಪ್ರಮುಖ ಲಕ್ಷಣ ಯಾವುದು?",
        options: [
          "ಇದನ್ನು ಎರಡು ಸ್ವತಂತ್ರ ಸಿಂಗಲ್-ಕ್ಯೂಬಿಟ್ ಸ್ಟೇಟ್‌ಗಳ ಟೆನ್ಸರ್ ಉತ್ಪನ್ನವಾಗಿ ಅಪವರ್ತನಗೊಳಿಸಬಹುದು",
          "ಇದನ್ನು ವೈಯಕ್ತಿಕ ಸಿಂಗಲ್-ಕ್ಯೂಬಿಟ್ ಉತ್ಪನ್ನ ಸ್ಟೇಟ್‌ಗಳಾಗಿ ಅಪವರ್ತನಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ",
          "ಒಂದು ಕ್ಯೂಬಿಟ್ ಅಳೆಯುವುದರಿಂದ ಎರಡನೇ ಕ್ಯೂಬಿಟ್ ಬಗ್ಗೆ ಯಾವುದೇ ಮಾಹಿತಿ ಸಿಗುವುದಿಲ್ಲ",
          "ಇದು ಶೂನ್ಯ ಸೂಪರ್‌ಪೊಸಿಷನ್ ಘಟಕಗಳನ್ನು ಹೊಂದಿದೆ"
        ]
      },
      {
        q: "CNOT ಗೇಟ್‌ಗಾಗಿ, ನಿಯಂತ್ರಣ ಕ್ಯೂಬಿಟ್ q0 (|0⟩ + |1⟩)/√2 ಸ್ಟೇಟ್‌ನಲ್ಲಿದ್ದರೆ ಮತ್ತು ಗುರಿ q1 |0⟩ ಸ್ಟೇಟ್‌ನಲ್ಲಿದ್ದರೆ, ಔಟ್‌ಪುಟ್ ಸ್ಟೇಟ್ ಯಾವುದು?",
        options: [
          "(|00⟩ + |10⟩)/√2",
          "(|00⟩ + |11⟩)/√2",
          "(|01⟩ + |10⟩)/√2",
          "|11⟩"
        ]
      },
      {
        q: "3-ಕ್ಯೂಬಿಟ್ ಸಿಸ್ಟಮ್‌ನ ಸ್ಟೇಟ್ ವೆಕ್ಟರ್ ಅನ್ನು ಎಷ್ಟು ಕಾಂಪ್ಲೆಕ್ಸ್ ಸಂಖ್ಯೆಗಳು ಪ್ರತಿನಿಧಿಸುತ್ತವೆ?",
        options: [
          "3",
          "6",
          "8",
          "16"
        ]
      },
      {
        q: "SWAP ಗೇಟ್ ಸ್ಟೇಟ್‌ಗಳನ್ನು ಪರಸ್ಪರ ಬದಲಾಯಿಸುವ ಮೂಲಕ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಸ್ಟೇಟ್ |01⟩ ಮೇಲೆ SWAP ನ ಔಟ್‌ಪುಟ್ ಏನು?",
        options: [
          "|01⟩",
          "|10⟩",
          "|11⟩",
          "|00⟩"
        ]
      },
      {
        q: "CCNOT (Toffoli) ಗೇಟ್‌ಗೆ ಎಷ್ಟು ನಿಯಂತ್ರಣ ಕ್ಯೂಬಿಟ್‌ಗಳು ಬೇಕಾಗುತ್ತವೆ?",
        options: [
          "1",
          "2",
          "3",
          "0"
        ]
      },
      {
        q: "ಎರಡು ಕ್ಯೂಬಿಟ್‌ಗಳು ಗರಿಷ್ಠ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಹೊಂದಿರುವ Bell ಸ್ಟೇಟ್‌ನಲ್ಲಿದ್ದರೆ, ಅವುಗಳ ಸ್ಥಳೀಯ Bloch Spheres ಗೆ ಏನಾಗುತ್ತದೆ?",
        options: [
          "ಅವು ಸಾಮಾನ್ಯ ಗಾತ್ರಕ್ಕಿಂತ ದುಪ್ಪಟ್ಟು ವಿಸ್ತರಿಸುತ್ತವೆ",
          "ಅವು Z ಅಕ್ಷದ ಮೇಲೆ ವಿರುದ್ಧ ದಿಕ್ಕಿನಲ್ಲಿ ಸೂಚಿಸುತ್ತವೆ",
          "ಅವು ಮೂಲ ಬಿಂದುವಿನಲ್ಲಿ ಒಂದು ಬಿಂದುವಿಗೆ ಕುಗ್ಗುತ್ತವೆ (ತ್ರಿಜ್ಯ = 0)",
          "ಅವು ಧನಾತ್ಮಕ X ದಿಕ್ಕನ್ನು ಸೂಚಿಸುತ್ತವೆ"
        ]
      },
      {
        q: "(|01⟩ - |10⟩)/√2 ಮೂಲಕ ಯಾವ Bell ಸ್ಟೇಟ್ ಅನ್ನು ಪ್ರತಿನಿಧಿಸಲಾಗುತ್ತದೆ?",
        options: [
          "|Φ⁺⟩",
          "|Φ⁻⟩",
          "|Ψ⁺⟩",
          "|Ψ⁻⟩"
        ]
      },
      {
        q: "ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಅನ್ನು ಪೂರ್ಣ ಶಕ್ತಿಯಲ್ಲಿ ಅನೇಕ ಸ್ವತಂತ್ರ ವ್ಯವಸ್ಥೆಗಳ ನಡುವೆ ಹಂಚಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಿಲ್ಲ ಎಂಬ ತತ್ವವನ್ನು ಏನೆಂದು ಕರೆಯಲಾಗುತ್ತದೆ?",
        options: [
          "ನೋ-ಕ್ಲೋನಿಂಗ್ ಪ್ರಮೇಯ",
          "ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಏಕಪತ್ನಿತ್ವ (Monogamy)",
          "ಬೆಲ್ ಅಸಮಾನತೆ",
          "ಅನಿಶ್ಚಿತತೆಯ ತತ್ವ"
        ]
      },
      {
        q: "ಯಾವ ಕ್ವಾಂಟಮ್ ಸಂವಹನ ಪ್ರೋಟೋಕಾಲ್ 1 ಕ್ಯೂಬಿಟ್ ಮೂಲಕ 2 ಕ್ಲಾಸಿಕಲ್ ಬಿಟ್‌ಗಳನ್ನು ಕಳುಹಿಸಲು ಹಂಚಿಕೆಯಾದ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಅನ್ನು ಬಳಸುತ್ತದೆ?",
        options: [
          "BB84 ಪ್ರೋಟೋಕಾಲ್",
          "ಕ್ವಾಂಟಮ್ ಟೆಲಿಪೋರ್ಟೇಶನ್",
          "ಸೂಪರ್‌ಡೆನ್ಸ್ ಕೋಡಿಂಗ್",
          "B92 ಪ್ರೋಟೋಕಾಲ್"
        ]
      }
    ],
    tour_steps: [
      {
        title: "ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಲ್ಯಾಬ್‌ಗೆ ಸುಸ್ವಾಗತ!",
        desc: "ಈ ಪ್ರಯೋಗದಲ್ಲಿ, ನೀವು ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ಗೇಟ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸುತ್ತೀರಿ ಮತ್ತು ನಾಲ್ಕು ಗರಿಷ್ಠ ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಹೊಂದಿರುವ Bell ಸ್ಟೇಟ್‌ಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತೀರಿ."
      },
      {
        title: "ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ಆಪರೇಟರ್ಸ್",
        desc: "ಟೂಲ್‌ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಈಗ H, X, Y, Z, ಮತ್ತು ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ಗೇಟ್‌ಗಳಿವೆ: CNOT (CX), CNOT12 (CX12), SWAP, ಮತ್ತು CCNOT (CCX)."
      },
      {
        title: "3-ಕ್ಯೂಬಿಟ್ ಟೈಮ್‌ಲೈನ್ ವೈರ್‌ಗಳು",
        desc: "ನೀವು ಗೇಟ್‌ಗಳನ್ನು ಮೂರು ಕ್ಯೂಬಿಟ್ ಟೈಮ್‌ಲೈನ್‌ಗಳಿಗೆ ಎಳೆಯಬಹುದು ಮತ್ತು ಬಿಡಬಹುದು: q0, q1, ಮತ್ತು q2. ಮಲ್ಟಿ-ಕ್ಯೂಬಿಟ್ ಗೇಟ್‌ಗಳು ಪಕ್ಕದ ಕಂಟ್ರೋಲ್ ಚಾನಲ್‌ಗಳನ್ನು ಬಳಸಿ ರನ್ ಆಗುತ್ತವೆ."
      },
      {
        title: "Bell ಸ್ಟೇಟ್ ಇಂಜಿನಿಯರಿಂಗ್ ಚಟುವಟಿಕೆಗಳು",
        desc: "Bell ಸ್ಟೇಟ್ ಸವಾಲನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ಈ ಪ್ಯಾನೆಲ್ ಬಳಸಿ. ನಿಮ್ಮ ಸರ್ಕಿಟ್ ಸರಿಯಾದ ಗಣಿತದ ಗುರಿಯನ್ನು ನಿರ್ಮಿಸುತ್ತದೆಯೇ ಎಂದು ಮೌಲ್ಯೀಕರಿಸಲಾಗುತ್ತದೆ."
      },
      {
        title: "8-ಸ್ಟೇಟ್ ಆಂಪ್ಲಿಟ್ಯೂಡ್ ಗ್ರಿಡ್",
        desc: "ನೈಜ ಸಮಯದಲ್ಲಿ ಎಲ್ಲಾ 8 ಸಂಭಾವ್ಯ ಸಂಯೋಜನೆಗಳಲ್ಲಿ (|000⟩ ರಿಂದ |111⟩) ಸ್ಟೇಟ್ ವೆಕ್ಟರ್ ವಿಸ್ತರಿಸುವುದನ್ನು ವೀಕ್ಷಿಸಿ."
      },
      {
        title: "ಸ್ಥಳೀಯ Bloch Spheres",
        desc: "ಎಂಟ್ಯಾಂಗಲ್‌ಮೆಂಟ್ ಹೆಚ್ಚಾದಂತೆ Bloch Sphere ವೆಕ್ಟರ್‌ಗಳು ಕೇಂದ್ರದ ಕಡೆಗೆ ಹೇಗೆ ಕುಗ್ಗುತ್ತವೆ ಎಂಬುದನ್ನು ಗಮನಿಸಿ, ಇದು ಮಿಶ್ರಿತ ಸ್ಟೇಟ್‌ಗಳನ್ನು ವಿವರಿಸುತ್ತದೆ!"
      }
    ]
  },
  ta: {
    nav_exit_workspace: "வேலைப்பகுதியிலிருந்து வெளியேறு",
    nav_theory: "நோக்கம் & கோட்பாடு",
    nav_playground: "என்டேங்கிள்மென்ட் லேப்",
    nav_activities: "சிக்கல் செயல்பாடுகள்",
    nav_quiz: "மதிப்பீட்டு வினாடி வினா",
    title_basics: "பரிசோதனை 1.2",
    hero_title: "Bell State Entanglement",
    hero_sub: "மல்டி-க்யூபிட் அமைப்புகள், ஐன்ஸ்டீன்-போடோல்ஸ்கி-ரோசன் (EPR) தொடர்பு ஆகியவற்றை ஆராய்ந்து, மல்டி-க்யூபிட் கேட்களைப் பயன்படுத்தி அதிகபட்சமாக என்டேங்கிள் செய்யப்பட்ட Bell ஸ்டேட்களை உருவாக்குங்கள்.",
    btn_start_learning: "கற்க தொடங்குங்கள்",
    btn_launch_playground: "சாண்ட்பாக்ஸ் விளையாட்டு மைதானம்",
    card_superposition_title: "Quantum Entanglement",
    card_superposition_desc: "துகள்களின் ஜோடிகள் அல்லது குழுக்கள் ஸ்டேட்களைப் பகிர்ந்து கொள்ளும் ஒரு பௌதிக நிகழ்வு, இதனால் ஒன்றை மற்றொன்றிலிருந்து சுயாதீனமாக விவரிக்க முடியாது.",
    card_nocloning_title: "மல்டி-க்யூபிட் ஆபரேட்டர்கள்",
    card_nocloning_desc: "என்டேங்கிள் செய்யப்பட்ட ஸ்டேட்களை உருவாக்கவும், மீளக்கூடிய கிளாசிக்கல் கேட்களை இயக்கவும் மல்டி-க்யூபிட்களில் செயல்படும் CNOT, SWAP, மற்றும் Toffoli போன்ற செயல்பாடுகள்.",
    card_measurement_title: "EPR Paradox",
    card_measurement_desc: "கிளாசிக்கல் உள்ளூர் யதார்த்தவாதத்திற்கு சவால் விடும் புகழ்பெற்ற சிந்தனை பரிசோதனை, ஒரு க்யூபிட்டை அளவிடுவது மற்றொன்றின் ஸ்டேட்டை உடனடியாக வெளிப்படுத்துகிறது என்பதை காட்டுகிறது.",
    section_title: "என்டேங்கிள்மென்ட்டின் அடித்தளங்கள்",
    section_sub: "செயலில் உள்ள ஆய்வக சிமுலேட்டருக்குச் செல்வதற்கு முன் மல்டி-க்யூபிட் அமைப்புகளின் கோட்பாட்டு கொள்கைகளை மதிப்பாய்வு செய்யவும்.",
    quick_summary: "விரைவான சுருக்கம்",
    concept_kicker: "கருத்து",
    concept_of: "இன்",
    table_gate: "Gate",
    table_inputs: "உள்ளீடுகள்",
    table_outputs: "வெளியீடுகள்",
    math_vector_title: "2-க்யூபிட் ஸ்டேட் வெக்டர் பிரதிநிதித்துவம்",
    math_vector_def: "பொதுவான ஸ்டேட் பிரதிநிதித்துவம்",
    math_vector_constraint: "சாதாரணமாக்கல் கட்டுப்பாடு",
    math_vector_desc: "ஒரு இரு-க்யூபிட் ஸ்டேட் 4-பரிமாண சிக்கலான இடத்தில் உள்ளது, இது கணக்கீட்டு அடிப்படை ஸ்டேட்களான |00⟩, |01⟩, |10⟩, மற்றும் |11⟩ ஆகியவற்றால் குறிக்கப்படுகிறது.",
    cta_title: "என்டேங்கிள் செய்யப்பட்ட ஸ்டேட்களை உருவாக்க தயாரா?",
    cta_desc: "சிமுலேட்டர் வேலைப்பகுதிக்குள் நுழையுங்கள். மல்டி-க்யூபிட் காலக்கெடுவை உள்ளமைக்கவும், Bell ஸ்டேட் சவால்களை முடிக்கவும், மற்றும் நேரடி ஸ்டேட் வெக்டர்களைக் காணவும்.",
    cta_btn_playground: "என்டேங்கிள்மென்ட் லேபிற்குள் நுழையுங்கள்",
    cta_btn_top: "மேலே செல்",
    builder_title: "மல்டி-க்யூபிட் பில்டர் சாண்ட்பாக்ஸ்",
    builder_sub: "கேட்களை 3-க்யூபிட் காலக்கெடுவிற்கு இழுக்கவும், நிகழ்தகவு வீச்சுகளைக் காணவும், மற்றும் Bell ஸ்டேட் சவால்களை முடிக்கவும்.",
    btn_guided_tour: "வழிகாட்டுதல் பயணம்",
    btn_clear_circuit: "காலக்கெடுவை மீட்டமை",
    toolbox_title: "ஆபரேட்டர்கள் கருவிப்பெட்டி",
    toolbox_desc: "கேட்களை இடங்களுக்கு இழுக்கவும். H மற்றும் Pauli கேட்கள் சிங்கிள்-க்யூபிட் ஆகும். CNOT, SWAP, மற்றும் CCX ஆகியவை மல்டி-க்யூபிட் ஆகும்.",
    timeline_title: "சுற்று காலக்கோடு",
    timeline_desc: "கேட்களை இடங்களுக்கு இழுக்கவும். CNOT க்கு q0 கட்டுப்பாட்டு மற்றும் q1 இலக்காகும், CNOT12 க்கு q1 கட்டுப்பாட்டு மற்றும் q2 இலக்காகும், மற்றும் Toffoli க்கு q0, q1 கட்டுப்பாட்டு மற்றும் q2 இலக்காகும்.",
    bloch_title: "தனிப்பட்ட Bloch Spheres",
    bloch_desc: "க்யூபிட்கள் அதிகபட்சமாக என்டேங்கிள் செய்யப்படும்போது உள்ளூர் Bloch வெக்டர்கள் பூஜ்ஜியமாக சுருங்குவதை கவனியுங்கள் (என்டேங்கிள்மென்ட் ஏகபத்தினித்துவம்).",
    histogram_title: "ஸ்டேட் நிகழ்தகவுகள்",
    histogram_desc: "8 கணக்கீட்டு அடிப்படை ஸ்டேட்களில் (|000⟩ முதல் |111\rangle) நேரடி அளவீட்டு நிகழ்தகவுகள்.",
    btn_go_quiz: "வினாடி வினாவிற்கு செல்லவும்",
    quiz_title: "மதிப்பீட்டு வினாடி வினா",
    quiz_time_left: "மீதமுள்ளது",
    quiz_next_question: "அடுத்த கேள்வி",
    quiz_submit_results: "முடிவுகளை சமர்ப்பிக்கவும்",
    quiz_passed_title: "மதிப்பீடு முடிந்தது!",
    quiz_passed_desc: "நீங்கள் {score}/10 மதிப்பெண் பெற்றுள்ளீர்கள். சிறந்தது! Bell ஸ்டேட் என்டேங்கிள்மென்ட் பரிசோதனையின் வினாடி வினாவை வெற்றிகரமாக முடித்துவிட்டீர்கள். உங்கள் சான்றிதழ்களை கீழே பதிவிறக்கவும்.",
    btn_download_report: "ஆய்வக அறிக்கையை பதிவிறக்கவும்",
    btn_download_cert: "சான்றிதழை பதிவிறக்கவும்",
    btn_back_dashboard: "டாஷ்போர்டிற்கு திரும்பு",
    quiz_failed_title: "தேர்ச்சி மதிப்பெண் தேவை",
    quiz_failed_desc: "நீங்கள் {score}/10 மதிப்பெண் பெற்றுள்ளீர்கள். தேர்ச்சி பெற 10/10 முழுமையான மதிப்பெண் தேவை. தயவுசெய்து கோட்பாட்டு ஸ்லைடுகளை மதிப்பாய்வு செய்து மீண்டும் முயற்சிக்கவும்!",
    btn_retake_quiz: "வினாடி வினாவை மீண்டும் எழுதுக",
    btn_scroll_section: "கோட்பாடு கற்கவும்",
    guided_tour_title: "சாண்ட்பாக்ஸ் பயணம்",
    guided_tour_step: "படி",
    guided_tour_of: "இன்",
    btn_next: "அடுத்து",
    btn_back: "முந்தைய",
    btn_finish: "முடிக்கவும்",
    btn_skip: "தவிர்",
    btn_done: "முடிந்தது",
    note_drag: "இழுக்கவும்",
    note_click: "கிளிக் செய்க",
    builder_state_vector: "ஸ்டேட் வெக்டர் வீச்சுகள்",

    activity_title: "Bell ஸ்டேட் பொறியியல் செயல்பாடுகள்",
    activity_desc: "அதிகபட்சமாக என்டேங்கிள் செய்யப்பட்ட ஸ்டேட்டை உருவாக்க சுற்று காலக்கோட்டில் கேட்களை வைக்கவும். சவாலை ஏற்ற லோடு கிளிக் செய்க.",
    activity_target: "இலக்கு ஸ்டேட்",
    activity_current: "தற்போதைய சுற்று ஸ்டேட்",
    activity_match: "ஸ்டேட் பொருத்தம் சரிபார்க்கப்பட்டது! அருமையான வேலை!",
    activity_not_match: "சுற்று இலக்கு ஸ்டேட்டுடன் பொருந்தவில்லை. தொடர்ந்து மாற்றவும்!",
    activity_phi_plus: "சவால் 1: |Φ⁺⟩ = (|00⟩ + |11⟩)/√2 உருவாக்கவும்",
    activity_phi_minus: "சவால் 2: |Φ⁻⟩ = (|00⟩ - |11⟩)/√2 உருவாக்கவும்",
    activity_psi_plus: "சவால் 3: |Ψ⁺⟩ = (|01⟩ + |10⟩)/√2 உருவாக்கவும்",
    activity_psi_minus: "சவால் 4: |Ψ⁻⟩ = (|01⟩ - |10⟩)/√2 உருவாக்கவும்",
    activity_psi_completed: "முடிந்தது!",
    activity_load_btn: "சவாலை ஏற்றுக",

    topics: {
      "cnot-gate": {
        label: "CNOT கேட் மற்றும் கட்டுப்பாட்டு செயல்பாடுகள்",
        tag: "இரு-க்யூபிட் ஸ்டேட் பொறியியல்",
        bullets: [
          "கட்டுப்பாட்டு க்யூபிட் |1⟩ ஆக இருக்கும்போது CNOT (Controlled-X) கேட் இலக்கு க்யூபிட்டில் ஒரு Pauli-X (NOT) ஐ பயன்படுத்துகிறது.",
          "இது குவாண்டம் நெறிமுறைகளில் என்டேங்கிள்மென்ட் செயல்பாடுகளுக்கான ஒரு அடிப்படை கட்டமைப்பாகும்.",
          "கணித ரீதியாக, இது மேப்பிங் செய்கிறது: |c⟩|t⟩ -> |c⟩|t ⊕ c⟩."
        ],
        description: "CNOT கேட் இரண்டு க்யூபிட்களில் செயல்படுகிறது. இதை ஒரு சிங்கிள்-க்யூபிட் Hadamard கேட் (H) உடன் இணைக்கும்போது, இது தயாரிப்பு ஸ்டேட்களை தொடர்புடைய, பிரிக்க முடியாத ஸ்டேட்களாக மாற்றுவதன் மூலம் குவாண்டம் என்டேங்கிள்மென்ட்டை உருவாக்குகிறது.",
        table: {
          title: "CNOT (கட்டுப்பாட்டு q0, இலக்கு q1) செயல் அட்டவணை",
          rows: [
            { gate: "CNOT", inputs: "|00⟩", outputs: "|000⟩" },
            { gate: "CNOT", inputs: "|01⟩", outputs: "|011⟩" },
            { gate: "CNOT", inputs: "|10⟩", outputs: "|010⟩" },
            { gate: "CNOT", inputs: "|11⟩", outputs: "|001⟩" }
          ]
        }
      },
      "bell-states": {
        label: "நான்கு அதிகபட்சமாக என்டேங்கிள் செய்யப்பட்ட Bell ஸ்டேட்கள்",
        tag: "EPR ஜோடிகள் மற்றும் அதிகபட்ச தொடர்பு",
        bullets: [
          "Bell ஸ்டேட்கள் 2-க்யூபிட் அமைப்புகளுக்கு அதிகபட்ச என்டேங்கிள்மென்ட்டை குறிக்கும் ஒரு ஆர்த்தோநார்மல் அடிப்படையை உருவாக்குகின்றன.",
          "ஒரு Bell ஜோடியின் ஒரு க்யூபிட்டை அளவிடுவது அதை ஒரு சீரற்ற முடிவுக்கு (0 அல்லது 1) சரித்து, உடனடியாக மற்றொன்றை அதனுடன் பொருந்த கட்டாயப்படுத்துகிறது.",
          "அவற்றை இரண்டு சுயாதீன சிங்கிள்-க்யூபிட் ஸ்டேட்களின் (தயாரிப்பு ஸ்டேட்கள்) டென்சர் தயாரிப்பாக காரணியாக்க முடியாது."
        ],
        description: "அதிகபட்சமாக என்டேங்கிள் செய்யப்பட்ட ஜோடிகள், அல்லது EPR ஜோடிகள், கிளாசிக்கல் வரம்புகளை மீறிய தொடர்பை வெளிப்படுத்துகின்றன. அவை பின்வருமாறு வரையறுக்கப்படுகின்றன: |Φ⁺⟩ = (|00⟩+|11⟩)/√2, |Φ⁻⟩ = (|00⟩-|11⟩)/√2, |Ψ⁺⟩ = (|01⟩+|10⟩)/√2, மற்றும் |Ψ⁻⟩ = (|01⟩-|10⟩)/√2."
      },
      "swap-toffoli": {
        label: "SWAP, CCNOT (Toffoli), மற்றும் மல்டி-க்யூபிட் கேட்கள்",
        tag: "மீளக்கூடிய கணக்கீடு மற்றும் மல்டி-க்யூபிட் சுற்றுகள்",
        bullets: [
          "SWAP கேட் இரண்டு க்யூபிட்களின் ஸ்டேட்களை பரஸ்பரம் மாற்றுகிறது: |q0 q1⟩ -> |q1 q0⟩.",
          "Toffoli (CCNOT) கேட் ஒரு 3-க்யூபிட் கேட் ஆகும், இது இரண்டு கட்டுப்பாட்டு க்யூபிட்களும் |11⟩ ஸ்டேட்டில் இருக்கும்போது மட்டுமே இலக்கு க்யூபிட்டை திருப்புகிறது.",
          "கிளாசிக்கல் மீளக்கூடிய கணக்கீட்டிற்கு Toffoli ஒரு உலகளாவிய கேட் ஆகும், அதாவது இதைப் பயன்படுத்தி எந்தவொரு கிளாசிக்கல் சுற்றையும் உருவாக்க முடியும்."
        ],
        description: "SWAP மற்றும் CCNOT கேட்கள் ரூட்டிंங் மற்றும் மல்டி-கண்டிஷன் கொண்ட பூலியன் செயல்பாடுகளை அனுமதிக்கின்றன. காலக்கோட்டில், SWAP q0 மற்றும் q1 ஐ மாற்றுகிறது, அதே நேரத்தில் CCNOT (CCX) q2 ஐ இலக்காகக் கொள்ள q0 மற்றும் q1 ஐ கட்டுப்பாடாகப் பயன்படுத்துகிறது."
      },
      "entanglement-applications": {
        label: "என்டேங்கிள்மென்ட்டின் நிஜ-உலகப் பயன்பாடுகள்",
        tag: "குவாண்டம் நெறிமுறைகள் மற்றும் தொழில்நுட்பங்கள்",
        bullets: [
          "குவாண்டம் விசை விநியோகம் (QKD): பகிரப்பட்ட என்டேங்கிள் ஜோடிகள் E91 நெறிமுறை மூலம் பாதுகாப்பான கிரிப்டோகிராபிக் விசை விநியோகத்தை அனுமதிக்கின்றன.",
          "குவாண்டம் டெலிபோர்ட்டேஷன்: பகிரப்பட்ட என்டேங்கிள்மென்ட் மற்றும் கிளாசிக்கல் சேனல்களைப் பயன்படுத்தி அறியப்படாத ஸ்டேட்களை மாற்றுகிறது.",
          "சூப்பர் டென்ஸ் கோடிங்: ஒரு இயற்பியல் க்யூபிட்டைப் பயன்படுத்தி இரண்டு கிளாசிக்கல் பிட்களின் தகவலை அனுப்ப அனுமதிக்கிறது."
        ],
        description: "என்டேங்கிள்மென்t என்பது நவீன குவாண்டம் நெட்வொர்க்கிங் மற்றும் கம்ப்யூட்டிங் நெறிமுறைகளை இயக்கும் முக்கிய வளமாகும். இது விநியோகிக்கப்பட்ட குவாண்டம் நெட்வொர்க்குகள், ஒத்திசைவு மற்றும் பாதுகாப்பான ரூட்டிங்கிற்கான பௌதிக முதுகெலும்பாக செயல்படுகிறது."
      }
    },
    quiz_questions: [
      {
        q: "தொடக்க ஸ்டேட் |00⟩ இலிருந்து நிலையான Bell ஸ்டேட் |Φ⁺⟩ ஐ உருவாக்க எந்த கேட் கலவை பயன்படுத்தப்படுகிறது?",
        options: [
          "q0 இல் H, பின்னர் CNOT (q0 இலிருந்து q1)",
          "CNOT (q0 இலிருந்து q1), பின்னர் q0 இல் H",
          "q0 இல் H, q1 இல் H",
          "q0 இல் X, பின்னர் q1 இல் H"
        ]
      },
      {
        q: "அதிகபட்சமாக என்டேங்கிள் செய்யப்பட்ட 2-க்யூபிட் ஸ்டேட்டின் முக்கிய பண்பு எது?",
        options: [
          "இதை இரண்டு சுயாதீன சிங்கிள்-க்யூபிட் ஸ்டேட்களின் டென்சர் தயாரிப்பாக காரணியாக்க முடியும்",
          "இதை தனிப்பட்ட சிங்கிள்-க்யூபிட் தயாரிப்பு ஸ்டேட்களாக காரணியாக்க முடியாது",
          "ஒரு க்யூபிட்டை அளவிடுவது இரண்டாவது க்யூபிட்டைப் பற்றி எந்த தகவலையும் தராது",
          "இது பூஜ்ஜிய சூப்பர்போசிஷன் கூறுகளைக் கொண்டுள்ளது"
        ]
      },
      {
        q: "CNOT கேட்டிற்கு, கட்டுப்பாட்டு க்யூபிட் q0 (|0⟩ + |1⟩)/√2 ஸ்டேட்டிலும், இலக்கு q1 |0⟩ ஸ்டேட்டிலும் இருந்தால், வெளியீட்டு ஸ்டேட் என்ன?",
        options: [
          "(|00⟩ + |10⟩)/√2",
          "(|00⟩ + |11⟩)/√2",
          "(|01⟩ + |10⟩)/√2",
          "|11⟩"
        ]
      },
      {
        q: "3-க்யூபிட் அமைப்பின் ஸ்டேட் வெக்டரை எத்தனை சிக்கலான எண்கள் குறிக்கின்றன?",
        options: [
          "3",
          "6",
          "8",
          "16"
        ]
      },
      {
        q: "SWAP கேட் ஸ்டேட்களை பரஸ்பரம் மாற்றுவதன் மூலம் செயல்படுகிறது. ஸ்டேட் |01⟩ இல் SWAP இன் வெளியீடு என்ன?",
        options: [
          "|01⟩",
          "|10⟩",
          "|11⟩",
          "|00⟩"
        ]
      },
      {
        q: "CCNOT (Toffoli) கேட்டிற்கு எத்தனை கட்டுப்பாட்டு க்யூபிட்கள் தேவைப்படுகின்றன?",
        options: [
          "1",
          "2",
          "3",
          "0"
        ]
      },
      {
        q: "இரண்டு க்யூபிட்கள் அதிகபட்சமாக என்டேங்கிள் செய்யப்பட்ட Bell ஸ்டேட்டில் இருந்தால், அவற்றின் உள்ளூர் Bloch Spheres க்கு என்ன நடக்கும்?",
        options: [
          "அவை சாதாரண அளவை விட இருமடங்காக விரிவடையும்",
          "அவை Z அச்சில் எதிர் திசையில் குறிக்கும்",
          "அவை மூல புள்ளியில் ஒரு புள்ளியாக சுருங்கும் (ஆரம் = 0)",
          "அவை நேர்மறை X திசையை குறிக்கும்"
        ]
      },
      {
        q: "(|01⟩ - |10⟩)/√2 ஆல் குறிக்கப்படும் Bell ஸ்டேட் எது?",
        options: [
          "|Φ⁺⟩",
          "|Φ⁻⟩",
          "|Ψ⁺⟩",
          "|Ψ⁻⟩"
        ]
      },
      {
        q: "என்டேங்கிள்மென்ட்டை முழு வலிமையில் பல சுயாதீன அமைப்புகளுக்கு இடையில் பகிர முடியாது என்ற கொள்கை எவ்வாறு அழைக்கப்படுகிறது?",
        options: [
          "நோ-குளோனிங் கோட்பாடு",
          "என்டேங்கிள்மென்ட் ஏகபத்தினித்துவம் (Monogamy)",
          "பெல்லின் சமனின்மை",
          "நிச்சயமற்ற கொள்கை"
        ]
      },
      {
        q: "1 க்யூபிட் மூலம் 2 கிளாசிக்கல் பிட்களை அனுப்ப பகிரப்பட்ட என்டேங்கிள்மென்ட்டைப் பயன்படுத்தும் குவாண்டம் தொடர்பு நெறிமுறை எது?",
        options: [
          "BB84 நெறிமுறை",
          "குவாண்டம் டெலிபோர்ட்டேஷன்",
          "சூப்பர் டென்ஸ் கோடிங்",
          "B92 நெறிமுறை"
        ]
      }
    ],
    tour_steps: [
      {
        title: "என்டேங்கிள்மென்ட் லேபிற்கு வரவேற்கிறோம்!",
        desc: "இந்த பரிசோதனையில், நீங்கள் மல்டி-க்யூபிட் கேட்களை ஆராய்ந்து, நான்கு அதிகபட்சமாக என்டேங்கிள் செய்யப்பட்ட Bell ஸ்டேட்களை உருவாக்குவீர்கள்."
      },
      {
        title: "மல்டி-க்யூபிட் ஆபரேட்டர்கள்",
        desc: "கருவிப்பெட்டியில் இப்போது H, X, Y, Z, மற்றும் மல்டி-க்யூபிட் கேட்கள் உள்ளன: CNOT (CX), CNOT12 (CX12), SWAP, மற்றும் CCNOT (CCX)."
      },
      {
        title: "3-க்யூபிட் காலக்கோடு கம்பிகள்",
        desc: "நீங்கள் கேட்களை மூன்று க்யூபிட் காலக்கோடுகளுக்கு இழுத்து விடலாம்: q0, q1, மற்றும் q2. மல்டி-க்யூபிட் கேட்கள் அருகிலுள்ள கட்டுப்பாட்டு சேனல்களைப் பயன்படுத்தி இயங்குகின்றன."
      },
      {
        title: "Bell ஸ்டேட் பொறியியல் செயல்பாடுகள்",
        desc: "Bell ஸ்டேட் சவாலைத் தேர்ந்தெடுக்க இந்த பேனலைப் பயன்படுத்தவும். உங்கள் சுற்று சரியான கணித இலக்கை உருவாக்குகிறதா என்று சரிபார்க்கப்படும்."
      },
      {
        title: "8-ஸ்டேட் வீச்சு கட்டம்",
        desc: "நிகழ்நேரத்தில் அனைத்து 8 சாத்தியமான சேர்க்கைகளிலும் (|000⟩ முதல் |111⟩ வரை) சிக்கலான ஸ்டேட் வெக்டர் விரிவடைவதைக் காணுங்கள்."
      },
      {
        title: "உள்ளூர் Bloch Spheres",
        desc: "என்டேங்கிள்மென்ட் அதிகரிக்கும் போது Bloch Sphere வெக்டர்கள் மையத்தை நோக்கி எவ்வாறு சுருங்குகின்றன என்பதைக் கவனியுங்கள், இது கலப்பு ஸ்டேட்களைக் காட்டுகிறது!"
      }
    ]
  },
  es: {
    nav_exit_workspace: "Salir del Espacio de Trabajo",
    nav_theory: "Objetivo y Teoría",
    nav_playground: "Laboratorio de Entrelazamiento",
    nav_activities: "Actividades de Entrelazamiento",
    nav_quiz: "Cuestionario de Validación",
    title_basics: "Experimento 1.2",
    hero_title: "Bell State Entanglement",
    hero_sub: "Explore sistemas multi-cúbit, la correlación de Einstein-Podolsky-Rosen (EPR) y construya estados de Bell máximamente entrelazados usando compuertas multi-cúbit.",
    btn_start_learning: "Comenzar a Aprender",
    btn_launch_playground: "Área de Sandbox",
    card_superposition_title: "Entrelazamiento Cuántico",
    card_superposition_desc: "Fenómeno físico donde parejas o grupos de partículas comparten estados, de manera que uno no puede ser descrito independientemente del otro.",
    card_nocloning_title: "Operadores Multi-Cúbit",
    card_nocloning_desc: "Operaciones como CNOT, SWAP y Toffoli que actúan sobre múltiples cúbits para construir estados entrelazados y realizar compuertas clásicas reversibles.",
    card_measurement_title: "Paradoja EPR",
    card_measurement_desc: "El famoso experimento mental que desafía el realismo local clásico, mostrando cómo la medición de un cúbit revela instantáneamente el estado del otro.",
    section_title: "Fundamentos del Entrelazamiento",
    section_sub: "Revise los principios teóricos de los sistemas multi-cúbit antes de proceder al simulador activo de laboratorio.",
    quick_summary: "Resumen Rápido",
    concept_kicker: "Concepto",
    concept_of: "de",
    table_gate: "Compuerta",
    table_inputs: "Entradas",
    table_outputs: "Salidas",
    math_vector_title: "Representación del Vector de Estado de 2 Cúbits",
    math_vector_def: "Representación general del estado",
    math_vector_constraint: "Restricción de normalización",
    math_vector_desc: "Un estado de dos cúbits existe en un espacio complejo de 4 dimensiones, abarcado por los estados de base computacional |00⟩, |01⟩, |10⟩ y |11⟩.",
    cta_title: "¿Listo para diseñar estados entrelazados?",
    cta_desc: "Ingrese al espacio de trabajo del simulador. Configure líneas de tiempo multi-cúbit, complete los desafíos del estado de Bell y visualice vectores de estado en vivo.",
    cta_btn_playground: "Entrar al Laboratorio",
    cta_btn_top: "Volver arriba",
    builder_title: "Sandbox de Constructor Multi-Cúbit",
    builder_sub: "Arrastre compuertas en la línea de tiempo de 3 cúbits, vea amplitudes de probabilidad y complete las tareas del estado de Bell.",
    btn_guided_tour: "Visita Guiada",
    btn_clear_circuit: "Reiniciar Línea de Tiempo",
    toolbox_title: "Caja de Herramientas de Operadores",
    toolbox_desc: "Arrastre compuertas a las ranuras. H y Pauli son de un solo cúbit. CNOT, SWAP y CCX son de múltiples cúbits.",
    timeline_title: "Línea de Tiempo del Circuito",
    timeline_desc: "Arrastre compuertas. q0 controla a q1 para CNOT, q1 controla a q2 para CNOT12, y q0,q1 controlan a q2 para Toffoli.",
    bloch_title: "Esferas de Bloch Individuales",
    bloch_desc: "Observe cómo los vectores de Bloch locales se reducen a cero cuando los cúbits se entrelazan máximamente (monogamia del entrelazamiento).",
    histogram_title: "Probabilidades de Estado",
    histogram_desc: "Probabilidades de medición en vivo en los 8 estados de base computacional (|000⟩ a |111\rangle).",
    btn_go_quiz: "Ir al Cuestionario de Validación",
    quiz_title: "Cuestionario de Validación",
    quiz_time_left: "Restante",
    quiz_next_question: "Siguiente Pregunta",
    quiz_submit_results: "Enviar Resultados",
    quiz_passed_title: "¡Validación Completa!",
    quiz_passed_desc: "Puntuación: {score}/10. ¡Excelente! Ha completado con éxito el cuestionario para el entrelazamiento del estado de Bell. Descargue sus credenciales a continuación.",
    btn_download_report: "Descargar Reporte de Laboratorio",
    btn_download_cert: "Descargar Certificado de Finalización",
    btn_back_dashboard: "Volver al Panel",
    quiz_failed_title: "Calificación Aprobatoria Requerida",
    quiz_failed_desc: "Puntuación: {score}/10. Se requiere una puntuación perfecta de 10/10 para aprobar. ¡Por favor, revise las diapositivas de teoría y vuelva a intentarlo!",
    btn_retake_quiz: "Rehacer Cuestionario",
    btn_scroll_section: "Aprender Teoría",
    guided_tour_title: "Visita del Sandbox",
    guided_tour_step: "Paso",
    guided_tour_of: "de",
    btn_next: "Siguiente",
    btn_back: "Atrás",
    btn_finish: "Finalizar",
    btn_skip: "Omitir",
    btn_done: "Listo",
    note_drag: "Arrastrar",
    note_click: "Hacer clic",
    builder_state_vector: "Amplitudes del Vector de Estado",

    activity_title: "Actividades de Ingeniería de Estados de Bell",
    activity_desc: "Coloque compuertas en la línea de tiempo para construir el estado entrelazado objetivo. Presione Cargar para seleccionar un desafío.",
    activity_target: "Estado Objetivo",
    activity_current: "Estado Actual del Circuito",
    activity_match: "¡Coincidencia de Estado Verificada! ¡Buen trabajo!",
    activity_not_match: "El circuito no coincide con el estado objetivo. ¡Siga editando!",
    activity_phi_plus: "Desafío 1: Construir |Φ⁺⟩ = (|00⟩ + |11⟩)/√2",
    activity_phi_minus: "Desafío 2: Construir |Φ⁻⟩ = (|00⟩ - |11⟩)/√2",
    activity_psi_plus: "Desafío 3: Construir |Ψ⁺⟩ = (|01⟩ + |10⟩)/√2",
    activity_psi_minus: "Desafío 4: Construir |Ψ⁻⟩ = (|01⟩ - |10⟩)/√2",
    activity_psi_completed: "¡Completado!",
    activity_load_btn: "Cargar Desafío",

    topics: {
      "cnot-gate": {
        label: "La Compuerta CNOT y Operaciones Controladas",
        tag: "Ingeniería de Estados de Dos Cúbits",
        bullets: [
          "La compuerta CNOT (X controlada) aplica un Pauli-X (NOT) en el cúbit objetivo si el de control está en |1⟩.",
          "Representa un bloque de construcción fundamental para las operaciones de entrelazamiento en redes cuánticas.",
          "Matemáticamente, realiza el mapeo: |c⟩|t⟩ -> |c⟩|t ⊕ c⟩."
        ],
        description: "La compuerta CNOT actúa sobre dos cúbits. Al combinarse con una compuerta Hadamard (H) de un solo cúbit, genera entrelazamiento cuántico al mapear estados producto en estados correlacionados y no separables.",
        table: {
          title: "Tabla de Acción CNOT (Control q0, Objetivo q1)",
          rows: [
            { gate: "CNOT", inputs: "|00⟩", outputs: "|000⟩" },
            { gate: "CNOT", inputs: "|01⟩", outputs: "|011⟩" },
            { gate: "CNOT", inputs: "|10⟩", outputs: "|010⟩" },
            { gate: "CNOT", inputs: "|11⟩", outputs: "|001⟩" }
          ]
        }
      },
      "bell-states": {
        label: "Los Cuatro Estados de Bell Máximamente Entrelazados",
        tag: "Pares EPR y Correlación Máxima",
        bullets: [
          "Los estados de Bell forman una base ortonormal para sistemas de 2 cúbits que representan el entrelazamiento máximo.",
          "Medir un cúbit de un par de Bell colapsa el estado a un resultado aleatorio (0 o 1) y obliga inmediatamente al otro cúbit a coincidir.",
          "No se pueden factorizar en el producto tensorial de dos estados independientes de un solo cúbit (estados producto)."
        ],
        description: "Los pares máximamente entrelazados, o pares EPR, exhiben una correlación que supera cualquier límite clásico posible. Se definen como: |Φ⁺⟩ = (|00⟩+|11⟩)/√2, |Φ⁻⟩ = (|00⟩-|11⟩)/√2, |Ψ⁺⟩ = (|01⟩+|10⟩)/√2 y |Ψ⁻⟩ = (|01⟩-|10⟩)/√2."
      },
      "swap-toffoli": {
        label: "SWAP, CCNOT (Toffoli) y Compuertas Multi-Cúbit",
        tag: "Computación Reversible y Circuitos Multi-Cúbit",
        bullets: [
          "La compuerta SWAP intercambia los estados de dos cúbits: |q0 q1⟩ -> |q1 q0⟩.",
          "La compuerta Toffoli (CCNOT) es una compuerta de 3 cúbits que invierte el cúbit objetivo si y solo si ambos controles están en el estado |11⟩.",
          "Toffoli es una compuerta universal para la computación reversible clásica, lo que significa que cualquier circuito clásico se puede construir usando ella."
        ],
        description: "Las compuertas SWAP y CCNOT permiten el enrutamiento y operaciones booleanas multi-condicionadas. En la línea de tiempo, SWAP intercambia q0 y q1, mientras que CCNOT (CCX) usa q0 y q1 como controles para apuntar a q2."
      },
      "entanglement-applications": {
        label: "Aplicaciones del Entrelazamiento en el Mundo Real",
        tag: "Protocolos y Tecnologías Cuánticas",
        bullets: [
          "Distribución de Claves Cuánticas (QKD): Los pares entrelazados compartidos permiten la distribución segura de claves criptográficas a través del protocolo E91.",
          "Teletransportación Cuántica: Transfiere estados desconocidos utilizando entrelazamiento compartido y canales clásicos.",
          "Codificación Superdensa: Permite transmitir dos bits clásicos de información utilizando solo un cúbit físico."
        ],
        description: "El entrelazamiento es el recurso principal que impulsa los protocolos modernos de computación y redes cuánticas. Sirve como la columna vertebral física para redes cuánticas distribuidas, sincronización y enrutamiento seguro."
      }
    },
    quiz_questions: [
      {
        q: "¿Qué combinación de compuertas se utiliza para construir el estado de Bell estándar |Φ⁺⟩ a partir del estado inicial |00⟩?",
        options: [
          "H en q0, luego CNOT (q0 a q1)",
          "CNOT (q0 a q1), luego H en q0",
          "H en q0, H en q1",
          "X en q0, luego H en q1"
        ]
      },
      {
        q: "¿Cuál es la propiedad principal de un estado de 2 cúbits máximamente entrelazado?",
        options: [
          "Puede factorizarse como el producto tensorial de dos estados independientes de un solo cúbit",
          "No puede factorizarse en estados producto individuales de un solo cúbit",
          "Medir un cúbit no da información sobre el segundo cúbit",
          "Tiene componentes de superposición cero"
        ]
      },
      {
        q: "Para la compuerta CNOT, si el cúbit de control q0 está en el estado (|0⟩ + |1⟩)/√2 y el objetivo q1 está en el estado |0⟩, ¿cuál es el estado de salida?",
        options: [
          "(|00⟩ + |10⟩)/√2",
          "(|00⟩ + |11⟩)/√2",
          "(|01⟩ + |10⟩)/√2",
          "|11⟩"
        ]
      },
      {
        q: "¿Cuántos números complejos representan el vector de estado de un sistema de 3 cúbits?",
        options: [
          "3",
          "6",
          "8",
          "16"
        ]
      },
      {
        q: "La compuerta SWAP actúa sobre los estados intercambiándolos. ¿Cuál es la salida de SWAP en el estado |01⟩?",
        options: [
          "|01⟩",
          "|10⟩",
          "|11⟩",
          "|00⟩"
        ]
      },
      {
        q: "¿Cuántos cúbits de control requiere la compuerta CCNOT (Toffoli)?",
        options: [
          "1",
          "2",
          "3",
          "0"
        ]
      },
      {
        q: "Si dos cúbits están en un estado de Bell máximamente entrelazado, ¿qué ocurre con sus esferas de Bloch locales?",
        options: [
          "Se expanden al doble del volumen normal",
          "Apuntan en direcciones opuestas en el eje Z",
          "Se contraen a un solo punto en el origen (radio = 0)",
          "Apuntan en la dirección X positiva"
        ]
      },
      {
        q: "¿Qué estado de Bell está representado por (|01⟩ - |10⟩)/√2?",
        options: [
          "|Φ⁺⟩",
          "|Φ⁻⟩",
          "|Ψ⁺⟩",
          "|Ψ⁻⟩"
        ]
      },
      {
        q: "El principio de que el entrelazamiento no se puede compartir entre múltiples sistemas independientes con total fuerza se llama...",
        options: [
          "Teorema de No Clonación",
          "Monogamia del Entrelazamiento",
          "Desigualdad de Bell",
          "Principio de Incertidumbre"
        ]
      },
      {
        q: "¿Qué protocolo de comunicación cuántica utiliza el entrelazamiento compartido para enviar 2 bits clásicos a través de 1 cúbit?",
        options: [
          "Protocolo BB84",
          "Teletransportación Cuántica",
          "Codificación Superdensa",
          "Protocolo B92"
        ]
      }
    ],
    tour_steps: [
      {
        title: "¡Bienvenido al Laboratorio de Entrelazamiento!",
        desc: "En este experimento, explorará compuertas multi-cúbit y diseñará los cuatro estados de Bell máximamente entrelazados."
      },
      {
        title: "Operadores Multi-Cúbit",
        desc: "La caja de herramientas ahora contiene H, X, Y, Z y compuertas multi-cúbit: CNOT (CX), CNOT12 (CX12), SWAP y CCNOT (CCX)."
      },
      {
        title: "Líneas de Tiempo de 3 Cúbits",
        desc: "Puede arrastrar compuertas en tres líneas de tiempo: q0, q1 y q2. Las compuertas multi-cúbit se ejecutan usando canales de control adyacentes."
      },
      {
        title: "Actividades de Estados de Bell",
        desc: "Use este panel para seleccionar un desafío. El validador verificará si su circuito construye el objetivo matemático exacto."
      },
      {
        title: "Amplitudes de 8 Estados",
        desc: "Observe cómo el vector de estado complejo se expande en las 8 combinaciones posibles (|000⟩ a |111⟩) en tiempo real."
      },
      {
        title: "Esferas de Bloch Locales",
        desc: "Observe cómo los vectores de Bloch locales se contraen hacia el centro a medida que aumenta el entrelazamiento, ¡ilustrando estados mixtos!"
      }
    ]
  },
  fr: {
    nav_exit_workspace: "Quitter l'Espace de Travail",
    nav_theory: "Objectif & Théorie",
    nav_playground: "Lab d'Intrication",
    nav_activities: "Activités d'Intrication",
    nav_quiz: "Quiz de Validation",
    title_basics: "Expérience 1.2",
    hero_title: "Bell State Entanglement",
    hero_sub: "Explorez les systèmes multi-qubits, la corrélation d'Einstein-Podolsky-Rosen (EPR) et créez des états de Bell maximaux à l'aide de portes multi-qubits.",
    btn_start_learning: "Commencer à Apprendre",
    btn_launch_playground: "Espace Sandbox",
    card_superposition_title: "Intrication Quantique",
    card_superposition_desc: "Phénomène physique où des paires ou des groupes de particules partagent des états, de sorte qu'une particule ne peut être décrite indépendamment de l'autre.",
    card_nocloning_title: "Opérateurs Multi-Qubits",
    card_nocloning_desc: "Opérations comme CNOT, SWAP et Toffoli agissant sur plusieurs qubits pour construire des états intriqués et réaliser des portes classiques réversibles.",
    card_measurement_title: "Paradoxe EPR",
    card_measurement_desc: "La célèbre expérience de pensée remettant en cause le réalisme local classique, montrant comment la mesure d'un qubit révèle instantanément l'état de l'autre.",
    section_title: "Fondements de l'Intrication",
    section_sub: "Passez en revue les principes théoriques des systèmes multi-qubits avant de passer au simulateur de laboratoire actif.",
    quick_summary: "Résumé Rapide",
    concept_kicker: "Concept",
    concept_of: "de",
    table_gate: "Porte",
    table_inputs: "Entrées",
    table_outputs: "Sorties",
    math_vector_title: "Représentation du Vecteur d'État à 2 Qubits",
    math_vector_def: "Représentation de l'état général",
    math_vector_constraint: "Contrainte de normalisation",
    math_vector_desc: "Un état à deux qubits existe dans un espace complexe à 4 dimensions, engendré par les états de base computationnels |00⟩, |01⟩, |10⟩ et |11⟩.",
    cta_title: "Prêt à concevoir des états intriqués ?",
    cta_desc: "Entrez dans l'espace de travail du simulateur. Configurez des chronologies multi-qubits, relevez les défis de l'état de Bell et visualisez les vecteurs d'état en direct.",
    cta_btn_playground: "Entrer dans le Lab",
    cta_btn_top: "Retour en haut",
    builder_title: "Sandbox de Constructeur Multi-Qubits",
    builder_sub: "Faites glisser des portes sur la chronologie à 3 qubits, visualisez les amplitudes de probabilité et complétez les défis de l'état de Bell.",
    btn_guided_tour: "Visite Guidée",
    btn_clear_circuit: "Réinitialiser la Chronologie",
    toolbox_title: "Boîte à Outils d'Opérateurs",
    toolbox_desc: "Faites glisser des portes. H et Pauli sont pour un seul qubit. CNOT, SWAP et CCX sont multi-qubits.",
    timeline_title: "Chronologie du Circuit",
    timeline_desc: "Faites glisser des portes. q0 contrôle q1 pour CNOT, q1 contrôle q2 pour CNOT12, et q0,q1 contrôlent q2 pour Toffoli.",
    bloch_title: "Sphères de Bloch Individuelles",
    bloch_desc: "Observez comment les vecteurs de Bloch locaux se réduisent à zéro lorsque les qubits s'intriquent au maximum (monogamie de l'intrication).",
    histogram_title: "Probabilités d'État",
    histogram_desc: "Probabilités de mesure en direct sur les 8 états de base computationnels (|000⟩ à |111\rangle).",
    btn_go_quiz: "Aller au Quiz de Validation",
    quiz_title: "Quiz de Validation",
    quiz_time_left: "Restant",
    quiz_next_question: "Question Suivante",
    quiz_submit_results: "Soumettre les Résultats",
    quiz_passed_title: "Validation Réussie !",
    quiz_passed_desc: "Score: {score}/10. Excellent ! Vous avez réussi le quiz pour l'intrication de l'état de Bell. Téléchargez vos documents ci-dessous.",
    btn_download_report: "Télécharger le Rapport de Lab",
    btn_download_cert: "Télécharger le Certificat de Réussite",
    btn_back_dashboard: "Retour au Tableau de Bord",
    quiz_failed_title: "Note de Passage Requise",
    quiz_failed_desc: "Score: {score}/10. Un score parfait de 10/10 est requis pour réussir le checkpoint. Veuillez revoir la théorie et réessayer !",
    btn_retake_quiz: "Repasser le Quiz",
    btn_scroll_section: "Apprendre la Théorie",
    guided_tour_title: "Visite du Sandbox",
    guided_tour_step: "Étape",
    guided_tour_of: "sur",
    btn_next: "Suivant",
    btn_back: "Retour",
    btn_finish: "Terminer",
    btn_skip: "Passer",
    btn_done: "Fait",
    note_drag: "Glisser",
    note_click: "Cliquer",
    builder_state_vector: "Amplitudes du Vecteur d'État",

    activity_title: "Activités d'Ingénierie des États de Bell",
    activity_desc: "Placez des portes sur la chronologie pour construire l'état intriqué cible. Cliquez sur Charger pour sélectionner un défi.",
    activity_target: "État Cible",
    activity_current: "État Actuel du Circuit",
    activity_match: "Correspondance d'État Vérifiée ! Bon travail !",
    activity_not_match: "Le circuit ne correspond pas à l'état cible. Continuez à modifier !",
    activity_phi_plus: "Défi 1: Construire |Φ⁺⟩ = (|00⟩ + |11⟩)/√2",
    activity_phi_minus: "Défi 2: Construire |Φ⁻⟩ = (|00⟩ - |11⟩)/√2",
    activity_psi_plus: "Défi 3: Construire |Ψ⁺⟩ = (|01⟩ + |10⟩)/√2",
    activity_psi_minus: "Défi 4: Construire |Ψ⁻⟩ = (|01⟩ - |10⟩)/√2",
    activity_psi_completed: "Complété !",
    activity_load_btn: "Charger le Défi",

    topics: {
      "cnot-gate": {
        label: "La Porte CNOT & Opérations Contrôlées",
        tag: "Ingénierie d'État à Deux Qubits",
        bullets: [
          "La porte CNOT (X contrôlé) applique un Pauli-X (NOT) sur le qubit cible si le qubit de contrôle est dans l'état |1⟩.",
          "Elle représente une brique de base fondamentale pour les opérations d'intrication dans les réseaux quantiques.",
          "Mathématiquement, elle effectue le mappage: |c⟩|t⟩ -> |c⟩|t ⊕ c⟩."
        ],
        description: "La porte CNOT agit sur deux qubits. Combinée à une porte Hadamard (H) à un seul qubit, elle génère de l'intrication quantique en transformant des états produits en états corrélés non séparables.",
        table: {
          title: "Table d'Action CNOT (Contrôle q0, Cible q1)",
          rows: [
            { gate: "CNOT", inputs: "|00⟩", outputs: "|000⟩" },
            { gate: "CNOT", inputs: "|01⟩", outputs: "|011⟩" },
            { gate: "CNOT", inputs: "|10⟩", outputs: "|010⟩" },
            { gate: "CNOT", inputs: "|11⟩", outputs: "|001⟩" }
          ]
        }
      },
      "bell-states": {
        label: "Les Quatre États de Bell Maximaux",
        tag: "Paires EPR & Corrélation Maximale",
        bullets: [
          "Les états de Bell forment une base orthonormée pour les systèmes à 2 qubits, représentant une intrication maximale.",
          "La mesure d'un qubit d'une paire de Bell effondre son état vers un résultat aléatoire (0 ou 1) et force instantanément l'autre qubit à correspondre.",
          "Ils ne peuvent pas être factorisés en produit tensoriel de deux états indépendants à un seul qubit (états produits)."
        ],
        description: "Les paires intriquées maximales, ou paires EPR, présentent une corrélation dépassant toutes les limites classiques possibles. Elles sont définies comme: |Φ⁺⟩ = (|00⟩+|11⟩)/√2, |Φ⁻⟩ = (|00⟩-|11⟩)/√2, |Ψ⁺⟩ = (|01⟩+|10⟩)/√2, et |Ψ⁻⟩ = (|01⟩-|10⟩)/√2."
      },
      "swap-toffoli": {
        label: "SWAP, CCNOT (Toffoli) et Portes Multi-Qubits",
        tag: "Calcul Réversible & Circuits Multi-Qubits",
        bullets: [
          "La porte SWAP échange les états de dos qubits: |q0 q1⟩ -> |q1 q0⟩.",
          "La porte Toffoli (CCNOT) est une porte à 3 qubits qui bascule le qubit cible si et seulement si les deux contrôles sont dans l'état |11⟩.",
          "Toffoli est une porte universelle pour le calcul réversible classique, ce qui signifie que tout circuit classique peut être construit en l'utilisant."
        ],
        description: "Les portes SWAP et CCNOT permettent le routage et les opérations booléennes multi-conditionnées. Dans la chronologie, SWAP permute q0 et q1, tandis que CCNOT (CCX) utilise q0 et q1 comme contrôles pour cibler q2."
      },
      "entanglement-applications": {
        label: "Applications Réelles de l'Intrication",
        tag: "Protocoles & Technologies Quantiques",
        bullets: [
          "Distribution de Clés Quantiques (QKD): Les paires intriquées partagées permettent une distribution sécurisée des clés cryptographiques via le protocole E91.",
          "Téléportation Quantique: Transfère des états inconnus à l'aide d'intrication partagée et de canaux classiques.",
          "Codage Superdense: Permet de transmettre deux bits classiques d'informations en utilisant un seul qubit physique."
        ],
        description: "L'intrication est la ressource principale alimentant les protocoles modernes de réseaux et de calcul quantiques. Elle sert de base physique pour les réseaux quantiques distribués, la synchronisation et le routage sécurisé."
      }
    },
    quiz_questions: [
      {
        q: "Quelle combinaison de portes est utilisée pour construire l'état de Bell standard |Φ⁺⟩ à partir de l'état initial |00⟩?",
        options: [
          "H sur q0, puis CNOT (de q0 à q1)",
          "CNOT (de q0 à q1), puis H sur q0",
          "H sur q0, H sur q1",
          "X sur q0, puis H sur q1"
        ]
      },
      {
        q: "Quelle est la principale propriété d'un état à 2 qubits intriqué au maximum ?",
        options: [
          "Il peut être factorisé comme le produit tensoriel de deux états indépendants à un seul qubit",
          "Il ne peut pas être factorisé en états produits individuels à un seul qubit",
          "La mesure d'un qubit ne donne aucune information sur le second qubit",
          "Il possède des composants de superposition nuls"
        ]
      },
      {
        q: "Pour la porte CNOT, si le qubit de contrôle q0 est dans l'état (|0⟩ + |1⟩)/√2 et la cible q1 est dans l'état |0⟩, quel est l'état de sortie ?",
        options: [
          "(|00⟩ + |10⟩)/√2",
          "(|00⟩ + |11⟩)/√2",
          "(|01⟩ + |10⟩)/√2",
          "|11⟩"
        ]
      },
      {
        q: "Combien de nombres complexes représentent le vecteur d'état d'un système à 3 qubits ?",
        options: [
          "3",
          "6",
          "8",
          "16"
        ]
      },
      {
        q: "La porte SWAP agit en échangeant les états des qubits. Quelle est la sortie de SWAP sur l'état |01⟩ ?",
        options: [
          "|01⟩",
          "|10⟩",
          "|11⟩",
          "|00⟩"
        ]
      },
      {
        q: "Combien de qubits de contrôle la porte CCNOT (Toffoli) nécessite-t-elle ?",
        options: [
          "1",
          "2",
          "3",
          "0"
        ]
      },
      {
        q: "Si deux qubits sont dans un état de Bell intriqué au maximum, qu'arrive-t-il à leurs sphères de Bloch locales ?",
        options: [
          "Elles doublent de volume par rapport à la normale",
          "Elles pointent dans des directions opposées sur l'axe Z",
          "Elles se contractent en un seul point à l'origine (rayon = 0)",
          "Elles pointent dans la direction X positive"
        ]
      },
      {
        q: "Quel état de Bell est représenté par (|01⟩ - |10⟩)/√2 ?",
        options: [
          "|Φ⁺⟩",
          "|Φ⁻⟩",
          "|Ψ⁺⟩",
          "|Ψ⁻⟩"
        ]
      },
      {
        q: "Le principe selon lequel l'intrication ne peut être partagée à pleine force entre plusieurs systèmes indépendants s'appelle...",
        options: [
          "Théorème de Non-Clonage",
          "Monogamy de l'Intrication",
          "Inégalité de Bell",
          "Principe d'Incertitude"
        ]
      },
      {
        q: "Quel protocole de communication quantique utilise l'intrication partagée pour envoyer 2 bits classiques via 1 qubit ?",
        options: [
          "Protocole BB84",
          "Téléportation Quantique",
          "Codage Superdense",
          "Protocole B92"
        ]
      }
    ],
    tour_steps: [
      {
        title: "Bienvenue dans le Lab d'Intrication !",
        desc: "Dans cette expérience, vous explorerez les portes multi-qubits et construirez les quatre états de Bell maximaux."
      },
      {
        title: "Opérateurs Multi-Qubits",
        desc: "La boîte à outils contient désormais H, X, Y, Z et des portes multi-qubits : CNOT (CX), CNOT12 (CX12), SWAP et CCNOT (CCX)."
      },
      {
        title: "Chronologies à 3 Qubits",
        desc: "Vous pouvez faire glisser des portes sur trois chronologies : q0, q1 et q2. Les portes multi-qubits s'exécutent avec les canaux adjacents."
      },
      {
        title: "Activités des États de Bell",
        desc: "Utilisez ce panneau pour sélectionner un défi. Le validateur vérifiera si votre circuit construit la cible mathématique exacte."
      },
      {
        title: "Amplitude à 8 États",
        desc: "Regardez le vecteur d'état complexe s'étendre sur les 8 combinaisons possibles (|000⟩ à |111⟩) en temps réel."
      },
      {
        title: "Sphères de Bloch Locales",
        desc: "Observez comment les sphères de Bloch se contractent vers le centre à mesure que l'intrication augmente, illustrant les états mixtes !"
      }
    ]
  }
};
