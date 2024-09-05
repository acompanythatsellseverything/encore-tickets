import YourAccess from "@/app/about/components/YourAccess";
import OurServices from "@/app/about/components/OurServices";
import Directions from "@/app/about/components/Directions";
import Contact from "@/app/about/components/Contact";

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
