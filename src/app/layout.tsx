import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Logo from "@/assets/logosaas.png";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TrackBit: Your Ultimate Tracking Solution",
  description:
    "Effortlessly track assets, people, and events in real-time. TrackBit offers advanced features, customizable alerts, and intuitive analytics for optimal efficiency and security.",
  keywords:
    "tracking app, GPS tracking, asset management, fleet management, real-time monitoring, geofencing, security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
