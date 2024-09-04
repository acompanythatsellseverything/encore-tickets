import React from 'react';
import Image from "next/image";
import Box from "@/components/Box";
// import Link from "next/link";

const Footer = () => {
    return (
        <footer className='bg-beige'>
            <Box>
                <div className='flex flex-col gap-14 items-center'>
                    <Image src={'/img/icons/small-logo.svg'} alt='logo' width={43} height={50}/>
                    <p className='uppercase text-xl'>Follow us social media</p>
                    <nav className='flex-6'>
                        {/*<Link href={}></Link>*/}
                    </nav>
                </div>
            </Box>
        </footer>

    );
};

export default Footer;