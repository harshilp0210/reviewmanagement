"use client";

import Link from "next/link";
import { Linkedin, Instagram, Star } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Footer() {
    return (
        <footer className="relative bg-[#080B14] overflow-hidden pt-20 pb-12 border-t border-slate-950 text-slate-400">
            {/* Background divider */}
            <div className="section-divider absolute top-0 left-0 right-0" />

            {/* Decorative background orb */}
            <div
                className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
                style={{ background: "#3b82f6" }}
            />

            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 relative z-10">
                    <div className="lg:col-span-5 space-y-6">
                        {/* Logo */}
                        <Link 
                            href="/" 
                            className="flex items-center gap-2.5 group"
                            onClick={() => trackEvent("feature_click", { target: "footer_logo" })}
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center relative"
                                style={{
                                    background: "linear-gradient(135deg, #6366f1, #7c3aed)",
                                    boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
                                }}
                            >
                                <Star className="h-4 w-4 text-white fill-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">ReviewManagement</span>
                        </Link>

                        <p className="text-sm leading-relaxed max-w-sm text-slate-400 font-sans">
                            ReviewManagement is a reputation growth platform that helps businesses get more reviews, build trust, and turn happy customers into growth.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href="https://www.linkedin.com/in/openrize/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/5 border border-white/5 hover:border-violet-500/50 group"
                            >
                                <Linkedin className="h-5 w-5 text-slate-500 group-hover:text-white transition-colors" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/5 border border-white/5 hover:border-violet-500/50 group"
                            >
                                <Instagram className="h-5 w-5 text-slate-500 group-hover:text-white transition-colors" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-white mb-4 tracking-wide uppercase text-xs">Product Links</h4>
                            <ul className="space-y-3 text-sm">
                                {[
                                    { label: "Features", href: "/features" },
                                    { label: "Pricing", href: "/pricing" },
                                    { label: "Integrations", href: "/integrations" },
                                    { label: "Security", href: "/security" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link 
                                            href={item.href} 
                                            onClick={() => {
                                                if (item.label === "Pricing") trackEvent("pricing_view", { location: "footer" });
                                                else trackEvent("feature_click", { location: "footer", target: item.label.toLowerCase() });
                                            }}
                                            className="hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-4 tracking-wide uppercase text-xs">Solutions Links</h4>
                            <ul className="space-y-3 text-sm">
                                {[
                                    { label: "Small Businesses", href: "/solutions" },
                                    { label: "Multi-Location", href: "/solutions" },
                                    { label: "Agencies Partner", href: "/agencies" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link 
                                            href={item.href} 
                                            onClick={() => trackEvent("feature_click", { location: "footer", target: `solution_${item.label.toLowerCase()}` })}
                                            className="hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-4 tracking-wide uppercase text-xs">Company Links</h4>
                            <ul className="space-y-3 text-sm">
                                {[
                                    { label: "About Us", href: "/about" },
                                    { label: "Case Studies", href: "/case-studies" },
                                    { label: "Contact Us", href: "/contact" },
                                    { label: "FAQ Support", href: "/faq" },
                                    { label: "Help Center", href: "/help" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link 
                                            href={item.href} 
                                            onClick={() => trackEvent("feature_click", { location: "footer", target: item.label.toLowerCase() })}
                                            className="hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Newsletter & Contact Email */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-y border-white/5 gap-6 mb-8 text-sm relative z-10">
                    <div className="text-left space-y-1">
                        <h4 className="text-lg font-bold text-white">Need support or have questions?</h4>
                        <p className="text-slate-400 text-xs">
                            Contact our team at <a href="mailto:Openrize@gmail.com" className="text-violet-400 hover:text-violet-300 font-semibold">Openrize@gmail.com</a>
                        </p>
                    </div>
                    <div className="flex w-full md:w-auto gap-2">
                        <input
                            type="email"
                            placeholder="you@company.com"
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/50 transition-colors w-full md:w-60"
                        />
                        <button 
                            onClick={() => trackEvent("signup_click", { type: "newsletter_footer" })}
                            className="btn-primary text-xs font-bold px-5 py-2.5 rounded-xl text-white transition-all cursor-pointer border-none"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[10px] font-semibold uppercase tracking-wider relative z-10">
                    <p>&copy; {new Date().getFullYear()} ReviewManagement. All rights reserved. Powered by <a href="https://openrize.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Openrize</a>.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/trust-center" className="hover:text-white transition-colors">Trust Center</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
