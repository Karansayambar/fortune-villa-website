import "./globals.css";

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
  metadataBase: new URL("https://www.fortunevillaalibag.com"), // replace with your actual domain
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

  // Google Search Console verification
  verification: {
    google: "iycSDRlLQ_-P8HyZORmxy43CCk64WTrtcAGi-mYSNnQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
