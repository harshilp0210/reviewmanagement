// Analytics helper for tracking events
export function trackEvent(eventName: string, params?: Record<string, any>) {
    // Local log verification
    if (process.env.NODE_ENV === "development") {
        console.log(`[Analytics Event] ${eventName}`, params);
    }
    
    if (typeof window === "undefined") return;

    try {
        // GA4 tracking
        if ((window as any).gtag) {
            (window as any).gtag("event", eventName, params);
        }
        
        // Microsoft Clarity tracking
        if ((window as any).clarity) {
            (window as any).clarity("event", eventName);
        }

        // Custom event dispatcher for other tags
        const customEvent = new CustomEvent("reviewmanagement_analytics", {
            detail: { eventName, params }
        });
        window.dispatchEvent(customEvent);
    } catch (e) {
        console.error("Failed to track analytics event:", e);
    }
}
