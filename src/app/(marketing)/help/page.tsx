"use client";

import Link from "next/link";
import { Star, Search, BookOpen, Settings, Key, Shield } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function HelpPage() {
    const categories = [
        {
            title: "Getting Started",
            desc: "Learn how to connect Google Business Profile and dispatch campaigns in under 15 minutes.",
            icon: BookOpen,
            articles: ["GMB Connection Guide", "Adding Your First Location", "Setting Up Billing"]
        },
        {
            title: "Campaign Management",
            desc: "Understand email/SMS campaign timings, follow-up settings, and custom branding templates.",
            icon: Settings,
            articles: ["Creating Custom Sequences", "SMS Gateway Deliverability", "Private Feedback Ingestion"]
        },
        {
            title: "Integrations & APIs",
            desc: "Configure automated triggers using Zapier, CRM integrations, and developer API keys.",
            icon: Key,
            articles: ["Zapier Trigger Setup", "Developer API Documentation", "Webhook Integrations"]
        },
        {
            title: "Account & Security",
            desc: "Manage team member permissions, location groups, and security certificates.",
            icon: Shield,
            articles: ["Inviting Staff Members", "Resetting Credentials", "Data Protection & Compliance"]
        }
    ];

    return (
        <div className="bg-[#080B14] min-h-screen text-slate-350 relative overflow-hidden noise-overlay pb-20">
            <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />

            {/* Header */}
            <div className="bg-slate-950/20 py-16 text-center border-b border-slate-900 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300 backdrop-blur-md">
                        <Star className="w-3.5 h-3.5 fill-violet-400 text-violet-400" /> Help Center
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        How can we help you?
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        Search documentation or explore categories to master your reputation growth dashboard.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative">
                        <Search className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
                        <input 
                            type="text"
                            placeholder="Search articles, guides, and tutorials..."
                            className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-violet-500/50 shadow-sm transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Categories */}
            <section className="container mx-auto px-6 lg:px-8 py-20 max-w-5xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        return (
                            <div key={index} className="p-6 rounded-2xl glass-card border border-white/5 shadow-sm space-y-4 text-slate-350">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 shrink-0">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-bold text-white">{cat.title}</h3>
                                        <p className="text-slate-400 text-xs leading-normal">{cat.desc}</p>
                                    </div>
                                </div>

                                <div className="border-t border-white/5 pt-4 space-y-2">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Popular Articles</span>
                                    <ul className="space-y-1.5 text-xs text-violet-400 font-semibold">
                                        {cat.articles.map((art, idx) => (
                                            <li key={idx}>
                                                <Link 
                                                    href="/help"
                                                    onClick={() => trackEvent("feature_click", { location: "help_page_article", target: art.toLowerCase() })}
                                                    className="hover:underline flex items-center gap-1"
                                                >
                                                    {art}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
