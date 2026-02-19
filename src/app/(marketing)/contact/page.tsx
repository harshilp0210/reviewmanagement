import { Metadata } from "next";
import { Mail, Globe, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Contact ReviewManagement | Support and Sales",
    description: "Contact our team for support or sales inquiries.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader
                title="Get in Touch"
                description="Have questions? We're here to help. Reach out to our team."
            />

            <section className="container py-24 px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Email Support</h3>
                                <p className="text-muted-foreground mb-4">For general inquiries and support</p>
                                <a href="mailto:support@reviewmanagement.app" className="text-primary font-medium hover:underline text-lg">
                                    support@reviewmanagement.app
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Globe className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Website</h3>
                                <p className="text-muted-foreground mb-4">Visit our main site</p>
                                <a href="https://www.reviewmanagement.app" className="text-primary font-medium hover:underline text-lg" target="_blank" rel="noopener noreferrer">
                                    www.reviewmanagement.app
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Sales</h3>
                                <p className="text-muted-foreground mb-4">Talk to our sales team</p>
                                <a href="tel:+15551234567" className="text-primary font-medium hover:underline text-lg">
                                    +1 (555) 123-4567
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="flex flex-col items-center text-center p-8 space-y-4">
                            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Office</h3>
                                <p className="text-muted-foreground mb-4">Come visit us</p>
                                <p className="text-muted-foreground">
                                    123 Innovation Dr, Suite 100<br />
                                    San Francisco, CA 94103
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
