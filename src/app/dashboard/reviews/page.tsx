import { Metadata } from "next";
import { ReviewsTable } from "@/components/dashboard/reviews/ReviewsTable";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

export const metadata: Metadata = {
    title: "Reviews | Dashboard",
    description: "Manage your customer reviews.",
};

export default function ReviewsPage() {
    return (
        <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Reviews</h2>
                    <p className="text-muted-foreground">
                        Monitor and respond to your customer feedback.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </Button>
                    <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                    </Button>
                </div>
            </div>

            <ReviewsTable />
        </div>
    );
}
