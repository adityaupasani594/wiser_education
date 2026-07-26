"use client";

import React, { useState, useEffect } from "react";
import "./QuantumBasics.css";
import { ArrowLeft, BookOpen, Sparkles, HelpCircle, RotateCcw, Trash2, ChevronRight, ChevronLeft, X, AlertCircle, CheckCircle2, ArrowRight, Moon, Sun, Award, FileText, Download, FlaskConical, Cpu, Play } from "lucide-react";
import Link from "next/link";
import { LANG_META } from "../../data/translations";
import { TRANSLATIONS_EXP_1_1 } from "../../data/translations_exp_1.1";
import { COLAB_LINKS } from "../../data/colabLinks";

const QUIZ_ANSWERS = [1, 2, 1, 2, 1, 1, 2, 2, 0, 0];

// Interactive SVG Visualisations for the Theory dashboard
function TopicVisual({ id, dict }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (id !== "measurement-disturbance") return;
    const interval = setInterval(() => {
      setCollapsed((prev) => !prev);
    }, 2800);
    return () => clearInterval(interval);
  }, [id]);

  if (!dict) return null;

  if (id === "quantum-basics") {
    return (
      <div className="visual-graphic-container">
        <Interactive3DBlochSphere x={0.71} y={0.4} z={0.58} label="|ψ⟩" />
        <span className="visual-caption">{dict.visual_basics_caption}</span>
      </div>
    );
  }

  if (id === "measurement-disturbance") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          <line x1="10" y1="75" x2="210" y2="75" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 2" />
          {collapsed ? (
            <g>
              <line x1="110" y1="15" x2="110" y2="135" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
              <circle cx="110" cy="75" r="8" fill="#f43f5e" />
              <text x="110" y="55" fill="#f43f5e" fontSize="10" textAnchor="middle" fontWeight="bold">{dict.visual_collapse_state}</text>
            </g>
          ) : (
            <g>
              <path
                d="M 10 75 Q 35 15, 60 75 T 110 75 T 160 75 T 210 75"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeDasharray="4 2"
                className="wave-pulse"
              />
              <path
                d="M 10 75 Q 35 135, 60 75 T 110 75 T 160 75 T 210 75"
                fill="none"
                stroke="rgba(6, 182, 212, 0.4)"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />
              <text x="110" y="55" fill="#06b6d4" fontSize="10" textAnchor="middle" fontWeight="bold">{dict.visual_superposition_state}</text>
            </g>
          )}
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
          <button
            className="btn-secondary-wiser"
            style={{ fontSize: "0.75rem", padding: "4px 10px" }}
            onClick={(e) => {
              e.stopPropagation();
              setCollapsed(!collapsed);
            }}
          >
            Trigger Collapse ({collapsed ? dict.visual_btn_reset : dict.visual_btn_measure})
          </button>
          <span className="visual-caption">{dict.visual_collapse_caption}</span>
        </div>
      </div>
    );
  }

  if (id === "no-cloning") {
    return (
      <div className="visual-graphic-container">
        <svg width="240" height="150" viewBox="0 0 240 150">
          <circle cx="40" cy="75" r="14" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="40" y="79" fill="#06b6d4" fontSize="10" textAnchor="middle" fontWeight="bold">|ψ⟩</text>

          <path d="M 58 75 L 94 75" stroke="var(--border)" strokeWidth="1.5" markerEnd="url(#arrow)" />

          <rect x="98" y="45" width="55" height="60" rx="6" fill="var(--bg-canvas)" stroke="var(--border)" strokeWidth="1.5" />
          <text x="125" y="72" fill="var(--text)" fontSize="10" textAnchor="middle" fontWeight="bold">{dict.visual_cloner}</text>
          <text x="125" y="88" fill="#f43f5e" fontSize="9" textAnchor="middle" fontWeight="bold">{dict.visual_blocked}</text>

          <path d="M 158 65 L 188 45" stroke="var(--border)" strokeWidth="1" />
          <path d="M 158 85 L 188 105" stroke="var(--border)" strokeWidth="1" />

          <circle cx="205" cy="40" r="12" fill="rgba(244, 63, 94, 0.08)" stroke="#f43f5e" strokeWidth="1.2" />
          <text x="205" y="43" fill="#f43f5e" fontSize="9" textAnchor="middle">|ψ'⟩</text>

          <circle cx="205" cy="110" r="12" fill="rgba(244, 63, 94, 0.08)" stroke="#f43f5e" strokeWidth="1.2" />
          <text x="205" y="113" fill="#f43f5e" fontSize="9" textAnchor="middle">|φ⟩</text>

          <text x="205" y="22" fill="#f43f5e" fontSize="8" textAnchor="middle">{dict.visual_disturbed}</text>
          <text x="205" y="132" fill="#f43f5e" fontSize="8" textAnchor="middle">{dict.visual_corrupted}</text>

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--border)" />
            </marker>
          </defs>
        </svg>
        <span className="visual-caption">{dict.visual_cloning_caption}</span>
      </div>
    );
  }

  if (id === "bases-complementarity") {
    return (
      <div className="visual-graphic-container" style={{ padding: "8px" }}>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', width: '100%' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: 10, padding: 8, textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, marginBottom: 6, color: "var(--accent)" }}>{dict.visual_rectilinear}</div>
            <svg width="70" height="70" viewBox="0 0 100 100" style={{ margin: "0 auto" }}>
              <line x1="50" y1="10" x2="50" y2="90" stroke="var(--accent)" strokeWidth="2" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="var(--accent)" strokeWidth="2" />
              <text x="50" y="24" fill="var(--accent)" fontSize="9" textAnchor="middle">|0⟩</text>
              <text x="80" y="47" fill="var(--accent)" fontSize="9">|1⟩</text>
            </svg>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', borderRadius: 10, padding: 8, textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, marginBottom: 6, color: "var(--accent-2)" }}>{dict.visual_diagonal}</div>
            <svg width="70" height="70" viewBox="0 0 100 100" style={{ margin: "0 auto" }}>
              <line x1="20" y1="20" x2="80" y2="80" stroke="var(--accent-2)" strokeWidth="2" />
              <line x1="20" y1="80" x2="80" y2="20" stroke="var(--accent-2)" strokeWidth="2" />
              <text x="80" y="30" fill="var(--accent-2)" fontSize="9">|+⟩</text>
              <text x="80" y="76" fill="var(--accent-2)" fontSize="9">|−⟩</text>
            </svg>
          </div>
        </div>
        <span className="visual-caption">{dict.visual_bases_caption}</span>
      </div>
    );
  }

  return null;
}

// -------------------------------------------------------------------
// Quantum Simulator Math
// -------------------------------------------------------------------
function computeState(gateSequence) {
  let reA = 1, imA = 0; // State |0>
  let reB = 0, imB = 0;

  for (const gate of gateSequence) {
    if (!gate) continue;

    let nextReA = reA, nextImA = imA;
    let nextReB = reB, nextImB = imB;

    switch (gate) {
      case "I":
        break;
      case "X":
        // X gate (bit flip)
        nextReA = reB; nextImA = imB;
        nextReB = reA; nextImB = imA;
        break;
      case "Y":
        // Y gate: new_alpha = -i * beta, new_beta = i * alpha
        nextReA = imB; nextImA = -reB;
        nextReB = -imA; nextImB = reA;
        break;
      case "Z":
        // Z gate (phase flip)
        nextReA = reA; nextImA = imA;
        nextReB = -reB; nextImB = -imB;
        break;
      case "H":
        // H gate: new_alpha = (alpha + beta)/sqrt(2), new_beta = (alpha - beta)/sqrt(2)
        const invSqrt2 = 1 / Math.sqrt(2);
        nextReA = (reA + reB) * invSqrt2;
        nextImA = (imA + imB) * invSqrt2;
        nextReB = (reA - reB) * invSqrt2;
        nextImB = (imA - imB) * invSqrt2;
        break;
      case "S":
        // S gate: new_alpha = alpha, new_beta = i * beta
        nextReA = reA; nextImA = imA;
        nextReB = -imB; nextImB = reB;
        break;
      case "T":
        // T gate: new_alpha = alpha, new_beta = e^(i*pi/4) * beta
        const cosPi4 = Math.cos(Math.PI / 4);
        const sinPi4 = Math.sin(Math.PI / 4);
        nextReA = reA; nextImA = imA;
        nextReB = reB * cosPi4 - imB * sinPi4;
        nextImB = reB * sinPi4 + imB * cosPi4;
        break;
      default:
        break;
    }

    reA = nextReA; imA = nextImA;
    reB = nextReB; imB = nextImB;
  }

  return { reA, imA, reB, imB };
}

// -------------------------------------------------------------------
// Dynamic Bloch Sphere Projection Component
// -------------------------------------------------------------------
// Interactive Camera Rotatable 3D Bloch Sphere
// -------------------------------------------------------------------
function Interactive3DBlochSphere({ x = 0, y = 0, z = 1, label = "|ψ⟩" }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [yaw, setYaw] = useState(45);
  const [pitch, setPitch] = useState(25);
  const [isDragging, setIsDragging] = useState(false);
  const [startMouse, setStartMouse] = useState({ x: 0, y: 0 });

  const R = 65;
  const cx = 100;
  const cy = 100;

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startMouse.x;
    const dy = e.clientY - startMouse.y;
    setYaw((prev) => prev - dx * 0.5);
    setPitch((prev) => Math.max(-85, Math.min(85, prev - dy * 0.5)));
    setStartMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    setIsDragging(true);
    setStartMouse({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - startMouse.x;
    const dy = e.touches[0].clientY - startMouse.y;
    setYaw((prev) => prev - dx * 0.5);
    setPitch((prev) => Math.max(-85, Math.min(85, prev - dy * 0.5)));
    setStartMouse({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = () => setIsDragging(false);

  const project = (x3d, y3d, z3d) => {
    const radYaw = (yaw * Math.PI) / 180;
    const radPitch = (pitch * Math.PI) / 180;

    const x1 = x3d * Math.cos(radYaw) - y3d * Math.sin(radYaw);
    const y1 = x3d * Math.sin(radYaw) + y3d * Math.cos(radYaw);
    const z1 = z3d;

    const x2 = x1;
    const y2 = y1 * Math.cos(radPitch) - z1 * Math.sin(radPitch);
    const z2 = y1 * Math.sin(radPitch) + z1 * Math.cos(radPitch);

    return {
      px: cx + x2 * R,
      py: cy - z2 * R,
      depth: y2
    };
  };

  const pZPlus = project(0, 0, 1);
  const pZMinus = project(0, 0, -1);
  const pXPlus = project(1, 0, 0);
  const pXMinus = project(-1, 0, 0);
  const pYPlus = project(0, 1, 0);
  const pYNeg = project(0, -1, 0);

  const pVector = project(x, y, z);

  const equatorPoints = [];
  for (let i = 0; i <= 64; i++) {
    const ang = (i * 2 * Math.PI) / 64;
    const pt = project(Math.cos(ang), Math.sin(ang), 0);
    equatorPoints.push(`${pt.px},${pt.py}`);
  }

  const meridianPoints = [];
  for (let i = 0; i <= 64; i++) {
    const ang = (i * 2 * Math.PI) / 64;
    const pt = project(Math.cos(ang), 0, Math.sin(ang));
    meridianPoints.push(`${pt.px},${pt.py}`);
  }

  const isFront = pVector.depth >= 0;

  if (!mounted) {
    return (
      <div className="bloch-3d-wrapper" style={{ userSelect: "none" }}>
        <svg width="220" height="220" viewBox="0 0 200 200" style={{ overflow: "visible" }}>
          <circle cx="100" cy="100" r={R} fill="rgba(255,255,255,0.01)" stroke="var(--border)" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className="bloch-3d-wrapper"
      style={{ cursor: isDragging ? "grabbing" : "grab", userSelect: "none" }}
    >
      <svg
        width="220"
        height="220"
        viewBox="0 0 200 200"
        style={{ overflow: "visible" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <circle cx="100" cy="100" r={R} fill="rgba(255,255,255,0.01)" stroke="var(--border)" strokeWidth="1" />

        <polyline
          points={equatorPoints.join(" ")}
          fill="none"
          stroke="var(--border)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.6"
        />

        <polyline
          points={meridianPoints.join(" ")}
          fill="none"
          stroke="var(--border)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.6"
        />

        <line
          x1={pZMinus.px} y1={pZMinus.py}
          x2={pZPlus.px} y2={pZPlus.py}
          stroke="var(--text-3)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.7"
        />

        <line
          x1={pXMinus.px} y1={pXMinus.py}
          x2={pXPlus.px} y2={pXPlus.py}
          stroke="var(--text-3)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.7"
        />

        <line
          x1={pYNeg.px} y1={pYNeg.py}
          x2={pYPlus.px} y2={pYPlus.py}
          stroke="var(--text-3)"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.7"
        />

        <text x={pZPlus.px} y={pZPlus.py - 6} fill="var(--text)" fontSize="9" fontWeight="bold" textAnchor="middle">|0⟩</text>
        <text x={pZMinus.px} y={pZMinus.py + 10} fill="var(--text)" fontSize="9" fontWeight="bold" textAnchor="middle">|1⟩</text>

        <text x={pXPlus.px + 8} y={pXPlus.py + 3} fill="var(--text-3)" fontSize="8">x</text>
        <text x={pYPlus.px + 8} y={pYPlus.py + 3} fill="var(--text-3)" fontSize="8">y</text>

        {!isFront && (
          <line
            x1="100" y1="100"
            x2={pVector.px} y2={pVector.py}
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            opacity="0.4"
          />
        )}

        <line
          x1="100" y1="100"
          x2={pVector.px} y2={pVector.py}
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity={isFront ? 1 : 0.7}
        />

        <circle
          cx={pVector.px}
          cy={pVector.py}
          r="4.5"
          fill={isFront ? "var(--accent-2)" : "rgba(167, 139, 250, 0.4)"}
          stroke="var(--accent)"
          strokeWidth="1.5"
        />

        {isFront && (
          <circle
            cx={pVector.px}
            cy={pVector.py}
            r="10"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0.35"
            style={{
              transformOrigin: `${pVector.px}px ${pVector.py}px`,
              animation: "pulse-ring-dynamic 3s infinite ease-in-out"
            }}
          />
        )}

        <text x={pVector.px + 8} y={pVector.py - 4} fill="var(--accent)" fontSize="9" fontWeight="bold">
          {label}
        </text>
      </svg>
      <div style={{ fontSize: "0.68rem", color: "var(--text-3)", textAlign: "center", marginTop: 4 }}>
        🖱️ Drag sphere to rotate in 3D
      </div>
    </div>
  );
}

// -------------------------------------------------------------------
// Dynamic Bloch Sphere Projection Component
// -------------------------------------------------------------------
function LiveBlochSphere({ state }) {
  const { reA, imA, reB, imB } = state;

  // Bloch Coordinates Math:
  // x = 2 * (reA * reB + imA * imB)
  // y = 2 * (reA * imB - imA * reB)
  // z = (reA*reA + imA*imA) - (reB*reB + imB*imB)
  const x = 2 * (reA * reB + imA * imB);
  const y = 2 * (reA * imB - imA * reB);
  const z = (reA * reA + imA * imA) - (reB * reB + imB * imB);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Interactive3DBlochSphere x={x} y={y} z={z} label="|ψ⟩" />
      <div style={{ marginTop: 10, textAlign: "center", fontSize: "0.78rem" }}>
        <div>Vector: <span style={{ fontFamily: "monospace", color: "var(--accent)", fontWeight: 700 }}>[{x.toFixed(2)}, {y.toFixed(2)}, {z.toFixed(2)}]</span></div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------------
// MAIN EXPORTS COMPONENT
// -------------------------------------------------------------------
export default function QuantumBasics({ dark = true, setDark = (val) => { }, lang = "en", setLang = (val) => { }, onQuizPassed = () => { } } = {}) {
  const dict = TRANSLATIONS_EXP_1_1[lang] || TRANSLATIONS_EXP_1_1.en;

  const topics = [
    {
      id: "quantum-basics",
      label: dict.topics["quantum-basics"].label,
      tag: dict.topics["quantum-basics"].tag,
      bullets: dict.topics["quantum-basics"].bullets,
      longContent: {
        description: dict.topics["quantum-basics"].description
      }
    },
    {
      id: "measurement-disturbance",
      label: dict.topics["measurement-disturbance"].label,
      tag: dict.topics["measurement-disturbance"].tag,
      bullets: dict.topics["measurement-disturbance"].bullets,
      longContent: {
        description: dict.topics["measurement-disturbance"].description
      }
    },
    {
      id: "no-cloning",
      label: dict.topics["no-cloning"].label,
      tag: dict.topics["no-cloning"].tag,
      bullets: dict.topics["no-cloning"].bullets,
      longContent: {
        description: dict.topics["no-cloning"].description
      }
    },
    {
      id: "bases-complementarity",
      label: dict.topics["bases-complementarity"].label,
      tag: dict.topics["bases-complementarity"].tag,
      bullets: dict.topics["bases-complementarity"].bullets,
      longContent: {
        description: dict.topics["bases-complementarity"].description,
        table: {
          title: dict.topics["bases-complementarity"].tableTitle,
          rows: [
            {
              basis: dict.topics["bases-complementarity"].basis1,
              bit0: dict.topics["bases-complementarity"].basis1_0,
              bit1: dict.topics["bases-complementarity"].basis1_1
            },
            {
              basis: dict.topics["bases-complementarity"].basis2,
              bit0: dict.topics["bases-complementarity"].basis2_0,
              bit1: dict.topics["bases-complementarity"].basis2_1
            }
          ]
        }
      }
    }
  ];

  const quizQuestions = dict.quiz_questions.map((q, idx) => ({
    q: q.q,
    options: q.options,
    correct: QUIZ_ANSWERS[idx]
  }));

  const [view, setView] = useState("learn"); // "learn", "builder", or "quiz"
  const [copied, setCopied] = useState(false);
  const basicsQiskitCode = `from qiskit import QuantumCircuit, Aer, execute

# 1. Initialize a 1-qubit circuit and 1 classical bit
qc = QuantumCircuit(1, 1)

# 2. Apply a Hadamard gate to create a superposition state (|0> + |1>)/√2
qc.h(0)

# 3. Measure the qubit into the classical register
qc.measure(0, 0)

# 4. Execute the circuit on the Aer QASM simulator
simulator = Aer.get_backend('qasm_simulator')
job = execute(qc, simulator, shots=1024)
result = job.result()

# 5. Output the measurement results
counts = result.get_counts(qc)
print("Measurement counts (should be roughly 50/50):", counts)
`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(basicsQiskitCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [activeTopic, setActiveTopic] = useState(null);

  // Builder Slot States (5 slots)
  const [slots, setSlots] = useState([null, null, null, null, null]);
  const [draggedGate, setDraggedGate] = useState(null);

  // Guided Tour States
  const [tourStep, setTourStep] = useState(null);

  // Quiz States (10 questions, 30s timer)
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  // Timer useEffect loop for the Checkpoint Quiz
  useEffect(() => {
    if (view !== "quiz" || quizSubmitted || selectedOpt !== null) return;
    if (timeLeft <= 0) {
      handleNextQuestion(true);
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [view, quizIndex, timeLeft, quizSubmitted, selectedOpt]);

  const handleSelectOption = (optIdx) => {
    if (selectedOpt !== null) return; // Prevent multiple selection
    setSelectedOpt(optIdx);
    if (optIdx === quizQuestions[quizIndex].correct) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = (forced = false) => {
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((prev) => prev + 1);
      setSelectedOpt(null);
      setTimeLeft(30);
    } else {
      setQuizSubmitted(true);
      const finalScore = quizScore;
      const passed = finalScore === quizQuestions.length;
      setQuizPassed(passed);
      if (passed) {
        onQuizPassed();
      }
    }
  };

  const handleRestartQuiz = () => {
    setQuizIndex(0);
    setSelectedOpt(null);
    setQuizScore(0);
    setQuizSubmitted(false);
    setQuizPassed(false);
    setTimeLeft(30);
  };

  // PDF Report and Certificate generators
  const getCircuitSVGForReport = () => {
    let slotsSvg = "";
    slots.forEach((gate, idx) => {
      const xOffset = 100 + idx * 80;
      if (gate) {
        slotsSvg += `
          <!-- Slot ${idx + 1} Gate: ${gate} -->
          <rect x="${xOffset}" y="38" width="40" height="30" rx="4" fill="white" stroke="black" stroke-width="1.5" />
          <text x="${xOffset + 20}" y="57" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">${gate}</text>
        `;
      } else {
        slotsSvg += `
          <!-- Slot ${idx + 1} Empty -->
          <rect x="${xOffset}" y="45" width="40" height="16" rx="2" fill="none" stroke="#ccc" stroke-width="1" stroke-dasharray="2,2" />
        `;
      }
    });

    return `
      <svg width="600" height="120" viewBox="0 0 600 120" style="background: #ffffff; border: 1px solid #000000; border-radius: 4px; padding: 10px; display: block; margin: 15px auto;">
        <line x1="80" y1="53" x2="520" y2="53" stroke="black" stroke-width="1.5" />
        <text x="25" y="57" font-family="monospace" font-size="14" font-weight="bold">q0 (|0&rang;)</text>
        ${slotsSvg}
      </svg>
    `;
  };

  const downloadReport = () => {
    const width = 900;
    const height = 650;
    const left = Math.max(0, (window.screen.availWidth - width) / 2);
    const top = Math.max(0, (window.screen.availHeight - height) / 2);

    const w = window.open(
      "",
      "_blank",
      `width=${width},height=${height},left=${left},top=${top}`
    );

    if (!w) {
      alert("Popup blocked! Please allow popups to view the report.");
      return;
    }

    const reportDate = new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const circuitHtml = getCircuitSVGForReport();

    w.document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>Experiment 1.1 Report — Quantum Mechanics Foundations</title>
  <style>
    body {
      font-family: "Times New Roman", serif;
      background: white;
      color: black;
      margin: 40px;
    }
    h1, h2 {
      text-align: center;
      margin: 0;
    }
    h1 { font-size: 22px; }
    h2 { font-size: 16px; margin-bottom: 20px; }
    h3 {
      font-size: 16px;
      margin-top: 22px;
      text-decoration: underline;
    }
    p, li {
      font-size: 14px;
      line-height: 1.5;
    }
    ul {
      margin-left: 20px;
    }
    .print-btn {
      display: block;
      margin: 30px auto;
      padding: 8px 20px;
      border: 1px solid black;
      background: white;
      cursor: pointer;
    }
    @media print {
      .print-btn { display: none; }
    }
  </style>
</head>
<body>

<button class="print-btn" onclick="window.print()">Print Report</button>

<h1>LAB REPORT - EXPERIMENT 1.1</h1>
<h2>Quantum Mechanics Foundations: Superposition & Complementarity</h2>

<h3>1. Aim</h3>
<p>The aim of this experiment is to explore the mathematical and physical foundations of single-qubit quantum states, demonstrating superposition vectors, basis complementarity, wavefunction collapse, and verifying the no-cloning theorem through interactive simulation.</p>

<h3>2. Apparatus</h3>
<ul>
  <li>Single-qubit quantum simulator workspace</li>
  <li>Quantum gate suite (Hadamard, Pauli X/Y/Z, Phase rotation S/T)</li>
  <li>Dynamic 3D coordinate-projected Bloch sphere visualizer</li>
  <li>Computational basis probability histogram</li>
</ul>

<h3>3. Mathematical Principles</h3>
<p>A qubit state |&psi;&rang; is represented as a state vector in a two-dimensional Hilbert space: |&psi;&rang; = &alpha;|0&rang; + &beta;|1&rang;, where &alpha; and &beta; are complex coefficients satisfying the normalization constraint |&alpha;|&sup2; + |&beta;|&sup2; = 1. Applying a Hadamard gate (H) maps the basis states to symmetric superposition states: H|0&rang; = ( |0&rang; + |1&rang; ) / &radic;2 = |+&rang;, which lies along the X axis of the Bloch sphere.</p>

<h3>4. Eavesdropper Detection and Disturbance</h3>
<p>The No-Cloning Theorem guarantees that an arbitrary unknown quantum state cannot be duplicated perfectly. Eavesdropper measurement in incompatible bases introduces irreversible disturbance (wavefunction collapse), modifying probability outcomes and revealing active observers.</p>

<h3>5. User Created Quantum Circuit</h3>
${circuitHtml}

<h3>6. Final State Vector Metrics</h3>
<ul>
  <li>State Vector: <strong>|&psi;&rang; = ${activeState.reA.toFixed(4)}|0&rang; + (${activeState.reB.toFixed(4)} + ${activeState.imB.toFixed(4)}i)|1&rang;</strong></li>
  <li>Probability P(|0&rang;): <strong>${(prob0 * 100).toFixed(2)}%</strong></li>
  <li>Probability P(|1&rang;): <strong>${(prob1 * 100).toFixed(2)}%</strong></li>
  <li>Report Date: <strong>${reportDate}</strong></li>
  <li>Verification Hash: <strong>WQL-11-QBAS-F5E6D7C8</strong></li>
</ul>

<h3>7. Conclusion</h3>
<p>Through circuit simulation, the properties of single-qubit superposition and relative phase rotations were validated. Guided measurements verified that observation projects the wavefunction, collapsing the superposition state vector into the computational basis outcome, supporting the foundational principles of quantum key distribution protocols.</p>

</body>
</html>
    `);

    w.document.close();
  };

  const downloadCertificate = () => {
    const { jsPDF } = require("jspdf");
    const doc = new jsPDF({ orientation: "landscape" });

    doc.setDrawColor(139, 105, 20);
    doc.setLineWidth(1.5);
    doc.rect(10, 10, 277, 190);
    doc.rect(12, 12, 273, 186);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(139, 105, 20);
    doc.text("AETHER QUANTUM LAB", 30, 32);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(156, 163, 175);
    doc.text("Quantum Communication Education Platform", 30, 38);

    doc.setDrawColor(201, 162, 39);
    doc.setLineWidth(0.5);
    doc.line(30, 48, 267, 48);

    doc.setFontSize(12);
    doc.setTextColor(107, 114, 128);
    doc.text("This certifies that", 148, 70, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(17, 24, 39);
    doc.text("Learner Name", 148, 90, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(107, 114, 128);
    doc.text("has successfully completed", 148, 108, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(29, 78, 216);
    doc.text("Quantum Mechanics Basics • Experiment 1.1", 148, 124, { align: "center" });

    doc.setDrawColor(201, 162, 39);
    doc.line(80, 142, 217, 142);

    const certDate = new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(156, 163, 175);
    doc.text("COMPLETION DATE", 30, 168);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(55, 65, 81);
    doc.text(certDate, 30, 175);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(156, 163, 175);
    doc.text("VERIFICATION HASH", 267, 168, { align: "right" });
    doc.setFont("courier", "bold");
    doc.setFontSize(10);
    doc.setTextColor(139, 105, 20);
    doc.text("WQL-11-QBAS-F5E6D7C8", 267, 175, { align: "right" });

    doc.save("Aether_Completion_Certificate_Exp_1.1.pdf");
  };

  const closeModal = () => setActiveTopic(null);

  const scrollToTopic = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleDrop = (index, gateType) => {
    const nextSlots = [...slots];
    nextSlots[index] = gateType;
    setSlots(nextSlots);

    // Advanced tour rules checks
    if (tourStep === 1 && index === 0 && gateType === "H") {
      setTourStep(2);
    } else if (tourStep === 3 && index === 1 && (gateType === "S" || gateType === "Z")) {
      setTourStep(4);
    }
  };

  const handleRemove = (index) => {
    const nextSlots = [...slots];
    nextSlots[index] = null;
    setSlots(nextSlots);
  };

  const handleClear = () => {
    setSlots([null, null, null, null, null]);
  };

  const handleQuickClick = (gateType) => {
    const emptyIdx = slots.indexOf(null);
    if (emptyIdx !== -1) {
      handleDrop(emptyIdx, gateType);
    }
  };

  // State calculations
  const activeState = computeState(slots);
  const prob0 = activeState.reA * activeState.reA + activeState.imA * activeState.imA;
  const prob1 = activeState.reB * activeState.reB + activeState.imB * activeState.imB;

  // Guided Tour Steps definition
  const TOUR_STEPS = [
    {
      title: dict.tour_steps[0].title,
      desc: dict.tour_steps[0].desc,
      highlight: "sandbox"
    },
    {
      title: dict.tour_steps[1].title,
      desc: dict.tour_steps[1].desc,
      highlight: "toolbox-H"
    },
    {
      title: dict.tour_steps[2].title,
      desc: dict.tour_steps[2].desc,
      highlight: "sphere"
    },
    {
      title: dict.tour_steps[3].title,
      desc: dict.tour_steps[3].desc,
      highlight: "toolbox-S"
    },
    {
      title: dict.tour_steps[4].title,
      desc: dict.tour_steps[4].desc,
      highlight: "sphere"
    },
    {
      title: dict.tour_steps[5].title,
      desc: dict.tour_steps[5].desc,
      highlight: "sandbox"
    }
  ];

  const startTour = () => {
    setTourStep(0);
    setView("builder");
  };

  return (
    <div className="learn-page qx-page">
      {/* Header Navbar */}
      <nav className="wiser-nav scrolled" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <div className="container-xl d-flex align-items-center justify-content-between" style={{ padding: "14px 20px" }}>
          <Link href="/experiments" className="d-flex align-items-center gap-2" style={{ textDecoration: "none", color: "var(--text)" }}>
            <ArrowLeft size={16} />
            <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{dict.nav_exit_workspace}</span>
          </Link>

          {/* PERSISTENT SUB-NAV FOR MODES */}
          <div className="builder-tab-nav" style={{ display: "flex", gap: 8 }}>
            <button
              className={`builder-tab-btn ${view === "learn" ? "active" : ""}`}
              onClick={() => setView("learn")}
            >
              {dict.nav_theory}
            </button>
            <button
              className={`builder-tab-btn ${view === "builder" ? "active" : ""}`}
              onClick={() => setView("builder")}
            >
              {dict.nav_playground}
            </button>
            <button
              className={`builder-tab-btn ${view === "sandbox" ? "active" : ""}`}
              onClick={() => setView("sandbox")}
            >
              Qiskit Sandbox
            </button>
            <button
              className={`builder-tab-btn ${view === "quiz" ? "active" : ""}`}
              onClick={() => { setView("quiz"); handleRestartQuiz(); }}
            >
              {dict.nav_quiz}
            </button>
            <button
              className={`builder-tab-btn ${view === "credentials" ? "active" : ""}`}
              onClick={() => setView("credentials")}
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <Award size={13} />
              {dict.btn_download_cert || "Credentials"}
            </button>
          </div>

          <div className="d-flex align-items-center gap-3">
            <button className="theme-toggle" onClick={() => setDark(!dark)} style={{ width: 44, height: 22 }}>
              <div className="theme-toggle-thumb" style={{ width: 16, height: 16, borderRadius: "50%", transform: `translateX(${dark ? "22px" : "2px"})`, background: dark ? "var(--accent)" : "#fbbf24", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {dark ? <Moon size={8} color="#fff" /> : <Sun size={8} color="#fff" />}
              </div>
            </button>
            <select value={lang} onChange={(e) => setLang(e.target.value)} style={{ fontSize: "0.75rem", background: "var(--bg-canvas)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 6, padding: "4px 8px", outline: "none" }}>
              {Object.keys(LANG_META).map((key) => (<option key={key} value={key}>{LANG_META[key].flag} {LANG_META[key].label}</option>))}
            </select>
          </div>
        </div>
      </nav>

      {/* RENDER MODE: THEORY DASHBOARD */}
      {view === "learn" && (
        <div className="view-fade-in">
          {/* HERO SECTION */}
          <section className="learn-hero">
            <div className="learn-hero-inner">
              <p className="learn-pill">{dict.title_basics}</p>
              <h1>{dict.hero_title}</h1>
              <p className="learn-hero-sub">
                {dict.hero_sub}
              </p>

              <div className="learn-hero-buttons">
                <button
                  className="learn-cta-primary"
                  onClick={() => scrollToTopic("quantum-basics")}
                >
                  {dict.btn_start_learning} &rarr;
                </button>
                <button
                  className="learn-cta-secondary d-flex align-items-center gap-2"
                  onClick={startTour}
                >
                  <Sparkles size={14} className="text-info" />
                  <span>{dict.btn_launch_playground}</span>
                </button>
              </div>

              <div className="learn-hero-grid">
                <div className="learn-hero-card">
                  <h3>{dict.card_superposition_title}</h3>
                  <p>
                    {dict.card_superposition_desc}
                  </p>
                </div>
                <div className="learn-hero-card">
                  <h3>{dict.card_nocloning_title}</h3>
                  <p>
                    {dict.card_nocloning_desc}
                  </p>
                </div>
                <div className="learn-hero-card">
                  <h3>{dict.card_measurement_title}</h3>
                  <p>
                    {dict.card_measurement_desc}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* TOPIC CARDS */}
          <section className="learn-topics">
            <div className="learn-topics-header">
              <h2>{dict.section_title}</h2>
              <p>
                {dict.section_sub}
              </p>
            </div>

            <div className="learn-cards-grid">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="learn-card"
                  onClick={() => setActiveTopic(topic)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveTopic(topic);
                    }
                  }}
                >
                  <div className="learn-card-visual-placeholder">
                    <TopicVisual id={topic.id} dict={dict} />
                  </div>
                  <div className="learn-card-body">
                    <h3>{topic.label}</h3>
                    <p>{topic.tag}</p>
                    <span className="learn-card-link">{dict.quick_summary} &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* YOUTUBE VIDEO RESOURCES */}
          <section style={{ padding: "48px 0 24px" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: 6, letterSpacing: "-0.01em" }}>
                {dict.section_title ? "Learn with Videos" : "Learn with Video"}
              </h2>
              <p style={{ fontSize: "0.87rem", color: "var(--text-3)", marginBottom: 28 }}>
                Handpicked videos to reinforce your understanding of quantum computing fundamentals.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {[
                  {
                    id: "F_Riqjdh2oM",
                    title: "Qubits, Superposition & Quantum Gates",
                    channel: "3Blue1Brown",
                    desc: "An intuitive visual walkthrough of the qubit, Bloch sphere, and how quantum gates transform quantum states."
                  },
                  {
                    id: "g_IaVepNDT4",
                    title: "How Does a Quantum Computer Work?",
                    channel: "Veritasium",
                    desc: "Derek Muller explains superposition, interference, and why quantum computers outperform classical ones."
                  }
                ].map((video) => (
                  <div
                    key={video.id}
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border)",
                      borderRadius: 14,
                      overflow: "hidden",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease"
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.18)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ position: "relative", paddingTop: "56.25%", background: "#000" }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                      />
                    </div>
                    <div style={{ padding: "14px 16px" }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{video.channel}</div>
                      <h4 style={{ fontSize: "0.92rem", fontWeight: 700, margin: "0 0 6px", lineHeight: "1.35" }}>{video.title}</h4>
                      <p style={{ fontSize: "0.78rem", color: "var(--text-3)", margin: 0, lineHeight: "1.5" }}>{video.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* LONG SCROLL SECTIONS */}
          {topics.map((topic, index) => (
            <section
              key={topic.id}
              id={topic.id}
              className={`learn-section ${index % 2 === 1 ? "learn-section-reverse" : ""}`}
            >
              <div className="learn-section-text">
                <p className="learn-section-kicker">{dict.concept_kicker} {index + 1} {dict.concept_of} {topics.length}</p>
                <h2>{topic.label}</h2>
                <p className="learn-section-tagline">{topic.tag}</p>

                {topic.longContent?.description && (
                  <p className="learn-section-description">
                    {topic.longContent.description}
                  </p>
                )}

                <ul style={{ paddingLeft: "20px", marginTop: "14px" }}>
                  {topic.bullets.map((b, i) => (
                    <li key={i} style={{ marginBottom: "8px", lineHeight: "1.6" }}>{b}</li>
                  ))}
                </ul>

                {topic.id === "bases-complementarity" && topic.longContent?.table && (
                  <div className="learn-basis-table">
                    <h4>{topic.longContent.table.title}</h4>
                    <table>
                      <thead>
                        <tr>
                          <th>{dict.table_basis}</th>
                          <th>{dict.table_bit0}</th>
                          <th>{dict.table_bit1}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topic.longContent.table.rows.map((row, i) => (
                          <tr key={i}>
                            <td><strong>{row.basis}</strong></td>
                            <td>{row.bit0}</td>
                            <td>{row.bit1}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="learn-section-visual">
                <div className="learn-section-visual-box">
                  <TopicVisual id={topic.id} dict={dict} />
                </div>

                {topic.id === "quantum-basics" && (
                  <div className="learn-qubit-states" style={{ marginTop: "14px", width: "100%" }}>
                    <h4>{dict.math_vector_title}</h4>
                    <div className="state-item">
                      <span className="state-label">{dict.math_vector_def}</span>
                      <span className="state-value" style={{ fontFamily: "monospace", fontWeight: 700 }}>|ψ⟩ = α|0⟩ + β|1⟩</span>
                    </div>
                    <div className="state-item">
                      <span className="state-label">{dict.math_vector_constraint}</span>
                      <span className="state-value" style={{ fontFamily: "monospace" }}>|α|² + |β|² = 1</span>
                    </div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-3)", margin: "8px 0 0 0", lineHeight: "1.4" }}>
                      {dict.math_vector_desc}
                    </p>
                  </div>
                )}
              </div>
            </section>
          ))}

          {/* FINAL CTA SECTION */}
          <section className="learn-final-cta">
            <div className="learn-final-inner">
              <h2>{dict.cta_title}</h2>
              <p>
                {dict.cta_desc}
              </p>
              <div className="learn-final-buttons">
                <button
                  className="learn-cta-primary"
                  onClick={() => setView("builder")}
                >
                  {dict.cta_btn_playground}
                </button>
                <button
                  className="learn-cta-secondary"
                  onClick={() => scrollToTopic("quantum-basics")}
                >
                  {dict.cta_btn_top}
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* RENDER MODE: DYNAMIC DRAG AND DROP BUILDER */}
      {view === "builder" && (
        <div className="view-fade-in">
          <section className="builder-playground-section" id="sandbox-root">
            <div className="builder-header-bar">
              <div>
                <h2>{dict.builder_title}</h2>
                <p>{dict.builder_sub}</p>
              </div>
              <div className="builder-header-actions">
                <button className="btn-secondary-wiser d-flex align-items-center gap-1" onClick={startTour}>
                  <HelpCircle size={14} />
                  <span>{dict.btn_guided_tour}</span>
                </button>
                <button className="btn-danger-wiser d-flex align-items-center gap-1" onClick={handleClear}>
                  <RotateCcw size={14} />
                  <span>{dict.btn_clear_circuit}</span>
                </button>
              </div>
            </div>

            <div className="builder-grid-container">
              {/* LEFT SIDE: TOOLBOX AND CIRCUIT */}
              <div className="builder-left-panel">

                {/* GATE TOOLBOX */}
                <div className={`builder-toolbox-card ${tourStep === 1 ? "highlight-tour" : ""}`}>
                  <h3>{dict.toolbox_title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-3)", marginBottom: 12 }}>
                    {dict.toolbox_desc}
                  </p>

                  <div className="gates-palette-grid">
                    {[
                      { type: "H", desc: "Hadamard", color: "var(--accent)" },
                      { type: "X", desc: "Pauli X", color: "#f43f5e" },
                      { type: "Y", desc: "Pauli Y", color: "#34d399" },
                      { type: "Z", desc: "Pauli Z", color: "#fbbf24" },
                      { type: "S", desc: "Phase (S)", color: "#a78bfa" },
                      { type: "T", desc: "Phase (T)", color: "#ec4899" },
                      { type: "I", desc: "Identity", color: "var(--text-3)" }
                    ].map((gate) => (
                      <button
                        key={gate.type}
                        className={`palette-gate-button ${tourStep === 1 && gate.type === "H" ? "glowing-btn" : ""} ${tourStep === 3 && gate.type === "S" ? "glowing-btn" : ""}`}
                        style={{ borderColor: `${gate.color}40`, color: gate.color }}
                        draggable="true"
                        onDragStart={(e) => {
                          setDraggedGate(gate.type);
                          e.dataTransfer.setData("gateType", gate.type);
                        }}
                        onClick={() => handleQuickClick(gate.type)}
                      >
                        <span className="gate-sym">{gate.type}</span>
                        <span className="gate-desc">{gate.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CIRCUIT TIMELINE */}
                <div className="builder-timeline-card">
                  <h3>{dict.timeline_title}</h3>

                  <div className="timeline-qubit-row">
                    {/* Qubit label wire start */}
                    <div className="qubit-start-label">
                      <span className="qubit-register-id">q₀</span>
                      <span className="qubit-register-state">|0⟩</span>
                    </div>

                    {/* Circuit timeline slots */}
                    <div className="qubit-line-slots-container">
                      <div className="qubit-wire-line" />

                      {slots.map((gate, idx) => (
                        <div
                          key={idx}
                          className={`timeline-slot-box ${!gate ? "empty" : "occupied"} ${tourStep === 1 && idx === 0 ? "highlight-tour-slot" : ""} ${tourStep === 3 && idx === 1 ? "highlight-tour-slot" : ""}`}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => {
                            const gateType = e.dataTransfer.getData("gateType") || draggedGate;
                            if (gateType) handleDrop(idx, gateType);
                          }}
                        >
                          {gate ? (
                            <div className="dropped-gate-badge">
                              <span className="dropped-gate-title">{gate}</span>
                              <button
                                className="remove-gate-btn"
                                onClick={() => handleRemove(idx)}
                                title="Remove Gate"
                              >
                                <X size={10} />
                              </button>
                            </div>
                          ) : (
                            <span className="slot-idx-num">{idx + 1}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 24, fontSize: "0.8rem", color: "var(--text-3)", display: "flex", gap: 16 }}>
                    <span>&bull; {dict.note_drag}</span>
                    <span>&bull; {dict.note_click}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: BLOCH SPHERE AND HISTOGRAM */}
              <div className="builder-right-panel">

                {/* DYNAMIC BLOCH SPHERE */}
                <div className={`builder-sphere-card ${(tourStep === 2 || tourStep === 4) ? "highlight-tour" : ""}`}>
                  <h3>{dict.bloch_title}</h3>
                  <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
                    <LiveBlochSphere state={activeState} />
                  </div>
                </div>

                {/* MEASUREMENT LIKELIHOOD HISTOGRAM */}
                <div className="builder-histogram-card">
                  <h3>{dict.histogram_title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-3)", marginBottom: 16 }}>
                    {dict.histogram_desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div>
                      <div className="d-flex justify-content-between mb-1" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                        <span>{dict.builder_outcome_0}</span>
                        <span style={{ color: "var(--accent)" }}>{(prob0 * 100).toFixed(0)}%</span>
                      </div>
                      <div className="progress" style={{ height: 10, background: "var(--border)", borderRadius: 5 }}>
                        <div
                          className="progress-bar bg-info"
                          style={{ width: `${prob0 * 100}%`, transition: "width 0.3s ease" }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="d-flex justify-content-between mb-1" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                        <span>{dict.builder_outcome_1}</span>
                        <span style={{ color: "var(--accent-2)" }}>{(prob1 * 100).toFixed(0)}%</span>
                      </div>
                      <div className="progress" style={{ height: 10, background: "var(--border)", borderRadius: 5 }}>
                        <div
                          className="progress-bar"
                          style={{ width: `${prob1 * 100}%`, background: "#a78bfa", transition: "width 0.3s ease" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: 8, padding: 12, marginTop: 18, fontSize: "0.78rem", fontFamily: "monospace" }}>
                    <div>{dict.builder_state_vector}</div>
                    <div style={{ color: "var(--accent)", fontWeight: 700, marginTop: 4 }}>
                      |ψ⟩ = {activeState.reA.toFixed(2)}|0⟩ + ({activeState.reB.toFixed(2)} {activeState.imB >= 0 ? "+" : ""} {activeState.imB.toFixed(2)}i)|1⟩
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING TOUR POPUP CARD */}
            {tourStep !== null && (
              <div className="tour-floating-card">
                <div className="tour-card-header">
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Sparkles size={16} className="text-info animate-pulse" />
                    <h4>{dict.guided_tour_title}: {dict.guided_tour_step} {tourStep + 1} {dict.guided_tour_of} {TOUR_STEPS.length}</h4>
                  </div>
                  <button className="tour-close-btn" onClick={() => setTourStep(null)}>
                    <X size={14} />
                  </button>
                </div>

                <div className="tour-card-body">
                  <h5>{TOUR_STEPS[tourStep].title}</h5>
                  <p>{TOUR_STEPS[tourStep].desc}</p>
                </div>

                <div className="tour-card-footer">
                  <button
                    className="btn-secondary-wiser"
                    onClick={() => setTourStep(null)}
                    style={{ fontSize: "0.78rem", padding: "4px 10px" }}
                  >
                    {dict.btn_skip}
                  </button>

                  <div style={{ display: "flex", gap: 8 }}>
                    {tourStep > 0 && (
                      <button
                        className="tour-nav-btn"
                        onClick={() => setTourStep(tourStep - 1)}
                      >
                        <ChevronLeft size={16} />
                        <span>{dict.btn_back}</span>
                      </button>
                    )}

                    {tourStep < TOUR_STEPS.length - 1 ? (
                      <button
                        className="tour-nav-btn primary-tour-btn"
                        onClick={() => {
                          // Allow clicking next on visual information steps
                          if (tourStep === 0 || tourStep === 2 || tourStep === 4) {
                            setTourStep(tourStep + 1);
                          }
                        }}
                        disabled={tourStep === 1 || tourStep === 3} // User must drag the gate to proceed
                        style={{
                          opacity: (tourStep === 1 || tourStep === 3) ? 0.5 : 1,
                          cursor: (tourStep === 1 || tourStep === 3) ? "not-allowed" : "pointer"
                        }}
                      >
                        <span>{dict.btn_next}</span>
                        <ChevronRight size={16} />
                      </button>
                    ) : (
                      <button
                        className="tour-nav-btn primary-tour-btn"
                        onClick={() => setTourStep(null)}
                      >
                        <span>{dict.btn_done}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      )}

      {/* RENDER MODE: CREDENTIALS PAGE */}
      {view === "credentials" && (
        <div className="view-fade-in">
          <section className="builder-playground-section" style={{ minHeight: "80vh" }}>
            {/* Page Header */}
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 6 }}>Academic Credentials</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-3)", margin: 0 }}>Experiment 1.1 — Quantum Mechanics Basics</p>
            </div>

            {/* Stats Row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 14, marginBottom: 28 }}>
              {[
                { label: "Experiment", value: "Exp 1.1", icon: <FlaskConical size={16} /> },
                { label: "Topics Covered", value: "4 Concepts", icon: <BookOpen size={16} /> },
                { label: "Gates Applied", value: `${slots.filter(Boolean).length} Gates`, icon: <Cpu size={16} /> },
                { label: "Quiz Score", value: quizPassed ? `${quizScore}/${quizQuestions.length}` : "Not Taken", icon: <CheckCircle2 size={16} /> }
              ].map((stat) => (
                <div key={stat.label} style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                    <span style={{ color: "var(--accent)" }}>{stat.icon}</span>
                    <span style={{ fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-3)" }}>{stat.label}</span>
                  </div>
                  <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text)" }}>{stat.value}</span>
                </div>
              ))}
            </div>

            {!quizPassed ? (
              <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 40, textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--bg-card)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <Award size={26} style={{ color: "var(--text-3)" }} />
                </div>
                <h5 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-3)", marginBottom: 8 }}>Credentials Locked</h5>
                <p style={{ fontSize: "0.84rem", color: "var(--text-3)", maxWidth: 380, margin: "0 auto 20px" }}>
                  Complete the Checkpoint Quiz to unlock the printable Laboratory Report and Completion Certificate.
                </p>
                <button className="btn-primary-wiser" onClick={() => { setView("quiz"); handleRestartQuiz(); }}>
                  Take the Quiz →
                </button>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                {/* Lab Report Card */}
                <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 28, textAlign: "center" }}>
                  <FileText size={40} style={{ color: "var(--accent)", marginBottom: 16 }} />
                  <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>Academic Lab Report</h5>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-3)", marginBottom: 20, lineHeight: 1.6 }}>
                    Download a formal PDF report containing your circuit diagram, gate configurations, Bloch sphere states, and quiz performance.
                  </p>
                  <button
                    className="btn-primary-wiser"
                    onClick={downloadReport}
                    style={{ width: "100%", padding: "12px 0", fontSize: "0.9rem", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                  >
                    <Download size={15} />
                    {dict.btn_download_report || "Download Lab Report"}
                  </button>
                </div>

                {/* Golden Certificate Preview Card */}
                <div style={{ height: "100%", background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
                  {/* Label bar */}
                  <div style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
                    <Award size={14} style={{ color: "#C9A227" }} />
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)" }}>
                      Completion Certificate Preview
                    </span>
                  </div>

                  {/* Certificate Body (forced light theme) */}
                  <div style={{ background: "#ffffff", color: "#1a1a1a" }}>
                    {/* Gold top bar */}
                    <div style={{ height: 4, background: "linear-gradient(90deg, #8B6914, #C9A227, #F7D794, #C9A227, #8B6914)" }} />

                    <div style={{ padding: "28px 24px 20px 24px", fontFamily: "Inter,sans-serif" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                        <div>
                          <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", color: "#8B6914", textTransform: "uppercase", fontWeight: 700, margin: 0 }}>AETHER QUANTUM LAB</p>
                          <p style={{ fontSize: "0.58rem", color: "#6B7280", letterSpacing: "0.08em", margin: 0 }}>Quantum Communication Education Platform</p>
                        </div>
                        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(201,162,39,0.1)", border: "1px solid #C9A227", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Award size={16} color="#8B6914" />
                        </div>
                      </div>

                      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #C9A227, transparent)", marginBottom: 16 }} />

                      <div style={{ textAlign: "center", marginBottom: 16 }}>
                        <p style={{ fontSize: "0.55rem", letterSpacing: "0.14em", color: "#6B7280", textTransform: "uppercase", marginBottom: 6 }}>This certifies that</p>
                        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#111827", margin: "0 0 6px 0" }}>Learner Name</p>
                        <p style={{ fontSize: "0.58rem", color: "#6B7280", textTransform: "uppercase", marginBottom: 6 }}>has successfully completed</p>
                        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.85rem", fontWeight: 600, color: "#1D4ED8", margin: 0 }}>
                          Quantum Mechanics Basics • Exp 1.1
                        </p>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #C9A227)" }} />
                        <div style={{ display: "flex", gap: 4 }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#C9A227" }} />
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#C9A227" }} />
                        </div>
                        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #C9A227, transparent)" }} />
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: "0.7rem" }}>
                        <div>
                          <p style={{ fontSize: "0.55rem", color: "#6B7280", margin: "0 0 2px 0" }}>COMPLETION DATE</p>
                          <p style={{ fontWeight: 600, color: "#374151", margin: 0 }}>{new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <p style={{ fontSize: "0.55rem", color: "#6B7280", margin: "0 0 2px 0" }}>VERIFICATION HASH</p>
                          <p style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "#8B6914", margin: 0 }}>WQL-11-QBAS-F5E6D7C8</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", padding: "0 24px 24px 24px" }}>
                      <button className="btn-primary-wiser" onClick={downloadCertificate} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                        <Award size={16} />
                        Download Verifiable Certificate
                      </button>
                    </div>

                    <div style={{ height: 3, background: "linear-gradient(90deg, #8B6914, #C9A227, #F7D794, #C9A227, #8B6914)" }} />
                  </div>
                </div>
              </div>
            )}

            {/* Bottom CTA */}
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/experiments" className="learn-cta-secondary" style={{ textDecoration: "none", display: "inline-block", padding: "10px 28px" }}>
                {dict.btn_back_dashboard || "← Back to Experiments"}
              </Link>
            </div>
          </section>
        </div>
      )}      {/* RENDER MODE: QISKIT SANDBOX */}
      {view === "sandbox" && (
        <div className="view-fade-in" style={{ padding: "40px 0 80px" }}>
          <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
            <div className="d-flex justify-content-between align-items-center mb-16 flex-wrap gap-2" style={{ marginBottom: 24 }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, margin: 0, color: "var(--text)" }}>Qiskit Sandbox</h3>
                <p style={{ fontSize: "0.87rem", color: "var(--text-3)", marginTop: 4, margin: 0 }}>
                  Copy this Qiskit code to run it locally or inside Google Colab.
                </p>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <a
                  href={COLAB_LINKS["1.1"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-wiser"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 16px",
                    fontSize: "0.8rem",
                    borderRadius: 6,
                    fontWeight: 600
                  }}
                >
                  <Play size={12} /> Open in Colab
                </a>
                <button
                  onClick={handleCopyCode}
                  className="btn-secondary-wiser"
                  style={{
                    padding: "8px 16px",
                    fontSize: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    borderRadius: 6,
                    cursor: "pointer"
                  }}
                >
                  {copied ? <CheckCircle2 size={14} style={{ color: "#34d399" }} /> : <Cpu size={14} />}
                  {copied ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>

            <pre
              style={{
                background: "var(--bg-canvas)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 20,
                fontFamily: "monospace",
                fontSize: "0.85rem",
                color: "var(--accent)",
                overflowX: "auto",
                maxHeight: 500,
                lineHeight: 1.6
              }}
            >
              {basicsQiskitCode}
            </pre>
          </section>
        </div>
      )}


      {/* RENDER MODE: CHECKPOINT QUIZ */}
      {view === "quiz" && (
        <div className="view-fade-in">
          <section className="quiz-section-container" style={{ maxWidth: 640, margin: "40px auto 80px", padding: "0 24px" }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: "var(--accent)" }}>
                {dict.quiz_title} ({quizIndex + 1}/{quizQuestions.length})
              </h3>
              {!quizSubmitted && (
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.9rem", color: timeLeft <= 5 ? "#f43f5e" : "var(--text)" }}>
                  <AlertCircle size={16} />
                  <span style={{ fontWeight: 700 }}>{timeLeft}s {dict.quiz_time_left}</span>
                </div>
              )}
            </div>

            {!quizSubmitted ? (
              <div style={{ background: "var(--bg-card-glass)", border: "1px solid var(--border)", borderRadius: 16, padding: 28, backdropFilter: "blur(8px)", boxShadow: "var(--shadow-md)" }}>
                <h5 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 20, lineHeight: "1.5" }}>
                  {quizQuestions[quizIndex].q}
                </h5>

                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {quizQuestions[quizIndex].options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    const isCorrect = optIdx === quizQuestions[quizIndex].correct;

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(optIdx)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "14px 18px",
                          background: selectedOpt !== null && isCorrect
                            ? "rgba(16, 185, 129, 0.12)"
                            : selectedOpt !== null && isSelected && !isCorrect
                              ? "rgba(244, 63, 94, 0.12)"
                              : isSelected
                                ? "var(--accent-glow)"
                                : "var(--bg-card)",
                          color: selectedOpt !== null && isCorrect
                            ? "#10b981"
                            : selectedOpt !== null && isSelected && !isCorrect
                              ? "#f43f5e"
                              : "var(--text-2)",
                          border: "1px solid",
                          borderColor: selectedOpt !== null && isCorrect
                            ? "#10b981"
                            : selectedOpt !== null && isSelected && !isCorrect
                              ? "#f43f5e"
                              : isSelected
                                ? "var(--accent)"
                                : "var(--border)",
                          borderRadius: 10,
                          fontSize: "0.88rem",
                          fontWeight: isSelected ? 600 : 500,
                          cursor: selectedOpt !== null ? "default" : "pointer",
                          transition: "all 0.15s ease"
                        }}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {selectedOpt !== null && (
                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
                    <button
                      className="learn-cta-primary"
                      onClick={() => handleNextQuestion(false)}
                      style={{ padding: "8px 24px", fontSize: "0.8rem", borderRadius: 8 }}
                    >
                      <span>{quizIndex < quizQuestions.length - 1 ? dict.quiz_next_question : dict.quiz_submit_results}</span>
                      <ArrowRight size={14} style={{ marginLeft: 8 }} />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "32px 24px", background: "var(--bg-card-glass)", border: "1px solid var(--border)", borderRadius: 16, backdropFilter: "blur(8px)", boxShadow: "var(--shadow-md)" }}>
                {quizPassed ? (
                  <div style={{ maxWidth: 460, margin: "0 auto" }}>
                    <CheckCircle2 size={48} style={{ color: "#10b981", marginBottom: 16 }} />
                    <h4 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: 12 }}>{dict.quiz_passed_title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-2)", marginBottom: 24, lineHeight: "1.6" }}>
                      {dict.quiz_passed_desc.replace("{score}", quizScore.toString())}
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                      <button
                        className="btn-primary-wiser"
                        onClick={downloadReport}
                        style={{ width: "100%", padding: "10px 18px", fontSize: "0.85rem", fontWeight: 700 }}
                      >
                        {dict.btn_download_report}
                      </button>
                      <button
                        className="learn-cta-primary"
                        onClick={downloadCertificate}
                        style={{ width: "100%", padding: "10px 18px", fontSize: "0.85rem", fontWeight: 700 }}
                      >
                        {dict.btn_download_cert}
                      </button>
                    </div>

                    <Link href="/experiments" className="learn-cta-secondary" style={{ textDecoration: "none", display: "inline-block", width: "100%", padding: "10px 18px" }}>
                      {dict.btn_back_dashboard}
                    </Link>
                  </div>
                ) : (
                  <div style={{ maxWidth: 460, margin: "0 auto" }}>
                    <AlertCircle size={48} style={{ color: "#f43f5e", marginBottom: 16 }} />
                    <h4 style={{ fontWeight: 800, fontSize: "1.3rem", marginBottom: 12 }}>{dict.quiz_failed_title}</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-2)", marginBottom: 24, lineHeight: "1.6" }}>
                      {dict.quiz_failed_desc.replace("{score}", quizScore.toString())}
                    </p>
                    <button
                      className="learn-cta-primary"
                      onClick={handleRestartQuiz}
                    >
                      {dict.btn_retake_quiz}
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      )}

      {/* MODAL FOR QUICK OVERVIEW */}
      {activeTopic && (
        <div className="learn-modal-backdrop" onClick={closeModal}>
          <div
            className="learn-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="learn-modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="learn-modal-visual-preview">
              <TopicVisual id={activeTopic.id} dict={dict} />
            </div>
            <h3>{activeTopic.label}</h3>
            <p className="learn-modal-tag">{activeTopic.tag}</p>
            <ul style={{ paddingLeft: "20px", marginTop: "14px" }}>
              {activeTopic.bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: "8px", lineHeight: "1.6" }}>{b}</li>
              ))}
            </ul>
            <button
              className="learn-cta-primary learn-modal-button"
              onClick={() => {
                closeModal();
                scrollToTopic(activeTopic.id);
              }}
              style={{ marginTop: "16px" }}
            >
              {dict.btn_scroll_section} &darr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
