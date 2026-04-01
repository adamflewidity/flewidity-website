import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flewidity — Technology, Consulting & Marketing Operations",
  description:
    "Flewidity is a technology and consulting business run by Adam and Caroline. We build software products, fix marketing and sales systems, and help businesses solve operational problems.",
  metadataBase: new URL("https://flewidity.com"),
  openGraph: {
    title: "Flewidity — Technology, Consulting & Marketing Operations",
    description:
      "We build software products, fix marketing and sales systems, and help businesses solve operational problems.",
    url: "https://flewidity.com",
    siteName: "Flewidity",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flewidity — Technology, Consulting & Marketing Operations",
    description:
      "We build software products, fix marketing and sales systems, and help businesses solve operational problems.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
