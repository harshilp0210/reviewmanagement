"use client";

import Link from "next/link";
import { Star, ShieldCheck, Lock, Eye, Key } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function SecurityPage() {
    const securityMeasures = [
        {
            title: "Data Encryption",
            desc: "All database tables, contact lists, and reviews data are encrypted in transit (TLS 1.3) and at rest (AES-256).",
            icon: Lock
        },
        {
            title: "Secure API Access",
            desc: "Listing credentials sync securely via Google GMB OAuth 2.0 protocols. We never view or store passwords.",
            icon: Key
        },
        {
            title: "Privacy Controls",
            desc: "We strictly adhere to GDPR, CCPA, and data privacy regulations. Customer contact lists are never sold or shared.",
            icon: Eye
        },
        {
            title: "Access Monitoring",
            desc: "System audits and vulnerability assessments are performed regularly to ensure zero platform leaks.",
            icon: ShieldCheck
        }
    ];

    return (
        <div className="bg-[#080B14] min-h-screen text-slate-350 relative overflow-hidden noise-overlay pb-20">
            <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />

            {/* Header */}
            <div className="bg-slate-950/20 py-16 text-center border-b border-slate-900 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300 backdrop-blur-md">
                        <Star className="w-3.5 h-3.5 fill-violet-400 text-violet-400" /> Platform Security
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Security & Trust Guidelines
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Learn how ReviewManagement encrypts database records, secures Google listings, and protects customer privacy.
                    </p>
                </div>
            </div>

            {/* Measures */}
            <section className="container mx-auto px-6 lg:px-8 py-20 max-w-4xl relative z-10 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {securityMeasures.map((measure, index) => {
                        const Icon = measure.icon;
                        return (
                            <div key={index} className="p-6 rounded-2xl glass-card border border-white/5 shadow-sm space-y-3 text-slate-300">
                                <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 mb-2">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-bold text-white">{measure.title}</h3>
                                <p className="text-slate-400 text-xs leading-relaxed">{measure.desc}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="p-8 rounded-2xl bg-violet-950/30 border border-violet-500/10 text-center space-y-4 max-w-2xl mx-auto backdrop-blur-md">
                    <h3 className="text-xs font-bold text-white">Have specific compliance questions?</h3>
                    <p className="text-[11px] text-slate-400 leading-normal">
                        If your organization requires custom SOC2 verification, HIPAA compliance details, or data protection agreements, please reach out to <a href="mailto:Openrize@gmail.com" className="text-violet-400 hover:underline">Openrize@gmail.com</a>.
                    </p>
                </div>
            </section>
        </div>
    );
}
