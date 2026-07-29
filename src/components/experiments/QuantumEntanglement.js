"use client";

import React, { useState, useEffect } from "react";
import "./QuantumEntanglement.css";
import { ArrowLeft, BookOpen, Sparkles, HelpCircle, RotateCcw, Trash2, ChevronRight, ChevronLeft, X, AlertCircle, CheckCircle2, ArrowRight, Moon, Sun, Award, FileText, Check, Download, FlaskConical, Cpu, Play } from "lucide-react";
import Link from "next/link";
import { LANG_META } from "../../data/translations";
import { TRANSLATIONS_EXP_1_2 } from "../../data/translations_exp_1.2";
import { COLAB_LINKS } from "../../data/colabLinks";
import { CONSISTENT_NAV } from "../../data/consistentNav";

const QUIZ_ANSWERS = [0, 1, 1, 2, 1, 1, 2, 3, 1, 2];

// Interactive SVG Visualisations for the Theory dashboard
function TopicVisual({ id, dict }) {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!dict) return null;

  if (id === "cnot-gate") {
    return (
      <div className="visual-graphic-container">
        <svg width="180" height="100" viewBox="0 0 180 100">
          {/* Timeline wires */}
          <line x1="20" y1="30" x2="160" y2="30" stroke="var(--border)" strokeWidth="2" />
          <line x1="20" y1="70" x2="160" y2="70" stroke="var(--border)" strokeWidth="2" />

          {/* Qubit labels */}
          <text x="15" y="34" fill="var(--text-3)" fontSize="10" fontFamily="monospace">q0</text>
          <text x="15" y="74" fill="var(--text-3)" fontSize="10" fontFamily="monospace">q1</text>

          {/* CNOT visual connection */}
          <line x1="90" y1="30" x2="90" y2="70" stroke="var(--accent)" strokeWidth="2" />
          <circle cx="90" cy="30" r="5" fill="var(--accent)" />

          {/* CNOT target circle-plus */}
          <circle cx="90" cy="70" r="10" fill="var(--bg-card)" stroke="var(--accent)" strokeWidth="2" />
          <line x1="85" y1="70" x2="95" y2="70" stroke="var(--accent)" strokeWidth="2" />
          <line x1="90" y1="65" x2="90" y2="75" stroke="var(--accent)" strokeWidth="2" />

          {/* Pulse animation particle */}
          <circle cx={pulse ? "150" : "30"} cy="30" r="4" fill="var(--accent-2)" opacity="0.8" style={{ transition: "all 1.8s linear" }} />
          <circle cx={pulse ? "150" : "30"} cy="70" r="4" fill="var(--accent)" opacity="0.8" style={{ transition: "all 1.8s linear" }} />
        </svg>
        <span className="visual-caption">Controlled-NOT (CNOT) operation mapping</span>
      </div>
    );
  }

  if (id === "bell-states") {
    return (
      <div className="visual-graphic-container">
        <svg width="180" height="100" viewBox="0 0 180 100">
          <line x1="20" y1="30" x2="160" y2="30" stroke="var(--border)" strokeWidth="2" />
          <line x1="20" y1="70" x2="160" y2="70" stroke="var(--border)" strokeWidth="2" />

          {/* Hadamard Gate */}
          <rect x="40" y="15" width="30" height="30" rx="6" fill="var(--accent-glow)" stroke="var(--accent)" strokeWidth="2" />
          <text x="51" y="35" fill="var(--text)" fontSize="14" fontWeight="bold">H</text>

          {/* Entangling link */}
          <line x1="110" y1="30" x2="110" y2="70" stroke="var(--accent-2)" strokeWidth="2" />
          <circle cx="110" cy="30" r="4" fill="var(--accent-2)" />
          <circle cx="110" cy="70" r="8" fill="var(--bg-card)" stroke="var(--accent-2)" strokeWidth="2" />

          {/* Entanglement wave graphic */}
          <path d="M 125 30 Q 140 50 155 70" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" className="wave-pulse" />
          <path d="M 125 70 Q 140 50 155 30" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" className="wave-pulse" />
        </svg>
        <span className="visual-caption">Maximally entangled Bell State circuit flow</span>
      </div>
    );
  }

  if (id === "swap-toffoli") {
    return (
      <div className="visual-graphic-container">
        <svg width="180" height="100" viewBox="0 0 180 100">
          <line x1="20" y1="20" x2="160" y2="20" stroke="var(--border)" strokeWidth="2" />
          <line x1="20" y1="50" x2="160" y2="50" stroke="var(--border)" strokeWidth="2" />
          <line x1="20" y1="80" x2="160" y2="80" stroke="var(--border)" strokeWidth="2" />

          {/* SWAP crosses */}
          <line x1="50" y1="20" x2="50" y2="50" stroke="var(--accent)" strokeWidth="1.5" />
          <text x="46" y="24" fill="var(--accent)" fontSize="12" fontWeight="bold">×</text>
          <text x="46" y="54" fill="var(--accent)" fontSize="12" fontWeight="bold">×</text>

          {/* Toffoli CCNOT */}
          <line x1="110" y1="20" x2="110" y2="80" stroke="var(--accent-2)" strokeWidth="1.5" />
          <circle cx="110" cy="20" r="4" fill="var(--accent-2)" />
          <circle cx="110" cy="50" r="4" fill="var(--accent-2)" />
          <circle cx="110" cy="80" r="7" fill="var(--bg-card)" stroke="var(--accent-2)" strokeWidth="2" />
        </svg>
        <span className="visual-caption">SWAP (crossed lines) and Toffoli CCNOT structures</span>
      </div>
    );
  }

  if (id === "entanglement-applications") {
    return (
      <div className="visual-graphic-container">
        <svg width="180" height="100" viewBox="0 0 180 100">
          {/* Two stations */}
          <rect x="20" y="30" width="35" height="40" rx="6" fill="rgba(120, 120, 128, 0.08)" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="125" y="30" width="35" height="40" rx="6" fill="rgba(120, 120, 128, 0.08)" stroke="var(--border)" strokeWidth="1.5" />

          <text x="27" y="54" fill="var(--text-3)" fontSize="10" fontWeight="bold">A</text>
          <text x="139" y="54" fill="var(--text-3)" fontSize="10" fontWeight="bold">B</text>

          {/* Entangled channel pulse */}
          <line x1="55" y1="50" x2="125" y2="50" stroke="var(--accent-2)" strokeWidth="2" strokeDasharray="5 5" className="wave-pulse" />
          <circle cx={pulse ? "115" : "65"} cy="50" r="5" fill="var(--accent)" />
        </svg>
        <span className="visual-caption">Alice & Bob sharing correlated EPR cryptographic states</span>
      </div>
    );
  }

  return null;
}

// -------------------------------------------------------------------
// Quantum Simulator Math for 3 Qubits
// -------------------------------------------------------------------
function computeState3Qubits(slots) {
  let c = Array(8).fill(null).map(() => ({ re: 0, im: 0 }));
  c[0] = { re: 1, im: 0 }; // Start state |000>

  const numCols = 5;

  for (let col = 0; col < numCols; col++) {
    const g0 = slots[0][col];
    const g1 = slots[1][col];
    const g2 = slots[2][col];

    // Apply single-qubit gates
    if (g0 && ["H", "X", "Y", "Z"].includes(g0)) c = applySingleQubitGate(c, 0, g0);
    if (g1 && ["H", "X", "Y", "Z"].includes(g1)) c = applySingleQubitGate(c, 1, g1);
    if (g2 && ["H", "X", "Y", "Z"].includes(g2)) c = applySingleQubitGate(c, 2, g2);

    // Apply multi-qubit gates in the column
    if (g0 === "CX_ctrl" || g1 === "CX_tgt") c = applyCX(c, 0, 1);
    if (g1 === "CX12_ctrl" || g2 === "CX12_tgt") c = applyCX(c, 1, 2);
    if (g0 === "SWAP_ctrl" || g1 === "SWAP_ctrl") c = applySWAP(c, 0, 1);
    if (g0 === "CCX_ctrl" || g1 === "CCX_ctrl" || g2 === "CCX_tgt") c = applyCCX(c, 0, 1, 2);
  }

  return c;
}

function applySingleQubitGate(c, qubit, gate) {
  const nextC = c.map((val) => ({ ...val }));
  const invSqrt2 = 1 / Math.sqrt(2);
  const bitMask = 1 << qubit;

  for (let k = 0; k < 8; k++) {
    if ((k & bitMask) === 0) {
      const idx0 = k;
      const idx1 = k | bitMask;

      const c0 = c[idx0];
      const c1 = c[idx1];

      switch (gate) {
        case "X":
          nextC[idx0] = c1;
          nextC[idx1] = c0;
          break;
        case "Y":
          nextC[idx0] = { re: c1.im, im: -c1.re };
          nextC[idx1] = { re: -c0.im, im: c0.re };
          break;
        case "Z":
          nextC[idx0] = c0;
          nextC[idx1] = { re: -c1.re, im: -c1.im };
          break;
        case "H":
          nextC[idx0] = {
            re: (c0.re + c1.re) * invSqrt2,
            im: (c0.im + c1.im) * invSqrt2
          };
          nextC[idx1] = {
            re: (c0.re - c1.re) * invSqrt2,
            im: (c0.im - c1.im) * invSqrt2
          };
          break;
        default:
          break;
      }
    }
  }
  return nextC;
}

function applyCX(c, control, target) {
  const nextC = c.map((val) => ({ ...val }));
  const ctrlMask = 1 << control;
  const tgtMask = 1 << target;

  for (let k = 0; k < 8; k++) {
    if ((k & ctrlMask) !== 0 && (k & tgtMask) === 0) {
      const idx0 = k;
      const idx1 = k | tgtMask;
      nextC[idx0] = c[idx1];
      nextC[idx1] = c[idx0];
    }
  }
  return nextC;
}

function applySWAP(c, qA, qB) {
  const nextC = c.map((val) => ({ ...val }));
  const maskA = 1 << qA;
  const maskB = 1 << qB;

  for (let k = 0; k < 8; k++) {
    if ((k & maskA) !== 0 && (k & maskB) === 0) {
      const idx0 = k;
      const idx1 = (k & ~maskA) | maskB;
      nextC[idx0] = c[idx1];
      nextC[idx1] = c[idx0];
    }
  }
  return nextC;
}

function applyCCX(c, control1, control2, target) {
  const nextC = c.map((val) => ({ ...val }));
  const c1Mask = 1 << control1;
  const c2Mask = 1 << control2;
  const tgtMask = 1 << target;

  for (let k = 0; k < 8; k++) {
    if ((k & c1Mask) !== 0 && (k & c2Mask) !== 0 && (k & tgtMask) === 0) {
      const idx0 = k;
      const idx1 = k | tgtMask;
      nextC[idx0] = c[idx1];
      nextC[idx1] = c[idx0];
    }
  }
  return nextC;
}

function computeBlochVector(c, qubit) {
  let r00 = 0;
  let r01 = { re: 0, im: 0 };
  const bitMask = 1 << qubit;

  for (let k = 0; k < 8; k++) {
    if ((k & bitMask) === 0) {
      const idx0 = k;
      const idx1 = k | bitMask;

      const c0 = c[idx0];
      const c1 = c[idx1];

      r00 += c0.re * c0.re + c0.im * c0.im;
      r01.re += c0.re * c1.re + c0.im * c1.im;
      r01.im += c0.im * c1.re - c0.re * c1.im;
    }
  }

  const x = 2 * r01.re;
  const y = -2 * r01.im;
  const z = 2 * r00 - 1;

  return { x, y, z };
}

// -------------------------------------------------------------------
// Quantum Simulator Math for 2 Qubits (Activities tab)
// -------------------------------------------------------------------
function computeState2Qubits(slots) {
  let c = [{ re: 1, im: 0 }, { re: 0, im: 0 }, { re: 0, im: 0 }, { re: 0, im: 0 }];
  const invSqrt2 = 1 / Math.sqrt(2);

  for (let col = 0; col < 5; col++) {
    const g0 = slots[0][col];
    const g1 = slots[1][col];

    // Apply single-qubit gates on q0
    if (g0) {
      const c0 = c[0], c1 = c[1];
      const c2 = c[2], c3 = c[3];
      if (g0 === "H") {
        c[0] = { re: (c0.re + c1.re) * invSqrt2, im: (c0.im + c1.im) * invSqrt2 };
        c[1] = { re: (c0.re - c1.re) * invSqrt2, im: (c0.im - c1.im) * invSqrt2 };
        c[2] = { re: (c2.re + c3.re) * invSqrt2, im: (c2.im + c3.im) * invSqrt2 };
        c[3] = { re: (c2.re - c3.re) * invSqrt2, im: (c2.im - c3.im) * invSqrt2 };
      } else if (g0 === "X") {
        c[0] = c1; c[1] = c0;
        c[2] = c3; c[3] = c2;
      } else if (g0 === "Y") {
        c[0] = { re: c1.im, im: -c1.re };
        c[1] = { re: -c0.im, im: c0.re };
        c[2] = { re: c3.im, im: -c3.re };
        c[3] = { re: -c2.im, im: c2.re };
      } else if (g0 === "Z") {
        c[1] = { re: -c1.re, im: -c1.im };
        c[3] = { re: -c3.re, im: -c3.im };
      }
    }

    // Apply single-qubit gates on q1
    if (g1) {
      const c0 = c[0], c1 = c[1];
      const c2 = c[2], c3 = c[3];
      if (g1 === "H") {
        c[0] = { re: (c0.re + c2.re) * invSqrt2, im: (c0.im + c2.im) * invSqrt2 };
        c[2] = { re: (c0.re - c2.re) * invSqrt2, im: (c0.im - c2.im) * invSqrt2 };
        c[1] = { re: (c1.re + c3.re) * invSqrt2, im: (c1.im + c3.im) * invSqrt2 };
        c[3] = { re: (c1.re - c3.re) * invSqrt2, im: (c1.im - c3.im) * invSqrt2 };
      } else if (g1 === "X") {
        c[0] = c2; c[2] = c0;
        c[1] = c3; c[3] = c1;
      } else if (g1 === "Y") {
        c[0] = { re: c2.im, im: -c2.re };
        c[2] = { re: -c0.im, im: c0.re };
        c[1] = { re: c3.im, im: -c3.re };
        c[3] = { re: -c1.im, im: c1.re };
      } else if (g1 === "Z") {
        c[2] = { re: -c2.re, im: -c2.im };
        c[3] = { re: -c3.re, im: -c3.im };
      }
    }

    // Apply CX (CNOT q0 -> q1)
    if (g0 === "CX_ctrl" || g1 === "CX_tgt") {
      const tmp = c[1];
      c[1] = c[3];
      c[3] = tmp;
    }
  }

  return c;
}

function c0c1star(c0, c1) {
  return {
    re: c0.re * c1.re + c0.im * c1.im,
    im: c0.im * c1.re - c0.re * c1.im
  };
}

function computeBlochVector2Q(c, qubit) {
  let r00 = 0;
  let r01 = { re: 0, im: 0 };

  if (qubit === 0) {
    r00 = c[0].re * c[0].re + c[0].im * c[0].im + c[2].re * c[2].re + c[2].im * c[2].im;
    const t0 = c0c1star(c[0], c[1]);
    const t1 = c0c1star(c[2], c[3]);
    r01 = { re: t0.re + t1.re, im: t0.im + t1.im };
  } else {
    r00 = c[0].re * c[0].re + c[0].im * c[0].im + c[1].re * c[1].re + c[1].im * c[1].im;
    const t0 = c0c1star(c[0], c[2]);
    const t1 = c0c1star(c[1], c[3]);
    r01 = { re: t0.re + t1.re, im: t0.im + t1.im };
  }

  const x = 2 * r01.re;
  const y = -2 * r01.im;
  const z = 2 * r00 - 1;

  return { x, y, z };
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

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

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
  const radiusLength = Math.sqrt(x * x + y * y + z * z);

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
      style={{ position: "relative", cursor: isDragging ? "grabbing" : "grab", userSelect: "none" }}
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

        {radiusLength > 0.05 && (
          <>
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
          </>
        )}

        <text x={pVector.px + 8} y={pVector.py - 4} fill="var(--accent)" fontSize="9" fontWeight="bold">
          {label}
        </text>
      </svg>
      <div style={{ fontSize: "0.68rem", color: "var(--text-3)", textAlign: "center", marginTop: 4 }}>
        🖱️ Drag sphere to rotate in 3D
      </div>
      {radiusLength < 0.9 && (
        <div style={{ position: "absolute", bottom: 2, right: 6, fontSize: "0.58rem", color: "var(--accent-2)", padding: "1px 4px", background: "rgba(120, 120, 128, 0.05)", borderRadius: 4 }}>
          Mixed state (r={(radiusLength).toFixed(2)})
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------------
// MAIN EXPORTS COMPONENT
// -------------------------------------------------------------------
export default function QuantumEntanglement({ dark = true, setDark = (val) => { }, lang = "en", setLang = (val) => { }, onQuizPassed = () => { }, initialCompleted = false, userName = "Google Learner", userId = "" } = {}) {
  const dict = TRANSLATIONS_EXP_1_2[lang] || TRANSLATIONS_EXP_1_2.en;

  const topics = [
    {
      id: "cnot-gate",
      label: dict.topics["cnot-gate"].label,
      tag: dict.topics["cnot-gate"].tag,
      bullets: dict.topics["cnot-gate"].bullets,
      longContent: {
        description: dict.topics["cnot-gate"].description,
        table: dict.topics["cnot-gate"].table
      }
    },
    {
      id: "bell-states",
      label: dict.topics["bell-states"].label,
      tag: dict.topics["bell-states"].tag,
      bullets: dict.topics["bell-states"].bullets,
      longContent: {
        description: dict.topics["bell-states"].description
      }
    },
    {
      id: "swap-toffoli",
      label: dict.topics["swap-toffoli"].label,
      tag: dict.topics["swap-toffoli"].tag,
      bullets: dict.topics["swap-toffoli"].bullets,
      longContent: {
        description: dict.topics["swap-toffoli"].description
      }
    },
    {
      id: "entanglement-applications",
      label: dict.topics["entanglement-applications"].label,
      tag: dict.topics["entanglement-applications"].tag,
      bullets: dict.topics["entanglement-applications"].bullets,
      longContent: {
        description: dict.topics["entanglement-applications"].description
      }
    }
  ];

  const [view, setView] = useState("learn"); // "learn", "builder", "activity", or "quiz"
  const [copied, setCopied] = useState(false);
  const entanglementQiskitCode = `from qiskit import QuantumCircuit, Aer, execute

# 1. Initialize a 2-qubit circuit and 2 classical bits
qc = QuantumCircuit(2, 2)

# 2. Put qubit 0 into superposition (|0> + |1>)/√2 using Hadamard gate
qc.h(0)

# 3. Entangle qubit 1 with qubit 0 using a Controlled-NOT (CNOT) gate
qc.cx(0, 1)

# 4. Measure both qubits into the classical bits
qc.measure([0, 1], [0, 1])

# 5. Execute the circuit on the simulator
simulator = Aer.get_backend('qasm_simulator')
job = execute(qc, simulator, shots=1024)
result = job.result()

# 6. Output the measurement results (we expect only '00' and '11')
counts = result.get_counts(qc)
print("Measurement counts (Bell state Φ+):", counts)
`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(entanglementQiskitCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [activeTopic, setActiveTopic] = useState(null);

  // 3 Qubits Playground Wires
  const [slots, setSlots] = useState([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ]);
  const [draggedGate, setDraggedGate] = useState(null);

  // 2 Qubits Activities Wires
  const [activitySlots, setActivitySlots] = useState([
    [null, null, null, null, null],
    [null, null, null, null, null]
  ]);
  const [activityDraggedGate, setActivityDraggedGate] = useState(null);

  // Guided Tour States
  const [tourStep, setTourStep] = useState(null);

  // Activity Entanglement Challenges States
  const [activeActivity, setActiveActivity] = useState(0); // 0: phi+, 1: phi-, 2: psi+, 3: psi-
  const [activityCompleted, setActivityCompleted] = useState([false, false, false, false]);

  // Quiz States (10 questions, 30s timer)
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(() => {
    if (initialCompleted) return true;
    try {
      return localStorage.getItem(`lab_completed_${userId}_1.2`) === "Completed";
    } catch (e) {
      return false;
    }
  });
  const [quizPassed, setQuizPassed] = useState(() => {
    if (initialCompleted) return true;
    try {
      return localStorage.getItem(`lab_completed_${userId}_1.2`) === "Completed";
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    if (initialCompleted) {
      setQuizPassed(true);
      setQuizSubmitted(true);
      try {
        localStorage.setItem(`lab_completed_${userId}_1.2`, "Completed");
      } catch (e) {}
    }
  }, [initialCompleted, userId]);
  const [timeLeft, setTimeLeft] = useState(30);

  const quizQuestions = dict.quiz_questions.map((q, idx) => ({
    q: q.q,
    options: q.options,
    correct: QUIZ_ANSWERS[idx]
  }));

  // 3 Qubits Simulation math
  const activeState = computeState3Qubits(slots);
  const blochQ0 = computeBlochVector(activeState, 0);
  const blochQ1 = computeBlochVector(activeState, 1);
  const blochQ2 = computeBlochVector(activeState, 2);

  // 2 Qubits Simulation math (Activities tab)
  const activityState = computeState2Qubits(activitySlots);
  const blochQ0Act = computeBlochVector2Q(activityState, 0);
  const blochQ1Act = computeBlochVector2Q(activityState, 1);

  // Local helper for Guided Tour checklists in the Activities tab
  const getGuidedStepsForActivity = (activityId) => {
    const isHindi = lang === "hi";
    const isKannada = lang === "kn";
    const isTamil = lang === "ta";
    const isSpanish = lang === "es";
    const isFrench = lang === "fr";

    if (activityId === 0) {
      return [
        {
          text: isHindi ? "q0 के पहले स्लॉट में Hadamard (H) गेट रखें।" : isKannada ? "q0 ಮೊದಲ ಸ್ಲಾಟ್‌ನಲ್ಲಿ ಹಡಮಾರ್ಡ್ (H) ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q0-இன் முதல் ஸ்லாட்டில் ஹடமார்ட் (H) கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta Hadamard (H) en el primer slot de q0." : isFrench ? "Placez une porte Hadamard (H) dans le premier emplacement de q0." : "Place a Hadamard (H) gate on the first slot of qubit q0.",
          check: activitySlots[0][0] === "H"
        },
        {
          text: isHindi ? "q1 के दूसरे स्लॉट में CNOT (CX) गेट रखें।" : isKannada ? "q1 ಎರಡನೇ ಸ್ಲಾಟ್‌ನಲ್ಲಿ CNOT (CX) ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q1-இன் இரண்டாவது ஸ்லாட்டில் CNOT (CX) கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta CNOT (CX) en el segundo slot de q1." : isFrench ? "Placez une porte CNOT (CX) dans le deuxième emplacement de q1." : "Place a CNOT (CX) gate on the second slot of qubit q1.",
          check: activitySlots[1][1] === "CX"
        }
      ];
    }
    if (activityId === 1) {
      return [
        {
          text: isHindi ? "q0 के पहले स्लॉट में Pauli X गेट रखें।" : isKannada ? "q0 ಮೊದಲ ಸ್ಲಾಟ್‌ನಲ್ಲಿ ಪಾಲಿ X ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q0-இன் முதல் ஸ்லாட்டில் பாலி X கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta Pauli X en el primer slot de q0." : isFrench ? "Placez une porte Pauli X dans le premier emplacement de q0." : "Place a Pauli X gate on the first slot of qubit q0.",
          check: activitySlots[0][0] === "X"
        },
        {
          text: isHindi ? "q0 के दूसरे स्लॉट में Hadamard (H) गेट रखें।" : isKannada ? "q0 ಎರಡನೇ ಸ್ಲಾಟ್‌ನಲ್ಲಿ ಹಡಮಾರ್ಡ್ (H) ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q0-இன் இரண்டாவது ஸ்லாட்டில் ஹடமார்ட் (H) கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta Hadamard (H) en el segundo slot de q0." : isFrench ? "Placez une porte Hadamard (H) dans le deuxième emplacement de q0." : "Place a Hadamard (H) gate on the second slot of qubit q0.",
          check: activitySlots[0][1] === "H"
        },
        {
          text: isHindi ? "q1 के तीसरे स्लॉट में CNOT (CX) गेट रखें।" : isKannada ? "q1 ಮೂರನೇ ಸ್ಲಾಟ್‌ನಲ್ಲಿ CNOT (CX) ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q1-இன் மூன்றாவது ஸ்லாட்டில் CNOT (CX) கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta CNOT (CX) en el tercer slot de q1." : isFrench ? "Placez une porte CNOT (CX) dans le troisième emplacement de q1." : "Place a CNOT (CX) gate on the third slot of qubit q1.",
          check: activitySlots[1][2] === "CX"
        }
      ];
    }
    if (activityId === 2) {
      return [
        {
          text: isHindi ? "q0 के पहले स्लॉट में Hadamard (H) गेट रखें।" : isKannada ? "q0 ಮೊದಲ ಸ್ಲಾಟ್‌ನಲ್ಲಿ ಹಡಮಾರ್ಡ್ (H) ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q0-இன் முதல் ஸ்லாட்டில் ஹடமார்ட் (H) கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta Hadamard (H) en el primer slot de q0." : isFrench ? "Placez une porte Hadamard (H) dans le premier emplacement de q0." : "Place a Hadamard (H) gate on the first slot of qubit q0.",
          check: activitySlots[0][0] === "H"
        },
        {
          text: isHindi ? "q1 के पहले स्लॉट में Pauli X गेट रखें।" : isKannada ? "q1 ಮೊದಲ ಸ್ಲಾಟ್‌ನಲ್ಲಿ ಪಾಲಿ X ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q1-இன் முதல் ஸ்லாட்டில் பாலி X கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta Pauli X en el primer slot de q1." : isFrench ? "Placez une porte Pauli X dans le premier emplacement de q1." : "Place a Pauli X gate on the first slot of qubit q1.",
          check: activitySlots[1][0] === "X"
        },
        {
          text: isHindi ? "q1 के दूसरे स्लॉट में CNOT (CX) गेट रखें।" : isKannada ? "q1 ಎರಡನೇ ಸ್ಲಾಟ್‌ನಲ್ಲಿ CNOT (CX) ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q1-இன் இரண்டாவது ஸ்லாட்டில் CNOT (CX) கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta CNOT (CX) en el segundo slot de q1." : isFrench ? "Placez une porte CNOT (CX) dans le deuxième emplacement de q1." : "Place a CNOT (CX) gate on the second slot of qubit q1.",
          check: activitySlots[1][1] === "CX"
        }
      ];
    }
    return [
      {
        text: isHindi ? "q0 के पहले स्लॉट में Pauli X गेट रखें।" : isKannada ? "q0 ಮೊದಲ ಸ್ಲಾಟ್‌ನಲ್ಲಿ ಪಾಲಿ X ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q0-இன் முதல் ஸ்லாட்டில் பாலி X கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta Pauli X en el primer slot de q0." : isFrench ? "Placez une porte Pauli X dans le premier emplacement de q0." : "Place a Pauli X gate on the first slot of qubit q0.",
        check: activitySlots[0][0] === "X"
      },
      {
        text: isHindi ? "q0 के दूसरे स्लॉट में Hadamard (H) गेट रखें।" : isKannada ? "q0 ಎರಡನೇ ಸ್ಲಾಟ್‌ನಲ್ಲಿ ಹಡಮಾರ್ಡ್ (H) ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q0-இன் இரண்டாவது ஸ்லாட்டில் ஹடமார்ட் (H) கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta Hadamard (H) en el segundo slot de q0." : isFrench ? "Placez une porte Hadamard (H) dans le deuxième emplacement de q0." : "Place a Hadamard (H) gate on the second slot of qubit q0.",
        check: activitySlots[0][1] === "H"
      },
      {
        text: isHindi ? "q1 के पहले स्लॉट में Pauli X गेट रखें।" : isKannada ? "q1 ಮೊದಲ ಸ್ಲಾಟ್‌ನಲ್ಲಿ ಪಾಲಿ X ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q1-இன் முதல் ஸ்லாட்டில் பாலி X கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta Pauli X en el primer slot de q1." : isFrench ? "Placez une porte Pauli X dans le premier emplacement de q1." : "Place a Pauli X gate on the first slot of qubit q1.",
        check: activitySlots[1][0] === "X"
      },
      {
        text: isHindi ? "q1 के तीसरे स्लॉट में CNOT (CX) गेट रखें।" : isKannada ? "q1 ಮೂರನೇ ಸ್ಲಾಟ್‌ನಲ್ಲಿ CNOT (CX) ಗೇಟ್ ಇರಿಸಿ." : isTamil ? "q1-இன் மூன்றாவது ஸ்லாட்டில் CNOT (CX) கேட்டை வைக்கவும்." : isSpanish ? "Coloca una compuerta CNOT (CX) en el tercer slot de q1." : isFrench ? "Placez une porte CNOT (CX) dans le troisième emplacement de q1." : "Place a CNOT (CX) gate on the third slot of qubit q1.",
        check: activitySlots[1][2] === "CX"
      }
    ];
  };

  // Real-time verification of active activity (2 Qubits state vector matching)
  useEffect(() => {
    if (view !== "activity") return;
    const epsilon = 0.05;
    let isMatched = false;

    const mag2 = (c) => c.re * c.re + c.im * c.im;

    if (activeActivity === 0) {
      const checkOther = mag2(activityState[1]) < epsilon && mag2(activityState[2]) < epsilon;
      if (checkOther && Math.abs(mag2(activityState[0]) - 0.5) < epsilon && Math.abs(mag2(activityState[3]) - 0.5) < epsilon) {
        const phase = activityState[0].re * activityState[3].re + activityState[0].im * activityState[3].im;
        if (phase > 0.4) isMatched = true;
      }
    } else if (activeActivity === 1) {
      const checkOther = mag2(activityState[1]) < epsilon && mag2(activityState[2]) < epsilon;
      if (checkOther && Math.abs(mag2(activityState[0]) - 0.5) < epsilon && Math.abs(mag2(activityState[3]) - 0.5) < epsilon) {
        const phase = activityState[0].re * activityState[3].re + activityState[0].im * activityState[3].im;
        if (phase < -0.4) isMatched = true;
      }
    } else if (activeActivity === 2) {
      const checkOther = mag2(activityState[0]) < epsilon && mag2(activityState[3]) < epsilon;
      if (checkOther && Math.abs(mag2(activityState[1]) - 0.5) < epsilon && Math.abs(mag2(activityState[2]) - 0.5) < epsilon) {
        const phase = activityState[1].re * activityState[2].re + activityState[1].im * activityState[2].im;
        if (phase > 0.4) isMatched = true;
      }
    } else if (activeActivity === 3) {
      const checkOther = mag2(activityState[0]) < epsilon && mag2(activityState[3]) < epsilon;
      if (checkOther && Math.abs(mag2(activityState[1]) - 0.5) < epsilon && Math.abs(mag2(activityState[2]) - 0.5) < epsilon) {
        const phase = activityState[1].re * activityState[2].re + activityState[1].im * activityState[2].im;
        if (phase < -0.4) isMatched = true;
      }
    }

    if (isMatched && !activityCompleted[activeActivity]) {
      setActivityCompleted((prev) => {
        const next = [...prev];
        next[activeActivity] = true;
        return next;
      });
    }
  }, [activityState, activeActivity, activityCompleted, view]);

  // Timer loop for validation quiz
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
          localStorage.setItem(`lab_completed_${userId}_1.2`, "Completed");
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

  const handleClear = () => {
    setSlots([
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null]
    ]);
  };

  const handleDrop = (rowIdx, colIdx, gateType) => {
    setSlots(prev => {
      const next = prev.map(row => [...row]);

      if (gateType === "CX") {
        if (next[0][colIdx] === null && next[1][colIdx] === null) {
          next[0][colIdx] = "CX_ctrl";
          next[1][colIdx] = "CX_tgt";
        }
      } else if (gateType === "CX12") {
        if (next[1][colIdx] === null && next[2][colIdx] === null) {
          next[1][colIdx] = "CX12_ctrl";
          next[2][colIdx] = "CX12_tgt";
        }
      } else if (gateType === "SWAP") {
        if (next[0][colIdx] === null && next[1][colIdx] === null) {
          next[0][colIdx] = "SWAP_ctrl";
          next[1][colIdx] = "SWAP_ctrl";
        }
      } else if (gateType === "CCX") {
        if (next[0][colIdx] === null && next[1][colIdx] === null && next[2][colIdx] === null) {
          next[0][colIdx] = "CCX_ctrl";
          next[1][colIdx] = "CCX_ctrl";
          next[2][colIdx] = "CCX_tgt";
        }
      } else {
        // Single qubit gates
        if (next[rowIdx][colIdx] === null) {
          next[rowIdx][colIdx] = gateType;
        }
      }

      return next;
    });
  };

  const handleRemoveGate = (rowIdx, colIdx) => {
    setSlots(prev => {
      const next = prev.map(row => [...row]);
      const currentVal = next[rowIdx][colIdx];

      if (currentVal === "CX_ctrl" || currentVal === "CX_tgt") {
        next[0][colIdx] = null;
        next[1][colIdx] = null;
      } else if (currentVal === "CX12_ctrl" || currentVal === "CX12_tgt") {
        next[1][colIdx] = null;
        next[2][colIdx] = null;
      } else if (currentVal === "SWAP_ctrl") {
        next[0][colIdx] = null;
        next[1][colIdx] = null;
      } else if (currentVal === "CCX_ctrl" || currentVal === "CCX_tgt") {
        next[0][colIdx] = null;
        next[1][colIdx] = null;
        next[2][colIdx] = null;
      } else {
        next[rowIdx][colIdx] = null;
      }

      return next;
    });
  };

  // Activity 2-qubit drop handlers
  const handleActivityClear = () => {
    setActivitySlots([
      [null, null, null, null, null],
      [null, null, null, null, null]
    ]);
  };

  const handleActivityDrop = (rowIdx, colIdx, gateType) => {
    setActivitySlots(prev => {
      const next = prev.map(row => [...row]);

      if (gateType === "CX") {
        if (next[0][colIdx] === null && next[1][colIdx] === null) {
          next[0][colIdx] = "CX_ctrl";
          next[1][colIdx] = "CX_tgt";
        }
      } else {
        if (next[rowIdx][colIdx] === null) {
          next[rowIdx][colIdx] = gateType;
        }
      }

      return next;
    });
  };

  const handleActivityRemoveGate = (rowIdx, colIdx) => {
    setActivitySlots(prev => {
      const next = prev.map(row => [...row]);
      const currentVal = next[rowIdx][colIdx];

      if (currentVal === "CX_ctrl" || currentVal === "CX_tgt") {
        next[0][colIdx] = null;
        next[1][colIdx] = null;
      } else {
        next[rowIdx][colIdx] = null;
      }

      return next;
    });
  };

  const startTour = () => {
    setView("builder");
    setTourStep(0);
  };

  const nextTourStep = () => {
    if (tourStep === null) return;
    if (tourStep < dict.tour_steps.length - 1) {
      setTourStep(prev => prev + 1);
    } else {
      setTourStep(null);
    }
  };

  const prevTourStep = () => {
    if (tourStep === null) return;
    if (tourStep > 0) {
      setTourStep(prev => prev - 1);
    }
  };

  const skipTour = () => setTourStep(null);

  // SVG drawing of current circuit layout for printing report
  const getCircuitSVGForReport = () => {
    let elements = "";
    const colSpacing = 80;

    elements += `<line x1="20" y1="40" x2="480" y2="40" stroke="#000" stroke-width="1.5" />`;
    elements += `<line x1="20" y1="90" x2="480" y2="90" stroke="#000" stroke-width="1.5" />`;
    elements += `<line x1="20" y1="140" x2="480" y2="140" stroke="#000" stroke-width="1.5" />`;

    elements += `<text x="10" y="44" font-family="monospace" font-size="12">q0</text>`;
    elements += `<text x="10" y="94" font-family="monospace" font-size="12">q1</text>`;
    elements += `<text x="10" y="144" font-family="monospace" font-size="12">q2</text>`;

    for (let col = 0; col < 5; col++) {
      const cx = 70 + col * colSpacing;
      const g0 = slots[0][col];
      const g1 = slots[1][col];
      const g2 = slots[2][col];

      if (g0 && ["H", "X", "Y", "Z"].includes(g0)) {
        elements += `<rect x="${cx - 15}" y="25" width="30" height="30" fill="#fff" stroke="#000" stroke-width="1.5" rx="4" />`;
        elements += `<text x="${cx}" y="44" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold">${g0}</text>`;
      }
      if (g1 && ["H", "X", "Y", "Z"].includes(g1)) {
        elements += `<rect x="${cx - 15}" y="75" width="30" height="30" fill="#fff" stroke="#000" stroke-width="1.5" rx="4" />`;
        elements += `<text x="${cx}" y="94" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold">${g1}</text>`;
      }
      if (g2 && ["H", "X", "Y", "Z"].includes(g2)) {
        elements += `<rect x="${cx - 15}" y="125" width="30" height="30" fill="#fff" stroke="#000" stroke-width="1.5" rx="4" />`;
        elements += `<text x="${cx}" y="144" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold">${g2}</text>`;
      }

      if (g0 === "CX_ctrl" && g1 === "CX_tgt") {
        elements += `<line x1="${cx}" y1="40" x2="${cx}" y2="90" stroke="#000" stroke-width="1.5" />`;
        elements += `<circle cx="${cx}" cy="40" r="3" fill="#000" />`;
        elements += `<circle cx="${cx}" cy="90" r="6" fill="#fff" stroke="#000" stroke-width="1.5" />`;
        elements += `<line x1="${cx - 6}" y1="90" x2="${cx + 6}" y2="90" stroke="#000" stroke-width="1" />`;
        elements += `<line x1="${cx}" y1="84" x2="${cx}" y2="96" stroke="#000" stroke-width="1" />`;
      }
      if (g1 === "CX12_ctrl" && g2 === "CX12_tgt") {
        elements += `<line x1="${cx}" y1="90" x2="${cx}" y2="140" stroke="#000" stroke-width="1.5" />`;
        elements += `<circle cx="${cx}" cy="90" r="3" fill="#000" />`;
        elements += `<circle cx="${cx}" cy="140" r="6" fill="#fff" stroke="#000" stroke-width="1.5" />`;
        elements += `<line x1="${cx - 6}" y1="140" x2="${cx + 6}" y2="140" stroke="#000" stroke-width="1" />`;
        elements += `<line x1="${cx}" y1="134" x2="${cx}" y2="146" stroke="#000" stroke-width="1" />`;
      }
      if (g0 === "SWAP_ctrl" && g1 === "SWAP_ctrl") {
        elements += `<line x1="${cx}" y1="40" x2="${cx}" y2="90" stroke="#000" stroke-width="1.5" />`;
        elements += `<text x="${cx}" y="44" text-anchor="middle" font-size="12" font-weight="bold">×</text>`;
        elements += `<text x="${cx}" y="94" text-anchor="middle" font-size="12" font-weight="bold">×</text>`;
      }
      if (g0 === "CCX_ctrl" && g1 === "CCX_ctrl" && g2 === "CCX_tgt") {
        elements += `<line x1="${cx}" y1="40" x2="${cx}" y2="140" stroke="#000" stroke-width="1.5" />`;
        elements += `<circle cx="${cx}" cy="40" r="3" fill="#000" />`;
        elements += `<circle cx="${cx}" cy="90" r="3" fill="#000" />`;
        elements += `<circle cx="${cx}" cy="140" r="6" fill="#fff" stroke="#000" stroke-width="1.5" />`;
        elements += `<line x1="${cx - 6}" y1="140" x2="${cx + 6}" y2="140" stroke="#000" stroke-width="1" />`;
        elements += `<line x1="${cx}" y1="134" x2="${cx}" y2="146" stroke="#000" stroke-width="1" />`;
      }
    }

    return `<svg width="500" height="180" viewBox="0 0 500 180" style="background:#fff; border:1px solid #ccc; border-radius:8px; display:block; margin:20px auto;">${elements}</svg>`;
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
      day: "numeric"
    });

    const circuitHtml = getCircuitSVGForReport();

    w.document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>Experiment 1.2 Report — Bell State Entanglement</title>
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

<h1>LAB REPORT - EXPERIMENT 1.2</h1>
<h2>Quantum Mechanics: Bell State Entanglement & Multi-Qubit Operators</h2>

<h3>1. Aim</h3>
<p>The objective of this laboratory module is to investigate multi-qubit systems, demonstrating how entangling operators (CNOT) produce correlated, non-separable quantum states. We construct and verify the four maximally entangled Bell states (|&Phi;<sup>&plus;</sup>&rang;, |&Phi;<sup>&minus;</sup>&rang;, |&Psi;<sup>&plus;</sup>&rang;, and |&Psi;<sup>&minus;</sup>&rang;) and evaluate the action of SWAP and Toffoli gates.</p>

<h3>2. Apparatus</h3>
<ul>
  <li>3-qubit Hilbert space quantum simulator engine</li>
  <li>Controlled operators palette (CNOT, SWAP, Toffoli/CCNOT)</li>
  <li>Three-line circuit builder interface</li>
  <li>Reduced density matrix Bloch vector calculator</li>
  <li>State Vector representation analyzer</li>
</ul>

<h3>3. Mathematical Principles</h3>
<p>In multi-qubit quantum mechanics, entanglement represents non-separability. For a 2-qubit system, states cannot be factored into the tensor product of two single-qubit states. Applying a CNOT gate on target qubit q1 controlled by q0 inside the state (|0&rang;+|1&rang;)/&radic;2 &otimes; |0&rang; maps the system to the maximally entangled Bell state: |&Phi;<sup>&plus;</sup>&rang; = (|00&rang; + |11&rang;)/&radic;2. Quantum measurements on one qubit collapse the wave packet, instantly setting the state of the other.</p>

<h3>4. Active Circuit Layout</h3>
${circuitHtml}

<h3>5. Final State Vector Amplitudes</h3>
<ul>
  <li>Computational Amplitudes:
    <ul>
      <li>|000&rang;: <strong>${activeState[0].re.toFixed(3)} + ${activeState[0].im.toFixed(3)}i</strong></li>
      <li>|001&rang;: <strong>${activeState[1].re.toFixed(3)} + ${activeState[1].im.toFixed(3)}i</strong></li>
      <li>|010&rang;: <strong>${activeState[2].re.toFixed(3)} + ${activeState[2].im.toFixed(3)}i</strong></li>
      <li>|011&rang;: <strong>${activeState[3].re.toFixed(3)} + ${activeState[3].im.toFixed(3)}i</strong></li>
      <li>|100&rang;: <strong>${activeState[4].re.toFixed(3)} + ${activeState[4].im.toFixed(3)}i</strong></li>
      <li>|101&rang;: <strong>${activeState[5].re.toFixed(3)} + ${activeState[5].im.toFixed(3)}i</strong></li>
      <li>|110&rang;: <strong>${activeState[6].re.toFixed(3)} + ${activeState[6].im.toFixed(3)}i</strong></li>
      <li>|111&rang;: <strong>${activeState[7].re.toFixed(3)} + ${activeState[7].im.toFixed(3)}i</strong></li>
    </ul>
  </li>
  <li>Report Date: <strong>${reportDate}</strong></li>
</ul>

<h3>6. Conclusion</h3>
<p>Through systematic circuit configuration, the creation of maximally entangled states was successfully completed. Observation of individual qubit Bloch coordinates confirms that as entanglement increases, the local Bloch vector radius collapses to zero, confirming the transition from pure local states to mixed states, validating the mathematical model of quantum entanglement.</p>

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
    doc.text("Bell State Entanglement • Experiment 1.2", 148, 124, { align: "center" });

    doc.setDrawColor(201, 162, 39);
    doc.line(80, 142, 217, 142);

    const certDate = new Date().toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric"
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

    doc.save("Aether_Completion_Certificate_Exp_1.2.pdf");
  };

  const closeModal = () => setActiveTopic(null);

  const scrollToTopic = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="learn-page">
      {/* MODE TABS AND THEME/LANG ACTIONBAR */}
      <nav className="wiser-nav scrolled" style={{ position: "sticky" }}>
        <div className="container-xl d-flex align-items-center justify-content-between">
          <Link href="/experiments" className="d-flex align-items-center gap-2" style={{ textDecoration: "none", color: "var(--text)" }}>
            <ArrowLeft size={16} />
            <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{dict.nav_exit_workspace}</span>
          </Link>

          <div className="builder-tab-nav">
            <button className={`builder-tab-btn ${view === "learn" ? "active" : ""}`} onClick={() => setView("learn")}>
              {(CONSISTENT_NAV[lang] || CONSISTENT_NAV.en).theory}
            </button>
            <button className={`builder-tab-btn ${view === "builder" ? "active" : ""}`} onClick={() => setView("builder")}>
              {(CONSISTENT_NAV[lang] || CONSISTENT_NAV.en).playground}
            </button>
            <button className={`builder-tab-btn ${view === "activity" ? "active" : ""}`} onClick={() => setView("activity")}>
              {(CONSISTENT_NAV[lang] || CONSISTENT_NAV.en).activity}
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
            <button
              className={`builder-tab-btn ${view === "credentials" ? "active" : ""}`}
              onClick={() => setView("credentials")}
            >
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
              {Object.keys(LANG_META).map((key) => (
                <option key={key} value={key}>
                  {LANG_META[key].flag} {LANG_META[key].label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {/* RENDER MODE: AIM AND THEORY */}
      {view === "learn" && (
        <div className="view-fade-in">
          {/* HERO SECTION */}
          <section className="learn-hero">
            <div className="learn-hero-inner">
              <p className="learn-pill">{dict.title_basics}</p>
              <h1>{dict.hero_title}</h1>
              <p className="learn-hero-sub">{dict.hero_sub}</p>

              <div className="learn-hero-buttons">
                <button className="learn-cta-primary" onClick={() => scrollToTopic("cnot-gate")}>
                  {dict.btn_start_learning} &rarr;
                </button>
                <button className="learn-cta-secondary d-flex align-items-center gap-2" onClick={() => setView("builder")}>
                  <Sparkles size={14} className="text-info" />
                  <span>{dict.btn_launch_playground}</span>
                </button>
              </div>

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
          </section>

          {/* TOPIC CONCEPT GRIDS */}
          <section className="learn-topics">
            <div className="learn-topics-header">
              <h2>{dict.section_title}</h2>
              <p>{dict.section_sub}</p>
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
                Learn with Videos
              </h2>
              <p style={{ fontSize: "0.87rem", color: "var(--text-3)", marginBottom: 28 }}>
                Explore quantum entanglement, Bell states, and multi-qubit gates through expert-curated videos.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                {[
                  {
                    id: "ZuvK-od647c",
                    title: "Quantum Entanglement Explained",
                    channel: "Veritasium",
                    desc: "Derek Muller dives into what entanglement really means, debunking common misconceptions with clarity and insight."
                  },
                  {
                    id: "DbbWx2COU0E",
                    title: "Bell States & Quantum Teleportation",
                    channel: "PBS Space Time",
                    desc: "A deep dive into the four Bell states, quantum correlations, and how they enable quantum teleportation protocols."
                  },
                  {
                    id: "7MdEHsRZxvo",
                    title: "CNOT, SWAP & the Toffoli Gate",
                    channel: "IBM Research",
                    desc: "IBM's researchers break down multi-qubit gates — CNOT, SWAP, and Toffoli — with circuit diagrams and real quantum hardware demos."
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

          {/* DYNAMIC SCROLL TOPICS SECTIONS */}
          {topics.map((topic, index) => (
            <section key={topic.id} id={topic.id} className={`learn-section ${index % 2 === 1 ? "learn-section-reverse" : ""}`}>
              <div className="learn-section-text">
                <p className="learn-section-kicker">{dict.concept_kicker} {index + 1} {dict.concept_of} {topics.length}</p>
                <h2>{topic.label}</h2>
                <p className="learn-section-tagline">{topic.tag}</p>

                <p className="learn-section-description">{topic.longContent.description}</p>

                <ul style={{ paddingLeft: "20px", marginTop: "14px" }}>
                  {topic.bullets.map((b, i) => (
                    <li key={i} style={{ marginBottom: "8px", lineHeight: "1.6" }}>{b}</li>
                  ))}
                </ul>

                {topic.longContent.table && (
                  <div className="learn-basis-table">
                    <h4>{topic.longContent.table.title}</h4>
                    <table>
                      <thead>
                        <tr>
                          <th>{dict.table_gate}</th>
                          <th>{dict.table_inputs}</th>
                          <th>{dict.table_outputs}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topic.longContent.table.rows.map((row, i) => (
                          <tr key={i}>
                            <td><strong>{row.gate}</strong></td>
                            <td>{row.inputs}</td>
                            <td>{row.outputs}</td>
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

                {topic.id === "cnot-gate" && (
                  <div className="learn-qubit-states" style={{ marginTop: "14px", width: "100%" }}>
                    <h4>{dict.math_vector_title}</h4>
                    <div className="state-item">
                      <span className="state-label">{dict.math_vector_def}</span>
                      <span className="state-value" style={{ fontFamily: "monospace", fontWeight: 700 }}>
                        |ψ⟩ = c₀₀|00⟩ + c₀₁|01⟩ + c₁₀|10⟩ + c₁₁|11⟩
                      </span>
                    </div>
                    <div className="state-item">
                      <span className="state-label">{dict.math_vector_constraint}</span>
                      <span className="state-value" style={{ fontFamily: "monospace" }}>
                        ∑|c_ij|² = 1
                      </span>
                    </div>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-3)", margin: "8px 0 0 0", lineHeight: "1.4" }}>
                      {dict.math_vector_desc}
                    </p>
                  </div>
                )}
              </div>
            </section>
          ))}

          {/* FINAL MODULE CTA */}
          <section className="learn-final-cta">
            <div className="learn-final-inner">
              <h2>{dict.cta_title}</h2>
              <p>{dict.cta_desc}</p>
              <div className="learn-final-buttons">
                <button className="learn-cta-primary" onClick={() => setView("builder")}>
                  {dict.cta_btn_playground}
                </button>
                <button className="learn-cta-secondary" onClick={() => scrollToTopic("cnot-gate")}>
                  {dict.cta_btn_top}
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* RENDER MODE: CIRCUIT PLAYGROUND */}
      {view === "builder" && (
        <div className="view-fade-in">
          <section className="builder-playground-section" id="sandbox-root">
            <div className="builder-header-bar">
              <div>
                <h2>{dict.builder_title}</h2>
                <p>{dict.builder_sub}</p>
              </div>
              <div className="builder-header-actions">
                <button className="btn-danger-wiser d-flex align-items-center gap-1" onClick={handleClear}>
                  <RotateCcw size={14} />
                  <span>{dict.btn_clear_circuit}</span>
                </button>
              </div>
            </div>

            <div className="builder-grid-container">
              {/* LEFT SIDE: TOOLBOX AND CIRCUIT */}
              <div className="builder-left-panel">
                {/* GATE PALETTE */}
                <div className="builder-toolbox-card">
                  <h3>{dict.toolbox_title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-3)", marginBottom: 12 }}>
                    {dict.toolbox_desc}
                  </p>

                  <div className="gates-palette-grid">
                    {[
                      { type: "H", desc: "Hadamard", color: "var(--accent)" },
                      { type: "X", desc: "Pauli X", color: "#f43f5e" },
                      { type: "Y", desc: "Pauli Y", color: "#10b981" },
                      { type: "Z", desc: "Pauli Z", color: "var(--accent-2)" },
                      { type: "CX", desc: "CNOT q0->q1", color: "var(--accent)" },
                      { type: "CX12", desc: "CNOT q1->q2", color: "var(--accent)" },
                      { type: "SWAP", desc: "SWAP q0,q1", color: "var(--accent-2)" },
                      { type: "CCX", desc: "Toffoli", color: "#f43f5e" }
                    ].map((gate) => (
                      <button
                        key={gate.type}
                        draggable
                        onDragStart={() => setDraggedGate(gate.type)}
                        onClick={() => {
                          for (let c = 0; c < 5; c++) {
                            for (let r = 0; r < 3; r++) {
                              if (slots[r][c] === null) {
                                handleDrop(r, c, gate.type);
                                return;
                              }
                            }
                          }
                        }}
                        className="palette-gate-button"
                        style={{ borderColor: gate.color }}
                      >
                        <span className="gate-sym" style={{ color: gate.color }}>{gate.type}</span>
                        <span className="gate-desc">{gate.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CIRCUIT TIMELINE WIRES */}
                <div className="builder-timeline-card">
                  <h3>{dict.timeline_title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-3)", marginBottom: 12 }}>
                    {dict.timeline_desc}
                  </p>

                  <div className="unified-timeline-card">
                    {/* Qubit labels on the left */}
                    <div className="timeline-qubit-labels-col">
                      {[0, 1, 2].map((rowIdx) => (
                        <div key={rowIdx} className="timeline-qubit-label-item">
                          <span className="qubit-register-id">q{rowIdx}</span>
                          <span className="qubit-register-state">|0⟩</span>
                        </div>
                      ))}
                    </div>

                    {/* Timeline grid container holding wires and slots */}
                    <div className="timeline-grid-container-inner">
                      {/* Three horizontal wire lines */}
                      <div className="timeline-horizontal-wires">
                        <div className="timeline-wire-line-item wire-0" />
                        <div className="timeline-wire-line-item wire-1" />
                        <div className="timeline-wire-line-item wire-2" />
                      </div>

                      {/* Columns */}
                      <div className="timeline-columns-wrapper">
                        {[0, 1, 2, 3, 4].map((colIdx) => {
                          const val0 = slots[0][colIdx];
                          const val1 = slots[1][colIdx];
                          const val2 = slots[2][colIdx];

                          // Check if there is a multi-qubit connector to render in this column
                          let connector = null;
                          if (val0 === "CX_ctrl" && val1 === "CX_tgt") {
                            connector = <div className="multi-qubit-connector cx-0-1" />;
                          } else if (val1 === "CX12_ctrl" && val2 === "CX12_tgt") {
                            connector = <div className="multi-qubit-connector cx-1-2" />;
                          } else if (val0 === "SWAP_ctrl" && val1 === "SWAP_ctrl") {
                            connector = <div className="multi-qubit-connector swap-0-1" />;
                          } else if (val0 === "CCX_ctrl" && val1 === "CCX_ctrl" && val2 === "CCX_tgt") {
                            connector = <div className="multi-qubit-connector ccx-0-1-2" />;
                          }

                          return (
                            <div key={colIdx} className="timeline-grid-column">
                              {connector}
                              {[0, 1, 2].map((rowIdx) => {
                                const gate = slots[rowIdx][colIdx];
                                return (
                                  <div
                                    key={rowIdx}
                                    className={`timeline-slot-box ${gate ? "occupied" : "empty"}`}
                                    onClick={() => {
                                      if (gate) handleRemoveGate(rowIdx, colIdx);
                                    }}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => {
                                      e.stopPropagation();
                                      if (draggedGate) {
                                        handleDrop(rowIdx, colIdx, draggedGate);
                                        setDraggedGate(null);
                                      }
                                    }}
                                  >
                                    {gate ? (
                                      <div className="dropped-gate-badge">
                                        {gate === "CX_ctrl" || gate === "CX12_ctrl" || gate === "CCX_ctrl" ? (
                                          <div className="quantum-control-dot" />
                                        ) : gate === "CX_tgt" || gate === "CX12_tgt" || gate === "CCX_tgt" ? (
                                          <div className="quantum-target-circle-plus" />
                                        ) : gate === "SWAP_ctrl" ? (
                                          <div className="quantum-swap-cross">×</div>
                                        ) : (
                                          <span className="dropped-gate-title">{gate}</span>
                                        )}
                                        <button
                                          className="remove-gate-btn"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleRemoveGate(rowIdx, colIdx);
                                          }}
                                        >
                                          &times;
                                        </button>
                                      </div>
                                    ) : (
                                      <span className="slot-idx-num">{colIdx + 1}</span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* STATE VECTOR & HISTOGRAM CARDS SIDE-BY-SIDE */}
                <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: "280px" }}>
                    {/* STATE VECTOR AMPLITUDES */}
                    <div className="builder-toolbox-card" style={{ height: "100%", margin: 0 }}>
                      <h3>{dict.builder_state_vector}</h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 8,
                          fontSize: "0.8rem",
                          fontFamily: "monospace",
                          marginTop: 10
                        }}
                      >
                        {[
                          "|000⟩", "|001⟩", "|010⟩", "|011⟩",
                          "|100⟩", "|101⟩", "|110⟩", "|111⟩"
                        ].map((label, idx) => {
                          const amplitude = activeState[idx];
                          const probability = (amplitude.re * amplitude.re + amplitude.im * amplitude.im) * 100;
                          return (
                            <div
                              key={label}
                              style={{
                                padding: "6px 10px",
                                background: probability > 5 ? "var(--accent-glow)" : "rgba(120, 120, 128, 0.04)",
                                border: "1px solid var(--border)",
                                borderRadius: 6,
                                display: "flex",
                                justifyContent: "space-between"
                              }}
                            >
                              <span style={{ color: "var(--text-2)", fontWeight: 700 }}>{label}</span>
                              <span style={{ color: probability > 5 ? "var(--accent)" : "var(--text-3)" }}>
                                {amplitude.re.toFixed(2)} {amplitude.im >= 0 ? "+" : ""}{amplitude.im.toFixed(2)}i
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div style={{ flex: 1, minWidth: "280px" }}>
                    {/* HISTOGRAM PROBABILITIES */}
                    <div className="builder-histogram-card" style={{ height: "100%", margin: 0 }}>
                      <h3>{dict.histogram_title}</h3>
                      <p style={{ fontSize: "0.82rem", color: "var(--text-3)", marginBottom: 16 }}>
                        {dict.histogram_desc}
                      </p>

                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {[
                          "|000⟩", "|001⟩", "|010⟩", "|011⟩",
                          "|100⟩", "|101⟩", "|110⟩", "|111⟩"
                        ].map((label, idx) => {
                          const amplitude = activeState[idx];
                          const probability = (amplitude.re * amplitude.re + amplitude.im * amplitude.im) * 100;

                          return (
                            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <span style={{ fontSize: "0.78rem", fontFamily: "monospace", width: 44, fontWeight: 700 }}>{label}</span>
                              <div style={{ flex: 1, height: 10, background: "rgba(120, 120, 128, 0.08)", borderRadius: 5, overflow: "hidden" }}>
                                <div
                                  style={{
                                    width: `${probability}%`,
                                    height: "100%",
                                    background: "var(--accent)",
                                    transition: "width 0.3s ease"
                                  }}
                                />
                              </div>
                              <span style={{ fontSize: "0.78rem", width: 42, textAlign: "right" }}>{probability.toFixed(0)}%</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: METRICS & VISUALIZATIONS */}
              <div className="builder-right-panel">
                {/* BLOCH SPHERES (3 Spheres side-by-side) */}
                <div className="builder-sphere-card">
                  <h3>{dict.bloch_title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-3)", marginBottom: 16 }}>
                    {dict.bloch_desc}
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
                      <div>
                        <div style={{ fontSize: "0.72rem", fontWeight: 700, textAlign: "center", color: "var(--text-3)" }}>Qubit q0</div>
                        <Interactive3DBlochSphere x={blochQ0.x} y={blochQ0.y} z={blochQ0.z} label="q0" />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.72rem", fontWeight: 700, textAlign: "center", color: "var(--text-3)" }}>Qubit q1</div>
                        <Interactive3DBlochSphere x={blochQ1.x} y={blochQ1.y} z={blochQ1.z} label="q1" />
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, textAlign: "center", color: "var(--text-3)" }}>Qubit q2</div>
                      <Interactive3DBlochSphere x={blochQ2.x} y={blochQ2.y} z={blochQ2.z} label="q2" />
                    </div>
                  </div>
                </div>

                <button
                  className="learn-cta-primary w-100 py-3"
                  onClick={() => setView("activity")}
                  style={{ fontSize: "0.88rem", fontWeight: 700 }}
                >
                  {dict.nav_activities} &rarr;
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* RENDER MODE: ENTANGLEMENT ACTIVITIES (2 Qubits with Step checklist tour) */}
      {view === "activity" && (
        <div className="view-fade-in">
          <section className="builder-playground-section" id="activities-root">
            <div className="builder-header-bar">
              <div>
                <h2>{dict.activity_title}</h2>
                <p>{dict.activity_desc}</p>
              </div>
              <div className="builder-header-actions">
                <button className="btn-danger-wiser d-flex align-items-center gap-1" onClick={handleActivityClear}>
                  <RotateCcw size={14} />
                  <span>{dict.btn_clear_circuit}</span>
                </button>
              </div>
            </div>

            <div className="builder-grid-container">
              {/* LEFT SIDE: CHALLENGE SELECTOR & 2-QUBIT BUILDER */}
              <div className="builder-left-panel">
                {/* Challenges Selection list */}
                <div className="activity-card" style={{ padding: 20 }}>
                  <h3>Bell State Challenges</h3>
                  <div className="activity-list" style={{ marginTop: 10 }}>
                    {[
                      { id: 0, label: dict.activity_phi_plus, state: "|Φ⁺⟩ = (|00⟩ + |11⟩)/√2" },
                      { id: 1, label: dict.activity_phi_minus, state: "|Φ⁻⟩ = (|00⟩ - |11⟩)/√2" },
                      { id: 2, label: dict.activity_psi_plus, state: "|Ψ⁺⟩ = (|01⟩ + |10⟩)/√2" },
                      { id: 3, label: dict.activity_psi_minus, state: "|Ψ⁻⟩ = (|01⟩ - |10⟩)/√2" }
                    ].map((activity) => {
                      const isActive = activeActivity === activity.id;
                      const isDone = activityCompleted[activity.id];

                      return (
                        <div
                          key={activity.id}
                          className={`activity-item ${isActive ? "active" : ""} ${isDone ? "completed" : ""}`}
                          onClick={() => {
                            setActiveActivity(activity.id);
                            handleActivityClear();
                          }}
                          style={{
                            padding: "10px 14px",
                            display: "flex",
                            justifyContent: "space-between",
                            borderRadius: 10,
                            cursor: "pointer",
                            transition: "all 0.2s"
                          }}
                        >
                          <div>
                            <div className="activity-label" style={{ fontWeight: 700 }}>{activity.label}</div>
                            <div style={{ fontSize: "0.72rem", color: "var(--text-3)", marginTop: 2 }}>{activity.state}</div>
                          </div>
                          {isDone ? (
                            <span className="activity-check-icon">
                              <CheckCircle2 size={18} />
                            </span>
                          ) : isActive ? (
                            <span className="tag-pill" style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(6,182,212,0.2)", fontSize: "0.65rem", padding: "2px 8px", borderRadius: 4 }}>
                              Active Challenge
                            </span>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2-QUBIT TOOLBOX GATE PALETTE */}
                <div className="builder-toolbox-card" style={{ padding: 20 }}>
                  <h3>Gate Suite</h3>
                  <div className="gates-palette-grid">
                    {[
                      { type: "H", desc: "Hadamard", color: "var(--accent)" },
                      { type: "X", desc: "Pauli X", color: "#f43f5e" },
                      { type: "Y", desc: "Pauli Y", color: "#10b981" },
                      { type: "Z", desc: "Pauli Z", color: "var(--accent-2)" },
                      { type: "CX", desc: "CNOT q0->q1", color: "var(--accent)" }
                    ].map((gate) => (
                      <button
                        key={gate.type}
                        draggable
                        onDragStart={() => setActivityDraggedGate(gate.type)}
                        onClick={() => {
                          for (let c = 0; c < 5; c++) {
                            for (let r = 0; r < 2; r++) {
                              if (activitySlots[r][c] === null) {
                                handleActivityDrop(r, c, gate.type);
                                return;
                              }
                            }
                          }
                        }}
                        className="palette-gate-button"
                        style={{ borderColor: gate.color }}
                      >
                        <span className="gate-sym" style={{ color: gate.color }}>{gate.type}</span>
                        <span className="gate-desc">{gate.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2-QUBIT TIMELINE WIRES */}
                <div className="builder-timeline-card" style={{ padding: 20 }}>
                  <h3>2-Qubit Timeline</h3>
                  <div className="unified-timeline-card" style={{ height: 160 }}>
                    {/* Qubit labels on the left */}
                    <div className="timeline-qubit-labels-col" style={{ gap: 32 }}>
                      {[0, 1].map((rowIdx) => (
                        <div key={rowIdx} className="timeline-qubit-label-item">
                          <span className="qubit-register-id">q{rowIdx}</span>
                          <span className="qubit-register-state">|0⟩</span>
                        </div>
                      ))}
                    </div>

                    {/* Timeline grid container holding wires and slots */}
                    <div className="timeline-grid-container-inner" style={{ height: 120 }}>
                      {/* Two horizontal wire lines */}
                      <div className="timeline-horizontal-wires">
                        <div className="timeline-wire-line-item wire-0" style={{ top: 22 }} />
                        <div className="timeline-wire-line-item wire-1" style={{ top: 98 }} />
                      </div>

                      {/* Columns */}
                      <div className="timeline-columns-wrapper">
                        {[0, 1, 2, 3, 4].map((colIdx) => {
                          const val0 = activitySlots[0][colIdx];
                          const val1 = activitySlots[1][colIdx];

                          // Check if there is a CNOT connector in this column
                          let connector = null;
                          if (val0 === "CX_ctrl" && val1 === "CX_tgt") {
                            connector = <div className="multi-qubit-connector cx-0-1" />;
                          }

                          return (
                            <div key={colIdx} className="timeline-grid-column">
                              {connector}
                              {[0, 1].map((rowIdx) => {
                                const gate = activitySlots[rowIdx][colIdx];
                                return (
                                  <div
                                    key={rowIdx}
                                    className={`timeline-slot-box ${gate ? "occupied" : "empty"}`}
                                    onClick={() => {
                                      if (gate) handleActivityRemoveGate(rowIdx, colIdx);
                                    }}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={(e) => {
                                      e.stopPropagation();
                                      if (activityDraggedGate) {
                                        handleActivityDrop(rowIdx, colIdx, activityDraggedGate);
                                        setActivityDraggedGate(null);
                                      }
                                    }}
                                  >
                                    {gate ? (
                                      <div className="dropped-gate-badge">
                                        {gate === "CX_ctrl" ? (
                                          <div className="quantum-control-dot" />
                                        ) : gate === "CX_tgt" ? (
                                          <div className="quantum-target-circle-plus" />
                                        ) : (
                                          <span className="dropped-gate-title">{gate}</span>
                                        )}
                                        <button
                                          className="remove-gate-btn"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            handleActivityRemoveGate(rowIdx, colIdx);
                                          }}
                                        >
                                          &times;
                                        </button>
                                      </div>
                                    ) : (
                                      <span className="slot-idx-num">{colIdx + 1}</span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* STATE VECTOR & HISTOGRAM CARDS SIDE-BY-SIDE */}
                <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: "280px" }}>
                    {/* 2-QUBIT STATE VECTOR AMPLITUDES */}
                    <div className="builder-toolbox-card" style={{ height: "100%", margin: 0 }}>
                      <h3>State Vector Amplitudes</h3>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, fontSize: "0.8rem", fontFamily: "monospace", marginTop: 10 }}>
                        {["|00⟩", "|01⟩", "|10⟩", "|11⟩"].map((label, idx) => {
                          const amplitude = activityState[idx];
                          const probability = (amplitude.re * amplitude.re + amplitude.im * amplitude.im) * 100;
                          return (
                            <div
                              key={label}
                              style={{
                                padding: "6px 10px",
                                background: probability > 5 ? "var(--accent-glow)" : "rgba(120, 120, 128, 0.04)",
                                border: "1px solid var(--border)",
                                borderRadius: 6,
                                display: "flex",
                                justifyContent: "space-between"
                              }}
                            >
                              <span style={{ color: "var(--text-2)", fontWeight: 700 }}>{label}</span>
                              <span style={{ color: probability > 5 ? "var(--accent)" : "var(--text-3)" }}>
                                {amplitude.re.toFixed(2)} {amplitude.im >= 0 ? "+" : ""}{amplitude.im.toFixed(2)}i
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div style={{ flex: 1, minWidth: "280px" }}>
                    {/* 2-QUBIT HISTOGRAM PROBABILITIES */}
                    <div className="builder-histogram-card" style={{ height: "100%", margin: 0 }}>
                      <h3>Probability Histogram</h3>
                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {["|00⟩", "|01⟩", "|10⟩", "|11⟩"].map((label, idx) => {
                          const amplitude = activityState[idx];
                          const probability = (amplitude.re * amplitude.re + amplitude.im * amplitude.im) * 100;

                          return (
                            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <span style={{ fontSize: "0.78rem", fontFamily: "monospace", width: 34, fontWeight: 700 }}>{label}</span>
                              <div style={{ flex: 1, height: 10, background: "rgba(120, 120, 128, 0.08)", borderRadius: 5, overflow: "hidden" }}>
                                <div
                                  style={{
                                    width: `${probability}%`,
                                    height: "100%",
                                    background: "var(--accent)",
                                    transition: "width 0.3s ease"
                                  }}
                                />
                              </div>
                              <span style={{ fontSize: "0.78rem", width: 42, textAlign: "right" }}>{probability.toFixed(0)}%</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: TOUR CHECKLIST, BLOCH SPHERES, 2-QUBIT STATE METRICS */}
              <div className="builder-right-panel">
                {/* Guided steps Checklist Card */}
                <div className="activity-card" style={{ border: "1px solid var(--accent)", background: "rgba(6, 182, 212, 0.03)" }}>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Sparkles size={16} className="text-info" />
                    <h3 style={{ margin: 0 }}>Interactive Step-by-Step Checklist</h3>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-3)", marginBottom: 12 }}>
                    Follow the guided checklist below to build this Bell State:
                  </p>

                  <div className="d-flex flex-column gap-3 mt-3">
                    {getGuidedStepsForActivity(activeActivity).map((step, idx) => (
                      <div
                        key={idx}
                        className="d-flex align-items-start gap-2"
                        style={{
                          padding: "10px 12px",
                          background: step.check ? "rgba(16, 185, 129, 0.08)" : "var(--bg-canvas)",
                          border: step.check ? "1px solid #10b981" : "1px solid var(--border)",
                          borderRadius: 8,
                          transition: "all 0.25s ease"
                        }}
                      >
                        <div
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            border: step.check ? "none" : "1.5px solid var(--text-3)",
                            background: step.check ? "#10b981" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontSize: "10px",
                            fontWeight: "bold",
                            flexShrink: 0,
                            marginTop: 1
                          }}
                        >
                          {step.check ? <Check size={10} strokeWidth={3} /> : idx + 1}
                        </div>
                        <span style={{ fontSize: "0.8rem", color: step.check ? "var(--text)" : "var(--text-2)" }}>
                          {step.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {activityCompleted[activeActivity] ? (
                    <div className="activity-status-banner success" style={{ marginTop: 16 }}>
                      <CheckCircle2 size={16} />
                      <span>{dict.activity_match}</span>
                    </div>
                  ) : (
                    <div className="activity-status-banner pending" style={{ marginTop: 16 }}>
                      <AlertCircle size={16} />
                      <span>{dict.activity_not_match}</span>
                    </div>
                  )}
                </div>

                {/* 2-QUBIT BLOCH SPHERES */}
                <div className="builder-sphere-card">
                  <h3>Interactive Bloch Spheres</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-3)", marginBottom: 16 }}>
                    Observe how mixing of states collapses vectors to the origin as entanglement grows.
                  </p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, textAlign: "center", color: "var(--text-3)", marginBottom: 4 }}>Qubit q0</div>
                      <Interactive3DBlochSphere x={blochQ0Act.x} y={blochQ0Act.y} z={blochQ0Act.z} label="q0" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.72rem", fontWeight: 700, textAlign: "center", color: "var(--text-3)", marginBottom: 4 }}>Qubit q1</div>
                      <Interactive3DBlochSphere x={blochQ1Act.x} y={blochQ1Act.y} z={blochQ1Act.z} label="q1" />
                    </div>
                  </div>
                </div>

                <button
                  className="learn-cta-primary w-100 py-3"
                  onClick={() => setView("quiz")}
                  style={{ fontSize: "0.88rem", fontWeight: 700 }}
                >
                  {dict.btn_go_quiz}
                </button>
              </div>
            </div>
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
              <p style={{ fontSize: "0.85rem", color: "var(--text-3)", margin: 0 }}>Experiment 1.2 — Bell State Entanglement</p>
            </div>

            {/* Stats Row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 14, marginBottom: 28 }}>
              {[
                { label: "Experiment", value: "Exp 1.2", icon: <FlaskConical size={16} /> },
                { label: "Topics Covered", value: "4 Concepts", icon: <BookOpen size={16} /> },
                { label: "Gates Applied", value: `${slots.flat().filter(Boolean).length} Gates`, icon: <Cpu size={16} /> },
                { label: "Bell Activities", value: `${Object.values(activityCompleted).filter(Boolean).length}/4 Done`, icon: <CheckCircle2 size={16} /> }
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
                    Download a formal PDF report with the 3-qubit circuit diagram, Bell state activity results, entanglement metrics, and quiz performance.
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
                        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.4rem", fontWeight: 700, color: "#111827", margin: "0 0 6px 0" }}>{userName}</p>
                        <p style={{ fontSize: "0.58rem", color: "#6B7280", textTransform: "uppercase", marginBottom: 6 }}>has successfully completed</p>
                        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.85rem", fontWeight: 600, color: "#1D4ED8", margin: 0 }}>
                          Bell State Entanglement • Exp 1.2
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
                  href={COLAB_LINKS["1.2"]}
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
              {entanglementQiskitCode}
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
                        className="btn-primary-wiser"
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

      {/* DETAILED CONCEPT MODAL (THEORY INFO DRAWER) */}
      {activeTopic && (
        <div className="learn-modal-backdrop" onClick={closeModal}>
          <div className="learn-modal" onClick={(e) => e.stopPropagation()}>
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

      {/* TOUR DIALOG OVERLAYS */}
      {tourStep !== null && (
        <div className="tour-floating-card">
          <div className="tour-card-header">
            <h4>{dict.guided_tour_title} • {dict.guided_tour_step} {tourStep + 1} {dict.guided_tour_of} {dict.tour_steps.length}</h4>
            <button className="tour-close-btn" onClick={skipTour}>
              <X size={16} />
            </button>
          </div>
          <div className="tour-card-body">
            <h5>{dict.tour_steps[tourStep].title}</h5>
            <p>{dict.tour_steps[tourStep].desc}</p>
          </div>
          <div className="tour-card-footer">
            <button className="tour-nav-btn" onClick={skipTour} style={{ fontSize: "0.74rem" }}>
              {dict.btn_skip}
            </button>
            <div style={{ display: "flex", gap: 8 }}>
              {tourStep > 0 && (
                <button className="tour-nav-btn" onClick={prevTourStep}>
                  <ChevronLeft size={14} />
                  <span>{dict.btn_back}</span>
                </button>
              )}
              <button className="tour-nav-btn primary-tour-btn" onClick={nextTourStep}>
                <span>{tourStep === dict.tour_steps.length - 1 ? dict.btn_done : dict.btn_next}</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
