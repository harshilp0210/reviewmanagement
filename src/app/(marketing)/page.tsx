import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    title: "ReviewManagement | Review Request & Reputation Growth Platform",
    description: "Automate review requests, manage customer feedback, and grow your online reputation with ReviewManagement. Built for small businesses, agencies, and multi-location teams.",
    keywords: [
        "review management software",
        "review request software",
        "reputation management platform",
        "Google review request tool",
        "agency review management software"
    ]
};

export default function HomePage() {
    return <HomeClient />;
}
