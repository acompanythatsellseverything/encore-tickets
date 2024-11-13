import React from 'react';
import Image from "next/image";
import Box from "@/components/Box";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className='bg-beige'>
            <Box className='text-secondary'>
                <div className='flex flex-col gap-14 items-center'>
                    <Image src={'/img/icons/small-logo.svg'} alt='logo' width={43} height={50}/>
                    <p className='uppercase text-xl text-secondary'>Follow us social media</p>
                    <nav className='flex gap-6'>
                        <Link href={'https://www.facebook.com/Encoretix'}  target='_blank'>
                            <Image src={'/img/icons/facebook.svg'} width={30} height={30} alt={'Facebook'} />
                        </Link>
                        <Link href={'#'}>
                            <Image src={'/img/icons/tik-tok.svg'} width={30} height={30} alt={'TikTok'} />
                        </Link>
                        <Link href={'https://www.instagram.com/encoretix/'} target='_blank'>
                            <Image src={'/img/icons/instagram.svg'} width={30} height={30} alt={'Instagram'} />
                        </Link>
                        <Link href={'https://x.com/encoretix'}  target='_blank'>
                            <Image src={'/img/icons/x.svg'} width={30} height={30} alt={'X'} />
                        </Link>
                    </nav>
                    <nav className='flex gap-6 text-xs justify-center flex-wrap md:flex-nowrap'>
                        <Link href={'mailto:info@encoretix.com'} className='underline w-1/3 md:w-auto'>
                            info@encoretix.com
                        </Link>
                        <Link href={'tel:2406906136'} className='underline w-1/3 md:w-auto'>
                            240-690-6136
                        </Link>
                        <Link href={'/terms-of-service'} className='w-1/3 md:w-auto'>
                            Terms of services
                        </Link>
                        <Link href={'/privacy-policy'} className='w-1/3 md:w-auto'>
                            Privacy Policy
                        </Link>
                    </nav>
                </div>
            </Box>
        </footer>

    );
};

export default Footer;