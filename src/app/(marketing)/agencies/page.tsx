"use client";

import Link from "next/link";
import { Star, CheckCircle, Percent, Settings, ArrowRight, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function AgenciesPage() {
    const incentives = [
        {
            title: "20% Recurring Commission",
            desc: "Earn 20% recurring commission on all referred business during their first year of activation.",
            icon: Percent
        },
        {
            title: "10% Lifetime Commission",
            desc: "Receive 10% lifetime recurring commission starting from year two onwards for active clients.",
            icon: Percent
        },
        {
            title: "Reseller Wholesale Pricing",
            desc: "Access wholesale volume-based pricing discounts and apply your own agency markups directly.",
            icon: Settings
        },
        {
            title: "Partner Success Enablement",
            desc: "Get dedicated partner training resources, sales playbooks, and client collateral packages.",
            icon: ShieldCheck
        }
    ];

    const onboardingSteps = [
        { step: "1", title: "Apply for Program", desc: "Submit the quick partner application form online." },
        { step: "2", title: "Qualification Review", desc: "Our team reviews your agency credentials and volume expectations." },
        { step: "3", title: "Portal Acceptance", desc: "Get access to your wholesale pricing and dashboard credentials." },
        { step: "4", title: "Enablement & Growth", desc: "Launch client review campaigns and track monthly commission revenue." }
    ];

    return (
        <div className="bg-[#080B14] min-h-screen text-slate-350 relative overflow-hidden noise-overlay pb-20">
            <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />

            {/* Header */}
            <div className="bg-slate-950/20 py-16 text-center border-b border-slate-900 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300 backdrop-blur-md">
                        <Star className="w-3.5 h-3.5 fill-violet-400 text-violet-400" /> Agency Program
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Agency Partner Program
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Scale your agency's recurring SaaS revenue by offering high-delivery reputation growth tools to your local and multi-location client networks.
                    </p>
                </div>
            </div>

            {/* Incentives Grid */}
            <section className="container mx-auto px-6 lg:px-8 py-20 max-w-5xl relative z-10">
                <div className="text-center mb-12 space-y-2">
                    <h2 className="text-xl sm:text-2xl font-black text-white">Partner Program Benefits & Commissions</h2>
                    <p className="text-slate-500 text-xs">Drive profitable expansion outcomes using our reseller commission tiers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {incentives.map((inc, index) => {
                        const Icon = inc.icon;
                        return (
                            <div key={index} className="p-6 rounded-2xl glass-card border border-white/5 flex gap-4 items-start shadow-sm text-slate-300">
                                <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 shrink-0">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-bold text-white">{inc.title}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed">{inc.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Onboarding Steps */}
                <div className="text-center mb-12 space-y-2">
                    <h2 className="text-xl sm:text-2xl font-black text-white">How to Get Started</h2>
                    <p className="text-slate-500 text-xs">Four simple steps to activate your reseller dashboard.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                    {onboardingSteps.map((step, index) => (
                        <div key={index} className="p-5 glass-card border border-white/5 rounded-xl space-y-3 shadow-sm hover:border-violet-500/30 transition-all relative">
                            <span className="absolute -top-3.5 left-4 w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center font-mono font-bold text-xs shadow-sm">
                                {step.step}
                            </span>
                            <h4 className="text-xs font-bold text-white pt-2">{step.title}</h4>
                            <p className="text-[11px] text-slate-400 leading-normal">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action Card */}
                <div className="p-10 rounded-3xl bg-slate-950/40 border border-white/5 text-center space-y-6 backdrop-blur-md">
                    <h2 className="text-xl sm:text-2xl font-black text-white">Ready to expand client trust and agency MRR?</h2>
                    <p className="text-slate-400 text-xs max-w-lg mx-auto leading-relaxed">
                        Become a certified agency growth partner. Apply online and set up client reputation dashboards in minutes.
                    </p>
                    <div className="flex justify-center">
                        <Link 
                            href="/demo" 
                            onClick={() => trackEvent("book_demo_click", { location: "agency_partner_page" })}
                            className="btn-primary px-8 py-3 rounded-full text-white font-bold text-xs inline-flex items-center gap-1 group cursor-pointer border-none"
                        >
                            Apply for Partner Program
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
