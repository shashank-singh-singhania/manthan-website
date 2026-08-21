import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Manthan 2026",
  description:
    "Manthan 2026 – National Inter-School Quiz Competition organised by KIET Deemed To Be University, Ghaziabad. Theme: Viksit Bharat@2047 – Technology for Transformation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Loader />
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
