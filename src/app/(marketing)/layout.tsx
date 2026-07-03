import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ExitIntentModal } from "@/components/common/ExitIntentModal";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
    verification: {
        google: "google_search_console_verification_id_placeholder",
    }
};

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Google Analytics 4 */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-GA4_MEASUREMENT_ID_PLACEHOLDER"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GA4_MEASUREMENT_ID_PLACEHOLDER', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>

            {/* Microsoft Clarity */}
            <Script id="microsoft-clarity" strategy="afterInteractive">
                {`
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window,document,"clarity","script","clarity_project_id_placeholder");
                `}
            </Script>

            {/* LinkedIn Insight Tag */}
            <Script id="linkedin-insight" strategy="afterInteractive">
                {`
                    _linkedin_partner_id = "linkedin_partner_id_placeholder";
                    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                    (function(l) {
                    if (!l) {
                        window.lintTrack = function(e, p){ console.log("[Mock LinkedIn Tracker] Event:", e, p); };
                        return;
                    }
                    var s = document.getElementsByTagName("script")[0];
                    var b = document.createElement("script");
                    b.type = "text/javascript"; b.async = true;
                    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                    s.parentNode.insertBefore(b, s);})(window.lintTrack);
                `}
            </Script>

            <Navbar />
            <main className="flex-grow pt-18">
                {children}
            </main>
            <Footer />
            <ExitIntentModal />
        </div>
    );
}
