import { TrendingUp, ShieldCheck, Clock, ThumbsUp, Zap } from "lucide-react";

export function WhyChoose() {
    const benefits = [
        {
            title: "Increase Positive Reviews",
            description: "Get more 5-star ratings from happy customers.",
            icon: ThumbsUp,
        },
        {
            title: "Improve Online Reputation",
            description: "Build a brand that customers trust.",
            icon: ShieldCheck,
        },
        {
            title: "Save Time Managing Reviews",
            description: "Automate requests and manage everything in one place.",
            icon: Clock,
        },
        {
            title: "Increase Customer Trust",
            description: "Showcase your best feedback to win new business.",
            icon: TrendingUp,
        },
        {
            title: "Grow Your Business Faster",
            description: " leverage social proof to drive higher conversions.",
            icon: Zap,
        },
    ];

    return (
        <section className="py-20">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
                    Why Choose ReviewManagement
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-start p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                            <div className="p-2 bg-primary/10 rounded-lg mb-4">
                                <benefit.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
