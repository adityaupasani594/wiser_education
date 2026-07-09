"use client";
// src/app/page.tsx — WISER Quantum Platform Landing Page

import { useEffect, useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Atom, Sun, Moon, ArrowRight, Zap, MousePointer2, Globe,
  ShieldCheck, BookOpen, FlaskConical, ClipboardCheck,
  FileText, Award, ChevronUp, ExternalLink,
  Layers, Cpu, Radio, RotateCcw,
} from "lucide-react";
import TRANSLATIONS, { LangCode, LANG_META } from "@/data/translations";

// ─────────────────────────────────────────────
// Framer Motion helpers
// ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 220, damping: 28 } },
};
const stagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 220, damping: 28, delay } },
});

function SectionWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Teleportation Circuit SVG
// ─────────────────────────────────────────────
function TeleportCircuit() {
  const W = 440; const H = 140;
  const wires = [30, 70, 110];
  const labels = ["q₀", "q₁", "q₂"];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="auto" style={{ maxHeight: 140 }}>
      {/* Wire lines */}
      {wires.map((y, i) => (
        <g key={i}>
          <line x1={44} y1={y} x2={W - 12} y2={y} stroke="var(--border)" strokeWidth="1.5" />
          <text x={6} y={y + 5} fontSize="11" fontFamily="JetBrains Mono,monospace" fontWeight="700" fill="var(--text-3)">{labels[i]}</text>
        </g>
      ))}
      {/* H gate q0 */}
      <rect x={58} y={18} width={28} height={24} rx={4} className="circuit-gate-h" />
      <text x={72} y={34} textAnchor="middle" className="circuit-label" fill="#06b6d4">H</text>
      {/* CNOT q0→q1 at x=108 */}
      <line x1={108} y1={30} x2={108} y2={70} stroke="#34d399" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx={108} cy={30} r={5} fill="#34d399" />
      <circle cx={108} cy={70} r={12} fill="none" stroke="#34d399" strokeWidth="1.5" />
      <line x1={96} y1={70} x2={120} y2={70} stroke="#34d399" strokeWidth="1.5" />
      <line x1={108} y1={58} x2={108} y2={82} stroke="#34d399" strokeWidth="1.5" />
      {/* X gate on q2 */}
      <rect x={140} y={98} width={28} height={24} rx={4} className="circuit-gate-x" />
      <text x={154} y={114} textAnchor="middle" className="circuit-label" fill="#f43f5e">X</text>
      {/* H gate q2 */}
      <rect x={186} y={98} width={28} height={24} rx={4} className="circuit-gate-h" />
      <text x={200} y={114} textAnchor="middle" className="circuit-label" fill="#06b6d4">H</text>
      {/* CNOT q2→q1 at x=234 */}
      <line x1={234} y1={110} x2={234} y2={70} stroke="#34d399" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx={234} cy={110} r={5} fill="#34d399" />
      <circle cx={234} cy={70} r={12} fill="none" stroke="#34d399" strokeWidth="1.5" />
      <line x1={222} y1={70} x2={246} y2={70} stroke="#34d399" strokeWidth="1.5" />
      <line x1={234} y1={58} x2={234} y2={82} stroke="#34d399" strokeWidth="1.5" />
      {/* H gate q2 after barrier */}
      <rect x={258} y={98} width={28} height={24} rx={4} className="circuit-gate-h" />
      <text x={272} y={114} textAnchor="middle" className="circuit-label" fill="#06b6d4">H</text>
      {/* Measure boxes */}
      {[30, 70, 110].map((y, i) => (
        <g key={i}>
          <rect x={W - 46} y={y - 14} width={30} height={28} rx={4}
            fill="rgba(167,139,250,0.12)" stroke="#a78bfa" strokeWidth="1.5" />
          <text x={W - 31} y={y + 5} textAnchor="middle" fontSize="9"
            fontFamily="JetBrains Mono,monospace" fontWeight="700" fill="#a78bfa">M</text>
        </g>
      ))}
      {/* Barrier */}
      <line x1={248} y1={10} x2={248} y2={H - 10} stroke="var(--border)" strokeWidth="1"
        strokeDasharray="4,3" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// State Vector Display
// ─────────────────────────────────────────────
function StateVector() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick(p => (p + 1) % 8), 1200);
    return () => clearInterval(t);
  }, []);
  const states = ["|000⟩", "|001⟩", "|010⟩", "|100⟩", "|011⟩", "|101⟩", "|110⟩", "|111⟩"];
  const amps = [
    [0.707, 0, 0, 0, 0, 0, 0, 0.707],
    [0.5, 0.5, 0.5, 0.5, 0, 0, 0, 0],
    [0, 0, 0.577, 0.577, 0, 0.577, 0, 0],
    [0.707, 0, 0, 0, 0, 0, 0.707, 0],
  ];
  const row = amps[tick % amps.length];
  return (
    <div>
      <p style={{ fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 700, marginBottom: 8 }}>
        State Vector
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {states.slice(0, 4).map((s, i) => (
          <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "0.68rem", color: "var(--text-3)", width: 36 }}>{s}</span>
            <div style={{ flex: 1, height: 6, borderRadius: 99, background: "var(--border)", overflow: "hidden" }}>
              <motion.div
                animate={{ width: `${(row[i] ?? 0) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ height: "100%", borderRadius: 99, background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }}
              />
            </div>
            <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "0.65rem", color: "var(--accent)", width: 36, textAlign: "right" }}>
              {(row[i] ?? 0).toFixed(3)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Bloch Sphere with float animation
// ─────────────────────────────────────────────
function BlochSphere() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        style={{ position: "relative" }}
      >
        <div className="bloch-sphere">
          {/* Equator ellipse overlay */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3 }} viewBox="0 0 80 80">
            <ellipse cx="40" cy="40" rx="36" ry="11" fill="none" stroke="#fff" strokeWidth="1" />
            <line x1="40" y1="4" x2="40" y2="76" stroke="#fff" strokeWidth="0.6" opacity="0.5" />
            <line x1="4" y1="40" x2="76" y2="40" stroke="#fff" strokeWidth="0.6" opacity="0.5" />
          </svg>
          {/* State arrow */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            width: 2, height: 30, marginLeft: -1, marginTop: -30,
            background: "linear-gradient(to top, transparent, #fff)",
            borderRadius: 99, boxShadow: "0 0 6px #fff8",
          }} />
          <div style={{
            position: "absolute", top: "14%", left: "52%",
            width: 7, height: 7, borderRadius: "50%",
            background: "#fff", boxShadow: "0 0 8px #fff",
          }} />
        </div>
        <span style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", fontSize: "0.6rem", fontWeight: 700, color: "#67e8f9" }}>|0⟩</span>
        <span style={{ position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)", fontSize: "0.6rem", fontWeight: 700, color: "#7dd3fc" }}>|1⟩</span>
      </motion.div>
      <p style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600 }}>Bloch Sphere</p>
    </div>
  );
}

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
interface NavbarProps {
  dark: boolean;
  setDark: (v: boolean) => void;
  lang: LangCode;
  setLang: (l: LangCode) => void;
  dict: any;
}

function Navbar({ dark, setDark, lang, setLang, dict }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      className={`wiser-nav ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 26, delay: 0.1 }}
    >
      <div className="container-xl">
        <div className="d-flex align-items-center justify-content-between">
          {/* Brand */}
          <div className="d-flex align-items-center gap-3">
            <motion.div
              className="nav-logo-icon"
              whileHover={{ rotate: 15, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Atom size={18} color="#fff" strokeWidth={1.8} />
            </motion.div>
            <div>
              <div className="nav-brand-title">Aether</div>
              <div className="nav-brand-sub">Quantum Lab</div>
            </div>
          </div>

          {/* Links */}
          <div className="d-none d-md-flex align-items-center gap-4">
            {[
              { label: dict.nav_curriculum, href: "#curriculum" },
              { label: dict.nav_workflow, href: "#lab-workflow" },
              { label: dict.nav_credentials, href: "#credentials" }
            ].map((link) => (
              <a key={link.label} href={link.href}
                style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--text-3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="d-flex align-items-center gap-3">
            {/* Language Selector Dropdown */}
            <div className="lang-dropdown-wrapper" ref={dropdownRef}>
              <button className="lang-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <Globe size={14} />
                <span>{LANG_META[lang].flag} {LANG_META[lang].native}</span>
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="lang-menu"
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                  >
                    {(Object.keys(LANG_META) as LangCode[]).map((key) => (
                      <button
                        key={key}
                        className={`lang-option ${lang === key ? "active" : ""}`}
                        onClick={() => {
                          setLang(key);
                          setDropdownOpen(false);
                        }}
                      >
                        <span style={{ fontSize: "1.1rem" }}>{LANG_META[key].flag}</span>
                        <span>{LANG_META[key].native}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme toggle */}
            <div className="d-flex align-items-center gap-3">
              <span style={{ fontSize: "0.75rem", color: "var(--text-3)", display: "none" }} className="d-sm-block">
                {dark ? dict.nav_dark : dict.nav_light}
              </span>
              <motion.button
                className="theme-toggle"
                onClick={() => setDark(!dark)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                <motion.div
                  className="theme-toggle-thumb"
                  animate={{ x: dark ? 22 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                  style={{
                    background: dark ? "linear-gradient(135deg, var(--accent), #7e22ce)" : "linear-gradient(135deg, #fbbf24, #f59e0b)",
                    boxShadow: dark ? "0 0 8px var(--accent-glow)" : "0 0 8px rgba(251,191,36,0.5)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <AnimatePresence mode="wait">
                    {dark
                      ? <motion.div key="moon" initial={{ rotate: -30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 30, opacity: 0 }} transition={{ duration: 0.18 }}><Moon size={9} color="#fff" strokeWidth={2.5} /></motion.div>
                      : <motion.div key="sun" initial={{ rotate: 30, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -30, opacity: 0 }} transition={{ duration: 0.18 }}><Sun size={9} color="#fff" strokeWidth={2.5} /></motion.div>
                    }
                  </AnimatePresence>
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

// ─────────────────────────────────────────────
// SECTION 1 — HERO
// ─────────────────────────────────────────────
function HeroSection({ dict }: { dict: any }) {
  return (
    <section style={{ paddingTop: "120px", paddingBottom: "100px", position: "relative", overflow: "hidden" }}>
      {/* Background radial glow */}
      <div style={{
        position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
        width: 700, height: 400,
        background: "radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container-xl">
        <div className="row align-items-center g-5">
          {/* Left: text */}
          <div className="col-lg-6">
            <SectionWrapper>
              <motion.h1
                variants={stagger(0.05)}
                className="font-display"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 700, lineHeight: 1.08, color: "var(--text)", marginBottom: 24 }}
              >
                {dict.hero_line1}{" "}
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{dict.hero_em}</em>{" "}
                {dict.hero_line2}
              </motion.h1>

              <motion.p variants={stagger(0.1)} style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--text-3)", marginBottom: 36, maxWidth: 520 }}>
                {dict.hero_sub}
              </motion.p>

              <motion.div variants={stagger(0.15)} className="d-flex flex-wrap gap-3">
                <motion.a
                  href="#curriculum"
                  className="btn-primary-wiser"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {dict.hero_cta1} <ArrowRight size={15} />
                </motion.a>
                <motion.a
                  href="#curriculum"
                  className="btn-secondary-wiser"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {dict.hero_cta2}
                </motion.a>
              </motion.div>

              {/* Badges */}
              <motion.div variants={stagger(0.2)} className="d-flex flex-wrap gap-3 mt-4" style={{ opacity: 0.75 }}>
                {["Qiskit", "Google Colab"].map(b => (
                  <span key={b} className="tag-pill" style={{ background: "var(--bg-canvas)", color: "var(--text-3)", border: "1px solid var(--border)", fontSize: "0.65rem" }}>
                    {b}
                  </span>
                ))}
              </motion.div>
            </SectionWrapper>
          </div>

          {/* Right: floating glass showcase */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 24, delay: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "var(--shadow-lg), 0 0 0 1px var(--accent-glow)",
                }}
              >
                {/* Window chrome bar */}
                <div style={{ background: "var(--bg-canvas)", borderBottom: "1px solid var(--border)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 6 }}>
                  {["#f43f5e", "#fbbf24", "#34d399"].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.85 }} />
                  ))}
                  <span style={{ marginLeft: 8, fontSize: "0.7rem", fontFamily: "JetBrains Mono,monospace", color: "var(--text-3)" }}>
                    teleportation_circuit.py — Virtual Lab
                  </span>
                </div>

                <div style={{ padding: "24px 20px" }}>
                  {/* Label */}
                  <p style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: 14 }}>
                    Experiment 2.1 — Quantum Teleportation
                  </p>

                  {/* Circuit */}
                  <div style={{ background: "var(--bg-canvas)", borderRadius: 10, padding: "16px 12px", border: "1px solid var(--border)", marginBottom: 20 }}>
                    <TeleportCircuit />
                  </div>

                  {/* Bottom row: state vector + bloch */}
                  <div className="row g-3">
                    <div className="col-7">
                      <div style={{ background: "var(--bg-canvas)", borderRadius: 10, padding: 14, border: "1px solid var(--border)", height: "100%" }}>
                        <StateVector />
                      </div>
                    </div>
                    <div className="col-5">
                      <div style={{ background: "var(--bg-canvas)", borderRadius: 10, padding: "14px 8px", border: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 8 }}>
                        <BlochSphere />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 2 — PILLARS
// ─────────────────────────────────────────────
function PillarsSection({ dict }: { dict: any }) {
  const PILLARS_DATA = [
    {
      icon: <Globe size={22} />,
      color: "#06b6d4",
      bg: "rgba(6,182,212,0.1)",
      title: dict.p1_title,
      subtitle: dict.p1_subtitle,
      body: dict.p1_body,
    },
    {
      icon: <MousePointer2 size={22} />,
      color: "#a78bfa",
      bg: "rgba(167,139,250,0.1)",
      title: dict.p2_title,
      subtitle: dict.p2_subtitle,
      body: dict.p2_body,
    },
    {
      icon: <ShieldCheck size={22} />,
      color: "#34d399",
      bg: "rgba(52,211,153,0.1)",
      title: dict.p3_title,
      subtitle: dict.p3_subtitle,
      body: dict.p3_body,
    },
  ];

  return (
    <section id="pillars" style={{ padding: "100px 0", background: "var(--bg-canvas)" }}>
      <div className="container-xl">
        <SectionWrapper>
          <div className="text-center mb-5">
            <motion.p variants={fadeUp} className="section-label mb-2">{dict.pillars_label}</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              {dict.pillars_title}
            </motion.h2>
            <motion.p variants={stagger(0.1)} className="section-body mx-auto mt-3" style={{ maxWidth: 560 }}>
              {dict.pillars_body}
            </motion.p>
          </div>

          <div className="row g-4">
            {PILLARS_DATA.map((p, i) => (
              <div key={i} className="col-md-4">
                <motion.div variants={stagger(i * 0.08)} className="pillar-card h-100">
                  <div className="pillar-icon-wrap" style={{ background: p.bg, color: p.color }}>
                    {p.icon}
                  </div>
                  <p style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: p.color, fontWeight: 700, marginBottom: 6 }}>
                    {p.subtitle}
                  </p>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "var(--text-3)", marginBottom: 20 }}>
                    {p.body}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 3 — CURRICULUM TRACKS
// ─────────────────────────────────────────────
function CurriculumSection({ dict }: { dict: any }) {
  const TRACKS = [
    {
      num: "01", color: "#06b6d4", bg: "rgba(6,182,212,0.08)", border: "#06b6d4",
      icon: <Layers size={18} />,
      title: dict.t1_title,
      subtitle: dict.t1_sub,
      experiments: [dict.t1_e1, dict.t1_e2],
      concepts: dict.t1_c,
    },
    {
      num: "02", color: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "#a78bfa",
      icon: <Radio size={18} />,
      title: dict.t2_title,
      subtitle: dict.t2_sub,
      experiments: [dict.t2_e1, dict.t2_e2],
      concepts: dict.t2_c,
    },
    {
      num: "03", color: "#34d399", bg: "rgba(52,211,153,0.08)", border: "#34d399",
      icon: <ShieldCheck size={18} />,
      title: dict.t3_title,
      subtitle: dict.t3_sub,
      experiments: [dict.t3_e1, dict.t3_e2],
      concepts: dict.t3_c,
    },
    {
      num: "04", color: "#fbbf24", bg: "rgba(251,191,36,0.08)", border: "#fbbf24",
      icon: <RotateCcw size={18} />,
      title: dict.t4_title,
      subtitle: dict.t4_sub,
      experiments: [dict.t4_e1, dict.t4_e2],
      concepts: dict.t4_c,
    },
  ];

  return (
    <section id="curriculum" style={{ padding: "100px 0" }}>
      <div className="container-xl">
        <SectionWrapper>
          <div className="text-center mb-5">
            <motion.p variants={fadeUp} className="section-label mb-2">{dict.curriculum_label}</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              {dict.curriculum_title}
            </motion.h2>
            <motion.p variants={stagger(0.1)} className="section-body mx-auto mt-3" style={{ maxWidth: 560 }}>
              {dict.curriculum_body}
            </motion.p>
          </div>

          <div className="row g-4">
            {TRACKS.map((t, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <motion.div
                  variants={stagger(i * 0.07)}
                  className="track-card"
                  style={{ background: t.bg, borderColor: t.border + "44" }}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                >
                  <div className="track-number">{t.num}</div>
                  {/* Top accent line */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: t.border, borderRadius: "12px 12px 0 0" }} />

                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, color: t.color }}>
                    {t.icon}
                    <span style={{ fontSize: "0.62rem", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700 }}>{t.subtitle}</span>
                  </div>

                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>
                    {t.title}
                  </h3>

                  <div style={{ marginBottom: 16 }}>
                    {t.experiments.map((e, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: t.border, marginTop: 6, flexShrink: 0 }} />
                        <span style={{ fontSize: "0.8rem", color: "var(--text-2)", lineHeight: 1.5 }}>{e}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {t.concepts.map((c: string) => (
                      <span key={c} className="tag-pill" style={{ background: t.color + "15", color: t.color, border: `1px solid ${t.color}30`, fontSize: "0.6rem" }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 4 — 5-PILLAR WORKFLOW
// ─────────────────────────────────────────────
function WorkflowSection({ dict }: { dict: any }) {
  const [active, setActive] = useState(0);

  const WORKFLOW_STEPS = [
    {
      id: 0, icon: <BookOpen size={18} />, label: dict.s1_label,
      heading: dict.s1_heading,
      body: dict.s1_body,
      visual: (
        <div style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "0.78rem", color: "#CDD6F4", background: "#0D1117", borderRadius: 8, padding: 16, border: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ color: "#585b70" }}># Key equations rendered via MathJax</span><br />
          <span style={{ color: "#89b4fa" }}>|ψ⟩</span> = α<span style={{ color: "#89b4fa" }}>|0⟩</span> + β<span style={{ color: "#89b4fa" }}>|1⟩</span>,{"  "}
          |α|² + |β|² = <span style={{ color: "#fab387" }}>1</span><br />
          <span style={{ color: "#a6e3a1" }}>|Φ⁺⟩</span> = <span style={{ color: "#fab387" }}>(1/√2)</span>(<span style={{ color: "#89b4fa" }}>|00⟩</span> + <span style={{ color: "#89b4fa" }}>|11⟩</span>)
        </div>
      ),
    },
    {
      id: 1, icon: <FlaskConical size={18} />, label: dict.s2_label,
      heading: dict.s2_heading,
      body: dict.s2_body,
      visual: (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[["00", 0.5], ["01", 0.05], ["10", 0.05], ["11", 0.4]].map(([s, v]) => (
            <div key={s as string} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "0.7rem", color: "var(--text-3)", width: 28 }}>|{s as string}⟩</span>
              <div style={{ flex: 1, height: 10, borderRadius: 99, background: "var(--border)", overflow: "hidden" }}>
                <div style={{ width: `${(v as number) * 100}%`, height: "100%", borderRadius: 99, background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }} />
              </div>
              <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "0.65rem", color: "var(--accent)", width: 36, textAlign: "right" }}>{Math.round((v as number) * 1024)}</span>
            </div>
          ))}
          <p style={{ fontSize: "0.65rem", color: "var(--text-3)", marginTop: 4 }}>1024-shot simulation histogram</p>
        </div>
      ),
    },
    {
      id: 2, icon: <Cpu size={18} />, label: dict.s3_label,
      heading: dict.s3_heading,
      body: dict.s3_body,
      visual: (
        <div className="code-mini">
          <span style={{ color: "#89b4fa" }}>from</span> qiskit <span style={{ color: "#89b4fa" }}>import</span> QuantumCircuit<br />
          qc = QuantumCircuit(<span style={{ color: "#fab387" }}>3</span>, <span style={{ color: "#fab387" }}>3</span>)<br />
          qc.<span style={{ color: "#89dceb" }}>h</span>(<span style={{ color: "#fab387" }}>0</span>){"  "}<span style={{ color: "#585b70" }}># superposition</span><br />
          qc.<span style={{ color: "#89dceb" }}>cx</span>(<span style={{ color: "#fab387" }}>0</span>, <span style={{ color: "#fab387" }}>1</span>){"  "}<span style={{ color: "#585b70" }}># Bell pair</span><br />
          <span style={{ color: "#a6e3a1" }}>→ Launch in Google Colab ↗</span>
        </div>
      ),
    },
    {
      id: 3, icon: <ClipboardCheck size={18} />, label: dict.s4_label,
      heading: dict.s4_heading,
      body: dict.s4_body,
      visual: (
        <div style={{ background: "var(--bg-canvas)", borderRadius: 10, padding: 16, border: "1px solid var(--border)" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700, marginBottom: 10 }}>Question 4 of 10</p>
          <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--text)", marginBottom: 12 }}>
            What does the CNOT gate do when the control qubit is |1⟩?
          </p>
          {["Applies a phase flip", "Flips the target qubit (X)", "Does nothing", "Measures both qubits"].map((o, i) => (
            <div key={i} style={{ padding: "7px 12px", borderRadius: 8, border: `1.5px solid ${i === 1 ? "var(--accent)" : "var(--border)"}`, marginBottom: 6, fontSize: "0.78rem", color: i === 1 ? "var(--accent)" : "var(--text-2)", background: i === 1 ? "var(--accent-glow)" : "transparent" }}>
              {o}
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 4, icon: <Award size={18} />, label: dict.s5_label,
      heading: dict.s5_heading,
      body: dict.s5_body,
      visual: (
        <div style={{ background: "#FFFEF9", border: "1px solid #C9A227", borderRadius: 10, padding: "12px 16px", color: "#1A1A1A" }}>
          <div style={{ borderBottom: "2px solid #B8860B", paddingBottom: 8, marginBottom: 10 }}>
            <p style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: "#8B6914", textTransform: "uppercase", fontWeight: 700, fontFamily: "Inter,sans-serif" }}>AETHER QUANTUM LAB</p>
            <p style={{ fontSize: "0.85rem", fontFamily: "'Playfair Display',serif", fontWeight: 700 }}>Certificate of Completion</p>
          </div>
          <p style={{ fontSize: "0.65rem", color: "#6B7280", fontFamily: "Inter,sans-serif" }}>This certifies that</p>
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1rem", fontWeight: 700, color: "#1A1A1A", marginBottom: 4 }}>Learner Name</p>
          <p style={{ fontSize: "0.62rem", fontFamily: "JetBrains Mono,monospace", color: "#8B6914", letterSpacing: "0.04em" }}>WQL-21-A3F9D1B2-2026</p>
        </div>
      ),
    },
  ];

  const step = WORKFLOW_STEPS[active];

  return (
    <section id="lab-workflow" style={{ padding: "100px 0", background: "var(--bg-canvas)" }}>
      <div className="container-xl">
        <SectionWrapper>
          <div className="text-center mb-5">
            <motion.p variants={fadeUp} className="section-label mb-2">{dict.workflow_label}</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              {dict.workflow_title}
            </motion.h2>
            <motion.p variants={stagger(0.1)} className="section-body mx-auto mt-3" style={{ maxWidth: 540 }}>
              {dict.workflow_body}
            </motion.p>
          </div>

          {/* Step tabs */}
          <motion.div variants={fadeUp} className="d-flex gap-2 mb-4 flex-wrap justify-content-center" style={{ flexWrap: "nowrap", overflowX: "auto", paddingBottom: 4 }}>
            {WORKFLOW_STEPS.map((s) => (
              <motion.button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`workflow-step ${active === s.id ? "active" : ""}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
                style={{ flex: "1 1 auto", minWidth: 110 }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{ color: active === s.id ? "var(--accent)" : "var(--text-3)" }}>
                    {s.icon}
                  </div>
                  <span style={{ fontSize: "0.7rem", fontWeight: 600, color: active === s.id ? "var(--accent)" : "var(--text-3)", whiteSpace: "nowrap" }}>
                    {s.label}
                  </span>
                  {active === s.id && (
                    <motion.div layoutId="workflow-dot" style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} transition={{ type: "spring", stiffness: 400, damping: 28 }} />
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="workflow-panel"
            >
              <div className="row align-items-center g-5">
                <div className="col-md-6">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: "var(--accent-glow)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                      {step.icon}
                    </div>
                    <span style={{ fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700 }}>
                      Step {active + 1} of 5
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", marginBottom: 14 }}>
                    {step.heading}
                  </h3>
                  <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "var(--text-3)" }}>
                    {step.body}
                  </p>
                </div>
                <div className="col-md-6">
                  {step.visual}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </SectionWrapper>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 5 — ASSETS & CREDENTIALS
// ─────────────────────────────────────────────
function AssetsSection({ dict }: { dict: any }) {
  return (
    <section id="credentials" style={{ padding: "100px 0" }}>
      <div className="container-xl">
        <SectionWrapper>
          <div className="text-center mb-5">
            <motion.p variants={fadeUp} className="section-label mb-2">{dict.assets_label}</motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              {dict.assets_title}
            </motion.h2>
            <motion.p variants={stagger(0.1)} className="section-body mx-auto mt-3" style={{ maxWidth: 520 }}>
              {dict.assets_body}
            </motion.p>
          </div>

          <div className="row g-4 align-items-stretch">
            {/* Lab Report Preview */}
            <div className="col-lg-6">
              <motion.div variants={stagger(0)} className="report-preview" style={{ height: "100%" }}>
                {/* Header bar */}
                <div className="report-header-bar d-flex align-items-center gap-3">
                  <FileText size={14} style={{ color: "var(--accent)" }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)" }}>
                    {dict.report_tab_label}
                  </span>
                  <span className="ms-auto tag-pill" style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--accent)44", fontSize: "0.6rem" }}>
                    PDF Export
                  </span>
                </div>

                {/* Mock document */}
                <div style={{ padding: "28px 28px 20px" }}>
                  {/* Title block */}
                  <div style={{ borderBottom: "3px solid var(--accent)", paddingBottom: 14, marginBottom: 18 }}>
                    <p style={{ fontSize: "0.58rem", letterSpacing: "0.2em", color: "var(--text-3)", textTransform: "uppercase", fontWeight: 600, fontFamily: "Inter,sans-serif" }}>AETHER QUANTUM LAB</p>
                    <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--text)" }}>Laboratory Report</p>
                  </div>

                  {/* Metadata grid */}
                  <div className="row g-2 mb-4" style={{ fontSize: "0.75rem" }}>
                    {[["Student Name", "Learner Name"], ["Roll Number", "CS21B042"], ["Experiment", "2.1 — Teleportation"], ["Date", "09 Jul 2026"]].map(([k, v]) => (
                      <div key={k} className="col-6">
                        <p style={{ fontSize: "0.58rem", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{k}</p>
                        <p style={{ fontWeight: 600, color: "var(--text)", fontSize: "0.78rem" }}>{v}</p>
                      </div>
                    ))}
                  </div>

                  {/* Sections */}
                  {["Aim", "Observations", "Conclusion"].map((s) => (
                    <div key={s} style={{ marginBottom: 14 }}>
                      <div style={{ fontSize: "0.58rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.14em", textTransform: "uppercase", borderLeft: "3px solid var(--accent)", paddingLeft: 8, marginBottom: 6 }}>
                        {s}
                      </div>
                      <div style={{ height: 8, borderRadius: 4, background: "var(--border)", marginBottom: 4 }} />
                      <div style={{ height: 8, borderRadius: 4, background: "var(--border)", width: "75%" }} />
                    </div>
                  ))}

                  {/* Download button teaser */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    style={{ marginTop: 20, padding: "10px 20px", borderRadius: 8, background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.8rem", fontWeight: 600, cursor: "pointer" }}
                  >
                    <FileText size={14} />
                    {dict.report_download}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Certificate Preview — ALWAYS LIGHT */}
            <div className="col-lg-6">
              <motion.div variants={stagger(0.08)} style={{ height: "100%" }}>
                {/* Label outside */}
                <div style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)", borderRadius: "12px 12px 0 0", padding: "10px 20px", display: "flex", alignItems: "center", gap: 8 }}>
                  <Award size={14} style={{ color: "var(--gold)" }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)" }}>
                    {dict.cert_tab_label}
                  </span>
                </div>

                {/* Certificate — hard forced light */}
                <div className="cert-forced-light" style={{ borderRadius: "0 0 12px 12px" }}>
                  {/* Gold top bar */}
                  <div style={{ height: 5, background: "linear-gradient(90deg, #8B6914, #C9A227, #F7D794, #C9A227, #8B6914)" }} />

                  <div style={{ padding: "32px 36px 28px", fontFamily: "Inter,sans-serif" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                      <div>
                        <p style={{ fontSize: "0.55rem", letterSpacing: "0.22em", color: "#8B6914", textTransform: "uppercase", fontWeight: 700, fontFamily: "Inter,sans-serif" }}>AETHER QUANTUM LAB</p>
                        <p style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#9CA3AF", textTransform: "uppercase" }}>Quantum Communication Education Platform</p>
                      </div>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(201,162,39,0.12)", border: "1.5px solid #C9A227", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Award size={20} color="#8B6914" strokeWidth={1.5} />
                      </div>
                    </div>

                    <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #C9A227, transparent)", marginBottom: 20 }} />

                    <div style={{ textAlign: "center", marginBottom: 20 }}>
                      <p style={{ fontSize: "0.62rem", letterSpacing: "0.16em", color: "#9CA3AF", textTransform: "uppercase", marginBottom: 10, fontFamily: "Inter,sans-serif" }}>This certifies that</p>
                      <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.6rem", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.1, marginBottom: 8 }}>Learner Name</p>
                      <p style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "#6B7280", textTransform: "uppercase", marginBottom: 8, fontFamily: "Inter,sans-serif" }}>has successfully completed</p>
                      <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.95rem", fontWeight: 600, color: "#1D4ED8", lineHeight: 1.3 }}>Quantum Teleportation · Experiment 2.1</p>
                    </div>

                    {/* Flourish */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #C9A22788)" }} />
                      <div style={{ display: "flex", gap: 6 }}>
                        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#C9A227" }} />
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#F7D794", marginTop: 1.5 }} />
                        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#C9A227" }} />
                      </div>
                      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #C9A22788, transparent)" }} />
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                      <div>
                        <p style={{ fontSize: "0.55rem", color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3, fontFamily: "Inter,sans-serif" }}>Completion Date</p>
                        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.85rem", fontWeight: 600, color: "#374151" }}>09 July 2026</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontSize: "0.55rem", color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3, fontFamily: "Inter,sans-serif" }}>Verification Hash</p>
                        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.7rem", fontWeight: 600, color: "#8B6914", letterSpacing: "0.04em" }}>WQL-21-A3F9D1B2-2026</p>
                      </div>
                    </div>
                  </div>

                  <div style={{ height: 3, background: "linear-gradient(90deg, #8B6914, #C9A227, #F7D794, #C9A227, #8B6914)" }} />
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SECTION 6 — CTA + FOOTER
// ─────────────────────────────────────────────
function CTAFooter({ dict }: { dict: any }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* CTA */}
      <section style={{ padding: "80px 0 100px", background: "var(--bg-canvas)" }}>
        <div className="container-xl">
          <SectionWrapper>
            <motion.div variants={fadeUp} className="cta-glass">
              <p className="section-label mb-3">{dict.cta_label}</p>
              <h2 className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>
                {dict.cta_title}
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--text-3)", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.75 }}>
                {dict.cta_body}
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <motion.a
                  href="#curriculum"
                  className="btn-primary-wiser"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ fontSize: "1rem", padding: "15px 36px" }}
                >
                  {dict.cta_btn} <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          </SectionWrapper>
        </div>
      </section>

      {/* Footer */}
      <footer className="wiser-footer">
        <div className="container-xl">
          <div className="row align-items-center g-4 mb-4">
            <div className="col-md-4">
              <div className="d-flex align-items-center gap-3 mb-2">
                <div className="nav-logo-icon" style={{ width: 30, height: 30, borderRadius: 8 }}>
                  <Atom size={14} color="#fff" strokeWidth={1.8} />
                </div>
                <span className="nav-brand-title" style={{ fontSize: "0.85rem" }}>Aether Quantum Lab</span>
              </div>
              <p style={{ fontSize: "0.78rem", color: "var(--text-3)", lineHeight: 1.6 }}>
                Quantum Communication
              </p>
            </div>
            <div className="col-md-4 d-flex justify-content-md-center">
              <div>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", fontWeight: 600, marginBottom: 10 }}>
                  {dict.footer_resources}
                </p>
                {[
                  { label: dict.footer_link_qiskit, href: "https://docs.quantum.ibm.com" },
                  { label: dict.footer_link_github, href: "#" },
                  { label: dict.footer_link_ibm, href: "https://quantum.ibm.com" },
                ].map(l => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "var(--text-3)", textDecoration: "none", marginBottom: 6, transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}
                  >
                    <ExternalLink size={11} />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-md-end">
              <motion.button
                onClick={scrollTop}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 10, background: "var(--bg-canvas)", border: "1px solid var(--border)", color: "var(--text-3)", cursor: "pointer", fontSize: "0.8rem", fontWeight: 600 }}
              >
                <ChevronUp size={14} />
                {dict.footer_back_top}
              </motion.button>
            </div>
          </div>

          <div style={{ height: 1, background: "var(--border)", marginBottom: 16 }} />
        </div>
      </footer>
    </>
  );
}

// ─────────────────────────────────────────────
// ROOT PAGE
// ─────────────────────────────────────────────
export default function LandingPage() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<LangCode>("en");

  // Get active translations dictionary
  const dict = TRANSLATIONS[lang];

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

  // Set default dark on mount
  useEffect(() => {
    document.documentElement.classList.add("dark-theme");
  }, []);

  return (
    <div>
      <Navbar dark={dark} setDark={setDark} lang={lang} setLang={setLang} dict={dict} />
      <main style={{ paddingTop: 0 }}>
        <HeroSection dict={dict} />
        <PillarsSection dict={dict} />
        <CurriculumSection dict={dict} />
        <WorkflowSection dict={dict} />
        <AssetsSection dict={dict} />
        <CTAFooter dict={dict} />
      </main>
    </div>
  );
}
