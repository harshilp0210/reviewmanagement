import { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";

export const metadata: Metadata = {
    title: "About ReviewManagement | Review Management Software",
    description: "Learn more about our mission to help businesses improve their online reputation.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="About ReviewManagement"
                description="We help businesses build trust and grow through the power of customer reviews."
            />

            <section className="container py-24 px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                            ReviewManagement is a modern SaaS platform designed to help
                            businesses collect, manage, and improve customer reviews.
                        </p>
                        <p className="leading-relaxed">
                            In today's digital world, your online reputation is everything. Customers trust reviews as much as personal recommendations. However, managing reviews across multiple platforms like Google, Yelp, and Facebook can be time-consuming and overwhelming.
                        </p>
                        <p className="leading-relaxed">
                            That's where we come in. We built ReviewManagement to streamline the entire process. From automated review requests to a centralized dashboard for monitoring and responding, we give you the tools you need to take control of your reputation.
                        </p>

                        <div className="my-12 p-8 bg-muted/30 rounded-2xl border-l-4 border-primary">
                            <h2 className="text-2xl font-bold mb-4 mt-0 text-foreground">Our Mission</h2>
                            <p className="mb-0 text-muted-foreground italic">
                                "Our mission is to help businesses improve their online reputation and
                                attract more customers through powerful review management tools. We believe that every business deserves to shine online, and we're dedicated to providing the software that makes it happen."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
