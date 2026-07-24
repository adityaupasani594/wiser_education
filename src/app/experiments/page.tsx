"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Atom, Search, Award, BookOpen, ShieldCheck, Layers, Radio,
  RotateCcw, Lock, CheckCircle2, Play, ArrowRight, Clock,
  BarChart, Sun, Moon, Home, ChevronRight, Check, Compass
} from "lucide-react";
import TRANSLATIONS, { LangCode, LANG_META } from "@/data/translations";
import Link from "next/link";

interface Experiment {
  id: string;
  title: string;
  trackId: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  concepts: string[];
  status: "Completed" | "In Progress" | "Locked";
}

const EXPERIMENTS_DATA = (dict: any): Experiment[] => [
  {
    id: "1.1",
    title: dict.t1_e1,
    trackId: 1,
    difficulty: "Beginner",
    duration: "15 mins",
    concepts: dict.t1_c,
    status: "Completed"
  },
  {
    id: "1.2",
    title: dict.t1_e2,
    trackId: 1,
    difficulty: "Beginner",
    duration: "20 mins",
    concepts: dict.t1_c,
    status: "Completed"
  },
  {
    id: "2.1",
    title: dict.t2_e1,
    trackId: 2,
    difficulty: "Intermediate",
    duration: "25 mins",
    concepts: dict.t2_c,
    status: "In Progress"
  },
  {
    id: "2.2",
    title: dict.t2_e2,
    trackId: 2,
    difficulty: "Intermediate",
    duration: "30 mins",
    concepts: dict.t2_c,
    status: "Locked"
  },
  {
    id: "3.1",
    title: dict.t3_e1,
    trackId: 3,
    difficulty: "Advanced",
    duration: "35 mins",
    concepts: dict.t3_c,
    status: "In Progress"
  },
  {
    id: "3.2",
    title: dict.t3_e2,
    trackId: 3,
    difficulty: "Advanced",
    duration: "35 mins",
    concepts: dict.t3_c,
    status: "In Progress"
  },
  {
    id: "4.1",
    title: dict.t4_e1,
    trackId: 4,
    difficulty: "Advanced",
    duration: "40 mins",
    concepts: dict.t4_c,
    status: "Locked"
  },
  {
    id: "4.2",
    title: dict.t4_e2,
    trackId: 4,
    difficulty: "Advanced",
    duration: "45 mins",
    concepts: dict.t4_c,
    status: "Locked"
  }
];

export default function ExperimentsHome() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<LangCode>("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  const dict = TRANSLATIONS[lang];
  const experiments = EXPERIMENTS_DATA(dict);

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

  const TRACKS = [
    { id: 1, title: dict.t1_title, subtitle: dict.t1_sub, icon: <Layers size={18} />, color: "#06b6d4" },
    { id: 2, title: dict.t2_title, subtitle: dict.t2_sub, icon: <Radio size={18} />, color: "#a78bfa" },
    { id: 3, title: dict.t3_title, subtitle: dict.t3_sub, icon: <ShieldCheck size={18} />, color: "#34d399" },
    { id: 4, title: dict.t4_title, subtitle: dict.t4_sub, icon: <RotateCcw size={18} />, color: "#fbbf24" }
  ];

  // Filtering
  const filteredExperiments = experiments.filter((exp) => {
    const matchesSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exp.concepts.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
      exp.id.includes(searchQuery);
    const matchesTrack = selectedTrack === null || exp.trackId === selectedTrack;
    return matchesSearch && matchesTrack;
  });

  const completedCount = experiments.filter(e => e.status === "Completed").length;
  const progressPercent = Math.round((completedCount / experiments.length) * 100);

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <aside className="sidebar-dashboard">
        <Link href="/" className="sidebar-logo">
          <div className="nav-logo-icon" style={{ width: 32, height: 32 }}>
            <Atom size={16} color="#fff" />
          </div>
          <div>
            <h1 className="nav-brand-title" style={{ fontSize: "0.95rem", margin: 0 }}>Aether</h1>
            <p className="nav-brand-sub" style={{ fontSize: "0.58rem", margin: 0 }}>Quantum Lab</p>
          </div>
        </Link>

        <ul className="sidebar-nav-list">
          <li>
            <Link href="/" className="sidebar-nav-item">
              <Home size={18} />
              <span>Landing Page</span>
            </Link>
          </li>
          <li>
            <button
              className={`sidebar-nav-item w-100 text-start ${selectedTrack === null ? "active" : ""}`}
              onClick={() => setSelectedTrack(null)}
              style={{ border: "none", background: "none" }}
            >
              <Compass size={18} />
              <span>All Tracks</span>
            </button>
          </li>
          <div style={{ height: 1, background: "var(--border)", margin: "12px 0" }} />
          {TRACKS.map(t => (
            <li key={t.id}>
              <button
                className={`sidebar-nav-item w-100 text-start ${selectedTrack === t.id ? "active" : ""}`}
                onClick={() => setSelectedTrack(t.id)}
                style={{ border: "none", background: "none", display: "flex", gap: "12px", alignItems: "center" }}
              >
                <span style={{ color: t.color }}>{t.icon}</span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {t.title}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Progress & Sidebar Controls */}
        <div className="sidebar-progress-box mt-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-3)" }}>Progress</span>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent)" }}>
              {completedCount}/{experiments.length}
            </span>
          </div>
          <div className="progress" style={{ height: 6, background: "var(--border)", borderRadius: 99 }}>
            <div
              className="progress-bar"
              style={{
                width: `${progressPercent}%`,
                background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                borderRadius: 99
              }}
            />
          </div>
          <p style={{ fontSize: "0.68rem", color: "var(--text-3)", marginTop: 8, margin: 0 }}>
            {progressPercent}% Complete
          </p>
        </div>

        {/* Bottom controls: Theme & Lang */}
        <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Theme Toggler */}
          <div className="d-flex align-items-center justify-content-between">
            <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>Theme</span>
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              style={{ width: 44, height: 22 }}
            >
              <div
                className="theme-toggle-thumb"
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  transform: `translateX(${dark ? "22px" : "2px"})`,
                  background: dark ? "var(--accent)" : "#fbbf24",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {dark ? <Moon size={8} color="#fff" /> : <Sun size={8} color="#fff" />}
              </div>
            </button>
          </div>

          {/* Lang Selector */}
          <div className="d-flex align-items-center justify-content-between">
            <span style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>Language</span>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as LangCode)}
              style={{
                fontSize: "0.75rem",
                background: "var(--bg-canvas)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                borderRadius: 6,
                padding: "2px 6px",
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
      </aside>

      {/* MAIN CONTAINER */}
      <main className="main-content-dashboard">
        {/* Header */}
        <header className="dashboard-header d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <span style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              Virtual Workspace
            </span>
            <h2 className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--text)", marginTop: 4 }}>
              Interactive Experiments
            </h2>
          </div>

          <div className="dashboard-search-bar">
            <Search size={16} className="text-muted" />
            <input
              type="text"
              placeholder="Search experiments or concepts..."
              className="dashboard-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        {/* Tracks List */}
        <div className="dashboard-body" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {TRACKS.filter(t => selectedTrack === null || t.id === selectedTrack).map((t) => {
            const trackExps = filteredExperiments.filter(e => e.trackId === t.id);
            if (trackExps.length === 0) return null;

            return (
              <section key={t.id}>
                <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                  <div className="track-heading" style={{ marginBottom: 0 }}>
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: `${t.color}15`,
                        color: t.color
                      }}
                    >
                      {t.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>{t.title}</h3>
                      <p style={{ fontSize: "0.7rem", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
                        {t.subtitle}
                      </p>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href={`/experiments/track/${t.id}`}
                      className="btn-secondary-wiser"
                      style={{
                        fontSize: "0.78rem",
                        padding: "8px 16px",
                        textDecoration: "none",
                        borderColor: `${t.color}40`,
                        color: t.color
                      }}
                    >
                      Explore Track
                    </Link>
                  </motion.div>
                </div>

                <div className="row g-4">
                  {trackExps.map((exp, index) => {
                    const isCompleted = exp.status === "Completed";
                    const isInProgress = exp.status === "In Progress";
                    const isLocked = exp.status === "Locked";

                    return (
                      <div key={exp.id} className="col-xl-4 col-md-6">
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="experiment-card-dash"
                        >
                          {/* Top row metadata */}
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <span
                              style={{
                                fontFamily: "Paper, monospace",
                                fontSize: "0.78rem",
                                fontWeight: 700,
                                color: t.color
                              }}
                            >
                              Exp {exp.id}
                            </span>

                            {/* Status Pill */}
                            <span
                              className="tag-pill"
                              style={{
                                background: isCompleted ? "rgba(52, 211, 153, 0.1)" : isInProgress ? `${t.color}15` : "var(--bg-canvas)",
                                color: isCompleted ? "#34d399" : isInProgress ? t.color : "var(--text-3)",
                                border: isCompleted
                                  ? "1px solid rgba(52, 211, 153, 0.2)"
                                  : isInProgress
                                    ? `1px solid ${t.color}30`
                                    : "1px solid var(--border)",
                                fontSize: "0.6rem"
                              }}
                            >
                              {isCompleted ? (
                                <CheckCircle2 size={10} className="me-1" />
                              ) : isInProgress ? (
                                <Compass size={10} className="me-1" />
                              ) : (
                                <Lock size={10} className="me-1" />
                              )}
                              {exp.status}
                            </span>
                          </div>

                          {/* Experiment Title */}
                          <h4 style={{ fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.4, color: "var(--text)", marginBottom: 14 }}>
                            {exp.title}
                          </h4>

                          {/* Metadata row */}
                          <div className="d-flex gap-3 mb-4" style={{ fontSize: "0.75rem", color: "var(--text-3)" }}>
                            <div className="d-flex align-items-center gap-1">
                              <BarChart size={13} />
                              <span>{exp.difficulty}</span>
                            </div>
                            <div className="d-flex align-items-center gap-1">
                              <Clock size={13} />
                              <span>{exp.duration}</span>
                            </div>
                          </div>

                          {/* Concepts tags */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                            {exp.concepts.slice(0, 3).map((c) => (
                              <span
                                key={c}
                                className="tag-pill"
                                style={{
                                  background: "var(--bg-canvas)",
                                  color: "var(--text-2)",
                                  border: "1px solid var(--border)",
                                  fontSize: "0.58rem"
                                }}
                              >
                                {c}
                              </span>
                            ))}
                          </div>

                          {/* Action Button */}
                          <div style={{ marginTop: "auto" }}>
                            {isLocked ? (
                              <button
                                className="btn-secondary-wiser w-100 d-flex align-items-center justify-content-center gap-2"
                                style={{ opacity: 0.6, cursor: "not-allowed", fontSize: "0.82rem" }}
                                disabled
                              >
                                <Lock size={14} />
                                <span>Locked</span>
                              </button>
                            ) : (
                              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link
                                  href={`/experiments/lab/${exp.id}`}
                                  className="btn-primary-wiser w-100 d-flex align-items-center justify-content-center gap-2"
                                  style={{ textDecoration: "none", fontSize: "0.82rem" }}
                                >
                                  {isCompleted ? <span>Restart Lab</span> : <span>Resume Lab</span>}
                                  <ArrowRight size={14} />
                                </Link>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
