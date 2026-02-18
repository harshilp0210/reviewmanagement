import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                    Start Improving Your Online Reputation Today
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/90 text-xl mb-8">
                    Join thousands of businesses growing with ReviewManagement. No credit card required.
                </p>
                <Link href="/demo">
                    <Button size="lg" variant="secondary" className="px-8 text-primary font-bold">
                        Start Free Trial
                    </Button>
                </Link>
            </div>
        </section>
    );
}
