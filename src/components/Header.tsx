'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full bg-beige bg-cover bg-center flex items-start z-50  transition-all duration-300 ${isScrolled ? 'h-28' : 'h-32'}`}
            style={{ clipPath: `ellipse(54% ${isScrolled ? '80px' : '100px'} at 50% 3%)` }}>
            <div className='h-full px-20 w-full'>
                <div className='flex items-start justify-between h-full'>
                    <nav className={`flex gap-5 flex-1 ${isScrolled ? 'mt-4' : 'mt-6'}`}>
                        <Link href={'#'}>
                            <Image src={'/img/icons/whatsapp.svg'} width={24} height={24} alt={'Whatsapp'} />
                        </Link>
                        <Link href={'#'}>
                            <Image src={'/img/icons/messenger.svg'} width={24} height={24} alt={'Messenger'} />
                        </Link>
                        <Link href={'#'}>
                            <Image src={'/img/icons/telegram.svg'} width={24} height={24} alt={'Telegram'} />
                        </Link>
                    </nav>
                    <Link href={'/'} className='flex-1 flex justify-center'>
                        <Image src={'/img/icons/big-logo.svg'} alt={'Logo'} width={285} height={72} className={`transition-all h-auto duration-300 ${isScrolled ? 'w-64' : 'w-72 mt-2 '}`} />
                    </Link>
                    <div className='flex-1 flex justify-end'>
                        <Image src={'/img/icons/burger-icon.svg'} alt={'Menu'} width={35} height={14} className={isScrolled ? 'mt-4' : 'mt-6'}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
