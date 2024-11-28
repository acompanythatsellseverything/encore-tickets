import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
    icons: {
        icon: '/favicon.png',
    },
    openGraph: {
        images: ['/favicon.png'],
    },
    twitter: {
        images: ['/favicon.png'],
    },
    metadataBase: new URL(`https://myencoreexperience.com/`)
};

const inter = Inter({ subsets: ["latin"] })
const Header = dynamic(() => import('@/components/Header'), { ssr: false })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png"/>
        <link rel="icon" href="/favicon-big.ico" sizes="512x512"/>
    </head>
    <body className={inter.className + ' flex flex-col relative'}>
    <Header/>
        {children}
        <Footer/>
    </body>
    </html>
  );
}
