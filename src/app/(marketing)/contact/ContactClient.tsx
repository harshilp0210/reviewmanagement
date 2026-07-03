"use client";

import { useState } from "react";
import { Mail, Globe, Linkedin, Star, ArrowRight, Check } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ContactClient() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        trackEvent("contact_form_submit", { name, email });
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
    };

    const contactCards = [
        {
            icon: Mail,
            title: "Schedule a Demo",
            desc: "Book a live platform walk-through session.",
            href: "/demo",
            display: "Schedule Now",
        },
        {
            icon: Globe,
            title: "Request Pricing",
            desc: "Request quotes for custom volumes and setups.",
            href: "/pricing",
            display: "View Pricing Plans",
        },
        {
            icon: Linkedin,
            title: "Talk to Our Team",
            desc: "Connect directly with our support and sales engineers.",
            href: "mailto:Openrize@gmail.com",
            display: "Openrize@gmail.com",
        }
    ];

    return (
        <div className="bg-[#080B14] min-h-screen text-slate-300 relative overflow-hidden noise-overlay pb-20">
            <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />

            {/* Header */}
            <div className="bg-slate-950/20 py-16 text-center border-b border-slate-900 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300 backdrop-blur-md">
                        <Star className="w-3.5 h-3.5 fill-violet-400 text-violet-400" /> Contact Us
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Get in Touch With Us
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Have questions about campaigns, billing, or integrations? We're here to help. Reach out to our team anytime.
                    </p>
                </div>
            </div>

            <section className="container mx-auto px-6 lg:px-8 py-20 max-w-5xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column - Contact Cards */}
                    <div className="lg:col-span-5 space-y-6">
                        {contactCards.map((card, idx) => {
                            const Icon = card.icon;
                            return (
                                <a
                                    key={idx}
                                    href={card.href}
                                    onClick={() => trackEvent("feature_click", { location: "contact_page_card", target: card.title.toLowerCase() })}
                                    className="p-5 rounded-2xl border border-white/5 bg-slate-950/40 hover:bg-slate-950/60 hover:border-violet-500/30 shadow-sm block transition-all"
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-xs font-bold text-white">{card.title}</h3>
                                            <p className="text-[11px] text-slate-400 leading-normal">{card.desc}</p>
                                            <span className="text-[10px] text-violet-400 font-bold block pt-1.5 hover:underline flex items-center gap-0.5">
                                                {card.display} <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-7 glass-card border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden bg-slate-950/80">
                        <div className="border-b border-white/5 pb-3 mb-6">
                            <h3 className="text-sm font-bold text-white">Send an Inquiry Message</h3>
                            <p className="text-[11px] text-slate-400 mt-0.5">Fill out your contact details and message, we will reply within 24 hours.</p>
                        </div>

                        {submitted ? (
                            <div className="py-12 text-center space-y-3.5 animate-fade-in">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto animate-pulse">
                                    <Check className="w-6 h-6" />
                                </div>
                                <h4 className="text-sm font-bold text-white">Message Submitted Successfully!</h4>
                                <p className="text-[11px] text-slate-400 max-w-sm mx-auto leading-relaxed">
                                    Thank you for reaching out. A sales engineer or support representative will email you shortly.
                                </p>
                                <button 
                                    onClick={() => setSubmitted(false)}
                                    className="px-5 py-2 rounded-full bg-slate-900 border border-white/10 hover:border-violet-500/30 text-xs font-bold text-slate-300 transition-all cursor-pointer"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="e.g. Chef Marco"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@company.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Message Description</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="How can we help your business build trust?"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full py-2.5 rounded-xl text-white font-bold text-xs shadow-sm transition-all border-none cursor-pointer"
                                >
                                    Submit Contact Request
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
