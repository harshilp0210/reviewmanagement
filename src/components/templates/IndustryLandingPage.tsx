import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface IndustryLandingPageProps {
    industry: string;
    title: string;
    description: string;
}

export function IndustryLandingPage({ industry, title, description }: IndustryLandingPageProps) {
    const benefits = [
        `Get more reviews from ${industry} customers`,
        `Boost your local SEO ranking for '${industry} near me'`,
        "Manage feedback across Google, Yelp, and more",
        "Increase customer trust and loyalty",
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                            {title}
                        </h1>
                        <p className="max-w-[800px] text-xl text-muted-foreground">
                            {description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/demo">
                                <Button size="lg" className="px-8">Start Free Trial</Button>
                            </Link>
                            <Link href="/demo">
                                <Button variant="outline" size="lg" className="px-8">
                                    Request Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Why {industry} Businesses Need ReviewManagement
                            </h2>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center space-x-3">
                                        <div className="bg-primary/10 p-2 rounded-full">
                                            <Check className="h-5 w-5 text-primary" />
                                        </div>
                                        <span className="text-lg">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 border rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center text-center space-y-4 shadow-inner">
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-lg font-medium">"Since using ReviewManagement, our {industry} has seen a 200% increase in positive reviews!"</p>
                            <p className="text-muted-foreground">- Happy Owner</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                        Ready to Grow Your {industry} Business?
                    </h2>
                    <Link href="/demo">
                        <Button size="lg" variant="secondary" className="px-8 text-primary font-bold">
                            Get Started Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
