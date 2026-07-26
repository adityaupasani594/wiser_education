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

export const TRANSLATIONS_EXP_3_1: Record<LangCode, QKDTranslations> = {
  en: {
    hero_title: "BB84 Quantum Key Distribution",
    hero_sub: "Prepare single-photon polarization states, simulate intercept-resend eavesdropping, and verify QBER thresholds.",
    btn_start_learning: "Start Learning",
    btn_launch_playground: "Launch Visual Lab",
    section_title: "Core Curriculum of BB84",
    section_sub: "Master the mathematical, physical, and security frameworks of QKD.",
    quick_summary: "Quick Summary",
    concept_kicker: "Concept",
    concept_of: "of",
    math_vector_title: "Polarization State Space",
    math_vector_desc: "Photons are prepared in rectilinear (+) and diagonal (×) bases, which are mutually unbiased conjugate bases.",
    math_vector_def: "Computational Basis: |0⟩, |1⟩  |  Diagonal Basis: |+⟩ = (|0⟩+|1⟩)/√2, |−⟩ = (|0⟩-|1⟩)/√2",
    cta_title: "Ready to test BB84?",
    cta_desc: "Configure the channel, slide Eve's intercept level, and run polarization measurements.",
    cta_btn_playground: "Launch Visual Lab",
    cta_btn_top: "Back to Top",
    topics: {
      "bb84-baseline": {
        label: "BB84 Protocol Foundations",
        tag: "Alice & Bob's ideal communication",
        description: "The BB84 protocol, devised by Charles Bennett and Gilles Brassard in 1984, is the world's first quantum key distribution scheme. It uses the quantum mechanical principle that measuring a quantum state disturbs it irreversibly, making any eavesdropping detectable. In this baseline experiment, Alice and Bob communicate over an ideal, noise-free fiber channel with no eavesdropper present.",
        bullets: [
          "Alice randomly selects a bit value (0 or 1) and a basis (+ or ×) for each photon.",
          "She encodes the bit onto the photon's polarization: |0⟩ or |1⟩ in the + basis; |+⟩ or |−⟩ in the × basis.",
          "Bob independently chooses a random basis for each photon. Sifted key is formed from matching bases."
        ]
      },
      "bases-polarization": {
        label: "Conjugate Bases & Polarization",
        tag: "Mutually unbiased polarization states",
        description: "BB84 employs two mutually unbiased bases. Horizontally polarized and vertically polarized states form the rectilinear basis (+). Polarizations at +45° and −45° form the diagonal basis (×). When Bob measures using Alice's basis, he gets the exact bit. Using the wrong basis collapses the qubit and randomizes the outcome.",
        bullets: [
          "BB84 employs two mutually unbiased bases: Rectilinear (+) Horizontal/Vertical and Diagonal (×) +45°/−45°.",
          "These bases are conjugate — measuring in the wrong basis yields a completely random result (50% chance).",
          "Sifting compares bases publicly, keeping only matched bases to build a shared secure key."
        ]
      },
      "eavesdropping-detection": {
        label: "Eavesdropping & Intercept-Resend",
        tag: "How Eve's active intercept disturbs states",
        description: "When Eve intercepts a photon, she must guess a basis with 50% chance of being wrong. Wrong-basis measurement collapses the qubit, and Eve retransmits the wrong state — introducing detectable errors in Bob's matched-basis positions. A full intercept-resend attack raises QBER to 25%, well above the 11% abort limit.",
        bullets: [
          "If Eve intercepts a photon, she must guess the measurement basis, causing state collapse.",
          "Eve's wrong-basis measurements introduce random noise, causing a 25% QBER in Bob's sifted key.",
          "If the Quantum Bit Error Rate (QBER) exceeds 11%, Alice and Bob abort the key as insecure."
        ]
      },
      "fiber-limitations": {
        label: "Fiber Constraints & Decoy States",
        tag: "Photon loss, noise, and PNS attack mitigation",
        description: "Real-world optical fiber channels suffer from thermal noise, absorption loss, and phase errors. Thermal noise raises the baseline QBER. Decoy state transmission allows Alice and Bob to measure photon yield per intensity level, exposing PNS attacks and enabling long-distance fiber QKD.",
        bullets: [
          "Optical fibers exhibit absorption loss (~0.2 dB/km), reducing photon delivery rates.",
          "Detector dark counts and noise create background errors that increase QBER over long distances.",
          "Decoy State protocol transmits pulses at varying intensities to detect Photon Number Splitting (PNS) attacks."
        ]
      }
    }
  },
  hi: {
    hero_title: "BB84 क्वांटम कुंजी वितरण",
    hero_sub: "एकल-फोटॉन ध्रुवीकरण स्थिति तैयार करें, बीचे ही सुनने (छिपकर सुनने) के हमलों का अनुकरण करें और QBER थ्रेसहोल्ड की पुष्टि करें।",
    btn_start_learning: "सीखना शुरू करें",
    btn_launch_playground: "विजुअल लैब लॉन्च करें",
    section_title: "BB84 का मुख्य पाठ्यक्रम",
    section_sub: "QKD के गणितीय, भौतिक और सुरक्षा ढांचे में महारत हासिल करें।",
    quick_summary: "त्वरित सारांश",
    concept_kicker: "अवधारणा",
    concept_of: "का",
    math_vector_title: "ध्रुवीकरण स्थिति समष्टि",
    math_vector_desc: "फोटॉन रेक्टिलिनियर (+) और डायगोनल (×) आधारों में तैयार किए जाते हैं, जो परस्पर निष्पक्ष संयुग्मी आधार हैं।",
    math_vector_def: "कम्प्यूटेशनल आधार: |0⟩, |1⟩  |  डायगोनल आधार: |+⟩ = (|0⟩+|1⟩)/√2, |−⟩ = (|0⟩-|1⟩)/√2",
    cta_title: "BB84 का परीक्षण करने के लिए तैयार हैं?",
    cta_desc: "चैनल को कॉन्फ़िगर करें, ईव के व्यवधान स्तर को स्लाइड करें, और ध्रुवीकरण माप चलाएं।",
    cta_btn_playground: "विजुअल लैब लॉन्च करें",
    cta_btn_top: "ऊपर जाएं",
    topics: {
      "bb84-baseline": {
        label: "BB84 प्रोटोकॉल की नींव",
        tag: "ऐलिस और बॉब का आदर्श संचार",
        description: "1984 में चार्ल्स बेनेट और गाइल्स ब्रासर्ड द्वारा तैयार किया गया BB84 प्रोटोकॉल दुनिया की पहली क्वांटम कुंजी वितरण योजना है। यह क्वांटम यांत्रिक सिद्धांत का उपयोग करता है कि क्वांटम स्थिति को मापने से यह अपरिवर्तनीय रूप से बाधित हो जाता है, जिससे किसी भी छिपकर सुनने का पता लगाया जा सकता है। इस आधारभूत प्रयोग में, ऐलिस और बॉब बिना किसी छिपकर सुनने वाले के एक आदर्श, शोर-मुक्त फाइबर चैनल पर संवाद करते हैं।",
        bullets: [
          "ऐलिस प्रत्येक फोटॉन के लिए यादृच्छिक रूप से एक बिट मान (0 या 1) और एक आधार (+ या ×) चुनती है।",
          "वह बिट को फोटॉन के ध्रुवीकरण पर एनकोड करती है: + आधार में |0⟩ या |1⟩; × आधार में |+⟩ या |−⟩।",
          "बॉब स्वतंत्र रूप से प्रत्येक फोटॉन के लिए यादृच्छिक आधार चुनता है। मिलान आधारों से छनी हुई कुंजी बनाई जाती है।"
        ]
      },
      "bases-polarization": {
        label: "संयुग्मी आधार और ध्रुवीकरण",
        tag: "परस्पर निष्पक्ष ध्रुवीकरण स्थितियां",
        description: "BB84 दो परस्पर निष्पक्ष आधारों को नियोजित करता है। क्षैतिज रूप से ध्रुवीकृत और लंबवत रूप से ध्रुवीकृत स्थितियां रेक्टिलिनियर आधार (+) बनाती हैं। +45° और -45° पर ध्रुवीकरण डायगोनल आधार (×) बनाते हैं। जब बॉब ऐलिस के आधार का उपयोग करके मापता है, तो उसे सटीक बिट मिलती है। गलत आधार का उपयोग करने से क्यूबिट ढह जाता है और परिणाम यादृच्छिक हो जाता है।",
        bullets: [
          "BB84 दो परस्पर निष्पक्ष आधारों को नियोजित करता है: रेक्टिलिनियर (+) क्षैतिज/लंबवत और डायगोनल (×) +45°/−45°।",
          "ये आधार संयुग्मी हैं — गलत आधार में मापने से पूरी तरह से यादृच्छिक परिणाम (50% संभावना) मिलता है।",
          "छंटनी (Sifting) सार्वजनिक रूप से आधारों की तुलना करती है, एक साझा सुरक्षित कुंजी बनाने के लिए केवल मिलान आधारों को रखती है।"
        ]
      },
      "eavesdropping-detection": {
        label: "छिपकर सुनना और इंटरसेप्ट-रीसेंड",
        tag: "कैसे ईव का सक्रिय हस्तक्षेप स्थितियों को बाधित करता है",
        description: "जब ईव एक फोटॉन को रोकती है, तो उसे गलत होने की 50% संभावना के साथ आधार का अनुमान लगाना चाहिए। गलत-आधार माप क्यूबिट को ढहा देता है, और ईव गलत स्थिति को पुन: प्रसारित करती है — बॉब के मिलान-आधार स्थानों में पता लगाने योग्य त्रुटियों को पेश करती है। एक पूर्ण इंटरसेप्ट-रीसेंड हमला QBER को 25% तक बढ़ा देता है, जो 11% निरस्त सीमा से काफी ऊपर है।",
        bullets: [
          "यदि ईव फोटॉन को रोकती है, तो उसे माप आधार का अनुमान लगाना होगा, जिससे स्थिति ढह जाती है।",
          "ईव के गलत-आधार माप यादृच्छिक शोर उत्पन्न करते हैं, जिससे बॉब की छनी हुई कुंजी में 25% QBER होता है।",
          "यदि क्वांटम बिट त्रुटि दर (QBER) 11% से अधिक है, तो ऐलिस और बॉब कुंजी को असुरक्षित मानकर निरस्त कर देते हैं।"
        ]
      },
      "fiber-limitations": {
        label: "फाइबर बाधाएं और डिकॉय स्थितियां",
        tag: "फोटॉन हानि, शोर, और PNS हमले का शमन",
        description: "वास्तविक दुनिया के ऑप्टिकल फाइबर चैनल थर्मल शोर, अवशोषण हानि और चरण त्रुटियों से ग्रस्त हैं। थर्मल शोर आधारभूत QBER को बढ़ाता है। डिकॉय स्टेट ट्रांसमिशन ऐलिस और बॉब को प्रति तीव्रता स्तर फोटॉन उपज को मापने की अनुमति देता है, जिससे PNS हमलों का पर्दाफाश होता है और लंबी दूरी के फाइबर QKD सक्षम होते हैं।",
        bullets: [
          "ऑप्टिकल फाइबर अवशोषण हानि (~0.2 dB/km) प्रदर्शित करते हैं, जिससे फोटॉन वितरण दर कम हो जाती है।",
          "डिटेक्टर डार्क काउंट और शोर पृष्ठभूमि त्रुटियां बनाते हैं जो लंबी दूरी पर QBER को बढ़ाते हैं।",
          "डिकॉय स्टेट प्रोटोकॉल फोटॉन नंबर स्प्लिटिंग (PNS) हमलों का पता लगाने के लिए अलग-अलग तीव्रता पर पल्स प्रसारित करता है।"
        ]
      }
    }
  },
  kn: {
    hero_title: "BB84 ಕ್ವಾಂಟಮ್ ಕೀ ವಿತರಣೆ",
    hero_sub: "ಏಕ-ಫೋಟಾನ್ ಧ್ರುವೀಕರಣ ಸ್ಥಿತಿಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿ, ಇವ್ ಕದ್ದಾಲಿಕೆಯನ್ನು ಅನುಕರಿಸಿ ಮತ್ತು QBER ಮಿತಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
    btn_start_learning: "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ",
    btn_launch_playground: "ದೃಶ್ಯ ಲ್ಯಾಬ್ ಪ್ರಾರಂಭಿಸಿ",
    section_title: "BB84 ನ ಪ್ರಮುಖ ಪಠ್ಯಕ್ರಮ",
    section_sub: "QKD ನ ಗಣಿತದ, ಭೌತಿಕ ಮತ್ತು ಭದ್ರತಾ ಚೌಕಟ್ಟುಗಳನ್ನು ಕರಗತ ಮಾಡಿಕೊಳ್ಳಿ.",
    quick_summary: "ತ್ವರಿತ ಸಾರಾಂಶ",
    concept_kicker: "ಪರಿಕಲ್ಪನೆ",
    concept_of: "ರ",
    math_vector_title: "ಧ್ರುವೀಕರಣ ಸ್ಥಿತಿ ಸ್ಥಳ",
    math_vector_desc: "ಫೋಟಾನ್‌ಗಳನ್ನು ರೆಕ್ಟಿಲಿನಿಯರ್ (+) ಮತ್ತು ಡಯಾಗನಲ್ (×) ಆಧಾರಗಳಲ್ಲಿ ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತದೆ, ಇವು ಪರಸ್ಪರ ಪಕ್ಷಪಾತವಿಲ್ಲದ ಸಂಯೋಜಿತ ಆಧಾರಗಳಾಗಿವೆ.",
    math_vector_def: "ಗಣನಾತ್ಮಕ ಆಧಾರ: |0⟩, |1⟩  |  ಡಯಾಗನಲ್ ಆಧಾರ: |+⟩ = (|0⟩+|1⟩)/√2, |−⟩ = (|0⟩-|1⟩)/√2",
    cta_title: "BB84 ಅನ್ನು ಪರೀಕ್ಷಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
    cta_desc: "ಚಾನಲ್ ಅನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ, ಇವ್‌ನ ಅಡಚಣೆಯ ಮಟ್ಟವನ್ನು ಸ್ಲೈಡ್ ಮಾಡಿ ಮತ್ತು ಧ್ರುವೀಕರಣದ ಅಳತೆಗಳನ್ನು ರನ್ ಮಾಡಿ.",
    cta_btn_playground: "ದೃಶ್ಯ ಲ್ಯಾಬ್ ಪ್ರಾರಂಭಿಸಿ",
    cta_btn_top: "ಮೇಲಕ್ಕೆ ಹೋಗಿ",
    topics: {
      "bb84-baseline": {
        label: "BB84 ಪ್ರೋಟೋಕಾಲ್ ಅಡಿಪಾಯ",
        tag: "ಆಲಿಸ್ ಮತ್ತು ಬಾಬ್ ಅವರ ಆದರ್ಶ ಸಂವಹನ",
        description: "1984 ರಲ್ಲಿ ಚಾರ್ಲ್ಸ್ ಬೆನೆಟ್ ಮತ್ತು ಗಿಲ್ಲೆಸ್ ಬ್ರಾಸಾರ್ಡ್ ವಿನ್ಯಾಸಗೊಳಿಸಿದ BB84 ಪ್ರೋಟೋಕಾಲ್ ವಿಶ್ವದ ಮೊದಲ ಕ್ವಾಂಟಮ್ ಕೀ ವಿತರಣಾ ಯೋಜನೆಯಾಗಿದೆ. ಇದು ಕ್ವಾಂಟಮ್ ಸ್ಥಿತಿಯನ್ನು ಅಳೆಯುವುದು ಅದನ್ನು ಬದಲಾಯಿಸಲಾಗದಂತೆ ತೊಂದರೆಗೊಳಿಸುತ್ತದೆ ಎಂಬ ತತ್ವವನ್ನು ಬಳಸುತ್ತದೆ, ಇದು ಯಾವುದೇ ಕದ್ದಾಲಿಕೆಯನ್ನು ಪತ್ತೆಹಚ್ಚುವಂತೆ ಮಾಡುತ್ತದೆ. ಈ ಬೇಸ್‌ಲೈನ್ ಪ್ರಯೋಗದಲ್ಲಿ, ಯಾವುದೇ ಕದ್ದಾಲಿಕೆದಾರರಿಲ್ಲದ ಆದರ್ಶ, ಶಬ್ದ-ಮುಕ್ತ ಫೈಬರ್ ಚಾನಲ್‌ನಲ್ಲಿ ಆಲಿಸ್ ಮತ್ತು ಬಾಬ್ ಸಂವಹನ ನಡೆಸುತ್ತಾರೆ.",
        bullets: [
          "ಆಲಿಸ್ ಯಾದೃಚ್ಛಿಕವಾಗಿ ಪ್ರತಿ ಫೋಟಾನ್‌ಗಾಗಿ ಬಿಟ್ ಮೌಲ್ಯವನ್ನು (0 ಅಥವಾ 1) ಮತ್ತು ಆಧಾರವನ್ನು (+ ಅಥವಾ ×) ಆಯ್ಕೆ ಮಾಡುತ್ತಾರೆ.",
          "ಅವರು ಬಿಟ್ ಅನ್ನು ಫೋಟಾನ್‌ನ ಧ್ರುವೀಕರಣಕ್ಕೆ ಎನ್ಕೋಡ್ ಮಾಡುತ್ತಾರೆ: + ಆಧಾರದಲ್ಲಿ |0⟩ ಅಥವಾ |1⟩; × ಆಧಾರದಲ್ಲಿ |+⟩ ಅಥವಾ |−⟩.",
          "ಬಾಬ್ ಸ್ವತಂತ್ರವಾಗಿ ಪ್ರತಿ ಫೋಟಾನ್‌ಗೆ ಯಾದೃಚ್ಛಿಕ ಆಧಾರವನ್ನು ಆಯ್ಕೆ ಮಾಡುತ್ತಾರೆ. ಹೊಂದಾಣಿಕೆಯ ಆಧಾರಗಳಿಂದ ಸಿಫ್ಟೆಡ್ ಕೀಲಿಯನ್ನು ರಚಿಸಲಾಗುತ್ತದೆ."
        ]
      },
      "bases-polarization": {
        label: "ಸಂಯೋಜಿತ ಆಧಾರಗಳು ಮತ್ತು ಧ್ರುವೀಕರಣ",
        tag: "ಪರಸ್ಪರ ಪಕ್ಷಪಾತವಿಲ್ಲದ ಧ್ರುವೀಕರಣ ಸ್ಥಿತಿಗಳು",
        description: "BB84 ಎರಡು ಪರಸ್ಪರ ಸಂಯೋಜಿತ ಆಧಾರಗಳನ್ನು ಬಳಸುತ್ತದೆ. ಸಮತಲ ಧ್ರುವೀಕೃತ ಮತ್ತು ಲಂಬ ಧ್ರುವೀಕೃತ ಸ್ಥಿತಿಗಳು ರೆಕ್ಟಿಲಿನಿಯರ್ ಆಧಾರವನ್ನು (+) ರೂಪಿಸುತ್ತವೆ. +45° ಮತ್ತು -45° ಧ್ರುವೀಕರಣಗಳು ಡಯಾಗನಲ್ ಆಧಾರವನ್ನು (×) ರೂಪಿಸುತ್ತವೆ. ಬಾಬ್ ಆಲಿಸ್ ಅವರ ಆಧಾರವನ್ನು ಬಳಸಿ ಅಳೆದಾಗ ನಿಖರವಾದ ಬಿಟ್ ಪಡೆಯುತ್ತಾರೆ. ತಪ್ಪು ಆಧಾರವನ್ನು ಬಳಸುವುದರಿಂದ ಕ್ಯುಬಿಟ್ ಸ್ಥಿತಿ ನಾಶವಾಗುತ್ತದೆ.",
        bullets: [
          "BB84 ಎರಡು ಪರಸ್ಪರ ಆಧಾರಗಳನ್ನು ಬಳಸುತ್ತದೆ: ರೆಕ್ಟಿಲಿನಿಯರ್ (+) ಸಮತಲ/ಲಂಬ ಮತ್ತು ಡಯಾಗನಲ್ (×) +45°/−45°.",
          "ಈ ಆಧಾರಗಳು ಸಂಯೋಜಿತವಾಗಿವೆ — ತಪ್ಪು ಆಧಾರದಲ್ಲಿ ಅಳೆಯುವುದರಿಂದ ಯಾದೃಚ್ಛಿಕ ಫಲಿತಾಂಶ (50% ಅವಕಾಶ) ಸಿಗುತ್ತದೆ.",
          "ಸಿಫ್ಟಿಂಗ್ ಸಾರ್ವಜನಿಕವಾಗಿ ಆಧಾರಗಳನ್ನು ಹೋಲಿಸುತ್ತದೆ, ಹಂಚಿಕೆಯ ಸುರಕ್ಷಿತ ಕೀಲಿಯನ್ನು ನಿರ್ಮಿಸಲು ಹೊಂದಿಕೆಯಾದ ಆಧಾರಗಳನ್ನು ಮಾತ್ರ ಇಡುತ್ತದೆ."
        ]
      },
      "eavesdropping-detection": {
        label: "ಕದ್ದಾಲಿಕೆ ಮತ್ತು ಇಂಟರ್‌ಸೆಪ್ಟ್-ರಿಸೆಂಡ್",
        tag: "ಇವ್ ಅವರ ಸಕ್ರಿಯ ಹಸ್ತಕ್ಷೇಪವು ಸ್ಥಿತಿಗಳನ್ನು ಹೇಗೆ ಕೆಡಿಸುತ್ತದೆ",
        description: "ಇವ್ ಫೋಟಾನ್ ಅನ್ನು ತಡೆದಾಗ, ಅವರು ತಪ್ಪಾಗುವ 50% ಸಾಧ್ಯತೆಯೊಂದಿಗೆ ಆಧಾರವನ್ನು ಊಹಿಸಬೇಕು. ತಪ್ಪು-ಆಧಾರದ ಅಳತೆಯು ಕ್ಯುಬಿಟ್ ಅನ್ನು ಕುಸಿಯುವಂತೆ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಇವ್ ತಪ್ಪು ಸ್ಥಿತಿಯನ್ನು ಮರುಪ್ರಸಾರ ಮಾಡುತ್ತಾರೆ. ಇದು ಬಾಬ್ ಅವರ ಹೊಂದಾಣಿಕೆಯ ಆಧಾರದ ಸ್ಥಾನಗಳಲ್ಲಿ ಪತ್ತೆಹಚ್ಚಬಹುದಾದ ದೋಷಗಳನ್ನು ತರುತ್ತದೆ. ಪೂರ್ಣ ಇಂಟರ್‌ಸೆಪ್ಟ್-ರಿಸೆಂಡ್ ದಾಳಿಯು QBER ಅನ್ನು 25% ಗೆ ಹೆಚ್ಚಿಸುತ್ತದೆ, ಇದು 11% ಸ್ಥಗಿತ ಮಿತಿಗಿಂತ ಹೆಚ್ಚಾಗಿದೆ.",
        bullets: [
          "ಇವ್ ಫೋಟಾನ್ ಅನ್ನು ತಡೆದರೆ, ಅವರು ಅಳತೆಯ ಆಧಾರವನ್ನು ಊಹಿಸಬೇಕು, ಇದು ಸ್ಥಿತಿಯ ಕುಸಿತಕ್ಕೆ ಕಾರಣವಾಗುತ್ತದೆ.",
          "ಇವ್ ಅವರ ತಪ್ಪು ಅಳತೆಗಳು ಯಾದೃಚ್ಛಿಕ ಶಬ್ದವನ್ನು ತರುತ್ತವೆ, ಇದು ಬಾಬ್ ಅವರ ಸಿಫ್ಟೆಡ್ ಕೀಲಿಯಲ್ಲಿ 25% QBER ಗೆ ಕಾರಣವಾಗುತ್ತದೆ.",
          "ಕ್ವಾಂಟಮ್ ಬಿಟ್ ದೋಷ ದರ (QBER) 11% ಮೀರಿದರೆ, ಆಲಿಸ್ ಮತ್ತು ಬಾಬ್ ಸಂವಹನವನ್ನು ಸುರಕ್ಷಿತವಲ್ಲ ಎಂದು ನಿಲ್ಲಿಸುತ್ತಾರೆ."
        ]
      },
      "fiber-limitations": {
        label: "ಫೈಬರ್ ಮಿತಿಗಳು ಮತ್ತು ಡಿಕಾಯ್ ಸ್ಥಿತಿಗಳು",
        tag: "ಫೋಟಾನ್ ನಷ್ಟ, ಶಬ್ದ ಮತ್ತು PNS ದಾಳಿಯ ತಡೆಗಟ್ಟುವಿಕೆ",
        description: "ನೈಜ ಪ್ರಪಂಚದ ಆಪ್ಟಿಕಲ್ ಫೈಬರ್ ಚಾನಲ್‌ಗಳು ಉಷ್ಣ ಶಬ್ದ, ನಷ್ಟ ಮತ್ತು ಹಂತದ ದೋಷಗಳಿಂದ ಬಳಲುತ್ತವೆ. ಉಷ್ಣ ಶಬ್ದವು ಬೇಸ್‌ಲೈನ್ QBER ಅನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ. ಡಿಕಾಯ್ ಸ್ಟೇಟ್ ಪ್ರಸರಣವು ಆಲಿಸ್ ಮತ್ತು ಬಾಬ್ ಅವರಿಗೆ ಫೋಟಾನ್ ಇಳುವರಿಯನ್ನು ಅಳೆಯಲು ಅನುಮತಿಸುತ್ತದೆ, ಇದು PNS ದಾಳಿಗಳನ್ನು ಪತ್ತೆಹಚ್ಚುತ್ತದೆ.",
        bullets: [
          "ಆಪ್ಟಿಕಲ್ ಫೈಬರ್‌ಗಳು ನಷ್ಟವನ್ನು (~0.2 dB/km) ಪ್ರದರ್ಶಿಸುತ್ತವೆ, ಇದು ಫೋಟಾನ್ ತಲುಪುವ ದರವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.",
          "ಡಿಟೆಕ್ಟರ್ ಡಾರ್ಕ್ ಕೌಂಟ್‌ಗಳು ಮತ್ತು ಶಬ್ದಗಳು ದೀರ್ಘ ದೂರದಲ್ಲಿ QBER ಅನ್ನು ಹೆಚ್ಚಿಸುವ ದೋಷಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತವೆ.",
          "ಡಿಕಾಯ್ ಸ್ಟೇಟ್ ಪ್ರೋಟೋಕಾಲ್ ಫೋಟಾನ್ ಸಂಖ್ಯೆ ವಿಭಜನೆ (PNS) ದಾಳಿಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಲು ವಿಭಿನ್ನ ತೀವ್ರತೆಗಳಲ್ಲಿ ಪ್ರಸಾರ ಮಾಡುತ್ತದೆ."
        ]
      }
    }
  },
  ta: {
    hero_title: "BB84 குவாண்டம் விசை விநியோகம்",
    hero_sub: "ஒற்றை-ஃபோட்டான் துருவமுனைப்பு நிலைகளைத் தயார் செய்து, ஈவ் இடைமறித்து மீண்டும் அனுப்பும் தாக்குதல்களை உருவகப்படுத்தி, QBER வரம்புகளைச் சரிபார்க்கவும்.",
    btn_start_learning: "கற்கத் தொடங்குங்கள்",
    btn_launch_playground: "விஷுவல் லேப்பைத் தொடங்குங்கள்",
    section_title: "BB84 இன் முக்கிய பாடத்திட்டம்",
    section_sub: "QKD இன் கணித, இயற்பியல் மற்றும் பாதுகாப்பு கட்டமைப்புகளை மாஸ்டர் செய்யுங்கள்.",
    quick_summary: "விரைவான சுருக்கம்",
    concept_kicker: "கருத்து",
    concept_of: "இல்",
    math_vector_title: "துருவமுனைப்பு நிலை விண்வெளி",
    math_vector_desc: "ஃபோட்டான்கள் செவ்வக (+) மற்றும் மூலைவிட்ட (×) அடிப்படைகளில் தயாரிக்கப்படுகின்றன, அவை பரஸ்பரம் சார்பற்ற இணை அடிப்படைகளாகும்.",
    math_vector_def: "கணக்கீட்டு அடிப்படை: |0⟩, |1⟩  |  மூலைவிட்ட அடிப்படை: |+⟩ = (|0⟩+|1⟩)/√2, |−⟩ = (|0⟩-|1⟩)/√2",
    cta_title: "BB84 ஐ சோதிக்க தயாரா?",
    cta_desc: "சேனலை உள்ளமைக்கவும், ஈவின் குறுக்கீடு அளவை மாற்றவும், துருவமுனைப்பு அளவீடுகளை இயக்கவும்.",
    cta_btn_playground: "விஷுவல் லேப்பைத் தொடங்குங்கள்",
    cta_btn_top: "மேலே செல்",
    topics: {
      "bb84-baseline": {
        label: "BB84 நெறிமுறை அடிப்படைகள்",
        tag: "ஆலிஸ் & பாபின் சிறந்த தொடர்பு",
        description: "1984 இல் சார்லஸ் பென்னட் மற்றும் கில்லெஸ் பிராஸார்ட் ஆகியோரால் உருவாக்கப்பட்ட BB84 நெறிமுறை உலகின் முதல் குவாண்டம் விசை விநியோகத் திட்டமாகும். இது ஒரு குவாண்டம் நிலையை அளவிடுவது அதை மாற்றியமைக்க முடியாதபடி குலைக்கும் என்ற குவாண்டம் கொள்கையைப் பயன்படுத்துகிறது, இதனால் எந்தவொரு இடைமறிப்பையும் கண்டறிய முடியும். இந்த அடிப்படை சோதனையில், ஆலிஸ் மற்றும் பாப் எந்தவொரு இடைமறிப்பும் இல்லாத ஒரு சிறந்த, சத்தமற்ற ஃபைபர் சேனலில் தொடர்பு கொள்கிறார்கள்.",
        bullets: [
          "ஆலிஸ் தோராயமாக ஒவ்வொரு ஃபோட்டானுக்கும் ஒரு பிட் மதிப்பு (0 அல்லது 1) மற்றும் ஒரு அடிப்படையை (+ அல்லது ×) தேர்ந்தெடுக்கிறார்.",
          "அவர் பிட்டை ஃபோட்டானின் துருவமுனைப்பில் குறியாக்குகிறார்: + அடிப்படையில் |0⟩ அல்லது |1⟩; × அடிப்படையில் |+⟩ அல்லது |−⟩.",
          "பாப் சுயாதீனமாக ஒவ்வொரு ஃபோட்டானுக்கும் ஒரு சீரற்ற அடிப்படையைத் தேர்ந்தெடுக்கிறார். பொருந்தும் அடிப்படைகளில் இருந்து சல்லடை விசை உருவாக்கப்படுகிறது."
        ]
      },
      "bases-polarization": {
        label: "இணை அடிப்படைகள் & துருவமுனைப்பு",
        tag: "பரஸ்பரம் சார்பற்ற துருவமுனைப்பு நிலைகள்",
        description: "BB84 இரண்டு பரஸ்பரம் சார்பற்ற அடிப்படைகளைப் பயன்படுத்துகிறது. கிடைமட்ட துருவமுனைப்பு மற்றும் செங்குத்து துருவமுனைப்பு நிலைகள் செவ்வக அடிப்படையை (+) உருவாக்குகின்றன. +45° மற்றும் -45° துருவமுனைப்புகள் மூலைவிட்ட அடிப்படையை (×) உருவாக்குகின்றன. பாப் ஆலிஸின் அடிப்படையைப் பயன்படுத்தி அளவிடும்போது, அவர் சரியான பிட்டைப் பெறுகிறார். தவறான அடிப்படையைப் பயன்படுத்துவது குவிட்டைக் குலைத்து முடிவை சீரற்றதாக்குகிறது.",
        bullets: [
          "BB84 இரண்டு பரஸ்பரம் சார்பற்ற அடிப்படைகளைப் பயன்படுத்துகிறது: செவ்வக (+) கிடைமட்ட/செங்குத்து மற்றும் மூலைவிட்ட (×) +45°/−45°.",
          "இந்த அடிப்படைகள் இணையானவை — தவறான அடிப்படையில் அளவிடுவது முற்றிலும் சீரற்ற முடிவை (50% வாய்ப்பு) அளிக்கிறது.",
          "சல்லடை முறை அடிப்படைகளை பகிரங்கமாக ஒப்பிடுகிறது, பகிர்ந்த பாதுகாப்பான விசையை உருவாக்க பொருந்தும் அடிப்படைகளை மட்டுமே வைத்திருக்கிறது."
        ]
      },
      "eavesdropping-detection": {
        label: "இடைமறிப்பு & மீண்டும் அனுப்புதல்",
        tag: "ஈவின் செயலில் உள்ள குறுக்கீடு நிலைகளை எவ்வாறு குலைக்கிறது",
        description: "ஈவ் ஒரு ஃபோட்டானை இடைமறிக்கும்போது, அவர் தவறாக இருப்பதற்கான 50% வாய்ப்புடன் அடிப்படையை யூகிக்க வேண்டும். தவறான-அடிப்படை அளவீடு குவிட்டைக் குலையச் செய்கிறது, மேலும் ஈவ் தவறான நிலையை மீண்டும் அனுப்புகிறார் — இது பாபின் பொருந்தும்-அடிப்படை நிலைகளில் கண்டறியக்கூடிய பிழைகளை அறிமுகப்படுத்துகிறது. முழுமையான இடைமறிப்பு-மீண்டும் அனுப்பும் தாக்குதல் QBER ஐ 25% ஆக உயர்த்துகிறது, இது 11% நிறுத்த வரம்பிற்கு மேல் உள்ளது.",
        bullets: [
          "ஈவ் ஒரு ஃபோட்டானை இடைமறித்தால், அவர் அளவீட்டு அடிப்படையை யூகிக்க வேண்டும், இது நிலை குலைவை ஏற்படுத்துகிறது.",
          "ஈவின் தவறான அளவீடுகள் சீரற்ற சத்தத்தை அறிமுகப்படுத்துகின்றன, இதனால் பாபின் சல்லடை விசையியல் 25% QBER ஏற்படுகிறது.",
          "குவாண்டம் பிட் பிழை விகிதம் (QBER) 11% ஐத் தாண்டினால், ஆலிஸ் மற்றும் பாப் விசையைப் பாதுகாப்பற்றது என நிறுத்திவிடுகிறார்கள்."
        ]
      },
      "fiber-limitations": {
        label: "ஃபைபர் கட்டுப்பாடுகள் & டெகாய் நிலைகள்",
        tag: "ஃபோட்டான் இழப்பு, சத்தம் மற்றும் PNS தாக்குதல் தணிப்பு",
        description: "உண்மையான உலக ஆப்டிகல் ஃபைபர் சேனல்கள் வெப்ப சத்தம், உறிஞ்சுதல் இழப்பு மற்றும் கட்ட பிழைகளால் பாதிக்கப்படுகின்றன. வெப்ப சத்தம் அடிப்படை QBER ஐ உயர்த்துகிறது. டெகாய் நிலை பரிமாற்றம் ஆலிஸ் மற்றும் பாப் ஆகியோருக்கு ஃபோட்டான் விளைச்சலை அளவிட அனுமதிக்கிறது, இது PNS தாக்குதல்களை அம்பலப்படுத்துகிறது.",
        bullets: [
          "ஆப்டிகல் ஃபைபர்கள் உறிஞ்சுதல் இழப்பைக் காட்டுகின்றன (~0.2 dB/km), இது ஃபோட்டான் விநியோக வீதத்தைக் குறைக்கிறது.",
          "டிடெக்டர் இருண்ட எண்ணிக்கைகள் மற்றும் சத்தம் நீண்ட தூரங்களில் QBER ஐ அதிகரிக்கும் பிழைகளை உருவாக்குகின்றன.",
          "டெகாய் நிலை நெறிமுறை ஃபோட்டான் எண் பிளவு (PNS) தாக்குதல்களைக் கண்டறிய வெவ்வேறு செறிவுகளில் பருப்புகளை அனுப்புகிறது."
        ]
      }
    }
  },
  es: {
    hero_title: "Distribución de Claves Cuánticas BB84",
    hero_sub: "Prepare estados de polarización de fotón único, simule escuchas de intercepción y retransmisión, y verifique los umbrales de QBER.",
    btn_start_learning: "Comenzar a Aprender",
    btn_launch_playground: "Iniciar Laboratorio Visual",
    section_title: "Plan de Estudios de BB84",
    section_sub: "Domine los marcos matemáticos, físicos y de seguridad de QKD.",
    quick_summary: "Resumen Rápido",
    concept_kicker: "Concepto",
    concept_of: "de",
    math_vector_title: "Espacio de Estados de Polarización",
    math_vector_desc: "Los fotones se preparan en las bases rectilínea (+) y diagonal (×), que son bases conjugadas mutuamente imparciales.",
    math_vector_def: "Base Computacional: |0⟩, |1⟩  |  Base Diagonal: |+⟩ = (|0⟩+|1⟩)/√2, |−⟩ = (|0⟩-|1⟩)/√2",
    cta_title: "¿Listo para probar BB84?",
    cta_desc: "Configure el canal, ajuste el nivel de intercepción de Eve y ejecute mediciones de polarización.",
    cta_btn_playground: "Iniciar Laboratorio Visual",
    cta_btn_top: "Volver Arriba",
    topics: {
      "bb84-baseline": {
        label: "Fundamentos del Protocolo BB84",
        tag: "Comunicación ideal de Alice y Bob",
        description: "El protocolo BB84, diseñado por Charles Bennett y Gilles Brassard en 1984, es el primer esquema de distribución de claves cuánticas del mundo. Utiliza el principio de la mecánica cuántica de que medir un estado cuántico lo perturba irreversiblemente, haciendo detectable cualquier escucha. En este experimento de referencia, Alice y Bob se comunican a través de un canal de fibra ideal y sin ruido, sin espías presentes.",
        bullets: [
          "Alice selecciona aleatoriamente un valor de bit (0 o 1) y una base (+ o ×) para cada fotón.",
          "Codifica el bit en la polarización del fotón: |0⟩ o |1⟩ en la base +; |+⟩ o |−⟩ en la base ×.",
          "Bob elige de forma independiente una base aleatoria para cada fotón. La clave filtrada se forma a partir de las bases coincidentes."
        ]
      },
      "bases-polarization": {
        label: "Bases Conjugadas y Polarización",
        tag: "Estados de polarización mutuamente imparciales",
        description: "BB84 emplea dos bases mutuamente imparciales. Los estados polarizados horizontal y verticalmente forman la base rectilínea (+). Las polarizaciones a +45° y −45° forman la base diagonal (×). Cuando Bob mide utilizando la base de Alice, obtiene el bit exacto. El uso de una base incorrecta colapsa el qubit y aleatoriza el resultado.",
        bullets: [
          "BB84 emplea dos bases mutuamente imparciales: Rectilínea (+) Horizontal/Vertical y Diagonal (×) +45°/−45°.",
          "Estas bases son conjugadas: medir en la base incorrecta produce un resultado completamente aleatorio (50% de probabilidad).",
          "El sifting compara las bases públicamente, conservando solo las bases coincidentes para construir una clave segura compartida."
        ]
      },
      "eavesdropping-detection": {
        label: "Intercepción y Retransmisión de Eve",
        tag: "Cómo la intercepción activa de Eve perturba los estados",
        description: "Cuando Eve intercepta un fotón, debe adivinar una base con un 50% de probabilidad de equivocarse. La medición en la base incorrecta colapsa el qubit, y Eve retransmite el estado incorrecto, introduciendo errores detectables en las posiciones de base coincidentes de Bob. Un ataque completo de intercepción y retransmisión eleva la QBER al 25%, muy por encima del límite de aborto del 11%.",
        bullets: [
          "Si Eve intercepta un fotón, debe adivinar la base de medición, lo que provoca el colapso del estado.",
          "Las mediciones de base incorrectas de Eve introducen ruido aleatorio, causando una QBER del 25% en la clave filtrada de Bob.",
          "Si la tasa de error de bits cuánticos (QBER) supera el 11%, Alice y Bob abortan la clave por considerarla insegura."
        ]
      },
      "fiber-limitations": {
        label: "Restricciones de Fibra y Estados Decoy",
        tag: "Mitigación de pérdida de fotones, ruido y ataques PNS",
        description: "Los canales de fibra óptica del mundo real sufren de ruido térmico, pérdida por absorción y errores de fase. El ruido térmico eleva la QBER de referencia. La transmisión del estado decoy permite a Alice y Bob medir el rendimiento de fotones por nivel de intensidad, exponiendo los ataques PNS y permitiendo QKD de fibra de larga distancia.",
        bullets: [
          "Las fibras ópticas exhiben pérdida por absorción (~0.2 dB/km), lo que reduce las tasas de entrega de fotones.",
          "Los recuentos oscuros y el ruido del detector crean errores de fondo que aumentan la QBER a largas distancias.",
          "El protocolo Decoy State transmite pulsos a intensidades variables para detectar ataques de división del número de fotones (PNS)."
        ]
      }
    }
  },
  fr: {
    hero_title: "Distribution de Clés Quantiques BB84",
    hero_sub: "Préparez des états de polarisation à photon unique, simulez l'espionnage par interception-réémission et vérifiez les seuils de QBER.",
    btn_start_learning: "Commencer à Apprendre",
    btn_launch_playground: "Lancer le Lab Visuel",
    section_title: "Programme d'Études de BB84",
    section_sub: "Maîtrisez les cadres mathématiques, physiques et de sécurité de la QKD.",
    quick_summary: "Résumé Rapide",
    concept_kicker: "Concept",
    concept_of: "sur",
    math_vector_title: "Espace des États de Polarisation",
    math_vector_desc: "Les photons sont préparés dans des bases rectilignes (+) et diagonales (×), qui sont des bases conjuguées mutuellement impartiales.",
    math_vector_def: "Base Computationnelle : |0⟩, |1⟩  |  Base Diagonale : |+⟩ = (|0⟩+|1⟩)/√2, |−⟩ = (|0⟩-|1⟩)/√2",
    cta_title: "Prêt à tester le protocole BB84 ?",
    cta_desc: "Configurez le canal, ajustez le niveau d'interception d'Eve et lancez les mesures de polarisation.",
    cta_btn_playground: "Lancer le Lab Visuel",
    cta_btn_top: "Retour en Haut",
    topics: {
      "bb84-baseline": {
        label: "Fondations du Protocole BB84",
        tag: "Communication idéale d'Alice & Bob",
        description: "Le protocole BB84, conçu por Charles Bennett et Gilles Brassard en 1984, est le premier schéma de distribution de clés quantiques au monde. Il utilise le principe de la mécanique quantique selon lequel la mesure d'un état quantique le perturbe de manière irréversible, rendant tout espionnage détectable. Dans cette expérience de référence, Alice et Bob communiquent sur un canal de fibre idéal et sans bruit, sans espion présent.",
        bullets: [
          "Alice sélectionne au hasard une valeur de bit (0 ou 1) et une base (+ ou ×) pour chaque photon.",
          "Elle encode le bit sur la polarisation du photon : |0⟩ ou |1⟩ dans la base + ; |+⟩ ou |−⟩ dans la base ×.",
          "Bob choisit indépendamment une base aléatoire pour chaque photon. La clé tamisée est formée à partir des bases correspondantes."
        ]
      },
      "bases-polarization": {
        label: "Bases Conjuguées & Polarisation",
        tag: "États de polarisation mutuellement impartiaux",
        description: "Le protocole BB84 utilise deux bases mutuellement impartiales. Les états polarisés horizontalement et verticalement forment la base rectiligne (+). Les polarisations à +45° et −45° forment la base diagonale (×). Lorsque Bob mesure en utilisant la base d'Alice, il obtient le bit exact. L'utilisation de la mauvaise base effondre le qubit et rend le résultat aléatoire.",
        bullets: [
          "BB84 utilise deux bases mutuellement impartiales : Rectiligne (+) Horizontale/Verticale et Diagonale (×) +45°/−45°.",
          "Ces bases sont conjuguées : mesurer dans la mauvaise base produit un résultat complètement aléatoire (50 % de chance).",
          "Le sifting compare les bases publiquement, ne conservant que les bases correspondantes pour construire une clé sécurisée partagée."
        ]
      },
      "eavesdropping-detection": {
        label: "Interception & Réémission d'Eve",
        tag: "Comment l'interception active d'Eve perturbe les états",
        description: "Lorsqu'Eve intercepte un photon, elle doit deviner une base avec 50 % de chances de se tromper. Une mesure dans la mauvaise base effondre le qubit, et Eve réémet le mauvais état — introduisant des erreurs détectables dans les positions de base correspondantes de Bob. Une attaque complète d'interception et de réémission augmente le QBER à 25 %, bien au-dessus de la limite d'avortement de 11 %.",
        bullets: [
          "Si Eve intercepte un photon, elle doit deviner la base de mesure, ce qui provoque l'effondrement de l'état.",
          "Les mesures de base incorrectes d'Eve introduisent un bruit aléatoire, provoquant un QBER de 25 % dans la clé tamisée de Bob.",
          "Si le taux d'erreur sur les bits quantiques (QBER) dépasse 11 %, Alice et Bob avortent la clé comme non sécurisée."
        ]
      },
      "fiber-limitations": {
        label: "Contraintes de Fibre & États Decoy",
        tag: "Atténuation, bruit de détecteur et parade aux attaques PNS",
        description: "Les canaux de fibres optiques réels souffrent de bruit thermique, de pertes par absorption et d'erreurs de phase. Le bruit thermique augmente le QBER de référence. La transmission d'état leurre (decoy state) permet à Alice et Bob de mesurer le rendement en photons par niveau d'intensité, démasquant les attaques PNS et permettant la QKD par fibre à longue distance.",
        bullets: [
          "Les fibres optiques présentent des pertes par absorption (~0,2 dB/km), réduisant le taux de livraison des photons.",
          "Les impulsions d'obscurité du détecteur et le bruit créent des erreurs de fond qui augmentent le QBER sur de longues distances.",
          "Le protocole Decoy State transmet des impulsions à des intensités variables pour détecter les attaques par séparation du nombre de photons (PNS)."
        ]
      }
    }
  }
};
