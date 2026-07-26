import { LangCode } from "./translations";

export interface QKDTopic {
  id: string;
  label: string;
  tag: string;
  bullets: string[];
  description: string;
}

export interface QKDTranslations {
  hero_title: string;
  hero_sub: string;
  btn_start_learning: string;
  btn_launch_playground: string;
  section_title: string;
  section_sub: string;
  quick_summary: string;
  concept_kicker: string;
  concept_of: string;
  math_vector_title: string;
  math_vector_desc: string;
  math_vector_def: string;
  cta_title: string;
  cta_desc: string;
  cta_btn_playground: string;
  cta_btn_top: string;
  topics: Record<string, Omit<QKDTopic, "id">>;
}

export const TRANSLATIONS_EXP_3_2: Record<LangCode, QKDTranslations> = {
  en: {
    hero_title: "B92 Quantum Key Distribution",
    hero_sub: "Implement key distribution using two non-orthogonal states, sifting based on cross-polarized erasure, and analyze security limits.",
    btn_start_learning: "Start Learning",
    btn_launch_playground: "Launch Visual Lab",
    section_title: "Core Curriculum of B92",
    section_sub: "Master the mathematical, physical, and security frameworks of the B92 protocol.",
    quick_summary: "Quick Summary",
    concept_kicker: "Concept",
    concept_of: "of",
    math_vector_title: "Non-Orthogonal State Space",
    math_vector_desc: "B92 utilizes only two non-orthogonal states, which cannot be cloned or perfectly distinguished.",
    math_vector_def: "Bit 0 State: |φ₀⟩ = |0⟩ (Horizontal)  |  Bit 1 State: |φ₁⟩ = |+⟩ = (|0⟩+|1⟩)/√2 (Diagonal)",
    cta_title: "Ready to test B92?",
    cta_desc: "Configure channel noise, simulate eavesdropping activity, and check Bob's conclusive rate in real time.",
    cta_btn_playground: "Launch Visual Lab",
    cta_btn_top: "Back to Top",
    topics: {
      "b92-baseline": {
        label: "B92 Protocol Baseline",
        tag: "Simplifying QKD with two non-orthogonal states",
        description: "The B92 protocol, proposed by Charles Bennett in 1992, simplifies quantum key distribution to use only two non-orthogonal quantum states — one for bit 0 and one for bit 1. While simpler than BB84, it achieves the same unconditional security guarantee rooted in the quantum No-Cloning Theorem.",
        bullets: [
          "Alice maps bit 0 to 0° (horizontal) and bit 1 to 45° (diagonal) polarization.",
          "Because horizontal and diagonal polarizations are non-orthogonal, they cannot be perfectly cloned.",
          "The simplicity of B92 reduces the required laser sources from four to two."
        ]
      },
      "conclusive-sifting": {
        label: "Bob's Conclusive & Inconclusive Detections",
        tag: "Cross-polarized filters for conclusive keys",
        description: "Bob uses cross-polarized filters. A click at the 90° filter conclusively identifies that Alice sent bit 1. A click at −45° identifies bit 0. No click (erasure) means the measurement was inconclusive — roughly 50% of all ideal transmissions. Only conclusive events form the sifted key.",
        bullets: [
          "Bob measures using cross-polarized filters: 90° (vertical) to detect bit 1, and -45° to detect bit 0.",
          "A click at 90° conclusively identifies bit 1; a click at -45° conclusively identifies bit 0.",
          "No click means the result was inconclusive (erasure), which occurs roughly 50% of the time in ideal runs."
        ]
      },
      "b92-noise": {
        label: "Channel Losses & Base Noise",
        tag: "Dealing with real-world optical fibers",
        description: "Real fiber-optic quantum channels introduce depolarizing noise, photon loss from attenuation, and phase errors. These imperfections convert some valid conclusive measurements into errors, raising the QBER even without any eavesdropper. Distance reduces key rate, and noise raises baseline errors.",
        bullets: [
          "Optical attenuation and dark counts drop key rates and introduce baseline errors.",
          "Attenuation scales exponentially: over 50 km, roughly 90% of photons are lost.",
          "Baseline noise must be corrected classically to guarantee the security of the final key."
        ]
      },
      "b92-eavesdropping": {
        label: "Eavesdropping & Security Bound",
        tag: "Detecting Eve's signature in B92",
        description: "In B92, Eve faces a harder challenge — the two states are non-orthogonal, so any measurement attempt has a non-zero probability of misidentifying the state. This introduces errors into the conclusive click events that Bob and Alice detect as elevated QBER. The standard abort threshold is 11% QBER.",
        bullets: [
          "Eve's interception attempts disturb the polarization, creating error clicks for Bob.",
          "Measuring non-orthogonal states causes Eve to retransmit corrupted states, raising the QBER.",
          "If the conclusive rate drops or QBER exceeds 11%, the communication is aborted."
        ]
      }
    }
  },
  hi: {
    hero_title: "B92 क्वांटम कुंजी वितरण",
    hero_sub: "दो गैर-लंबकोणीय (non-orthogonal) स्थितियों का उपयोग करके कुंजी वितरण लागू करें, क्रॉस-ध्रुवीकृत विलोपन के आधार पर छानना करें, और सुरक्षा सीमाओं का विश्लेषण करें।",
    btn_start_learning: "सीखना शुरू करें",
    btn_launch_playground: "विजुअल लैब लॉन्च करें",
    section_title: "B92 का मुख्य पाठ्यक्रम",
    section_sub: "B92 प्रोटोकॉल के गणितीय, भौतिक और सुरक्षा ढांचे में महारत हासिल करें।",
    quick_summary: "त्वरित सारांश",
    concept_kicker: "अवधारणा",
    concept_of: "का",
    math_vector_title: "गैर-लंबकोणीय स्थिति समष्टि",
    math_vector_desc: "B92 केवल दो गैर-लंबकोणीय स्थितियों का उपयोग करता है, जिन्हें कॉपी नहीं किया जा सकता या पूरी तरह से अलग नहीं किया जा सकता।",
    math_vector_def: "बिट 0 स्थिति: |φ₀⟩ = |0⟩ (क्षैतिज)  |  बिट 1 स्थिति: |φ₁⟩ = |+⟩ = (|0⟩+|1⟩)/√2 (डायगोनल)",
    cta_title: "B92 का परीक्षण करने के लिए तैयार हैं?",
    cta_desc: "चैनल शोर को कॉन्फ़िगर करें, छिपकर सुनने की गतिविधि का अनुकरण करें और वास्तविक समय में बॉब की निर्णायक दर की जांच करें।",
    cta_btn_playground: "विजुअल लैब लॉन्च करें",
    cta_btn_top: "ऊपर जाएं",
    topics: {
      "b92-baseline": {
        label: "B92 प्रोटोकॉल आधारभूत रेखा",
        tag: "दो गैर-लंबकोणीय स्थितियों के साथ QKD को सरल बनाना",
        description: "1992 में चार्ल्स बेनेट द्वारा प्रस्तावित B92 प्रोटोकॉल क्वांटम कुंजी वितरण को केवल दो गैर-लंबकोणीय क्वांटम स्थितियों का उपयोग करने के लिए सरल बनाता है - एक बिट 0 के लिए और एक बिट 1 के लिए। यद्यपि यह BB84 से सरल है, यह क्वांटम नो-क्लोनिंग थ्योरम में निहित उसी बिना शर्त सुरक्षा गारंटी को प्राप्त करता है।",
        bullets: [
          "ऐलिस बिट 0 को 0° (क्षैतिज) और बिट 1 को 45° (डायगोनल) ध्रुवीकरण पर मैप करती है।",
          "चूंकि क्षैतिज और डायगोनल ध्रुवीकरण गैर-लंबकोणीय हैं, इसलिए उन्हें पूरी तरह से कॉपी नहीं किया जा सकता है।",
          "B92 की सादगी आवश्यक लेजर स्रोतों को चार से घटाकर दो कर देती है।"
        ]
      },
      "conclusive-sifting": {
        label: "बॉब के निर्णायक और अनिर्णायक माप",
        tag: "निर्णायक कुंजियों के लिए क्रॉस-ध्रुवीकृत फिल्टर",
        description: "बॉब क्रॉस-ध्रुवीकृत फिल्टर का उपयोग करता है। 90° फिल्टर पर एक क्लिक निर्णायक रूप से पहचानता है कि ऐलिस ने बिट 1 भेजा है। -45° पर एक क्लिक बिट 0 की पहचान करता है। कोई क्लिक नहीं (विलोपन) का मतलब है कि माप अनिर्णायक था — आदर्श प्रसारणों का लगभग 50%। केवल निर्णायक घटनाएं ही छनी हुई कुंजी बनाती हैं।",
        bullets: [
          "बॉब क्रॉस-ध्रुवीकृत फिल्टर का उपयोग करके मापता है: बिट 1 का पता लगाने के लिए 90° (लंबवत), और बिट 0 का पता लगाने के लिए -45°।",
          "90° पर क्लिक निर्णायक रूप से बिट 1 की पहचान करता है; -45° पर क्लिक निर्णायक रूप से बिट 0 की पहचान करता है।",
          "कोई क्लिक न होने का अर्थ है अनिर्णायक परिणाम (विलोपन), जो आदर्श परिस्थितियों में लगभग 50% बार होता है।"
        ]
      },
      "b92-noise": {
        label: "चैनल हानि और मूल शोर",
        tag: "वास्तविक दुनिया के ऑप्टिकल फाइबर से निपटना",
        description: "वास्तविक फाइबर-ऑप्टिक क्वांटम चैनल थर्मल शोर, अवशोषण हानि और चरण त्रुटियों को पेश करते हैं। ये कमियां कुछ वैध निर्णायक मापों को त्रुटियों में बदल देती हैं, जिससे बिना किसी छिपकर सुनने वाले के भी QBER बढ़ जाता है। दूरी कुंजी दर को कम करती है, और शोर मूल त्रुटियों को बढ़ाता है।",
        bullets: [
          "ऑप्टिकल अवशोषण और शोर कुंजी दरों को कम करते हैं और बुनियादी त्रुटियों को पेश करते हैं।",
          "दूरी के साथ अवशोषण तेजी से बढ़ता है: 50 किमी पर, लगभग 90% फोटॉन खो जाते हैं।",
          "अंतिम कुंजी की सुरक्षा की गारंटी के लिए मूल शोर को शास्त्रीय रूप से ठीक किया जाना चाहिए।"
        ]
      },
      "b92-eavesdropping": {
        label: "छिपकर सुनना और सुरक्षा सीमा",
        tag: "B92 में ईव के हस्तक्षेप की पहचान",
        description: "B92 में, ईव को एक कठिन चुनौती का सामना करना पड़ता है - दो स्थितियां गैर-लंबकोणीय हैं, इसलिए किसी भी माप प्रयास में गलत स्थिति की पहचान करने की गैर-शून्य संभावना होती है। यह निर्णायक क्लिक घटनाओं में त्रुटियों को पेश करता है जिन्हें बॉब और ऐलिस उन्नत QBER के रूप में पहचानते हैं। मानक निरस्त सीमा 11% QBER है।",
        bullets: [
          "ईव के व्यवधान प्रयास ध्रुवीकरण को बाधित करते हैं, जिससे बॉब के लिए त्रुटि क्लिक उत्पन्न होते हैं।",
          "गैर-लंबकोणीय स्थितियों को मापने के कारण ईव को दूषित स्थितियों को पुन: प्रसारित करना पड़ता है, जिससे QBER बढ़ जाता है।",
          "यदि निर्णायक दर बहुत कम हो जाती है या QBER 11% से अधिक हो जाता है, तो संचार निरस्त कर दिया जाता है।"
        ]
      }
    }
  },
  kn: {
    hero_title: "B92 ಕ್ವಾಂಟಮ್ ಕೀ ವಿತರಣೆ",
    hero_sub: "ಎರಡು ಪರಸ್ಪರ ಲಂಬವಲ್ಲದ ಸ್ಥಿತಿಗಳನ್ನು ಬಳಸಿ ಕೀ ವಿತರಣೆಯನ್ನು ಜಾರಿಗೊಳಿಸಿ, ಕ್ರಾಸ್-ಧ್ರುವೀಕೃತ ಅಳಿಸುವಿಕೆ ಆಧಾರಿತ ಸಿಫ್ಟಿಂಗ್ ಮಾಡಿ ಮತ್ತು ಭದ್ರತಾ ಮಿತಿಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ.",
    btn_start_learning: "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ",
    btn_launch_playground: "ದೃಶ್ಯ ಲ್ಯಾಬ್ ಪ್ರಾರಂಭಿಸಿ",
    section_title: "B92 ನ ಪ್ರಮುಖ ಪಠ್ಯಕ್ರಮ",
    section_sub: "B92 ಪ್ರೋಟೋಕಾಲ್‌ನ ಗಣಿತದ, ಭೌತಿಕ ಮತ್ತು ಭದ್ರತಾ ಚೌಕಟ್ಟುಗಳನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.",
    quick_summary: "ತ್ವರಿತ ಸಾರಾಂಶ",
    concept_kicker: "ಪರಿಕಲ್ಪನೆ",
    concept_of: "ರ",
    math_vector_title: "ಲಂಬವಲ್ಲದ ಸ್ಥಿತಿ ಸ್ಥಳ",
    math_vector_desc: "B92 ಕೇವಲ ಎರಡು ಪರಸ್ಪರ ಲಂಬವಲ್ಲದ ಸ್ಥಿತಿಗಳನ್ನು ಬಳಸುತ್ತದೆ, ಇವುಗಳನ್ನು ನಕಲಿಸಲು ಅಥವಾ ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರತ್ಯೇಕಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.",
    math_vector_def: "ಬಿಟ್ 0 ಸ್ಥಿತಿ: |φ₀⟩ = |0⟩ (ಸಮತಲ)  |  ಬಿಟ್ 1 ಸ್ಥಿತಿ: |φ₁⟩ = |+⟩ = (|0⟩+|1⟩)/√2 (ಡಯಾಗನಲ್)",
    cta_title: "B92 ಅನ್ನು ಪರೀಕ್ಷಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    cta_desc: "ಚಾನಲ್ ಶಬ್ದವನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ, ಇವ್‌ನ ಕದ್ದಾಲಿಕೆ ಚಟುವಟಿಕೆಯನ್ನು ಅನುಕರಿಸಿ ಮತ್ತು ಬಾಬ್ ಅವರ ಕನ್ಕ್ಲೂಸಿವ್ ದರವನ್ನು ಪರಿಶೀಲಿಸಿ.",
    cta_btn_playground: "ದೃಶ್ಯ ಲ್ಯಾಬ್ ಪ್ರಾರಂಭಿಸಿ",
    cta_btn_top: "ಮೇಲಕ್ಕೆ ಹೋಗಿ",
    topics: {
      "b92-baseline": {
        label: "B92 ಪ್ರೋಟೋಕಾಲ್ ಬೇಸ್‌ಲೈನ್",
        tag: "ಎರಡು ಲಂಬವಲ್ಲದ ಸ್ಥಿತಿಗಳೊಂದಿಗೆ QKD ಸರಳೀಕರಣ",
        description: "1992 ರಲ್ಲಿ ಚಾರ್ಲ್ಸ್ ಬೆನೆಟ್ ಪ್ರಸ್ತಾಪಿಸಿದ B92 ಪ್ರೋಟೋಕಾಲ್ ಕ್ವಾಂಟಮ್ ಕೀ ವಿತರಣೆಯನ್ನು ಕೇವಲ ಎರಡು ಲಂಬವಲ್ಲದ ಕ್ವಾಂಟಮ್ ಸ್ಥಿತಿಗಳನ್ನು ಬಳಸುವಂತೆ ಸರಳಗೊಳಿಸುತ್ತದೆ - ಬಿಟ್ 0 ಗೆ ಒಂದು ಮತ್ತು ಬಿಟ್ 1 ಗೆ ಒಂದು. ಇದು BB84 ಗಿಂತ ಸರಳವಾಗಿದ್ದರೂ, ಕ್ವಾಂಟಮ್ ನೋ-ಕ್ಲೋನಿಂಗ್ ಸಿದ್ಧಾಂತದಲ್ಲಿ ಬೇರೂರಿರುವ ಅದೇ ಭದ್ರತಾ ಗ್ಯಾರಂಟಿಯನ್ನು ನೀಡುತ್ತದೆ.",
        bullets: [
          "ಆಲಿಸ್ ಬಿಟ್ 0 ಅನ್ನು 0° (ಸಮತಲ) ಮತ್ತು ಬಿಟ್ 1 ಅನ್ನು 45° (ಡಯಾಗನಲ್) ಧ್ರುವೀಕರಣಕ್ಕೆ ಮ್ಯಾಪ್ ಮಾಡುತ್ತಾರೆ.",
          "ಸಮತಲ ಮತ್ತು ಡಯಾಗನಲ್ ಧ್ರುವೀಕರಣಗಳು ಪರಸ್ಪರ ಲಂಬವಾಗಿಲ್ಲದ ಕಾರಣ, ಅವುಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ನಕಲಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.",
          "B92 ನ ಸರಳತೆಯು ಅಗತ್ಯವಿರುವ ಲೇಸರ್ ಮೂಲಗಳನ್ನು ನಾಲ್ಕರಿಂದ ಎರಡಕ್ಕೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ."
        ]
      },
      "conclusive-sifting": {
        label: "ಬಾಬ್ ಅವರ ಕನ್ಕ್ಲೂಸಿವ್ ಮತ್ತು ಇನ್‌ಕನ್ಕ್ಲೂಸಿವ್ ಅಳತೆಗಳು",
        tag: "ನಿರ್ಣಾಯಕ ಕೀಲಿಗಳಿಗಾಗಿ ಕ್ರಾಸ್-ಧ್ರುವೀಕೃತ ಫಿಲ್ಟರ್‌ಗಳು",
        description: "ಬಾಬ್ ಕ್ರಾಸ್-ಧ್ರುವೀಕೃತ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಬಳಸುತ್ತಾರೆ. 90° ಫಿಲ್ಟರ್‌ನಲ್ಲಿ ಕ್ಲಿಕ್ ಆಲಿಸ್ ಬಿಟ್ 1 ಕಳುಹಿಸಿದ್ದಾರೆಂದು ನಿರ್ಣಾಯಕವಾಗಿ ಗುರುತಿಸುತ್ತದೆ. -45° ನಲ್ಲಿ ಕ್ಲಿಕ್ ಬಿಟ್ 0 ಅನ್ನು ಗುರುತಿಸುತ್ತದೆ. ಯಾವುದೇ ಕ್ಲಿಕ್ ಇಲ್ಲದಿದ್ದರೆ ಅಳತೆ ಇನ್‌ಕನ್ಕ್ಲೂಸಿವ್ ಆಗಿದೆ ಎಂದರ್ಥ — ಇದು ಆದರ್ಶ ಪ್ರಸರಣದಲ್ಲಿ 50% ಸಂಭವಿಸುತ್ತದೆ. ನಿರ್ಣಾಯಕ ಘಟನೆಗಳು ಮಾತ್ರ ಸಿಫ್ಟೆಡ್ ಕೀಲಿಯನ್ನು ರೂಪಿಸುತ್ತವೆ.",
        bullets: [
          "ಬಾಬ್ ಕ್ರಾಸ್-ಧ್ರುವೀಕೃತ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಬಳಸಿ ಅಳೆಯುತ್ತಾರೆ: ಬಿಟ್ 1 ಪತ್ತೆಹಚ್ಚಲು 90° (ಲಂಬ), ಮತ್ತು ಬಿಟ್ 0 ಪತ್ತೆಹಚ್ಚಲು -45°.",
          "90° ಕ್ಲಿಕ್ ಬಿಟ್ 1 ಅನ್ನು ನಿರ್ಣಾಯಕವಾಗಿ ಗುರುತಿಸುತ್ತದೆ; -45° ಕ್ಲಿಕ್ ಬಿಟ್ 0 ಅನ್ನು ನಿರ್ಣಾಯಕವಾಗಿ ಗುರುತಿಸುತ್ತದೆ.",
          "ಯಾವುದೇ ಕ್ಲಿಕ್ ಇಲ್ಲದಿದ್ದರೆ ಅಳತೆ ಇನ್‌ಕನ್ಕ್ಲೂಸಿವ್ (ಅಳಿಸುವಿಕೆ) ಆಗಿದೆ ಎಂದರ್ಥ, ಇದು ಆದರ್ಶ ಚಾಲನೆಯಲ್ಲಿ 50% ಸಂಭವಿಸುತ್ತದೆ."
        ]
      },
      "b92-noise": {
        label: "ಚಾನಲ್ ನಷ್ಟಗಳು ಮತ್ತು ಮೂಲ ಶಬ್ದ",
        tag: "ನೈಜ ಪ್ರಪಂಚದ ಆಪ್ಟಿಕಲ್ ಫೈಬರ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸುವುದು",
        description: "ನೈಜ ಫೈಬರ್-ಆಪ್ಟಿಕಲ್ ಕ್ವಾಂಟಮ್ ಚಾನಲ್‌ಗಳು ಉಷ್ಣ ಶಬ್ದ, ಹೀರಿಕೊಳ್ಳುವ ನಷ್ಟ ಮತ್ತು ಹಂತದ ದೋಷಗಳನ್ನು ತರುತ್ತವೆ. ಈ ನ್ಯೂನತೆಗಳು ಕೆಲವು ಮಾನ್ಯ ಅಳತೆಗಳನ್ನು ದೋಷಗಳಾಗಿ ಪರಿವರ್ತಿಸುತ್ತವೆ, ಇವ್ ಇಲ್ಲದಿದ್ದರೂ QBER ಅನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ. ದೂರವು ಕೀ ದರವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
        bullets: [
          "ಆಪ್ಟಿಕಲ್ ಹೀರಿಕೊಳ್ಳುವಿಕೆ ಮತ್ತು ಶಬ್ದವು ಕೀ ದರಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ದೋಷಗಳನ್ನು ತರುತ್ತದೆ.",
          "ದೂರ ಹೆಚ್ಚಾದಂತೆ ಹೀರಿಕೊಳ್ಳುವಿಕೆ ತೀವ್ರಗೊಳ್ಳುತ್ತದೆ: 50 ಕಿಮೀ ದೂರದಲ್ಲಿ ಸುಮಾರು 90% ಫೋಟಾನ್‌ಗಳು ಕಳೆದುಹೋಗುತ್ತವೆ.",
          "ಅಂತಿಮ ಕೀಲಿಯ ಸುರಕ್ಷತೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಮೂಲ ಶಬ್ದವನ್ನು ಕ್ಲಾಸಿಕಲ್ ಆಗಿ ತಿದ್ದಬೇಕು."
        ]
      },
      "b92-eavesdropping": {
        label: "ಕದ್ದಾಲಿಕೆ ಮತ್ತು ಭದ್ರತಾ ಮಿತಿ",
        tag: "B92 ನಲ್ಲಿ ಇವ್ ಅವರ ಕದ್ದಾಲಿಕೆ ಪತ್ತೆಹಚ್ಚುವಿಕೆ",
        description: "B92 ನಲ್ಲಿ, ಇವ್ ಕಠಿಣ ಸವಾಲನ್ನು ಎದುರಿಸುತ್ತಾರೆ - ಎರಡು ಸ್ಥಿತಿಗಳು ಲಂಬವಾಗಿಲ್ಲ, ಆದ್ದರಿಂದ ಯಾವುದೇ ಅಳತೆಯ ಪ್ರಯತ್ನವು ತಪ್ಪಾಗಿ ಗುರುತಿಸುವ ಸಾಧ್ಯತೆಯನ್ನು ಹೊಂದಿರುತ್ತದೆ. ಇದು ಬಾಬ್ ಮತ್ತು ಆಲಿಸ್ ಪತ್ತೆಹಚ್ಚುವ ಕನ್ಕ್ಲೂಸಿವ್ ಕ್ಲಿಕ್ ಘಟನೆಗಳಲ್ಲಿ ದೋಷಗಳನ್ನು ತರುತ್ತದೆ. ಪ್ರಮಾಣಿತ ಸ್ಥಗಿತ ಮಿತಿ 11% QBER ಆಗಿದೆ.",
        bullets: [
          "ಇವ್ ಅವರ ಹಸ್ತಕ್ಷೇಪದ ಪ್ರಯತ್ನಗಳು ಧ್ರುವೀಕರಣವನ್ನು ಕದಲಿಸುತ್ತವೆ, ಬಾಬ್‌ಗೆ ದೋಷ ಕ್ಲಿಕ್‌ಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತವೆ.",
          "ಲಂಬವಲ್ಲದ ಸ್ಥಿತಿಗಳನ್ನು ಅಳೆಯುವುದರಿಂದ ಇವ್ ತಪ್ಪಾದ ಸ್ಥಿತಿಗಳನ್ನು ಮರುಪ್ರಸಾರ ಮಾಡಬೇಕಾಗುತ್ತದೆ, ಇದು QBER ಹೆಚ್ಚಿಸುತ್ತದೆ.",
          "ನಿರ್ಣಾಯಕ ದರ ತುಂಬಾ ಕಡಿಮೆಯಾದರೆ ಅಥವಾ QBER 11% ಮೀರಿದರೆ ಸಂವಹನ ನಿಲ್ಲಿಸಲಾಗುತ್ತದೆ."
        ]
      }
    }
  },
  ta: {
    hero_title: "B92 குவாண்டம் விசை விநியோகம்",
    hero_sub: "இரண்டு பரஸ்பரம் செங்குத்தற்ற நிலைகளைப் பயன்படுத்தி விசை விநியோகத்தை செயல்படுத்தி, துருவமுனைப்பு நீக்கம் அடிப்படையில் சல்லடை செய்து, பாதுகாப்பு வரம்புகளை பகுப்பாய்வு செய்யுங்கள்.",
    btn_start_learning: "கற்கத் தொடங்குங்கள்",
    btn_launch_playground: "விஷுவல் லேப்பைத் தொடங்குங்கள்",
    section_title: "B92 இன் முக்கிய பாடத்திட்டம்",
    section_sub: "B92 நெறிமுறையின் கணித, இயற்பியல் மற்றும் பாதுகாப்பு கட்டமைப்புகளை மாஸ்டர் செய்யுங்கள்.",
    quick_summary: "விரைவான சுருக்கம்",
    concept_kicker: "கருத்து",
    concept_of: "இல்",
    math_vector_title: "செங்குத்தற்ற நிலை விண்வெளி",
    math_vector_desc: "B92 நெறிமுறை நகலெடுக்க அல்லது சரியாக பிரிக்க முடியாத இரண்டு பரஸ்பரம் செங்குத்தற்ற நிலைகளை மட்டுமே பயன்படுத்துகிறது.",
    math_vector_def: "பிட் 0 நிலை: |φ₀⟩ = |0⟩ (கிடைமட்ட)  |  பிட் 1 நிலை: |φ₁⟩ = |+⟩ = (|0⟩+|1⟩)/√2 (மூலைவிட்டம்)",
    cta_title: "B92 ஐ சோதிக்க தயாரா?",
    cta_desc: "சேனல் சத்தத்தை உள்ளமைக்கவும், ஈவின் குறுக்கீட்டை உருவகப்படுத்தவும், மற்றும் நிகழ்நேரத்தில் பாபின் உறுதியான அளவீட்டு விகிதத்தை சரிபார்க்கவும்.",
    cta_btn_playground: "விஷுவல் லேப்பைத் தொடங்குங்கள்",
    cta_btn_top: "மேலே செல்",
    topics: {
      "b92-baseline": {
        label: "B92 நெறிமுறை அடிப்படை",
        tag: "இரண்டு செங்குத்தற்ற நிலைகளுடன் QKD ஐ எளிமையாக்குதல்",
        description: "1992 இல் சார்லஸ் பென்னட்டால் முன்மொழியப்பட்ட B92 நெறிமுறை குவாண்டம் விசை விநியோகத்தை வெறும் இரண்டு செங்குத்தற்ற குவாண்டம் நிலைகளை மட்டுமே பயன்படுத்தும் வகையில் எளிதாக்குகிறது - பிட் 0 க்கு ஒன்று மற்றும் பிட் 1 க்கு ஒன்று. இது BB84 ஐ விட எளிமையானது என்றாலும், அதே பாதுகாப்பு உத்தரவாதத்தை வழங்குகிறது.",
        bullets: [
          "ஆலிஸ் பிட் 0 ஐ 0° (கிடைமட்ட) மற்றும் பிட் 1 ஐ 45° (மூலைவிட்டம்) துருவமுனைப்புக்கு இணைக்கிறார்.",
          "கிடைமட்ட மற்றும் மூலைவிட்ட துருவமுனைப்புகள் செங்குத்தாக இல்லை என்பதால், அவற்றை சரியாக நகலெடுக்க முடியாது.",
          "B92 இன் எளிமை தேவையான லேசர் ஆதாரங்களை நான்கிலிருந்து இரண்டாக குறைக்கிறது."
        ]
      },
      "conclusive-sifting": {
        label: "பாபின் உறுதியான மற்றும் உறுதியற்ற அளவீடுகள்",
        tag: "உறுதியான விசைகளுக்கான குறுக்கு-துருவப்படுத்தப்பட்ட வடிகட்டிகள்",
        description: "பாப் குறுக்கு-துருவப்படுத்தப்பட்ட வடிகட்டிகளைப் பயன்படுத்துகிறார். 90° வடிகட்டியில் ஒரு கிளிக் ஆலிஸ் பிட் 1 அனுப்பியுள்ளார் என்பதை உறுதியாகக் காட்டுகிறது. -45° இல் ஒரு கிளிக் பிட் 0 ஐக் காட்டுகிறது. எந்த கிளிக்கும் இல்லை என்றால் அளவீடு உறுதியற்றது — இது சோதனையில் 50% நிகழ்கிறது.",
        bullets: [
          "பாப் குறுக்கு-துருவப்படுத்தப்பட்ட வடிகட்டிகளைப் பயன்படுத்தி அளவிடுகிறார்: பிட் 1 ஐக் கண்டறிய 90° (செங்குத்து), மற்றும் பிட் 0 ஐக் கண்டறிய -45°.",
          "90° கிளிக் பிட் 1 ஐ உறுதியாகக் காட்டுகிறது; -45° கிளிக் பிட் 0 ஐ உறுதியாகக் காட்டுகிறது.",
          "எந்த கிளிக்கும் இல்லை என்றால் அளவீடு உறுதியற்றது (அழிப்பு) என்று பொருள், இது 50% சோதனைகளில் நிகழ்கிறது."
        ]
      },
      "b92-noise": {
        label: "சேனல் இழப்புகள் மற்றும் அடிப்படை சத்தம்",
        tag: "உண்மையான உலக ஆப்டிகல் ஃபைபர்களை கையாளுதல்",
        description: "உண்மையான ஆப்டிகல் ஃபைபர் சேனல்கள் வெப்ப சத்தம், உறிஞ்சுதல் இழப்பு மற்றும் கட்ட பிழைகளை அறிமுகப்படுத்துகின்றன. இந்த குறைபாடுகள் சில சோதனைகளை பிழைகளாக மாற்றி, ஈவ் இல்லாவிட்டாலும் QBER ஐ உயர்த்துகின்றன. தூரம் விசை விகிதத்தை குறைக்கிறது.",
        bullets: [
          "ஆப்டிகல் உறிஞ்சுதல் மற்றும் சத்தம் விசை விகிதங்களை குறைத்து பிழைகளை அறிமுகப்படுத்துகின்றன.",
          "தூரம் அதிகரிக்கும் போது உறிஞ்சுதல் வேகமாக வளர்கிறது: 50 கிமீ தூரத்தில் 90% ஃபோட்டான்கள் இழக்கப்படுகின்றன.",
          "விசையின் பாதுகாப்பை உறுதிப்படுத்த அடிப்படை சத்தம் பாரம்பரிய முறைகளால் சரிசெய்யப்பட வேண்டும்."
        ]
      },
      "b92-eavesdropping": {
        label: "இடைமறிப்பு மற்றும் பாதுகாப்பு வரம்பு",
        tag: "B92 இல் ஈவின் குறுக்கீட்டைக் கண்டறிதல்",
        description: "B92 இல், ஈவ் ஒரு கடினமான சவாலை எதிர்கொள்கிறார் - இரண்டு நிலைகளும் செங்குத்தாக இல்லை, எனவே எந்த அளவீட்டு முயற்சியும் தவறாக அடையாளம் காணும் வாய்ப்பைக் கொண்டுள்ளது. இது பாப் மற்றும் ஆலிஸ் கண்டறியும் உறுதியான கிளிக்குகளில் பிழைகளை அறிமுகப்படுத்துகிறது. நிலையான நிறுத்த வரம்பு 11% QBER ஆகும்.",
        bullets: [
          "ஈவின் குறுக்கீடு முயற்சிகள் துருவமுனைப்பை சிதைத்து, பாபிற்கு பிழை கிளிக்குகளை உருவாக்குகின்றன.",
          "செங்குத்தற்ற நிலைகளை அளவிடுவதால் ஈவ் தவறான நிலைகளை மீண்டும் அனுப்ப வேண்டியிருக்கும், இது QBER ஐ உயர்த்துகிறது.",
          "உறுதியான விகிதம் மிகவும் குறைந்தால் அல்லது QBER 11% ஐத் தாண்டினால் தொடர்பு நிறுத்தப்படும்."
        ]
      }
    }
  },
  es: {
    hero_title: "Distribución de Claves Cuánticas B92",
    hero_sub: "Implemente la distribución de claves utilizando dos estados no ortogonales, el sifting basado en la eliminación por polarización cruzada, y analice los límites de seguridad.",
    btn_start_learning: "Comenzar a Aprender",
    btn_launch_playground: "Iniciar Laboratorio Visual",
    section_title: "Plan de Estudios de B92",
    section_sub: "Domine los marcos matemáticos, físicos y de seguridad del protocolo B92.",
    quick_summary: "Resumen Rápido",
    concept_kicker: "Concepto",
    concept_of: "de",
    math_vector_title: "Espacio de Estados No Ortogonales",
    math_vector_desc: "B92 utiliza solo dos estados no ortogonales, que no pueden ser clonados ni distinguidos perfectamente.",
    math_vector_def: "Estado de Bit 0: |φ₀⟩ = |0⟩ (Horizontal)  |  Estado de Bit 1: |φ₁⟩ = |+⟩ = (|0⟩+|1⟩)/√2 (Diagonal)",
    cta_title: "¿Listo para probar B92?",
    cta_desc: "Configure el ruido del canal, simule la actividad de espionaje y verifique la tasa concluyente de Bob en tiempo real.",
    cta_btn_playground: "Iniciar Laboratorio Visual",
    cta_btn_top: "Volver Arriba",
    topics: {
      "b92-baseline": {
        label: "Línea de Base del Protocolo B92",
        tag: "Simplificando QKD con dos estados no ortogonales",
        description: "El protocolo B92, propuesto por Charles Bennett en 1992, simplifica la distribución de claves cuánticas al utilizar solo dos estados cuánticos no ortogonales: uno para el bit 0 y otro para el bit 1. Aunque es más simple que el BB84, logra la misma garantía de seguridad incondicional basada en el Teorema de No Clonación.",
        bullets: [
          "Alice asigna el bit 0 a la polarización de 0° (horizontal) y el bit 1 a la de 45° (diagonal).",
          "Como las polarizaciones horizontal y diagonal no son ortogonales, no se pueden clonar perfectamente.",
          "La simplicidad del B92 reduce las fuentes de láser requeridas de cuatro a dos."
        ]
      },
      "conclusive-sifting": {
        label: "Mediciones Concluyentes e Inconcluyentes de Bob",
        tag: "Filtros de polarización cruzada para claves concluyentes",
        description: "Bob utiliza filtros de polarización cruzada. Un clic en el filtro de 90° identifica de forma concluyente que Alice envió el bit 1. Un clic en −45° identifica el bit 0. Ningún clic (borrado) significa que la medición no fue concluyente, aproximadamente el 50% de las transmisiones ideales. Solo los eventos concluyentes forman la clave filtrada.",
        bullets: [
          "Bob mide utilizando filtros de polarización cruzada: 90° (vertical) para detectar el bit 1, y -45° para detectar el bit 0.",
          "Un clic a 90° identifica de forma concluyente el bit 1; un clic a -45° identifica de forma concluyente el bit 0.",
          "Ningún clic significa que el resultado no fue concluyente (borrado), lo que ocurre aproximadamente el 50% del tiempo en ejecuciones ideales."
        ]
      },
      "b92-noise": {
        label: "Pérdidas de Canal y Ruido de Base",
        tag: "Tratamiento de fibras ópticas del mundo real",
        description: "Los canales cuánticos de fibra óptica reales introducen ruido de despolarización, pérdida de fotones por atenuación y errores de fase. Estas imperfecciones convierten algunas mediciones concluyentes válidas en errores, elevando la QBER incluso sin ningún espía. La distancia reduce la tasa de clave y el ruido eleva los errores de base.",
        bullets: [
          "La atenuación óptica y los recuentos oscuros reducen las tasas de clave e introducen errores de base.",
          "La atenuación escala exponencialmente: a 50 km, se pierde aproximadamente el 90% de los fotones.",
          "El ruido de base debe corregirse clásicamente para garantizar la seguridad de la clave final."
        ]
      },
      "b92-eavesdropping": {
        label: "Espionaje y Límite de Seguridad",
        tag: "Detección de la firma de Eve en B92",
        description: "En B92, Eve se enfrenta a un desafío mayor: los dos estados no son ortogonales, por lo que cualquier intento de medición tiene una probabilidad no nula de identificar erróneamente el estado. Esto introduce errores en los eventos de clic concluyentes que Bob y Alice detectan como QBER elevada. El umbral estándar de aborto es 11% de QBER.",
        bullets: [
          "Los intentos de intercepción de Eve perturban la polarización, creando clics de error para Bob.",
          "La medición de estados no ortogonales hace que Eve retransmita estados corruptos, elevando la QBER.",
          "Si la tasa concluyente cae o la QBER supera el 11%, la comunicación se aborta."
        ]
      }
    }
  },
  fr: {
    hero_title: "Distribution de Clés Quantiques B92",
    hero_sub: "Implémentez la distribution de clés en utilisant deux états non orthogonaux, le sifting basé sur l'effacement par polarisation croisée, et analysez les limites de sécurité.",
    btn_start_learning: "Commencer à Apprendre",
    btn_launch_playground: "Lancer le Lab Visuel",
    section_title: "Programme d'Études de B92",
    section_sub: "Maîtrisez les cadres mathématiques, physiques et de sécurité du protocole B92.",
    quick_summary: "Résumé Rapide",
    concept_kicker: "Concept",
    concept_of: "sur",
    math_vector_title: "Espace des États Non Orthogonaux",
    math_vector_desc: "Le protocole B92 utilise seulement deux états non orthogonaux, qui ne peuvent être clonés ou distingués parfaitement.",
    math_vector_def: "État de Bit 0 : |φ₀⟩ = |0⟩ (Horizontal)  |  État de Bit 1 : |φ₁⟩ = |+⟩ = (|0⟩+|1⟩)/√2 (Diagonal)",
    cta_title: "Prêt à tester le protocole B92 ?",
    cta_desc: "Configurez le bruit du canal, simulez l'activité d'espionnage et vérifiez le taux de résultats concluants de Bob en temps réel.",
    cta_btn_playground: "Lancer le Lab Visuel",
    cta_btn_top: "Retour en Haut",
    topics: {
      "b92-baseline": {
        label: "Ligne de Base du Protocole B92",
        tag: "Simplifier la QKD avec deux états non orthogonaux",
        description: "Le protocole B92, proposé par Charles Bennett en 1992, simplifie la distribution de clés quantiques pour utiliser seulement deux états quantiques non orthogonaux — un pour le bit 0 et un pour le bit 1. Bien que plus simple que le BB84, il obtient la même garantie de sécurité inconditionnelle ancrée dans le théorème de non-clonage.",
        bullets: [
          "Alice associe le bit 0 à la polarisation de 0° (horizontale) et le bit 1 à celle de 45° (diagonale).",
          "Comme les polarisations horizontales et diagonales ne sont pas orthogonales, elles ne peuvent être clonées parfaitement.",
          "La simplicité du B92 réduit les sources laser requises de quatre à deux."
        ]
      },
      "conclusive-sifting": {
        label: "Mesures Concluantes & Non Concluantes de Bob",
        tag: "Filtres de polarisation croisée pour clés concluantes",
        description: "Bob utilise des filtres de polarisation croisée. Un clic au filtre à 90° identifie de manière concluante qu'Alice a envoyé le bit 1. Un clic à −45° identifie le bit 0. Aucun clic (effacement) signifie que la mesure n'était pas concluante — environ 50 % de toutes les transmissions idéales. Seuls les événements concluants forment la clé tamisée.",
        bullets: [
          "Bob mesure à l'aide de filtres de polarisation croisée : 90° (vertical) pour détecter le bit 1, et -45° pour détecter le bit 0.",
          "Un clic à 90° identifie de manière concluante le bit 1 ; un clic à -45° identifie de manière concluante le bit 0.",
          "Aucun clic signifie que le résultat n'était pas concluant (effacement), ce qui se produit environ 50 % du temps dans des conditions idéales."
        ]
      },
      "b92-noise": {
        label: "Pertes de Canal & Bruit de Base",
        tag: "Gérer les fibres optiques du monde réel",
        description: "Les canaux quantiques réels en fibre optique introduisent du bruit de dépolarisation, des pertes de photons par atténuation et des erreurs de phase. Ces imperfections convertissent certaines mesures concluantes valides en erreurs, augmentant le QBER même sans aucun espion. La distance réduit le taux de clé et le bruit augmente les erreurs de base.",
        bullets: [
          "L'atténuation optique et le bruit du détecteur réduisent les taux de clé et introduisent des erreurs de base.",
          "L'atténuation augmente de manière exponentielle : à 50 km, environ 90 % des photons sont perdus.",
          "Le bruit de base doit être corrigé de manière classique pour garantir la sécurité de la clé finale."
        ]
      },
      "b92-eavesdropping": {
        label: "Espionnage & Limite de Sécurité",
        tag: "Détection de la signature d'Eve dans le B92",
        description: "Dans le protocole B92, Eve fait face à un défi plus difficile — les deux états ne sont pas orthogonaux, donc toute tentative de mesure a une probabilité non nulle de mal identifier l'état. Cela introduit des erreurs dans les clics concluants que Bob et Alice détectent comme un QBER élevé. Le seuil d'avortement standard est de 11 % de QBER.",
        bullets: [
          "Les tentatives d'interception d'Eve perturbent la polarisation, créant des clics d'erreur pour Bob.",
          "La mesure d'états non orthogonaux oblige Eve à réémettre des états corrompus, augmentant le QBER.",
          "Si le taux de résultats concluants chute ou si le QBER dépasse 11 %, la communication est interrompue."
        ]
      }
    }
  }
};
