import { Utensils, ShoppingBag, Wine, Stethoscope, Scissors, Store } from "lucide-react";

export function WhosItFor() {
    const industries = [
        { name: "Restaurants", icon: Utensils },
        { name: "Retail Stores", icon: ShoppingBag },
        { name: "Liquor Stores", icon: Wine },
        { name: "Clinics", icon: Stethoscope },
        { name: "Salons", icon: Scissors },
        { name: "Small Businesses", icon: Store },
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">
                    Who It's For
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 bg-background rounded-xl border hover:border-primary/50 hover:shadow-lg transition-all text-center group"
                        >
                            <industry.icon className="h-10 w-10 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            <h3 className="font-semibold">{industry.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
