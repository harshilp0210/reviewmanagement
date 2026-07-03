"use client";

import Link from "next/link";
import { Mail, Phone, Sparkles, Users, LayoutGrid, FileText, Building, Clock, ArrowRight, Star } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function FeaturesPage() {
    const features = [
        {
            title: "Email Review Requests",
            description: "Reach customers in their inbox with high-conversion templates and automated follow-up scheduling.",
            icon: Mail
        },
        {
            title: "SMS Review Requests",
            description: "Deliver request text campaigns directly to mobile devices for immediate feedback generation.",
            icon: Phone
        },
        {
            title: "Campaign Builder",
            description: "Build custom sequences, style layouts to match your brand, and configure automated dispatch triggers.",
            icon: Sparkles
        },
        {
            title: "Customer Management",
            description: "Organize client directories, partition contacts into target groups, and track review histories.",
            icon: Users
        },
        {
            title: "Review Dashboard",
            description: "Monitor and respond to Google, Facebook, Yelp, and other listing reviews from one unified feed.",
            icon: LayoutGrid
        },
        {
            title: "Reporting & Analytics",
            description: "Analyze star rating trends, check conversion rates, and export automated reports.",
            icon: FileText
        },
        {
            title: "Agency Multi-Client View",
            description: "Separate client profiles and manage campaign permissions across multiple business locations.",
            icon: Building
        },
        {
            title: "Automated Follow-Ups",
            description: "Set up smart timers to resend request reminders to non-responders automatically, increasing volume.",
            icon: Clock
        }
    ];

    return (
        <div className="bg-[#080B14] min-h-screen text-slate-300 relative overflow-hidden noise-overlay">
            <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />

            {/* Header */}
            <div className="bg-slate-950/20 py-16 text-center border-b border-slate-900 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300 backdrop-blur-md">
                        <Star className="w-3.5 h-3.5 fill-violet-400 text-violet-400" /> Platform Features
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Everything You Need to Grow Online Trust
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Explore our robust features designed to help local businesses and agencies automate review collection and improve conversions.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <section className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div 
                                key={index} 
                                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-violet-500/30 transition-all text-slate-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-10 h-10 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-400 mb-4">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-sm font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{feature.description}</p>
                                </div>
                                <Link 
                                    href="/demo" 
                                    onClick={() => trackEvent("feature_click", { location: "features_page", feature: feature.title.toLowerCase() })}
                                    className="text-xs font-bold text-violet-400 hover:text-violet-300 inline-flex items-center gap-1 group mt-2"
                                >
                                    Get started
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {/* Final Call to Action */}
                <div className="mt-20 text-center space-y-6 bg-slate-950/40 rounded-3xl p-10 border border-white/5 max-w-4xl mx-auto shadow-sm backdrop-blur-md">
                    <h2 className="text-2xl font-black text-white">Ready to automate your reputation growth?</h2>
                    <p className="text-slate-400 text-xs max-w-xl mx-auto leading-relaxed">
                        Start your 14-day free trial on any tier and see how ReviewManagement helps build long-term business trust.
                    </p>
                    <div className="flex justify-center gap-3">
                        <Link 
                            href="/register" 
                            onClick={() => trackEvent("signup_click", { location: "features_footer" })}
                            className="btn-primary px-6 py-2.5 rounded-full text-white font-bold text-xs"
                        >
                            Start Free Trial
                        </Link>
                        <Link 
                            href="/demo" 
                            onClick={() => trackEvent("book_demo_click", { location: "features_footer" })}
                            className="px-6 py-2.5 border border-slate-800 bg-slate-950/40 text-slate-300 font-semibold rounded-full text-xs hover:border-violet-500/40 hover:bg-violet-950/10 transition-all"
                        >
                            Book Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
