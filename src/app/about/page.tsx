import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About ReviewManagement | Review Management Software",
    description: "Learn more about our mission to help businesses improve their online reputation.",
};

export default function AboutPage() {
    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">
                    About ReviewManagement
                </h1>
                <div className="prose prose-lg dark:prose-invert">
                    <p className="lead text-xl text-muted-foreground mb-6">
                        ReviewManagement is a modern SaaS platform designed to help
                        businesses collect, manage, and improve customer reviews.
                    </p>
                    <p className="mb-6">
                        In today's digital world, your online reputation is everything. Customers trust reviews as much as personal recommendations. However, managing reviews across multiple platforms like Google, Yelp, and Facebook can be time-consuming and overwhelming.
                    </p>
                    <p className="mb-6">
                        That's where we come in. We built ReviewManagement to streamline the entire process. From automated review requests to a centralized dashboard for monitoring and responding, we give you the tools you need to take control of your reputation.
                    </p>
                    <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
                    <p>
                        Our mission is to help businesses improve their online reputation and
                        attract more customers through powerful review management tools. We believe that every business deserves to shine online, and we're dedicated to providing the software that makes it happen.
                    </p>
                </div>
            </div>
        </div>
    );
}
