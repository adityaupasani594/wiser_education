"use client";

import React, { useState, useEffect } from "react";
import "./Experiment41.css";
import {
  ArrowLeft, BookOpen, Sparkles, HelpCircle, RotateCcw, ChevronRight, ChevronLeft, X,
  AlertCircle, CheckCircle2, ArrowRight, Moon, Sun, Award, FileText, Download, FlaskConical, Cpu, Play
} from "lucide-react";
import Link from "next/link";
import { LANG_META } from "../../data/translations";
import { TRANSLATIONS_EXP_4_1 } from "../../data/translations_exp_4.1";
import { COLAB_LINKS } from "../../data/colabLinks";
import { CONSISTENT_NAV } from "../../data/consistentNav";

const QUIZ_ANSWERS = [1, 0, 1, 0, 1, 0, 1, 1, 1, 0];

// Interactive SVG Visualisations for the Theory dashboard
function TopicVisual({ id, dict }) {
  const [errorActive, setErrorActive] = useState(false);

  useEffect(() => {
    if (id !== "error-correction-need") return;
    const interval = setInterval(() => {
      setErrorActive((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, [id]);

  if (!dict) return null;

  if (id === "error-correction-need") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          {/* Baseline channel */}
          <line x1="20" y1="75" x2="200" y2="75" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />

          {errorActive ? (
            <g>
              {/* Bit flipped state */}
              <circle cx="110" cy="75" r="18" fill="rgba(244, 63, 94, 0.12)" stroke="#f43f5e" strokeWidth="2" />
              <text x="110" y="80" fill="#f43f5e" fontSize="11" textAnchor="middle" fontWeight="bold">X Error</text>
              <path d="M20 75 Q 65 35, 110 75 T 200 75" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 2" />
              <text x="110" y="35" fill="#f43f5e" fontSize="10" textAnchor="middle" fontWeight="bold">α|1⟩ + β|0⟩</text>
            </g>
          ) : (
            <g>
              {/* Clean superposition state */}
              <circle cx="110" cy="75" r="18" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="2" />
              <text x="110" y="80" fill="#06b6d4" fontSize="11" textAnchor="middle" fontWeight="bold">Clean</text>
              <path d="M20 75 Q 65 115, 110 75 T 200 75" fill="none" stroke="#06b6d4" strokeWidth="2" className="wave-pulse" />
              <text x="110" y="130" fill="#06b6d4" fontSize="10" textAnchor="middle" fontWeight="bold">α|0⟩ + β|1⟩</text>
            </g>
          )}
        </svg>
        <span className="visual-caption">Bit-Flip Noise Channel (Flashes red on flip)</span>
      </div>
    );
  }

  if (id === "quantum-encoding") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          {/* Wire 1 */}
          <line x1="20" y1="40" x2="200" y2="40" stroke="var(--text-3)" strokeWidth="1.5" />
          <text x="12" y="44" fill="var(--text-3)" fontSize="10">q0</text>

          {/* Wire 2 */}
          <line x1="20" y1="75" x2="200" y2="75" stroke="var(--text-3)" strokeWidth="1.5" />
          <text x="12" y="79" fill="var(--text-3)" fontSize="10">q1</text>

          {/* Wire 3 */}
          <line x1="20" y1="110" x2="200" y2="110" stroke="var(--text-3)" strokeWidth="1.5" />
          <text x="12" y="114" fill="var(--text-3)" fontSize="10">q2</text>

          {/* First CNOT */}
          <circle cx="70" cy="40" r="3" fill="#06b6d4" />
          <line x1="70" y1="40" x2="70" y2="75" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="70" cy="75" r="6" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="64" y1="75" x2="76" y2="75" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="70" y1="69" x2="70" y2="81" stroke="#06b6d4" strokeWidth="1.5" />

          {/* Second CNOT */}
          <circle cx="130" cy="40" r="3" fill="#a78bfa" />
          <line x1="130" y1="40" x2="130" y2="110" stroke="#a78bfa" strokeWidth="1.5" />
          <circle cx="130" cy="110" r="6" fill="none" stroke="#a78bfa" strokeWidth="1.5" />
          <line x1="124" y1="110" x2="136" y2="110" stroke="#a78bfa" strokeWidth="1.5" />
          <line x1="130" y1="104" x2="130" y2="116" stroke="#a78bfa" strokeWidth="1.5" />
        </svg>
        <span className="visual-caption">Repetition Encoder Circuit: 2 CNOT Gates</span>
      </div>
    );
  }

  if (id === "error-injection") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          <rect x="30" y="30" width="160" height="90" rx="8" fill="rgba(244, 63, 94, 0.05)" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" />
          <text x="110" y="50" fill="#f43f5e" fontSize="10" textAnchor="middle" fontWeight="bold">Decoherence Environment</text>

          <line x1="20" y1="75" x2="90" y2="75" stroke="#06b6d4" strokeWidth="2" />
          <rect x="90" y="60" width="30" height="30" rx="4" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" strokeWidth="1.5" />
          <text x="105" y="79" fill="#f43f5e" fontSize="12" fontWeight="bold" textAnchor="middle">X</text>
          <line x1="120" y1="75" x2="200" y2="75" stroke="#f43f5e" strokeWidth="2" />

          <text x="110" y="110" fill="var(--text-3)" fontSize="9" textAnchor="middle">Bit-flip gate X is injected on one line</text>
        </svg>
        <span className="visual-caption">Environmental Phase/Bit-Flip Corruption</span>
      </div>
    );
  }

  if (id === "syndrome-correction") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          {/* Comparison blocks */}
          <rect x="25" y="25" width="75" height="55" rx="6" fill="var(--bg-canvas)" stroke="var(--border)" strokeWidth="1" />
          <text x="62" y="45" fill="var(--accent)" fontSize="9" textAnchor="middle" fontWeight="bold">Compare q0, q1</text>
          <text x="62" y="62" fill="var(--text)" fontSize="11" textAnchor="middle" fontWeight="bold">S1 = Z0 Z1</text>

          <rect x="120" y="25" width="75" height="55" rx="6" fill="var(--bg-canvas)" stroke="var(--border)" strokeWidth="1" />
          <text x="157" y="45" fill="var(--accent-2)" fontSize="9" textAnchor="middle" fontWeight="bold">Compare q1, q2</text>
          <text x="157" y="62" fill="var(--text)" fontSize="11" textAnchor="middle" fontWeight="bold">S2 = Z1 Z2</text>

          <path d="M 62 80 L 110 115" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="3 3" />
          <path d="M 157 80 L 110 115" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="3 3" />

          <rect x="75" y="110" width="70" height="30" rx="4" fill="rgba(52, 211, 153, 0.1)" stroke="#34d399" strokeWidth="1.5" />
          <text x="110" y="128" fill="#34d399" fontSize="10" textAnchor="middle" fontWeight="bold">Locate &amp; Fix</text>
        </svg>
        <span className="visual-caption">Parity Syndrome Matching (No data read)</span>
      </div>
    );
  }

  return null;
}

// -------------------------------------------------------------------
// Dynamic Bloch Sphere Projection Component
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

        <text x={pVector.px + 8} y={pVector.py - 4} fill="var(--accent)" fontSize="9" fontWeight="bold">
          {label}
        </text>
      </svg>
      <div style={{ fontSize: "0.65rem", color: "var(--text-3)", textAlign: "center", marginTop: 4 }}>
        🖱️ Drag sphere to rotate in 3D
      </div>
    </div>
  );
}

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
      <div style={{ marginTop: 6, textAlign: "center", fontSize: "0.75rem" }}>
        <div>Vector: <span style={{ fontFamily: "monospace", color: "var(--accent)", fontWeight: 700 }}>[{x.toFixed(2)}, {y.toFixed(2)}, {z.toFixed(2)}]</span></div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------------
// LIVE 3-QUBIT BIT-FLIP CIRCUIT DIAGRAM
// -------------------------------------------------------------------
function BitFlipCircuit({ playgroundStep, errorQubit, syndromesMeasured, correctionTarget }) {
  const W = 900;
  const H = 200;
  const WIRES = [52, 100, 148];   // y-coords for q0, q1, q2
  const ANCS = [196, 244];       // y-coords for ancilla a0, a1 (not drawn as full wires, just used for CNOT targets)
  const wireColor = "#4b5563";
  const activeColor = "#06b6d4";
  const errorColor = "#f43f5e";
  const corrColor = "#34d399";
  const gateColor = "#a78bfa";

  // X sections start positions
  const SEC = {
    init: 30,
    enc1: 160,   // CNOT q0→q1
    enc2: 220,   // CNOT q0→q2
    noise: 320,   // X error gate
    syn1: 450,   // ancilla CNOT for syndrome 1 (q0,q1)
    syn2: 550,   // ancilla CNOT for syndrome 2 (q1,q2)
    meas: 660,   // measure ancillas
    corr: 770,   // correction X gate
    decode1: 840,
  };

  const step = playgroundStep;
  const encDone = step >= 2;
  const noiseDone = step >= 3;
  const synDone = step >= 4;
  const corrDone = step >= 4 && correctionTarget !== "none";

  // Helper to draw a CNOT gate at (cx, cy_ctrl, cy_tgt)
  const CNOTGate = ({ cx, cyCtrl, cyTgt, color = activeColor, dim = false }) => (
    <g opacity={dim ? 0.25 : 1}>
      <circle cx={cx} cy={cyCtrl} r={4} fill={color} />
      <line x1={cx} y1={cyCtrl} x2={cx} y2={cyTgt} stroke={color} strokeWidth={1.5} />
      <circle cx={cx} cy={cyTgt} r={9} fill="none" stroke={color} strokeWidth={1.5} />
      <line x1={cx - 9} y1={cyTgt} x2={cx + 9} y2={cyTgt} stroke={color} strokeWidth={1.5} />
      <line x1={cx} y1={cyTgt - 9} x2={cx} y2={cyTgt + 9} stroke={color} strokeWidth={1.5} />
    </g>
  );

  // Helper to draw an X gate box
  const XGate = ({ cx, cy, color = activeColor, label = "X", dim = false }) => (
    <g opacity={dim ? 0.25 : 1}>
      <rect x={cx - 14} y={cy - 14} width={28} height={28} rx={5}
        fill={`${color}18`} stroke={color} strokeWidth={1.5} />
      <text x={cx} y={cy + 5} fill={color} fontSize={12} fontWeight="bold"
        textAnchor="middle" fontFamily="'Inter',sans-serif">{label}</text>
    </g>
  );

  // Helper to draw a Measure box
  const Measure = ({ cx, cy, dim = false }) => (
    <g opacity={dim ? 0.25 : 1}>
      <rect x={cx - 12} y={cy - 12} width={24} height={24} rx={4}
        fill="rgba(251,191,36,0.12)" stroke="#fbbf24" strokeWidth={1.2} />
      <text x={cx} y={cy + 4} fill="#fbbf24" fontSize={10}
        textAnchor="middle" fontFamily="'Inter',sans-serif">M</text>
    </g>
  );

  // Map errorQubit to wire index
  const errIdx = errorQubit === "q0" ? 0 : errorQubit === "q1" ? 1 : errorQubit === "q2" ? 2 : -1;
  const corrIdx = correctionTarget === "q0" ? 0 : correctionTarget === "q1" ? 1 : correctionTarget === "q2" ? 2 : -1;

  return (
    <div className="qec-circuit-diagram-wrapper">
      <div className="qec-circuit-label">Live Circuit — 3-Qubit Bit-Flip Code</div>
      <div style={{ overflowX: "auto", overflowY: "visible" }}>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}
          style={{ display: "block", fontFamily: "'Inter',sans-serif" }}>

          {/* === WIRE LINES === */}
          {WIRES.map((wy, i) => (
            <line key={i} x1={SEC.init} y1={wy} x2={W - 20} y2={wy}
              stroke={wireColor} strokeWidth={1.5} />
          ))}

          {/* === WIRE LABELS === */}
          {["q₀", "q₁", "q₂"].map((lbl, i) => (
            <text key={i} x={SEC.init - 8} y={WIRES[i] + 5}
              fill="#9ca3af" fontSize={11} textAnchor="end"
              fontFamily="'Inter',sans-serif">{lbl}</text>
          ))}

          {/* === SECTION LABELS (top row) === */}
          {[
            { x: SEC.enc1 + 30, label: "Encode", active: step >= 1 },
            { x: SEC.noise, label: "Noise", active: noiseDone },
            { x: SEC.syn1 + 50, label: "Syndrome", active: synDone },
            { x: SEC.corr, label: "Correct", active: corrDone },
          ].map(({ x, label, active }) => (
            <text key={label} x={x} y={16}
              fill={active ? activeColor : "#374151"}
              fontSize={10} fontWeight="700" textAnchor="middle"
              fontFamily="'Inter',sans-serif">{label}</text>
          ))}

          {/* === SECTION DIVIDERS === */}
          {[SEC.noise - 35, SEC.syn1 - 35, SEC.meas - 15, SEC.corr - 15].map((dx, i) => (
            <line key={i} x1={dx} y1={22} x2={dx} y2={H - 10}
              stroke="#1f2937" strokeWidth={1} strokeDasharray="3 3" />
          ))}

          {/* === INIT STATE psi label === */}
          <text x={SEC.init + 2} y={WIRES[0] - 18}
            fill={step >= 0 ? activeColor : "#374151"}
            fontSize={10} textAnchor="middle"
            fontFamily="'Inter',sans-serif">|ψ⟩</text>
          <text x={SEC.init + 2} y={WIRES[1] - 18}
            fill="#4b5563" fontSize={10} textAnchor="middle">|0⟩</text>
          <text x={SEC.init + 2} y={WIRES[2] - 18}
            fill="#4b5563" fontSize={10} textAnchor="middle">|0⟩</text>

          {/* === CNOT ENCODING q0→q1 === */}
          <CNOTGate cx={SEC.enc1} cyCtrl={WIRES[0]} cyTgt={WIRES[1]}
            color={activeColor} dim={!encDone} />

          {/* === CNOT ENCODING q0→q2 === */}
          <CNOTGate cx={SEC.enc2} cyCtrl={WIRES[0]} cyTgt={WIRES[2]}
            color={gateColor} dim={!encDone} />

          {/* === ENCODED STATE LABEL === */}
          {encDone && (
            <text x={(SEC.enc2 + SEC.noise - 35) / 2} y={26}
              fill="#6b7280" fontSize={9} textAnchor="middle"
              fontFamily="'Inter',sans-serif">α|000⟩+β|111⟩</text>
          )}

          {/* === X ERROR GATE === */}
          {errIdx >= 0 && (
            <XGate cx={SEC.noise} cy={WIRES[errIdx]}
              color={errorColor} label="X" dim={!noiseDone} />
          )}
          {errIdx < 0 && noiseDone && (
            <text x={SEC.noise} y={WIRES[0] - 20}
              fill="#4b5563" fontSize={9} textAnchor="middle">no error</text>
          )}

          {/* === SYNDROME: CNOT q0→a0 and q1→a0 (pair 0,1) === */}
          {/* drawn as crossing CNOTs on the q wires at syn1 */}
          <CNOTGate cx={SEC.syn1} cyCtrl={WIRES[0]} cyTgt={WIRES[1]}
            color={synDone ? "#fbbf24" : "#374151"} dim={!synDone} />
          <CNOTGate cx={SEC.syn1 + 60} cyCtrl={WIRES[1]} cyTgt={WIRES[2]}
            color={synDone ? "#fbbf24" : "#374151"} dim={!synDone} />

          {/* Syndrome result badges */}
          {synDone && (
            <>
              <rect x={SEC.syn1 - 22} y={WIRES[0] + 18} width={44} height={18} rx={4}
                fill={`rgba(251,191,36,0.12)`} stroke="#fbbf24" strokeWidth={1} />
              <text x={SEC.syn1} y={WIRES[0] + 31}
                fill="#fbbf24" fontSize={8} textAnchor="middle"
                fontFamily="'Inter',sans-serif">
                S1={(errIdx === 0 || errIdx === 1) ? "-1" : "+1"}
              </text>
              <rect x={SEC.syn1 + 38} y={WIRES[1] + 18} width={44} height={18} rx={4}
                fill={`rgba(251,191,36,0.12)`} stroke="#fbbf24" strokeWidth={1} />
              <text x={SEC.syn1 + 60} y={WIRES[1] + 31}
                fill="#fbbf24" fontSize={8} textAnchor="middle"
                fontFamily="'Inter',sans-serif">
                S2={(errIdx === 1 || errIdx === 2) ? "-1" : "+1"}
              </text>
            </>
          )}

          {/* === CORRECTION X GATE === */}
          {corrIdx >= 0 && (
            <XGate cx={SEC.corr} cy={WIRES[corrIdx]}
              color={corrColor} label="X" dim={!corrDone} />
          )}

          {/* Fidelity badge */}
          {corrDone && (
            <>
              <rect x={W - 70} y={WIRES[1] - 14} width={56} height={22} rx={6}
                fill={corrIdx === errIdx || (errIdx < 0 && corrIdx < 0) ? "rgba(52,211,153,0.12)" : "rgba(244,63,94,0.12)"}
                stroke={corrIdx === errIdx || (errIdx < 0 && corrIdx < 0) ? "#34d399" : "#f43f5e"}
                strokeWidth={1.2} />
              <text x={W - 42} y={WIRES[1] + 2}
                fill={corrIdx === errIdx || (errIdx < 0 && corrIdx < 0) ? corrColor : errorColor}
                fontSize={9} fontWeight="700" textAnchor="middle"
                fontFamily="'Inter',sans-serif">
                {corrIdx === errIdx || (errIdx < 0 && corrIdx < 0) ? "✓ OK" : "✗ Err"}
              </text>
            </>
          )}

          {/* Active step highlight glow line */}
          {step === 0 && <line x1={SEC.init} y1={WIRES[0]} x2={SEC.enc1 - 20} y2={WIRES[0]} stroke={activeColor} strokeWidth={2.5} opacity={0.5} />}
          {step === 1 && <line x1={SEC.enc1 - 20} y1={WIRES[0]} x2={SEC.noise - 35} y2={WIRES[0]} stroke={activeColor} strokeWidth={2.5} opacity={0.5} />}
          {step === 2 && <line x1={SEC.noise - 35} y1={WIRES[0]} x2={SEC.syn1 - 35} y2={WIRES[0]} stroke={errorColor} strokeWidth={2.5} opacity={0.5} />}
          {step === 3 && <line x1={SEC.syn1 - 35} y1={WIRES[0]} x2={SEC.corr - 15} y2={WIRES[0]} stroke="#fbbf24" strokeWidth={2.5} opacity={0.5} />}
          {step === 4 && <line x1={SEC.corr - 15} y1={WIRES[0]} x2={W - 20} y2={WIRES[0]} stroke={corrColor} strokeWidth={2.5} opacity={0.5} />}
        </svg>
      </div>
    </div>
  );
}

// -------------------------------------------------------------------
// MAIN EXPORTS COMPONENT
// -------------------------------------------------------------------
export default function Experiment41({ dark = true, setDark = (val) => { }, lang = "en", setLang = (val) => { }, onQuizPassed = () => { }, initialCompleted = false, userName = "Google Learner", userId = "" } = {}) {
  const dict = TRANSLATIONS_EXP_4_1[lang] || TRANSLATIONS_EXP_4_1.en;

  const topics = [
    {
      id: "error-correction-need",
      label: dict.topics["error-correction-need"].label,
      tag: dict.topics["error-correction-need"].tag,
      bullets: dict.topics["error-correction-need"].bullets,
      longContent: {
        description: dict.topics["error-correction-need"].description
      }
    },
    {
      id: "quantum-encoding",
      label: dict.topics["quantum-encoding"].label,
      tag: dict.topics["quantum-encoding"].tag,
      bullets: dict.topics["quantum-encoding"].bullets,
      longContent: {
        description: dict.topics["quantum-encoding"].description
      }
    },
    {
      id: "error-injection",
      label: dict.topics["error-injection"].label,
      tag: dict.topics["error-injection"].tag,
      bullets: dict.topics["error-injection"].bullets,
      longContent: {
        description: dict.topics["error-injection"].description
      }
    },
    {
      id: "syndrome-correction",
      label: dict.topics["syndrome-correction"].label,
      tag: dict.topics["syndrome-correction"].tag,
      bullets: dict.topics["syndrome-correction"].bullets,
      longContent: {
        description: dict.topics["syndrome-correction"].description
      }
    }
  ];

  const quizQuestions = dict.quiz_questions.map((q, idx) => ({
    q: q.q,
    options: q.options,
    correct: QUIZ_ANSWERS[idx]
  }));

  const [view, setView] = useState("learn"); // "learn", "builder" (playground), "quiz", "credentials"
  const [copied, setCopied] = useState(false);
  const bitFlipQiskitCode = `from qiskit import QuantumCircuit, Aer, execute

# 1. Initialize a 3-qubit circuit for repetition code, 2 classical bits for syndromes
qc = QuantumCircuit(3, 2)

# 2. Prepare Alice's initial state |ψ⟩ = cos(θ/2)|0⟩ + e^(iφ)sin(θ/2)|1⟩
# (For example, let's put qubit 0 into superposition)
qc.h(0)

# 3. Encode the state: CNOT q0->q1, CNOT q0->q2
qc.cx(0, 1)
qc.cx(0, 2)

# 4. Inject a noise error: Bit flip (X gate) on qubit 1
qc.x(1)

# 5. Measure syndromes using CNOT parity checks
qc.cx(0, 1) # Checks parity of q0 and q1
qc.cx(1, 2) # Checks parity of q1 and q2

# 6. Measure syndromes
qc.measure([1, 2], [0, 1])

# 7. Execute the circuit on the simulator
simulator = Aer.get_backend('qasm_simulator')
job = execute(qc, simulator, shots=1024)
result = job.result()

# 8. Output the syndrome counts
counts = result.get_counts(qc)
print("Syndrome outcomes:", counts)
`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(bitFlipQiskitCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [activeTopic, setActiveTopic] = useState(null);

  // Playground state parameters
  const [playgroundStep, setPlaygroundStep] = useState(0); // 0: Prep, 1: Encode, 2: Noise, 3: Syndrome, 4: Correction
  const [prepTheta, setPrepTheta] = useState(90);
  const [prepPhi, setPrepPhi] = useState(0);
  const [isEncoded, setIsEncoded] = useState(false);
  const [errorQubit, setErrorQubit] = useState("none"); // "none", "q0", "q1", "q2"
  const [syndromesMeasured, setSyndromesMeasured] = useState(false);
  const [correctionTarget, setCorrectionTarget] = useState("none"); // "none", "q0", "q1", "q2"

  // Guided Tour States
  const [tourStep, setTourStep] = useState(null);

  // Quiz States
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(() => {
    if (initialCompleted) return true;
    try {
      return localStorage.getItem(`lab_completed_${userId}_4.1`) === "Completed";
    } catch (e) {
      return false;
    }
  });
  const [quizPassed, setQuizPassed] = useState(() => {
    if (initialCompleted) return true;
    try {
      return localStorage.getItem(`lab_completed_${userId}_4.1`) === "Completed";
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    if (initialCompleted) {
      setQuizPassed(true);
      setQuizSubmitted(true);
      try {
        localStorage.setItem(`lab_completed_${userId}_4.1`, "Completed");
      } catch (e) {}
    }
  }, [initialCompleted, userId]);
  const [timeLeft, setTimeLeft] = useState(30);

  // Timer loop for the Quiz
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
    if (selectedOpt !== null) return;
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
      const passed = finalScore >= Math.ceil(quizQuestions.length * 0.7);
      setQuizPassed(passed);
      if (passed) {
        try {
          localStorage.setItem(`lab_completed_${userId}_4.1`, "Completed");
        } catch (e) {}
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

  // State math models
  const thetaRad = (prepTheta * Math.PI) / 180;
  const phiRad = (prepPhi * Math.PI) / 180;

  const alpha = Math.cos(thetaRad / 2);
  const betaRe = Math.cos(phiRad) * Math.sin(thetaRad / 2);
  const betaIm = Math.sin(phiRad) * Math.sin(thetaRad / 2);

  const initialSingleState = { reA: alpha, imA: 0, reB: betaRe, imB: betaIm };

  // Calculate 3-qubit state description based on stages
  let threeQubitStateString = "";
  let currentFidelity = 0;
  let s1 = 0; // parity q0 vs q1: 0 match, 1 mismatch
  let s2 = 0; // parity q1 vs q2: 0 match, 1 mismatch

  if (!isEncoded) {
    threeQubitStateString = `( ${alpha.toFixed(2)}|0⟩ + (${betaRe.toFixed(2)}${betaIm >= 0 ? "+" : ""}${betaIm.toFixed(2)}i)|1⟩ ) q0 ⊗ |00⟩`;
    currentFidelity = 1.0;
  } else {
    // Encoding maps: |000> and |111>
    let codeState = {
      q0: "0",
      q1: "0",
      q2: "0",
      q0_flip: "1",
      q1_flip: "1",
      q2_flip: "1"
    };

    // Apply error flip
    if (errorQubit === "q0") {
      codeState.q0 = "1"; codeState.q0_flip = "0";
      s1 = 1; s2 = 0;
    } else if (errorQubit === "q1") {
      codeState.q1 = "1"; codeState.q1_flip = "0";
      s1 = 1; s2 = 1;
    } else if (errorQubit === "q2") {
      codeState.q2 = "1"; codeState.q2_flip = "0";
      s1 = 0; s2 = 1;
    }

    // Apply correction flip
    if (correctionTarget === "q0") {
      codeState.q0 = codeState.q0 === "0" ? "1" : "0";
      codeState.q0_flip = codeState.q0_flip === "0" ? "1" : "0";
    } else if (correctionTarget === "q1") {
      codeState.q1 = codeState.q1 === "0" ? "1" : "0";
      codeState.q1_flip = codeState.q1_flip === "0" ? "1" : "0";
    } else if (correctionTarget === "q2") {
      codeState.q2 = codeState.q2 === "0" ? "1" : "0";
      codeState.q2_flip = codeState.q2_flip === "0" ? "1" : "0";
    }

    // Mapped state representation
    const term0 = `|${codeState.q0}${codeState.q1}${codeState.q2}⟩`;
    const term1 = `|${codeState.q0_flip}${codeState.q1_flip}${codeState.q2_flip}⟩`;
    threeQubitStateString = `${alpha.toFixed(2)}${term0} + (${betaRe.toFixed(2)}${betaIm >= 0 ? "+" : ""}${betaIm.toFixed(2)}i)${term1}`;

    // Recovered state after CNOT decoding
    const matchesInitial = codeState.q0 === "0" && codeState.q1 === "0" && codeState.q2 === "0" &&
      codeState.q0_flip === "1" && codeState.q1_flip === "1" && codeState.q2_flip === "1";

    currentFidelity = matchesInitial ? 1.0 : 0.0; // Bit flip code recovers fully or flips state vector completely
  }

  const recoveredState = currentFidelity === 1.0
    ? initialSingleState
    : { reA: betaRe, imA: betaIm, reB: alpha, imB: 0 }; // complete flip state

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

    w.document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>Experiment 4.1 Report — 3-Qubit Bit-Flip QEC</title>
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

<h1>LAB REPORT - EXPERIMENT 4.1</h1>
<h2>Fault-Tolerant Quantum Mechanics: 3-Qubit Bit-Flip Code</h2>

<h3>1. Aim</h3>
<p>To analyze the encoding, error injection, syndrome measurement, and conditional active feedback correction of a 3-qubit bit-flip repetition quantum error correction (QEC) code, demonstrating robust state protection without direct measurements of data qubits.</p>

<h3>2. Apparatus</h3>
<ul>
  <li>3-Qubit Quantum Error Correction Simulator</li>
  <li>Interactive State Preparer and Bloch Sphere projection engine</li>
  <li>Bit-flip noise channel with single-qubit X-error injector</li>
  <li>Syndrome extraction panel measuring parity metrics Z0Z1 and Z1Z2</li>
</ul>

<h3>3. Mathematical Principles</h3>
<p>The logical qubit is encoded as: |ψ⟩_L = α|000⟩ + β|111⟩. An environmental error flips one qubit, transforming the state. By measuring operators S1 = Z0Z1 and S2 = Z1Z2, Bob extracts a unique syndrome vector matching the flipped qubit (e.g. S1=-1, S2=1 points to q0). bob applies the correction Pauli X gate on that qubit, restoring the entangled repetition, then decodes using CNOTs to recover the original superposition α|0⟩ + β|1⟩.</p>

<h3>4. Active Experiment Data</h3>
<ul>
  <li>Prepared State Vector |ψ⟩: <strong>${alpha.toFixed(4)}|0⟩ + (${betaRe.toFixed(4)} + ${betaIm.toFixed(4)}i)|1⟩</strong></li>
  <li>Injected Channel Error Location: <strong>Qubit ${errorQubit.toUpperCase()}</strong></li>
  <li>Extracted Syndromes: <strong>S1 (Z0Z1) = ${syndromesMeasured ? (s1 === 1 ? "-1 (Diff)" : "1 (Same)") : "Unmeasured"}, S2 (Z1Z2) = ${syndromesMeasured ? (s2 === 1 ? "-1 (Diff)" : "1 (Same)") : "Unmeasured"}</strong></li>
  <li>Target Applied for Correction: <strong>Qubit ${correctionTarget.toUpperCase()}</strong></li>
  <li>Final Recovered State Fidelity: <strong>${(currentFidelity * 100).toFixed(0)}%</strong></li>
</ul>

<h3>5. Conclusion</h3>
<p>The experiment verified that redundancy mapping combined with syndrome measurements successfully identifies and corrects single physical bit-flip errors. Qubit state verification confirmed 100% recovery fidelity when correction matches the syndrome location, illustrating the core principles of active fault-tolerance in modern quantum processors.</p>

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
    doc.text(userName, 148, 90, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(107, 114, 128);
    doc.text("has successfully completed", 148, 108, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(29, 78, 216);
    doc.text("3-Qubit Bit-Flip QEC • Experiment 4.1", 148, 124, { align: "center" });

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

    // Removed verification hash draw

    doc.save("Aether_Completion_Certificate_Exp_4.1.pdf");
  };

  const handleStartTour = () => {
    setPlaygroundStep(0);
    setTourStep(0);
    setView("builder");
  };

  const resetPlayground = () => {
    setPlaygroundStep(0);
    setPrepTheta(90);
    setPrepPhi(0);
    setIsEncoded(false);
    setErrorQubit("none");
    setSyndromesMeasured(false);
    setCorrectionTarget("none");
  };

  const autoCorrect = () => {
    if (s1 === 1 && s2 === 0) setCorrectionTarget("q0");
    else if (s1 === 1 && s2 === 1) setCorrectionTarget("q1");
    else if (s1 === 0 && s2 === 1) setCorrectionTarget("q2");
    else setCorrectionTarget("none");
  };

  const openModal = (topic) => setActiveTopic(topic);
  const closeModal = () => setActiveTopic(null);

  const scrollToTopic = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="learn-page" style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* HEADER NAV BAR */}
      <nav className="wiser-nav scrolled" style={{ position: "sticky", top: 0, zIndex: 10 }}>
        <div className="container-xl d-flex align-items-center justify-content-between">
          <Link href="/experiments" className="d-flex align-items-center gap-2" style={{ textDecoration: "none", color: "var(--text)" }}>
            <ArrowLeft size={16} /><span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{dict.nav_exit_workspace}</span>
          </Link>

          {/* MODE SELECTOR TABS */}
          <div className="builder-tab-nav">
            <button className={`builder-tab-btn ${view === "learn" ? "active" : ""}`} onClick={() => setView("learn")}>
              {(CONSISTENT_NAV[lang] || CONSISTENT_NAV.en).theory}
            </button>
             <button className={`builder-tab-btn ${view === "builder" ? "active" : ""}`} onClick={() => setView("builder")}>
              {(CONSISTENT_NAV[lang] || CONSISTENT_NAV.en).playground}
            </button>
            <button
              className={`builder-tab-btn ${view === "sandbox" ? "active" : ""}`}
              onClick={() => setView("sandbox")}
            >
              {(CONSISTENT_NAV[lang] || CONSISTENT_NAV.en).sandbox}
            </button>
            <button className={`builder-tab-btn ${view === "quiz" ? "active" : ""}`} onClick={() => setView("quiz")}>
              {(CONSISTENT_NAV[lang] || CONSISTENT_NAV.en).quiz}
            </button>
            <button className={`builder-tab-btn ${view === "credentials" ? "active" : ""}`} onClick={() => setView("credentials")}>
              {(CONSISTENT_NAV[lang] || CONSISTENT_NAV.en).credentials}
            </button>
          </div>

          <div className="d-flex align-items-center gap-3">
            <button className="theme-toggle" onClick={() => setDark(!dark)} style={{ width: 44, height: 22 }}>
              <div className="theme-toggle-thumb" style={{ width: 16, height: 16, borderRadius: "50%", transform: `translateX(${dark ? "22px" : "2px"})`, background: dark ? "var(--accent)" : "#fbbf24", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {dark ? <Moon size={8} color="#fff" /> : <Sun size={8} color="#fff" />}
              </div>
            </button>
            <select value={lang} onChange={(e) => setLang(e.target.value)} style={{ fontSize: "0.75rem", background: "var(--bg-canvas)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 6, padding: "4px 8px", outline: "none" }}>
              {(Object.keys(LANG_META)).map((key) => (<option key={key} value={key}>{LANG_META[key].flag} {LANG_META[key].label}</option>))}
            </select>
          </div>
        </div>
      </nav>

      {/* RENDER VIEW: LEARN/THEORY VIEW */}
      {view === "learn" && (
        <div className="view-fade-in">
          {/* HERO TITLE SECTION */}
          <header className="learn-hero">
            <div className="learn-hero-inner">
              <span className="learn-pill">Experiment 4.1</span>
              <h1>{dict.hero_title}</h1>
              <p className="learn-hero-sub">{dict.hero_sub}</p>

              <div className="learn-hero-buttons">
                <button className="learn-cta-primary" onClick={() => setView("builder")}>
                  {dict.btn_launch_playground}
                </button>
                <button className="learn-cta-secondary" onClick={() => scrollToTopic("error-correction-need")}>
                  {dict.btn_start_learning}
                </button>
              </div>

              {/* CONCEPT OVERVIEW GRID */}
              <div className="learn-hero-grid">
                <div className="learn-hero-card">
                  <h3>{dict.card_superposition_title}</h3>
                  <p>{dict.card_superposition_desc}</p>
                </div>
                <div className="learn-hero-card">
                  <h3>{dict.card_nocloning_title}</h3>
                  <p>{dict.card_nocloning_desc}</p>
                </div>
                <div className="learn-hero-card">
                  <h3>{dict.card_measurement_title}</h3>
                  <p>{dict.card_measurement_desc}</p>
                </div>
              </div>
            </div>
          </header>

          {/* CORE PRINCIPLES CONTAINER */}
          <section className="learn-topics">
            <div className="learn-topics-header">
              <h2>{dict.section_title}</h2>
              <p>{dict.section_sub}</p>
            </div>

            {/* EXPANDABLE CARDS GRID */}
            <div className="learn-cards-grid">
              {topics.map((t, idx) => (
                <div
                  key={t.id}
                  id={t.id}
                  className="learn-card"
                  onClick={() => openModal(t)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal(t);
                    }
                  }}
                >
                  <div className="learn-card-visual-placeholder">
                    <TopicVisual id={t.id} dict={dict} />
                  </div>
                  <div className="learn-card-body">
                    <h3>{t.label}</h3>
                    <p>{t.tag}</p>
                    <span className="learn-card-link">{dict.quick_summary} &rarr;</span>
                  </div>
                </div>
              ))}
            </div>

            {/* YOUTUBE VIDEO RESOURCES */}
            <section style={{ padding: "48px 0 24px" }}>
              <div style={{ maxWidth: 900, margin: "0 auto", padding: "0" }}>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: 6, letterSpacing: "-0.01em" }}>
                  Learn with Videos
                </h2>
                <p style={{ fontSize: "0.87rem", color: "var(--text-3)", marginBottom: 28 }}>
                  Explore the fundamentals of quantum error correction and how bit-flip repetition codes preserve fragile superpositions.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                  {[
                    {
                      id: "vja_KmolxAU",
                      title: "Playing with Quantum Error Correction",
                      channel: "Qiskit",
                      desc: "An intuitive introduction to how errors leave hints in quantum processors and the principles of quantum correction."
                    },
                    {
                      id: "9mr9c35xJ2g",
                      title: "The Three-Qubit Bit-Flip Repetition Code",
                      channel: "IQIS Lectures",
                      desc: "A detailed lecture covering the 3-qubit bit-flip repetition code, stabilizer operators, and syndrome measurements."
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
                        <h4 style={{ fontSize: "0.92rem", fontWeight: 700, margin: "0 0 6px", lineHeight: "1.35", color: "var(--text)" }}>{video.title}</h4>
                        <p style={{ fontSize: "0.78rem", color: "var(--text-3)", margin: 0, lineHeight: "1.5" }}>{video.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* DETAILED alternating LONG SCROLL SECTIONS */}
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

                  {topic.id === "syndrome-correction" && (
                    <div className="learn-basis-table" style={{ marginTop: 20 }}>
                      <h4 style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", marginBottom: 8, letterSpacing: "0.05em" }}>Syndrome Lookup Table</h4>
                      <table>
                        <thead>
                          <tr>
                            <th>Qubit Flipped</th>
                            <th>S1 (Z0Z1)</th>
                            <th>S2 (Z1Z2)</th>
                            <th>Required Correction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>None</strong></td>
                            <td>+1</td>
                            <td>+1</td>
                            <td>No Action</td>
                          </tr>
                          <tr>
                            <td><strong>q0</strong></td>
                            <td>-1</td>
                            <td>+1</td>
                            <td>Pauli X on q0</td>
                          </tr>
                          <tr>
                            <td><strong>q1</strong></td>
                            <td>-1</td>
                            <td>-1</td>
                            <td>Pauli X on q1</td>
                          </tr>
                          <tr>
                            <td><strong>q2</strong></td>
                            <td>+1</td>
                            <td>-1</td>
                            <td>Pauli X on q2</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                <div className="learn-section-visual">
                  <div className="learn-section-visual-box">
                    <TopicVisual id={topic.id} dict={dict} />
                  </div>
                </div>
              </section>
            ))}

            {/* MATHEMATICAL VECTOR PANEL */}
            <div className="learn-qubit-states" style={{ marginTop: 40, padding: 30 }}>
              <h4>{dict.concept_kicker} QEC Matrix • {dict.math_vector_title}</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-3)", marginBottom: 16, lineHeight: 1.5 }}>{dict.math_vector_desc}</p>

              <div className="state-item" style={{ padding: "12px 18px" }}>
                <span className="state-label">{dict.math_vector_def}</span>
                <span className="state-value" style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "0.9rem" }}>|ψ⟩_L = α|000⟩ + β|111⟩</span>
              </div>
              <div className="state-item" style={{ padding: "12px 18px" }}>
                <span className="state-label">Syndromes:</span>
                <span className="state-value" style={{ fontFamily: "monospace", fontSize: "0.9rem" }}>S1 = Z0Z1 , S2 = Z1Z2</span>
              </div>
              <div className="state-item" style={{ padding: "12px 18px" }}>
                <span className="state-label">Corrections:</span>
                <span className="state-value" style={{ fontFamily: "monospace", fontSize: "0.9rem", color: "var(--accent-2)" }}>X0 (for S1=-1, S2=1) , X1 (for S1=-1, S2=-1) , X2 (for S1=1, S2=-1)</span>
              </div>
            </div>

            {/* FINAL CTA SECTION */}
            <section className="learn-final-cta" style={{ paddingTop: 60, paddingBottom: 60 }}>
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
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    {dict.cta_btn_top}
                  </button>
                </div>
              </div>
            </section>
          </section>
        </div>
      )}

      {/* RENDER VIEW: PLAYGROUND VIEW */}
      {view === "builder" && (
        <div className="view-fade-in">
          <section className="builder-playground-section">
            <div className="builder-header mb-4">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div>
                  <h2>{dict.builder_title}</h2>
                  <p>{dict.builder_sub}</p>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn-secondary-wiser" onClick={handleStartTour}>
                    {dict.btn_guided_tour}
                  </button>
                  <button className="btn-secondary-wiser" onClick={resetPlayground}>
                    {dict.btn_clear_circuit}
                  </button>
                </div>
              </div>
            </div>

            <div className="builder-workspace">
              {/* LEFT: CIRCUIT + STATE PANEL */}
              <div className="builder-left-panel" style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* LIVE CIRCUIT DIAGRAM */}
                <BitFlipCircuit
                  playgroundStep={playgroundStep}
                  errorQubit={errorQubit}
                  syndromesMeasured={syndromesMeasured}
                  correctionTarget={correctionTarget}
                />

                {/* DYNAMIC BLOCH SPHERE BLOCK */}
                <div className="builder-sphere-card">
                  <h3>{dict.bloch_title}</h3>
                  <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
                    <LiveBlochSphere state={initialSingleState} />
                  </div>
                </div>

                {/* 3-QUBIT STATE & CODE READOUT */}
                <div className="builder-histogram-card" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div>
                    <h3>{dict.builder_state_vector}</h3>
                    <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", borderRadius: 8, padding: 12, marginTop: 8, fontSize: "0.76rem", fontFamily: "monospace", overflowX: "auto", whiteSpace: "nowrap" }}>
                      <div style={{ color: "var(--accent)", fontWeight: 700 }}>
                        {threeQubitStateString}
                      </div>
                    </div>
                  </div>

                  {playgroundStep === 4 && (
                    <div className="mt-2">
                      <h3 style={{ marginBottom: 6 }}>Fidelity Verification</h3>
                      {currentFidelity === 1.0 ? (
                        <div style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid #34d399", borderRadius: 8, padding: 10, textAlign: "center" }}>
                          <span style={{ color: "#34d399", fontWeight: 700, fontSize: "0.85rem" }}>🎉 Corrected (100% Fidelity)</span>
                          <p style={{ fontSize: "0.75rem", color: "var(--text-2)", margin: "4px 0 0" }}>Bob successfully reconstructed the logical superposition.</p>
                        </div>
                      ) : (
                        <div style={{ background: "rgba(244, 63, 94, 0.12)", border: "1px solid #f43f5e", borderRadius: 8, padding: 10, textAlign: "center" }}>
                          <span style={{ color: "#f43f5e", fontWeight: 700, fontSize: "0.85rem" }}>⚠️ Corrupted (0% Fidelity)</span>
                          <p style={{ fontSize: "0.75rem", color: "var(--text-2)", margin: "4px 0 0" }}>Incorrect correction target was selected. Apply correction to match syndromes.</p>
                        </div>
                      )}

                      <div className="mt-3" style={{ display: "flex", justifyContent: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                          <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-3)", marginBottom: 6 }}>Recovered State Vector |ψ'⟩</span>
                          <LiveBlochSphere state={recoveredState} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* RIGHT: STEP CONTROLS PANEL */}
              <div className="builder-right-panel">
                <div className="builder-toolbox-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 20 }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8, color: "var(--accent)" }}>{dict.toolbox_title}</h3>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-3)", marginBottom: 16 }}>{dict.toolbox_desc}</p>

                  {/* Step 1: Prep */}
                  <div className={`qec-step-card p-3 mb-3 ${playgroundStep === 0 ? "border-primary" : ""}`} style={{ background: "var(--bg-canvas)", borderRadius: 12, border: "1px solid var(--border)" }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{ fontSize: "0.82rem", fontWeight: 700 }}>1. State Prep (q0)</span>
                      <button className="btn btn-sm btn-primary-wiser" style={{ padding: "2px 8px", fontSize: "0.75rem" }} onClick={() => setPlaygroundStep(1)} disabled={playgroundStep !== 0}>
                        Next Step &rarr;
                      </button>
                    </div>
                    {playgroundStep === 0 ? (
                      <div className="d-flex flex-column gap-3 mt-2">
                        <div>
                          <label className="d-flex justify-content-between style-label mb-1" style={{ fontSize: "0.75rem" }}>
                            <span>Polar Angle θ ({prepTheta}°)</span>
                          </label>
                          <input type="range" min="0" max="180" value={prepTheta} onChange={(e) => setPrepTheta(Number(e.target.value))} className="w-100" />
                        </div>
                        <div>
                          <label className="d-flex justify-content-between style-label mb-1" style={{ fontSize: "0.75rem" }}>
                            <span>Phase Angle φ ({prepPhi}°)</span>
                          </label>
                          <input type="range" min="0" max="360" value={prepPhi} onChange={(e) => setPrepPhi(Number(e.target.value))} className="w-100" />
                        </div>
                        <div className="d-flex gap-2">
                          <button className="btn-secondary-wiser py-1 text-center w-100" style={{ fontSize: "0.7rem" }} onClick={() => { setPrepTheta(0); setPrepPhi(0); }}>|0⟩</button>
                          <button className="btn-secondary-wiser py-1 text-center w-100" style={{ fontSize: "0.7rem" }} onClick={() => { setPrepTheta(180); setPrepPhi(0); }}>|1⟩</button>
                          <button className="btn-secondary-wiser py-1 text-center w-100" style={{ fontSize: "0.7rem" }} onClick={() => { setPrepTheta(90); setPrepPhi(0); }}>|+⟩</button>
                        </div>
                      </div>
                    ) : (
                      <div style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
                        Qubit q0 prepared as: {alpha.toFixed(2)}|0⟩ + ({betaRe.toFixed(2)} + {betaIm.toFixed(2)}i)|1⟩
                      </div>
                    )}
                  </div>

                  {/* Step 2: Encoding */}
                  <div className={`qec-step-card p-3 mb-3 ${playgroundStep === 1 ? "border-primary" : ""}`} style={{ background: "var(--bg-canvas)", borderRadius: 12, border: "1px solid var(--border)" }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{ fontSize: "0.82rem", fontWeight: 700 }}>2. CNOT Repetition Encoding</span>
                      {playgroundStep === 1 && (
                        <button className="btn btn-sm btn-primary-wiser" style={{ padding: "2px 8px", fontSize: "0.75rem" }} onClick={() => { setIsEncoded(true); setPlaygroundStep(2); }}>
                          Simulate &amp; Proceed &rarr;
                        </button>
                      )}
                    </div>
                    {isEncoded ? (
                      <div style={{ fontSize: "0.75rem", color: "#34d399", fontWeight: 600 }}>
                        ✓ Entangled to state: α|000⟩ + β|111⟩
                      </div>
                    ) : (
                      <div style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
                        {playgroundStep === 1 ? "Press simulate to map q0 → q1 and q0 → q2" : "Locked (Complete Step 1)"}
                      </div>
                    )}
                  </div>

                  {/* Step 3: Noise Injection */}
                  <div className={`qec-step-card p-3 mb-3 ${playgroundStep === 2 ? "border-primary" : ""}`} style={{ background: "var(--bg-canvas)", borderRadius: 12, border: "1px solid var(--border)" }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{ fontSize: "0.82rem", fontWeight: 700 }}>3. Inject Channel Noise (Bit-Flip)</span>
                      {playgroundStep === 2 && (
                        <button className="btn btn-sm btn-primary-wiser" style={{ padding: "2px 8px", fontSize: "0.75rem" }} onClick={() => setPlaygroundStep(3)} disabled={errorQubit === "none" && !confirm("Proceed with no bit-flip error?")}>
                          Next Step &rarr;
                        </button>
                      )}
                    </div>
                    {playgroundStep === 2 ? (
                      <div className="d-flex flex-column gap-2 mt-2">
                        <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>Select which physical qubit experiences an X flip:</span>
                        <div className="d-flex flex-wrap gap-2">
                          {["none", "q0", "q1", "q2"].map(q => (
                            <button key={q} className={`btn btn-sm ${errorQubit === q ? "btn-primary-wiser" : "btn-secondary-wiser"}`} onClick={() => setErrorQubit(q)} style={{ padding: "4px 8px", fontSize: "0.75rem" }}>
                              {q.toUpperCase()}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div style={{ fontSize: "0.75rem", color: errorQubit !== "none" ? "#f43f5e" : "var(--text-3)", fontWeight: 600 }}>
                        {errorQubit !== "none" ? `⚠️ Bit flip injected on: Qubit ${errorQubit.toUpperCase()}` : "✓ Noise channel clean (No errors)"}
                      </div>
                    )}
                  </div>

                  {/* Step 4: Syndrome Parity Check */}
                  <div className={`qec-step-card p-3 mb-3 ${playgroundStep === 3 ? "border-primary" : ""}`} style={{ background: "var(--bg-canvas)", borderRadius: 12, border: "1px solid var(--border)" }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{ fontSize: "0.82rem", fontWeight: 700 }}>4. Extract Parity Syndromes</span>
                      {playgroundStep === 3 && (
                        <button className="btn btn-sm btn-primary-wiser" style={{ padding: "2px 8px", fontSize: "0.75rem" }} onClick={() => { setSyndromesMeasured(true); setPlaygroundStep(4); }}>
                          Measure &amp; Proceed &rarr;
                        </button>
                      )}
                    </div>
                    {syndromesMeasured ? (
                      <div className="d-flex flex-column gap-1" style={{ fontSize: "0.75rem" }}>
                        <div className="d-flex justify-content-between">
                          <span>S1 (Compare q0, q1):</span>
                          <span style={{ fontWeight: 700, color: s1 === 1 ? "#f43f5e" : "#34d399" }}>{s1 === 1 ? "-1 (Diff)" : "1 (Same)"}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>S2 (Compare q1, q2):</span>
                          <span style={{ fontWeight: 700, color: s2 === 1 ? "#f43f5e" : "#34d399" }}>{s2 === 1 ? "-1 (Diff)" : "1 (Same)"}</span>
                        </div>
                      </div>
                    ) : (
                      <div style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
                        {playgroundStep === 3 ? "Click Measure to calculate parities without inspecting data." : "Locked (Complete Step 3)"}
                      </div>
                    )}
                  </div>

                  {/* Step 5: Active Feedback Correction */}
                  <div className={`qec-step-card p-3 ${playgroundStep === 4 ? "border-primary" : ""}`} style={{ background: "var(--bg-canvas)", borderRadius: 12, border: "1px solid var(--border)" }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{ fontSize: "0.82rem", fontWeight: 700 }}>5. Active Correction &amp; Decoding</span>
                      {playgroundStep === 4 && currentFidelity === 1.0 && (
                        <button className="btn btn-sm btn-success-wiser" style={{ padding: "4px 10px", fontSize: "0.75rem", fontWeight: 700 }} onClick={() => setView("quiz")}>
                          Finish &amp; Take Quiz &rarr;
                        </button>
                      )}
                    </div>
                    {playgroundStep === 4 ? (
                      <div className="d-flex flex-column gap-2 mt-2">
                        <div className="d-flex gap-2">
                          <button className="btn btn-sm btn-secondary-wiser w-100" style={{ fontSize: "0.72rem" }} onClick={autoCorrect}>Auto-Apply Correction</button>
                        </div>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>Or apply X correction manually:</span>
                        <div className="d-flex flex-wrap gap-2">
                          {["none", "q0", "q1", "q2"].map(q => (
                            <button key={q} className={`btn btn-sm ${correctionTarget === q ? "btn-primary-wiser" : "btn-secondary-wiser"}`} onClick={() => setCorrectionTarget(q)} style={{ padding: "4px 8px", fontSize: "0.75rem" }}>
                              {q.toUpperCase()}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
                        Locked (Complete Step 4)
                      </div>
                    )}
                  </div>

                </div>

              </div>
            </div>

            {/* GUIDED TOUR CONTROLLER */}
            {tourStep !== null && (
              <div className="tour-floating-card">
                <div className="tour-card-header">
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Sparkles size={16} className="text-info animate-pulse" />
                    <h4>{dict.guided_tour_title}: {dict.guided_tour_step} {tourStep + 1} {dict.guided_tour_of} {dict.tour_steps.length}</h4>
                  </div>
                  <button className="tour-close-btn" onClick={() => setTourStep(null)}>
                    <X size={14} />
                  </button>
                </div>
                <div className="tour-card-body">
                  <h5>{dict.tour_steps[tourStep].title}</h5>
                  <p>{dict.tour_steps[tourStep].desc}</p>
                </div>
                <div className="tour-card-footer">
                  <button className="btn-secondary-wiser" onClick={() => setTourStep(null)} style={{ fontSize: "0.78rem", padding: "4px 10px" }}>
                    {dict.btn_skip}
                  </button>
                  <div style={{ display: "flex", gap: 8 }}>
                    {tourStep > 0 && (
                      <button className="tour-nav-btn" onClick={() => setTourStep(tourStep - 1)}>
                        <ChevronLeft size={16} /><span>{dict.btn_back}</span>
                      </button>
                    )}
                    {tourStep < dict.tour_steps.length - 1 ? (
                      <button className="tour-nav-btn primary-tour-btn" onClick={() => {
                        // Advance step logic in playground based on tour guide instruction
                        if (tourStep === 0) {
                          setPlaygroundStep(0);
                        } else if (tourStep === 1) {
                          setPlaygroundStep(1);
                        } else if (tourStep === 2) {
                          setIsEncoded(true);
                          setPlaygroundStep(2);
                        } else if (tourStep === 3) {
                          setErrorQubit("q1");
                          setPlaygroundStep(3);
                        } else if (tourStep === 4) {
                          setSyndromesMeasured(true);
                          setPlaygroundStep(4);
                        }
                        setTourStep(tourStep + 1);
                      }}>
                        <span>{dict.btn_next}</span><ChevronRight size={16} />
                      </button>
                    ) : (
                      <button className="tour-nav-btn primary-tour-btn" onClick={() => {
                        setCorrectionTarget("q1");
                        setTourStep(null);
                      }}>
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

      {/* RENDER MODE: QISKIT SANDBOX */}
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
                  href={COLAB_LINKS["4.1"]}
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
              {bitFlipQiskitCode}
            </pre>
          </section>
        </div>
      )}


      {/* RENDER VIEW: QUIZ VIEW */}
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
                    <button className="learn-cta-primary" onClick={() => handleNextQuestion(false)} style={{ padding: "8px 24px", fontSize: "0.8rem", borderRadius: 8 }}>
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
                      <button className="btn-primary-wiser" onClick={downloadReport} style={{ width: "100%", padding: "10px 18px", fontSize: "0.85rem", fontWeight: 700 }}>
                        {dict.btn_download_report}
                      </button>
                      <button className="btn-primary-wiser" onClick={downloadCertificate} style={{ width: "100%", padding: "10px 18px", fontSize: "0.85rem", fontWeight: 700 }}>
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
                      {(() => {
                        let desc = (dict.quiz_failed_desc || "").replace("{score}", quizScore.toString());
                        if (lang === 'en') {
                          desc = desc.replace("A perfect 10/10 score is required to pass", "A score of 7/10 (70%) or higher is required to pass");
                        } else {
                          desc = desc.replace("10/10", "7/10");
                        }
                        return desc;
                      })()}
                    </p>
                    <button className="learn-cta-primary" onClick={handleRestartQuiz}>
                      {dict.btn_retake_quiz}
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      )}

      {/* RENDER VIEW: CREDENTIALS SUMMARY VIEW */}
      {view === "credentials" && (
        <div className="view-fade-in">
          <section className="builder-playground-section" style={{ minHeight: "80vh" }}>
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 6 }}>Academic Credentials</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-3)", margin: 0 }}>Experiment 4.1 — 3-Qubit Bit-Flip QEC</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 14, marginBottom: 28 }}>
              {[
                { label: "Experiment", value: "Exp 4.1", icon: <FlaskConical size={16} /> },
                { label: "QEC Code", value: "Bit-Flip", icon: <BookOpen size={16} /> },
                { label: "System Qubits", value: "3 Physical", icon: <Cpu size={16} /> },
                { label: "Quiz Score", value: quizPassed ? `${quizScore}/${quizQuestions.length}` : "Not Passed", icon: <CheckCircle2 size={16} /> }
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
                <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 28, textAlign: "center" }}>
                  <FileText size={40} style={{ color: "var(--accent)", marginBottom: 16 }} />
                  <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>Academic Lab Report</h5>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-3)", marginBottom: 20, lineHeight: 1.6 }}>
                    Download a formal PDF report containing your prepared state values, noise coordinates, parity syndrome matches, and quiz results.
                  </p>
                  <button className="btn-primary-wiser" onClick={downloadReport} style={{ width: "100%", padding: "12px 0", fontSize: "0.9rem", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <Download size={15} />
                    {dict.btn_download_report || "Download Lab Report"}
                  </button>
                </div>

                <div style={{ height: "100%", background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
                  <div style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
                    <Award size={14} style={{ color: "#C9A227" }} />
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)" }}>
                      Completion Certificate Preview
                    </span>
                  </div>

                  <div style={{ background: "#ffffff", color: "#1a1a1a" }}>
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
                        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#111827", margin: "0 0 6px 0" }}>{userName}</p>
                        <p style={{ fontSize: "0.58rem", color: "#6B7280", textTransform: "uppercase", marginBottom: 6 }}>has successfully completed</p>
                        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.85rem", fontWeight: 600, color: "#1D4ED8", margin: 0 }}>
                          3-Qubit Bit-Flip QEC • Exp 4.1
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
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", padding: "0 24px 24px 24px" }}>
                      <button className="btn-primary-wiser" onClick={downloadCertificate} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                        <Award size={16} />Download Verifiable Certificate
                      </button>
                    </div>
                    <div style={{ height: 3, background: "linear-gradient(90deg, #8B6914, #C9A227, #F7D794, #C9A227, #8B6914)" }} />
                  </div>
                </div>
              </div>
            )}

            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/experiments" className="learn-cta-secondary" style={{ textDecoration: "none", display: "inline-block", padding: "10px 28px" }}>
                {dict.btn_back_dashboard || "← Back to Experiments"}
              </Link>
            </div>
          </section>
        </div>
      )}

      {/* DETAILED INFORMATION EXPANDABLE MODAL */}
      {activeTopic && (
        <div className="learn-modal-backdrop" onClick={closeModal}>
          <div className="learn-modal" onClick={(e) => e.stopPropagation()}>
            <button className="learn-modal-close" onClick={closeModal}>&times;</button>
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
            <button className="learn-cta-primary learn-modal-button" onClick={() => { closeModal(); scrollToTopic(activeTopic.id); }} style={{ marginTop: "16px" }}>
              {dict.btn_scroll_section} &darr;
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
