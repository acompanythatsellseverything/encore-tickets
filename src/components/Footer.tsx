import React from 'react';
import Image from "next/image";
import Box from "@/components/Box";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className='bg-beige'>
            <Box>
                <div className='flex flex-col gap-14 items-center'>
                    <Image src={'/img/icons/small-logo.svg'} alt='logo' width={43} height={50}/>
                    <p className='uppercase text-xl'>Follow us social media</p>
                    <nav className='flex gap-6'>
                        <Link href={'#'}>
                            <Image src={'/img/icons/facebook.svg'} width={30} height={30} alt={'Facebook'} />
                        </Link>
                        <Link href={'#'}>
                            <Image src={'/img/icons/tik-tok.svg'} width={30} height={30} alt={'TikTok'} />
                        </Link>
                        <Link href={'#'}>
                            <Image src={'/img/icons/instagram.svg'} width={30} height={30} alt={'Instagram'} />
                        </Link>
                        <Link href={'#'}>
                            <Image src={'/img/icons/x.svg'} width={30} height={30} alt={'X'} />
                        </Link>
                    </nav>
                    <nav className='flex gap-6 text-xs'>
                        <Link href={'mailto:info@encoretix.com'} className='underline'>
                            info@encoretix.com
                        </Link>
                        <Link href={'tel:3051252288'} className='underline'>
                            (305)&#32;125&#32;22&#32;88
                        </Link>
                        <Link href={'/terms-of-service'}>
                            Terms of services
                        </Link>
                        <Link href={'/privacy-policy'}>
                            Privacy Policy
                        </Link>
                    </nav>
                </div>
            </Box>
        </footer>

    );
};

export default Footer;