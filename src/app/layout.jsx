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
  title: "Manthan 3.0",
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
