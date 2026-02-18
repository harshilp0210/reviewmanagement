import { Metadata } from "next";
import { DemoForm } from "@/components/forms/DemoForm";
import { Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Request a Free Demo | ReviewManagement",
    description: "See how ReviewManagement software helps businesses improve ratings and manage reviews efficiently.",
};

export default function DemoPage() {
    const benefits = [
        "Personalized walkthrough of the platform",
        "Expert advice on improving your reputation",
        "Pricing options tailored to your needs",
        "No commitment required",
    ];

    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                <div className="lg:w-1/2 space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                            Request a Free Demo
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            See how ReviewManagement software helps businesses improve ratings and manage reviews efficiently.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">What you'll get:</h3>
                        <ul className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <div className="bg-primary/10 p-1 rounded-full">
                                        <Check className="h-4 w-4 text-primary" />
                                    </div>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <div className="p-8 border rounded-xl bg-card shadow-sm">
                        <DemoForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
