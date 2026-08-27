import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Relaxing Spa Dhaka | Thai Massage in Banani | Premium Wellness Experience",
  description:
    "Relaxing Spa Dhaka offers authentic Thai Massage in Banani, body oil therapies & deep tissue treatments on Kamal Ataturk Avenue, Dhaka. Book your premium wellness experience today.",
  keywords: [
    "Relaxing Spa Dhaka",
    "Thai Massage in Banani",
    "Premium Wellness Experience",
    "Spa in Banani",
    "Spa in Dhaka",
    "Thai Massage in Dhaka",
    "Massage in Banani",
    "Body Massage in Dhaka",
    "Luxury Spa in Banani",
    "Spa Near Gulshan",
    "Massage Center in Banani",
    "Wellness Spa Dhaka",
    "Banani Spa",
  ],
  authors: [{ name: "Relaxing Spa Dhaka" }],
  creator: "Relaxing Spa Dhaka",
  metadataBase: new URL("https://relaxingspadhaka.com"),
  alternates: {
    canonical: "https://relaxingspadhaka.com/",
  },
  openGraph: {
    title: "Relaxing Spa Dhaka | Thai Massage in Banani | Premium Wellness Experience",
    description:
      "Experience authentic Thai massage, body oil therapies, and serene spa rituals in Banani, Dhaka. Book your premium wellness experience today.",
    url: "https://relaxingspadhaka.com/",
    siteName: "Relaxing Spa Dhaka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Relaxing Spa Dhaka Luxury Interior Banani",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relaxing Spa Dhaka | Thai Massage in Banani | Premium Wellness Experience",
    description:
      "Discover Banani's finest luxury spa sanctuary on Kamal Ataturk Avenue. Authentic Thai massage, private suites, and personal renewal.",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "googlea8d466ecbb856bd9",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-8RMTJ2TJX7";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <JsonLd />
      </head>
      <body className="bg-[#0B0B0B] text-[#F5F1E8] antialiased selection:bg-[#C9A45C]/30 selection:text-[#F5F1E8]">
        {children}
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
