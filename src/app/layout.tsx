import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ModernGamepedia | Your Go-To Video Game Wiki",
  description: "Explore & Share Games Wiki: Fast Access to a Vast Catalog.",
  keywords: [
    "Video Game Wiki",
    "Game Information Hub",
    "Gaming Database",
    "Video Game Community",
    "Game Guides and Tips",
    "Social Gaming Network",
  ],
  openGraph: {
    title: "ModernGamepedia | Your Go-To Video Game Wiki",
    description: "Explore & Share Games Wiki: Fast Access to a Vast Catalog.",
    images: {
      url: "/mgp-logo.png",
    },
    type: "website",
    siteName: "ModernGamepedia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
