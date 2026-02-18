import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-8">
                    <div className="space-y-4 max-w-4xl">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 leading-tight">
                            Review Management Software for Restaurants, Retail, and Small Businesses
                        </h1>
                        <p className="mx-auto max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed">
                            Collect, manage, and respond to customer reviews from one platform. Improve ratings, build trust, and increase customer conversions with ReviewManagement.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/demo">
                            <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">Start Free Trial</Button>
                        </Link>
                        <Link href="/demo">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
                                Request Demo
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-16 w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-background">
                        <div className="flex h-[400px] md:h-[600px]">
                            {/* Sidebar */}
                            <div className="w-20 md:w-64 bg-card border-r border-border/50 hidden md:flex flex-col p-4">
                                <div className="h-8 w-8 bg-primary rounded-lg mb-8" />
                                <div className="space-y-2">
                                    <div className="h-10 w-full bg-accent/50 rounded-md flex items-center px-3 gap-3">
                                        <div className="h-4 w-4 bg-primary/20 rounded" />
                                        <div className="h-3 w-20 bg-primary/20 rounded hidden lg:block" />
                                    </div>
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-10 w-full rounded-md flex items-center px-3 gap-3">
                                            <div className="h-4 w-4 bg-muted rounded" />
                                            <div className="h-3 w-16 bg-muted rounded hidden lg:block" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 bg-muted/10 p-4 md:p-8 overflow-hidden">
                                {/* Header */}
                                <div className="flex justify-between items-center mb-8">
                                    <div className="h-8 w-32 bg-muted-foreground/20 rounded" />
                                    <div className="flex gap-4">
                                        <div className="h-8 w-8 rounded-full bg-muted-foreground/10" />
                                        <div className="h-8 w-8 rounded-full bg-primary/20" />
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-24 bg-card rounded-xl border border-border/50 p-4 shadow-sm">
                                            <div className="h-4 w-20 bg-muted rounded mb-4" />
                                            <div className="h-8 w-12 bg-primary/20 rounded" />
                                        </div>
                                    ))}
                                </div>

                                {/* Chart Area */}
                                <div className="h-64 bg-card rounded-xl border border-border/50 p-6 shadow-sm mb-8 flex flex-col justify-end gap-2">
                                    <div className="flex items-end justify-between h-40 gap-2 px-4">
                                        {[40, 60, 45, 70, 50, 65, 80, 75, 55, 60, 70, 85].map((h, i) => (
                                            <div key={i} className="w-full bg-primary/10 hover:bg-primary/20 transition-colors rounded-t-sm relative group">
                                                <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-primary rounded-t-sm group-hover:bg-primary/80 transition-colors" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="h-4 w-full border-t border-border/50 mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px]" />
            </div>
        </section >
    );
}
