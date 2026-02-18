import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Review Management Software Features | ReviewManagement",
    description: "Explore the features of ReviewManagement software. Automated collection, monitoring, analytics, and more.",
};

export default function FeaturesPage() {
    const features = [
        {
            title: "Automated review collection",
            description: "Automatically request reviews via email or SMS.",
        },
        {
            title: "Real-time review monitoring",
            description: "Get notified instantly when you receive a new review.",
        },
        {
            title: "Customer feedback tracking",
            description: "Track trends in customer sentiment over time.",
        },
        {
            title: "Review analytics dashboard",
            description: "Visual insights into your reputation performance.",
        },
        {
            title: "Multi-location support",
            description: "Manage reviews for hundreds of locations from one account.",
        },
        {
            title: "Cloud-based system",
            description: "Access your dashboard from anywhere, anytime.",
        },
    ];

    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                    All-in-One Review Management Platform
                </h1>
                <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
                    Everything you need to collect, manage, and improve your customer
                    reviews.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="p-6 border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                            <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <p className="text-2xl font-bold mb-6">Ready to get started?</p>
                <a href="/demo" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Start Free Trial
                </a>
            </div>
        </div>
    );
}
