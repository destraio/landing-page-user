import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: "Concept Survey",
  description: "from Destra.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
