import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Resend · Email for developers",
  description: "The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.",
  openGraph: {
    title: "Resend · Email for developers",
    description: "The best way to reach humans instead of spam folders. Deliver transactional and marketing emails at scale.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth dark`}
    >
      <body className="bg-black font-sans text-white antialiased">{children}</body>
    </html>
  );
}
