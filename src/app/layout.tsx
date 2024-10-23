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
        images: [
            {
                url: '/favicon-big.ico',
                alt: 'Encore Tickets Favicon',
            },
        ],
    },
    twitter: {
        images: [
            {
                url: '/favicon-big.ico',
                alt: 'Encore Tickets Favicon',
            },
        ],
    },
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

        <meta property="og:image" content="/favicon-ico.png"/>
        <meta name="twitter:image" content="/favicon-ico.png"/>

        <script src="//code.tidio.co/lu6cigzk5m2anspiwcytnd8zthsifbiu.js" async></script>
    </head>
    <body className={inter.className + ' flex flex-col relative'}>
        <Header/>
        {children}
        <Footer/>
    </body>
    </html>
  );
}
