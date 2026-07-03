"use client";

import Link from "next/link";
import { Star, CheckCircle, Users, Layers, Building, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function SolutionsPage() {
    const solutions = [
        {
            title: "Small Businesses",
            description: "For local merchants, clinics, and service providers that need to build trust and increase Google review rankings.",
            icon: Users,
            features: [
                "Connect Google Business Profile in 3 clicks",
                "Automated post-purchase email & SMS requests",
                "Review monitoring and response feed",
                "Basic metrics and ratings tracking"
            ],
            cta: "Get Started Now",
            href: "/register"
        },
        {
            title: "Multi-Location Businesses",
            description: "For regional franchises, retail chains, and dental/medical offices managing trust across multiple storefronts.",
            icon: Layers,
            features: [
                "Centralized multi-location dashboard view",
                "Location-based contact grouping",
                "Franchise rating comparison reports",
                "Custom API integrations and automations"
            ],
            cta: "Request Demo",
            href: "/demo"
        },
        {
            title: "Marketing Agencies",
            description: "For agencies managing reputation campaigns, review generation, and client reporting under one portal.",
            icon: Building,
            features: [
                "Up to 10 client profiles included",
                "Multi-client aggregate reporting",
                "White-label options and automated reports",
                "Agency dashboard client switcher"
            ],
            cta: "View Agency Plans",
            href: "/agencies"
        }
    ];

    return (
        <div className="bg-[#080B14] min-h-screen text-slate-350 relative overflow-hidden noise-overlay pb-20">
            <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />

            {/* Header */}
            <div className="bg-slate-950/20 py-16 text-center border-b border-slate-900 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300 backdrop-blur-md">
                        <Star className="w-3.5 h-3.5 fill-violet-400 text-violet-400" /> Tailored Solutions
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Built for Businesses of All Scales
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Explore customized reputation growth strategies designed to match your operational workflows.
                    </p>
                </div>
            </div>

            {/* Cards Grid */}
            <section className="container mx-auto px-6 lg:px-8 py-20 max-w-5xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {solutions.map((sol, index) => {
                        const Icon = sol.icon;
                        return (
                            <div 
                                key={index} 
                                className="glass-card border border-white/5 rounded-2xl p-6 flex flex-col justify-between gap-4 text-slate-350 hover:border-violet-500/30 transition-all"
                            >
                                <div className="space-y-4">
                                    <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 mb-2">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-white">{sol.title}</h3>
                                    <p className="text-slate-400 text-xs leading-normal">{sol.description}</p>
                                    
                                    <ul className="space-y-2 border-t border-slate-900 pt-4 text-xs text-slate-400">
                                        {sol.features.map((f, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle className="w-4.5 h-4.5 text-violet-400 shrink-0 mt-0.5" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-6">
                                    <Link 
                                        href={sol.href}
                                        onClick={() => trackEvent("feature_click", { location: "solutions_page", target: sol.title.toLowerCase() })}
                                        className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-violet-400 font-bold text-xs text-center block transition-all inline-flex items-center justify-center gap-1 group border border-white/5 cursor-pointer"
                                    >
                                        {sol.cta}
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
