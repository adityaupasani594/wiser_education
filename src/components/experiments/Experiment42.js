"use client";

import React, { useState, useEffect } from "react";
import "./Experiment42.css";
import {
  ArrowLeft, BookOpen, Sparkles, HelpCircle, RotateCcw, ChevronRight, ChevronLeft, X,
  AlertCircle, CheckCircle2, ArrowRight, Moon, Sun, Award, FileText, Download, FlaskConical, Cpu, Play
} from "lucide-react";
import Link from "next/link";
import { LANG_META } from "../../data/translations";
import { TRANSLATIONS_EXP_4_2 } from "../../data/translations_exp_4.2";
import { COLAB_LINKS } from "../../data/colabLinks";

const QUIZ_ANSWERS = [1, 1, 1, 0, 1, 0, 1, 2, 1, 0];

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
              {/* Phase flipped state */}
              <circle cx="110" cy="75" r="18" fill="rgba(244, 63, 94, 0.12)" stroke="#f43f5e" strokeWidth="2" />
              <text x="110" y="80" fill="#f43f5e" fontSize="11" textAnchor="middle" fontWeight="bold">Z Error</text>
              <path d="M20 75 Q 65 35, 110 75 T 200 75" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 2" />
              <text x="110" y="35" fill="#f43f5e" fontSize="10" textAnchor="middle" fontWeight="bold">α|0⟩ - β|1⟩</text>
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
        <span className="visual-caption">Dephasing Noise Channel (Flashes red on dephasing)</span>
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
          <circle cx="55" cy="40" r="3" fill="#06b6d4" />
          <line x1="55" y1="40" x2="55" y2="75" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="55" cy="75" r="6" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="49" y1="75" x2="61" y2="75" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="55" y1="69" x2="55" y2="81" stroke="#06b6d4" strokeWidth="1.5" />

          {/* Second CNOT */}
          <circle cx="95" cy="40" r="3" fill="#06b6d4" />
          <line x1="95" y1="40" x2="95" y2="110" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="95" cy="110" r="6" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="89" y1="110" x2="101" y2="110" stroke="#06b6d4" strokeWidth="1.5" />
          <line x1="95" y1="104" x2="95" y2="116" stroke="#06b6d4" strokeWidth="1.5" />

          {/* Hadamards */}
          <rect x="135" y="28" width="22" height="22" rx="4" fill="rgba(167, 139, 250, 0.15)" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="146" y="43" fill="#a78bfa" fontSize="11" fontWeight="bold" textAnchor="middle">H</text>

          <rect x="135" y="64" width="22" height="22" rx="4" fill="rgba(167, 139, 250, 0.15)" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="146" y="79" fill="#a78bfa" fontSize="11" fontWeight="bold" textAnchor="middle">H</text>

          <rect x="135" y="99" width="22" height="22" rx="4" fill="rgba(167, 139, 250, 0.15)" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="146" y="114" fill="#a78bfa" fontSize="11" fontWeight="bold" textAnchor="middle">H</text>
        </svg>
        <span className="visual-caption">Repetition + Hadamard Encoder: CNOTs and 3 H Gates</span>
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
          <text x="105" y="79" fill="#f43f5e" fontSize="12" fontWeight="bold" textAnchor="middle">Z</text>
          <line x1="120" y1="75" x2="200" y2="75" stroke="#f43f5e" strokeWidth="2" />

          <text x="110" y="110" fill="var(--text-3)" fontSize="9" textAnchor="middle">Phase-flip gate Z is injected on one line</text>
        </svg>
        <span className="visual-caption">Environmental Phase-Flip Corruption</span>
      </div>
    );
  }

  if (id === "syndrome-correction") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          {/* Comparison blocks */}
          <rect x="25" y="25" width="75" height="55" rx="6" fill="var(--bg-canvas)" stroke="var(--border)" strokeWidth="1" />
          <text x="62" y="45" fill="var(--accent)" fontSize="9" textAnchor="middle" fontWeight="bold">Compare phase q0, q1</text>
          <text x="62" y="62" fill="var(--text)" fontSize="11" textAnchor="middle" fontWeight="bold">S1 = X0 X1</text>

          <rect x="120" y="25" width="75" height="55" rx="6" fill="var(--bg-canvas)" stroke="var(--border)" strokeWidth="1" />
          <text x="157" y="45" fill="var(--accent-2)" fontSize="9" textAnchor="middle" fontWeight="bold">Compare phase q1, q2</text>
          <text x="157" y="62" fill="var(--text)" fontSize="11" textAnchor="middle" fontWeight="bold">S2 = X1 X2</text>

          <path d="M 62 80 L 110 115" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="3 3" />
          <path d="M 157 80 L 110 115" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="3 3" />

          <rect x="75" y="110" width="70" height="30" rx="4" fill="rgba(52, 211, 153, 0.1)" stroke="#34d399" strokeWidth="1.5" />
          <text x="110" y="128" fill="#34d399" fontSize="10" textAnchor="middle" fontWeight="bold">Locate &amp; Fix</text>
        </svg>
        <span className="visual-caption">X-Basis Parity Syndrome Matching (No data read)</span>
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
// LIVE 3-QUBIT PHASE-FLIP CIRCUIT DIAGRAM
// -------------------------------------------------------------------
function PhaseFlipCircuit({ playgroundStep, errorQubit, syndromesMeasured, correctionTarget }) {
  const W = 960;
  const H = 200;
  const WIRES = [52, 100, 148];
  const wireColor = "#4b5563";
  const activeColor = "#06b6d4";
  const errorColor = "#f43f5e";
  const corrColor = "#34d399";
  const hadColor = "#a78bfa";
  const synColor = "#fbbf24";

  // Section x-positions
  const SEC = {
    init: 30,
    enc1: 160,  // CNOT q0→q1
    enc2: 220,  // CNOT q0→q2
    h1: 300,  // H gates after CNOTs  (encode into X-basis)
    noise: 390,  // Z error gate
    syn1: 510,  // X-basis syndrome CNOT q0,q1
    syn2: 600,  // X-basis syndrome CNOT q1,q2
    h2: 700,  // H decode gates
    corr: 790,  // Z correction gate
  };

  const step = playgroundStep;
  const encDone = step >= 2;
  const noiseDone = step >= 3;
  const synDone = step >= 4;
  const corrDone = step >= 4 && correctionTarget !== "none";

  const CNOTGate = ({ cx, cyCtrl, cyTgt, color = activeColor, dim = false }) => (
    <g opacity={dim ? 0.25 : 1}>
      <circle cx={cx} cy={cyCtrl} r={4} fill={color} />
      <line x1={cx} y1={cyCtrl} x2={cx} y2={cyTgt} stroke={color} strokeWidth={1.5} />
      <circle cx={cx} cy={cyTgt} r={9} fill="none" stroke={color} strokeWidth={1.5} />
      <line x1={cx - 9} y1={cyTgt} x2={cx + 9} y2={cyTgt} stroke={color} strokeWidth={1.5} />
      <line x1={cx} y1={cyTgt - 9} x2={cx} y2={cyTgt + 9} stroke={color} strokeWidth={1.5} />
    </g>
  );

  const GateBox = ({ cx, cy, label, color = activeColor, dim = false }) => (
    <g opacity={dim ? 0.25 : 1}>
      <rect x={cx - 13} y={cy - 13} width={26} height={26} rx={5}
        fill={`${color}18`} stroke={color} strokeWidth={1.5} />
      <text x={cx} y={cy + 5} fill={color} fontSize={11} fontWeight="bold"
        textAnchor="middle" fontFamily="'Inter',sans-serif">{label}</text>
    </g>
  );

  const errIdx = errorQubit === "q0" ? 0 : errorQubit === "q1" ? 1 : errorQubit === "q2" ? 2 : -1;
  const corrIdx = correctionTarget === "q0" ? 0 : correctionTarget === "q1" ? 1 : correctionTarget === "q2" ? 2 : -1;

  // Syndrome results based on error
  const s1neg = errIdx === 0 || errIdx === 1;  // X0X1 mismatch
  const s2neg = errIdx === 1 || errIdx === 2;  // X1X2 mismatch

  return (
    <div className="qec-circuit-diagram-wrapper">
      <div className="qec-circuit-label">Live Circuit — 3-Qubit Phase-Flip Code</div>
      <div style={{ overflowX: "auto", overflowY: "visible" }}>
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}
          style={{ display: "block", fontFamily: "'Inter',sans-serif" }}>

          {/* Wires */}
          {WIRES.map((wy, i) => (
            <line key={i} x1={SEC.init} y1={wy} x2={W - 20} y2={wy}
              stroke={wireColor} strokeWidth={1.5} />
          ))}

          {/* Wire labels */}
          {["q₀", "q₁", "q₂"].map((lbl, i) => (
            <text key={i} x={SEC.init - 8} y={WIRES[i] + 5}
              fill="#9ca3af" fontSize={11} textAnchor="end"
              fontFamily="'Inter',sans-serif">{lbl}</text>
          ))}

          {/* Section labels */}
          {[
            { x: SEC.enc1 + 30, label: "Encode", active: step >= 1 },
            { x: SEC.h1, label: "H⊗³", active: encDone },
            { x: SEC.noise, label: "Noise", active: noiseDone },
            { x: SEC.syn1 + 45, label: "Syndrome", active: synDone },
            { x: SEC.h2, label: "H Decode", active: synDone },
            { x: SEC.corr, label: "Correct", active: corrDone },
          ].map(({ x, label, active }) => (
            <text key={label} x={x} y={16}
              fill={active ? activeColor : "#374151"}
              fontSize={10} fontWeight="700" textAnchor="middle"
              fontFamily="'Inter',sans-serif">{label}</text>
          ))}

          {/* Section dividers */}
          {[SEC.h1 - 20, SEC.noise - 25, SEC.syn1 - 30, SEC.h2 - 20, SEC.corr - 15].map((dx, i) => (
            <line key={i} x1={dx} y1={22} x2={dx} y2={H - 10}
              stroke="#1f2937" strokeWidth={1} strokeDasharray="3 3" />
          ))}

          {/* Input state labels */}
          <text x={SEC.init + 2} y={WIRES[0] - 18} fill={activeColor} fontSize={10} textAnchor="middle">|ψ⟩</text>
          <text x={SEC.init + 2} y={WIRES[1] - 18} fill="#4b5563" fontSize={10} textAnchor="middle">|0⟩</text>
          <text x={SEC.init + 2} y={WIRES[2] - 18} fill="#4b5563" fontSize={10} textAnchor="middle">|0⟩</text>

          {/* CNOT encoding */}
          <CNOTGate cx={SEC.enc1} cyCtrl={WIRES[0]} cyTgt={WIRES[1]} color={activeColor} dim={!encDone} />
          <CNOTGate cx={SEC.enc2} cyCtrl={WIRES[0]} cyTgt={WIRES[2]} color={hadColor} dim={!encDone} />

          {/* Hadamard gates (H⊗3) */}
          {WIRES.map((wy, i) => (
            <GateBox key={i} cx={SEC.h1} cy={wy} label="H" color={hadColor} dim={!encDone} />
          ))}

          {/* Encoded state label */}
          {encDone && (
            <text x={SEC.noise - 30} y={26} fill="#6b7280" fontSize={9} textAnchor="middle"
              fontFamily="'Inter',sans-serif">α|+++⟩+β|---⟩</text>
          )}

          {/* Z error gate */}
          {errIdx >= 0 && (
            <GateBox cx={SEC.noise} cy={WIRES[errIdx]} label="Z" color={errorColor} dim={!noiseDone} />
          )}
          {errIdx < 0 && noiseDone && (
            <text x={SEC.noise} y={WIRES[0] - 20} fill="#4b5563" fontSize={9} textAnchor="middle">no error</text>
          )}

          {/* Syndrome CNOTs (X-basis parity) */}
          <CNOTGate cx={SEC.syn1} cyCtrl={WIRES[0]} cyTgt={WIRES[1]} color={synDone ? synColor : "#374151"} dim={!synDone} />
          <CNOTGate cx={SEC.syn2} cyCtrl={WIRES[1]} cyTgt={WIRES[2]} color={synDone ? synColor : "#374151"} dim={!synDone} />

          {/* Syndrome result badges */}
          {synDone && (
            <>
              <rect x={SEC.syn1 - 22} y={WIRES[0] + 18} width={44} height={18} rx={4}
                fill="rgba(251,191,36,0.12)" stroke={synColor} strokeWidth={1} />
              <text x={SEC.syn1} y={WIRES[0] + 31} fill={synColor} fontSize={8} textAnchor="middle"
                fontFamily="'Inter',sans-serif">S1={(s1neg) ? "-1" : "+1"}</text>
              <rect x={SEC.syn2 - 22} y={WIRES[1] + 18} width={44} height={18} rx={4}
                fill="rgba(251,191,36,0.12)" stroke={synColor} strokeWidth={1} />
              <text x={SEC.syn2} y={WIRES[1] + 31} fill={synColor} fontSize={8} textAnchor="middle"
                fontFamily="'Inter',sans-serif">S2={(s2neg) ? "-1" : "+1"}</text>
            </>
          )}

          {/* H decode gates */}
          {WIRES.map((wy, i) => (
            <GateBox key={i} cx={SEC.h2} cy={wy} label="H" color={hadColor} dim={!synDone} />
          ))}

          {/* Z correction gate */}
          {corrIdx >= 0 && (
            <GateBox cx={SEC.corr} cy={WIRES[corrIdx]} label="Z" color={corrColor} dim={!corrDone} />
          )}

          {/* Fidelity result badge */}
          {corrDone && (
            <>
              <rect x={W - 68} y={WIRES[1] - 14} width={54} height={22} rx={6}
                fill={(corrIdx === errIdx || (errIdx < 0 && corrIdx < 0)) ? "rgba(52,211,153,0.12)" : "rgba(244,63,94,0.12)"}
                stroke={(corrIdx === errIdx || (errIdx < 0 && corrIdx < 0)) ? corrColor : errorColor}
                strokeWidth={1.2} />
              <text x={W - 41} y={WIRES[1] + 2}
                fill={(corrIdx === errIdx || (errIdx < 0 && corrIdx < 0)) ? corrColor : errorColor}
                fontSize={9} fontWeight="700" textAnchor="middle"
                fontFamily="'Inter',sans-serif">
                {(corrIdx === errIdx || (errIdx < 0 && corrIdx < 0)) ? "✓ OK" : "✗ Err"}
              </text>
            </>
          )}

          {/* Active step glow */}
          {step === 0 && <line x1={SEC.init} y1={WIRES[0]} x2={SEC.enc1 - 20} y2={WIRES[0]} stroke={activeColor} strokeWidth={2.5} opacity={0.5} />}
          {step === 1 && <line x1={SEC.enc1 - 20} y1={WIRES[0]} x2={SEC.h1 - 20} y2={WIRES[0]} stroke={activeColor} strokeWidth={2.5} opacity={0.5} />}
          {step === 2 && <line x1={SEC.h1 - 20} y1={WIRES[0]} x2={SEC.syn1 - 30} y2={WIRES[0]} stroke={errorColor} strokeWidth={2.5} opacity={0.5} />}
          {step === 3 && <line x1={SEC.syn1 - 30} y1={WIRES[0]} x2={SEC.h2 - 20} y2={WIRES[0]} stroke={synColor} strokeWidth={2.5} opacity={0.5} />}
          {step === 4 && <line x1={SEC.h2 - 20} y1={WIRES[0]} x2={W - 20} y2={WIRES[0]} stroke={corrColor} strokeWidth={2.5} opacity={0.5} />}
        </svg>
      </div>
    </div>
  );
}

// -------------------------------------------------------------------
// MAIN EXPORTS COMPONENT
// -------------------------------------------------------------------
export default function Experiment42({ dark = true, setDark = (val) => { }, lang = "en", setLang = (val) => { } } = {}) {
  const dict = TRANSLATIONS_EXP_4_2[lang] || TRANSLATIONS_EXP_4_2.en;

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

  const [view, setView] = useState("learn"); // "learn", "builder", "quiz", "credentials"
  const [copied, setCopied] = useState(false);
  const phaseFlipQiskitCode = `from qiskit import QuantumCircuit, Aer, execute

# 1. Initialize a 3-qubit circuit for repetition, 2 classical bits for syndromes
qc = QuantumCircuit(3, 2)

# 2. Prepare Alice's initial state (For example, put qubit 0 in superposition)
qc.h(0)

# 3. Encode into repetition code: CNOT q0->q1, CNOT q0->q2
qc.cx(0, 1)
qc.cx(0, 2)

# 4. Rotate to X-basis using Hadamards on all qubits
qc.h(0)
qc.h(1)
qc.h(2)

# 5. Inject a noise error: Phase flip (Z gate) on qubit 1
qc.z(1)

# 6. Decode from X-basis using Hadamards on all qubits
qc.h(0)
qc.h(1)
qc.h(2)

# 7. Measure syndromes using CNOT parity checks
qc.cx(0, 1)
qc.cx(1, 2)

# 8. Measure syndromes
qc.measure([1, 2], [0, 1])

# 9. Execute the circuit on the simulator
simulator = Aer.get_backend('qasm_simulator')
job = execute(qc, simulator, shots=1024)
result = job.result()

# 10. Output the syndrome counts
counts = result.get_counts(qc)
print("Syndrome outcomes:", counts)
`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(phaseFlipQiskitCode);
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
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
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
      setQuizPassed(finalScore === quizQuestions.length);
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

  // Calculate 3-qubit state description based on dephasing stages
  let threeQubitStateString = "";
  let currentFidelity = 0;
  let s1 = 0; // phase parity q0 vs q1: 0 match, 1 mismatch
  let s2 = 0; // phase parity q1 vs q2: 0 match, 1 mismatch

  if (!isEncoded) {
    threeQubitStateString = `( ${alpha.toFixed(2)}|0⟩ + (${betaRe.toFixed(2)}${betaIm >= 0 ? "+" : ""}${betaIm.toFixed(2)}i)|1⟩ ) q0 ⊗ |00⟩`;
    currentFidelity = 1.0;
  } else {
    // Encoding maps: |+++> and |--->
    let codeState = {
      q0: "+",
      q1: "+",
      q2: "+",
      q0_flip: "-",
      q1_flip: "-",
      q2_flip: "-"
    };

    // Apply Z dephasing error (flips X-basis sign: + becomes -, - becomes +)
    if (errorQubit === "q0") {
      codeState.q0 = "-"; codeState.q0_flip = "+";
      s1 = 1; s2 = 0;
    } else if (errorQubit === "q1") {
      codeState.q1 = "-"; codeState.q1_flip = "+";
      s1 = 1; s2 = 1;
    } else if (errorQubit === "q2") {
      codeState.q2 = "-"; codeState.q2_flip = "+";
      s1 = 0; s2 = 1;
    }

    // Apply correction phase Z-flip
    if (correctionTarget === "q0") {
      codeState.q0 = codeState.q0 === "+" ? "-" : "+";
      codeState.q0_flip = codeState.q0_flip === "+" ? "-" : "+";
    } else if (correctionTarget === "q1") {
      codeState.q1 = codeState.q1 === "+" ? "-" : "+";
      codeState.q1_flip = codeState.q1_flip === "+" ? "-" : "+";
    } else if (correctionTarget === "q2") {
      codeState.q2 = codeState.q2 === "+" ? "-" : "+";
      codeState.q2_flip = codeState.q2_flip === "+" ? "-" : "+";
    }

    // Mapped state representation in dephased/corrected bases
    const term0 = `|${codeState.q0}${codeState.q1}${codeState.q2}⟩`;
    const term1 = `|${codeState.q0_flip}${codeState.q1_flip}${codeState.q2_flip}⟩`;
    threeQubitStateString = `${alpha.toFixed(2)}${term0} + (${betaRe.toFixed(2)}${betaIm >= 0 ? "+" : ""}${betaIm.toFixed(2)}i)${term1}`;

    // Recovered state after Hadamard decoding
    const matchesInitial = codeState.q0 === "+" && codeState.q1 === "+" && codeState.q2 === "+" &&
      codeState.q0_flip === "-" && codeState.q1_flip === "-" && codeState.q2_flip === "-";

    currentFidelity = matchesInitial ? 1.0 : 0.0; // Phase flip code recovers fully or flips phase completely
  }

  const recoveredState = currentFidelity === 1.0
    ? initialSingleState
    : { reA: alpha, imA: 0, reB: -betaRe, imB: -betaIm }; // dephased state on q0: alpha|0> - beta|1>

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

    w.document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>Experiment 4.2 Report — 3-Qubit Phase-Flip QEC</title>
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

<h1>LAB REPORT - EXPERIMENT 4.2</h1>
<h2>Fault-Tolerant Quantum Mechanics: 3-Qubit Phase-Flip Code</h2>

<h3>1. Aim</h3>
<p>To analyze the encoding, phase noise injection, syndrome measurement, and conditional active feedback correction of a 3-qubit phase-flip repetition quantum error correction (QEC) code, demonstrating robust phase state protection without direct measurements of data qubits.</p>

<h3>2. Apparatus</h3>
<ul>
  <li>3-Qubit Quantum Phase Error Correction Simulator</li>
  <li>Interactive State Preparer and Bloch Sphere projection engine</li>
  <li>Phase-flip dephasing noise channel with single-qubit Z-error injector</li>
  <li>Syndrome extraction panel measuring parity metrics X0X1 and X1X2</li>
</ul>

<h3>3. Mathematical Principles</h3>
<p>The logical qubit is encoded as: |ψ⟩_L = α|+++⟩ + β|---⟩. An environmental dephasing error flips the phase of one qubit, transforming the state. By measuring operators S1 = X0X1 and S2 = X1X2, Bob extracts a unique syndrome vector matching the dephased qubit (e.g. S1=-1, S2=1 points to q0). Bob applies the correction Pauli Z gate on that qubit, restoring the entangled repetition, then decodes using Hadamards and CNOTs to recover the original superposition α|0⟩ + β|1⟩.</p>

<h3>4. Active Experiment Data</h3>
<ul>
  <li>Prepared State Vector |ψ⟩: <strong>${alpha.toFixed(4)}|0⟩ + (${betaRe.toFixed(4)} + ${betaIm.toFixed(4)}i)|1⟩</strong></li>
  <li>Injected Channel Phase Error Location: <strong>Qubit ${errorQubit.toUpperCase()}</strong></li>
  <li>Extracted Syndromes: <strong>S1 (X0X1) = ${syndromesMeasured ? (s1 === 1 ? "-1 (Diff)" : "1 (Same)") : "Unmeasured"}, S2 (X1X2) = ${syndromesMeasured ? (s2 === 1 ? "-1 (Diff)" : "1 (Same)") : "Unmeasured"}</strong></li>
  <li>Target Applied for Correction: <strong>Qubit ${correctionTarget.toUpperCase()}</strong></li>
  <li>Final Recovered State Fidelity: <strong>${(currentFidelity * 100).toFixed(0)}%</strong></li>
</ul>

<h3>5. Conclusion</h3>
<p>The experiment verified that dephasing redundancy mapping combined with X-basis syndrome measurements successfully identifies and corrects single physical phase-flip errors. Qubit state verification confirmed 100% recovery fidelity when correction matches the dephased syndrome location, illustrating the core principles of active fault-tolerance against phase noise in modern quantum processors.</p>

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
    doc.text("3-Qubit Phase-Flip QEC • Experiment 4.2", 148, 124, { align: "center" });

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
    doc.text("WQL-42-3QEC-B2C3D4E5", 267, 175, { align: "right" });

    doc.save("Aether_Completion_Certificate_Exp_4.2.pdf");
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
              {dict.nav_theory}
            </button>
            <button className={`builder-tab-btn ${view === "builder" ? "active" : ""}`} onClick={() => setView("builder")}>
              {dict.nav_playground}
            </button>
            <button
              className={`builder-tab-btn ${view === "sandbox" ? "active" : ""}`}
              onClick={() => setView("sandbox")}
            >
              Qiskit Sandbox
            </button>
            <button className={`builder-tab-btn ${view === "quiz" ? "active" : ""}`} onClick={() => setView("quiz")}>
              {dict.nav_quiz}
            </button>
            <button className={`builder-tab-btn ${view === "credentials" ? "active" : ""}`} onClick={() => setView("credentials")}>
              4. Credentials
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
              <span className="learn-pill">Experiment 4.2</span>
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
                  Explore how phase-flip errors affect quantum registers and how 3-qubit phase-flip correction codes protect states.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                  {[
                    {
                      id: "DWcH8DYFQlI",
                      title: "Quantum Error Correction, Bit Flip & Phase Flip Code",
                      channel: "Qiskit",
                      desc: "An intuitive introduction to how errors leave hints in quantum processors and the principles of quantum correction."
                    },
                    {
                      id: "az_JPhNpWFo",
                      title: "Phase-Flip Repetition Codes",
                      channel: "IQIS Lectures",
                      desc: "How to correct phase-flip errors by mapping states to conjugate bases using Hadamard gates before stabilizers."
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
                            <th>Qubit Dephased</th>
                            <th>S1 (X0X1)</th>
                            <th>S2 (X1X2)</th>
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
                            <td>Pauli Z on q0</td>
                          </tr>
                          <tr>
                            <td><strong>q1</strong></td>
                            <td>-1</td>
                            <td>-1</td>
                            <td>Pauli Z on q1</td>
                          </tr>
                          <tr>
                            <td><strong>q2</strong></td>
                            <td>+1</td>
                            <td>-1</td>
                            <td>Pauli Z on q2</td>
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
                <span className="state-value" style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "0.9rem" }}>|ψ⟩_L = α|+++⟩ + β|---⟩</span>
              </div>
              <div className="state-item" style={{ padding: "12px 18px" }}>
                <span className="state-label">Syndromes:</span>
                <span className="state-value" style={{ fontFamily: "monospace", fontSize: "0.9rem" }}>S1 = X0X1 , S2 = X1X2</span>
              </div>
              <div className="state-item" style={{ padding: "12px 18px" }}>
                <span className="state-label">Corrections:</span>
                <span className="state-value" style={{ fontFamily: "monospace", fontSize: "0.9rem", color: "var(--accent-2)" }}>Z0 (for S1=-1, S2=1) , Z1 (for S1=-1, S2=-1) , Z2 (for S1=1, S2=-1)</span>
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

                {/* LIVE PHASE-FLIP CIRCUIT DIAGRAM */}
                <PhaseFlipCircuit
                  playgroundStep={playgroundStep}
                  errorQubit={errorQubit}
                  syndromesMeasured={syndromesMeasured}
                  correctionTarget={correctionTarget}
                />

                {/* 3D Bloch Spheres view */}
                <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 20 }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "var(--accent)" }}>Qubit State Vectors</h3>
                  <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 20 }}>
                    <div>
                      <h4 style={{ fontSize: "0.8rem", textAlign: "center", marginBottom: 6 }}>Prepared Input (q0)</h4>
                      <LiveBlochSphere state={initialSingleState} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.8rem", textAlign: "center", marginBottom: 6 }}>Recovered Output (q0)</h4>
                      <LiveBlochSphere state={recoveredState} />
                    </div>
                  </div>
                </div>

                {/* State amplitudes and details */}
                <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 20 }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>{dict.builder_state_vector}</h3>
                  <p style={{ fontFamily: "monospace", fontSize: "0.85rem", padding: "10px 14px", background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 8, color: "var(--accent)" }}>
                    {threeQubitStateString}
                  </p>

                  <div className="d-flex justify-content-between align-items-center mt-3 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                    <div>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-3)", marginRight: 8 }}>{dict.builder_outcome_0}</span>
                      <span style={{ fontSize: "1.1rem", fontWeight: 800, color: currentFidelity === 1.0 ? "#34d399" : "var(--accent)" }}>{(currentFidelity * 100).toFixed(0)}%</span>
                    </div>
                    {currentFidelity === 1.0 && playgroundStep === 4 && (
                      <button className="btn-primary-wiser" onClick={() => setView("quiz")} style={{ padding: "8px 18px", fontSize: "0.8rem" }}>
                        {dict.btn_go_quiz} &rarr;
                      </button>
                    )}
                  </div>
                </div>

              </div>

              {/* RIGHT: STEP CONTROLS PANEL */}
              <div className="builder-right-panel" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
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
                      <span style={{ fontSize: "0.82rem", fontWeight: 700 }}>2. Hadamard Phase Encoding</span>
                      {playgroundStep === 1 && (
                        <button className="btn btn-sm btn-primary-wiser" style={{ padding: "2px 8px", fontSize: "0.75rem" }} onClick={() => { setIsEncoded(true); setPlaygroundStep(2); }}>
                          Simulate &amp; Proceed &rarr;
                        </button>
                      )}
                    </div>
                    {isEncoded ? (
                      <div style={{ fontSize: "0.75rem", color: "#34d399", fontWeight: 600 }}>
                        ✓ Encoded to Phase State: α|+++⟩ + β|---⟩
                      </div>
                    ) : (
                      <div style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
                        {playgroundStep === 1 ? "Simulate CNOTs + H gates to map q0 → |+++⟩/|---⟩" : "Locked (Complete Step 1)"}
                      </div>
                    )}
                  </div>

                  {/* Step 3: Noise Injection */}
                  <div className={`qec-step-card p-3 mb-3 ${playgroundStep === 2 ? "border-primary" : ""}`} style={{ background: "var(--bg-canvas)", borderRadius: 12, border: "1px solid var(--border)" }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{ fontSize: "0.82rem", fontWeight: 700 }}>3. Inject Channel Noise (Phase-Flip)</span>
                      {playgroundStep === 2 && (
                        <button className="btn btn-sm btn-primary-wiser" style={{ padding: "2px 8px", fontSize: "0.75rem" }} onClick={() => setPlaygroundStep(3)} disabled={errorQubit === "none" && !confirm("Proceed with no phase-flip error?")}>
                          Next Step &rarr;
                        </button>
                      )}
                    </div>
                    {playgroundStep === 2 ? (
                      <div className="d-flex flex-column gap-2 mt-2">
                        <p style={{ fontSize: "0.7rem", color: "var(--text-3)", margin: 0 }}>Select a qubit line to introduce dephasing:</p>
                        <div className="d-flex gap-2">
                          <button className={`btn-secondary-wiser py-1 w-100 ${errorQubit === "q0" ? "active" : ""}`} style={{ fontSize: "0.75rem" }} onClick={() => setErrorQubit("q0")}>q0 (Z)</button>
                          <button className={`btn-secondary-wiser py-1 w-100 ${errorQubit === "q1" ? "active" : ""}`} style={{ fontSize: "0.75rem" }} onClick={() => setErrorQubit("q1")}>q1 (Z)</button>
                          <button className={`btn-secondary-wiser py-1 w-100 ${errorQubit === "q2" ? "active" : ""}`} style={{ fontSize: "0.75rem" }} onClick={() => setErrorQubit("q2")}>q2 (Z)</button>
                        </div>
                        <button className={`btn-secondary-wiser py-1 w-100 ${errorQubit === "none" ? "active" : ""}`} style={{ fontSize: "0.75rem" }} onClick={() => setErrorQubit("none")}>No Error</button>
                      </div>
                    ) : (
                      <div style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
                        {errorQubit !== "none" ? `Phase-flip error (Z) injected on qubit ${errorQubit.toUpperCase()}` : "No error injected in dephasing channel."}
                      </div>
                    )}
                  </div>

                  {/* Step 4: Syndrome Measurement */}
                  <div className={`qec-step-card p-3 mb-3 ${playgroundStep === 3 ? "border-primary" : ""}`} style={{ background: "var(--bg-canvas)", borderRadius: 12, border: "1px solid var(--border)" }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{ fontSize: "0.82rem", fontWeight: 700 }}>4. Syndrome Measurement (X-basis)</span>
                      {playgroundStep === 3 && (
                        <button className="btn btn-sm btn-primary-wiser" style={{ padding: "2px 8px", fontSize: "0.75rem" }} onClick={() => { setSyndromesMeasured(true); setPlaygroundStep(4); }}>
                          Extract Syndromes &rarr;
                        </button>
                      )}
                    </div>
                    {syndromesMeasured ? (
                      <div className="d-flex flex-column gap-1 mt-1" style={{ fontSize: "0.75rem" }}>
                        <div className="d-flex justify-content-between">
                          <span>S1 (X0X1):</span>
                          <span style={{ fontWeight: 700, color: s1 === 1 ? "var(--accent)" : "#34d399" }}>{s1 === 1 ? "-1 (Diff)" : "+1 (Same)"}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span>S2 (X1X2):</span>
                          <span style={{ fontWeight: 700, color: s2 === 1 ? "var(--accent-2)" : "#34d399" }}>{s2 === 1 ? "-1 (Diff)" : "+1 (Same)"}</span>
                        </div>
                      </div>
                    ) : (
                      <div style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
                        {playgroundStep === 3 ? "Extract relative phases X0X1 and X1X2 parities" : "Locked (Complete Step 3)"}
                      </div>
                    )}
                  </div>

                  {/* Step 5: Correction & Verification */}
                  <div className={`qec-step-card p-3 ${playgroundStep === 4 ? "border-primary" : ""}`} style={{ background: "var(--bg-canvas)", borderRadius: 12, border: "1px solid var(--border)" }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{ fontSize: "0.82rem", fontWeight: 700 }}>5. Active Phase Correction</span>
                    </div>
                    {playgroundStep === 4 ? (
                      <div className="d-flex flex-column gap-2 mt-2">
                        <p style={{ fontSize: "0.7rem", color: "var(--text-3)", margin: 0 }}>Apply restoring Z feedback gate:</p>
                        <div className="d-flex gap-2">
                          <button className={`btn-secondary-wiser py-1 w-100 ${correctionTarget === "q0" ? "active" : ""}`} style={{ fontSize: "0.75rem" }} onClick={() => setCorrectionTarget("q0")}>Correct q0 (Z)</button>
                          <button className={`btn-secondary-wiser py-1 w-100 ${correctionTarget === "q1" ? "active" : ""}`} style={{ fontSize: "0.75rem" }} onClick={() => setCorrectionTarget("q1")}>Correct q1 (Z)</button>
                          <button className={`btn-secondary-wiser py-1 w-100 ${correctionTarget === "q2" ? "active" : ""}`} style={{ fontSize: "0.75rem" }} onClick={() => setCorrectionTarget("q2")}>Correct q2 (Z)</button>
                        </div>
                        <div className="d-flex gap-2">
                          <button className="btn-secondary-wiser py-1 w-100" style={{ fontSize: "0.75rem", background: "rgba(52, 211, 153, 0.08)", color: "#34d399" }} onClick={autoCorrect}>Auto-Correct</button>
                          <button className={`btn-secondary-wiser py-1 w-100 ${correctionTarget === "none" ? "active" : ""}`} style={{ fontSize: "0.75rem" }} onClick={() => setCorrectionTarget("none")}>No Action</button>
                        </div>
                      </div>
                    ) : (
                      <div style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
                        {correctionTarget !== "none" ? `Restoring Z gate applied to qubit ${correctionTarget.toUpperCase()}` : "Locked (Complete Step 4)"}
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
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
                  href={COLAB_LINKS["4.2"]}
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
              {phaseFlipQiskitCode}
            </pre>
          </section>
        </div>
      )}

      {/* RENDER VIEW: CHECKPOINT QUIZ */}
      {view === "quiz" && (
        <div className="view-fade-in">
          <section className="quiz-section-wrapper" style={{ maxWidth: 720, margin: "40px auto", padding: "0 20px" }}>
            <div className="quiz-header-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24, marginBottom: 20 }}>
              <div className="d-flex justify-content-between align-items-center">
                <h2>{dict.quiz_title}</h2>
                <div style={{ background: "rgba(6, 182, 212, 0.1)", border: "1px solid var(--accent)", borderRadius: 8, padding: "4px 10px", fontSize: "0.8rem", color: "var(--accent)", fontWeight: 700 }}>
                  Question {quizIndex + 1} of 10
                </div>
              </div>
              <div className="progress mt-3" style={{ height: 6, background: "var(--border)", borderRadius: 3 }}>
                <div className="progress-bar" style={{ width: `${((quizIndex + 1) / 10) * 100}%`, background: "var(--accent)" }} />
              </div>
            </div>

            {!quizSubmitted ? (
              <div className="quiz-question-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 700, letterSpacing: "0.06em" }}>Time Limit</span>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: timeLeft <= 10 ? "#f43f5e" : "var(--accent)" }}>{timeLeft}s {dict.quiz_time_left}</span>
                </div>

                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.45, marginBottom: 20 }}>
                  {quizQuestions[quizIndex].q}
                </h3>

                <div className="d-flex flex-column gap-3">
                  {quizQuestions[quizIndex].options.map((opt, oIdx) => {
                    let btnClass = "quiz-option-btn";
                    if (selectedOpt !== null) {
                      if (oIdx === quizQuestions[quizIndex].correct) {
                        btnClass += " correct";
                      } else if (oIdx === selectedOpt) {
                        btnClass += " incorrect";
                      }
                    }
                    return (
                      <button key={oIdx} className={btnClass} onClick={() => handleSelectOption(oIdx)} disabled={selectedOpt !== null}>
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {selectedOpt !== null && (
                  <div className="d-flex justify-content-end mt-4">
                    <button className="btn-primary-wiser" onClick={() => handleNextQuestion(false)}>
                      {dict.quiz_next_question} &rarr;
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="quiz-result-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 32, textAlign: "center" }}>
                {quizPassed ? (
                  <div>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(52, 211, 153, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <CheckCircle2 size={36} color="#34d399" />
                    </div>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12 }}>{dict.quiz_passed_title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-3)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto 24px" }}>
                      {dict.quiz_passed_desc.replace("{score}", quizScore.toString())}
                    </p>
                    <button className="btn-primary-wiser" onClick={() => setView("credentials")} style={{ padding: "10px 24px" }}>
                      Proceed to Credentials &rarr;
                    </button>
                  </div>
                ) : (
                  <div>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(244, 63, 94, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                      <AlertCircle size={36} color="#f43f5e" />
                    </div>
                    <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12 }}>{dict.quiz_failed_title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-3)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto 24px" }}>
                      {dict.quiz_failed_desc.replace("{score}", quizScore.toString())}
                    </p>
                    <button className="btn-primary-wiser" onClick={handleRestartQuiz} style={{ padding: "10px 24px" }}>
                      {dict.btn_retake_quiz}
                    </button>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      )}

      {/* RENDER VIEW: CREDENTIALS VIEW */}
      {view === "credentials" && (
        <div className="view-fade-in">
          <section style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px" }}>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 30, textAlign: "center", marginBottom: 30 }}>
              <Award size={48} color="var(--accent)" style={{ marginBottom: 16 }} />
              <h2>Experiment 4.2 Credentials</h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text-3)", maxWidth: 500, margin: "0 auto 20px" }}>
                Generate your verifiable academic completion certificate and formal laboratory record in PDF format.
              </p>

              {!quizPassed ? (
                <div style={{ padding: "16px 20px", background: "rgba(244, 63, 94, 0.05)", border: "1px solid rgba(244, 63, 94, 0.2)", borderRadius: 12, color: "#f43f5e", fontSize: "0.85rem" }}>
                  ⚠️ Checkpoint quiz verification required to unlock downloadable report and certificate.
                </div>
              ) : (
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <button className="btn-secondary-wiser" onClick={downloadReport} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", fontSize: "0.85rem", fontWeight: 700 }}>
                    <FileText size={16} />Print Lab Report
                  </button>
                </div>
              )}
            </div>

            {quizPassed && (
              <div className="certificate-container" style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: 640, background: "white", padding: 2, borderRadius: 8, boxShadow: "0 10px 30px rgba(0,0,0,0.15)", border: "1px solid #E5E7EB" }}>
                  <div style={{ border: "2px solid #8B6914", padding: 24, borderRadius: 6, background: "#FCFBF7", color: "#111827", position: "relative" }}>

                    {/* Header border styling */}
                    <div style={{ borderBottom: "1px solid #C9A227", paddingBottom: 16, marginBottom: 20 }}>
                      <p style={{ fontFamily: "serif", fontSize: "0.75rem", letterSpacing: "0.15em", color: "#8B6914", fontWeight: 700, margin: "0 0 2px 0" }}>AETHER QUANTUM LAB</p>
                      <p style={{ fontSize: "0.6rem", color: "#9CA3AF", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>Quantum Communication Education Platform</p>
                    </div>

                    <div style={{ textAlign: "center", margin: "24px 0" }}>
                      <p style={{ fontSize: "0.75rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px 0" }}>This certifies that</p>
                      <h2 style={{ fontFamily: "serif", fontSize: "1.9rem", fontWeight: 700, color: "#111827", margin: "0 0 10px 0" }}>Learner Name</h2>
                      <p style={{ fontSize: "0.75rem", color: "#6B7280", margin: "0 0 8px 0" }}>has successfully completed</p>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#1D4ED8", margin: 0 }}>3-Qubit Phase-Flip QEC • Experiment 4.2</h4>
                    </div>

                    <div style={{ borderTop: "1px solid #C9A227", paddingTop: 16, marginTop: 24 }}>
                      <div style={{ display: "flex", justifySelf: "center", alignItems: "center", gap: 12, marginBottom: 12 }}>
                        <div style={{ flex: 1, height: 1, background: "linear-gradient(270deg, #C9A227, transparent)" }} />
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
                          <p style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "#8B6914", margin: 0 }}>WQL-42-3QEC-B2C3D4E5</p>
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
