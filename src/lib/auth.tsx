"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { User, authenticate, initStore } from "./store";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        initStore();
        const saved = sessionStorage.getItem("rms_current_user");
        if (saved) {
            try { setUser(JSON.parse(saved)); } catch { /* ignore */ }
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        const found = authenticate(email, password);
        if (found) {
            setUser(found);
            sessionStorage.setItem("rms_current_user", JSON.stringify(found));
            return { success: true };
        }
        return { success: false, error: "Invalid email or password" };
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem("rms_current_user");
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}
