import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Support from "@/components/Support";
import dynamic from "next/dynamic";
// import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
export const metadata: Metadata = {
  title: "Encore Tickets",
  description: "Encore Tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' flex flex-col relative'} >
        <Header/>
        <Support/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
