"use client";

// Simple helper to track GA4 events safely
export const trackEvent = (
    eventName: string,
    params?: Record<string, string | number | boolean>
) => {
    if (typeof window === "undefined" || !window.gtag) {
        // Fail silently if not in browser or GA not loaded
        return;
    }

    // Ensure no PII is accidentally sent in common fields
    const safeParams = { ...params };
    const piiKeys = ["name", "email", "phone", "whatsapp", "message", "location_detail"];
    piiKeys.forEach((key) => delete (safeParams as any)[key]);

    window.gtag("event", eventName, safeParams);
};

// Global type for gtag
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}
