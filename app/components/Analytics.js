"use client"; // This makes the component client-side

import { useEffect } from "react";
import Script from "next/script";

export default function Analytics({ trackingId }) {
  useEffect(() => {
    if (!window.gtag) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      window.gtag = gtag;

      gtag("js", new Date());
      gtag("config", trackingId, {
        page_path: window.location.pathname,
      });
    }
  }, [trackingId]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
