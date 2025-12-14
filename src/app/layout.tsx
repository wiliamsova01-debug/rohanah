import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROHANAH - Toko Eceran Terpercaya | Makanan, Minuman & Tembakau",
  description: "ROHANAH adalah toko eceran terpercaya di Tangerang yang menyediakan berbagai makanan, minuman, dan produk tembakau berkualitas dengan harga terjangkau.",
  keywords: ["ROHANAH", "toko eceran", "makanan", "minuman", "rokok", "tembakau", "Tangerang", "Cibodas", "toko kelontong"],
  authors: [{ name: "ROHANAH" }],
  icons: {
    icon: "/rohanah-logo.png",
  },
  openGraph: {
    title: "ROHANAH - Toko Eceran Terpercaya di Tangerang",
    description: "Toko eceran lengkap untuk makanan, minuman, dan kebutuhan tembakau Anda. Harga terjangkau, pelayanan ramah.",
    url: "https://rohanah.com",
    siteName: "ROHANAH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROHANAH - Toko Eceran Terpercaya",
    description: "Toko eceran lengkap untuk makanan, minuman, dan kebutuhan tembakau Anda.",
  },
  other: {
    "facebook-domain-verification": "smyytg7ultoixeyneytbt5w7gg5f1g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
