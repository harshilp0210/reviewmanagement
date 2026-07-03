"use client";

import { useState } from "react";
import { Star, ChevronDown, HelpCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function FAQPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "How does ReviewManagement work?",
            a: "ReviewManagement connects directly to your Google Business Profile, Facebook, Yelp, and other listing APIs. When you checkout a customer, our platform automatically dispatches review requests via optimized email or SMS sequences to collect their feedback and direct them to share 5-star ratings publicly."
        },
        {
            q: "Can I send review requests by SMS?",
            a: "Yes. SMS requests are included in our Growth and Agency plans, which utilize high-deliverability mobile text gateways to capture ratings. Studies show SMS has up to a 45% customer response rate."
        },
        {
            q: "Can agencies manage multiple clients?",
            a: "Absolutely. Our Agency tier supports up to 10 clients (and scale beyond that as needed) under a centralized manager portal. You can view client directories, coordinate bulk campaigns, and schedule automated PDF reports."
        },
        {
            q: "Do I need technical knowledge?",
            a: "None at all. Setting up ReviewManagement takes under 15 minutes. Our onboarding wizard authenticates your Google listing in a few clicks, and our pre-designed templates are ready to go immediately."
        },
        {
            q: "Can I use this for multiple locations?",
            a: "Yes. The Growth tier supports up to 3 business locations, while the Agency tier handles up to 10 location client profiles. Contact us for custom enterprise options for chains with dozens of addresses."
        },
        {
            q: "Is there a free trial?",
            a: "Yes. Every plan includes a 14-day free trial. There is no credit card required to start, and you can switch plans or cancel your profile at any time."
        },
        {
            q: "How fast can I get started?",
            a: "In less than 15 minutes. Register your account, link your local Google Listing, import customer contact lists, and dispatch your first review request campaign today."
        }
    ];

    return (
        <div className="bg-[#080B14] min-h-screen text-slate-350 relative overflow-hidden noise-overlay pb-20">
            <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />

            {/* Header */}
            <div className="bg-slate-950/20 py-16 text-center border-b border-slate-900 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300 backdrop-blur-md">
                        <Star className="w-3.5 h-3.5 fill-violet-400 text-violet-400" /> Support Hub
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Have questions about campaigns, features, pricing, or locations? Browse our answers below or email us.
                    </p>
                </div>
            </div>

            {/* Accordions */}
            <section className="container mx-auto px-6 lg:px-8 py-20 max-w-2xl relative z-10">
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="rounded-xl border border-white/5 bg-slate-950/40 overflow-hidden transition-all text-slate-300 hover:bg-white/5">
                            <button
                                onClick={() => {
                                    toggleFaq(idx);
                                    trackEvent("feature_click", { location: "faq_page", target: `faq_${idx}` });
                                }}
                                className="w-full px-5 py-4.5 flex items-center justify-between text-left font-bold text-xs text-white transition-colors border-none bg-transparent cursor-pointer"
                            >
                                <span className="flex items-center gap-2">
                                    <HelpCircle className="w-4.5 h-4.5 text-violet-400 shrink-0" />
                                    {faq.q}
                                </span>
                                <ChevronDown className={`w-4.5 h-4.5 text-slate-505 transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} />
                            </button>
                            {activeFaq === idx && (
                                <p className="px-5 pb-5 pt-2 text-slate-400 text-[11px] leading-relaxed border-t border-white/5 bg-slate-950/20 font-sans">
                                    {faq.a}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center space-y-3 bg-violet-950/30 border border-violet-500/10 p-6 rounded-2xl">
                    <h3 className="text-xs font-bold text-white">Still have unanswered questions?</h3>
                    <p className="text-[11px] text-slate-400 leading-normal">
                        Reach out directly to our support engineers at <a href="mailto:Openrize@gmail.com" className="text-violet-400 hover:underline font-semibold">Openrize@gmail.com</a>. We will reply within 24 hours.
                    </p>
                </div>
            </section>
        </div>
    );
}
