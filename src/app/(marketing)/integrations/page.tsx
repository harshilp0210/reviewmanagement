"use client";

import Link from "next/link";
import { Star, CheckCircle, ArrowRight, ShieldAlert } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function IntegrationsPage() {
    const integrations = [
        {
            name: "Google Business Profile",
            type: "Listing Feed",
            desc: "Authenticate via Google API to sync reviews, ratings, and automate request completions.",
            status: "Native Integration"
        },
        {
            name: "SMS Gateways",
            type: "Communications",
            desc: "Send high-deliverability review request text campaigns directly to mobile devices.",
            status: "Native Integration"
        },
        {
            name: "Zapier & Webhooks",
            type: "Automation",
            desc: "Connect over 5,000+ apps to trigger review requests automatically after check-outs.",
            status: "API Support"
        },
        {
            name: "HubSpot CRM",
            type: "CRM Sync",
            desc: "Automatically sync contact lists, review status indicators, and customer profiles.",
            status: "Zapier Sync"
        },
        {
            name: "Salesforce",
            type: "Enterprise CRM",
            desc: "Import client directories and trigger review sequences on transaction closing events.",
            status: "API Support"
        },
        {
            name: "Stripe Billing",
            type: "Payments",
            desc: "Trigger review requests when invoices are paid or transactions are finalized.",
            status: "Webhook Trigger"
        }
    ];

    return (
        <div className="bg-[#080B14] min-h-screen text-slate-350 relative overflow-hidden noise-overlay pb-20">
            <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />

            {/* Header */}
            <div className="bg-slate-950/20 py-16 text-center border-b border-slate-900 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300 backdrop-blur-md">
                        <Star className="w-3.5 h-3.5 fill-violet-400 text-violet-400" /> API Connections
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Integrate Your Whole Workflow
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Connect ReviewManagement directly with your payment platforms, CRMs, and communication gateways to automate campaign triggers.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <section className="container mx-auto px-6 lg:px-8 py-20 max-w-5xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {integrations.map((int, index) => (
                        <div key={index} className="p-6 rounded-2xl glass-card border border-white/5 shadow-sm flex flex-col justify-between hover:border-violet-500/30 transition-all text-slate-300">
                            <div className="space-y-3 text-left">
                                <div className="flex justify-between items-center">
                                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{int.type}</span>
                                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">{int.status}</span>
                                </div>
                                <h3 className="text-sm font-bold text-white">{int.name}</h3>
                                <p className="text-slate-400 text-xs leading-normal">{int.desc}</p>
                            </div>
                            <div className="pt-4 border-t border-white/5 mt-4">
                                <Link 
                                    href="/demo"
                                    onClick={() => trackEvent("feature_click", { location: "integrations_page", target: int.name.toLowerCase() })}
                                    className="text-xs font-bold text-violet-400 hover:text-violet-300 inline-flex items-center gap-1 group"
                                >
                                    Configure setup
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-slate-950/40 border border-white/5 rounded-2xl p-6 max-w-xl mx-auto space-y-2 backdrop-blur-md">
                    <p className="text-xs font-bold text-white inline-flex items-center gap-1"><ShieldAlert className="w-4 h-4 text-violet-400" /> Need a custom API integration?</p>
                    <p className="text-[11px] text-slate-400 leading-normal">
                        Our developers can build bespoke connections for franchise CRMs and proprietary databases. <Link href="/demo" className="text-violet-400 font-semibold hover:underline">Talk to sales</Link>.
                    </p>
                </div>
            </section>
        </div>
    );
}
