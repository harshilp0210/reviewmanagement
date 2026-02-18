import { Mail, MessageSquare, Star, BarChart3, ArrowRight } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            title: "Collect",
            description: "Automatically request reviews from customers via email, SMS, or QR code.",
            icon: Mail,
        },
        {
            title: "Manage",
            description: "View and manage all customer reviews from one centralized dashboard.",
            icon: MessageSquare,
        },
        {
            title: "Respond",
            description: "Respond to customer feedback instantly to improve customer satisfaction.",
            icon: Star,
        },
        {
            title: "Grow",
            description: "Increase ratings and build trust to attract more customers.",
            icon: BarChart3,
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-foreground">How It Works</h2>
                    <p className="text-lg text-muted-foreground">Simple steps to manage your online reputation.</p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-border/50 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="relative w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors shadow-sm">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                                    <step.icon className="h-8 w-8 text-primary" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm border-2 border-background">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed max-w-[250px] mx-auto">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
