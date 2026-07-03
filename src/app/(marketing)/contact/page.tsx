import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
    title: "Contact ReviewManagement | Support & Sales",
    description: "Contact our customer support or reputation sales teams for inquiries and questions.",
};

export default function ContactPage() {
    return <ContactClient />;
}
