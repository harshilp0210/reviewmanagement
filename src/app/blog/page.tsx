import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Review Management Blog | Tips & Strategies",
    description: "Read our latest articles on review management, online reputation, and business growth.",
};

export default function BlogPage() {
    const posts = [
        "How to Get More Google Reviews for Your Business",
        "Best Review Management Software in 2026",
        "Why Online Reviews Are Important for Business",
        "How Reviews Increase Customer Trust",
        "How to Improve Google Rating",
        "Review Management for Restaurants Guide",
        "How to Handle Negative Reviews",
        "How Reviews Impact Business Growth",
        "Best Reputation Management Strategies",
        "How to Automate Review Collection",
    ];

    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                    ReviewManagement Blog
                </h1>
                <p className="text-xl text-muted-foreground">
                    Latest tips, strategies, and insights for growing your business.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((title, index) => (
                    <Link href="#" key={index} className="block group">
                        <Card className="h-full hover:shadow-lg transition-shadow border-border/60">
                            {/* Placeholder for blog image */}
                            <div className="h-48 bg-muted rounded-t-xl group-hover:bg-muted/80 transition-colors" />
                            <CardHeader>
                                <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
                                <CardDescription>
                                    Learn the best practices for managing your reviews and reputation.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <span className="text-sm text-primary font-medium group-hover:underline">Read More &rarr;</span>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
