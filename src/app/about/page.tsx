import YourAccess from "@/app/about/components/YourAccess";
import OurServices from "@/app/about/components/OurServices";
import Directions from "@/app/about/components/Directions";
import Contact from "@/app/about/components/Contact";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Encore Tickets: About',
    description: 'Discover personalized premium experiences for concerts, sports, theater, and festivals worldwide. Get VIP access and elevate your event journey with Encore Tickets',
    keywords: 'VIP tickets, premium live events, concert tickets, sports tickets, theater experiences, festival tickets, exclusive events, personalized event experiences, Encore Tickets',
    openGraph: {
        title: 'Encore Tickets: About',
        description: 'Discover personalized premium experiences for concerts, sports, theater, and festivals worldwide. Get VIP access and elevate your event journey with Encore Tickets',
        siteName: 'ENCORE TICKETS',
    },
    twitter: {
        title: 'Encore Tickets: About',
        description: 'Discover personalized premium experiences for concerts, sports, theater, and festivals worldwide. Get VIP access and elevate your event journey with Encore Tickets',
    },
};

export default function About() {
    return (
        <main className='bg-beige'>
            <YourAccess/>
            <OurServices/>
            <Directions/>
            <Contact/>
        </main>
    )
}
