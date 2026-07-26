"use client";

import React, { useState, useEffect, useRef } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, ArrowRight, ShieldAlert, Atom, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const router = useRouter();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Bloch Sphere Animation logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    
    // Support high-DPI screens
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let angleX = -0.4;
    let angleY = 0.5;

    // Define 3D points for particles
    const particleCount = 20;
    const particles: Point3D[] = [];
    const R = Math.min(width, height) * 0.32;

    for (let i = 0; i < particleCount; i++) {
      // Random points inside the sphere using spherical coordinates
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = R * Math.pow(Math.random(), 0.5); // uniform density

      particles.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi)
      });
    }

    const rotate3D = (p: Point3D, rx: number, ry: number): Point3D => {
      // Rotate around Y axis
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = p.x * cosY - p.z * sinY;
      const z1 = p.x * sinY + p.z * cosY;

      // Rotate around X axis
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      return { x: x1, y: y2, z: z2 };
    };

    const drawLine3D = (p1: Point3D, p2: Point3D, color: string, isDashed = false, width = 1) => {
      const pt1 = rotate3D(p1, angleX, angleY);
      const pt2 = rotate3D(p2, angleX, angleY);

      const cx = width / 2;
      const cy = height / 2;

      ctx.beginPath();
      ctx.moveTo(width / 2 + pt1.x, height / 2 + pt1.y);
      ctx.lineTo(width / 2 + pt2.x, height / 2 + pt2.y);
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      if (isDashed) {
        ctx.setLineDash([4, 4]);
      } else {
        ctx.setLineDash([]);
      }
      ctx.stroke();
    };

    const drawText3D = (text: string, p: Point3D, color: string, font = "11px Inter, sans-serif") => {
      const pt = rotate3D(p, angleX, angleY);
      ctx.font = font;
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, width / 2 + pt.x, height / 2 + pt.y);
    };

    const drawRing3D = (radius: number, plane: "xy" | "xz" | "yz", colorFront: string, colorBack: string) => {
      const points: Point3D[] = [];
      const steps = 60;
      for (let i = 0; i <= steps; i++) {
        const phi = (i / steps) * 2 * Math.PI;
        if (plane === "xy") {
          points.push({ x: radius * Math.cos(phi), y: radius * Math.sin(phi), z: 0 });
        } else if (plane === "xz") {
          points.push({ x: radius * Math.cos(phi), y: 0, z: radius * Math.sin(phi) });
        } else {
          points.push({ x: 0, y: radius * Math.cos(phi), z: radius * Math.sin(phi) });
        }
      }

      // Rotate all points
      const rotatedPoints = points.map(p => ({
        orig: p,
        rot: rotate3D(p, angleX, angleY)
      }));

      // Draw segment by segment depending on depth (z)
      ctx.lineWidth = 1.2;
      for (let i = 0; i < steps; i++) {
        const pt1 = rotatedPoints[i];
        const pt2 = rotatedPoints[i + 1];
        
        ctx.beginPath();
        ctx.moveTo(width / 2 + pt1.rot.x, height / 2 + pt1.rot.y);
        ctx.lineTo(width / 2 + pt2.rot.x, height / 2 + pt2.rot.y);

        // Average Z depth of segment
        const avgZ = (pt1.rot.z + pt2.rot.z) / 2;
        if (avgZ >= 0) {
          ctx.strokeStyle = colorFront;
          ctx.setLineDash([]);
        } else {
          ctx.strokeStyle = colorBack;
          ctx.setLineDash([2, 4]);
        }
        ctx.stroke();
      }
    };

    const render = (time: number) => {
      // Handle resizing if dynamic
      if (canvas.clientWidth !== width || canvas.clientHeight !== height) {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
      }

      ctx.clearRect(0, 0, width, height);

      // Rotate slowly over time
      angleX = -0.3 + 0.12 * Math.sin(time * 0.0003);
      angleY = time * 0.0002;

      // Draw outer spheres rings
      drawRing3D(R, "xy", "rgba(6, 182, 212, 0.4)", "rgba(6, 182, 212, 0.1)");
      drawRing3D(R, "xz", "rgba(167, 139, 250, 0.35)", "rgba(167, 139, 250, 0.08)");
      drawRing3D(R, "yz", "rgba(6, 182, 212, 0.2)", "rgba(6, 182, 212, 0.05)");

      // Draw Axes
      // Z-axis (|0> to |1>)
      drawLine3D({ x: 0, y: -R, z: 0 }, { x: 0, y: R, z: 0 }, "rgba(255, 255, 255, 0.25)", true, 1.2);
      // X-axis (|+> to |->)
      drawLine3D({ x: -R, y: 0, z: 0 }, { x: R, y: 0, z: 0 }, "rgba(255, 255, 255, 0.2)", true, 1);
      // Y-axis (|i> to |-i>)
      drawLine3D({ x: 0, y: 0, z: -R }, { x: 0, y: 0, z: R }, "rgba(255, 255, 255, 0.15)", true, 1);

      // Draw Axis labels
      drawText3D("|0⟩", { x: 0, y: -R - 16, z: 0 }, "#ffffff", "bold 13px Inter, sans-serif");
      drawText3D("|1⟩", { x: 0, y: R + 16, z: 0 }, "#a78bfa", "bold 13px Inter, sans-serif");
      drawText3D("|+⟩ (+x)", { x: R + 22, y: 0, z: 0 }, "rgba(255,255,255,0.6)", "500 11px Inter, sans-serif");
      drawText3D("|-⟩ (-x)", { x: -R - 22, y: 0, z: 0 }, "rgba(255,255,255,0.4)", "500 11px Inter, sans-serif");
      drawText3D("|i⟩ (+y)", { x: 0, y: 0, z: R + 22 }, "rgba(6,182,212,0.6)", "500 11px Inter, sans-serif");
      drawText3D("|-i⟩ (-y)", { x: 0, y: 0, z: -R - 22 }, "rgba(6,182,212,0.4)", "500 11px Inter, sans-serif");

      // Draw floating quantum particles
      particles.forEach((p, idx) => {
        // Animate particles floating
        const floatOffset = Math.sin(time * 0.001 + idx) * 3;
        const animatedP = { ...p, y: p.y + floatOffset };
        const rotP = rotate3D(animatedP, angleX, angleY);

        ctx.beginPath();
        ctx.arc(width / 2 + rotP.x, height / 2 + rotP.y, idx % 2 === 0 ? 2 : 1.2, 0, 2 * Math.PI);
        
        if (rotP.z >= 0) {
          ctx.fillStyle = idx % 3 === 0 ? "rgba(6, 182, 212, 0.65)" : "rgba(167, 139, 250, 0.6)";
          ctx.shadowBlur = 4;
          ctx.shadowColor = ctx.fillStyle;
        } else {
          ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Calculate state vector |ψ⟩ pointing dynamically
      const theta = (time * 0.0006) % (Math.PI);
      const phi = (time * 0.0004) % (2 * Math.PI);
      const stateVector: Point3D = {
        x: R * Math.sin(theta) * Math.cos(phi),
        y: -R * Math.cos(theta),
        z: R * Math.sin(theta) * Math.sin(phi)
      };

      // Draw State Vector Line
      const rotVector = rotate3D(stateVector, angleX, angleY);
      const cx = width / 2;
      const cy = height / 2;

      // Glowing shadow for vector
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#06b6d4";

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + rotVector.x, cy + rotVector.y);
      ctx.strokeStyle = "#06b6d4";
      ctx.lineWidth = 2.5;
      ctx.setLineDash([]);
      ctx.stroke();

      // Vector Tip Circle
      ctx.beginPath();
      ctx.arc(cx + rotVector.x, cy + rotVector.y, 4.5, 0, 2 * Math.PI);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "#06b6d4";
      ctx.stroke();

      ctx.shadowBlur = 0; // reset

      // Label state vector
      drawText3D("|ψ⟩", { x: stateVector.x * 1.18, y: stateVector.y * 1.18, z: stateVector.z * 1.18 }, "#06b6d4", "bold 14px Inter, sans-serif");

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!email || !password) {
      setError("Please fill in all credentials");
      return;
    }

    if (isRegister) {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }
      if (!name) {
        setError("Please enter your name");
        return;
      }
    }

    setLoading(true);

    try {
      if (isRegister) {
        // Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);
        
        // Save in users collection
        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          name: name,
          email: email,
          provider: "email",
          createdAt: new Date().toISOString()
        });

        // Initialize default progress
        await setDoc(doc(db, "progress", res.user.uid), {
          userId: res.user.uid,
          experimentStatuses: {
            "1.1": "In Progress",
            "1.2": "Not Started",
            "2.1": "Not Started",
            "2.2": "Not Started",
            "3.1": "Not Started",
            "3.2": "Not Started",
            "4.1": "Not Started",
            "4.2": "Not Started"
          },
          updatedAt: new Date().toISOString()
        });

        setSuccessMsg("Account successfully registered! Logging you in...");
        setTimeout(() => {
          router.push("/experiments");
        }, 1500);
      } else {
        // Sign in
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/experiments");
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered");
      } else if (err.code === "auth/invalid-credential" || err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
        setError("Incorrect email or password");
      } else {
        setError(err.message || "An authentication error occurred");
      }
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save user to Firestore if new
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName || "Google Learner",
          email: user.email || "",
          provider: "google",
          createdAt: new Date().toISOString()
        });

        // Setup default progress
        await setDoc(doc(db, "progress", user.uid), {
          userId: user.uid,
          experimentStatuses: {
            "1.1": "In Progress",
            "1.2": "Not Started",
            "2.1": "Not Started",
            "2.2": "Not Started",
            "3.1": "Not Started",
            "3.2": "Not Started",
            "4.1": "Not Started",
            "4.2": "Not Started"
          },
          updatedAt: new Date().toISOString()
        });
      }

      router.push("/experiments");
    } catch (err: any) {
      console.error(err);
      if (err.code !== "auth/popup-closed-by-user") {
        setError(err.message || "Google Sign-In failed");
      }
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at 10% 20%, #050b14 0%, #02050a 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      fontFamily: "'Inter', sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Decorative ambient blobs */}
      <div style={{ position: "absolute", width: 500, height: 500, top: "-10%", left: "-10%", background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 600, height: 600, bottom: "-20%", right: "-10%", background: "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div style={{
        width: "100%",
        maxWidth: 1040,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        background: "rgba(10, 15, 30, 0.65)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        borderRadius: 24,
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
        overflow: "hidden",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 5
      }}>
        {/* Left Side: Animated Bloch Sphere and Intro */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 32px",
          background: "linear-gradient(135deg, rgba(6, 182, 212, 0.04) 0%, rgba(167, 139, 250, 0.02) 100%)",
          borderRight: "1px solid rgba(255, 255, 255, 0.04)",
          textAlign: "center",
          position: "relative"
        }}>
          <div style={{ position: "absolute", top: 32, left: 32, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%", background: "rgba(6, 182, 212, 0.1)",
              display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(6, 182, 212, 0.25)"
            }}>
              <Atom size={16} color="#06b6d4" />
            </div>
            <div>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", color: "#fff" }}>AETHER</span>
              <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em", color: "var(--text-3, #888)", display: "block", marginTop: -2 }}>QUANTUM LAB</span>
            </div>
          </div>

          <div style={{ width: "100%", height: 320, position: "relative", marginTop: 24 }}>
            <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
          </div>

          <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#fff", marginBottom: 12, marginTop: 12 }}>
            Interactive Quantum Circuits
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--text-3, #888)", lineHeight: 1.6, maxWidth: 360, margin: "0 auto" }}>
            Design polarizers, measure quantum superposition states, test entanglement, and simulate raw cryptographic channels directly in your web browser.
          </p>
        </div>

        {/* Right Side: Form */}
        <div style={{ padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff", marginBottom: 8 }}>
              {isRegister ? "Start Learning" : "Welcome Back"}
            </h2>
            <p style={{ fontSize: "0.85rem", color: "var(--text-3, #888)", marginBottom: 32 }}>
              {isRegister ? "Create an account to track your lab credentials." : "Sign in to continue your quantum computing track."}
            </p>
          </div>

          <form onSubmit={handleAuth} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {isRegister && (
              <div style={{ position: "relative" }}>
                <User size={16} color="#06b6d4" style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", opacity: 0.8 }} />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%", padding: "14px 16px 14px 44px", background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)", borderRadius: 12, color: "#fff",
                    fontSize: "0.9rem", outline: "none", transition: "border 0.25s, background 0.25s"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent, #06b6d4)";
                    e.target.style.background = "rgba(6, 182, 212, 0.02)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.06)";
                    e.target.style.background = "rgba(255, 255, 255, 0.03)";
                  }}
                />
              </div>
            )}

            <div style={{ position: "relative" }}>
              <Mail size={16} color="#06b6d4" style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", opacity: 0.8 }} />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%", padding: "14px 16px 14px 44px", background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)", borderRadius: 12, color: "#fff",
                  fontSize: "0.9rem", outline: "none", transition: "border 0.25s, background 0.25s"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--accent, #06b6d4)";
                  e.target.style.background = "rgba(6, 182, 212, 0.02)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.06)";
                  e.target.style.background = "rgba(255, 255, 255, 0.03)";
                }}
              />
            </div>

            <div style={{ position: "relative" }}>
              <Lock size={16} color="#06b6d4" style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", opacity: 0.8 }} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%", padding: "14px 16px 14px 44px", background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)", borderRadius: 12, color: "#fff",
                  fontSize: "0.9rem", outline: "none", transition: "border 0.25s, background 0.25s"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--accent, #06b6d4)";
                  e.target.style.background = "rgba(6, 182, 212, 0.02)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.06)";
                  e.target.style.background = "rgba(255, 255, 255, 0.03)";
                }}
              />
            </div>

            {isRegister && (
              <div style={{ position: "relative" }}>
                <Lock size={16} color="#06b6d4" style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", opacity: 0.8 }} />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    width: "100%", padding: "14px 16px 14px 44px", background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.06)", borderRadius: 12, color: "#fff",
                    fontSize: "0.9rem", outline: "none", transition: "border 0.25s, background 0.25s"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent, #06b6d4)";
                    e.target.style.background = "rgba(6, 182, 212, 0.02)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.06)";
                    e.target.style.background = "rgba(255, 255, 255, 0.03)";
                  }}
                />
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div style={{
                display: "flex", gap: 10, alignItems: "center", background: "rgba(239, 68, 68, 0.08)",
                border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: 10, padding: "10px 14px",
                color: "#f87171", fontSize: "0.82rem"
              }}>
                <ShieldAlert size={16} style={{ flexShrink: 0 }} />
                <span>{error}</span>
              </div>
            )}

            {/* Success Message */}
            {successMsg && (
              <div style={{
                display: "flex", gap: 10, alignItems: "center", background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: 10, padding: "10px 14px",
                color: "#34d399", fontSize: "0.82rem"
              }}>
                <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
                <span>{successMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%", padding: "14px", background: "linear-gradient(135deg, var(--accent, #06b6d4) 0%, #7e22ce 100%)",
                border: "none", borderRadius: 12, color: "#fff", fontSize: "0.95rem", fontWeight: 700,
                cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 4px 15px rgba(6, 182, 212, 0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                transition: "opacity 0.2s, transform 0.2s"
              }}
              onMouseEnter={(e) => { if (!loading) e.currentTarget.style.opacity = "0.92"; }}
              onMouseLeave={(e) => { if (!loading) e.currentTarget.style.opacity = "1"; }}
            >
              {loading ? (
                <div style={{ width: 18, height: 18, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", animation: "btn-spin 0.8s linear infinite" }} />
              ) : (
                <>
                  <span>{isRegister ? "Create Account" : "Access Platform"}</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", margin: "24px 0", opacity: 0.4 }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255, 255, 255, 0.2)" }} />
            <span style={{ padding: "0 12px", fontSize: "0.75rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em" }}>or</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255, 255, 255, 0.2)" }} />
          </div>

          {/* Google Sign In */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            style={{
              width: "100%", padding: "12px", background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: 12, color: "#fff",
              fontSize: "0.9rem", fontWeight: 600, cursor: loading ? "not-allowed" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              transition: "background 0.2s"
            }}
            onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Toggle Button */}
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <span style={{ fontSize: "0.82rem", color: "var(--text-3, #888)" }}>
              {isRegister ? "Already have an account?" : "New to Aether?"}{" "}
            </span>
            <button
              onClick={() => {
                setIsRegister(!isRegister);
                setError(null);
              }}
              style={{
                background: "none", border: "none", color: "var(--accent, #06b6d4)",
                fontSize: "0.82rem", fontWeight: 700, cursor: "pointer", textDecoration: "underline",
                padding: 0
              }}
            >
              {isRegister ? "Sign In" : "Register Now"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes btn-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
