import type { Metadata } from "next";
import { Poppins, Great_Vibes, Tangerine } from 'next/font/google';
import "./globals.css";

type Poppins = any
type Great_Vibes = any
type Tangerine = any

const myPoppinsFont: Poppins = Poppins({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const myGreatVibesFont: Great_Vibes = Great_Vibes({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

const myTangerineFonts: Tangerine = Tangerine({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Derly & Giovanny",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${myPoppinsFont.className}`}>
        {children}
      </body>
    </html>
  );
}
