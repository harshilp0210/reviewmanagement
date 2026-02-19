"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Loader2 } from "lucide-react";

export default function SettingsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setIsSaved(false);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsLoading(false);
        setIsSaved(true);

        // Reset success state after 2 seconds
        setTimeout(() => setIsSaved(false), 2000);
    };

    return (
        <div className="p-8 space-y-8 max-w-2xl">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">
                    Manage your account settings and preferences.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>
                            Update your personal and business details.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                            <Input id="name" defaultValue="Demo User" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" defaultValue="demo@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="business" className="text-sm font-medium">Business Name</label>
                            <Input id="business" defaultValue="My Awesome Business" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {!isLoading && isSaved && <Check className="mr-2 h-4 w-4" />}
                            {isSaved ? "Saved" : "Save Changes"}
                        </Button>
                    </CardFooter>
                </Card>
            </form>

            <Card>
                <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                        Configure how you receive alerts.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="email-notif" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                        <label htmlFor="email-notif" className="text-sm font-medium">Email Alerts</label>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                        <input type="checkbox" id="sms-notif" className="h-4 w-4 rounded border-gray-300" />
                        <label htmlFor="sms-notif" className="text-sm font-medium">SMS Alerts</label>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
