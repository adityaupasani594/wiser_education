<div align="center">

# ⚛️ Aether Quantum Lab
### *Democratizing Quantum Communication & Quantum Mechanics Education*

[![Live Demo](https://img.shields.io/badge/Live_Demo-vesit--aether.netlify.app-06B6D4?style=for-the-badge&logo=netlify&logoColor=white)](https://vesit-aether.netlify.app)
[![Built With Next.js](https://img.shields.io/badge/Built_With-Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Qiskit Integrated](https://img.shields.io/badge/SDK-Qiskit_&_Google_Colab-6929C4?style=for-the-badge&logo=ibm&logoColor=white)](https://qiskit.org/)
[![WISER Challenge](https://img.shields.io/badge/Challenge-WISER_Education-FBBF24?style=for-the-badge&logo=google&logoColor=black)](https://vesit-aether.netlify.app)

<p align="center">
  <b>An interactive, browser-native virtual laboratory, real-time quantum simulator, and assessment platform built for the WISER Education Challenge.</b>
</p>

[🌐 Live Web Application](https://vesit-aether.netlify.app) • [📚 Explore Curriculum](#-curriculum--learning-tracks) • [🧪 Virtual Lab Workflow](#-the-5-pillar-virtual-lab-workflow) • [🛠️ Tech Stack](#-technology-stack)

---

</div>

## 📌 Executive Overview

**Aether Quantum Lab** is an all-in-one educational platform engineered to break down the steep mathematical and physical barriers associated with Quantum Information Science (QIS). Designed for undergraduate STEM students, researchers, high school educators, and self-learners, Aether bridges the gap between abstract linear algebra equations and hands-on quantum circuit execution.

Through **real-time visual state simulators**, **interactive Bloch spheres**, **Google Colab / Qiskit SDK integration**, **auto-graded assessments**, and **automated PDF lab report generation**, Aether transforms complex quantum communication concepts into intuitive, verifiable learning outcomes.

---

## ✨ Key Features & Highlights

### 🎨 Real-Time Visual Quantum Engine
- **Bloch Sphere & State Vector Visualizers**: Dynamic 3D state arrow rotation and real-time amplitude probability bars ($|0\rangle, |1\rangle, |00\rangle \dots |111\rangle$).
- **Interactive SVG Circuit Builder**: Drag, toggle, and observe single and multi-qubit gates ($H, X, Z, \text{CNOT}$) and measurement operations in real time.

### 🧪 Signature 5-Pillar Virtual Lab Workflow
Every experiment guides learners through a structured 5-step interactive pipeline:
1. **Theory & Mathematics**: MathJax-rendered LaTeX equations, state matrices, and physical principles.
2. **Interactive Simulation**: Playground for manipulating qubit states, logic gates, and observing immediate outcome state vectors.
3. **Real Qiskit Execution**: Seamless launch buttons handing off pre-configured Python notebooks directly to Google Colab for execution on IBM Q hardware/simulators.
4. **Knowledge Verification**: Auto-graded conceptual & analytical quizzes with instant explanatory feedback.
5. **Academic Credentialing**: One-click exportable university-formatted PDF Lab Reports and verifiable Certificates of Completion.

### 🔒 Quantum Key Distribution (QKD) & Cryptography Simulators
- **BB84 & B92 Protocol Modules**: Step-by-step photon polarization, rectilinear ($+$) & diagonal ($\times$) basis matching, and key sifting matrices.
- **Eavesdropper ("Eve") Simulation**: Active intervention mode demonstrating how measurement collapses quantum superposition and exposes adversaries by driving the Quantum Bit Error Rate (QBER) above security thresholds ($\sim 11\%$).

### 🌐 Inclusivity & Academic Integrity
- **Native Multilingual i18n Engine**: Seamless support for English, Hindi, and regional languages to ensure global and regional accessibility.
- **Dark/Light Mode Theme Engine**: High-contrast glassmorphism interface optimized for long study sessions.
- **Verifiable Credentials**: Cryptographically formatted unique Certificate IDs (`WQL-XX-XXXXXXXX-2026`) for academic credit and resume validation.

---

## 📚 Curriculum & Learning Tracks

| Track ID | Track Name | Core Concepts & Protocols Covered | Interactive Tools |
| :--- | :--- | :--- | :--- |
| **Track 01** | **Qubit Foundations & Quantum Gates** | Superposition, Single/Multi-qubit gates ($H, X, Z, \text{CNOT}$), Quantum Measurement, Bloch Sphere mapping. | Bloch Sphere, 1-Qubit & 2-Qubit Gate Simulator |
| **Track 02** | **Quantum Entanglement & Teleportation** | EPR Pairs, Bell States ($|\Phi^+\rangle, |\Phi^-\rangle, |\Psi^+\rangle, |\Psi^-\rangle$), Quantum Teleportation Protocol. | 3-Qubit Teleportation Circuit Renderer |
| **Track 03** | **Quantum Cryptography & QKD** | BB84 Protocol, B92 Protocol, No-Cloning Theorem, Eavesdropping Intervention, QBER analysis. | Interactive QKD Alice-Bob-Eve Simulator |
| **Track 04** | **Quantum Noise & Error Mitigation** | Bit-Flip / Phase-Flip noise channels, Decoherence, Quantum Channel capacity, Error mitigation techniques. | Quantum Channel Noise Simulator |

---

## 🛠️ Technology Stack

| Layer | Technology Used | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | **Next.js 15 (App Router)** | Server & Client Components, React 19, TypeScript |
| **Styling & Motion** | **Framer Motion + Vanilla CSS** | Glassmorphic design system, high-contrast dark/light theme engine |
| **Math & Physics Engine** | **MathJax + Custom JS Engine** | LaTeX rendering, vector state calculations, SVG circuit diagrams |
| **Cloud Execution** | **Google Colab + IBM Qiskit** | Pre-built Jupyter/Python notebooks executing real quantum code |
| **Authentication** | **Firebase Auth** | User authentication, persistent lab state & user dashboards |
| **Deployment** | **Netlify** | Continuous deployment hosted at [vesit-aether.netlify.app](https://vesit-aether.netlify.app) |

---

## 📁 Repository Structure

```text
quantum-comm-platform/
├── src/
│   ├── app/
│   │   ├── experiments/           # Experiment laboratory & track pages
│   │   │   ├── lab/               # Individual virtual lab runner pages
│   │   │   └── page.tsx           # Experiments Dashboard page
│   │   ├── login/                 # Firebase Auth sign-in / sign-up
│   │   ├── AuthProvider.tsx       # Auth context provider
│   │   ├── globals.css            # Core design system tokens & themes
│   │   ├── layout.tsx             # Root layout & Metadata
│   │   └── page.tsx               # Main Landing Page (WISER Challenge Showcase)
│   ├── components/
│   │   └── experiments/           # Interactive experiment components & simulators
│   │       ├── Experiment1..10.js # Individual experiment interactive widgets
│   │       ├── B92Experiment1..4.js# B92 QKD interactive simulators
│   │       ├── KeyAnalysisPanel.js# QKD Key sifting & error rate modules
│   │       └── QuantumBasics.js   # Bloch sphere & circuit visualizer components
│   └── data/
│       ├── translations.ts        # Multilingual i18n dictionary (EN, HI, regional)
│       └── colabLinks.ts          # External Qiskit notebook mappings
├── public/                        # Static assets & icons
├── README.md                      # Project documentation
├── package.json                   # Project dependencies & scripts
└── next.config.ts                 # Next.js configuration
```

---

## 🚀 Local Development Setup

To run **Aether Quantum Lab** locally on your machine:

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm** or **yarn** / **pnpm**

### Step-by-Step Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/adityaupasani594/wiser_education.git
   cd quantum-comm-platform
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 License & Acknowledgments

- Built with ❤️ for the **WISER Education Challenge**.
- Powered by open-source technologies: **Next.js**, **React**, **Qiskit**, **MathJax**, and **Framer Motion**.
- Deployed live at: **[https://vesit-aether.netlify.app](https://vesit-aether.netlify.app)**

---

<div align="center">
  <b>Aether Quantum Lab</b> • <i>Shaping the future of quantum communication education.</i>
</div>
