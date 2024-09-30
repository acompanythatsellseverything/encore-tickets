import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";


const inter = Inter({ subsets: ["latin"] })
const Header = dynamic(() => import('@/components/Header'), { ssr: false })

export const metadata: Metadata = {
  title: "VIP Access to Premium Live Events Worldwide | Encore Tickets",
  description: "Discover personalized premium experiences for concerts, sports, theater, and festivals worldwide. Get VIP access and elevate your event journey with Encore Tickets",
  keywords: 'VIP tickets, premium live events, concert tickets, sports tickets, theater experiences, festival tickets, exclusive events, personalized event experiences, Encore Tickets'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta
          property='title'
          content='VIP Access to Premium Live Events Worldwide | Encore Tickets'
      />
      <meta
          property='og:title'
          content='VIP Access to Premium Live Events Worldwide | Encore Tickets'
      />
      <meta
          property='twitter:title'
          content='VIP Access to Premium Live Events Worldwide | Encore Tickets'
      />
      <meta
          name='description'
          content="Discover personalized premium experiences for concerts, sports, theater, and festivals worldwide. Get VIP access and elevate your event journey with Encore Tickets"
      />
      <meta
          property='og:description'
          content="Discover personalized premium experiences for concerts, sports, theater, and festivals worldwide. Get VIP access and elevate your event journey with Encore Tickets"
      />
      <meta
          property='twitter:description'
          content="Discover personalized premium experiences for concerts, sports, theater, and festivals worldwide. Get VIP access and elevate your event journey with Encore Tickets"
      />
      <meta property='og:site_name' content='ENCORE TICKETS'/>
      <meta
          name='keywords'
          content='VIP tickets, premium live events, concert tickets, sports tickets, theater experiences, festival tickets, exclusive events, personalized event experiences, Encore Tickets'
      />
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
