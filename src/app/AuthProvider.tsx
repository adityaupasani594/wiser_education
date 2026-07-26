"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { usePathname, useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: async () => {},
});

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading) {
      const isProtectedRoute = pathname?.startsWith("/experiments");
      const isLoginRoute = pathname === "/login";

      if (isProtectedRoute && !user) {
        router.push("/login");
      } else if (isLoginRoute && user) {
        router.push("/experiments");
      }
    }
  }, [user, loading, pathname, router]);

  const logout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Sign out error", error);
    }
  };

  if (loading && pathname?.startsWith("/experiments")) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "var(--bg-canvas, #050505)",
        color: "var(--text, #ffffff)",
        fontFamily: "'Inter', sans-serif"
      }}>
        <div className="quantum-spinner" style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          border: "3px solid rgba(6, 182, 212, 0.15)",
          borderTopColor: "var(--accent, #06b6d4)",
          animation: "spin-loader 1s linear infinite"
        }} />
        <p style={{ marginTop: 20, fontSize: "0.85rem", color: "var(--text-3, #888)", letterSpacing: "0.06em", fontWeight: 500 }}>
          INITIALIZING AETHER LABS...
        </p>
        <style>{`
          @keyframes spin-loader {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
