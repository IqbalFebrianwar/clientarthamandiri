import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artha Mandiri",
  description: "Artha Mandiri Insurance adalah perusahaan asuransi yang berkomitmen menyediakan solusi perlindungan finansial yang terpercaya dan berorientasi pada kebutuhan pelanggan. Kami menghadirkan rangkaian produk asuransi yang fleksibel, kompetitif, dan dirancang untuk memberikan keamanan jangka panjang bagi individu maupun perusahaan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
