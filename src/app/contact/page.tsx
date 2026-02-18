import { Metadata } from "next";
import { Mail, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact ReviewManagement | Support and Sales",
    description: "Contact our team for support or sales inquiries.",
};

export default function ContactPage() {
    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
                    Contact Us
                </h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Contact our team to learn more about ReviewManagement software.
                </p>

                <div className="grid gap-8 p-8 border rounded-xl bg-card">
                    <div className="flex flex-col items-center space-y-2">
                        <Mail className="h-8 w-8 text-primary" />
                        <h3 className="text-xl font-bold">Email</h3>
                        <a href="mailto:support@reviewmanagment.app" className="text-primary hover:underline">
                            support@reviewmanagment.app
                        </a>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                        <Globe className="h-8 w-8 text-primary" />
                        <h3 className="text-xl font-bold">Website</h3>
                        <a href="https://www.reviewmanagment.app" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                            www.reviewmanagment.app
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
