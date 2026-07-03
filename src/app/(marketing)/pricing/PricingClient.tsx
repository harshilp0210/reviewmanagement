"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function PricingClient() {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("yearly");

    const plans = [
        {
            name: "Starter",
            description: "For small businesses looking to build initial trust.",
            monthlyPrice: 49,
            yearlyPrice: 40,
            features: [
                "1 Business Location",
                "250 Review Requests/Month",
                "Email Campaigns",
                "Review Monitoring Feed",
                "Standard Web Support"
            ],
            cta: "Start Free Trial",
            popular: false
        },
        {
            name: "Growth",
            description: "For active local service and healthcare brands.",
            monthlyPrice: 99,
            yearlyPrice: 82,
            features: [
                "3 Business Locations",
                "1,000 Review Requests/Month",
                "Email & SMS Campaigns",
                "Campaign Automation Sequences",
                "Advanced PDF Reporting",
                "Priority Email & Chat Support"
            ],
            cta: "Start Free Trial",
            popular: true
        },
        {
            name: "Agency",
            description: "For agencies and multi-location companies.",
            monthlyPrice: 299,
            yearlyPrice: 249,
            features: [
                "Up to 10 Client Accounts",
                "Multi-Client Agency Dashboard",
                "Automated Reporting Schedules",
                "Review Verification Badges",
                "Priority Phone & Chat Support"
            ],
            cta: "Start Free Trial",
            popular: false
        },
        {
            name: "Enterprise",
            description: "Custom solutions for large franchise chains.",
            monthlyPrice: "Custom",
            yearlyPrice: "Custom",
            features: [
                "Unlimited Locations",
                "Custom API Integrations",
                "Dedicated Account Success Manager",
                "Custom SLA & Contracts",
                "Executive Dashboard Views"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <div className="bg-[#080B14] min-h-screen text-slate-300 relative overflow-hidden noise-overlay pb-20">
            <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />

            {/* Header */}
            <div className="bg-slate-950/20 py-16 text-center border-b border-slate-900 relative z-10 animate-fade-in">
                <div className="container mx-auto px-6 lg:px-8 max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300 backdrop-blur-md">
                        <Star className="w-3.5 h-3.5 fill-violet-400 text-violet-400" /> Platform Pricing
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Simple, Transparent Pricing Plans
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Pick the plan that fits your business needs. 14-day free trial on all plans. Switch or cancel anytime.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-3 pt-6">
                        <span className={`text-xs font-semibold ${billingPeriod === "monthly" ? "text-white" : "text-slate-500"}`}>Monthly billing</span>
                        <button 
                            onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
                            className="w-10 h-5.5 rounded-full bg-slate-850 p-0.5 relative flex items-center focus:outline-none transition-colors border-none cursor-pointer"
                        >
                            <div className={`w-4.5 h-4.5 rounded-full bg-violet-500 transition-all ${billingPeriod === "yearly" ? "translate-x-4.5" : "translate-x-0"}`} />
                        </button>
                        <span className={`text-xs font-semibold flex items-center gap-1 ${billingPeriod === "yearly" ? "text-white" : "text-slate-500"}`}>
                            Annual billing <span className="text-[9px] font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded-full">Save 20%</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Pricing Cards Grid */}
            <section className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
                    {plans.map((plan) => {
                        const price = billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
                        return (
                            <div 
                                key={plan.name}
                                className={`p-6 rounded-2xl flex flex-col justify-between relative transition-all ${
                                    plan.popular 
                                        ? "bg-slate-950/90 border-violet-500 shadow-xl shadow-violet-500/10 ring-1 ring-violet-500" 
                                        : "glass-card border-white/5 text-slate-300"
                                }`}
                            >
                                {plan.popular && (
                                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-600 text-white shadow-lg">
                                        Most Popular
                                    </span>
                                )}

                                <div>
                                    <h3 className="text-base font-bold text-white">{plan.name}</h3>
                                    <p className="text-slate-455 text-xs mt-1 min-h-12 leading-normal">{plan.description}</p>
                                    
                                    <div className="my-6">
                                        {typeof price === "number" ? (
                                            <>
                                                <span className="text-3xl font-black text-white font-mono">${price}</span>
                                                <span className="text-slate-500 text-sm">/mo</span>
                                                <p className="text-[9px] text-slate-500 mt-1 font-mono">
                                                    {billingPeriod === "yearly" ? `Billed annually ($${price * 12}/yr)` : "Billed monthly"}
                                                </p>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-3xl font-black text-white">Custom</span>
                                                <p className="text-[9px] text-slate-500 mt-1">
                                                    Tailored for enterprise scale
                                                </p>
                                            </>
                                        )}
                                    </div>

                                    <ul className="space-y-3.5 border-t border-slate-900 pt-6 text-xs text-slate-400">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2">
                                                <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-8">
                                    <Link 
                                        href={plan.name === "Enterprise" ? "/demo" : "/register"}
                                        onClick={() => {
                                            if (plan.name === "Enterprise") trackEvent("book_demo_click", { location: "pricing_page_enterprise" });
                                            else trackEvent("signup_click", { plan: plan.name, location: "pricing_page" });
                                        }}
                                        className={`w-full py-2.5 rounded-full font-bold text-xs text-center block transition-all border-none cursor-pointer ${
                                            plan.popular
                                                ? "bg-violet-600 hover:bg-violet-500 text-white"
                                                : "bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/5"
                                        }`}
                                    >
                                        {plan.cta}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center bg-slate-950/40 border border-white/5 rounded-2xl p-6 max-w-xl mx-auto space-y-2 backdrop-blur-md">
                    <p className="text-xs text-slate-300 font-bold">Custom plans available for multi-location businesses.</p>
                    <p className="text-[11px] text-slate-400 leading-normal">
                        Do you manage a franchise or multiple chains? We offer volume discounts and custom APIs. <Link href="/demo" className="text-violet-400 font-semibold hover:underline">Contact sales</Link>.
                    </p>
                </div>
            </section>
        </div>
    );
}
