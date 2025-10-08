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
  metadataBase: new URL("https://fortunevilla.in"), // replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fortune Villa | Luxury Real Estate",
    description:
      "Discover your dream property with Fortune Villa. Luxury homes, villas, and apartments designed for elegant living.",
    url: "https://fortunevilla.in",
    siteName: "Fortune Villa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/bannerImg.JPG", // adjust if banner image has a different name or location
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
