import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Fortune Villa | Luxury Real Estate",
    template: "%s | Fortune Villa",
  },
  description:
    "Explore Fortune Villa – your destination for premium villas, modern apartments, and luxury living experiences.",
  keywords: [
    "fortune villa",
    "luxury real estate",
    "villas for sale",
    "luxury homes",
    "premium apartments",
    "modern living",
  ],
  metadataBase: new URL("https://www.fortunevillaalibag.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fortune Villa | Luxury Real Estate",
    description:
      "Discover your dream property with Fortune Villa. Luxury homes, villas, and apartments designed for elegant living.",
    url: "https://www.fortunevillaalibag.com",
    siteName: "Fortune Villa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/bannerImg.JPG",
        width: 1200,
        height: 630,
        alt: "Fortune Villa - Luxury Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortune Villa | Luxury Real Estate",
    description:
      "Experience luxury and comfort with Fortune Villa – premium homes and modern living spaces.",
    images: ["/assets/bannerImg.JPG"],
    creator: "@fortunevilla",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "iycSDRlLQ_-P8HyZORmxy43CCk64WTrtcAGi-mYSNnQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17647599968"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17647599968');
          `}
        </Script>

        {/* Meta Pixel (Facebook Pixel) */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1518714246151244');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* NoScript fallback for users with JS disabled */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1518714246151244&ev=PageView&noscript=1"
            alt="facebook pixel"
          />
        </noscript>
      </head>

      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
