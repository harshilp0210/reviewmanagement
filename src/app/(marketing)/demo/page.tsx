import { Metadata } from "next";
import { DemoForm } from "@/components/forms/DemoForm";
import { Check, Star } from "lucide-react";

export const metadata: Metadata = {
    title: "Request a Free Demo | ReviewManagement",
    description: "See how ReviewManagement software helps businesses automate review requests, manage feedback, and scale their online reputation.",
};

export default function DemoPage() {
    const benefits = [
        "Personalized platform walk-through",
        "Expert advice on scaling review campaigns",
        "Pricing setups tailored to your volume",
        "Free reputation assessment report",
        "No credit card or contract required"
    ];

    return (
        <div className="bg-[#080B14] min-h-screen text-slate-300 relative overflow-hidden noise-overlay pb-20">
            <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />

            {/* Header */}
            <div className="bg-slate-950/20 py-16 text-center border-b border-slate-900 relative z-10">
                <div className="container mx-auto px-6 lg:px-8 max-w-2xl space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-300 backdrop-blur-md">
                        <Star className="w-3.5 h-3.5 fill-violet-400 text-violet-400" /> Book a Demo
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        See ReviewManagement in Action
                    </h1>
                    <p className="text-slate-455 text-sm leading-relaxed">
                        Request a free platform demo and learn how our reputation growth tool helps local businesses, chains, and agencies automate trust.
                    </p>
                </div>
            </div>

            <section className="container mx-auto px-6 lg:px-8 py-20 max-w-5xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Column - Benefits */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-4 text-left">
                            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                                Ready to scale your customer reviews?
                            </h2>
                            <p className="text-xs text-slate-400 leading-relaxed font-sans">
                                Select a mock calendar slot to connect with our onboarding representatives and explore features live.
                            </p>
                        </div>

                        <div className="space-y-4 text-left">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">What you will get:</h3>
                            <ul className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-3 p-4 rounded-xl bg-slate-950/40 border border-white/5 shadow-sm">
                                        <div className="w-6 h-6 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
                                            <Check className="h-3.5 w-3.5" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Demo Form Container */}
                    <div className="lg:w-1/2 w-full">
                        <div className="p-6 border border-white/10 rounded-2xl bg-slate-950/80 shadow-2xl relative overflow-hidden sticky top-24">
                            <DemoForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
