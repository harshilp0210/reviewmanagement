"use client";

import { useState } from "react";
import Link from "next/link";
import { 
    Star, Check, ArrowRight, MessageSquare, TrendingUp, Sparkles, Clock, 
    ShieldCheck, Users, Layers, Building, HelpCircle, ChevronDown, CheckCircle,
    Mail, Phone, FileText, LayoutGrid
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function HomeClient() {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [activeMockupTab, setActiveMockupTab] = useState<"dashboard" | "campaign" | "customers" | "reports">("dashboard");

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="bg-[#080B14] text-white min-h-screen relative overflow-hidden noise-overlay">
            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />

            {/* 1. Hero Section */}
            <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden z-10">
                <div className="container mx-auto px-6 lg:px-8 relative">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left Column */}
                        <div className="flex-1 space-y-6 text-left max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300 backdrop-blur-md">
                                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                Premium Reputation Growth Platform
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                                Get More Reviews.<br />
                                <span className="gradient-text">Build More Trust.</span><br />
                                Grow Faster.
                            </h1>
                            <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
                                ReviewManagement helps businesses automate review requests, monitor reputation, and turn satisfied customers into measurable growth.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Link 
                                    href="/demo"
                                    onClick={() => trackEvent("book_demo_click", { location: "hero_primary" })}
                                    className="btn-primary px-8 py-3.5 rounded-full text-white font-bold text-center text-sm shadow-md transition-all cursor-pointer"
                                >
                                    Book a Demo
                                </Link>
                                <Link 
                                    href="#how-it-works"
                                    onClick={() => trackEvent("feature_click", { location: "hero_secondary", target: "how_it_works" })}
                                    className="px-8 py-3.5 rounded-full border border-slate-800 bg-slate-950/40 text-slate-300 font-semibold text-center text-sm hover:border-violet-500/40 hover:bg-violet-950/10 transition-all"
                                >
                                    See How It Works
                                </Link>
                            </div>
                        </div>

                        {/* Right Column - Dashboard Mockup */}
                        <div className="flex-1 w-full relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-2xl blur-xl opacity-30 animate-pulse-glow" />
                            <div className="relative glass-card border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden bg-slate-950/80">
                                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                        <span className="text-[10px] text-slate-500 font-mono ml-1.5">app.reviewmanagement.com</span>
                                    </div>
                                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Live</span>
                                </div>

                                <div className="grid grid-cols-3 gap-3 mb-4">
                                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-left">
                                        <span className="text-[9px] text-slate-500 font-medium block">Average Rating</span>
                                        <span className="text-lg font-bold text-white mt-0.5 flex items-center gap-1 font-mono">
                                            4.8
                                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                        </span>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-left">
                                        <span className="text-[9px] text-slate-500 font-medium block">Requests Sent</span>
                                        <span className="text-lg font-bold text-white mt-0.5 font-mono">1,420</span>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-left">
                                        <span className="text-[9px] text-slate-500 font-medium block">Reviews Generated</span>
                                        <span className="text-lg font-bold text-white mt-0.5 font-mono">384</span>
                                    </div>
                                </div>

                                <div className="bg-violet-950/20 border border-violet-500/20 rounded-xl p-3.5 text-left">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-[10px] font-bold text-violet-300 font-mono flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-violet-400" /> Campaign Performance</span>
                                        <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20 font-mono">+45% Growth</span>
                                    </div>
                                    <div className="w-full bg-slate-900 h-1.5 rounded-full mt-2 overflow-hidden border border-white/5">
                                        <div className="bg-gradient-to-r from-violet-500 to-cyan-500 h-full rounded-full" style={{ width: "78%" }} />
                                    </div>
                                </div>

                                <div className="mt-4 space-y-2 text-left">
                                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Recent Activity</span>
                                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[10px] text-slate-300 flex justify-between items-center">
                                        <span>New 5-star review from <strong className="text-white">Sarah Jenkins</strong> (Google)</span>
                                        <span className="text-slate-500 text-[9px] font-mono">2m ago</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[10px] text-slate-300 flex justify-between items-center">
                                        <span>SMS request opened by <strong className="text-white">David Miller</strong></span>
                                        <span className="text-slate-500 text-[9px] font-mono">15m ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Trust/Stats Section */}
            <section className="py-12 border-y border-slate-900 bg-slate-950/40 relative z-10">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-1">
                            <div className="text-3xl font-black text-violet-400 font-mono">1.2M+</div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Reviews Managed</p>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl font-black text-cyan-400 font-mono">45%</div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Avg. Growth Rate</p>
                        </div>
                        <div className="space-y-1">
                            <div className="text-3xl font-black text-white font-mono">15m</div>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Setup Time</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Problem Section */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
                        <h2 className="text-2xl sm:text-3xl font-black text-white">
                            Your Happy Customers Should Be Your Best Marketing Channel.
                        </h2>
                        <p className="text-slate-400 text-sm">
                            Why manual review collection is holding your business back and hurting conversion.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Customers forget to leave reviews", desc: "Even happy clients forget to post reviews without a prompt.", icon: Clock },
                            { title: "Manual follow-ups waste time", desc: "Sending requests manually wastes hours of your staff's schedule weekly.", icon: MessageSquare },
                            { title: "Negative reviews damage trust", desc: "Intercept unhappy customer feedback privately before it hits search results.", icon: Star },
                            { title: "Business owners lack visibility", desc: "Operating without reporting metrics leaves you blind to your ratings growth.", icon: TrendingUp }
                        ].map((card, idx) => {
                            const Icon = card.icon;
                            return (
                                <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 transition-all text-slate-300">
                                    <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/15 flex items-center justify-center mb-4 text-violet-400">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-sm font-bold text-white mb-2 leading-tight">{card.title}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed">{card.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. How It Works Section */}
            <section id="how-it-works" className="py-20 border-t border-slate-900 bg-slate-950/20 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-xl mx-auto mb-14 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-white">How It Works</h2>
                        <p className="text-slate-400 text-sm">Grow your reputation automatically in three simple steps.</p>
                    </div>

                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 max-w-4xl mx-auto">
                        {/* Connecting Line */}
                        <div className="hidden lg:block absolute top-[50px] left-[15%] right-[15%] h-[1px] bg-slate-800 z-0" />

                        {[
                            { step: "1", title: "1. Add Customers", desc: "Upload contacts or add customers manually.", icon: Users },
                            { step: "2", title: "2. Send Review Requests", desc: "Launch email or SMS campaigns automatically.", icon: Mail },
                            { step: "3", title: "3. Track Growth", desc: "Monitor reviews, ratings, and campaign results from one dashboard.", icon: TrendingUp }
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="flex-1 glass-card border border-white/5 p-6 rounded-2xl shadow-sm text-slate-300 z-10 space-y-4 hover:border-violet-500/30 transition-all relative text-center">
                                    <div className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-sm mx-auto shadow-sm">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. Core Features Section */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-white">Core Features</h2>
                        <p className="text-slate-400 text-sm">Everything you need to scale your local reviews and build trust.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Email Review Requests", desc: "Reach customers in their inbox with high-conversion templates.", icon: Mail, link: "/features" },
                            { title: "SMS Review Requests", desc: "Deliver text request campaigns directly to mobile devices.", icon: Phone, link: "/features" },
                            { title: "Campaign Builder", desc: "Schedule sequences, customize branding, and automate follow-ups.", icon: Sparkles, link: "/features" },
                            { title: "Customer Management", desc: "Organize directories, partition lists, and inspect histories.", icon: Users, link: "/features" },
                            { title: "Review Dashboard", desc: "Monitor multi-channel feedback in one unified screen.", icon: LayoutGrid, link: "/features" },
                            { title: "Reporting & Analytics", desc: "Audit growth stats and export reports with ease.", icon: FileText, link: "/features" },
                            { title: "Agency Multi-Client View", desc: "Manage client portfolios and coordinate bulk campaigns.", icon: Building, link: "/agencies" },
                            { title: "Automated Follow-Ups", desc: "Resend polite reminders automatically to non-responders.", icon: Clock, link: "/features" }
                        ].map((feat, idx) => {
                            const Icon = feat.icon;
                            return (
                                <div key={idx} className="glass-card rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 transition-all text-slate-300 flex flex-col justify-between">
                                    <div>
                                        <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 mb-4">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-sm font-bold text-white mb-2">{feat.title}</h3>
                                        <p className="text-slate-400 text-xs leading-relaxed mb-4">{feat.desc}</p>
                                    </div>
                                    <Link 
                                        href={feat.link}
                                        onClick={() => trackEvent("feature_click", { location: "features_section", target: feat.title.toLowerCase() })}
                                        className="text-xs font-bold text-violet-400 hover:text-violet-300 inline-flex items-center gap-1 group mt-2"
                                    >
                                        Learn more
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 6. Product Dashboard Preview */}
            <section className="py-20 border-t border-slate-900 bg-slate-950/20 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-2xl mx-auto mb-12 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-white">Explore the Platform</h2>
                        <p className="text-slate-400 text-sm">A clean, high-fidelity look into the ReviewManagement workspace dashboard.</p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-6">
                        <div className="flex justify-center gap-2 p-1 bg-white/5 border border-white/5 rounded-full max-w-md mx-auto shadow-sm backdrop-blur-md">
                            {[
                                { id: "dashboard", label: "Dashboard" },
                                { id: "campaign", label: "Campaign Builder" },
                                { id: "customers", label: "Customer List" },
                                { id: "reports", label: "Reports" }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveMockupTab(tab.id as any);
                                        trackEvent("feature_click", { location: "mockup_preview", tab: tab.id });
                                    }}
                                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border-none bg-transparent cursor-pointer ${
                                        activeMockupTab === tab.id ? "bg-violet-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Interactive UI Mockups */}
                        <div className="glass-card border border-white/10 rounded-2xl p-6 shadow-2xl text-left min-h-[380px] flex flex-col justify-between bg-slate-950/80">
                            {activeMockupTab === "dashboard" && (
                                <div className="space-y-4 animate-fade-in">
                                    <h4 className="text-sm font-bold text-white border-b border-white/5 pb-2">Reputation Control Center</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Average Star Rating</span>
                                            <span className="text-2xl font-black text-white mt-1 flex items-center gap-1 font-mono">4.8 <Star className="w-5 h-5 text-amber-400 fill-amber-400" /></span>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Total Google Reviews</span>
                                            <span className="text-2xl font-black text-white mt-1 font-mono">312</span>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Campaign CTR</span>
                                            <span className="text-2xl font-black text-white mt-1 font-mono">42.8%</span>
                                        </div>
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Saved Admin Hours</span>
                                            <span className="text-2xl font-black text-white mt-1 font-mono">18 hrs</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                        <span className="text-[10px] font-bold text-slate-500 block mb-2 uppercase">Google Maps Visibility</span>
                                        <div className="flex justify-between items-center font-mono text-xs">
                                            <span>Search Impressions: <strong className="text-white">42,500 (+15%)</strong></span>
                                            <span>Map Pack Views: <strong className="text-white">12,800 (+22%)</strong></span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeMockupTab === "campaign" && (
                                <div className="space-y-4 animate-fade-in">
                                    <h4 className="text-sm font-bold text-white border-b border-white/5 pb-2">Campaign automation templates</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-xl border border-white/5 bg-white/5 space-y-2">
                                            <div className="flex justify-between font-bold text-xs">
                                                <span>SMS Quick-Feedback</span>
                                                <span className="text-cyan-400 bg-cyan-950/40 px-1.5 py-0.2 rounded border border-cyan-500/20">SMS Gateway</span>
                                            </div>
                                            <p className="text-xs text-slate-400">"Hi [First Name], thanks for choosing [Business Name]! Got 30 seconds to rate your visit? [Short Link]"</p>
                                        </div>
                                        <div className="p-4 rounded-xl border border-white/5 bg-white/5 space-y-2">
                                            <div className="flex justify-between font-bold text-xs">
                                                <span>Post-Visit Email Sequence</span>
                                                <span className="text-violet-400 bg-violet-950/40 px-1.5 py-0.2 rounded border border-violet-500/20">Email</span>
                                            </div>
                                            <p className="text-xs text-slate-400">"Subject: We'd love your feedback! Hi [First Name], thank you for your support last week..."</p>
                                        </div>
                                    </div>
                                    <div className="p-3 bg-violet-950/30 text-violet-300 text-xs font-semibold rounded-lg border border-violet-500/10">
                                        Campaign Builder automates post-visit follow-up sequences within 24 hours of check-out.
                                    </div>
                                </div>
                            )}

                            {activeMockupTab === "customers" && (
                                <div className="space-y-4 animate-fade-in text-slate-300">
                                    <h4 className="text-sm font-bold text-white border-b border-white/5 pb-2">Customer Directories</h4>
                                    <div className="overflow-x-auto text-xs">
                                        <table className="w-full text-left font-mono">
                                            <thead>
                                                <tr className="text-slate-500 border-b border-white/5 pb-2">
                                                    <th className="pb-1">Customer</th>
                                                    <th className="pb-1">Phone/Email</th>
                                                    <th className="pb-1">Status</th>
                                                    <th className="pb-1">Last Sent</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-white/5 py-2">
                                                    <td className="py-2 text-white font-bold">Chef Marco</td>
                                                    <td className="py-2 text-slate-400">marco@bistro.com</td>
                                                    <td className="py-2 text-emerald-400">Delivered</td>
                                                    <td className="py-2 text-slate-500">12m ago</td>
                                                </tr>
                                                <tr className="border-b border-white/5 py-2">
                                                    <td className="py-2 text-white font-bold">Sarah Jenkins</td>
                                                    <td className="py-2 text-slate-400">+1 555-0199</td>
                                                    <td className="py-2 text-violet-400">Reviewed</td>
                                                    <td className="py-2 text-slate-500">2h ago</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeMockupTab === "reports" && (
                                <div className="space-y-4 animate-fade-in">
                                    <h4 className="text-sm font-bold text-white border-b border-white/5 pb-2">Reputation Growth Audits</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <span className="text-[10px] text-slate-500 font-bold uppercase block">Monthly rating trends</span>
                                            <div className="h-16 flex items-end gap-2 pt-4">
                                                <div className="w-full bg-violet-500/20 h-6" />
                                                <div className="w-full bg-violet-500/40 h-8" />
                                                <div className="w-full bg-violet-500/60 h-10" />
                                                <div className="w-full bg-violet-600 h-14" />
                                            </div>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col justify-between">
                                            <span className="text-[10px] text-slate-500 font-bold uppercase block">PDF Export Settings</span>
                                            <p className="text-xs text-slate-400 my-2">Schedule auto-generated PDF reviews reports to clients monthly.</p>
                                            <button className="py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-xs font-bold border-none cursor-pointer">Export Now</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Solutions Section */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-xl mx-auto mb-14 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-white">Tailored Solutions</h2>
                        <p className="text-slate-400 text-sm">Pick the perfect positioning strategy for your business model.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10 text-left">
                        {[
                            { title: "Small Businesses", desc: "For local businesses that need more trust and reviews.", icon: Users },
                            { title: "Multi-Location Businesses", desc: "For brands managing reputation across locations.", icon: Layers },
                            { title: "Agencies", desc: "For agencies managing reviews for multiple clients.", icon: Building }
                        ].map((sol, idx) => {
                            const Icon = sol.icon;
                            return (
                                <div key={idx} className="glass-card border border-white/5 rounded-2xl p-6 flex flex-col justify-between gap-4 text-slate-300">
                                    <div className="space-y-4">
                                        <div className="w-10 h-10 rounded-lg bg-violet-600/10 text-violet-400 flex items-center justify-center shadow-sm">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-base font-bold text-white">{sol.title}</h3>
                                        <p className="text-slate-400 text-xs leading-relaxed">{sol.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <Link 
                        href="/solutions"
                        onClick={() => trackEvent("feature_click", { location: "solutions_section", target: "explore_solutions" })}
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 border border-slate-800 bg-slate-950/40 text-slate-300 font-semibold rounded-full text-xs hover:border-violet-500/40 hover:bg-violet-950/10 transition-all"
                    >
                        Explore Solutions
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* 8. Pricing Preview Section */}
            <section className="py-20 border-t border-slate-900 bg-slate-950/20 relative z-10">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-white">Simple, Transparent Pricing</h2>
                        <p className="text-slate-400 text-sm">Scale comfortable without hidden implementation fees.</p>
                        
                        <div className="flex items-center justify-center gap-3 pt-4">
                            <span className={`text-xs font-semibold ${billingPeriod === "monthly" ? "text-white" : "text-slate-500"}`}>Monthly</span>
                            <button 
                                onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
                                className="w-10 h-5.5 rounded-full bg-slate-850 p-0.5 relative flex items-center focus:outline-none transition-colors border-none cursor-pointer"
                            >
                                <div className={`w-4.5 h-4.5 rounded-full bg-violet-500 transition-all ${billingPeriod === "yearly" ? "translate-x-4.5" : "translate-x-0"}`} />
                            </button>
                            <span className={`text-xs font-semibold flex items-center gap-1 ${billingPeriod === "yearly" ? "text-white" : "text-slate-500"}`}>
                                Annually <span className="text-[9px] font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded-full">Save 20%</span>
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { name: "Starter", desc: "For small businesses", monthlyPrice: 49, yearlyPrice: 40, features: ["1 Location", "250 Requests/mo", "Email Campaigns", "Standard Support"] },
                            { name: "Growth", desc: "For growing teams", monthlyPrice: 99, yearlyPrice: 82, features: ["3 Locations", "1,000 Requests/mo", "Email & SMS Campaigns", "Priority Support"], popular: true },
                            { name: "Agency", desc: "For agencies", monthlyPrice: 299, yearlyPrice: 249, features: ["Up to 10 Client Accounts", "Agency Dashboard", "Multi-Client Reporting", "Dedicated Support"] }
                        ].map((plan) => {
                            const price = billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
                            return (
                                <div 
                                    key={plan.name}
                                    className={`rounded-2xl p-6 border flex flex-col justify-between relative transition-all ${
                                        plan.popular 
                                            ? "bg-slate-950/90 border-violet-500 shadow-xl shadow-violet-500/10" 
                                            : "glass-card border-white/5"
                                    }`}
                                >
                                    {plan.popular && (
                                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-600 text-white shadow-lg">
                                            Most Popular
                                        </span>
                                    )}
                                    <div>
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{plan.name}</span>
                                        <p className="text-slate-400 text-xs mt-1 min-h-8">{plan.desc}</p>
                                        <div className="my-5">
                                            <span className="text-3xl font-black text-white font-mono">${price}</span>
                                            <span className="text-slate-500 text-xs">/mo</span>
                                            <p className="text-[9px] text-slate-500 mt-1 font-mono">
                                                {billingPeriod === "yearly" ? `Billed annually ($${price * 12}/yr)` : "Billed monthly"}
                                            </p>
                                        </div>
                                        <ul className="space-y-2.5 border-t border-slate-900 pt-5 text-xs text-slate-400">
                                            {plan.features.map(f => (
                                                <li key={f} className="flex items-center gap-2">
                                                    <CheckCircle className="w-4.5 h-4.5 text-violet-400 shrink-0" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-6 flex flex-col gap-2">
                                        <Link 
                                            href="/register"
                                            onClick={() => trackEvent("signup_click", { plan: plan.name, location: "pricing_preview" })}
                                            className={`w-full py-2.5 rounded-full font-bold text-xs text-center border-none cursor-pointer block ${
                                                plan.popular
                                                    ? "bg-violet-600 hover:bg-violet-500 text-white"
                                                    : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/5"
                                            }`}
                                        >
                                            Start Free Trial
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-10 space-y-4">
                        <p className="text-xs text-slate-500 italic">Custom plans available for multi-location businesses.</p>
                        <div className="flex justify-center gap-4">
                            <Link 
                                href="/pricing"
                                onClick={() => trackEvent("pricing_view", { location: "pricing_preview_footer" })}
                                className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-full text-xs shadow-sm transition-all"
                            >
                                View Pricing
                            </Link>
                            <Link 
                                href="/demo"
                                onClick={() => trackEvent("book_demo_click", { location: "pricing_preview_footer" })}
                                className="px-6 py-2.5 border border-slate-850 bg-slate-950/40 text-slate-300 font-bold rounded-full text-xs transition-all"
                            >
                                Book Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Testimonials or Outcomes Section */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 text-center">
                    <div className="max-w-xl mx-auto mb-14 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-white">
                            Built to Help Businesses Grow Reputation and Revenue
                        </h2>
                        <p className="text-slate-400 text-sm">Outcomes validated across hundreds of digital marketing campaigns.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto text-left">
                        {[
                            { stat: "+140%", title: "More review requests sent", desc: "Automating dispatches dramatically scales collection touchpoints." },
                            { stat: "45%", title: "Higher response rate", desc: "SMS and email optimization triggers capture immediate feedback." },
                            { stat: "Top 3", title: "Better review visibility", desc: "Consistently generating stars drives top placement in local map packs." },
                            { stat: "Instant", title: "Faster follow-up process", desc: "Campaign schedules handle triggers without staff manual work." },
                            { stat: "18h", title: "Less manual work", desc: "Average monthly admin time saved per local business location." }
                        ].map((outcome, idx) => (
                            <div key={idx} className="glass-card border border-white/5 rounded-xl p-5 hover:border-violet-500/30 transition-all text-slate-300 flex flex-col justify-between">
                                <span className="text-2xl font-black text-violet-400 font-mono block mb-2">{outcome.stat}</span>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-bold text-white leading-tight">{outcome.title}</h4>
                                    <p className="text-[10px] text-slate-500 leading-normal">{outcome.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. FAQ Section */}
            <section className="py-20 border-t border-slate-900 bg-slate-950/20 relative z-10">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-black text-white">FAQ</h2>
                        <p className="text-slate-400 text-sm">Answers to commonly asked questions about ReviewManagement.</p>
                    </div>

                    <div className="max-w-2xl mx-auto space-y-3">
                        {[
                            { q: "How does ReviewManagement work?", a: "ReviewManagement automatically schedules SMS and email review request triggers after client checkout, filtering feedback and guiding clients directly to Google/Yelp star pages." },
                            { q: "Can I send review requests by SMS?", a: "Yes! The Growth and Agency plans fully support automated SMS text campaigns using high-deliverability gateways." },
                            { q: "Can agencies manage multiple clients?", a: "Yes! Our Agency tier supports up to 10 clients (and scale beyond that as needed) under a centralized manager portal. You can view client directories, coordinate bulk campaigns, and schedule automated PDF reports." },
                            { q: "Do I need technical knowledge?", a: "No. Our wizard walks you through GMB API authentication in 3 clicks. No code or API config required." },
                            { q: "Can I use this for multiple locations?", a: "Yes. Our Growth tier supports up to 3 locations and the Agency tier supports up to 10 location client profiles. Custom options are available for larger chains." },
                            { q: "Is there a free trial?", a: "Yes. Every plan features a 14-day free trial period with full feature sets available immediately." },
                            { q: "How fast can I get started?", a: "Most local merchants connect their listings and trigger their first customer campaign in under 15 minutes." }
                        ].map((faq, idx) => (
                            <div key={idx} className="rounded-xl border border-white/5 bg-slate-950/40 overflow-hidden transition-all text-slate-300 hover:bg-white/5">
                                <button
                                    onClick={() => {
                                        toggleFaq(idx);
                                        trackEvent("feature_click", { location: "faq_section", target: `faq_${idx}` });
                                    }}
                                    className="w-full px-5 py-4.5 flex items-center justify-between text-left font-bold text-xs text-white transition-colors border-none bg-transparent cursor-pointer"
                                >
                                    <span>{faq.q}</span>
                                    <ChevronDown className={`w-4.5 h-4.5 text-slate-500 transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} />
                                </button>
                                {activeFaq === idx && (
                                    <p className="px-5 pb-5 pt-2 text-slate-400 text-[11px] leading-relaxed border-t border-white/5 bg-slate-950/20 font-sans">
                                        {faq.a}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 11. Final CTA Section */}
            <section className="py-20 bg-[#080B14] border-t border-slate-950 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-600 rounded-full blur-[100px] opacity-10 pointer-events-none" />
                
                <div className="container mx-auto px-6 lg:px-8 max-w-2xl relative z-10 space-y-6">
                    <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
                        Ready to Turn Happy Customers Into More Reviews?
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
                        Book a demo and see how ReviewManagement can help your business build trust, improve reputation, and grow faster.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                        <Link 
                            href="/demo"
                            onClick={() => trackEvent("book_demo_click", { location: "final_cta" })}
                            className="btn-primary px-8 py-3.5 rounded-full text-white font-bold text-sm shadow-md transition-all text-center"
                        >
                            Book a Demo
                        </Link>
                        <Link 
                            href="/pricing"
                            onClick={() => trackEvent("pricing_view", { location: "final_cta" })}
                            className="px-8 py-3.5 rounded-full border border-slate-800 bg-slate-950/40 text-slate-300 font-bold text-sm hover:border-violet-500/40 hover:bg-violet-950/10 transition-all text-center"
                        >
                            View Pricing
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
