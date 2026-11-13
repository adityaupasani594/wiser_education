import React, { useState, useEffect, useRef, useMemo } from "react";
import QuantumChannel from "./QuantumChannel";
import "./Experiment1.css";
import { initializeProtocol } from "./QuantumChannelLogic";
import KeyAnalysisPanel from "./KeyAnalysisPanel";

// 🔒 Experiment 10 is classical-only
const EXP10_FROZEN = true;



export default function Exp10BB84() {
  // Committed (current) state
  

  const [numPhotons, setNumPhotons] = useState(16);



  // For Experiment 2 default Eve is ON — but slider should NOT start at 100%.
  // Set a sensible interactive default (change this if you prefer another starting %).
  const DEFAULT_EVE_PERCENT = 0;
  const [channelNoisePercent, setChannelNoisePercent] = useState(0);
  const [keyRateVsDistance, setKeyRateVsDistance] = useState([]);


  const [eveLevel, setEveLevel] = useState(DEFAULT_EVE_PERCENT);
  const [channelDistanceKm, setChannelDistanceKm] = useState(0);

  // Temporary values shown on sliders until user confirms
  const [sliderTempValue, setSliderTempValue] = useState(16);
  const [tempEveLevel, setTempEveLevel] = useState(DEFAULT_EVE_PERCENT);
  const [tempChannelNoisePercent, setTempChannelNoisePercent] = useState(0);
  const [tempChannelDistanceKm, setTempChannelDistanceKm] = useState(0);

  // Modal & UI
  const [showSliderConfirm, setShowSliderConfirm] = useState(false);
 


  // Transmission tracking
  const [sentTransmissions, setSentTransmissions] = useState([]);
  const [channelKey, setChannelKey] = useState(0);
  const [statusMessage, setStatusMessage] = useState(
  "Authentication attack active — Eve impersonates both parties"
);

  // Helpers
  const updateStatus = (message) => setStatusMessage(message);



  // Ref to receive QuantumChannel controls
  const qcControlsRef = useRef(null);

  // Initialize protocol once (on mount)
useEffect(() => {
  if (!EXP10_FROZEN) {
    initializeProtocol(numPhotons);
  }

  setEveLevel(DEFAULT_EVE_PERCENT);
  setTempEveLevel(DEFAULT_EVE_PERCENT);

  updateStatus(
    "Authentication attack active — Eve impersonates Alice and Bob"
  );
}, []);



  useEffect(() => {
    setEveLevel(DEFAULT_EVE_PERCENT);
  }, []);




  // ---------- Slider change handlers (set temp values + show modal) ----------
  const handlePhotonSliderChange = () => {
setStatusMessage(
  "Authentication attack active — Eve impersonates both parties"
);

};

  const handleEveSliderChange = () => {
    // Experiment 5: Eve is fixed at 20%
  };


  const handleNoiseChange = () => {
    // Noise fixed at 0% in Experiment 5
  };

  const handleDistanceChange = () => {
    // Distance fixed at 0 km in Experiment 5
  };


  // ---------- Confirm / Cancel for the modal ----------
  const confirmApplyChanges = () => {
    setNumPhotons(sliderTempValue);
    setEveLevel(DEFAULT_EVE_PERCENT);
    setTempEveLevel(DEFAULT_EVE_PERCENT);
    setChannelNoisePercent(0);
    setChannelDistanceKm(0);

    if (!EXP10_FROZEN) {
  initializeProtocol(sliderTempValue);
}

    setSentTransmissions([]);
    setChannelKey((k) => k + 1);

    updateStatus(
      `"Post-processing parameters updated (theoretical model)"
`
    );

    setShowSliderConfirm(false);
  };

  const cancelApplyChanges = () => {
    setSliderTempValue(numPhotons);
    setTempEveLevel(DEFAULT_EVE_PERCENT);
    setTempChannelNoisePercent(channelNoisePercent);
    setTempChannelDistanceKm(channelDistanceKm);

    setShowSliderConfirm(false);
  };

  // ---------- Channel options ----------
  const applyChannelOptions = () => {
    if (!EXP10_FROZEN) {
  initializeProtocol(numPhotons);
}

    setSentTransmissions([]);
    setChannelKey((k) => k + 1);
    updateStatus(
      `Channel updated: Distance = ${channelDistanceKm} km · Noise fixed at 0%`
    );


  };

  const resetChannelOptions = () => {
    setEveLevel(DEFAULT_EVE_PERCENT);
    setChannelNoisePercent(0);
    setChannelDistanceKm(0);

    if (!EXP10_FROZEN) {
  initializeProtocol(numPhotons);
}

    setSentTransmissions([]);
    setChannelKey(k => k + 1);

    updateStatus(
      `Reset complete — Photon loss experiment · Observe key rate reduction`
    );


  };

  function distanceToChannelEffects(distanceKm) {
    // Exponential-like attenuation (simplified, pedagogical)

    const lossPercent = Math.min(95, distanceKm * 0.6);

    // Noise becomes relevant only at long distance
    let noisePercent = 0;
    if (distanceKm > 80) noisePercent = 2;
    if (distanceKm > 120) noisePercent = 5;
    if (distanceKm > 160) noisePercent = 10;

    return { lossPercent, noisePercent };
  }

 const handleMeasured = (s) => {
  setStatusMessage(
    "Quantum measurement disabled — using theoretical post-processing model"
  );

  if (EXP10_FROZEN) return;

  // ===== LEGACY LOGIC (FROZEN, NEVER RUNS) =====

  if (typeof s.eveIntercepted === "undefined") s.eveIntercepted = false;

  if (!s.eveIntercepted) {
    s.eveBasis = "—";
    s.eveMeas = "—";
    s.eveResendBit = "—";
    s.eveResendBasis = "—";
  }

  setSentTransmissions((prev) => prev);
};


  // replay photon
  const handleRowClick = (index) => {
    if (qcControlsRef.current && typeof qcControlsRef.current.replayPhotonAnimation === "function") {
      try {
        qcControlsRef.current.replayPhotonAnimation(index - 1);
        updateStatus(`Replaying photon #${index}`);
        return;
      } catch (e) { }
    }
    const ev = new CustomEvent("replayPhoton", { detail: { index: index - 1 } });
    window.dispatchEvent(ev);
    updateStatus(`Replaying photon #${index}`);
  };

  // registerControls passed to QuantumChannel
  const registerControls = (controls) => {
  qcControlsRef.current = {
    ...controls,

    // 🔒 Disable quantum actions for Exp 10
    sendPhoton: () => {
      setStatusMessage(
        "Quantum transmission disabled — classical post-processing only"
      );
    },

    sendBurst: () => {
      setStatusMessage(
        "Quantum transmission disabled — classical post-processing only"
      );
    },
  };
};

  // Page-level handlers
  const pageSendNextPhoton = () => {
    if (qcControlsRef.current && typeof qcControlsRef.current.sendPhoton === "function") {
      qcControlsRef.current.sendPhoton();
      return;
    }
    window.dispatchEvent(new CustomEvent("sendNextPhoton"));
  };

  const pageSendAllPhotons = () => {
    if (qcControlsRef.current && typeof qcControlsRef.current.sendBurst === "function") {
      qcControlsRef.current.sendBurst();
      return;
    }
    window.dispatchEvent(new CustomEvent("sendAllPhotons"));
  };

  // Ensure temps mirror committed on mount/when committed values change
  useEffect(() => {
    setSliderTempValue(numPhotons);
    setTempEveLevel(eveLevel);
    setTempChannelNoisePercent(channelNoisePercent);
    setTempChannelDistanceKm(channelDistanceKm);
  }, [numPhotons, eveLevel, channelNoisePercent, channelDistanceKm]);

// ===============================
// EXPERIMENT 10 — ASSUMED VALUES
// ===============================
const assumedSiftedKeyLength = Math.floor(numPhotons * 0.5);
const assumedQBER = 3;
// MITM condition
const keysMatch = false;          // Alice ≠ Bob
const eveKnowledgePercent = 100;  // Eve knows both keys


const rawKeyLength = numPhotons;
const siftedKeyLength = assumedSiftedKeyLength;
const afterErrorCorrection = siftedKeyLength;
const finalSecureKeyLength = Math.max(
  1,
  Math.floor(siftedKeyLength * (1 - assumedQBER / 100) * 0.6)
);

  // --- Derived stats for graphs ---
 const stats = useMemo(() => {
  return {
    totalSent: rawKeyLength,
    detected: siftedKeyLength,
    lost: rawKeyLength - siftedKeyLength,
    siftedKeyBits: siftedKeyLength,
    matched: siftedKeyLength,
    errors: Math.floor(siftedKeyLength * assumedQBER / 100),
    qber: assumedQBER,
  };
}, [rawKeyLength, siftedKeyLength, assumedQBER]);


  /* ❄️ FROZEN — legacy fallback (DO NOT DELETE)
  // fallback (never used in Exp 10)
  return {
    totalSent: 0,
    detected: 0,
    lost: 0,
    siftedKeyBits: 0,
    matched: 0,
    errors: 0,
    qber: 0,
  };
}, [numPhotons, siftedKeyLength, assumedQBER]);
*/




  useEffect(() => {
    if (sentTransmissions.length !== numPhotons) return;

    setKeyRateVsDistance(prev => {
      const filtered = prev.filter(
        p => p.distance !== channelDistanceKm
      );

      return [
        ...filtered,
        {
          distance: channelDistanceKm,
          keyRate: stats.siftedKeyBits,
          qber: stats.qber,
        },
      ];
    });

    if (stats.qber > 11) {
      updateStatus(
        "QBER exceeded threshold — secure key generation aborted"
      );
    }
  }, [sentTransmissions, channelDistanceKm, numPhotons, stats]);

useEffect(() => {
  const blockQuantumSend = (e) => {
    e.stopImmediatePropagation();
    setStatusMessage(
      "Quantum transmission disabled — classical post-processing only"
    );
  };

  window.addEventListener("sendNextPhoton", blockQuantumSend, true);
  window.addEventListener("sendAllPhotons", blockQuantumSend, true);

  return () => {
    window.removeEventListener("sendNextPhoton", blockQuantumSend, true);
    window.removeEventListener("sendAllPhotons", blockQuantumSend, true);
  };
}, []);

  // ================= REPORT WINDOW (PRINT-SAFE) =================
  const openReportWindow = () => {
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

    const reportStats = {
      totalTransmissions: rawKeyLength,
      siftedKeyLength: siftedKeyLength,
      afterEC: afterErrorCorrection,
      finalKey: finalSecureKeyLength,
      qber: 0,
      qberThreshold: 11,
      eveKnowledge: 100,
      aliceBobMatch: 0,
      status: "COMPROMISED",
      authFailed: true,
    };

    // Calculate Y scale for Key Stages Bar Chart
    const yMaxKey = Math.max(reportStats.totalTransmissions, 16);
    const yScaleKey = 160 / yMaxKey;

    w.document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>Experiment 10 Report — BB84 Authentication Attack</title>

  <style>
    body {
      font-family: "Times New Roman", serif;
      background: white;
      color: black;
      margin: 40px;
      line-height: 1.5;
    }

    h1, h2 {
      text-align: center;
      margin: 0;
    }

    h1 { font-size: 22px; text-transform: uppercase; letter-spacing: 0.5px; }
    h2 { font-size: 16px; margin-top: 6px; margin-bottom: 20px; font-weight: normal; color: #333; }

    h3 {
      font-size: 15px;
      margin-top: 24px;
      margin-bottom: 8px;
      text-decoration: underline;
    }

    h4 {
      font-size: 14px;
      margin-top: 14px;
      margin-bottom: 6px;
    }

    p, li {
      font-size: 13.5px;
      line-height: 1.6;
    }

    ul {
      margin-left: 20px;
      margin-top: 4px;
    }

    .print-btn {
      display: block;
      margin: 0 auto 24px auto;
      padding: 9px 24px;
      border: 1px solid black;
      background: #f8f9fa;
      font-weight: bold;
      cursor: pointer;
      font-size: 14px;
      border-radius: 4px;
    }
    .print-btn:hover {
      background: #e2e8f0;
    }

    @media print {
      .print-btn { display: none; }
      body { margin: 20px; }
    }

    .status-alert {
      border: 2px solid #b91c1c;
      background-color: #fef2f2;
      color: #991b1b;
      padding: 12px 18px;
      border-radius: 6px;
      margin: 18px 0;
      font-size: 14px;
    }

    /* GRAPH ROW */
    .graph-row {
      display: flex;
      width: 100%;
      margin: 20px 0 30px 0;
      gap: 16px;
    }

    .graph-container {
      flex: 1;
      box-sizing: border-box;
      text-align: center;
    }

    .graph-container h4 {
      margin: 0 0 6px 0;
      font-size: 13px;
      font-weight: bold;
    }

    .graph-box {
      width: 100%;
      height: 250px;
      box-sizing: border-box;
    }

    .graph-box svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      font-size: 13px;
    }

    th, td {
      border: 1px solid #333;
      padding: 8px 10px;
      text-align: left;
    }

    th {
      background-color: #f1f5f9;
      font-weight: bold;
    }

    .badge-danger {
      color: #b91c1c;
      font-weight: bold;
    }
    .badge-success {
      color: #15803d;
      font-weight: bold;
    }
  </style>
</head>

<body>

<button class="print-btn" onclick="window.print()">Print Report</button>

<h1>LAB REPORT — EXPERIMENT 10</h1>
<h2>Authentication Attack (Man-in-the-Middle) in BB84 QKD</h2>

<p style="text-align: center; margin-bottom: 20px;">
  <strong>Experiment Date:</strong> ${reportDate} &nbsp;|&nbsp; <strong>Protocol:</strong> BB84 &nbsp;|&nbsp; <strong>Adversary Model:</strong> Active MITM
</p>

<div class="status-alert">
  <strong>SECURITY VERDICT: PROTOCOL COMPROMISED (AUTHENTICATION FAILURE)</strong><br/>
  Even though observed QBER is <strong>0%</strong> (well below the 11% abort threshold), Alice and Bob do not share a secret key. Eve has complete interception access.
</div>

<h3>1. Aim</h3>
<p>
To demonstrate the vulnerability of the BB84 protocol to an active Man-in-the-Middle (MitM) authentication attack on an unauthenticated classical channel, and to prove why classical channel authentication (e.g., Wegman-Carter MACs) is strictly indispensable to unconditional security.
</p>

<h3>2. Apparatus & Simulation Parameters</h3>
<ul>
  <li><strong>Alice:</strong> Single-photon transmitter and state preparer</li>
  <li><strong>Bob:</strong> Single-photon receiver and basis measurement apparatus</li>
  <li><strong>Eve:</strong> Active adversary impersonating Bob to Alice and Alice to Bob</li>
  <li><strong>Quantum Channel:</strong> Intercepted and terminated by Eve in dual sessions</li>
  <li><strong>Public Classical Channel:</strong> Unauthenticated (vulnerable to spoofing and redirection)</li>
  <li><strong>Software:</strong> QKD_Xplore Virtual Quantum Laboratory</li>
</ul>

<h3>3. Theory</h3>
<p>
The BB84 protocol guarantees that any passive or intercept-resend eavesdropper introduces observable errors into the quantum channel, causing the Quantum Bit Error Rate (QBER) to reach at least 25% when conjugate bases are mismatched.
</p>
<p>
However, quantum mechanics only protects the <em>confidentiality of the quantum transmission</em>; it does <strong>not</strong> authenticate the <em>identities</em> of the communicating parties. When the classical channel lacks mutual authentication:
</p>
<ul>
  <li>Eve establishes independent session 1 with Alice: Eve acts as Bob, measures Alice's photons, exchanges sifting bases with Alice, and negotiates key <em>K<sub>AE</sub></em>.</li>
  <li>Eve establishes independent session 2 with Bob: Eve acts as Alice, generates photons for Bob, exchanges sifting bases with Bob, and negotiates key <em>K<sub>EB</sub></em>.</li>
  <li>Because Eve executes genuine BB84 protocols with each party independently, <strong>no basis disturbance occurs</strong> in either link. The observed QBER for both Alice and Bob remains at <strong>0%</strong>.</li>
  <li>Alice and Bob both conclude that their communication is private. In reality, Alice holds <em>K<sub>AE</sub></em>, Bob holds <em>K<sub>EB</sub></em> (<em>K<sub>AE</sub> ≠ K<sub>EB</sub></em>), and Eve holds both keys, giving her 100% decryption and tampering capability.</li>
</ul>

<h3>4. Key Observations & Security Metrics</h3>
<p>
<strong>Total Photons Sent (Alice):</strong> ${reportStats.totalTransmissions}<br/>
<strong>Sifted Key Length:</strong> ${reportStats.siftedKeyLength} bits<br/>
<strong>Effective Key After Post-Processing:</strong> ${reportStats.finalKey} bits<br/>
<strong>Observed QBER (Alice–Eve):</strong> 0.0% (Threshold: 11.0%)<br/>
<strong>Observed QBER (Eve–Bob):</strong> 0.0% (Threshold: 11.0%)<br/>
<strong>Alice ↔ Bob Key Agreement:</strong> <span class="badge-danger">0% (FAILED — Keys Mismatched)</span><br/>
<strong>Eve Information Knowledge:</strong> <span class="badge-danger">100% (COMPLETE COMPROMISE)</span>
</p>

<div class="graph-row">

  <!-- GRAPH 1: KEY LENGTH STAGES -->
  <div class="graph-container">
    <h4>Key Length vs Processing Stage</h4>
    <div class="graph-box">
      <svg viewBox="0 0 280 240" preserveAspectRatio="none">
        <!-- Axes -->
        <line x1="45" y1="20" x2="45" y2="200" stroke="black" stroke-width="2"/>
        <polyline points="45,20 40,28 50,28" stroke="black" stroke-width="2" fill="none"/>
        <line x1="45" y1="200" x2="270" y2="200" stroke="black" stroke-width="2"/>
        <polyline points="270,200 262,195 262,205" stroke="black" stroke-width="2" fill="none"/>

        <!-- Y Axis Ticks -->
        <text x="35" y="204" font-size="11" text-anchor="end">0</text>
        <text x="35" y="164" font-size="11" text-anchor="end">${Math.round(yMaxKey * 0.25)}</text>
        <text x="35" y="124" font-size="11" text-anchor="end">${Math.round(yMaxKey * 0.5)}</text>
        <text x="35" y="84" font-size="11" text-anchor="end">${Math.round(yMaxKey * 0.75)}</text>
        <text x="35" y="44" font-size="11" text-anchor="end">${yMaxKey}</text>

        <!-- Y Label -->
        <text x="14" y="115" transform="rotate(-90 14 115)" font-size="12" font-weight="bold" text-anchor="middle">
          Bits →
        </text>

        <!-- Bars -->
        <!-- Raw -->
        <rect x="58" y="${200 - reportStats.totalTransmissions * yScaleKey}" width="38" height="${reportStats.totalTransmissions * yScaleKey}" fill="#1e293b"/>
        <text x="77" y="${194 - reportStats.totalTransmissions * yScaleKey}" font-size="12" font-weight="bold" text-anchor="middle">${reportStats.totalTransmissions}</text>
        <text x="77" y="216" font-size="10" text-anchor="middle">Raw</text>

        <!-- Sifted -->
        <rect x="112" y="${200 - reportStats.siftedKeyLength * yScaleKey}" width="38" height="${reportStats.siftedKeyLength * yScaleKey}" fill="#334155"/>
        <text x="131" y="${194 - reportStats.siftedKeyLength * yScaleKey}" font-size="12" font-weight="bold" text-anchor="middle">${reportStats.siftedKeyLength}</text>
        <text x="131" y="216" font-size="10" text-anchor="middle">Sifted</text>

        <!-- Post-EC -->
        <rect x="166" y="${200 - reportStats.afterEC * yScaleKey}" width="38" height="${reportStats.afterEC * yScaleKey}" fill="#64748b"/>
        <text x="185" y="${194 - reportStats.afterEC * yScaleKey}" font-size="12" font-weight="bold" text-anchor="middle">${reportStats.afterEC}</text>
        <text x="185" y="216" font-size="10" text-anchor="middle">After EC</text>

        <!-- Final -->
        <rect x="220" y="${200 - reportStats.finalKey * yScaleKey}" width="38" height="${reportStats.finalKey * yScaleKey}" fill="#dc2626"/>
        <text x="239" y="${194 - reportStats.finalKey * yScaleKey}" font-size="12" font-weight="bold" text-anchor="middle" fill="#dc2626">${reportStats.finalKey}</text>
        <text x="239" y="216" font-size="10" text-anchor="middle" font-weight="bold" fill="#dc2626">Compromised</text>
      </svg>
    </div>
  </div>

  <!-- GRAPH 2: SECURITY & ADVERSARY KNOWLEDGE -->
  <div class="graph-container">
    <h4>Adversary Knowledge vs Key Match</h4>
    <div class="graph-box">
      <svg viewBox="0 0 280 240" preserveAspectRatio="none">
        <!-- Axes -->
        <line x1="45" y1="20" x2="45" y2="200" stroke="black" stroke-width="2"/>
        <polyline points="45,20 40,28 50,28" stroke="black" stroke-width="2" fill="none"/>
        <line x1="45" y1="200" x2="270" y2="200" stroke="black" stroke-width="2"/>
        <polyline points="270,200 262,195 262,205" stroke="black" stroke-width="2" fill="none"/>

        <!-- Y Axis Ticks -->
        <text x="35" y="204" font-size="11" text-anchor="end">0%</text>
        <text x="35" y="160" font-size="11" text-anchor="end">25%</text>
        <text x="35" y="120" font-size="11" text-anchor="end">50%</text>
        <text x="35" y="80" font-size="11" text-anchor="end">75%</text>
        <text x="35" y="40" font-size="11" text-anchor="end">100%</text>

        <!-- Y Label -->
        <text x="14" y="115" transform="rotate(-90 14 115)" font-size="12" font-weight="bold" text-anchor="middle">
          Percentage (%) →
        </text>

        <!-- Bars -->
        <!-- Alice-Bob Match: 0% -->
        <rect x="75" y="198" width="50" height="2" fill="#ef4444"/>
        <text x="100" y="190" font-size="12" font-weight="bold" text-anchor="middle" fill="#dc2626">0%</text>
        <text x="100" y="216" font-size="10" text-anchor="middle">A-B Match</text>

        <!-- Eve Knowledge: 100% -->
        <rect x="165" y="40" width="50" height="160" fill="#b91c1c"/>
        <text x="190" y="32" font-size="12" font-weight="bold" text-anchor="middle" fill="#b91c1c">100%</text>
        <text x="190" y="216" font-size="10" text-anchor="middle">Eve Access</text>
      </svg>
    </div>
  </div>

  <!-- GRAPH 3: QBER VS ABORT THRESHOLD -->
  <div class="graph-container">
    <h4>Observed QBER vs Abort Threshold</h4>
    <div class="graph-box">
      <svg viewBox="0 0 280 240" preserveAspectRatio="none">
        <!-- Axes -->
        <line x1="45" y1="20" x2="45" y2="200" stroke="black" stroke-width="2"/>
        <polyline points="45,20 40,28 50,28" stroke="black" stroke-width="2" fill="none"/>
        <line x1="45" y1="200" x2="270" y2="200" stroke="black" stroke-width="2"/>
        <polyline points="270,200 262,195 262,205" stroke="black" stroke-width="2" fill="none"/>

        <!-- Y Axis Ticks -->
        <text x="35" y="204" font-size="11" text-anchor="end">0%</text>
        <text x="35" y="150" font-size="11" text-anchor="end">10%</text>
        <text x="35" y="100" font-size="11" text-anchor="end">20%</text>
        <text x="35" y="50" font-size="11" text-anchor="end">30%</text>

        <!-- Threshold line at 11% (y = 200 - 11*5 = 145) -->
        <line x1="45" y1="145" x2="260" y2="145" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="262" y="149" font-size="10" fill="#dc2626" font-weight="bold">11% Threshold</text>

        <!-- QBER Point at 0% -->
        <circle cx="120" cy="200" r="5" fill="#15803d"/>
        <text x="120" y="188" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">0.0%</text>
        <text x="120" y="216" font-size="10" text-anchor="middle">Observed QBER</text>

        <text x="160" y="90" font-size="11" fill="#475569" font-style="italic" text-anchor="middle">
          QBER = 0% &lt; 11%<br/>
          (Appears Secure,<br/>
          Auth Broken)
        </text>
      </svg>
    </div>
  </div>

</div>

<h3>5. Protocol Session Breakdown</h3>
<table>
  <thead>
    <tr>
      <th>Protocol Aspect</th>
      <th>Alice ↔ Eve (Leg 1)</th>
      <th>Eve ↔ Bob (Leg 2)</th>
      <th>End-to-End (Alice ↔ Bob)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Session Role</strong></td>
      <td>Alice (Tx) → Eve as "Bob" (Rx)</td>
      <td>Eve as "Alice" (Tx) → Bob (Rx)</td>
      <td>Eve intercepts both channels</td>
    </tr>
    <tr>
      <td><strong>Sifted Key Established</strong></td>
      <td>Yes (Key <em>K<sub>AE</sub></em>)</td>
      <td>Yes (Key <em>K<sub>EB</sub></em>)</td>
      <td><span class="badge-danger">MISMATCH (<em>K<sub>AE</sub> ≠ K<sub>EB</sub></em>)</span></td>
    </tr>
    <tr>
      <td><strong>Observed QBER</strong></td>
      <td><span class="badge-success">0.0% (&lt; 11%)</span></td>
      <td><span class="badge-success">0.0% (&lt; 11%)</span></td>
      <td><span class="badge-danger">Undetected by Error Rates</span></td>
    </tr>
    <tr>
      <td><strong>Eve Key Knowledge</strong></td>
      <td>100% (Eve generated <em>K<sub>AE</sub></em>)</td>
      <td>100% (Eve generated <em>K<sub>EB</sub></em>)</td>
      <td><span class="badge-danger">100% (Complete Interception)</span></td>
    </tr>
    <tr>
      <td><strong>Classical Channel State</strong></td>
      <td>Unauthenticated</td>
      <td>Unauthenticated</td>
      <td><span class="badge-danger">Man-in-the-Middle Compromise</span></td>
    </tr>
  </tbody>
</table>

<h3>6. Security Verification & Analysis</h3>
<p>
<strong>Why Classical Post-Processing Cannot Solve This:</strong><br/>
Classical error correction (e.g., Cascade, Winnow, LDPC) and privacy amplification are designed to remove transmission noise and eliminate Eve's partial information from weak intercept-resend attacks. However:
</p>
<ul>
  <li>Because Eve possesses the <em>entire raw key</em> for both legs, privacy amplification only compresses a key that Eve already knows in full.</li>
  <li>Both Alice and Bob execute error reconciliation successfully with Eve, never realizing they are communicating with an impostor.</li>
</ul>

<h3>7. Conclusions</h3>
<p>
1. <strong>QBER is an incomplete security indicator:</strong> A low Quantum Bit Error Rate (even exactly 0%) is a necessary but <em>insufficient</em> condition for secure quantum communications.
</p>
<p>
2. <strong>Quantum Key Distribution requires authenticated classical channels:</strong> To achieve unconditional security against active adversaries, QKD must be paired with an unconditionally secure message authentication code (such as Wegman-Carter authentication with universal hash functions).
</p>
<p>
3. <strong>Key Expansion Paradigm:</strong> Because classical authentication requires a short pre-shared initial secret key, practical QKD is fundamentally a <em>quantum key growing (expansion)</em> system rather than key distribution from scratch without prior trust.
</p>

<p style="margin-top:35px; text-align:center;">
  <strong>Report Certified by:</strong> Aether Virtual Quantum Laboratory &nbsp;|&nbsp; <strong>Sub-Experiment:</strong> 3.1.10
</p>

</body>
</html>
    `);

    w.document.close();
  };




  /* ---------- ScientificBar (title outside + svg fills card) ---------- */
  function ScientificBar({
    title,
    leftLabel,
    rightLabel,
    leftValue,
    rightValue,
    yLabel = "Count",
    xLabel = "",
    maxY = null,
  }) {
    const vbW = 800;
    const vbH = 400;
    const margin = { top: 50, right: 16, bottom: 70, left: 100 };
    const innerW = vbW - margin.left - margin.right;
    const innerH = vbH - margin.top - margin.bottom;
    const domainMax = Math.max(1, maxY ? maxY : leftValue, rightValue);
    const yTicks = 5;
    const tickStep = Math.ceil(domainMax / yTicks);
    const barWidth = Math.min(360, innerW * 0.26);
    const spacing = Math.max(24, Math.round(innerW * 0.04));
    const center = margin.left + innerW / 2;
    const leftX = center - barWidth - spacing / 2;
    const rightX = center + spacing / 2;
    const baselineY = margin.top + innerH;
    const valueToY = (v) => {
      const frac = Math.min(1, v / (tickStep * yTicks));
      return Math.round(baselineY - frac * innerH);
    };
    const ticks = [];
    for (let i = 0; i <= yTicks; i++) ticks.push(i * tickStep);

    return (
      <div className="chart-wrapper" role="group" aria-label={title}>
        <div className="chart-title-outside">{title}</div>
        <div className="chart-card" style={{ padding: 8 }}>
          <svg viewBox={`0 0 ${vbW} ${vbH}`} className="chart-svg" preserveAspectRatio="none" aria-hidden>
            {ticks.map((tick, i) => {
              const y = margin.top + innerH - (i / yTicks) * innerH;
              return (
                <g key={`tick-${i}`}>
                  <line x1={margin.left} x2={margin.left + innerW} y1={y} y2={y} className="chart-gridline" />
                  <text x={margin.left - 14} y={y + 6} className="chart-tick-label" style={{ fontSize: 16, fill: "#fff" }} textAnchor="end">
                    {tick}
                  </text>
                </g>
              );
            })}
            <line x1={margin.left} x2={margin.left} y1={margin.top} y2={margin.top + innerH} className="chart-axis-main" />
            <polyline
              points={`${margin.left},${margin.top} ${margin.left - 10},${margin.top + 20} ${margin.left + 10},${margin.top + 20}`}
              className="chart-axis-arrow"
              fill="none"
            />
            <text
              x={margin.left - 60}
              y={margin.top + innerH / 2}
              className="chart-axis-label"
              transform={`rotate(-90 ${margin.left - 72} ${margin.top + innerH / 2})`}
              style={{ fontSize: 18, fill: "#fff" }}
            >
              {yLabel}
            </text>
            <line x1={margin.left} x2={margin.left + innerW} y1={baselineY} y2={baselineY} className="chart-axis-main" />
            <polyline
              points={`${margin.left + innerW},${baselineY} ${margin.left + innerW - 14},${baselineY - 10} ${margin.left + innerW - 14},${baselineY + 10}`}
              className="chart-axis-arrow"
              fill="none"
            />
            {xLabel && (
              <text x={margin.left + innerW / 2} y={vbH - 12} className="chart-axis-label" style={{ fontSize: 16, fill: "#fff" }}>
                {xLabel} →
              </text>
            )}
            <rect
              x={leftX}
              y={valueToY(leftValue)}
              width={barWidth}
              height={baselineY - valueToY(leftValue)}
              rx="8"
              fill="#3b82f6"
            />
            <rect
              x={rightX}
              y={valueToY(rightValue)}
              width={barWidth}
              height={baselineY - valueToY(rightValue)}
              rx="8"
              fill="#eab308"
            />

            {leftValue > 0 && (
              <text
                x={leftX + barWidth / 2}
                y={valueToY(leftValue) - 10}
                className="chart-bar-value"
                style={{ fontSize: 20, fill: "#3b82f6", fontWeight: 800 }}
                textAnchor="middle"
              >
                {leftValue}
              </text>
            )}
            {rightValue > 0 && (
              <text
                x={rightX + barWidth / 2}
                y={valueToY(rightValue) - 10}
                className="chart-bar-value"
                style={{ fontSize: 20, fill: "#eab308", fontWeight: 800 }}
                textAnchor="middle"
              >
                {rightValue}
              </text>
            )}
            <text
              x={leftX + barWidth / 2}
              y={baselineY + 44}
              className="chart-tick-label"
              style={{ fontSize: 18, fill: "#ddd", fontWeight: 800, letterSpacing: "0.02em" }}
              textAnchor="middle"
            >
              {leftLabel}
            </text>
            <text
              x={rightX + barWidth / 2}
              y={baselineY + 44}
              className="chart-tick-label"
              style={{ fontSize: 18, fill: "#ddd", fontWeight: 800, letterSpacing: "0.02em" }}
              textAnchor="middle"
            >
              {rightLabel}
            </text>
          </svg>
        </div>
      </div>
    );
  }
function KeyLengthStagesGraph({
  rawKeyLength,
  siftedKeyLength,
  afterErrorCorrection,
  finalSecureKeyLength,
}) {
  const stages = [
    { label: "Raw Key", value: rawKeyLength },
    { label: "Sifted Key", value: siftedKeyLength },
    { label: "After Error Correction", value: afterErrorCorrection },
    { label: "Final Secure Key", value: finalSecureKeyLength },
  ];

  const maxVal = Math.max(...stages.map(s => s.value), 1);

  return (
    <div className="chart-wrapper">
      <div className="chart-title-outside">
        Key Length vs Processing Stage
      </div>

      <div className="chart-card">
        <svg viewBox="0 0 800 400" className="chart-svg">
          <line x1="80" y1="40" x2="80" y2="340" className="chart-axis-main" />
          <line x1="80" y1="340" x2="760" y2="340" className="chart-axis-main" />

          <text
            x="20"
            y="200"
            transform="rotate(-90 20 200)"
            className="chart-axis-label"
          >
            Key Length (bits)
          </text>

          <text x="360" y="390" className="chart-axis-label">
            Processing Stage
          </text>

          {stages.map((s, i) => {
            const barHeight = (s.value / maxVal) * 260;
            const x = 130 + i * 160;
            const y = 340 - barHeight;

            return (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width={80}
                  height={barHeight}
                  rx={6}
                  fill="#ffffff"
                />
                <text x={x + 40} y={360} textAnchor="middle" className="chart-tick-label">
                  {s.label}
                </text>
                <text x={x + 40} y={y - 8} textAnchor="middle" className="chart-tick-label">
                  {s.value}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}


  // ---------- Render ----------
  return (
    <div className="lab-container vertical-layout">
      {/* CENTER POP-UP WARNING — moved outside the aside so it overlays whole page */}
      {showSliderConfirm && (
        <div className="modal-overlay" onClick={() => { /* click outside doesn't auto close */ }}>
          <div className="slider-modal" role="dialog" aria-modal="true">
            <div style={{ fontWeight: 700, marginBottom: 12, fontSize: "1.1rem" }}>
              This will reset all data
            </div>

            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button className="exp-btn exp-btn-primary" onClick={confirmApplyChanges}>
                Apply
              </button>

              <button className="exp-btn exp-btn-ghost" onClick={cancelApplyChanges}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- Theory / Intro Box (always visible above the channel) --- */}
      <div className="experiment-theory-wrapper">
        <div className="experiment-theory-box" role="region" aria-label="Experiment 7 theory">
          <div className="theory-top">
            <h2 className="theory-title">Experiment 10 — Authentication Attack (Man-in-the-Middle in BB84)</h2>
          </div>

          <div className="theory-body">
          <p>
  <strong>Concept — Authentication Attack (Man-in-the-Middle):</strong>
  In this experiment, Eve does not disturb quantum states.
  Instead, she impersonates Bob to Alice and Alice to Bob,
  running two independent BB84 sessions.
</p>

<ul>
  <li>Alice generates a secure key with Eve.</li>
  <li>Bob generates a secure key with Eve.</li>
  <li>Alice and Bob do NOT share the same key.</li>
</ul>

<p>
  <strong>Critical Insight:</strong>
  QBER remains near zero, yet security is completely broken.
  This demonstrates why BB84 requires authenticated classical channels.
</p>



          </div>
        </div>
      </div>

      {/* MAIN: Controls (left) + Quantum Channel (right) */}
      <div className="channel-and-controls-wrapper">
        <aside className={`controls-left-column ${showSliderConfirm ? "disabled" : ""}`}>
          <h3>Experiment Controls</h3>

          {/* Number of Photons */}
          <div className="control-row">
            <label>Number of Photons (N)</label>
            <div className="slider-row">
             <input
  type="range"
  min="1"
  max="500"
  value={numPhotons}
  className="exp-slider"
  disabled
/>

              <span className="slider-value">
  {numPhotons} (Frozen)
</span>
            </div>
          </div>

          {/* Eve Level */}
          <div className="control-row">
            <label>Eve Interception (%)</label>
            <div className="slider-row">
              <input
                type="range"
                min="0"
                max="100"
                value={DEFAULT_EVE_PERCENT}
                className="exp-slider"
                disabled
              />
              <span className="slider-value">
                {DEFAULT_EVE_PERCENT}% (Fixed)
              </span>
            </div>
          </div>

          {/* Channel Noise */}
          {/* Channel Noise (Fixed for Experiment 8) */}
          <div className="control-row">
            <label>Channel Noise</label>
            <div className="slider-row">
              <input
                type="range"
                min="0"
                max="30"
                step="5"
                value={0}
                className="exp-slider"
                disabled
              />
              <span className="slider-value">0% (Fixed)</span>
            </div>
          </div>


          {/* Distance */}
          <div className="control-row">
            <label>Distance (km)</label>
            <div className="slider-row">
              <input
  type="range"
  min="0"
  max="200"
  step="10"
  value={0}
  className="exp-slider"
  disabled
/>

              <span className="slider-value">0 km (Frozen)</span>



            </div>
          </div>

          <div className="control-actions">
            <button className="exp-btn exp-btn-primary" disabled>
  Apply Settings (Frozen)
</button>

<button className="exp-btn exp-btn-ghost" disabled>
  Reset Experiment (Frozen)
</button>

          </div>

          <div id="transmission-status">{statusMessage}</div>
        </aside>

        <div className="channel-right-area">
          <section className="channel-hero">
            <div className="channel-stage">



              <QuantumChannel
  key={`qc-${channelKey}`}
  numPhotons={numPhotons}
  photonLossPercent={0}
  eveEnabled={false}
  channelNoisePercent={0}
  channelDistanceKm={channelDistanceKm}
  onMeasured={handleMeasured}
  registerControls={registerControls}
  forceMatchBases={false}
  frozen={true}   // 🔒 NEW
/>



            </div>
          </section>
        </div>
      </div>

     {/* GRAPH ROW — Experiment 10 */}
<section className="graphs-row-wrapper" aria-label="Experiment 10 graphs">
  <div className="graphs-row" style={{ alignItems: "flex-start" }}>
    <p className="graph-note">
  Error correction and privacy amplification CANNOT prevent
authentication attacks. Eve remains undetected without
an authenticated classical channel.

</p>

  </div>
</section>
<div className="auth-attack-panel">
  <h3>Key Agreement Verification</h3>

  <ul>
    <li>Alice Key: ✔ Generated</li>
    <li>Bob Key: ✔ Generated</li>
    <li>Alice ↔ Bob: ❌ Keys DO NOT match</li>
    <li>Eve Knowledge: ⚠ Full Access</li>
  </ul>
</div>

{/* Key Analysis Panel */}
<KeyAnalysisPanel
  transmissions={[]}          // keep empty
  truncateLength={16}
  qberAbortThreshold={11}
  overrideMode={true}         // 🔑 THIS IS CRITICAL
 overrideData={{
  totalTransmissions: rawKeyLength,
  siftedKeyLength: siftedKeyLength,
  detectedErrors: 0,              // no disturbance
  qber: 0,                        // looks perfect
  finalKeyLength: siftedKeyLength,
  authenticationFailed: true,     // NEW FLAG
  eveKnowledge: "COMPLETE",       // NEW INFO
}}

/>

      {/* REPORT BUTTON */}
      <div style={{ textAlign: "center", margin: "40px 0 20px 0" }}>
        <button
          className="exp-btn exp-btn-primary report-btn-large"
          onClick={openReportWindow}
        >
          REPORT
        </button>
      </div>

      <p className="experiment-warning" style={{ textAlign: "center", margin: "16px auto", maxWidth: 640 }}>
        ⚠️ Even with zero QBER, BB84 is insecure without authentication.
      </p>
    </div>
  );
}
