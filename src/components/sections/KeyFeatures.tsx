import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Bell, LayoutDashboard, Mail, MessageSquare, Smartphone, Zap } from "lucide-react";

export function KeyFeatures() {
    const features = [
        {
            title: "Centralized Dashboard",
            description: "View reviews from Google, Facebook, Yelp, and more in one single feed.",
            icon: LayoutDashboard,
        },
        {
            title: "Automated Requests",
            description: "Send automated review requests via email and SMS to your customers.",
            icon: Mail,
        },
        {
            title: "Instant Notifications",
            description: "Get alerted the moment a new review is posted so you can respond fast.",
            icon: Bell,
        },
        {
            title: "Review Monitoring",
            description: "Track your reputation across 20+ review sites automatically.",
            icon: MessageSquare,
        },
        {
            title: "Analytics & Reporting",
            description: "Detailed reports on ranking, sentiment, and review volume trends.",
            icon: BarChart3,
        },
        {
            title: "Mobile Friendly",
            description: "Manage your reputation on the go with our responsive mobile interface.",
            icon: Smartphone,
        },
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Key Features</h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to manage your business reputation effectively in one powerful platform.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
