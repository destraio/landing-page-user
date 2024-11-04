import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";


const workSans = Work_Sans({
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
        className={`${workSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
