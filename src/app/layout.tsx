import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voxyr - AI Calling Services | Automated Lead Generation & Appointment Booking",
  description: "Transform your business with AI-powered calling agents that handle thousands of cold calls, qualify leads, and book meetings automatically. Scale your outreach without scaling your team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-black text-white antialiased")}>
        {children}
        <FloatingQuoteButton />
      </body>
    </html>
  );
}
