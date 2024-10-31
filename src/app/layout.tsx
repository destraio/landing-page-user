import type { Metadata } from "next";
import localFont from "next/font/local";
import { Kanit, Work_Sans, Rajdhani } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  display: 'swap',
  weight: '400'
});
const workSans = Work_Sans({
  display: 'swap',
  weight: '400'
});
const rajdhani = Rajdhani({
  display: 'swap',
  weight: '400'
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
