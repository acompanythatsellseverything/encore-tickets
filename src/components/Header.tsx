'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import {X} from "lucide-react";
import {navLinks} from "@/data/navLinks";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    // Toggle modal visibility
    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full bg-beige bg-cover bg-center flex items-start z-50 transition-all duration-300 ${isScrolled ? 'h-28' : 'h-32'}`}
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
                            <Image
                                src={'/img/icons/burger-icon.svg'}
                                alt={'Menu'}
                                width={35}
                                height={14}
                                className={isScrolled ? 'mt-4 cursor-pointer' : 'mt-6 cursor-pointer'}
                                onClick={toggleModal}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Modal Menu */}
            {isModalOpen && (
                <div className="fixed top-0 right-0 w-full h-fit mr-20 mt-2  z-50 flex justify-end">
                    <div className="bg-black h-full px-20 py-14 max-w-[480px] w-full text-white">
                        <button onClick={toggleModal} className="text-white text-xl mb-4 absolute right-4 top-4"><X/></button>
                        <nav className="flex flex-col gap-[70px]">
                            {navLinks.map((link, i) => (
                                <Link href={link.link} onClick={toggleModal} className='uppercase text-xl' key={i}>{link.label}</Link>
                            ))}
                            <div className='flex flex-col gap-14 text-xs'>
                                <Link href={'mailto:info@encoretix.com'} className='underline'>
                                    info@encoretix.com
                                </Link>
                                <Link href={'tel:3051252288'} className='underline'>
                                    (305)&#32;125&#32;22&#32;88
                                </Link>
                            </div>
                            <div className='flex flex-col gap-9 text-xs'>
                                <Link href={'/terms-of-service'}>
                                    Terms of services
                                </Link>
                                <Link href={'/privacy-policy'}>
                                    Privacy Policy
                                </Link>
                            </div>
                            <div className='flex gap-6'>
                                <Link href={'#'}>
                                    <Image src={'/img/icons/facebook-white.svg'} width={30} height={30} alt={'Facebook'} />
                                </Link>
                                <Link href={'#'}>
                                    <Image src={'/img/icons/tik-tok-white.svg'} width={30} height={30} alt={'TikTok'} />
                                </Link>
                                <Link href={'#'}>
                                    <Image src={'/img/icons/inst-white.svg'} width={30} height={30} alt={'Instagram'} />
                                </Link>
                                <Link href={'#'}>
                                    <Image src={'/img/icons/x-white.svg'} width={30} height={30} alt={'X'} />
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
