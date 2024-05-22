import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

type Poppins = any

const myPoppinsFont: Poppins = Poppins({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "D & G Wedding invitation",
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
