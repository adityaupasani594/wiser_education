export const CONSISTENT_NAV = {
  en: {
    theory: "Theory Dashboard",
    playground: "Circuit Playground",
    activity: "Interactive Activity",
    sandbox: "Qiskit Sandbox",
    quiz: "Checkpoint Quiz",
    credentials: "Download Credentials"
  },
  hi: {
    theory: "सिद्धांत डैशबोर्ड",
    playground: "सर्किट प्लेग्राउंड",
    activity: "इंटरैक्टिव गतिविधि",
    sandbox: "Qiskit Sandbox",
    quiz: "चेकपॉइंट क्विज़",
    credentials: "क्रेडेंशियल डाउनलोड करें"
  },
  kn: {
    theory: "ಸಿದ್ಧಾಂತ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    playground: "ಸರ್ಕಿಟ್ ಪ್ಲೇಗ್ರೌಂಡ್",
    activity: "ಸಂವಾದಾತ್ಮಕ ಚಟುವಟಿಕೆ",
    sandbox: "Qiskit Sandbox",
    quiz: "ಚೆಕ್‌ಪಾಯಿंಟ್ ರಸಪ್ರಶ್ನೆ",
    credentials: "ರುಜುವಾತುಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
  },
  ta: {
    theory: "கோட்பாடு டாஷ்போர்டு",
    playground: "சர்க்யூட் பிளேகிரவுண்ட்",
    activity: "ஊடாடும் செயல்பாடு",
    sandbox: "Qiskit Sandbox",
    quiz: "செக்பாயிண்ட் வினாடி வினா",
    credentials: "சான்றுகளைப் பதிவிறக்கவும்"
  },
  es: {
    theory: "Panel de Teoría",
    playground: "Patio de Recreo de Circuitos",
    activity: "Actividad Interactiva",
    sandbox: "Qiskit Sandbox",
    quiz: "Cuestionario de Control",
    credentials: "Descargar Credenciales"
  },
  fr: {
    theory: "Tableau de Théorie",
    playground: "Terrain de Jeu de Circuit",
    activity: "Activité Interactive",
    sandbox: "Qiskit Sandbox",
    quiz: "Quiz de Contrôle",
    credentials: "Télécharger les Identifiants"
  }
} as const;

export type NavKey = keyof typeof CONSISTENT_NAV.en;
