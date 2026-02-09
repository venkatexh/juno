"use client";

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ModalProvider } from "@/contexts/modal-context";
import NavbarAppPrimary from "@/components/navbar/NavbarAppPrimary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <ModalProvider>
          <NavbarAppPrimary />
          <div className='ml-32'>{children}</div>
        </ModalProvider>
      </body>
    </html>
  );
}
