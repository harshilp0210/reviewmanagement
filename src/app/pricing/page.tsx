import { Metadata } from "next";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Review Management Software Pricing | ReviewManagement",
    description: "Simple and affordable pricing for businesses of all sizes.",
};

export default function PricingPage() {
    const plans = [
        {
            name: "Starter Plan",
            description: "For small businesses",
            price: "$29",
            features: ["1 Location", "100 Review Requests/mo", "Email Support"],
        },
        {
            name: "Professional Plan",
            description: "For growing businesses",
            price: "$79",
            features: ["5 Locations", "Unlimited Requests", "Priority Support", "Analytics"],
            popular: true,
        },
        {
            name: "Enterprise Plan",
            description: "For large organizations",
            price: "Custom",
            features: ["Unlimited Locations", "API Access", "Dedicated Manager", "White-label"],
        },
    ];

    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                    Simple and Affordable Pricing
                </h1>
                <p className="text-xl text-muted-foreground">
                    Choose the plan that fits your business needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative flex flex-col p-8 rounded-xl border ${plan.popular
                                ? "border-primary shadow-lg scale-105 z-10 bg-card"
                                : "border-border bg-background/50"
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                Most Popular
                            </div>
                        )}
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold">{plan.name}</h3>
                            <p className="text-muted-foreground">{plan.description}</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                    <Check className="h-5 w-5 text-green-500 mr-2" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/demo" className="w-full">
                            <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                                Start Free Trial
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
