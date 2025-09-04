import type { Metadata } from "next";
import { Inter, Darker_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASAP - Bridge Between Crypto and Everyday Money",
  description:
    "ASAP empowers businesses to accept crypto payments effortlessly and enables individuals to spend, save, and invest crypto like regular money. Join thousands using ASAP to make crypto as easy as traditional money.",
  keywords: [
    "crypto payments",
    "cryptocurrency",
    "business crypto",
    "crypto investment",
    "crypto savings",
    "digital payments",
    "blockchain payments",
    "crypto bridge",
    "ASAP platform",
    "crypto adoption",
  ],
  authors: [{ name: "ASAP Team" }],
  creator: "ASAP",
  publisher: "ASAP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://asapcrypto.xyz/"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asapcrypto.xyz/", // Replace with your actual domain
    siteName: "ASAP",
    title: "ASAP - Bridge Between Crypto and Everyday Money",
    description:
      "Empower your business with crypto payments and manage your crypto like everyday money. Join ASAP today.",
    images: [
      {
        url: "/hero.png",
        width: 900,
        height: 300,
        alt: "ASAP - Crypto and Everyday Money Bridge",
      },
      {
        url: "/open-graph-seo.png",
        width: 100,
        height: 100,
        alt: "ASAP Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ASAP - Bridge Between Crypto and Everyday Money",
    description:
      "Empower your business with crypto payments and manage your crypto like everyday money. Join ASAP today.",
    images: ["/open-graph-seo.png"],
    creator: "@asap_platform", // Replace with your actual Twitter handle
    site: "@asap_platform", // Replace with your actual Twitter handle
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
    google: "your-google-verification-code", // Replace with your actual Google verification code
    yandex: "your-yandex-verification-code", // Replace with your actual Yandex verification code
    yahoo: "your-yahoo-verification-code", // Replace with your actual Yahoo verification code
  },
  category: "Financial Services",
  classification: "Cryptocurrency Payment Platform",
};

const grotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-grotesque",
});

const editorsNote = localFont({
  src: [
    {
      path: "../../public/fonts/editors-note/EditorsNote-Regular-iF664322be6e849.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/editors-note/EditorsNote-Bold-iF664322be38357.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-editorsnote",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesque.variable} ${editorsNote.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
