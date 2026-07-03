"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import Link from "next/link";
import { Eye, EyeOff, Zap, Star } from "lucide-react";

export default function LoginPage() {
    const { login } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent, overrideEmail?: string, overridePass?: string) => {
        e?.preventDefault();
        const em = overrideEmail ?? email;
        const pw = overridePass ?? password;
        setLoading(true);
        setError("");
        const result = await login(em, pw);
        setLoading(false);
        if (result.success) {
            const u = JSON.parse(sessionStorage.getItem("rms_current_user") || "{}");
            if (u.role === "admin") router.push("/admin");
            else router.push("/dashboard");
        } else {
            setError(result.error || "Login failed");
        }
    };

    const handleAutofill = (emailVal: string, passVal: string) => {
        setEmail(emailVal);
        setPassword(passVal);
        setError("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#080B14]">
            {/* Background */}
            <div className="absolute inset-0 mesh-gradient" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15" style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />

            <div className="relative z-10 w-full max-w-md px-4">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-10 rounded-xl btn-primary flex items-center justify-center">
                            <Star className="w-5 h-5 text-white fill-white" />
                        </div>
                        <span className="text-2xl font-bold gradient-text-primary">ReviewManagement</span>
                    </Link>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
                    <p className="text-slate-400">Sign in to your account to continue</p>
                </div>

                <div className="glass-card rounded-2xl p-8 bg-slate-950/80 border border-white/10 shadow-2xl">
                    {error && (
                        <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">{error}</div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Email address</label>
                            <input
                                type="email" value={email} onChange={e => setEmail(e.target.value)}
                                placeholder="you@example.com" required
                                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}
                                    placeholder="••••••••" required
                                    className="w-full px-4 py-3 pr-12 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
                                />
                                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
                                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <button type="submit" disabled={loading}
                            className="w-full py-3 rounded-xl btn-primary text-white font-semibold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-none">
                            {loading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>

                    <div className="my-6 flex items-center gap-3">
                        <div className="flex-1 h-px bg-slate-800" />
                        <span className="text-xs text-slate-500">OR</span>
                        <div className="flex-1 h-px bg-slate-800" />
                    </div>

                    {/* Demo Login */}
                    <button
                        onClick={() => handleLogin(null as any, "demo@reviewmanagement.com", "demo1234")}
                        className="w-full py-3 rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-400 font-semibold text-sm hover:bg-amber-500/20 transition-all flex items-center justify-center gap-2 mb-4 cursor-pointer"
                    >
                        <Zap className="w-4 h-4" />
                        Try Demo Account — No signup needed
                    </button>

                    {/* Quick Autofill Credentials List */}
                    <div className="space-y-2 text-xs text-slate-400 bg-white/5 border border-white/5 rounded-xl p-3.5">
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2.5 text-center">Quick Autofill Credentials</div>
                        
                        <button
                            type="button"
                            onClick={() => handleAutofill("admin@reviewmanagement.com", "admin1234")}
                            className="w-full text-left p-3 rounded-lg border border-white/5 bg-slate-950/40 hover:bg-violet-950/20 hover:border-violet-500/30 transition-all flex justify-between items-center group cursor-pointer"
                        >
                            <div>
                                <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                                    Admin Login
                                </div>
                                <div className="text-[10px] text-slate-400 font-mono">admin@reviewmanagement.com · admin1234</div>
                            </div>
                            <span className="text-[10px] text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">Autofill →</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => handleAutofill("demo@reviewmanagement.com", "demo1234")}
                            className="w-full text-left p-3 rounded-lg border border-white/5 bg-slate-950/40 hover:bg-violet-950/20 hover:border-violet-500/30 transition-all flex justify-between items-center group cursor-pointer"
                        >
                            <div>
                                <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                                    <span className="w-2 h-2 rounded-full bg-violet-500" />
                                    Demo Merchant
                                </div>
                                <div className="text-[10px] text-slate-400 font-mono">demo@reviewmanagement.com · demo1234</div>
                            </div>
                            <span className="text-[10px] text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">Autofill →</span>
                        </button>
                    </div>
                </div>

                <p className="text-center text-sm text-slate-400 mt-6">
                    New merchant?{" "}
                    <Link href="/register" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
                        Register your business
                    </Link>
                </p>
            </div>
        </div>
    );
}
