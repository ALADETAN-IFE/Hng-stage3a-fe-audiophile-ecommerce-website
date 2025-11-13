import type { Metadata } from "next";
import "./globals.css";
// import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Heropage from "@/components/ui/Heropage";
import { ConvexClientProvider } from "./ConvexClientProvider";

export const metadataBase = new URL(
  "https://audiophile-ecommerce-website-hng-3a.vercel.app"
);

export const metadata: Metadata = {
  title: {
    default: "Audiophile — Premium Headphones, Speakers & Earphones",
    template: "%s | Audiophile",
  },
  description:
    "Premium audio products — shop high-fidelity headphones, speakers and earphones. Fast shipping, 30-day returns.",
  keywords: [
    "audiophile",
    "headphones",
    "speakers",
    "earphones",
    "high-fidelity",
    "wireless headphones",
    "audio equipment",
    "hng",
    "stage 3a",
    "IfeCodes",
    "ifecodes",
    "audiophile e-commerce",
    "audiophile e-commerce website",
    "e-commerce",
    "premium sound",
    "music accessories",
    "noise-cancelling",
    "studio headphones",
    "portable speakers",
    "in-ear monitors",
  ],
  authors: [{ name: "Audiophile Store" }],
  applicationName: "Audiophile Store",
  robots: {
    index: true,
    follow: true,
    // Allow previewing in search results
    nocache: false,
  },
  openGraph: {
    title: "Audiophile — Premium Headphones, Speakers & Earphones",
    description:
      "Premium audio products — shop high-fidelity headphones, speakers and earphones. Fast shipping, 30-day returns.",
    url: metadataBase.toString(),
    siteName: "Audiophile Store",
    images: [
      {
        url: `${metadataBase.toString()} /og-image.jpg`.trim(),
        width: 1200,
        height: 630,
        alt: "Audiophile - premium audio gear",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audiophile — Premium Headphones, Speakers & Earphones",
    description:
      "Premium audio products — shop high-fidelity headphones, speakers and earphones. Fast shipping, 30-day returns.",
    images: [`${metadataBase.toString()}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Audiophile Store",
        url: metadataBase.toString(),
        sameAs: [],
      },
      {
        "@type": "WebSite",
        name: "Audiophile Store",
        url: metadataBase.toString(),
        potentialAction: {
          "@type": "SearchAction",
          target: `${metadataBase.toString()}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  } as const;

  const canonical = new URL("/", metadataBase).toString();

  return (
    <html lang="en">
      <head>
        {/* Performance: preconnect to Google Fonts and Google fonts static host */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#D87D4A" />
        <link rel="canonical" href={canonical} />
        <script
          key="ld-json"
          type="application/ld+json"
          // JSON-LD is small and safe; stringify it here so crawlers can parse
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`antialiased`}>
        <ConvexClientProvider> 
          <Heropage />
          {children}
          <Footer />
        </ConvexClientProvider>  
      </body>
    </html>
  );
}
