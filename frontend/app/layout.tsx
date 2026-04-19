"use client";

// @ts-expect-error: CSS global import lacks module type declarations
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ModalProvider } from "@/contexts/modal-context";

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
          <div className='ml-32'>{children}</div>
        </ModalProvider>
      </body>
    </html>
  );
}
