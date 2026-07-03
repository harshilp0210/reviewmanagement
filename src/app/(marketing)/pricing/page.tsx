import { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
    title: "Review Management Software Pricing | ReviewManagement",
    description: "Simple, transparent, and affordable pricing plans for local businesses, multi-location brands, and agencies.",
};

export default function PricingPage() {
    return <PricingClient />;
}
