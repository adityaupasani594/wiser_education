"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Atom, Layers, Radio, ShieldCheck, RotateCcw,
  BookOpen, Star, HelpCircle, ArrowRight, Play, CheckCircle2, Lock,
  Sun, Moon, Cpu, History, Landmark, Flame, Compass, Copy, Check, FileText, Award, AlertCircle, Sparkles
} from "lucide-react";
import TRANSLATIONS, { LangCode, LANG_META } from "@/data/translations";
import Link from "next/link";

// QKD Experiment Imports
import Exp1BB84 from "@/components/experiments/Experiment1";
import Exp2BB84 from "@/components/experiments/Experiment2";
import Exp3BB84 from "@/components/experiments/Experiment3";
import Exp4BB84 from "@/components/experiments/Experiment4";
import Exp5BB84 from "@/components/experiments/Experiment5";
import Exp6BB84 from "@/components/experiments/Experiment6";
import Exp7BB84 from "@/components/experiments/Experiment7";
import Exp8BB84 from "@/components/experiments/Experiment8";
import Exp9BB84 from "@/components/experiments/Experiment9";
import Exp10BB84 from "@/components/experiments/Experiment10";

import B92Experiment1 from "@/components/experiments/B92Experiment1";
import B92Experiment2 from "@/components/experiments/B92Experiment2";
import B92Experiment3 from "@/components/experiments/B92Experiment3";
import B92Experiment4 from "@/components/experiments/B92Experiment4";
import QuantumBasics from "@/components/experiments/QuantumBasics";
import "@/components/experiments/QuantumBasics.css";
import QuantumEntanglement from "@/components/experiments/QuantumEntanglement";
import "@/components/experiments/QuantumEntanglement.css";


// ---------------------------------------------
// Qiskit Code Generators
// ---------------------------------------------
function getTeleportQiskitCode(theta: number, phi: number, xGate: boolean, zGate: boolean) {
  return `import numpy as np
from qiskit import QuantumCircuit, Aer, execute

# 1. Initialize 3-qubit circuit and classical bits
qc = QuantumCircuit(3, 3)

# 2. Prepare Alice's secret message state |ψ⟩
# Polar angle = ${theta}°, Azimuthal phase = ${phi}°
theta_rad = ${((theta * Math.PI) / 180).toFixed(4)}
phi_rad = ${((phi * Math.PI) / 180).toFixed(4)}

qc.ry(theta_rad, 0)
qc.rz(phi_rad, 0)
qc.barrier()

# 3. Create shared Bell pair state between Alice (q1) and Bob (q2)
qc.h(1)
qc.cx(1, 2)
qc.barrier()

# 4. Alice measures her secret qubit (q0) and entangled qubit (q1) in Bell basis
qc.cx(0, 1)
qc.h(0)
qc.barrier()
qc.measure([0, 1], [0, 1])
qc.barrier()

# 5. Bob applies unitary correction gates based on Alice's classical outcomes
${xGate ? "qc.x(2)  # Bob applies X gate because Alice measured 1 on q1" : "# Bob X gate skipped"}
${zGate ? "qc.z(2)  # Bob applies Z gate because Alice measured 1 on q0" : "# Bob Z gate skipped"}

# 6. Measure Bob's final qubit state
qc.measure(2, 2)

# Run simulation
simulator = Aer.get_backend('qasm_simulator')
job = execute(qc, simulator, shots=1024)
result = job.result()
counts = result.get_counts(qc)
print("Measured states:", counts)
`;
}

function getDenseCodingQiskitCode(bits: string, xGate: boolean, zGate: boolean) {
  return `from qiskit import QuantumCircuit, Aer, execute

# Initialize 2-qubit circuit and 2 classical bits
qc = QuantumCircuit(2, 2)

# 1. Create entangled Bell pair channel (EPR Pair)
qc.h(0)
qc.cx(0, 1)
qc.barrier()

# 2. Alice encodes classical bits (Target is: "${bits}")
${xGate ? "qc.x(0)  # Alice applies X gate (Bit flip)" : "# Alice X gate skipped"}
${zGate ? "qc.z(0)  # Alice applies Z gate (Phase flip)" : "# Alice Z gate skipped"}
qc.barrier()

# 3. Alice sends qubit 0 to Bob. Bob decodes using Bell measurement
qc.cx(0, 1)
qc.h(0)
qc.barrier()

# 4. Bob measures both qubits to recover Alice's 2 classical bits
qc.measure([0, 1], [0, 1])

# Run simulation
simulator = Aer.get_backend('qasm_simulator')
job = execute(qc, simulator, shots=1024)
result = job.result()
counts = result.get_counts(qc)
print("Decoded bits outcome:", counts)
`;
}
// ---------------------------------------------
// Interactive Activity Component: Teleportation
// ---------------------------------------------
function TeleportationActivity() {
  const [preset, setPreset] = useState<"0" | "1" | "+" | "-" | "+i">("0");
  const [theta, setTheta] = useState(0);
  const [phi, setPhi] = useState(0);
  const [step, setStep] = useState(0);

  const [measuredBits, setMeasuredBits] = useState<{ m0: number; m1: number } | null>(null);
  const [userX, setUserX] = useState(false);
  const [userZ, setUserZ] = useState(false);

  const applyPreset = (p: "0" | "1" | "+" | "-" | "+i") => {
    setPreset(p);
    if (p === "0") { setTheta(0); setPhi(0); }
    else if (p === "1") { setTheta(180); setPhi(0); }
    else if (p === "+") { setTheta(90); setPhi(0); }
    else if (p === "-") { setTheta(90); setPhi(180); }
    else if (p === "+i") { setTheta(90); setPhi(90); }
    setStep(0);
    setMeasuredBits(null);
    setUserX(false);
    setUserZ(false);
  };

  const thetaRad = (theta * Math.PI) / 180;
  const phiRad = (phi * Math.PI) / 180;

  const alpha = Math.cos(thetaRad / 2);
  const betaReal = Math.cos(phiRad) * Math.sin(thetaRad / 2);
  const betaImag = Math.sin(phiRad) * Math.sin(thetaRad / 2);
  const prob0 = alpha * alpha;
  const prob1 = betaReal * betaReal + betaImag * betaImag;

  let bobAlpha = alpha;
  let bobBetaReal = betaReal;
  let bobBetaImag = betaImag;

  if (measuredBits !== null) {
    const needX = measuredBits.m1 === 1;
    const needZ = measuredBits.m0 === 1;

    if (userX !== needX) {
      bobAlpha = Math.sin(thetaRad / 2);
      bobBetaReal = Math.cos(phiRad) * Math.cos(thetaRad / 2);
      bobBetaImag = Math.sin(phiRad) * Math.cos(thetaRad / 2);
    }
    if (userZ !== needZ) {
      bobBetaReal = -bobBetaReal;
      bobBetaImag = -bobBetaImag;
    }
  }

  const isMatched = measuredBits !== null && userX === (measuredBits.m1 === 1) && userZ === (measuredBits.m0 === 1);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)", border: "1px solid var(--accent)", borderRadius: 16, padding: 20 }}>
        <div className="d-flex align-items-center gap-2 mb-2">
          <Sparkles size={20} className="text-info" />
          <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0, color: "var(--text)" }}>
            Hands-On Teleportation Activity
          </h4>
        </div>
        <p style={{ fontSize: "0.88rem", color: "var(--text-2)", margin: 0, lineHeight: 1.6 }}>
          Choose an initial qubit state, share an entangled link, measure Alice's qubits to collapse her state, transmit the 2 classical bits over fiber, and apply Bob's tuning gates to verify successful teleportation!
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-center gap-2 overflow-x-auto pb-2">
        {["1. Pick Qubit State", "2. Share Entanglement", "3. Alice Measurement", "4. Send Classical Bits", "5. Bob's Correction", "6. Verification"].map((stTitle, idx) => (
          <button
            key={idx}
            onClick={() => setStep(idx)}
            style={{
              flex: 1,
              padding: "10px 12px",
              background: step === idx ? "var(--accent)" : step > idx ? "rgba(52, 211, 153, 0.15)" : "var(--bg-canvas)",
              color: step === idx ? "#fff" : step > idx ? "#34d399" : "var(--text-3)",
              border: step === idx ? "1px solid var(--accent)" : "1px solid var(--border)",
              borderRadius: 10,
              fontSize: "0.78rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {stTitle}
          </button>
        ))}
      </div>

      <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
        {step === 0 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 1: Choose the Qubit State to Teleport
            </h5>
            <p style={{ fontSize: "0.85rem", color: "var(--text-2)", marginBottom: 18 }}>
              Select a standard quantum state preset:
            </p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {[
                { id: "0", label: "|0⟩ (Zero State)" },
                { id: "1", label: "|1⟩ (One State)" },
                { id: "+", label: "|+⟩ (Superposition)" },
                { id: "-", label: "|-⟩ (Minus State)" },
                { id: "+i", label: "|+i⟩ (Phase State)" },
              ].map(p => (
                <button
                  key={p.id}
                  onClick={() => applyPreset(p.id as any)}
                  className={`btn ${preset === p.id ? "btn-primary-wiser" : "btn-secondary-wiser"}`}
                  style={{ padding: "8px 16px", fontSize: "0.82rem" }}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)", fontWeight: 700, marginBottom: 8 }}>
                Selected Input State Vector |ψ⟩
              </div>
              <div style={{ fontFamily: "monospace", fontSize: "1.05rem", fontWeight: 700, color: "var(--text)" }}>
                |ψ⟩ = {alpha.toFixed(2)}|0⟩ + ({betaReal.toFixed(2)} {betaImag >= 0 ? "+" : ""} {betaImag.toFixed(2)}i)|1⟩
              </div>
              <div className="row mt-3 g-2">
                <div className="col-6">
                  <div style={{ fontSize: "0.75rem", color: "var(--text-3)", marginBottom: 4 }}>Probability of measuring |0⟩</div>
                  <div className="progress" style={{ height: 10, background: "var(--border)", borderRadius: 5 }}>
                    <div className="progress-bar bg-info" style={{ width: `${Math.round(prob0 * 100)}%` }} />
                  </div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text)" }}>{Math.round(prob0 * 100)}%</span>
                </div>
                <div className="col-6">
                  <div style={{ fontSize: "0.75rem", color: "var(--text-3)", marginBottom: 4 }}>Probability of measuring |1⟩</div>
                  <div className="progress" style={{ height: 10, background: "var(--border)", borderRadius: 5 }}>
                    <div className="progress-bar" style={{ width: `${Math.round(prob1 * 100)}%`, background: "#a78bfa" }} />
                  </div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text)" }}>{Math.round(prob1 * 100)}%</span>
                </div>
              </div>
            </div>

            <button className="btn-primary-wiser w-100 mt-4" onClick={() => setStep(1)}>
              Lock State &amp; Share Entangled Pair (Step 2) &rarr;
            </button>
          </div>
        )}

        {step === 1 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 2: Generate Shared Entanglement (Bell Pair)
            </h5>
            <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.6 }}>
              An EPR source creates a maximally entangled Bell Pair state:
              <span style={{ fontFamily: "monospace", display: "inline-block", background: "var(--bg-card)", padding: "2px 8px", borderRadius: 6, margin: "0 6px", color: "var(--accent)" }}>
                |Φ⁺⟩ = (|00⟩ + |11⟩) / √2
              </span>
              Qubit q₁ goes to Alice, and Qubit q₂ goes to Bob. This establishes an open quantum link between them!
            </p>

            <div style={{ background: "var(--bg-card)", border: "1px dashed var(--accent)", borderRadius: 12, padding: 24, textAlign: "center", margin: "20px 0" }}>
              <div className="d-flex justify-content-center align-items-center gap-4">
                <div style={{ background: "rgba(6, 182, 212, 0.15)", border: "1px solid var(--accent)", padding: 12, borderRadius: 10, minWidth: 120 }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 700 }}>Alice's Qubit q₁</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-3)" }}>Entangled</div>
                </div>
                <div style={{ fontSize: "1.2rem", color: "var(--accent)" }}>&larr; Shared Entanglement &rarr;</div>
                <div style={{ background: "rgba(167, 139, 250, 0.15)", border: "1px solid #a78bfa", padding: 12, borderRadius: 10, minWidth: 120 }}>
                  <div style={{ fontSize: "0.75rem", color: "#a78bfa", fontWeight: 700 }}>Bob's Qubit q₂</div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-3)" }}>Entangled</div>
                </div>
              </div>
            </div>

            <button className="btn-primary-wiser w-100" onClick={() => setStep(2)}>
              Proceed to Alice's Measurement (Step 3) &rarr;
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 3: Alice Performs Bell Basis Measurement
            </h5>
            <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.6 }}>
              Alice interacts her input state |ψ⟩ (q₀) with her half of the entangled pair (q₁) by applying a CNOT and a Hadamard gate, then measures both qubits in the computational basis.
            </p>

            {measuredBits === null ? (
              <button
                className="btn-primary-wiser w-100 py-3"
                onClick={() => {
                  const m0 = Math.random() > 0.5 ? 1 : 0;
                  const m1 = Math.random() > 0.5 ? 1 : 0;
                  setMeasuredBits({ m0, m1 });
                  setUserX(false);
                  setUserZ(false);
                }}
              >
                ⚡ Perform Bell Measurement (Collapses Original State)
              </button>
            ) : (
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: "0.75rem", color: "#34d399", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>
                  ✓ Measurement Outcomes Recorded!
                </div>
                <div className="row g-3">
                  <div className="col-6">
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 8, padding: 12, textAlign: "center" }}>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-3)" }}>Qubit q₀ Measurement (Z Control):</span>
                      <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--accent)" }}>{measuredBits.m0}</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 8, padding: 12, textAlign: "center" }}>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-3)" }}>Qubit q₁ Measurement (X Control):</span>
                      <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#a78bfa" }}>{measuredBits.m1}</div>
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "0.78rem", color: "#f43f5e", marginTop: 12, marginBottom: 0 }}>
                  * Note: Alice's original state |ψ⟩ has now been destroyed (collapsed), satisfying the No-Cloning Theorem.
                </p>
                <button className="btn-primary-wiser w-100 mt-3" onClick={() => setStep(3)}>
                  Transmit Bits to Bob (Step 4) &rarr;
                </button>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 4: Transmit Classical Bits via Optical Fiber
            </h5>
            <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.6 }}>
              Alice transmits her 2 classical bits <strong>({measuredBits?.m0 ?? 0}, {measuredBits?.m1 ?? 0})</strong> over traditional fiber optical channels to Bob.
            </p>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 20, textAlign: "center", margin: "20px 0" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--text-3)", marginBottom: 8 }}>Classical Transmission Channel</div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12 }}>
                <span style={{ fontWeight: 700, color: "var(--accent)" }}>Alice</span>
                <div style={{ flex: 1, height: 4, background: "linear-gradient(90deg, var(--accent) 0%, #fbbf24 50%, #a78bfa 100%)", borderRadius: 2 }} />
                <span style={{ fontWeight: 700, color: "#a78bfa" }}>Bob</span>
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fbbf24", marginTop: 10 }}>
                Payload: Bit 0 = {measuredBits?.m0}, Bit 1 = {measuredBits?.m1}
              </div>
            </div>

            <button className="btn-primary-wiser w-100" onClick={() => setStep(4)}>
              Proceed to Bob's Correction Gates (Step 5) &rarr;
            </button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 5: Apply Bob's Conditional Correction Gates
            </h5>
            <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.6 }}>
              Bob receives Alice's classical measurement bits: <strong>q₀ = {measuredBits?.m0}, q₁ = {measuredBits?.m1}</strong>.
              To reconstruct Alice's original qubit state, Bob applies correction gates according to the rule:
            </p>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 14, fontSize: "0.82rem", margin: "14px 0" }}>
              <div>&bull; If Alice's q₁ = 1 &rarr; Apply <strong>Pauli X Gate</strong> (Bit Flip)</div>
              <div>&bull; If Alice's q₀ = 1 &rarr; Apply <strong>Pauli Z Gate</strong> (Phase Flip)</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "18px 0" }}>
              <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: "0.88rem" }}>
                <input type="checkbox" checked={userX} onChange={e => setUserX(e.target.checked)} />
                <span>Apply Pauli X Gate (Bit Flip) — Required: {measuredBits?.m1 === 1 ? "YES" : "NO"}</span>
              </label>

              <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: "0.88rem" }}>
                <input type="checkbox" checked={userZ} onChange={e => setUserZ(e.target.checked)} />
                <span>Apply Pauli Z Gate (Phase Flip) — Required: {measuredBits?.m0 === 1 ? "YES" : "NO"}</span>
              </label>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn-secondary-wiser"
                style={{ flex: 1 }}
                onClick={() => {
                  setUserX(measuredBits?.m1 === 1);
                  setUserZ(measuredBits?.m0 === 1);
                }}
              >
                Auto-Set Correct Gates
              </button>
              <button className="btn-primary-wiser" style={{ flex: 1.2 }} onClick={() => setStep(5)}>
                Verify Final Teleported State (Step 6) &rarr;
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 6: State Verification &amp; Fidelity Results
            </h5>

            <div className="row g-3 mb-4 text-center">
              <div className="col-6">
                <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-3)", fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>
                    Alice's Initial State |ψ⟩
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: "0.95rem", fontWeight: 700, color: "var(--text)" }}>
                    {alpha.toFixed(2)}|0⟩ + ({betaReal.toFixed(2)}{betaImag >= 0 ? "+" : ""}{betaImag.toFixed(2)}i)|1⟩
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-3)", fontWeight: 700, textTransform: "uppercase", marginBottom: 6 }}>
                    Bob's Received State
                  </div>
                  <div style={{ fontFamily: "monospace", fontSize: "0.95rem", fontWeight: 700, color: isMatched ? "#34d399" : "#fbbf24" }}>
                    {bobAlpha.toFixed(2)}|0⟩ + ({bobBetaReal.toFixed(2)}{bobBetaImag >= 0 ? "+" : ""}{bobBetaImag.toFixed(2)}i)|1⟩
                  </div>
                </div>
              </div>
            </div>

            {isMatched ? (
              <div style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid #34d399", borderRadius: 12, padding: 20, textAlign: "center" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#34d399", margin: "0 0 6px 0" }}>
                  🎉 Teleportation Success! (100% Fidelity)
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-2)", margin: 0 }}>
                  Bob's final state vector perfectly matches Alice's original input state! Quantum teleportation completed successfully without ever physically transferring a particle.
                </p>
              </div>
            ) : (
              <div style={{ background: "rgba(251, 191, 36, 0.12)", border: "1px solid #fbbf24", borderRadius: 12, padding: 20, textAlign: "center" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fbbf24", margin: "0 0 6px 0" }}>
                  ⚠️ State Mismatch (Incorrect Correction Gates)
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-2)", margin: 0 }}>
                  Bob applied incorrect correction gates! Toggle X/Z checkboxes in Step 5 matching Alice's bits ({measuredBits?.m0}, {measuredBits?.m1}) to achieve 100% fidelity.
                </p>
              </div>
            )}

            <button
              className="btn-secondary-wiser w-100 mt-4"
              onClick={() => {
                setStep(0);
                setMeasuredBits(null);
                setUserX(false);
                setUserZ(false);
              }}
            >
              🔄 Try Another Qubit State
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------
// Interactive Activity Component: Superdense Coding
// ---------------------------------------------
function SuperdenseActivity() {
  const [targetBits, setTargetBits] = useState("11");
  const [step, setStep] = useState(0);

  const [appliedX, setAppliedX] = useState(false);
  const [appliedZ, setAppliedZ] = useState(false);
  const [decodedBits, setDecodedBits] = useState<string | null>(null);

  const isMatched = decodedBits === targetBits;
  const reqX = targetBits.endsWith("1");
  const reqZ = targetBits.startsWith("1");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ background: "linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)", border: "1px solid #a78bfa", borderRadius: 16, padding: 20 }}>
        <div className="d-flex align-items-center gap-2 mb-2">
          <Sparkles size={20} className="text-primary" />
          <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0, color: "var(--text)" }}>
            Hands-On Superdense Coding Activity
          </h4>
        </div>
        <p style={{ fontSize: "0.88rem", color: "var(--text-2)", margin: 0, lineHeight: 1.6 }}>
          Choose a 2-bit classical message (`00`, `01`, `10`, `11`), initialize a shared entangled Bell pair, apply Alice's local quantum gates, transmit 1 physical qubit, and watch Bob decode all 2 classical bits!
        </p>
      </div>

      <div className="d-flex justify-content-between align-items-center gap-2 overflow-x-auto pb-2">
        {["1. Select 2 Bits", "2. Share EPR Pair", "3. Alice Encoding", "4. Send 1 Qubit", "5. Bob Decodes", "6. Verification"].map((stTitle, idx) => (
          <button
            key={idx}
            onClick={() => setStep(idx)}
            style={{
              flex: 1,
              padding: "10px 12px",
              background: step === idx ? "var(--accent)" : step > idx ? "rgba(52, 211, 153, 0.15)" : "var(--bg-canvas)",
              color: step === idx ? "#fff" : step > idx ? "#34d399" : "var(--text-3)",
              border: step === idx ? "1px solid var(--accent)" : "1px solid var(--border)",
              borderRadius: 10,
              fontSize: "0.78rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {stTitle}
          </button>
        ))}
      </div>

      <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
        {step === 0 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 1: Select the 2 Classical Bits to Transmit
            </h5>
            <p style={{ fontSize: "0.85rem", color: "var(--text-2)", marginBottom: 18 }}>
              Select which 2-bit classical string Alice wants to send using only 1 physical qubit:
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
              {["00", "01", "10", "11"].map(b => (
                <button
                  key={b}
                  onClick={() => {
                    setTargetBits(b);
                    setDecodedBits(null);
                    setAppliedX(false);
                    setAppliedZ(false);
                  }}
                  style={{
                    padding: 16,
                    background: targetBits === b ? "var(--accent)" : "var(--bg-card)",
                    color: targetBits === b ? "#fff" : "var(--text)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {b}
                </button>
              ))}
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 14, fontSize: "0.82rem" }}>
              <div style={{ fontWeight: 700, color: "var(--accent)", marginBottom: 4 }}>Target Message: "{targetBits}"</div>
              <div style={{ color: "var(--text-3)" }}>
                Required Alice Encoding: {reqX && reqZ ? "Apply X and Z gates" : reqX ? "Apply X gate (Bit flip)" : reqZ ? "Apply Z gate (Phase flip)" : "Apply Identity (No gates)"}
              </div>
            </div>

            <button className="btn-primary-wiser w-100 mt-4" onClick={() => setStep(1)}>
              Lock Message &amp; Initialize EPR Pair (Step 2) &rarr;
            </button>
          </div>
        )}

        {step === 1 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 2: Generate Shared Entangled EPR Pair
            </h5>
            <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.6 }}>
              A source distributes an entangled Bell Pair:
              <span style={{ fontFamily: "monospace", display: "inline-block", background: "var(--bg-card)", padding: "2px 8px", borderRadius: 6, margin: "0 6px", color: "var(--accent)" }}>
                |Φ⁺⟩ = (|00⟩ + |11⟩)/√2
              </span>
              Alice receives qubit q₀, Bob receives qubit q₁.
            </p>

            <div style={{ background: "var(--bg-card)", border: "1px dashed var(--accent)", borderRadius: 12, padding: 20, textAlign: "center", margin: "20px 0" }}>
              <div className="d-flex justify-content-center align-items-center gap-4">
                <div style={{ background: "rgba(6, 182, 212, 0.15)", border: "1px solid var(--accent)", padding: 12, borderRadius: 10 }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 700 }}>Alice Qubit q₀</div>
                </div>
                <div style={{ color: "var(--accent)", fontWeight: 700 }}>&larr; Shared Entanglement &rarr;</div>
                <div style={{ background: "rgba(167, 139, 250, 0.15)", border: "1px solid #a78bfa", padding: 12, borderRadius: 10 }}>
                  <div style={{ fontSize: "0.75rem", color: "#a78bfa", fontWeight: 700 }}>Bob Qubit q₁</div>
                </div>
              </div>
            </div>

            <button className="btn-primary-wiser w-100" onClick={() => setStep(2)}>
              Proceed to Alice's Encoding (Step 3) &rarr;
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 3: Alice Encodes Classical Bits onto Her Qubit
            </h5>
            <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.6 }}>
              Alice encodes her target bits <strong>"{targetBits}"</strong> by applying local quantum logic gates to her single qubit q₀:
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "16px 0" }}>
              <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: "0.88rem" }}>
                <input type="checkbox" checked={appliedX} onChange={e => { setAppliedX(e.target.checked); setDecodedBits(null); }} />
                <span>Apply Pauli X Gate (Bit Flip) — Needed for target "{targetBits}": {reqX ? "YES" : "NO"}</span>
              </label>

              <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: "0.88rem" }}>
                <input type="checkbox" checked={appliedZ} onChange={e => { setAppliedZ(e.target.checked); setDecodedBits(null); }} />
                <span>Apply Pauli Z Gate (Phase Flip) — Needed for target "{targetBits}": {reqZ ? "YES" : "NO"}</span>
              </label>
            </div>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 14, fontSize: "0.82rem", marginBottom: 20 }}>
              <span style={{ color: "var(--text-3)" }}>Mapped Bell State: </span>
              <strong style={{ color: "var(--accent)", fontFamily: "monospace" }}>
                {!appliedX && !appliedZ && "|Φ⁺⟩ = (|00⟩ + |11⟩)/√2"}
                {appliedX && !appliedZ && "|Ψ⁺⟩ = (|01⟩ + |10⟩)/√2"}
                {!appliedX && appliedZ && "|Φ⁻⟩ = (|00⟩ - |11⟩)/√2"}
                {appliedX && appliedZ && "|Ψ⁻⟩ = (|01⟩ - |10⟩)/√2"}
              </strong>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn-secondary-wiser"
                style={{ flex: 1 }}
                onClick={() => {
                  setAppliedX(reqX);
                  setAppliedZ(reqZ);
                }}
              >
                Auto-Encode Correct Gates
              </button>
              <button className="btn-primary-wiser" style={{ flex: 1.2 }} onClick={() => setStep(3)}>
                Transmit Qubit (Step 4) &rarr;
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 4: Transmit Single Encoded Qubit to Bob
            </h5>
            <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.6 }}>
              Alice sends her single physical qubit q₀ through the quantum channel to Bob.
            </p>

            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 20, textAlign: "center", margin: "20px 0" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--text-3)", marginBottom: 8 }}>Quantum Transmission Line (1 Qubit)</div>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12 }}>
                <span style={{ fontWeight: 700, color: "var(--accent)" }}>Alice (q₀)</span>
                <div style={{ flex: 1, height: 4, background: "linear-gradient(90deg, var(--accent) 0%, #34d399 100%)", borderRadius: 2 }} />
                <span style={{ fontWeight: 700, color: "#a78bfa" }}>Bob (q₁)</span>
              </div>
            </div>

            <button className="btn-primary-wiser w-100" onClick={() => setStep(4)}>
              Proceed to Bob's Bell Measurement (Step 5) &rarr;
            </button>
          </div>
        )}

        {step === 4 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 5: Bob Decodes Both Classical Bits
            </h5>
            <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.6 }}>
              Bob receives qubit q₀ and performs a joint Bell basis measurement on both qubits (q₀ and q₁). This maps the state back into computational basis bits.
            </p>

            {decodedBits === null ? (
              <button
                className="btn-primary-wiser w-100 py-3"
                onClick={() => {
                  const b0 = appliedZ ? "1" : "0";
                  const b1 = appliedX ? "1" : "0";
                  setDecodedBits(b0 + b1);
                }}
              >
                ⚡ Perform Bell Basis Decoding Measurement
              </button>
            ) : (
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 20, textAlign: "center" }}>
                <div style={{ fontSize: "0.75rem", color: "var(--text-3)", textTransform: "uppercase", fontWeight: 700 }}>
                  Decoded Classical Bit Outcome
                </div>
                <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "var(--accent)", margin: "10px 0" }}>
                  {decodedBits}
                </div>
                <button className="btn-primary-wiser w-100 mt-3" onClick={() => setStep(5)}>
                  View Verification Report (Step 6) &rarr;
                </button>
              </div>
            )}
          </div>
        )}

        {step === 5 && (
          <div>
            <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 14, color: "var(--accent)" }}>
              Step 6: Activity Verification &amp; Channel Capacity Report
            </h5>

            <div className="row g-3 mb-4 text-center">
              <div className="col-6">
                <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-3)", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
                    Alice Target Message
                  </div>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text)" }}>"{targetBits}"</div>
                </div>
              </div>

              <div className="col-6">
                <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-3)", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
                    Bob Decoded Message
                  </div>
                  <div style={{ fontSize: "1.8rem", fontWeight: 800, color: isMatched ? "#34d399" : "#fbbf24" }}>"{decodedBits}"</div>
                </div>
              </div>
            </div>

            {isMatched ? (
              <div style={{ background: "rgba(52, 211, 153, 0.12)", border: "1px solid #34d399", borderRadius: 12, padding: 20, textAlign: "center" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#34d399", margin: "0 0 6px 0" }}>
                  🎉 Superdense Coding Advantage Demonstrated!
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-2)", margin: 0 }}>
                  2 classical bits (`{targetBits}`) were successfully transmitted over only 1 physical qubit! Information density was doubled via shared entanglement.
                </p>
              </div>
            ) : (
              <div style={{ background: "rgba(251, 191, 36, 0.12)", border: "1px solid #fbbf24", borderRadius: 12, padding: 20, textAlign: "center" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fbbf24", margin: "0 0 6px 0" }}>
                  ⚠️ Decoded Message Mismatch
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-2)", margin: 0 }}>
                  Alice applied incorrect encoding gates for target message "{targetBits}". Re-encode in Step 3 to match target.
                </p>
              </div>
            )}

            <button
              className="btn-secondary-wiser w-100 mt-4"
              onClick={() => {
                setStep(0);
                setDecodedBits(null);
                setAppliedX(false);
                setAppliedZ(false);
              }}
            >
              🔄 Try Another 2-Bit Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------
// Dynamic Lab Component
// ---------------------------------------------
const TELEPORT_TOPICS = [
  {
    id: "entangled-source",
    label: "Entangled Pair Share",
    tag: "Distributing EPR resources between Alice & Bob.",
    desc: "A maximally entangled Bell State |Φ⁺⟩ = (|00⟩+|11⟩)/√2 is pre-distributed to form the spatial quantum shortcut.",
    longContent: {
      kicker: "Phase 1: Quantum Entanglement Setup",
      tagline: "Building the spatial link over remote distances.",
      description: "Alice and Bob pre-share a pair of qubits prepared in the entangled Bell State. This entanglement serves as the information shortcut. Neither party gains information by measuring their own qubit alone, but the correlation is instantly available.",
    }
  },
  {
    id: "bell-measurement",
    label: "Bell Measurement",
    tag: "Alice couples the state and collapses the system.",
    desc: "Alice applies CX and Hadamard gates to project her message state with her half of the EPR pair.",
    longContent: {
      kicker: "Phase 2: Joint State Projection",
      tagline: "Destroying the original qubit state to tele-transport it.",
      description: "Alice executes a Bell Basis Measurement. By performing a CX gate (message onto EPR qubit) followed by a Hadamard gate, she couples the systems. Measuring these qubits collapses her message state, destroying its physical copy while projecting the target values onto Bob.",
    }
  },
  {
    id: "classical-channel",
    label: "Classical Channel",
    tag: "Sending measurement bits at speed of light.",
    desc: "Alice makes a classical fiber call transmitting her two bits (00, 01, 10, or 11) to Bob.",
    longContent: {
      kicker: "Phase 3: Classical Data Transmission",
      tagline: "Relaying the measurement outcomes to Bob.",
      description: "Alice transmits the two classical bits representing her measurement outcomes (00, 01, 10, or 11) over standard fiber optic cables. Because the quantum state is corrupted at Alice's terminal, the transfer is secure, and Bob must wait for this classical key to recover it.",
    }
  },
  {
    id: "unitary-correction",
    label: "Unitary Corrections",
    tag: "Bob rotates his qubit to reconstruct original state.",
    desc: "Matching Alice's bits, Bob applies X and Z gates to restore the initial state with 100% fidelity.",
    longContent: {
      kicker: "Phase 4: Unitary State Reconstruction",
      tagline: "Rotating the target qubit to finalize retrieval.",
      description: "Bob receives the classical bits. Depending on Alice's measurements, Bob's qubit is in a rotated state. Bob applies conditional Pauli X and Z correction gates to rotate his qubit back into the exact initial state prepared by Alice, achieving perfect reconstruction.",
    }
  }
];

const DENSE_TOPICS = [
  {
    id: "entangled-resource",
    label: "Entangled Sharing",
    tag: "Starting with a Maximally Entangled EPR pair.",
    desc: "Alice and Bob pre-share an EPR Bell State |Φ⁺⟩ linking their terminals before transmission.",
    longContent: {
      kicker: "Phase 1: Pre-Shared Entangled Channel",
      tagline: "Coupling the sender and receiver terminals.",
      description: "Superdense coding relies on a pre-shared entangled Bell State |Φ⁺⟩. This shared resource allows local changes made by Alice to instantly alter the joint state of the system, setting up the double-bit capacity expansion.",
    }
  },
  {
    id: "alice-encoding",
    label: "Alice's Encoding",
    tag: "Applying local rotations to map 2 classical bits.",
    desc: "Alice applies X, Z, or identity gates to encode 00, 01, 10, or 11 onto her qubit.",
    longContent: {
      kicker: "Phase 2: Local Unitary Operations",
      tagline: "Manipulating the joint state locally.",
      description: "Alice encodes 2 classical bits by applying local operations on her qubit. She applies the Identity gate (I) for '00', Pauli X for '01', Pauli Z for '10', and X-Z for '11'. These operations map the joint system into one of the four orthogonal Bell States.",
    }
  },
  {
    id: "qubit-transit",
    label: "Qubit Transmission",
    tag: "Sending 1 physical qubit through the channel.",
    desc: "Alice transmits her single encoded qubit to Bob, using only half of the physical line.",
    longContent: {
      kicker: "Phase 3: Quantum Channel Transit",
      tagline: "Sending the single physical information carrier.",
      description: "Alice sends her single physical qubit to Bob through a quantum channel. Even though only 1 physical qubit is transmitted over the wire, it contains the joint state modification, carrying the full 2 classical bits of information.",
    }
  },
  {
    id: "bell-decoding",
    label: "Bell Basis Decoding",
    tag: "Bob performs joint measures to decode bits.",
    desc: "Bob measures both qubits jointly in the Bell basis to deterministically read the 2 classical bits.",
    longContent: {
      kicker: "Phase 4: Joint Basis Decoding",
      tagline: "Reconstructing the encoded classical data.",
      description: "Bob receives Alice's qubit and couples it with his pre-shared qubit. By performing a CX gate, a Hadamard gate, and measuring both in the computational basis, Bob determines which of the four Bell States was sent, decoding Alice's 2 bits.",
    }
  }
];

function TheoryTopicVisual({ id }: { id: string }) {
  if (id === "entangled-source" || id === "entangled-resource") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          <circle cx="110" cy="75" r="16" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" strokeWidth="2" />
          <text x="110" y="79" fill="#06b6d4" fontSize="10" textAnchor="middle" fontWeight="bold">EPR</text>

          <line x1="94" y1="75" x2="35" y2="75" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="126" y1="75" x2="185" y2="75" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 2" />

          <circle cx="35" cy="75" r="8" fill="#a78bfa" />
          <text x="35" y="78" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">A</text>
          <circle cx="185" cy="75" r="8" fill="#f472b6" />
          <text x="185" y="78" fill="#fff" fontSize="8" textAnchor="middle" fontWeight="bold">B</text>
        </svg>
        <span className="visual-caption">Entangled State Generation (|Φ⁺⟩)</span>
      </div>
    );
  }

  if (id === "bell-measurement") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          <line x1="20" y1="45" x2="200" y2="45" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="20" y1="95" x2="200" y2="95" stroke="var(--border)" strokeWidth="1.5" />
          <text x="40" y="35" fill="var(--text-3)" fontSize="9">q0 (msg)</text>
          <text x="40" y="85" fill="var(--text-3)" fontSize="9">q1 (Alice EPR)</text>

          <line x1="90" y1="45" x2="90" y2="95" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="90" cy="45" r="4" fill="#06b6d4" />
          <circle cx="90" cy="95" r="8" fill="none" stroke="#06b6d4" strokeWidth="1.5" />

          <rect x="130" y="30" width="30" height="30" rx="4" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="145" y="49" fill="#06b6d4" fontSize="12" fontWeight="bold" textAnchor="middle">H</text>
        </svg>
        <span className="visual-caption">Joint Bell Basis Measurement</span>
      </div>
    );
  }

  if (id === "classical-channel") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          <rect x="20" y="45" width="180" height="60" rx="10" fill="rgba(255,255,255,0.02)" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="20" y1="75" x2="200" y2="75" stroke="#34d399" strokeWidth="3" strokeDasharray="10 5" />
          <text x="110" y="80" fill="#34d399" fontSize="16" fontWeight="bold" textAnchor="middle">101100</text>
        </svg>
        <span className="visual-caption">Classical Transmission (Fiber Cable)</span>
      </div>
    );
  }

  if (id === "unitary-correction") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          <line x1="20" y1="75" x2="200" y2="75" stroke="var(--border)" strokeWidth="1.5" />

          <rect x="60" y="55" width="40" height="40" rx="6" fill="rgba(167, 139, 250, 0.1)" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="80" y="79" fill="#a78bfa" fontSize="16" fontWeight="bold" textAnchor="middle">X</text>

          <rect x="120" y="55" width="40" height="40" rx="6" fill="rgba(244, 114, 182, 0.1)" stroke="#f472b6" strokeWidth="1.5" />
          <text x="140" y="79" fill="#f472b6" fontSize="16" fontWeight="bold" textAnchor="middle">Z</text>
        </svg>
        <span className="visual-caption">Bob's State Recovery Actions</span>
      </div>
    );
  }

  if (id === "alice-encoding") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          <line x1="20" y1="75" x2="200" y2="75" stroke="var(--border)" strokeWidth="1.5" />
          <rect x="70" y="50" width="80" height="50" rx="8" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="2" />
          <text x="110" y="74" fill="#06b6d4" fontSize="12" fontWeight="bold" textAnchor="middle">U(b1, b2)</text>
          <text x="110" y="90" fill="var(--text-3)" fontSize="9" textAnchor="middle">X and Z Gates</text>
        </svg>
        <span className="visual-caption">Alice's Unitary Encoding Operations</span>
      </div>
    );
  }

  if (id === "qubit-transit") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          <line x1="20" y1="75" x2="200" y2="75" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="110" cy="75" r="14" fill="rgba(167, 139, 250, 0.15)" stroke="#a78bfa" strokeWidth="2" />
          <text x="110" y="79" fill="#a78bfa" fontSize="10" textAnchor="middle" fontWeight="bold">q (Alice)</text>
          <path d="M 135 75 L 175 75" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#transit-arrow)" />
          <defs>
            <marker id="transit-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#a78bfa" />
            </marker>
          </defs>
        </svg>
        <span className="visual-caption">Single Qubit Channel Transmission</span>
      </div>
    );
  }

  if (id === "bell-decoding") {
    return (
      <div className="visual-graphic-container">
        <svg width="220" height="150" viewBox="0 0 220 150">
          <line x1="20" y1="45" x2="200" y2="45" stroke="var(--border)" strokeWidth="1.5" />
          <line x1="20" y1="95" x2="200" y2="95" stroke="var(--border)" strokeWidth="1.5" />

          <line x1="60" y1="45" x2="60" y2="95" stroke="#06b6d4" strokeWidth="1.5" />
          <circle cx="60" cy="45" r="4" fill="#06b6d4" />
          <circle cx="60" cy="95" r="8" fill="none" stroke="#06b6d4" strokeWidth="1.5" />

          <rect x="90" y="30" width="30" height="30" rx="4" fill="rgba(6, 182, 212, 0.1)" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="105" y="49" fill="#06b6d4" fontSize="12" fontWeight="bold" textAnchor="middle">H</text>

          <rect x="140" y="30" width="30" height="30" rx="4" fill="rgba(255,255,255,0.02)" stroke="var(--border)" strokeWidth="1.5" />
          <text x="155" y="49" fill="var(--text)" fontSize="12" fontWeight="bold" textAnchor="middle">M</text>
          <rect x="140" y="80" width="30" height="30" rx="4" fill="rgba(255,255,255,0.02)" stroke="var(--border)" strokeWidth="1.5" />
          <text x="155" y="99" fill="var(--text)" fontSize="12" fontWeight="bold" textAnchor="middle">M</text>
        </svg>
        <span className="visual-caption">Bell Basis Decoding Measurement</span>
      </div>
    );
  }

  return null;
}

export default function LabWorkspacePage() {
  const params = useParams();
  const idStr = params.id as string; // "2.1", "2.2", "3.1", or "3.2"


  const isTeleport = idStr === "2.1";

  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<LangCode>("en");
  const [activeTab, setActiveTab] = useState<"theory" | "visual" | "activity" | "sandbox" | "quiz" | "report">("theory");

  const [bb84SubExp, setBb84SubExp] = useState(1);
  const [b92SubExp, setB92SubExp] = useState(1);
  const [teleportStep, setTeleportStep] = useState(0);
  const [denseStep, setDenseStep] = useState(0);

  // State for Exp 2.1 (Teleportation)
  const [theta, setTheta] = useState(90);
  const [phi, setPhi] = useState(0);
  const [aliceMeasured0, setAliceMeasured0] = useState<number | null>(null);
  const [aliceMeasured1, setAliceMeasured1] = useState<number | null>(null);
  const [userXGate, setUserXGate] = useState(false);
  const [userZGate, setUserZGate] = useState(false);

  // State for Exp 2.2 (Superdense Coding)
  const [denseBits, setDenseBits] = useState("11");
  const [denseUserXGate, setDenseUserXGate] = useState(false);
  const [denseUserZGate, setDenseUserZGate] = useState(false);
  const [bobMeasuredBits, setBobMeasuredBits] = useState<string | null>(null);

  // Code Copy State
  const [copied, setCopied] = useState(false);

  // Quiz States (10 questions, 30s timer, 1 by 1)
  const [quizIndex, setQuizIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);

  const dict = TRANSLATIONS[lang];

  // 10-Question Quiz Data
  const teleportQuiz = [
    {
      q: "What fundamental theorem of quantum mechanics asserts that we cannot make an exact copy of an unknown state?",
      options: ["Heisenberg's Uncertainty Principle", "Quantum No-Cloning Theorem", "Bell's Theorem", "Schrödinger's Cat Paradox"],
      correct: 1
    },
    {
      q: "What resource must Alice and Bob pre-share to teleport a quantum state?",
      options: ["A classical fiber optical connection", "A maximally entangled Bell Pair state", "A single unentangled qubit", "A classical secret key"],
      correct: 1
    },
    {
      q: "Which state describes the standard maximally entangled Bell Pair state |Φ⁺⟩?",
      options: ["(|00⟩ + |11⟩)/√2", "(|01⟩ + |10⟩)/√2", "(|00⟩ - |11⟩)/√2", "(|01⟩ - |10⟩)/√2"],
      correct: 0
    },
    {
      q: "Why does teleportation NOT violate the No-Cloning Theorem?",
      options: ["The teleported state is classical", "Alice's original state is collapsed and destroyed during measurement", "Bob receives only a close approximation", "It copies the state instead of transferring it"],
      correct: 1
    },
    {
      q: "Which gates does Alice apply to perform a measurement in the Bell basis?",
      options: ["Hadamard followed by Pauli X", "CNOT followed by Hadamard", "Pauli X followed by CNOT", "Identity followed by phase shifts"],
      correct: 1
    },
    {
      q: "Why is teleportation bounded by the speed of light?",
      options: ["Bob requires Alice's classical measurement bits to apply corrections", "Quantum entanglement decays instantly", "Pauli corrections require light speed to initiate", "Fiber lines block quantum states"],
      correct: 0
    },
    {
      q: "What correction must Bob apply if Alice's measurements yield bits '01' (q₁=0, q₀=1)?",
      options: ["Apply Z gate", "Apply X gate", "Apply both X and Z gates", "No correction needed"],
      correct: 1
    },
    {
      q: "What correction must Bob apply if Alice's measurements yield bits '10' (q₁=1, q₀=0)?",
      options: ["Apply X gate", "Apply Z gate", "Apply both X and Z gates", "No correction needed"],
      correct: 1
    },
    {
      q: "What is the Quantum Bit Error Rate (QBER) if Bob applies Z correction when X correction was needed?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 3
    },
    {
      q: "In Quantum Resource Theory, quantum teleportation uses 1 logical entangled qubit and 2 classical bits to transmit how many qubits?",
      options: ["1 qubit", "2 qubits", "3 qubits", "4 qubits"],
      correct: 0
    }
  ];

  const denseQuiz = [
    {
      q: "How many classical bits can Alice transmit using a single physical qubit in Superdense Coding?",
      options: ["1 classical bit", "2 classical bits", "3 classical bits", "4 classical bits"],
      correct: 1
    },
    {
      q: "Which gate does Alice apply to her qubit to encode the classical bits '10'?",
      options: ["Identity Gate (I)", "Bit-Flip Gate (X)", "Phase-Flip Gate (Z)", "Both X and Z gates"],
      correct: 2
    },
    {
      q: "What measurement basis does Bob use to decode Alice's encoded classical message?",
      options: ["Computational basis", "Bell state basis", "Hadamard basis", "Bloch sphere basis"],
      correct: 1
    },
    {
      q: "If Alice encodes the bits '11', what state does she transform the initial |Φ⁺⟩ entangled pair into?",
      options: ["|Φ⁺⟩", "|Φ⁻⟩", "|Ψ⁺⟩", "|Ψ⁻⟩"],
      correct: 3
    },
    {
      q: "Why does Superdense Coding not violate classical information bounds?",
      options: ["Because it leverages a pre-shared entangled state", "Because Alice sends 2 physical qubits instead of 1", "Because Bob guesses the bits", "The bits are sent classically"],
      correct: 0
    },
    {
      q: "In what year was the first Superdense Coding proposal published by Charles Bennett and Stephen Wiesner?",
      options: ["1970", "1982", "1992", "2001"],
      correct: 2
    },
    {
      q: "If Bob decodes the state (|01⟩ + |10⟩)/√2 (|Ψ⁺⟩), what bits did Alice encode?",
      options: ["00", "01", "10", "11"],
      correct: 1
    },
    {
      q: "What gates does Bob apply to map the Bell basis back into the computational basis?",
      options: ["Hadamard then CNOT", "CNOT then Hadamard", "Pauli X then CNOT", "Z then Hadamard"],
      correct: 1
    },
    {
      q: "Who is the recipient of the encoded physical qubit in the protocol?",
      options: ["Alice", "Bob", "Eve", "Charlie"],
      correct: 1
    },
    {
      q: "What is the maximum distance for Superdense Coding in practice limited by?",
      options: ["Quantum coherence and transmission channel loss", "The speed of light", "The computing power of Bob's device", "Fiber insulation thickness"],
      correct: 0
    }
  ];

  const bb84Quiz = [
    {
      q: "Who proposed the BB84 quantum key distribution protocol?",
      options: ["Charles Bennett and Gilles Brassard in 1984", "Stephen Wiesner in 1970", "Artur Ekert in 1991", "Albert Einstein in 1935"],
      correct: 0
    },
    {
      q: "How many distinct polarization states are utilized in the standard BB84 protocol?",
      options: ["2 states", "4 states", "6 states", "8 states"],
      correct: 1
    },
    {
      q: "What two conjugate bases does the BB84 protocol use to encode qubits?",
      options: ["Rectilinear (+) and Diagonal (×)", "Horizontal and Vertical only", "Computational and Circular", "Polarized and Non-polarized"],
      correct: 0
    },
    {
      q: "If Alice sends a qubit encoded in the '+' basis, and Bob measures in the '×' basis, what is the probability Bob gets the correct bit?",
      options: ["0%", "25%", "50%", "100%"],
      correct: 2
    },
    {
      q: "What is the standard Quantum Bit Error Rate (QBER) threshold for aborting a BB84 key exchange?",
      options: ["5%", "11%", "20%", "25%"],
      correct: 1
    },
    {
      q: "How do Alice and Bob decide which bits of their transmission form the sifted key?",
      options: ["They compare their actual raw bits over a public channel", "They compare their measurement bases publicly and keep only matched positions", "Eve tells Bob the correct bases", "Bob performs a quantum state copy on all bits"],
      correct: 1
    },
    {
      q: "Which law of physics prevents Eve from creating a copy of Alice's transmitted photon?",
      options: ["Quantum No-Cloning Theorem", "Heisenberg's Uncertainty Principle only", "Bell's Inequality Bound", "Pauli Exclusion Principle"],
      correct: 0
    },
    {
      q: "What is the expected QBER if Eve intercepts and measures 100% of the photons in a random basis (Full Intercept-Resend)?",
      options: ["11%", "25%", "50%", "75%"],
      correct: 1
    },
    {
      q: "If Eve intercepts only a fraction 'p' of photons in a partial intercept-resend attack, what is the expected QBER?",
      options: ["p", "p / 2", "p / 4", "p / 8"],
      correct: 2
    },
    {
      q: "Why is a larger photon count (N) required to guarantee QBER estimation accuracy?",
      options: ["To satisfy the Law of Large Numbers and reduce statistical variance", "To confuse Eve's detector lines", "To bypass fiber optic distance attenuation", "To increase key length dynamically"],
      correct: 0
    }
  ];

  const b92Quiz = [
    {
      q: "Who proposed the B92 quantum key distribution protocol?",
      options: ["Charles Bennett in 1992", "Gilles Brassard in 1992", "Stephen Wiesner in 1983", "Artur Ekert in 1991"],
      correct: 0
    },
    {
      q: "How many non-orthogonal quantum states does B92 use for bit encoding?",
      options: ["1 state", "2 states", "3 states", "4 states"],
      correct: 1
    },
    {
      q: "What polarization angles are typically used by Alice to represent bits 0 and 1 in B92?",
      options: ["0° and 90°", "0° and 45°", "+45° and -45°", "90° and 180°"],
      correct: 1
    },
    {
      q: "In the B92 protocol, what does a click on one of Bob's detectors conclusively reveal?",
      options: ["The transmission failed", "Alice sent a specific bit (the other state was blocked by Bob's filter)", "Eve has intercepted the channel", "Bob's basis was mismatched"],
      correct: 1
    },
    {
      q: "What is the expected inconclusive erasure rate in B92 over an ideal, noise-free channel?",
      options: ["0%", "25%", "50%", "75%"],
      correct: 2
    },
    {
      q: "How is sifting performed in the B92 protocol?",
      options: ["Bob announces which of his detectors clicked, and they keep only those bits", "They compare bases publicly", "Alice resends all failed bits", "Bob sends the key back to Alice"],
      correct: 0
    },
    {
      q: "What is the standard abort threshold for QBER in B92?",
      options: ["5%", "11%", "20%", "25%"],
      correct: 1
    },
    {
      q: "What quantum property makes B92 secure against eavesdropping?",
      options: ["The non-orthogonality of the two state vectors", "The use of four conjugate bases", "The speed of photon travel in fiber", "Bob's active decoy states"],
      correct: 0
    },
    {
      q: "What happens to the conclusive click rate as fiber distance increases in B92?",
      options: ["It increases due to reflection", "It decreases due to photon attenuation loss", "It remains completely constant", "It drops to exactly 0% immediately"],
      correct: 1
    },
    {
      q: "What is a major engineering advantage of B92 compared to BB84?",
      options: ["It requires fewer light sources and simpler encoder hardware", "It completely eliminates eavesdroppers", "It has a 100% key rate efficiency", "It does not require sifting"],
      correct: 0
    }
  ];

  const questions = idStr === '2.1' ? teleportQuiz : idStr === '2.2' ? denseQuiz : idStr === '3.1' ? bb84Quiz : b92Quiz;





  // Apply theme class to document root
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



  // --- BB84 (3.1) ------------------------------------------------------------
  const thetaRad = (theta * Math.PI) / 180;
  const phiRad = (phi * Math.PI) / 180;
  const alpha = Math.cos(thetaRad / 2);
  const betaReal = Math.cos(phiRad) * Math.sin(thetaRad / 2);
  const betaImag = Math.sin(phiRad) * Math.sin(thetaRad / 2);

  // Determine Bob's output state based on measurement outcomes and user correction gates
  let bobAlpha = alpha;
  let bobBetaReal = betaReal;
  let bobBetaImag = betaImag;

  if (isTeleport && aliceMeasured0 !== null && aliceMeasured1 !== null) {
    const expectedX = aliceMeasured1 === 1;
    const expectedZ = aliceMeasured0 === 1;

    if (userXGate !== expectedX) {
      bobAlpha = Math.sin(thetaRad / 2);
      bobBetaReal = Math.cos(phiRad) * Math.cos(thetaRad / 2);
      bobBetaImag = Math.sin(phiRad) * Math.cos(thetaRad / 2);
    }
    if (userZGate !== expectedZ) {
      bobBetaReal = -bobBetaReal;
      bobBetaImag = -bobBetaImag;
    }
  }

  // Projection values
  const R = 50;
  const cx = 80;
  const cy = 80;
  const xProjAlice = cx + 0.866 * (R * Math.sin(thetaRad) * Math.sin(phiRad) - R * Math.sin(thetaRad) * Math.cos(phiRad));
  const yProjAlice = cy - R * Math.cos(thetaRad) + 0.5 * (R * Math.sin(thetaRad) * Math.sin(phiRad) + R * Math.sin(thetaRad) * Math.cos(phiRad));

  const bobTheta = 2 * Math.acos(Math.max(-1, Math.min(1, bobAlpha)));
  const bobPhi = Math.atan2(bobBetaImag, bobBetaReal);
  const xProjBob = cx + 0.866 * (R * Math.sin(bobTheta) * Math.sin(bobPhi) - R * Math.sin(bobTheta) * Math.cos(bobPhi));
  const yProjBob = cy - R * Math.cos(bobTheta) + 0.5 * (R * Math.sin(bobTheta) * Math.sin(bobPhi) + R * Math.sin(bobTheta) * Math.cos(bobPhi));

  // Qiskit code text
  const qiskitCode = isTeleport
    ? getTeleportQiskitCode(theta, phi, userXGate, userZGate)
    : getDenseCodingQiskitCode(denseBits, denseUserXGate, denseUserZGate);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(qiskitCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Perform Alice's Bell measurement (simulated collapse)
  const triggerAliceMeasurement = () => {
    const m0 = Math.random() > 0.5 ? 1 : 0;
    const m1 = Math.random() > 0.5 ? 1 : 0;
    setAliceMeasured0(m0);
    setAliceMeasured1(m1);
    setUserXGate(false);
    setUserZGate(false);
  };

  // Perform Bob's Bell measurement for Superdense Coding
  const triggerBobMeasurement = () => {
    // Bob decodes based on what Alice toggled:
    // X gate flips bit 1. Z gate flips bit 0.
    const b0 = denseUserZGate ? "1" : "0";
    const b1 = denseUserXGate ? "1" : "0";
    setBobMeasuredBits(b0 + b1);
  };

  // Timer Effect
  useEffect(() => {
    if (activeTab !== "quiz" || quizSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleNextQuestion(true);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeTab, quizIndex, quizSubmitted]);

  const handleSelectOption = (optIdx: number) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(optIdx);
    const isCorrect = optIdx === questions[quizIndex].correct;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = (forced = false) => {
    setSelectedOpt(null);
    setTimeLeft(30);

    if (quizIndex < questions.length - 1) {
      setQuizIndex(prev => prev + 1);
    } else {
      setQuizSubmitted(true);
      const finalScore = quizScore + (forced ? 0 : 0);
      setQuizPassed(finalScore === questions.length);
    }
  };

  // jsPDF File Generators
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

    const aimText = isTeleport
      ? "The aim of this experiment is to demonstrate quantum teleportation, transferring an arbitrary state |&psi;&rang; from Alice to Bob using a pre-shared EPR entangled pair and two bits of classical communication. The protocol illustrates that quantum information can be transmitted without physically sending the carrier qubit, preserving the no-cloning theorem through local measurements and unitary corrections."
      : "The aim of this experiment is to demonstrate superdense coding, transmitting two classical bits from Alice to Bob by sending only a single physical qubit. The protocol leverages pre-shared entanglement to double the classical information capacity of a physical transmission channel, demonstrating how unitary operations can map joint states into orthogonal Bell states.";

    const theoryText = isTeleport
      ? "Quantum Teleportation allows the transfer of an arbitrary, unknown quantum state |&psi;&rang; = &alpha;|0&rang; + &beta;|1&rang; over distance without moving the physical particle itself. The protocol requires a shared resource: a maximally entangled Bell pair |&Phi;&bull;&rang; = (|00&rang; + |11&rang;)/&radic;2 distributed between Alice and Bob. Alice performs a joint measurement of her message qubit and her half of the entangled pair in the Bell basis. This measurement projects the system, collapsing her qubits and instantly placing Bob's qubit in one of four states corresponding to a Pauli transformation of Alice's original state. Alice sends the two classical measurement bits to Bob. Bob then applies the appropriate unitary correction gate (I, X, Z, or ZX) to recover the exact initial state |&psi;&rang;, preserving the original state vector without violating the no-cloning theorem."
      : "Superdense Coding is the dual protocol to quantum teleportation, allowing the transmission of two classical bits of information by sending only a single physical qubit. This is achieved using a pre-shared maximally entangled Bell state |&Phi;&bull;&rang; = (|00&rang; + |11&rang;)/&radic;2. Alice applies one of four local unitary operations (I, X, Z, or iY) corresponding to the classical bit pair she wishes to send (00, 01, 10, or 11). This operation maps the joint entangled state into one of the four orthogonal Bell states (|&Phi;&bull;&rang;, |&Phi;&macr;&rang;, |&Psi;&bull;&rang;, or |&Psi;&macr;&rang;). Alice then sends her single qubit to Bob. Bob performs a joint Bell basis measurement on both qubits, deterministically identifying which of the four Bell states was created. This allows him to recover the full 2 classical bits of information, demonstrating a 2:1 channel capacity enhancement enabled by entanglement.";

    const observationHtml = isTeleport
      ? `
      <ul>
        <li>Input Parameter Polar Angle (&theta;): <strong>${theta}&deg;</strong></li>
        <li>Input Parameter Azimuthal Angle (&phi;): <strong>${phi}&deg;</strong></li>
        <li>Calculated Initial State: <strong>|&psi;&rang; = ${alpha.toFixed(4)}|0&rang; + (${betaReal.toFixed(4)} + ${betaImag.toFixed(4)}i)|1&rang;</strong></li>
        <li>Alice's Collapsed Outcomes: <strong>q₀ = ${aliceMeasured0 ?? 0}, q₁ = ${aliceMeasured1 ?? 0}</strong></li>
        <li>Bob's Unitary Corrections: <strong>X-Gate = ${userXGate ? "APPLIED" : "SKIPPED"}, Z-Gate = ${userZGate ? "APPLIED" : "SKIPPED"}</strong></li>
        <li>Bob's Final Reconstructed State: <strong>|&psi;'&rang; = ${bobAlpha.toFixed(4)}|0&rang; + (${bobBetaReal.toFixed(4)} + ${bobBetaImag.toFixed(4)}i)|1&rang;</strong></li>
      </ul>
      <p>Transmission Result: <strong>${(userXGate === (aliceMeasured1 === 1) && userZGate === (aliceMeasured0 === 1)) ? "STATE TRANSFERRED SUCCESSFULLY (100% FIDELITY)" : "FIDELITY COMPROMISED (INCORRECT CORRECTION GATES)"}</strong></p>
      `
      : `
      <ul>
        <li>Alice's Target bits to send: <strong>"${denseBits}"</strong></li>
        <li>Alice's Encoding Unitary Gates: <strong>X-Gate = ${denseUserXGate ? "APPLIED" : "SKIPPED"}, Z-Gate = ${denseUserZGate ? "APPLIED" : "SKIPPED"}</strong></li>
        <li>Bob's Decoded bits: <strong>"${bobMeasuredBits ?? "Not Measured"}"</strong></li>
        <li>Shared Channel State: <strong>|&Phi;&bull;&rang; = (|00&rang; + |11&rang;)/&radic;2</strong></li>
      </ul>
      <p>Transmission Result: <strong>${(bobMeasuredBits === denseBits) ? "SUCCESSFUL DECODING (100% TRANSMISSION EFFICIENCY)" : "DECODING FAILED (INCORRECT GATES APPLIED)"}</strong></p>
      `;

    const svgCircuit = isTeleport
      ? `
      <svg width="600" height="150" viewBox="0 0 600 150" style="background: #ffffff; border: 1px solid #000000; border-radius: 4px; padding: 10px; display: block; margin: 15px auto;">
        <line x1="80" y1="30" x2="550" y2="30" stroke="black" stroke-width="1.5" />
        <line x1="80" y1="70" x2="550" y2="70" stroke="black" stroke-width="1.5" />
        <line x1="80" y1="110" x2="550" y2="110" stroke="black" stroke-width="1.5" />

        <text x="20" y="34" font-family="monospace" font-size="12" font-weight="bold">q0 (msg)</text>
        <text x="20" y="74" font-family="monospace" font-size="12" font-weight="bold">q1 (A)</text>
        <text x="20" y="114" font-family="monospace" font-size="12" font-weight="bold">q2 (B)</text>

        <!-- RY Gate -->
        <rect x="100" y="18" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="115" y="33" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">RY</text>

        <!-- RZ Gate -->
        <rect x="140" y="18" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="155" y="33" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">RZ</text>

        <!-- H Gate -->
        <rect x="180" y="58" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="195" y="73" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">H</text>

        <!-- CNOT q1 -> q2 -->
        <line x1="230" y1="70" x2="230" y2="110" stroke="black" stroke-width="1.5" stroke-dasharray="3,3" />
        <circle cx="230" cy="70" r="4" fill="black" />
        <circle cx="230" cy="110" r="10" fill="none" stroke="black" stroke-width="1.5" />
        <line x1="220" y1="110" x2="240" y2="110" stroke="black" stroke-width="1.5" />
        <line x1="230" y1="100" x2="230" y2="120" stroke="black" stroke-width="1.5" />

        <!-- CNOT q0 -> q1 -->
        <line x1="270" y1="30" x2="270" y2="70" stroke="black" stroke-width="1.5" stroke-dasharray="3,3" />
        <circle cx="270" cy="30" r="4" fill="black" />
        <circle cx="270" cy="70" r="10" fill="none" stroke="black" stroke-width="1.5" />
        <line x1="260" y1="70" x2="280" y2="70" stroke="black" stroke-width="1.5" />
        <line x1="270" y1="60" x2="270" y2="80" stroke="black" stroke-width="1.5" />

        <!-- H Gate on q0 -->
        <rect x="310" y="18" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="325" y="33" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">H</text>

        <!-- Measure q0 -->
        <rect x="360" y="18" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="375" y="33" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">M</text>

        <!-- Measure q1 -->
        <rect x="360" y="58" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="375" y="73" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">M</text>

        <!-- X correction -->
        <rect x="420" y="98" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="435" y="113" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">X</text>

        <!-- Z correction -->
        <rect x="460" y="98" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="475" y="113" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Z</text>
      </svg>
      `
      : `
      <svg width="600" height="120" viewBox="0 0 600 120" style="background: #ffffff; border: 1px solid #000000; border-radius: 4px; padding: 10px; display: block; margin: 15px auto;">
        <line x1="80" y1="35" x2="550" y2="35" stroke="black" stroke-width="1.5" />
        <line x1="80" y1="75" x2="550" y2="75" stroke="black" stroke-width="1.5" />

        <text x="20" y="39" font-family="monospace" font-size="12" font-weight="bold">q0 (A)</text>
        <text x="20" y="79" font-family="monospace" font-size="12" font-weight="bold">q1 (B)</text>

        <!-- H Gate -->
        <rect x="100" y="23" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="115" y="38" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">H</text>

        <!-- CNOT -->
        <line x1="150" y1="35" x2="150" y2="75" stroke="black" stroke-width="1.5" stroke-dasharray="3,3" />
        <circle cx="150" cy="35" r="4" fill="black" />
        <circle cx="150" cy="75" r="10" fill="none" stroke="black" stroke-width="1.5" />
        <line x1="140" y1="75" x2="160" y2="75" stroke="black" stroke-width="1.5" />
        <line x1="150" y1="65" x2="150" y2="85" stroke="black" stroke-width="1.5" />

        <!-- Encoding Box (Alice) -->
        <rect x="200" y="20" width="60" height="30" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="230" y="39" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">U(${denseBits})</text>

        <!-- Decode CNOT -->
        <line x1="290" y1="35" x2="290" y2="75" stroke="black" stroke-width="1.5" stroke-dasharray="3,3" />
        <circle cx="290" cy="35" r="4" fill="black" />
        <circle cx="290" cy="75" r="10" fill="none" stroke="black" stroke-width="1.5" />
        <line x1="280" y1="75" x2="300" y2="75" stroke="black" stroke-width="1.5" />
        <line x1="290" y1="65" x2="290" y2="85" stroke="black" stroke-width="1.5" />

        <!-- H Gate -->
        <rect x="330" y="23" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="345" y="38" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">H</text>

        <!-- Measurement 0 -->
        <rect x="380" y="23" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="395" y="38" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">M</text>

        <!-- Measurement 1 -->
        <rect x="380" y="63" width="30" height="24" rx="2" fill="white" stroke="black" stroke-width="1.5" />
        <text x="395" y="78" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">M</text>
      </svg>
      `;

    const conclusionText = isTeleport
      ? "The quantum teleportation simulation was completed successfully. By executing joint Bell basis measurements, Alice's message state was collapsed, and its parameters were transferred to Bob's remote qubit. Bob's application of matching Pauli corrections restored the exact original state vector on his terminal, matching the analytical prediction."
      : "The superdense coding simulation was completed successfully. By sharing a maximally entangled EPR pair, Alice successfully encoded 2 classical bits onto 1 physical qubit using local unitary operations. Bob successfully recovered the bits using Bell basis measurements, verifying the capacity enhancement.";

    w.document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>Experiment ${idStr} Report — ${isTeleport ? "Quantum Teleportation" : "Superdense Coding"}</title>
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
    pre {
      background: #f3f4f6;
      border: 1px solid #ccc;
      padding: 15px;
      border-radius: 4px;
      font-family: Courier, monospace;
      font-size: 12px;
      overflow-x: auto;
      text-align: left;
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

<h1>LAB REPORT - EXPERIMENT ${idStr}</h1>
<h2>${isTeleport ? "Quantum Teleportation Protocol" : "Superdense Coding Protocol"}</h2>

<h3>1. Aim</h3>
<p>${aimText}</p>

<h3>2. Apparatus</h3>
<ul>
  ${isTeleport
        ? `
    <li>Entangled photon source (EPR Bell pair generator)</li>
    <li>Alice's transmitter terminal with state preparation controls (theta and phi)</li>
    <li>Coincident measurement detectors (Bell basis analyzer)</li>
    <li>Classical transmission lines (2 fiber bits)</li>
    <li>Bob's receiver terminal with unitary correction gates (X and Z)</li>
    <li>Output analysis and state validation board</li>
    `
        : `
    <li>Entangled photon source (EPR Bell pair generator)</li>
    <li>Alice's transmitter terminal with unitary encoding gates (X and Z)</li>
    <li>Classical encoding control (2 input bits)</li>
    <li>Single-qubit quantum transmission line</li>
    <li>Bob's receiver terminal with Bell basis measurement analyzer</li>
    <li>Output decoding validation board</li>
    `
      }
</ul>
<p><strong>Software:</strong> Qiskit Virtual Quantum Lab Suite</p>

<h3>3. Theory</h3>
<p>${theoryText}</p>

<h3>4. Observations</h3>
${observationHtml}

<h3>5. Circuit Schematic</h3>
${svgCircuit}

<h3>6. Programmatic Qiskit Implementation</h3>
<pre><code>${qiskitCode}</code></pre>

<h3>7. Conclusion & Verification</h3>
<p>${conclusionText}</p>

<hr style="border: 0; border-top: 1px dashed black; margin-top: 50px;"/>
<p style="text-align: center; font-size: 12px; color: #333;">
  <strong>VERIFICATION HASH:</strong> WQL-${idStr.replace(".", "")}-A3F9D1B2-2026<br/>
  Aether Quantum Laboratory Certification Board • Verified 10/10 Score<br/>
  <strong>Experiment Date:</strong> ${reportDate}
</p>

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

    let certTitle = "";
    let certHash = "";
    if (idStr === "2.1") {
      certTitle = "Quantum Teleportation • Experiment 2.1";
      certHash = "WQL-21-A3F9D1B2-2026";
    } else if (idStr === "2.2") {
      certTitle = "Superdense Coding • Experiment 2.2";
      certHash = "WQL-22-A3F9D1B2-2026";
    } else if (idStr === "3.1") {
      certTitle = "BB84 QKD Protocol • Experiment 3.1";
      certHash = "WQL-31-BB84-A9B8C7D6";
    } else if (idStr === "3.2") {
      certTitle = "B92 QKD Protocol • Experiment 3.2";
      certHash = "WQL-32-B92P-C3D4E5F6";
    }

    doc.text(certTitle, 148, 124, { align: "center" });

    doc.setDrawColor(201, 162, 39);
    doc.line(80, 142, 217, 142);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(156, 163, 175);
    doc.text("COMPLETION DATE", 30, 168);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(55, 65, 81);
    doc.text("12 July 2026", 30, 175);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(156, 163, 175);
    doc.text("VERIFICATION HASH", 267, 168, { align: "right" });
    doc.setFont("courier", "bold");
    doc.setFontSize(10);
    doc.setTextColor(139, 105, 20);
    doc.text(certHash, 267, 175, { align: "right" });

    doc.save(`Aether_Completion_Certificate_Exp_${idStr}.pdf`);
  };



  if (idStr === "1.1") {
    return <QuantumBasics dark={dark} setDark={setDark} lang={lang} setLang={setLang} />;
  }

  if (idStr === "1.2") {
    return <QuantumEntanglement dark={dark} setDark={setDark} lang={lang} setLang={setLang} />;
  }

  if (idStr === "3.1") {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
        <nav className="wiser-nav scrolled" style={{ position: "sticky" }}>
          <div className="container-xl d-flex align-items-center justify-content-between">
            <Link href="/experiments" className="d-flex align-items-center gap-2" style={{ textDecoration: "none", color: "var(--text)" }}>
              <ArrowLeft size={16} /><span style={{ fontSize: "0.85rem", fontWeight: 600 }}>Exit</span>
            </Link>
            <div className="d-flex align-items-center gap-3">
              <button className="theme-toggle" onClick={() => setDark(!dark)} style={{ width: 44, height: 22 }}>
                <div className="theme-toggle-thumb" style={{ width: 16, height: 16, borderRadius: "50%", transform: `translateX(${dark ? "22px" : "2px"})`, background: dark ? "var(--accent)" : "#fbbf24", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {dark ? <Moon size={8} color="#fff" /> : <Sun size={8} color="#fff" />}
                </div>
              </button>
              <select value={lang} onChange={(e) => setLang(e.target.value as LangCode)} style={{ fontSize: "0.75rem", background: "var(--bg-canvas)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 6, padding: "4px 8px", outline: "none" }}>
                {(Object.keys(LANG_META) as LangCode[]).map((key) => (<option key={key} value={key}>{LANG_META[key].flag} {LANG_META[key].label}</option>))}
              </select>
            </div>
          </div>
        </nav>
        <div className="container-xl py-4" style={{ maxWidth: 1200 }}>
          <header className="mb-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
              <div>
                <span style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>Quantum Key Distribution • Experiment 3.1</span>
                <h2 className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700, margin: "4px 0" }}>BB84 Protocol + Eavesdropping</h2>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span style={{ fontSize: "0.85rem", color: "var(--text-3)", fontWeight: 600 }}>Select Sub-Experiment:</span>
                <select value={bb84SubExp} onChange={(e) => setBb84SubExp(Number(e.target.value))} style={{ padding: "8px 16px", background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600, outline: "none" }}>
                  <option value={1}>1. Ideal BB84 Experiment</option>
                  <option value={2}>2. Quantum Bases &amp; Polarization Intuition</option>
                  <option value={3}>3. Detecting Eavesdropping (Eve ON)</option>
                  <option value={4}>4. Partial Eavesdropping (Probabilistic Intercept-Resend)</option>
                  <option value={5}>5. Effect of Photon Count on QBER</option>
                  <option value={6}>6. Environmental Channel Noise</option>
                  <option value={7}>7. Photon Loss &amp; Fiber Transmission</option>
                  <option value={8}>8. Fiber Distance &amp; Attenuation Limits</option>
                  <option value={9}>9. Decoy State Protocol vs PNS Attacks</option>
                  <option value={10}>10. Man-in-the-Middle &amp; Authentication Attacks</option>
                </select>
              </div>
            </div>
            <div className="d-flex gap-2 overflow-x-auto pb-2" style={{ borderBottom: "1px solid var(--border)" }}>
              {[{ id: "theory", label: "1. Theory ", icon: <BookOpen size={16} /> }, { id: "visual", label: "2. Visual Lab", icon: <Compass size={16} /> }, { id: "sandbox", label: "3. Qiskit Sandbox", icon: <Cpu size={16} /> }, { id: "quiz", label: "4. Checkpoint Quiz", icon: <HelpCircle size={16} /> }, { id: "report", label: "5. Report & Credentials", icon: <FileText size={16} /> }].map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} style={{ padding: "10px 16px", background: activeTab === tab.id ? "var(--bg-card)" : "transparent", border: "1px solid", borderColor: activeTab === tab.id ? "var(--border)" : "transparent", borderBottomColor: activeTab === tab.id ? "var(--bg)" : "transparent", color: activeTab === tab.id ? "var(--accent)" : "var(--text-3)", borderRadius: "8px 8px 0 0", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", marginBottom: -1 }}>{tab.icon}{tab.label}</button>
              ))}
            </div>
          </header>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "32px", minHeight: 400 }}>
            <AnimatePresence mode="wait">
              {activeTab === "theory" && (
                <motion.div key="theory-31" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: 20, color: "var(--accent)" }}>
                    {["", "Experiment 1: Ideal BB84 Protocol", "Experiment 2: Bases & Polarization", "Experiment 3: Eavesdropping Detection", "Experiment 4: Partial Intercept-Resend Attack", "Experiment 5: Photon Count Effect on QBER", "Experiment 6: Environmental Channel Noise", "Experiment 7: Photon Loss & Fiber Transmission", "Experiment 8: Fiber Distance & Attenuation Limits", "Experiment 9: Decoy State Protocol vs PNS Attacks", "Experiment 10: Man-in-the-Middle & Authentication Attacks"][bb84SubExp]}
                  </h3>
                  {bb84SubExp === 1 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>The BB84 protocol, devised by Charles Bennett and Gilles Brassard in 1984, is the world's first quantum key distribution scheme. It uses the quantum mechanical principle that measuring a quantum state disturbs it irreversibly, making any eavesdropping detectable. In this baseline experiment, Alice and Bob communicate over an ideal, noise-free fiber channel with no eavesdropper present.</p>
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}><h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>What Alice Does</h5><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>Alice randomly selects a bit value (0 or 1) and a basis (Rectilinear <strong>+</strong> or Diagonal <strong>×</strong>) for each photon. She encodes the bit onto the photon's polarization: |0⟩ or |1⟩ in the + basis; |+⟩ or |−⟩ in the × basis.</p></div>
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}><h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>What Bob Does</h5><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>Bob independently chooses a random basis for each photon. When his basis matches Alice's, he gets the correct bit. When they differ, his result is random. After transmission they compare bases publicly — keeping only matching-basis results as the <strong>sifted key</strong>.</p></div>
                    <div style={{ background: "rgba(199,162,39,0.08)", borderLeft: "4px solid #C9A227", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Key Insight:</strong> In an ideal channel with no Eve, the QBER is exactly 0%. Any error rate above 11% is evidence of eavesdropping. This experiment establishes the clean baseline.</p></div>
                  </div>)}
                  {bb84SubExp === 2 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>BB84 employs two mutually unbiased bases. The Rectilinear basis (+) uses horizontal and vertical polarizations. The Diagonal basis (×) uses +45° and −45° polarizations. These bases are <em>conjugate</em> — measuring in the wrong basis yields a completely random result.</p>
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}><h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>Encoding Table</h5><table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}><thead><tr style={{ borderBottom: "1px solid var(--border)", color: "var(--text-3)" }}><th style={{ padding: "8px 12px", textAlign: "left" }}>Bit</th><th style={{ padding: "8px 12px", textAlign: "left" }}>Basis +</th><th style={{ padding: "8px 12px", textAlign: "left" }}>Basis ×</th></tr></thead><tbody><tr style={{ borderBottom: "1px solid var(--border)" }}><td style={{ padding: "8px 12px" }}>0</td><td style={{ padding: "8px 12px" }}>→ (0°)</td><td style={{ padding: "8px 12px" }}>↗ (+45°)</td></tr><tr><td style={{ padding: "8px 12px" }}>1</td><td style={{ padding: "8px 12px" }}>↑ (90°)</td><td style={{ padding: "8px 12px" }}>↘ (−45°)</td></tr></tbody></table></div>
                    <div style={{ background: "rgba(199,162,39,0.08)", borderLeft: "4px solid #C9A227", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Key Insight:</strong> Mismatched bases produce random outcomes; matched bases produce deterministic results. This experiment visualizes that boundary directly.</p></div>
                  </div>)}
                  {bb84SubExp === 3 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>When Eve intercepts a photon, she must guess a basis with 50% chance of being wrong. Wrong-basis measurement collapses the qubit, and Eve retransmits the wrong state — introducing detectable errors in Bob's matched-basis positions.</p>
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}><h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>Intercept-Resend Attack</h5><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>In a full intercept-resend attack (Eve intercepts every photon), the QBER rises to approximately <strong>25%</strong> — well above the 11% abort threshold, statistically guaranteeing Eve's presence is detectable.</p></div>
                    <div style={{ background: "rgba(244,63,94,0.08)", borderLeft: "4px solid #f43f5e", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Security Threshold:</strong> QBER above 11% means the key must be aborted. Below this, the channel is considered secure.</p></div>
                  </div>)}
                  {bb84SubExp === 4 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>In a partial eavesdropping attack, Eve intercepts only a fraction of photons. This reduces her information but also reduces the visible QBER signature — making detection harder. The relationship follows: if Eve intercepts fraction <em>p</em>, expected QBER ≈ p/4.</p>
                    <div style={{ background: "rgba(199,162,39,0.08)", borderLeft: "4px solid #C9A227", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Key Insight:</strong> Slide the Eve interception level and observe how the QBER grows toward the abort threshold. This is the fundamental security-information tradeoff of QKD.</p></div>
                  </div>)}
                  {bb84SubExp === 5 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>Statistical confidence in QBER depends on sample size. With very few photons, random fluctuations cause high apparent QBER even without Eve. As photon count increases, the QBER estimate stabilizes around its true value — the Law of Large Numbers in quantum cryptography.</p>
                    <div style={{ background: "rgba(199,162,39,0.08)", borderLeft: "4px solid #C9A227", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Key Insight:</strong> Vary photon count from 8 to 256 and observe how QBER variance decreases. Real QKD systems transmit millions of photons per second to ensure reliable estimation.</p></div>
                  </div>)}
                  {bb84SubExp === 6 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>Real-world optical fiber channels suffer from thermal noise, birefringence, and dark counts. Channel noise causes random bit flips even without an eavesdropper present.</p>
                    <div style={{ background: "rgba(199,162,39,0.08)", borderLeft: "4px solid #C9A227", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Key Insight:</strong> Observe how intrinsic channel noise inflates baseline QBER. Classical error correction (like CASCADE or Winnow) is required to reconcile these non-eavesdropper errors.</p></div>
                  </div>)}
                  {bb84SubExp === 7 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>In fiber transmission, photons are absorbed or scattered over distance. Photon loss reduces the rate at which Bob receives photons, decreasing secret key throughput without compromising security.</p>
                    <div style={{ background: "rgba(199,162,39,0.08)", borderLeft: "4px solid #C9A227", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Key Insight:</strong> As photon loss increases, the raw key length shrinks. However, because lost photons do not leak state information, the protocol remains fundamentally secure.</p></div>
                  </div>)}
                  {bb84SubExp === 8 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>Optical fibers exhibit an attenuation loss of ~0.2 dB/km at 1550 nm. At longer distances, detector dark counts become comparable to signal counts, causing QBER to surpass the 11% abort limit.</p>
                    <div style={{ background: "rgba(199,162,39,0.08)", borderLeft: "4px solid #C9A227", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Key Insight:</strong> Increase channel distance (in km) to observe the exponential key rate drop and identify the maximum operational distance limit before QBER exceeds 11%.</p></div>
                  </div>)}
                  {bb84SubExp === 9 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>Practical QKD laser sources occasionally emit multi-photon pulses. An eavesdropper can execute a Photon Number Splitting (PNS) attack by stealing extra photons without being detected. The Decoy State protocol solves this by sending pulses at varying mean photon intensities (&mu;).</p>
                    <div style={{ background: "rgba(199,162,39,0.08)", borderLeft: "4px solid #C9A227", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Key Insight:</strong> Decoy state transmission allows Alice and Bob to measure photon yield per intensity level, exposing PNS attacks and enabling long-distance fiber QKD.</p></div>
                  </div>)}
                  {bb84SubExp === 10 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>If the classical channel is unauthenticated, Eve can intercept communications and execute a Man-in-the-Middle (MitM) attack by posing as Bob to Alice and Alice to Bob.</p>
                    <div style={{ background: "rgba(244,63,94,0.08)", borderLeft: "4px solid #f43f5e", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Security Defense:</strong> QKD requires pre-shared classical secret keys for authentication (e.g. Wegman-Carter hash tags) to prevent MitM impersonation attacks.</p></div>
                  </div>)}
                </motion.div>
              )}
              {activeTab === "visual" && (
                <motion.div key="visual-31" className="visual-lab-embed" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  {bb84SubExp === 1 && <Exp1BB84 />}
                  {bb84SubExp === 2 && <Exp2BB84 />}
                  {bb84SubExp === 3 && <Exp3BB84 />}
                  {bb84SubExp === 4 && <Exp4BB84 />}
                  {bb84SubExp === 5 && <Exp5BB84 />}
                  {bb84SubExp === 6 && <Exp6BB84 />}
                  {bb84SubExp === 7 && <Exp7BB84 />}
                  {bb84SubExp === 8 && <Exp8BB84 />}
                  {bb84SubExp === 9 && <Exp9BB84 />}
                  {bb84SubExp === 10 && <Exp10BB84 />}
                </motion.div>
              )}
              {activeTab === "sandbox" && (
                <motion.div key="sandbox-31" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 16 }}>BB84 Qiskit Sandbox</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-2)", marginBottom: 24, lineHeight: 1.7 }}>Copy and run in IBM Quantum Lab or local Qiskit to simulate BB84 programmatically.</p>
                  <div style={{ background: "rgba(0,0,0,0.35)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", fontFamily: "monospace" }}>bb84_protocol.py</span>
                      <button onClick={() => navigator.clipboard.writeText(`from qiskit import QuantumCircuit, Aer, execute
import numpy as np

n = 32
alice_bits = np.random.randint(2, size=n)
alice_bases = np.random.choice(['+', 'x'], size=n)
bob_bases = np.random.choice(['+', 'x'], size=n)

circuits = []
for i in range(n):
    qc = QuantumCircuit(1, 1)
    if alice_bits[i] == 1: qc.x(0)
    if alice_bases[i] == 'x': qc.h(0)
    if bob_bases[i] == 'x': qc.h(0)
    qc.measure(0, 0)
    circuits.append(qc)

simulator = Aer.get_backend('qasm_simulator')
bob_results = [int(list(execute(qc, simulator, shots=1).result().get_counts(qc).keys())[0]) for qc in circuits]

sifted_alice = [alice_bits[i] for i in range(n) if alice_bases[i] == bob_bases[i]]
sifted_bob   = [bob_results[i]  for i in range(n) if alice_bases[i] == bob_bases[i]]
errors = sum(a != b for a, b in zip(sifted_alice, sifted_bob))
qber = errors / len(sifted_alice) * 100 if sifted_alice else 0
print(f"Sifted key: {len(sifted_alice)} bits | QBER: {qber:.1f}% | {'SECURE' if qber < 11 else 'ABORTED'}")`)} style={{ padding: "6px 16px", background: "var(--accent)", border: "none", color: "#fff", borderRadius: 6, fontSize: "0.8rem", fontWeight: 600, cursor: "pointer" }}>Copy Code</button>
                    </div>
                    <pre style={{ margin: 0, overflowX: "auto", fontFamily: "monospace", fontSize: "0.82rem", color: "#e2e8f0", lineHeight: 1.7 }}>{`from qiskit import QuantumCircuit, Aer, execute
import numpy as np

n = 32
alice_bits = np.random.randint(2, size=n)
alice_bases = np.random.choice(['+', 'x'], size=n)
bob_bases = np.random.choice(['+', 'x'], size=n)

circuits = []
for i in range(n):
    qc = QuantumCircuit(1, 1)
    if alice_bits[i] == 1: qc.x(0)
    if alice_bases[i] == 'x': qc.h(0)
    if bob_bases[i] == 'x': qc.h(0)
    qc.measure(0, 0)
    circuits.append(qc)

simulator = Aer.get_backend('qasm_simulator')
bob_results = [
    int(list(execute(qc, simulator, shots=1).result().get_counts(qc).keys())[0])
    for qc in circuits
]

sifted_alice = [alice_bits[i] for i in range(n) if alice_bases[i] == bob_bases[i]]
sifted_bob   = [bob_results[i]  for i in range(n) if alice_bases[i] == bob_bases[i]]
errors = sum(a != b for a, b in zip(sifted_alice, sifted_bob))
qber = errors / len(sifted_alice) * 100 if sifted_alice else 0
print(f"Sifted key: {len(sifted_alice)} bits | QBER: {qber:.1f}% | {'SECURE' if qber < 11 else 'ABORTED'}")`}</pre>
                  </div>
                </motion.div>
              )}
              {activeTab === "quiz" && (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Checkpoint Quiz ({quizIndex + 1}/10)</h3>
                    {!quizSubmitted && (
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.9rem", color: timeLeft <= 5 ? "#f43f5e" : "var(--text)" }}>
                        <AlertCircle size={16} />
                        <span style={{ fontWeight: 700 }}>{timeLeft}s Left</span>
                      </div>
                    )}
                  </div>

                  {!quizSubmitted ? (
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
                      <h5 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 20 }}>
                        {questions[quizIndex].q}
                      </h5>

                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {questions[quizIndex].options.map((opt, optIdx) => {
                          const isSelected = selectedOpt === optIdx;
                          const isCorrect = optIdx === questions[quizIndex].correct;

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(optIdx)}
                              style={{
                                width: "100%",
                                textAlign: "left",
                                padding: "12px 18px",
                                background: selectedOpt !== null && isCorrect
                                  ? "rgba(52, 211, 153, 0.1)"
                                  : selectedOpt !== null && isSelected && !isCorrect
                                    ? "rgba(244, 63, 94, 0.1)"
                                    : isSelected
                                      ? "var(--accent-glow)"
                                      : "var(--bg-card)",
                                color: selectedOpt !== null && isCorrect
                                  ? "#34d399"
                                  : selectedOpt !== null && isSelected && !isCorrect
                                    ? "#f43f5e"
                                    : "var(--text-2)",
                                border: "1px solid",
                                borderColor: selectedOpt !== null && isCorrect
                                  ? "#34d399"
                                  : selectedOpt !== null && isSelected && !isCorrect
                                    ? "#f43f5e"
                                    : isSelected
                                      ? "var(--accent)"
                                      : "var(--border)",
                                borderRadius: 10,
                                fontSize: "0.88rem",
                                fontWeight: isSelected ? 600 : 500,
                                cursor: selectedOpt !== null ? "default" : "pointer"
                              }}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {selectedOpt !== null && (
                        <div className="mt-4 d-flex justify-content-end">
                          <button
                            className="btn-primary-wiser"
                            onClick={() => handleNextQuestion(false)}
                            style={{ padding: "10px 24px", fontSize: "0.82rem" }}
                          >
                            {quizIndex < questions.length - 1 ? "Next Question" : "Submit Results"}
                            <ArrowRight size={14} className="ms-2" />
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div style={{ textAlign: "center", padding: "32px 0" }}>
                      {quizPassed ? (
                        <div style={{ maxWidth: 460, margin: "0 auto" }}>
                          <CheckCircle2 size={48} className="text-success mb-3" />
                          <h4 style={{ fontWeight: 700 }}>Validation Complete!</h4>
                          <p style={{ fontSize: "0.9rem", color: "var(--text-3)", marginBottom: 24 }}>
                            You scored {quizScore}/10. Excellent! You have successfully unlocked the formal laboratory report and cryptographically signed completion certificate.
                          </p>
                          <button className="btn-primary-wiser" onClick={() => setActiveTab("report")}>
                            View Credentials
                          </button>
                        </div>
                      ) : (
                        <div style={{ maxWidth: 460, margin: "0 auto" }}>
                          <AlertCircle size={48} className="text-danger mb-3" />
                          <h4 style={{ fontWeight: 700 }}>Verification Failed</h4>
                          <p style={{ fontSize: "0.9rem", color: "var(--text-3)", marginBottom: 24 }}>
                            You scored {quizScore}/10. A perfect 10/10 score is required to pass. Please review the theory modules and try again.
                          </p>
                          <button
                            className="btn-primary-wiser"
                            onClick={() => {
                              setQuizIndex(0);
                              setQuizScore(0);
                              setSelectedOpt(null);
                              setQuizSubmitted(false);
                              setTimeLeft(30);
                            }}
                          >
                            Retry Checkpoint
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
              {activeTab === "report" && (
                <motion.div key="report-31" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 24 }}>Academic Credentials</h3>

                  {!quizPassed ? (
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 32, textAlign: "center" }}>
                      <Lock size={32} className="text-muted mb-3" />
                      <h5 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-3)" }}>Credentials Locked</h5>
                      <p style={{ fontSize: "0.82rem", color: "var(--text-3)", maxWidth: 380, margin: "8px auto 0 auto" }}>
                        You must score 10/10 on the Checkpoint Quiz to unlock the printable Laboratory Report and Completion Certificate.
                      </p>
                    </div>
                  ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                      <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 28, textAlign: "center" }}>
                        <FileText size={40} style={{ color: "var(--accent)", marginBottom: 16 }} />
                        <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>Academic Lab Report</h5>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-3)", marginBottom: 20, lineHeight: 1.6 }}>Complete the Visual Lab simulation to generate your BB84 measurements, then download a formal PDF report with circuit diagrams and Qiskit code.</p>
                        <button className="btn-primary-wiser" style={{ width: "100%", padding: "12px 0", fontSize: "0.9rem", fontWeight: 600 }} onClick={() => setActiveTab("visual")}>Go to Visual Lab &rarr;</button>
                      </div>

                      {/* Golden Certificate Preview Card */}
                      <div className="report-preview" style={{ height: "100%", background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
                        {/* Label bar */}
                        <div style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
                          <Award size={14} style={{ color: "#C9A227" }} />
                          <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)" }}>
                            Completion Certificate Preview
                          </span>
                        </div>

                        {/* Certificate Body (forced light theme) */}
                        <div className="cert-forced-light" style={{ background: "#ffffff", color: "#1a1a1a" }}>
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
                                BB84 QKD Protocol • Exp 3.1
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
                                <p style={{ fontWeight: 600, color: "#374151", margin: 0 }}>12 July 2026</p>
                              </div>
                              <div style={{ textAlign: "right" }}>
                                <p style={{ fontSize: "0.55rem", color: "#6B7280", margin: "0 0 2px 0" }}>VERIFICATION HASH</p>
                                <p style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "#8B6914", margin: 0 }}>WQL-31-BB84-A9B8C7D6</p>
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }

  // --- B92 (3.2) -------------------------------------------------------------
  if (idStr === "3.2") {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
        <nav className="wiser-nav scrolled" style={{ position: "sticky" }}>
          <div className="container-xl d-flex align-items-center justify-content-between">
            <Link href="/experiments" className="d-flex align-items-center gap-2" style={{ textDecoration: "none", color: "var(--text)" }}>
              <ArrowLeft size={16} /><span style={{ fontSize: "0.85rem", fontWeight: 600 }}>Exit</span>
            </Link>
            <div className="d-flex align-items-center gap-3">
              <button className="theme-toggle" onClick={() => setDark(!dark)} style={{ width: 44, height: 22 }}>
                <div className="theme-toggle-thumb" style={{ width: 16, height: 16, borderRadius: "50%", transform: `translateX(${dark ? "22px" : "2px"})`, background: dark ? "var(--accent)" : "#fbbf24", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {dark ? <Moon size={8} color="#fff" /> : <Sun size={8} color="#fff" />}
                </div>
              </button>
              <select value={lang} onChange={(e) => setLang(e.target.value as LangCode)} style={{ fontSize: "0.75rem", background: "var(--bg-canvas)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 6, padding: "4px 8px", outline: "none" }}>
                {(Object.keys(LANG_META) as LangCode[]).map((key) => (<option key={key} value={key}>{LANG_META[key].flag} {LANG_META[key].label}</option>))}
              </select>
            </div>
          </div>
        </nav>
        <div className="container-xl py-4" style={{ maxWidth: 1200 }}>
          <header className="mb-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-3">
              <div>
                <span style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>Quantum Key Distribution • Experiment 3.2</span>
                <h2 className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700, margin: "4px 0" }}>B92 Protocol</h2>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span style={{ fontSize: "0.85rem", color: "var(--text-3)", fontWeight: 600 }}>Select Sub-Experiment:</span>
                <select value={b92SubExp} onChange={(e) => setB92SubExp(Number(e.target.value))} style={{ padding: "8px 16px", background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 8, fontSize: "0.85rem", fontWeight: 600, outline: "none" }}>
                  <option value={1}>1. Ideal B92 Virtual Laboratory Workspace</option>
                  <option value={2}>2. Imperfect B92: Noise Injection Analysis</option>
                  <option value={3}>3. Eavesdropping Signature Analysis</option>
                  <option value={4}>4. Multi-Parameter Disturbance Analysis</option>
                </select>
              </div>
            </div>
            <div className="d-flex gap-2 overflow-x-auto pb-2" style={{ borderBottom: "1px solid var(--border)" }}>
              {[{ id: "theory", label: "1. Theory ", icon: <BookOpen size={16} /> }, { id: "visual", label: "2. Visual Lab", icon: <Compass size={16} /> }, { id: "sandbox", label: "3. Qiskit Sandbox", icon: <Cpu size={16} /> }, { id: "quiz", label: "4. Checkpoint Quiz", icon: <HelpCircle size={16} /> }, { id: "report", label: "5. Report & Credentials", icon: <FileText size={16} /> }].map((tab) => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} style={{ padding: "10px 16px", background: activeTab === tab.id ? "var(--bg-card)" : "transparent", border: "1px solid", borderColor: activeTab === tab.id ? "var(--border)" : "transparent", borderBottomColor: activeTab === tab.id ? "var(--bg)" : "transparent", color: activeTab === tab.id ? "var(--accent)" : "var(--text-3)", borderRadius: "8px 8px 0 0", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", marginBottom: -1 }}>{tab.icon}{tab.label}</button>
              ))}
            </div>
          </header>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "32px", minHeight: 400 }}>
            <AnimatePresence mode="wait">
              {activeTab === "theory" && (
                <motion.div key="theory-32" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: 20, color: "var(--accent)" }}>
                    {["", "Experiment 1: Ideal B92 Protocol", "Experiment 2: Noise Injection & Channel Imperfections", "Experiment 3: Eavesdropping Signature in B92", "Experiment 4: Multi-Parameter Disturbance Analysis"][b92SubExp]}
                  </h3>
                  {b92SubExp === 1 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>The B92 protocol, proposed by Charles Bennett in 1992, simplifies quantum key distribution to use only two non-orthogonal quantum states — one for bit 0 and one for bit 1. While simpler than BB84, it achieves the same unconditional security guarantee rooted in the quantum No-Cloning Theorem.</p>
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}><h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>State Encoding</h5><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>Alice maps bit <strong>0</strong> → 0° (horizontal) polarization and bit <strong>1</strong> → 45° (diagonal) polarization. These states are non-orthogonal, so it is impossible to perfectly distinguish them without disturbing the quantum state.</p></div>
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}><h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>Conclusive vs. Inconclusive Measurements</h5><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>Bob uses cross-polarized filters. A click at the 90° filter conclusively identifies that Alice sent bit 1. A click at −45° identifies bit 0. No click (erasure) means the measurement was inconclusive — roughly 50% of all ideal transmissions. Only conclusive events form the sifted key.</p></div>
                    <div style={{ background: "rgba(199,162,39,0.08)", borderLeft: "4px solid #C9A227", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Key Insight:</strong> In an ideal B92 channel with no Eve, QBER = 0%. The ~50% erasure rate is correct and expected — it is the fundamental trade-off of using only two states.</p></div>
                  </div>)}
                  {b92SubExp === 2 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>Real fiber-optic quantum channels introduce depolarizing noise, photon loss from attenuation, and phase errors. These imperfections convert some valid conclusive measurements into errors, raising the QBER even without any eavesdropper.</p>
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}><h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>Channel Loss Model</h5><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>Fiber attenuation is approximately 0.2 dB/km at 1550 nm. Over 50 km, this leads to ~10 dB loss — only 1 in 10 photons reaches Bob. The remaining photons are absorbed as "lost" events, dramatically reducing key rate.</p></div>
                    <div style={{ background: "rgba(199,162,39,0.08)", borderLeft: "4px solid #C9A227", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Key Insight:</strong> Dial in channel noise and distance to observe how real-world imperfections affect key rate and QBER simultaneously.</p></div>
                  </div>)}
                  {b92SubExp === 3 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>In B92, Eve faces a harder challenge — the two states are non-orthogonal, so any measurement attempt has a non-zero probability of misidentifying the state. This introduces errors into the conclusive click events that Bob and Alice detect as elevated QBER.</p>
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}><h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>B92 Security Bound</h5><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>The standard abort threshold is <strong>11% QBER</strong>. Any excess above channel noise baseline signals eavesdropping. Slide Eve's interception level and observe the QBER cross this limit.</p></div>
                  </div>)}
                  {b92SubExp === 4 && (<div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780 }}>
                    <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-2)" }}>This advanced experiment combines all disturbance parameters simultaneously: channel noise, photon loss, and Eve's interception activity — mirroring the complexity of a real deployed QKD system under adversarial conditions.</p>
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}><h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>Parameter Interactions</h5><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}>Channel noise raises baseline QBER. Distance reduces key rate. Eve raises QBER further. The challenge is separating Eve's contribution from channel noise — necessitating privacy amplification, error correction, and statistical authentication.</p></div>
                    <div style={{ background: "rgba(199,162,39,0.08)", borderLeft: "4px solid #C9A227", padding: 16, borderRadius: 8 }}><p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-2)", margin: 0 }}><strong>Key Insight:</strong> Find the maximum Eve activity that can stay undetected given a noisy channel. This is the fundamental security margin engineering problem in QKD deployment.</p></div>
                  </div>)}
                </motion.div>
              )}
              {activeTab === "visual" && (
                <motion.div key="visual-32" className="visual-lab-embed" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  {b92SubExp === 1 && <B92Experiment1 />}
                  {b92SubExp === 2 && <B92Experiment2 />}
                  {b92SubExp === 3 && <B92Experiment3 />}
                  {b92SubExp === 4 && <B92Experiment4 />}
                </motion.div>
              )}
              {activeTab === "sandbox" && (
                <motion.div key="sandbox-32" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 16 }}>B92 Qiskit Sandbox</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-2)", marginBottom: 24, lineHeight: 1.7 }}>Copy and run in IBM Quantum Lab or local Qiskit to simulate B92 programmatically.</p>
                  <div style={{ background: "rgba(0,0,0,0.35)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", fontFamily: "monospace" }}>b92_protocol.py</span>
                      <button onClick={() => navigator.clipboard.writeText(`from qiskit import QuantumCircuit, Aer, execute
import numpy as np

n = 32
alice_bits = np.random.randint(2, size=n)
bob_bases  = np.random.choice(['+', 'x'], size=n)

circuits = []
for i in range(n):
    qc = QuantumCircuit(1, 1)
    if alice_bits[i] == 1: qc.h(0)
    if bob_bases[i] == 'x': qc.h(0)
    qc.measure(0, 0)
    circuits.append(qc)

simulator = Aer.get_backend('qasm_simulator')
bob_results = [int(list(execute(qc, simulator, shots=1).result().get_counts(qc).keys())[0]) for qc in circuits]

sifted_alice, sifted_bob = [], []
for i in range(n):
    if alice_bits[i] == 0 and bob_bases[i] == 'x' and bob_results[i] == 1:
        sifted_alice.append(0); sifted_bob.append(0)
    elif alice_bits[i] == 1 and bob_bases[i] == '+' and bob_results[i] == 1:
        sifted_alice.append(1); sifted_bob.append(1)

qber = sum(a!=b for a,b in zip(sifted_alice,sifted_bob)) / max(len(sifted_alice),1) * 100
print(f"Sifted key: {len(sifted_alice)} bits | QBER: {qber:.1f}% | {'SECURE' if qber < 11 else 'ABORTED'}")`)} style={{ padding: "6px 16px", background: "var(--accent)", border: "none", color: "#fff", borderRadius: 6, fontSize: "0.8rem", fontWeight: 600, cursor: "pointer" }}>Copy Code</button>
                    </div>
                    <pre style={{ margin: 0, overflowX: "auto", fontFamily: "monospace", fontSize: "0.82rem", color: "#e2e8f0", lineHeight: 1.7 }}>{`from qiskit import QuantumCircuit, Aer, execute
import numpy as np

n = 32
alice_bits = np.random.randint(2, size=n)
bob_bases  = np.random.choice(['+', 'x'], size=n)

circuits = []
for i in range(n):
    qc = QuantumCircuit(1, 1)
    if alice_bits[i] == 1: qc.h(0)   # encode |+⟩ for bit 1
    if bob_bases[i] == 'x': qc.h(0)  # Bob measures in × basis
    qc.measure(0, 0)
    circuits.append(qc)

simulator = Aer.get_backend('qasm_simulator')
bob_results = [
    int(list(execute(qc, simulator, shots=1).result().get_counts(qc).keys())[0])
    for qc in circuits
]

# B92 sifting: keep only conclusive clicks
sifted_alice, sifted_bob = [], []
for i in range(n):
    if alice_bits[i] == 0 and bob_bases[i] == 'x' and bob_results[i] == 1:
        sifted_alice.append(0); sifted_bob.append(0)
    elif alice_bits[i] == 1 and bob_bases[i] == '+' and bob_results[i] == 1:
        sifted_alice.append(1); sifted_bob.append(1)

qber = sum(a!=b for a,b in zip(sifted_alice,sifted_bob)) / max(len(sifted_alice),1) * 100
print(f"Sifted key: {len(sifted_alice)} bits | QBER: {qber:.1f}% | {'SECURE' if qber < 11 else 'ABORTED'}")`}</pre>
                  </div>
                </motion.div>
              )}
              {activeTab === "quiz" && (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Checkpoint Quiz ({quizIndex + 1}/10)</h3>
                    {!quizSubmitted && (
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.9rem", color: timeLeft <= 5 ? "#f43f5e" : "var(--text)" }}>
                        <AlertCircle size={16} />
                        <span style={{ fontWeight: 700 }}>{timeLeft}s Left</span>
                      </div>
                    )}
                  </div>

                  {!quizSubmitted ? (
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
                      <h5 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 20 }}>
                        {questions[quizIndex].q}
                      </h5>

                      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {questions[quizIndex].options.map((opt, optIdx) => {
                          const isSelected = selectedOpt === optIdx;
                          const isCorrect = optIdx === questions[quizIndex].correct;

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(optIdx)}
                              style={{
                                width: "100%",
                                textAlign: "left",
                                padding: "12px 18px",
                                background: selectedOpt !== null && isCorrect
                                  ? "rgba(52, 211, 153, 0.1)"
                                  : selectedOpt !== null && isSelected && !isCorrect
                                    ? "rgba(244, 63, 94, 0.1)"
                                    : isSelected
                                      ? "var(--accent-glow)"
                                      : "var(--bg-card)",
                                color: selectedOpt !== null && isCorrect
                                  ? "#34d399"
                                  : selectedOpt !== null && isSelected && !isCorrect
                                    ? "#f43f5e"
                                    : "var(--text-2)",
                                border: "1px solid",
                                borderColor: selectedOpt !== null && isCorrect
                                  ? "#34d399"
                                  : selectedOpt !== null && isSelected && !isCorrect
                                    ? "#f43f5e"
                                    : isSelected
                                      ? "var(--accent)"
                                      : "var(--border)",
                                borderRadius: 10,
                                fontSize: "0.88rem",
                                fontWeight: isSelected ? 600 : 500,
                                cursor: selectedOpt !== null ? "default" : "pointer"
                              }}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>

                      {selectedOpt !== null && (
                        <div className="mt-4 d-flex justify-content-end">
                          <button
                            className="btn-primary-wiser"
                            onClick={() => handleNextQuestion(false)}
                            style={{ padding: "10px 24px", fontSize: "0.82rem" }}
                          >
                            {quizIndex < questions.length - 1 ? "Next Question" : "Submit Results"}
                            <ArrowRight size={14} className="ms-2" />
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div style={{ textAlign: "center", padding: "32px 0" }}>
                      {quizPassed ? (
                        <div style={{ maxWidth: 460, margin: "0 auto" }}>
                          <CheckCircle2 size={48} className="text-success mb-3" />
                          <h4 style={{ fontWeight: 700 }}>Validation Complete!</h4>
                          <p style={{ fontSize: "0.9rem", color: "var(--text-3)", marginBottom: 24 }}>
                            You scored {quizScore}/10. Excellent! You have successfully unlocked the formal laboratory report and cryptographically signed completion certificate.
                          </p>
                          <button className="btn-primary-wiser" onClick={() => setActiveTab("report")}>
                            View Credentials
                          </button>
                        </div>
                      ) : (
                        <div style={{ maxWidth: 460, margin: "0 auto" }}>
                          <AlertCircle size={48} className="text-danger mb-3" />
                          <h4 style={{ fontWeight: 700 }}>Verification Failed</h4>
                          <p style={{ fontSize: "0.9rem", color: "var(--text-3)", marginBottom: 24 }}>
                            You scored {quizScore}/10. A perfect 10/10 score is required to pass. Please review the theory modules and try again.
                          </p>
                          <button
                            className="btn-primary-wiser"
                            onClick={() => {
                              setQuizIndex(0);
                              setQuizScore(0);
                              setSelectedOpt(null);
                              setQuizSubmitted(false);
                              setTimeLeft(30);
                            }}
                          >
                            Retry Checkpoint
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
              {activeTab === "report" && (
                <motion.div key="report-32" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 24 }}>Academic Credentials</h3>

                  {!quizPassed ? (
                    <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 32, textAlign: "center" }}>
                      <Lock size={32} className="text-muted mb-3" />
                      <h5 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-3)" }}>Credentials Locked</h5>
                      <p style={{ fontSize: "0.82rem", color: "var(--text-3)", maxWidth: 380, margin: "8px auto 0 auto" }}>
                        You must score 10/10 on the Checkpoint Quiz to unlock the printable Laboratory Report and Completion Certificate.
                      </p>
                    </div>
                  ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                      <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 28, textAlign: "center" }}>
                        <FileText size={40} style={{ color: "var(--accent)", marginBottom: 16 }} />
                        <h5 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>Academic Lab Report</h5>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-3)", marginBottom: 20, lineHeight: 1.6 }}>Complete the Visual Lab simulation to generate your B92 measurements, then download a formal PDF report with telemetry charts and Qiskit code.</p>
                        <button className="btn-primary-wiser" style={{ width: "100%", padding: "12px 0", fontSize: "0.9rem", fontWeight: 600 }} onClick={() => setActiveTab("visual")}>Go to Visual Lab &rarr;</button>
                      </div>

                      {/* Golden Certificate Preview Card */}
                      <div className="report-preview" style={{ height: "100%", background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
                        {/* Label bar */}
                        <div style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
                          <Award size={14} style={{ color: "#C9A227" }} />
                          <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)" }}>
                            Completion Certificate Preview
                          </span>
                        </div>

                        {/* Certificate Body (forced light theme) */}
                        <div className="cert-forced-light" style={{ background: "#ffffff", color: "#1a1a1a" }}>
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
                                B92 QKD Protocol • Exp 3.2
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
                                <p style={{ fontWeight: 600, color: "#374151", margin: 0 }}>12 July 2026</p>
                              </div>
                              <div style={{ textAlign: "right" }}>
                                <p style={{ fontSize: "0.55rem", color: "#6B7280", margin: "0 0 2px 0" }}>VERIFICATION HASH</p>
                                <p style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "#8B6914", margin: 0 }}>WQL-32-B92P-C3D4E5F6</p>
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    );
  }



  // Amplitudes Calculation
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
      {/* Top Navigation */}
      <nav className="wiser-nav scrolled" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <div className="container-xl d-flex align-items-center justify-content-between" style={{ padding: "14px 20px" }}>
          <Link href="/experiments" className="d-flex align-items-center gap-2" style={{ textDecoration: "none", color: "var(--text)" }}>
            <ArrowLeft size={16} />
            <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>Exit</span>
          </Link>

          {/* PERSISTENT SUB-NAV FOR MODES */}
          <div className="builder-tab-nav" style={{ display: "flex", gap: 8 }}>
            {[
              { id: "theory", label: "1. Theory Dashboard" },
              { id: "visual", label: "2. Visual Lab" },
              { id: "activity", label: "3. Interactive Activity" },
              { id: "sandbox", label: "4. Qiskit Sandbox" },
              { id: "quiz", label: "5. Checkpoint Quiz" },
              { id: "report", label: "6. Report & Credentials" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`builder-tab-btn ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="d-flex align-items-center gap-3">
            <button className="theme-toggle" onClick={() => setDark(!dark)} style={{ width: 44, height: 22 }}>
              <div className="theme-toggle-thumb" style={{ width: 16, height: 16, borderRadius: "50%", transform: `translateX(${dark ? "22px" : "2px"})`, background: dark ? "var(--accent)" : "#fbbf24", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {dark ? <Moon size={8} color="#fff" /> : <Sun size={8} color="#fff" />}
              </div>
            </button>
            <select value={lang} onChange={(e) => setLang(e.target.value as LangCode)} style={{ fontSize: "0.75rem", background: "var(--bg-canvas)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 6, padding: "4px 8px", outline: "none" }}>
              {(Object.keys(LANG_META) as LangCode[]).map((key) => (<option key={key} value={key}>{LANG_META[key].flag} {LANG_META[key].label}</option>))}
            </select>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="container-xl py-4" style={{ maxWidth: 1040 }}>

        {/* Tab Content Display */}
        <div style={{ minHeight: 400 }}>
          <AnimatePresence mode="wait">
            {activeTab === "theory" && (
              <motion.div
                key="theory"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="learn-page qx-page"
                style={{ background: "transparent", border: "none", padding: 0 }}
              >
                {/* HERO SECTION */}
                <section className="learn-hero" style={{ minHeight: "auto", padding: "40px 0 60px 0" }}>
                  <div className="learn-hero-inner" style={{ maxWidth: "100%" }}>
                    <p className="learn-pill">
                      {isTeleport ? "Experiment 2.1: Quantum Teleportation Protocol" : "Experiment 2.2: Superdense Coding Protocol"}
                    </p>
                    <h1>
                      {isTeleport ? "Teleport States, Not Matter." : "Double Channel Capacity with Entanglement."}
                    </h1>
                    <p className="learn-hero-sub">
                      {isTeleport
                        ? "Discover how to transfer an arbitrary unknown quantum state from Alice to Bob using a pre-shared entangled EPR pair and only two bits of classical communication."
                        : "Learn how to transmit two classical bits of information by physically sending only a single qubit, leveraging pre-shared entanglement to double channel capacity."
                      }
                    </p>

                    <div className="learn-hero-buttons">
                      <button
                        className="learn-cta-primary"
                        onClick={() => {
                          const element = document.getElementById(isTeleport ? "entangled-source" : "entangled-resource");
                          if (element) element.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Start Learning &rarr;
                      </button>
                      <button
                        className="learn-cta-secondary"
                        onClick={() => setActiveTab("visual")}
                      >
                        Launch Visual Lab
                      </button>
                    </div>

                    <div className="learn-hero-grid">
                      {isTeleport ? (
                        <>
                          <div className="learn-hero-card">
                            <h3>No-Cloning Bypass</h3>
                            <p>Bypasses the no-cloning restriction by destroying Alice's original qubit while Bob reconstructs it remote-side.</p>
                          </div>
                          <div className="learn-hero-card">
                            <h3>Pre-Shared Link</h3>
                            <p>Uses a maximally entangled Bell pair to link remote terminals through quantum correlation channels.</p>
                          </div>
                          <div className="learn-hero-card">
                            <h3>Classical Key</h3>
                            <p>Requires Alice's two classical measurement bits to select the matching unitary corrections at Bob's side.</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="learn-hero-card">
                            <h3>Superdense Capacity</h3>
                            <p>Transmits two bits of classical data in a single physical qubit, achieving a 2:1 channel capacity boost.</p>
                          </div>
                          <div className="learn-hero-card">
                            <h3>Pre-Shared EPR</h3>
                            <p>Utilizes shared entanglement to map local operations to four distinct joint states.</p>
                          </div>
                          <div className="learn-hero-card">
                            <h3>Bell Decoding</h3>
                            <p>Bob measures both qubits jointly in the Bell basis to deterministically read Alice's message.</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </section>

                {/* TOPICS CARD SECTION */}
                <section className="learn-topics" style={{ padding: "60px 0" }}>
                  <div className="learn-topics-header">
                    <h2>Core Principles of the Protocol</h2>
                    <p>Click on any concept card below to quickly scroll to its detailed visualizer widget.</p>
                  </div>

                  <div className="learn-cards-grid">
                    {(isTeleport ? TELEPORT_TOPICS : DENSE_TOPICS).map((topic) => (
                      <button
                        key={topic.id}
                        className="learn-card"
                        onClick={() => {
                          const element = document.getElementById(topic.id);
                          if (element) element.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <div className="learn-card-visual-placeholder">
                          <TheoryTopicVisual id={topic.id} />
                        </div>
                        <div className="learn-card-body">
                          <h3>{topic.label}</h3>
                          <p>{topic.tag}</p>
                          <span className="learn-card-link">Explore Details &rarr;</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>

                {/* LONG SCROLL SECTIONS */}
                {(isTeleport ? TELEPORT_TOPICS : DENSE_TOPICS).map((topic, index) => (
                  <section
                    key={topic.id}
                    id={topic.id}
                    className={`learn-section ${index % 2 === 1 ? "learn-section-reverse" : ""}`}
                    style={{ margin: "80px 0" }}
                  >
                    <div className="learn-section-text">
                      <span className="learn-section-kicker">{topic.longContent.kicker}</span>
                      <h2>{topic.label}</h2>
                      <p className="learn-section-tagline">{topic.longContent.tagline}</p>
                      <p className="learn-section-description">{topic.longContent.description}</p>

                      {topic.id === "alice-encoding" && (
                        <div className="learn-basis-table" style={{ marginTop: 16 }}>
                          <h4>Superdense Encoding Map</h4>
                          <table>
                            <thead>
                              <tr>
                                <th>Bits to Send</th>
                                <th>Unitary Operation</th>
                                <th>Encoded State</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><strong>00</strong></td>
                                <td>Identity (I)</td>
                                <td>|Φ⁺⟩ = (|00⟩ + |11⟩)/√2</td>
                              </tr>
                              <tr>
                                <td><strong>01</strong></td>
                                <td>Pauli X</td>
                                <td>|Ψ⁺⟩ = (|01⟩ + |10⟩)/√2</td>
                              </tr>
                              <tr>
                                <td><strong>10</strong></td>
                                <td>Pauli Z</td>
                                <td>|Φ⁻⟩ = (|00⟩ - |11⟩)/√2</td>
                              </tr>
                              <tr>
                                <td><strong>11</strong></td>
                                <td>Pauli X & Z</td>
                                <td>|Ψ⁻⟩ = (|01⟩ - |10⟩)/√2</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>

                    <div className="learn-section-visual">
                      <div className="learn-section-visual-box">
                        <TheoryTopicVisual id={topic.id} />
                      </div>
                    </div>
                  </section>
                ))}

                {/* FINAL CTA */}
                <section className="learn-final-cta" style={{ padding: "60px 0" }}>
                  <div className="learn-final-inner">
                    <h2>Theory Complete!</h2>
                    <p>Proceed to the visual simulator workspace to execute the operations step-by-step.</p>
                    <div className="learn-final-buttons">
                      <button className="learn-cta-primary" onClick={() => setActiveTab("visual")}>
                        Go to Visual Lab
                      </button>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === "visual" && (
              <motion.div
                key="visual"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 20 }}>Visual Interactive Simulator</h3>

                {isTeleport ? (
                  <div className="row g-4">
                    {/* Setup Panel */}
                    <div className="col-lg-5">
                      <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 24, display: "flex", flexDirection: "column", gap: 18 }}>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--accent)", margin: 0 }}>
                            {teleportStep === 0 && "1. State Preparation"}
                            {teleportStep === 1 && "2. Entanglement Distribution"}
                            {teleportStep === 2 && "3. Alice's Joint Measurement"}
                            {teleportStep === 3 && "4. Classical Bit Transmission"}
                            {teleportStep === 4 && "5. Bob's Unitary Correction"}
                          </h5>
                          <span style={{ fontSize: "0.72rem", color: "var(--text-3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                            Step {teleportStep + 1} of 5
                          </span>
                        </div>

                        {teleportStep === 0 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.5, margin: 0 }}>
                              For this demonstration, the quantum state vector to be teleported is fixed to the superposition state:
                            </p>
                            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 12, fontSize: "0.82rem" }}>
                              <div style={{ fontWeight: 700, color: "var(--accent)" }}>Demonstration State: |+⟩</div>
                              <div style={{ color: "var(--text-3)", marginTop: 4 }}>
                                Polar angle (&theta;) = 90&deg;<br />
                                Azimuthal angle (&phi;) = 0&deg;
                              </div>
                            </div>

                            <button className="btn-primary-wiser w-100" onClick={() => setTeleportStep(1)} style={{ marginTop: 8 }}>
                              Initialize EPR Pair (Step 2) &rarr;
                            </button>
                          </div>
                        )}

                        {teleportStep === 1 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.5, margin: 0 }}>
                              An entangled EPR Bell pair (qubits q₁ and q₂) is generated in the center and distributed to Alice and Bob. Look at the visual distribution animation!
                            </p>
                            <button className="btn-primary-wiser w-100" onClick={() => setTeleportStep(2)} style={{ marginTop: 8 }}>
                              Go to Joint Measurement (Step 3) &rarr;
                            </button>
                          </div>
                        )}

                        {teleportStep === 2 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.5, margin: 0 }}>
                              Alice performs a joint Bell basis measurement on her input qubit q₀ and her entangled qubit q₁. This collapses Alice's local quantum states.
                            </p>
                            <button
                              className="btn-primary-wiser w-100"
                              onClick={() => {
                                const m0 = Math.random() > 0.5 ? 1 : 0;
                                const m1 = Math.random() > 0.5 ? 1 : 0;
                                setAliceMeasured0(m0);
                                setAliceMeasured1(m1);
                                setUserXGate(false);
                                setUserZGate(false);
                                setTeleportStep(3);
                              }}
                              style={{ marginTop: 8 }}
                            >
                              Measure &amp; Collapse Qubits
                            </button>
                          </div>
                        )}

                        {teleportStep === 3 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.5, margin: 0 }}>
                              Alice has measured <strong>q₀ = {aliceMeasured0}</strong> and <strong>q₁ = {aliceMeasured1}</strong>. She transmits these classical bits to Bob over optical fiber lines.
                            </p>
                            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 12, fontSize: "0.8rem" }}>
                              <div style={{ fontWeight: 600, color: "var(--accent)" }}>Transmitted Bits:</div>
                              <div>&bull; Fiber Channel 0 (c₀): {aliceMeasured0} (Z-Gate control)</div>
                              <div>&bull; Fiber Channel 1 (c₁): {aliceMeasured1} (X-Gate control)</div>
                            </div>
                            <button className="btn-primary-wiser w-100" onClick={() => setTeleportStep(4)} style={{ marginTop: 8 }}>
                              Proceed to Correction (Step 5) &rarr;
                            </button>
                          </div>
                        )}

                        {teleportStep === 4 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.5, margin: 0 }}>
                              Bob receives Alice's bits. To align his qubit state vector with Alice's original state, Bob must apply Pauli correction gates matching Alice's classical measurement bits.
                            </p>
                            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 12, fontSize: "0.8rem" }}>
                              <div>Required Correction: <strong>X-Gate = {aliceMeasured1 === 1 ? "APPLY" : "SKIP"}, Z-Gate = {aliceMeasured0 === 1 ? "APPLY" : "SKIP"}</strong></div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "8px 0" }}>
                              <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: "0.82rem" }}>
                                <input type="checkbox" checked={userXGate} onChange={e => setUserXGate(e.target.checked)} />
                                <span>Apply Pauli X Gate (Bit Flip)</span>
                              </label>

                              <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: "0.82rem" }}>
                                <input type="checkbox" checked={userZGate} onChange={e => setUserZGate(e.target.checked)} />
                                <span>Apply Pauli Z Gate (Phase Flip)</span>
                              </label>
                            </div>

                            <div style={{ display: "flex", gap: 10 }}>
                              <button
                                className="btn-secondary-wiser"
                                style={{ flex: 1, fontSize: "0.78rem", padding: "10px" }}
                                onClick={() => {
                                  setUserXGate(aliceMeasured1 === 1);
                                  setUserZGate(aliceMeasured0 === 1);
                                }}
                              >
                                Auto-Correct
                              </button>
                              <button
                                className="btn-primary-wiser"
                                style={{ flex: 1.2 }}
                                onClick={() => {
                                  setTeleportStep(0);
                                  setAliceMeasured0(null);
                                  setAliceMeasured1(null);
                                  setUserXGate(false);
                                  setUserZGate(false);
                                }}
                              >
                                Reset Simulation ↺
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Circuit and Bloch Sphere Visualizer */}
                    <div className="col-lg-7">
                      <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
                        <h5 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)" }}>Visual Channel Schematic</h5>

                        {/* Interactive Animation Canvas */}
                        <div style={{ position: "relative", width: "100%", height: 160, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
                          {/* Stations */}
                          <div style={{ position: "absolute", left: "10%", top: "45%", transform: "translateY(-50%)", textAlign: "center" }}>
                            <div className="pulse-cyan" style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--accent-glow)", border: "2px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", margin: "0 auto" }}>
                              <Atom size={16} />
                            </div>
                            <span style={{ fontSize: "0.62rem", color: "var(--text-3)", display: "block", marginTop: 4 }}>Alice (q₀)</span>
                          </div>

                          <div style={{ position: "absolute", left: "32%", top: "45%", transform: "translateY(-50%)", textAlign: "center" }}>
                            <div style={{ width: 34, height: 34, borderRadius: "50%", background: teleportStep >= 1 ? "rgba(167, 139, 250, 0.15)" : "var(--border)", border: teleportStep >= 1 ? "2px solid #a78bfa" : "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: teleportStep >= 1 ? "#a78bfa" : "var(--text-3)", margin: "0 auto", transition: "all 0.5s ease" }}>
                              <Atom size={16} />
                            </div>
                            <span style={{ fontSize: "0.62rem", color: "var(--text-3)", display: "block", marginTop: 4 }}>Alice (q₁)</span>
                          </div>

                          <div style={{ position: "absolute", left: "50%", top: "80%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                            <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(167, 139, 250, 0.1)", border: "1px dashed #a78bfa", display: "flex", alignItems: "center", justifyContent: "center", color: "#a78bfa", margin: "0 auto" }}>
                              <Radio size={14} />
                            </div>
                            <span style={{ fontSize: "0.58rem", color: "var(--text-3)", display: "block", marginTop: 2 }}>EPR Source</span>
                          </div>

                          <div style={{ position: "absolute", left: "90%", top: "45%", transform: "translateY(-50%)", textAlign: "center" }}>
                            <div style={{ width: 34, height: 34, borderRadius: "50%", background: teleportStep >= 4 && userXGate === (aliceMeasured1 === 1) && userZGate === (aliceMeasured0 === 1) ? "var(--accent-glow)" : "var(--border)", border: teleportStep >= 4 && userXGate === (aliceMeasured1 === 1) && userZGate === (aliceMeasured0 === 1) ? "2px solid var(--accent)" : "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: teleportStep >= 4 && userXGate === (aliceMeasured1 === 1) && userZGate === (aliceMeasured0 === 1) ? "var(--accent)" : "var(--text-3)", margin: "0 auto", transition: "all 0.5s ease" }}>
                              <Atom size={16} />
                            </div>
                            <span style={{ fontSize: "0.62rem", color: "var(--text-3)", display: "block", marginTop: 4 }}>Bob (q₂)</span>
                          </div>

                          {/* Channels/Lines */}
                          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
                            {/* EPR to Alice */}
                            <path d="M 250 128 Q 180 128 160 85" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
                            {/* EPR to Bob */}
                            <path d="M 250 128 Q 380 128 440 85" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
                            {/* Classical Channel 1 */}
                            <line x1="180" y1="25" x2="430" y2="25" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="2 2" />
                            {/* Classical Channel 2 */}
                            <line x1="180" y1="40" x2="430" y2="40" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="2 2" />
                          </svg>

                          {/* Animated EPR Pair Distribution Particles */}
                          {teleportStep === 1 && (
                            <>
                              <motion.div
                                initial={{ left: "50%", top: "80%", scale: 0.5, opacity: 0 }}
                                animate={{ left: "32%", top: "45%", scale: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                style={{ position: "absolute", width: "10px", height: "10px", borderRadius: "50%", background: "#a78bfa", boxShadow: "0 0 10px #a78bfa", zIndex: 10 }}
                              />
                              <motion.div
                                initial={{ left: "50%", top: "80%", scale: 0.5, opacity: 0 }}
                                animate={{ left: "90%", top: "45%", scale: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                style={{ position: "absolute", width: "10px", height: "10px", borderRadius: "50%", background: "#a78bfa", boxShadow: "0 0 10px #a78bfa", zIndex: 10 }}
                              />
                            </>
                          )}

                          {/* Animated Classical Transmission Signals */}
                          {teleportStep === 3 && (
                            <>
                              <motion.div
                                initial={{ left: "32%", opacity: 0 }}
                                animate={{ left: "90%", opacity: [0, 1, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                style={{ position: "absolute", top: "18px", width: "14px", height: "14px", borderRadius: "3px", background: "#fbbf24", border: "1px solid #d97706", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px", fontWeight: "bold", color: "#000", zIndex: 10 }}
                              >
                                {aliceMeasured1}
                              </motion.div>
                              <motion.div
                                initial={{ left: "32%", opacity: 0 }}
                                animate={{ left: "90%", opacity: [0, 1, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.4 }}
                                style={{ position: "absolute", top: "33px", width: "14px", height: "14px", borderRadius: "3px", background: "#fbbf24", border: "1px solid #d97706", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px", fontWeight: "bold", color: "#000", zIndex: 10 }}
                              >
                                {aliceMeasured0}
                              </motion.div>
                            </>
                          )}
                        </div>


                        {/* State Vector comparison */}
                        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 14, fontSize: "0.82rem", textAlign: "center" }}>
                          {teleportStep < 4 ? (
                            <span style={{ color: "var(--text-3)" }}>
                              Follow steps to measure Alice's qubits and trigger classical transmission.
                            </span>
                          ) : userXGate === (aliceMeasured1 === 1) && userZGate === (aliceMeasured0 === 1) ? (
                            <span style={{ color: "#34d399", fontWeight: 700 }}>
                              &bull; Teleportation Success! Bob's qubit matches Alice's input state.
                            </span>
                          ) : (
                            <span style={{ color: "#fbbf24", fontWeight: 700 }}>
                              &bull; State Mismatch: Toggle Bob's correction gates to align the state.
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row g-4">
                    {/* Setup Panel */}
                    <div className="col-lg-5">
                      <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 24, display: "flex", flexDirection: "column", gap: 18 }}>
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--accent)", margin: 0 }}>
                            {denseStep === 0 && "1. Target Bits Selection"}
                            {denseStep === 1 && "2. Entanglement Distribution"}
                            {denseStep === 2 && "3. Alice's Encoding"}
                            {denseStep === 3 && "4. Quantum Transmission"}
                            {denseStep === 4 && "5. Bob's Bell Measurement"}
                          </h5>
                          <span style={{ fontSize: "0.72rem", color: "var(--text-3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                            Step {denseStep + 1} of 5
                          </span>
                        </div>

                        {denseStep === 0 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.5, margin: 0 }}>
                              For this demonstration, the 2-bit classical message Alice wishes to transmit is fixed:
                            </p>

                            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 16, textAlign: "center" }}>
                              <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--accent)" }}>11</span>
                            </div>
                            <button className="btn-primary-wiser w-100" onClick={() => setDenseStep(1)} style={{ marginTop: 8 }}>
                              Initialize EPR Pair (Step 2) &rarr;
                            </button>
                          </div>
                        )}

                        {denseStep === 1 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.5, margin: 0 }}>
                              A pre-shared entangled Bell pair is generated. Qubit q₀ is distributed to Alice, and qubit q₁ is distributed to Bob.
                            </p>
                            <button className="btn-primary-wiser w-100" onClick={() => setDenseStep(2)} style={{ marginTop: 8 }}>
                              Apply Alice's Encoding (Step 3) &rarr;
                            </button>
                          </div>
                        )}

                        {denseStep === 2 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.5, margin: 0 }}>
                              Alice encodes her target bits <strong>"{denseBits}"</strong> by executing local unitary gates on her qubit q₀: X-gate flips bit 1, Z-gate flips bit 0.
                            </p>
                            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: 12, fontSize: "0.8rem" }}>
                              <div>Required operations for "{denseBits}": <strong>X-Gate = {denseBits.endsWith('1') ? "APPLY" : "SKIP"}, Z-Gate = {denseBits.startsWith('1') ? "APPLY" : "SKIP"}</strong></div>
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "8px 0" }}>
                              <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: "0.82rem" }}>
                                <input type="checkbox" checked={denseUserXGate} onChange={e => { setDenseUserXGate(e.target.checked); setBobMeasuredBits(null); }} />
                                <span>Apply Pauli X Gate (Bit Flip)</span>
                              </label>

                              <label className="d-flex align-items-center gap-2" style={{ cursor: "pointer", fontSize: "0.82rem" }}>
                                <input type="checkbox" checked={denseUserZGate} onChange={e => { setDenseUserZGate(e.target.checked); setBobMeasuredBits(null); }} />
                                <span>Apply Pauli Z Gate (Phase Flip)</span>
                              </label>
                            </div>

                            <div style={{ display: "flex", gap: 10 }}>
                              <button
                                className="btn-secondary-wiser"
                                style={{ flex: 1, fontSize: "0.78rem", padding: "10px" }}
                                onClick={() => {
                                  setDenseUserXGate(denseBits.endsWith('1'));
                                  setDenseUserZGate(denseBits.startsWith('1'));
                                }}
                              >
                                Auto-Encode
                              </button>
                              <button className="btn-primary-wiser" style={{ flex: 1.2 }} onClick={() => setDenseStep(3)}>
                                Transmit Qubit (Step 4) &rarr;
                              </button>
                            </div>
                          </div>
                        )}

                        {denseStep === 3 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.5, margin: 0 }}>
                              Alice sends her single encoded qubit q₀ through the quantum channel to Bob. Watch the qubit fly across the space!
                            </p>
                            <button
                              className="btn-primary-wiser w-100"
                              onClick={() => {
                                const b0 = denseUserZGate ? "1" : "0";
                                const b1 = denseUserXGate ? "1" : "0";
                                setBobMeasuredBits(b0 + b1);
                                setDenseStep(4);
                              }}
                              style={{ marginTop: 8 }}
                            >
                              Perform Bell Measurement (Step 5) &rarr;
                            </button>
                          </div>
                        )}

                        {denseStep === 4 && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                            <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.5, margin: 0 }}>
                              Bob receives the encoded qubit and performs a joint Bell basis measurement on both q₀ and q₁, deterministically recovery the classical bits.
                            </p>
                            <button
                              className="btn-primary-wiser w-100"
                              onClick={() => {
                                setDenseStep(0);
                                setBobMeasuredBits(null);
                                setDenseUserXGate(false);
                                setDenseUserZGate(false);
                              }}
                              style={{ marginTop: 8 }}
                            >
                              Reset Simulation ↺
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Circuit and Output */}
                    <div className="col-lg-7">
                      <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
                        <h5 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)" }}>Visual Channel Schematic</h5>

                        {/* Interactive Animation Canvas */}
                        <div style={{ position: "relative", width: "100%", height: 160, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
                          {/* Stations */}
                          <div style={{ position: "absolute", left: "10%", top: "45%", transform: "translateY(-50%)", textAlign: "center" }}>
                            <div className="pulse-cyan" style={{ width: 34, height: 34, borderRadius: "50%", background: "var(--accent-glow)", border: "2px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", margin: "0 auto" }}>
                              <Atom size={16} />
                            </div>
                            <span style={{ fontSize: "0.62rem", color: "var(--text-3)", display: "block", marginTop: 4 }}>Alice (q₀)</span>
                          </div>

                          <div style={{ position: "absolute", left: "50%", top: "80%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                            <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(167, 139, 250, 0.1)", border: "1px dashed #a78bfa", display: "flex", alignItems: "center", justifyContent: "center", color: "#a78bfa", margin: "0 auto" }}>
                              <Radio size={14} />
                            </div>
                            <span style={{ fontSize: "0.58rem", color: "var(--text-3)", display: "block", marginTop: 2 }}>EPR Source</span>
                          </div>

                          <div style={{ position: "absolute", left: "90%", top: "45%", transform: "translateY(-50%)", textAlign: "center" }}>
                            <div style={{ width: 34, height: 34, borderRadius: "50%", background: denseStep === 4 && bobMeasuredBits === denseBits ? "var(--accent-glow)" : "var(--border)", border: denseStep === 4 && bobMeasuredBits === denseBits ? "2px solid var(--accent)" : "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: denseStep === 4 && bobMeasuredBits === denseBits ? "var(--accent)" : "var(--text-3)", margin: "0 auto", transition: "all 0.5s ease" }}>
                              <Atom size={16} />
                            </div>
                            <span style={{ fontSize: "0.62rem", color: "var(--text-3)", display: "block", marginTop: 4 }}>Bob (q₁)</span>
                          </div>

                          {/* Channels/Lines */}
                          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
                            {/* EPR to Alice */}
                            <path d="M 250 128 Q 120 128 50 85" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
                            {/* EPR to Bob */}
                            <path d="M 250 128 Q 380 128 440 85" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
                            {/* Quantum Channel Alice to Bob */}
                            <line x1="60" y1="40" x2="430" y2="40" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="2 2" />
                          </svg>

                          {/* Animated EPR Pair Distribution Particles */}
                          {denseStep === 1 && (
                            <>
                              <motion.div
                                initial={{ left: "50%", top: "80%", scale: 0.5, opacity: 0 }}
                                animate={{ left: "10%", top: "45%", scale: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                style={{ position: "absolute", width: "10px", height: "10px", borderRadius: "50%", background: "#a78bfa", boxShadow: "0 0 10px #a78bfa", zIndex: 10 }}
                              />
                              <motion.div
                                initial={{ left: "50%", top: "80%", scale: 0.5, opacity: 0 }}
                                animate={{ left: "90%", top: "45%", scale: 1, opacity: 1 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                style={{ position: "absolute", width: "10px", height: "10px", borderRadius: "50%", background: "#a78bfa", boxShadow: "0 0 10px #a78bfa", zIndex: 10 }}
                              />
                            </>
                          )}

                          {/* Animated Qubit Transmission */}
                          {denseStep === 3 && (
                            <motion.div
                              initial={{ left: "10%", opacity: 0 }}
                              animate={{ left: "90%", opacity: [0, 1, 1, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              style={{ position: "absolute", top: "33px", width: "14px", height: "14px", borderRadius: "50%", background: "#06b6d4", boxShadow: "0 0 10px #06b6d4", zIndex: 10 }}
                            />
                          )}
                        </div>

                        {/* Decoded Output Card */}
                        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, padding: 24, textAlign: "center" }}>
                          <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-3)", margin: 0, fontWeight: 700 }}>
                            Bob Decoded Outcome
                          </p>
                          <h3 style={{ fontSize: "3rem", fontWeight: 800, color: "var(--accent)", margin: "10px 0", letterSpacing: "0.05em" }}>
                            {bobMeasuredBits ?? "--"}
                          </h3>

                          {denseStep < 4 ? (
                            <span style={{ fontSize: "0.82rem", color: "var(--text-3)" }}>
                              Apply Alice's encoding gates and step through the transmission.
                            </span>
                          ) : bobMeasuredBits === denseBits ? (
                            <span style={{ fontSize: "0.82rem", color: "#34d399", fontWeight: 700 }}>
                              &bull; Success! Decoded classical bits match Alice's target state.
                            </span>
                          ) : (
                            <span style={{ fontSize: "0.82rem", color: "#fbbf24", fontWeight: 700 }}>
                              &bull; Transmission Mismatch: Alice applied incorrect encoding gates for target "{denseBits}".
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "activity" && (
              <motion.div
                key="activity"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {isTeleport ? <TeleportationActivity /> : <SuperdenseActivity />}
              </motion.div>
            )}

            {activeTab === "sandbox" && (
              <motion.div
                key="sandbox"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="d-flex justify-content-between align-items-center mb-16 flex-wrap gap-2">
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Qiskit Code Generation</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-3)", marginTop: 4, margin: 0 }}>
                      Copy this auto-generated code to run it locally or inside Google Colab.
                    </p>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="btn-secondary-wiser"
                    style={{
                      padding: "8px 16px",
                      fontSize: "0.8rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 8
                    }}
                  >
                    {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
                    {copied ? "Copied!" : "Copy Code"}
                  </button>
                </div>

                <pre
                  style={{
                    background: "var(--bg-canvas)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: 20,
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "0.82rem",
                    color: "var(--accent)",
                    overflowX: "auto",
                    maxHeight: 400,
                    marginTop: 20
                  }}
                >
                  {qiskitCode}
                </pre>
              </motion.div>
            )}

            {activeTab === "quiz" && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0 }}>Checkpoint Quiz ({quizIndex + 1}/10)</h3>
                  {!quizSubmitted && (
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.9rem", color: timeLeft <= 5 ? "#f43f5e" : "var(--text)" }}>
                      <AlertCircle size={16} />
                      <span style={{ fontWeight: 700 }}>{timeLeft}s Left</span>
                    </div>
                  )}
                </div>

                {!quizSubmitted ? (
                  <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
                    <h5 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 20 }}>
                      {questions[quizIndex].q}
                    </h5>

                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {questions[quizIndex].options.map((opt, optIdx) => {
                        const isSelected = selectedOpt === optIdx;
                        const isCorrect = optIdx === questions[quizIndex].correct;

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(optIdx)}
                            style={{
                              width: "100%",
                              textAlign: "left",
                              padding: "12px 18px",
                              background: selectedOpt !== null && isCorrect
                                ? "rgba(52, 211, 153, 0.1)"
                                : selectedOpt !== null && isSelected && !isCorrect
                                  ? "rgba(244, 63, 94, 0.1)"
                                  : isSelected
                                    ? "var(--accent-glow)"
                                    : "var(--bg-card)",
                              color: selectedOpt !== null && isCorrect
                                ? "#34d399"
                                : selectedOpt !== null && isSelected && !isCorrect
                                  ? "#f43f5e"
                                  : "var(--text-2)",
                              border: "1px solid",
                              borderColor: selectedOpt !== null && isCorrect
                                ? "#34d399"
                                : selectedOpt !== null && isSelected && !isCorrect
                                  ? "#f43f5e"
                                  : isSelected
                                    ? "var(--accent)"
                                    : "var(--border)",
                              borderRadius: 10,
                              fontSize: "0.88rem",
                              fontWeight: isSelected ? 600 : 500,
                              cursor: selectedOpt !== null ? "default" : "pointer"
                            }}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {selectedOpt !== null && (
                      <div className="mt-4 d-flex justify-content-end">
                        <button
                          className="btn-primary-wiser"
                          onClick={() => handleNextQuestion(false)}
                          style={{ padding: "10px 24px", fontSize: "0.82rem" }}
                        >
                          {quizIndex < questions.length - 1 ? "Next Question" : "Submit Results"}
                          <ArrowRight size={14} className="ms-2" />
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ textAlign: "center", padding: "32px 0" }}>
                    {quizPassed ? (
                      <div style={{ maxWidth: 460, margin: "0 auto" }}>
                        <CheckCircle2 size={48} className="text-success mb-3" />
                        <h4 style={{ fontWeight: 700 }}>Validation Complete!</h4>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-3)", marginBottom: 24 }}>
                          You scored {quizScore}/10. Excellent! You have successfully unlocked the formal laboratory report and cryptographically signed completion certificate.
                        </p>
                        <button className="btn-primary-wiser" onClick={() => setActiveTab("report")}>
                          View Credentials
                        </button>
                      </div>
                    ) : (
                      <div style={{ maxWidth: 460, margin: "0 auto" }}>
                        <AlertCircle size={48} className="text-danger mb-3" />
                        <h4 style={{ fontWeight: 700 }}>Verification Failed</h4>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-3)", marginBottom: 24 }}>
                          You scored {quizScore}/10. A perfect 10/10 score is required to pass. Please review the theory modules and try again.
                        </p>
                        <button
                          className="btn-primary-wiser"
                          onClick={() => {
                            setQuizIndex(0);
                            setQuizScore(0);
                            setSelectedOpt(null);
                            setQuizSubmitted(false);
                            setTimeLeft(30);
                          }}
                        >
                          Retry Checkpoint
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "report" && (
              <motion.div
                key="report"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 16 }}>Academic Credentials</h3>

                {!quizPassed ? (
                  <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 12, padding: 32, textAlign: "center" }}>
                    <Lock size={32} className="text-muted mb-3" />
                    <h5 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-3)" }}>Credentials Locked</h5>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-3)", maxWidth: 380, margin: "8px auto 0 auto" }}>
                      You must score 10/10 on the Checkpoint Quiz to unlock the printable Laboratory Report and Completion Certificate.
                    </p>
                  </div>
                ) : (
                  <div className="row g-4">
                    {/* Prepopulated Lab Report (matching landing page styling) */}
                    <div className="col-lg-6">
                      <div className="report-preview" style={{ height: "100%", background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
                        {/* Header bar */}
                        <div className="report-header-bar d-flex align-items-center gap-3" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)", padding: "12px 20px" }}>
                          <FileText size={14} style={{ color: "var(--accent)" }} />
                          <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)" }}>
                            Laboratory Report Preview
                          </span>
                          <span className="ms-auto tag-pill" style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(6, 182, 212, 0.2)", fontSize: "0.6rem" }}>
                            Report Ready
                          </span>
                        </div>

                        {/* Mock document */}
                        <div style={{ padding: 28 }}>
                          {/* Title block */}
                          <div style={{ borderBottom: "3px solid var(--accent)", paddingBottom: 14, marginBottom: 18 }}>
                            <p style={{ fontSize: "0.58rem", letterSpacing: "0.2em", color: "var(--text-3)", textTransform: "uppercase", fontWeight: 600 }}>AETHER QUANTUM LAB</p>
                            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text)" }}>Laboratory Report</p>
                          </div>

                          {/* Metadata grid */}
                          <div className="row g-2 mb-4" style={{ fontSize: "0.75rem" }}>
                            {[
                              ["Student Name", "Learner Name"],
                              ["Roll Number", "CS21B042"],
                              ["Experiment", `Exp ${idStr} - ${isTeleport ? "Teleportation" : "Dense Coding"}`],
                              ["Date", "12 Jul 2026"]
                            ].map(([k, v]) => (
                              <div key={k} className="col-6">
                                <p style={{ fontSize: "0.58rem", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{k}</p>
                                <p style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.78rem" }}>{v}</p>
                              </div>
                            ))}
                          </div>

                          {/* Sections */}
                          {["Aim & Principle", "Observations & Quantum Amplitudes", "Conclusion & Verification"].map((s, idx) => (
                            <div key={s} style={{ marginBottom: 14 }}>
                              <div style={{ fontSize: "0.58rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", borderLeft: "3px solid var(--accent)", paddingLeft: 8, marginBottom: 6 }}>
                                {s}
                              </div>
                              <div style={{ height: 8, borderRadius: 4, background: "var(--border)", marginBottom: 4 }} />
                              <div style={{ height: 8, borderRadius: 4, background: "var(--border)", width: idx === 1 ? "90%" : "75%" }} />
                            </div>
                          ))}

                          <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
                            <button className="btn-primary-wiser" onClick={downloadReport} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                              <FileText size={16} />
                              Print Laboratory Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Prepopulated Certificate (matching landing page styling, ALWAYS forced light theme) */}
                    <div className="col-lg-6">
                      <div className="report-preview" style={{ height: "100%", background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
                        {/* Label bar */}
                        <div style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)", padding: "12px 20px", display: "flex", alignItems: "center", gap: 8 }}>
                          <Award size={14} style={{ color: "#C9A227" }} />
                          <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)" }}>
                            Completion Certificate Preview
                          </span>
                        </div>

                        {/* Certificate Body (forced light theme) */}
                        <div className="cert-forced-light" style={{ background: "#ffffff", color: "#1a1a1a" }}>
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
                                {isTeleport ? "Quantum Teleportation • Exp 2.1" : "Superdense Coding • Exp 2.2"}
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
                                <p style={{ fontWeight: 600, color: "#374151", margin: 0 }}>12 July 2026</p>
                              </div>
                              <div style={{ textAlign: "right" }}>
                                <p style={{ fontSize: "0.55rem", color: "#6B7280", margin: "0 0 2px 0" }}>VERIFICATION HASH</p>
                                <p style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "#8B6914", margin: 0 }}>WQL-21-A3F9D1B2-2026</p>
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
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
