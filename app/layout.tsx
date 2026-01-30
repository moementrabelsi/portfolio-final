import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdelmoemen Trabelsi | DevOps Engineer | Cloud & Automation",
  description:
    "DevOps and Cloud Engineer certified in Kubernetes (CKA), specializing in automation, cloud infrastructure, and scalable systems. Based in Tunis, Tunisia.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased gradient-bg min-h-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
