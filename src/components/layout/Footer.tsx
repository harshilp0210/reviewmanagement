import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border/40">
            <div className="container mx-auto px-4 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold tracking-tight text-primary">ReviewManagement</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Powerful review management software to grow your business
                            reputation. Collect, manage, and respond to reviews from one
                            platform.
                        </p>
                        <div className="flex space-x-5">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/demo" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Request Demo
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Industries</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link
                                    href="/review-management-for-restaurants"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Restaurants
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/review-management-for-retail"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Retail
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/review-management-for-clinics"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Clinics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/review-management-for-liquor-stores"
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Liquor Stores
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} ReviewManagement. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
