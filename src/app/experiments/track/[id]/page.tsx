"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Atom, Layers, Radio, ShieldCheck, RotateCcw,
  BookOpen, Star, HelpCircle, ArrowRight, Play, CheckCircle2, Lock,
  Sun, Moon, Cpu, History, Landmark, Flame, Compass, MessageSquare
} from "lucide-react";
import TRANSLATIONS, { LangCode, LANG_META } from "@/data/translations";
import Link from "next/link";

// ─────────────────────────────────────────────
// Track 1: Bloch Sphere Interactive Calculator
// ─────────────────────────────────────────────
function BlochCalculator() {
  const [theta, setTheta] = useState(45); // 0 to 180 degrees
  const [phi, setPhi] = useState(90); // 0 to 360 degrees

  const thetaRad = (theta * Math.PI) / 180;
  const phiRad = (phi * Math.PI) / 180;

  // Calculate amplitudes
  const alpha = Math.cos(thetaRad / 2);
  const betaReal = Math.cos(phiRad) * Math.sin(thetaRad / 2);
  const betaImag = Math.sin(phiRad) * Math.sin(thetaRad / 2);

  const prob0 = alpha * alpha;
  const prob1 = betaReal * betaReal + betaImag * betaImag;

  // Bloch Sphere projection coordinates
  // Radius R = 65, center = (100, 100)
  const R = 65;
  const cx = 100;
  const cy = 100;

  // 3D coordinates
  const x3d = R * Math.sin(thetaRad) * Math.cos(phiRad);
  const y3d = R * Math.sin(thetaRad) * Math.sin(phiRad);
  const z3d = R * Math.cos(thetaRad);

  // Isometric 2D projection formulas
  const xProj = cx + 0.866 * (y3d - x3d);
  const yProj = cy - z3d + 0.5 * (y3d + x3d);

  return (
    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 28, margin: "24px 0" }}>
      <h4 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
        <Compass size={18} className="text-info" />
        Interactive Bloch Sphere Simulator
      </h4>
      <p style={{ fontSize: "0.85rem", color: "var(--text-3)", marginBottom: 20 }}>
        Adjust the polar angle (θ) and azimuthal angle (φ) to rotate the qubit state vector on the Bloch sphere and observe the probability amplitudes.
      </p>

      <div className="row g-4 align-items-center">
        {/* Sliders controls */}
        <div className="col-md-5">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <div className="d-flex justify-content-between mb-2" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                <span>Polar Angle (θ): {theta}°</span>
                <span className="text-muted">0° (|0⟩) to 180° (|1⟩)</span>
              </div>
              <input
                type="range"
                min="0"
                max="180"
                value={theta}
                onChange={(e) => setTheta(Number(e.target.value))}
                className="w-100"
              />
            </div>

            <div>
              <div className="d-flex justify-content-between mb-2" style={{ fontSize: "0.85rem", fontWeight: 500 }}>
                <span>Azimuthal Angle (φ): {phi}°</span>
                <span className="text-muted">Phase rotation (0° to 360°)</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={phi}
                onChange={(e) => setPhi(Number(e.target.value))}
                className="w-100"
              />
            </div>

            {/* Matrix Values panel */}
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 16 }}>
              <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", fontWeight: 700, marginBottom: 8 }}>
                Resulting Vector
              </p>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.82rem", color: "var(--text)" }}>
                |ψ⟩ = {alpha.toFixed(2)}|0⟩ + ({betaReal.toFixed(2)} {betaImag >= 0 ? "+" : ""} {betaImag.toFixed(2)}i)|1⟩
              </div>
              <div className="mt-2" style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
                P(|0⟩) = {Math.round(prob0 * 100)}% • P(|1⟩) = {Math.round(prob1 * 100)}%
              </div>
            </div>
          </div>
        </div>

        {/* 2D Projected Bloch Sphere Graphic */}
        <div className="col-md-7 d-flex justify-content-center">
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 20, width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <svg width="220" height="220" viewBox="0 0 200 200" style={{ overflow: "visible" }}>
              {/* Outer boundary sphere projection */}
              <circle cx="100" cy="100" r="65" fill="none" stroke="var(--border)" strokeWidth="1.5" />

              {/* Equator ellipse */}
              <ellipse cx="100" cy="100" rx="65" ry="18" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />

              {/* Polar axis (Z axis) */}
              <line x1="100" y1="25" x2="100" y2="175" stroke="var(--text-3)" strokeWidth="1" strokeDasharray="2 2" />

              {/* X axis (isometric direction) */}
              <line x1="100" y1="100" x2={100 - 65 * 0.866} y2={100 + 32.5} stroke="var(--text-3)" strokeWidth="1" strokeDasharray="2 2" />

              {/* Y axis (isometric direction) */}
              <line x1="100" y1="100" x2={100 + 65 * 0.866} y2={100 + 32.5} stroke="var(--text-3)" strokeWidth="1" strokeDasharray="2 2" />

              {/* Axis Label Tags */}
              <text x="100" y="18" fill="var(--text)" fontSize="10" textAnchor="middle" fontWeight="bold">|0⟩ (+z)</text>
              <text x="100" y="190" fill="var(--text)" fontSize="10" textAnchor="middle" fontWeight="bold">|1⟩ (-z)</text>
              <text x={100 - 65 * 0.866 - 12} y={100 + 35} fill="var(--text-3)" fontSize="9" textAnchor="middle">|+⟩ (+x)</text>
              <text x={100 + 65 * 0.866 + 14} y={100 + 35} fill="var(--text-3)" fontSize="9" textAnchor="middle">|+i⟩ (+y)</text>

              {/* Dynamic State Vector Line */}
              <line
                x1="100"
                y1="100"
                x2={xProj}
                y2={yProj}
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* State Vector Endpoint Dot */}
              <circle cx={xProj} cy={yProj} r="4" fill="var(--accent-2)" stroke="var(--accent)" strokeWidth="1.5" />
            </svg>
            <span style={{ fontSize: "0.75rem", color: "var(--text-3)", marginTop: 8 }}>
              Bloch Sphere projection
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Track 2: Interactive Teleportation Flowchart
// ─────────────────────────────────────────────
function TeleportFlow() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "1. Entanglement Sharing",
      desc: "A source generates a maximally entangled Bell Pair state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2. Alice gets qubit A, and Bob gets qubit B. This creates a quantum link between them."
    },
    {
      title: "2. Alice Bell Measurement",
      desc: "Alice performs a CNOT gate on the unknown state |ψ⟩ and qubit A, followed by a Hadamard gate. She then measures both qubits, collapsing their joint state."
    },
    {
      title: "3. Classical Transfer",
      desc: "Alice sends her 2 classical measurement outcomes (00, 01, 10, or 11) to Bob via traditional fiber channels. This step is limited by the speed of light."
    },
    {
      title: "4. Bob's Unitary Correction",
      desc: "Bob applies conditional X and Z correction gates based on Alice's classical bits. His qubit collapses into the exact state |ψ⟩. The transfer is complete!"
    }
  ];

  return (
    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 28, margin: "24px 0" }}>
      <h4 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 16 }}>Quantum Teleportation Interactive Walkthrough</h4>

      <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 16, marginBottom: 20 }}>
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setStep(idx)}
            style={{
              padding: "10px 18px",
              background: step === idx ? "var(--accent)" : "var(--bg-card)",
              border: "1px solid var(--border)",
              color: step === idx ? "#fff" : "var(--text-2)",
              borderRadius: 12,
              fontSize: "0.82rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {s.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}
        >
          <h5 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--accent)", marginBottom: 12 }}>{steps[step].title}</h5>
          <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--text-2)", margin: 0 }}>{steps[step].desc}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────
// Track 3: Polarization Matching Game
// ─────────────────────────────────────────────
function PolarizationGame() {
  const [play, setPlay] = useState(false);
  const [bits, setBits] = useState<number[]>([]);
  const [aliceBases, setAliceBases] = useState<string[]>([]);
  const [bobBases, setBobBases] = useState<string[]>([]);
  const [matches, setMatches] = useState<boolean[]>([]);

  const startSim = () => {
    const size = 8;
    const tempBits: number[] = [];
    const tempAlice: string[] = [];
    const tempBob: string[] = [];
    const tempMatches: boolean[] = [];

    for (let i = 0; i < size; i++) {
      tempBits.push(Math.round(Math.random()));
      tempAlice.push(Math.random() > 0.5 ? "+" : "x");
      const bBase = Math.random() > 0.5 ? "+" : "x";
      tempBob.push(bBase);
      tempMatches.push(tempAlice[i] === bBase);
    }

    setBits(tempBits);
    setAliceBases(tempAlice);
    setBobBases(tempBob);
    setMatches(tempMatches);
    setPlay(true);
  };

  return (
    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 28, margin: "24px 0" }}>
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <h4 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0 }}>BB84 Polarization Exchange Simulator</h4>
        <button className="btn-primary-wiser" onClick={startSim} style={{ padding: "10px 20px", fontSize: "0.8rem" }}>
          Generate Photon Key Exchange
        </button>
      </div>

      {!play ? (
        <p style={{ fontSize: "0.85rem", color: "var(--text-3)", margin: 0 }}>
          Click the button above to simulate sending photons in conjugate polarization bases (+ is rectilinear basis, x is diagonal basis).
        </p>
      ) : (
        <div style={{ overflowX: "auto", marginTop: 20 }}>
          <table className="table" style={{ fontSize: "0.85rem", color: "var(--text)", minWidth: 600 }}>
            <thead>
              <tr style={{ color: "var(--text-3)" }}>
                <th>Photon Index</th>
                {bits.map((_, idx) => <th key={idx}>{idx + 1}</th>)}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice Bit</td>
                {bits.map((b, idx) => <td key={idx} style={{ fontFamily: "monospace", fontWeight: 700 }}>{b}</td>)}
              </tr>
              <tr>
                <td>Alice Basis</td>
                {aliceBases.map((b, idx) => <td key={idx} style={{ fontWeight: 600, color: "var(--accent)" }}>{b}</td>)}
              </tr>
              <tr>
                <td>Bob Basis</td>
                {bobBases.map((b, idx) => <td key={idx} style={{ fontWeight: 600, color: "var(--accent-2)" }}>{b}</td>)}
              </tr>
              <tr style={{ background: "rgba(0,0,0,0.05)" }}>
                <td>Sifted Key?</td>
                {matches.map((m, idx) => (
                  <td key={idx} style={{ color: m ? "#34d399" : "#f43f5e", fontWeight: 700 }}>
                    {m ? "Keep" : "Discard"}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: "0.78rem", color: "var(--text-3)", marginTop: 12, margin: 0 }}>
            Only matching bases are kept for the sifted cryptographic key. Any eavesdropper measuring bases will introduce immediately detectable errors (QBER).
          </p>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Track 4: Parity Syndrome Decoder
// ─────────────────────────────────────────────
function SyndromeDecoder() {
  const [q0Err, setQ0Err] = useState(false);
  const [q1Err, setQ1Err] = useState(false);
  const [q2Err, setQ2Err] = useState(false);

  // Compute syndromes: s0 = q0 ^ q1, s1 = q1 ^ q2
  const s0 = q0Err !== q1Err ? 1 : 0;
  const s1 = q1Err !== q2Err ? 1 : 0;

  // Locate error
  let errorLoc = "None";
  if (s0 === 1 && s1 === 0) errorLoc = "Qubit 0 (q₀)";
  else if (s0 === 1 && s1 === 1) errorLoc = "Qubit 1 (q₁)";
  else if (s0 === 0 && s1 === 1) errorLoc = "Qubit 2 (q₂)";

  return (
    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 28, margin: "24px 0" }}>
      <h4 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 16 }}>Quantum Error Syndrome Decoder</h4>
      <p style={{ fontSize: "0.85rem", color: "var(--text-3)", marginBottom: 20 }}>
        Inject bit-flip errors into qubits to see how the syndrome measurements (Z₀Z₁ and Z₁Z₂) identify the corrupted qubit without destroying superpositions.
      </p>

      <div className="row g-4 align-items-center">
        <div className="col-md-6">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: "0.88rem" }}>
              <input type="checkbox" checked={q0Err} onChange={(e) => setQ0Err(e.target.checked)} />
              <span>Inject Bit-Flip Error on Qubit 0 (q₀)</span>
            </label>
            <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: "0.88rem" }}>
              <input type="checkbox" checked={q1Err} onChange={(e) => setQ1Err(e.target.checked)} />
              <span>Inject Bit-Flip Error on Qubit 1 (q₁)</span>
            </label>
            <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: "0.88rem" }}>
              <input type="checkbox" checked={q2Err} onChange={(e) => setQ2Err(e.target.checked)} />
              <span>Inject Bit-Flip Error on Qubit 2 (q₂)</span>
            </label>
          </div>
        </div>

        <div className="col-md-6">
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 22 }}>
            <div className="row text-center">
              <div className="col-6" style={{ borderRight: "1px solid var(--border)" }}>
                <p style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-3)", margin: 0 }}>
                  Syndrome S₀ (Z₀Z₁)
                </p>
                <h3 style={{ fontSize: "2rem", fontWeight: 700, color: s0 ? "var(--accent)" : "var(--text)", margin: "8px 0" }}>
                  {s0}
                </h3>
              </div>
              <div className="col-6">
                <p style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-3)", margin: 0 }}>
                  Syndrome S₁ (Z₁Z₂)
                </p>
                <h3 style={{ fontSize: "2rem", fontWeight: 700, color: s1 ? "var(--accent-2)" : "var(--text)", margin: "8px 0" }}>
                  {s1}
                </h3>
              </div>
            </div>
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)", textAlign: "center" }}>
              <p style={{ fontSize: "0.72rem", color: "var(--text-3)", marginBottom: 4 }}>DECODED ERROR LOCATION</p>
              <h5 style={{ fontSize: "1.05rem", fontWeight: 700, color: errorLoc !== "None" ? "#f43f5e" : "#34d399", margin: 0 }}>
                {errorLoc}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Dynamic Track Detail Page Component
// ─────────────────────────────────────────────
export default function TrackDetailPage() {
  const params = useParams();
  const idStr = params.id as string;
  const trackId = Number(idStr) || 1;

  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<LangCode>("en");

  const dict = TRANSLATIONS[lang];

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
      document.documentElement.classList.add("light-theme");
    }
  }, [dark]);

  useEffect(() => {
    document.documentElement.classList.add("dark-theme");
  }, []);

  const TRACKS_METADATA = [
    {
      id: 1,
      title: dict.t1_title,
      subtitle: dict.t1_sub,
      icon: <Layers size={22} />,
      color: "#06b6d4",
      classicalRoadblock: "Classical computing relies on transistors that represent state as 0 or 1. This binary abstraction fails when scaling up to solve complex physics simulations, molecular modelling, or optimization problems. The classical transistor is bound by absolute deterministic gates, lacking the exponential parameter state-space size required to model molecular systems.",
      historicalBreakthrough: "In the early 1980s, Richard Feynman and Yuri Manin proposed that quantum physical properties could be harnessed to perform computational simulations. By representing parameters in quantum superposition, a system of N qubits could simultaneously compute across 2^N state parameters.",
      whyImportant: "Quantum Basics form the core of quantum mechanics. Unlike classical bits, qubits can exist in superpositions. Learning these foundations is necessary before doing quantum logic or secure communication.",
      intro: "This track introduces states, Bloch sphere rotations, and standard gates. You will learn to form Bell states, manipulate superposition amplitudes, and build a working mathematical intuition.",
      mathTitle: "Mathematical Amplitudes & Bloch Rotations",
      mathBody: "A single qubit is represented mathematically as a state vector: |ψ⟩ = α|0⟩ + β|1⟩ where α, β ∈ ℂ are probability amplitudes satisfying the normalization constraint |α|² + |β|² = 1. Applying a Hadamard gate (H) maps |0⟩ to (|0⟩+|1⟩)/√2, placing the qubit in a perfect 50/50 superposition.",
      realWorld: "Bloch rotations and state engineering are utilized directly inside current superconducting devices (like IBM Quantum) and trapped-ion systems (like IonQ) to initialize registers before running complex algorithms.",
      exps: [
        { id: "1.1", title: dict.t1_e1, status: "Completed" },
        { id: "1.2", title: dict.t1_e2, status: "Completed" }
      ],
      interactiveWidget: <BlochCalculator />
    },
    {
      id: 2,
      title: dict.t2_title,
      subtitle: dict.t2_sub,
      icon: <Radio size={22} />,
      color: "#a78bfa",
      classicalRoadblock: "In classical communication, duplicating data is simple. However, the Quantum No-Cloning Theorem proves it is physically impossible to create an identical copy of an arbitrary, unknown quantum state. This roadblock prevents standard amplification of quantum signals over long-distance fibers.",
      historicalBreakthrough: "In 1993, Charles Bennett, Gilles Brassard, and their collaborators bypassed the cloning restriction. They discovered that by sharing an entangled pair and transferring two classical bits of information, an exact quantum state could be teleported from Alice to Bob, collapsing the original in the process.",
      whyImportant: "Quantum Communication channels transfer information with properties that are impossible classically, such as Teleportation (sending quantum states) and Superdense Coding (packing 2 classical bits in 1 qubit).",
      intro: "This track explores how shared entanglement and classical communication allow qubits to act as powerful information channels.",
      mathTitle: "State Teleportation Matrix Transformations",
      mathBody: "The teleportation protocol operates on three qubits: the state to teleport |ψ⟩, and a Bell pair distributed between Alice and Bob: |Φ⁺⟩ = (|00⟩ + |11⟩)/√2. After Bell-state measurements, Alice obtains two classical bits (00, 01, 10, 11). Bob applies matching σ_x and σ_z Pauli operators to recover Bob's state: σ_x = [0 1; 1 0], σ_z = [1 0; 0 -1].",
      realWorld: "Quantum teleportation is the core routing protocol for the quantum internet, enabling entanglement distribution networks between distributed servers for secure quantum computing clusters.",
      exps: [
        { id: "2.1", title: dict.t2_e1, status: "In Progress" },
        { id: "2.2", title: dict.t2_e2, status: "Locked" }
      ],
      interactiveWidget: <TeleportFlow />
    },
    {
      id: 3,
      title: dict.t3_title,
      subtitle: dict.t3_sub,
      icon: <ShieldCheck size={22} />,
      color: "#34d399",
      classicalRoadblock: "Classical encryption models (such as RSA and Diffie-Hellman) depend on the mathematical difficulty of factoring large integers. With Shor's Algorithm, a sufficiently powerful quantum computer can solve factoring in polynomial time, threatening to break almost all standard security layers worldwide.",
      historicalBreakthrough: "In 1984, Charles Bennett and Gilles Brassard designed the BB84 protocol. Instead of mathematical complexity, it relies on the Heisenberg Uncertainty Principle. Measuring a quantum state in an unknown basis changes its state permanently, revealing the presence of any eavesdropper.",
      whyImportant: "Quantum Key Distribution (QKD) is the first commercial application of quantum information, allowing two parties to establish a mathematically unbreakable secret key guaranteed by physical laws.",
      intro: "Here you will study conjugate bases polarization protocols (BB84/B92) and analyze Quantum Bit Error Rates (QBER) to detect eavesdroppers.",
      mathTitle: "Conjugate Bases and the Uncertainty Principle",
      mathBody: "Photons are sent polarized in two non-orthogonal bases: Rectilinear (+: |0⟩, |1⟩) and Diagonal (x: |+⟩, |-⟩). Measuring a diagonal state |+⟩ = (|0⟩+|1⟩)/√2 in a rectilinear basis yields either |0⟩ or |1⟩ with 50% probability, introducing a Quantum Bit Error Rate (QBER) of 25% if Eve attempts to eavesdrop.",
      realWorld: "QKD is active today in secure governmental communications, banking channels, and satellite quantum networks (such as China's Micius satellite, linking Beijing to Vienna).",
      exps: [
        { id: "3.1", title: dict.t3_e1, status: "Locked" },
        { id: "3.2", title: dict.t3_e2, status: "Locked" }
      ],
      interactiveWidget: <PolarizationGame />
    },
    {
      id: 4,
      title: dict.t4_title,
      subtitle: dict.t4_sub,
      icon: <RotateCcw size={22} />,
      color: "#fbbf24",
      classicalRoadblock: "Qubits are fragile. Environmental thermal fluctuations and magnetic noise lead to phase shifts and bit flips (decoherence). Because you cannot measure a qubit without collapsing its superposition, classical error correction redundancy checks cannot be applied directly.",
      historicalBreakthrough: "In 1995, Peter Shor published the 9-qubit error correction code. He demonstrated that by encoding a logical qubit into multiple physical qubits, error syndromes could be measured collectively without observing the individual superpositions directly, preserving state integrity.",
      whyImportant: "Environmental decoherence destroys quantum superpositions. Quantum Error Correction protects information using multi-qubit repetition codes without measuring and destroying states directly.",
      intro: "This track analyzes Bit-Flip and Phase-Flip correction codes. You will implement Syndrome Measurements to locate and fix errors.",
      mathTitle: "Repetition Encoding & Syndrome Parity Checks",
      mathBody: "A logical state |ψ⟩_L = α|000⟩ + β|111⟩ encodes one logical qubit into three physical qubits. Parity measurements use auxiliary qubits to measure Z₁Z₂ and Z₂Z₃. For example, if qubit 1 flips, the syndrome Z₁Z₂ yields -1, identifying the location of the error without altering coefficients α and β.",
      realWorld: "Fault-tolerant architectures, such as the Surface Code, are currently being engineered by top labs (Google, IBM) to achieve logical error rates low enough for production quantum computing.",
      exps: [
        { id: "4.1", title: dict.t4_e1, status: "Locked" },
        { id: "4.2", title: dict.t4_e2, status: "Locked" }
      ],
      interactiveWidget: <SyndromeDecoder />
    }
  ];

  const track = TRACKS_METADATA.find(t => t.id === trackId) || TRACKS_METADATA[0];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      {/* Top Navbar */}
      <nav className="wiser-nav scrolled" style={{ position: "sticky" }}>
        <div className="container-xl d-flex align-items-center justify-content-between">
          <Link href="/experiments" className="d-flex align-items-center gap-2" style={{ textDecoration: "none", color: "var(--text)" }}>
            <ArrowLeft size={16} />
            <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>Back to Dashboard</span>
          </Link>

          <div className="d-flex align-items-center gap-3">
            {/* Theme Toggle */}
            <button className="theme-toggle" onClick={() => setDark(!dark)} style={{ width: 44, height: 22 }}>
              <div
                className="theme-toggle-thumb"
                style={{
                  width: 16, height: 16, borderRadius: "50%",
                  transform: `translateX(${dark ? "22px" : "2px"})`,
                  background: dark ? "var(--accent)" : "#fbbf24",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}
              >
                {dark ? <Moon size={8} color="#fff" /> : <Sun size={8} color="#fff" />}
              </div>
            </button>

            {/* Language Selector */}
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as LangCode)}
              style={{
                fontSize: "0.75rem",
                background: "var(--bg-canvas)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                borderRadius: 6,
                padding: "4px 8px",
                outline: "none"
              }}
            >
              {(Object.keys(LANG_META) as LangCode[]).map((key) => (
                <option key={key} value={key}>
                  {LANG_META[key].flag} {LANG_META[key].label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container-xl py-5" style={{ maxWidth: 880 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: 48, height: 48, borderRadius: 12,
                background: `${track.color}15`, color: track.color
              }}
            >
              {track.icon}
            </div>
            <div>
              <span style={{ fontSize: "0.75rem", color: track.color, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Track {track.id} • {track.subtitle}
              </span>
              <h1 className="font-display" style={{ fontSize: "2.2rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
                {track.title}
              </h1>
            </div>
          </div>

          <p style={{ fontSize: "1.15rem", lineHeight: 1.6, color: "var(--text-2)", marginBottom: 40 }}>
            {track.intro}
          </p>

          {/* Section 1: The Classical Roadblock */}
          <section className="mb-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <Flame size={18} className="text-danger" />
                  The Classical Roadblock
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>
                  {track.classicalRoadblock}
                </p>
              </div>
              <div className="col-lg-5">
                <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24, textAlign: "center" }}>
                  <h5 style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Core Challenge
                  </h5>
                  <div style={{ fontSize: "2.8rem", color: "#f43f5e", margin: "12px 0" }}>&empty;</div>
                  <p style={{ fontSize: "0.78rem", color: "var(--text-3)", margin: 0 }}>
                    Physical boundaries limit classical bandwidth, security, and state manipulation scaling.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Historical Breakthrough */}
          <section className="mb-5">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <History size={18} className="text-warning" />
              Historical Milestones
            </h3>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>
                {track.historicalBreakthrough}
              </p>
            </div>
          </section>

          {/* Why it Matters Card */}
          <section className="mb-5">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Star size={18} className="text-primary" />
              Why It Matters
            </h3>
            <div style={{ background: "linear-gradient(135deg, var(--bg-card) 0%, rgba(6, 182, 212, 0.05) 100%)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>
                {track.whyImportant}
              </p>
            </div>
          </section>

          {/* Section 3: Visual Playground */}
          <section className="mb-5">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <BookOpen size={18} className="text-success" />
              Sneak-Peek
            </h3>
            {track.interactiveWidget}
          </section>

          {/* Section 4: Mathematical Foundations */}
          <section className="mb-5">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Cpu size={18} className="text-info" />
              {track.mathTitle}
            </h3>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-2)", marginBottom: 16 }}>
                {track.mathBody}
              </p>
              <div
                style={{
                  background: "var(--bg-canvas)", border: "1px solid var(--border)",
                  borderRadius: 10, padding: 16, fontFamily: "monospace", fontSize: "0.85rem",
                  color: "var(--accent)"
                }}
              >
                {trackId === 1 && "// Amplitude Normalization Constraint\nMath.pow(alpha, 2) + Math.pow(beta, 2) === 1.0"}
                {trackId === 2 && "// Bell pair channel creation\nCircuit.h(0);\nCircuit.cx(0, 1);"}
                {trackId === 3 && "// Quantum bit error rate threshold detection\nconst QBER = errorPhotons / totalPhotons;\nif (QBER > 0.11) detectEavesdropper();"}
                {trackId === 4 && "// Parity checks\nconst s0 = q0 ^ q1;\nconst s1 = q1 ^ q2;"}
              </div>
            </div>
          </section>

          {/* Section 5: Real World Impact */}
          <section className="mb-5">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Landmark size={18} className="text-secondary" />
              Real World Deployment & Outlook
            </h3>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>
                {track.realWorld}
              </p>
            </div>
          </section>

          {/* Associated Experiments */}
          <section className="mb-5">
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Atom size={18} style={{ color: track.color }} />
              Associated Syllabus Labs
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {track.exps.map((e) => {
                const isCompleted = e.status === "Completed";
                const isInProgress = e.status === "In Progress";
                const isLocked = false;

                return (
                  <div
                    key={e.id}
                    style={{
                      background: "var(--bg-card)", border: "1px solid var(--border)",
                      borderRadius: 12, padding: "18px 24px",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      gap: 16, flexWrap: "wrap"
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "0.78rem", fontFamily: "monospace", color: track.color, fontWeight: 700 }}>
                        Exp {e.id}
                      </span>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 600, margin: "4px 0 0 0" }}>
                        {e.title}
                      </h4>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <span
                        className="tag-pill"
                        style={{
                          background: isCompleted ? "rgba(52, 211, 153, 0.1)" : isInProgress ? `${track.color}15` : "var(--bg-canvas)",
                          color: isCompleted ? "#34d399" : isInProgress ? track.color : "var(--text-3)",
                          border: isCompleted
                            ? "1px solid rgba(52, 211, 153, 0.2)"
                            : isInProgress
                              ? `1px solid ${track.color}30`
                              : "1px solid var(--border)",
                          fontSize: "0.62rem"
                        }}
                      >
                        {e.status}
                      </span>

                      {!isLocked ? (
                        <Link href={`/experiments/lab/${e.id}`} className="btn-primary-wiser" style={{ padding: "8px 16px", fontSize: "0.8rem", textDecoration: "none" }}>
                          Launch Lab
                        </Link>
                      ) : (
                        <button disabled className="btn-secondary-wiser" style={{ padding: "8px 16px", fontSize: "0.8rem", opacity: 0.5, cursor: "not-allowed" }}>
                          Locked
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center pt-4 mt-5" style={{ borderTop: "1px solid var(--border)" }}>
            {trackId > 1 ? (
              <Link
                href={`/experiments/track/${trackId - 1}`}
                style={{ textDecoration: "none", color: "var(--text-3)", fontSize: "0.88rem", fontWeight: 600 }}
              >
                &larr; Previous Track
              </Link>
            ) : <span />}

            {trackId < 4 ? (
              <Link
                href={`/experiments/track/${trackId + 1}`}
                style={{ textDecoration: "none", color: "var(--accent)", fontSize: "0.88rem", fontWeight: 600 }}
              >
                Next Track &rarr;
              </Link>
            ) : <span />}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
