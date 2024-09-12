'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import {X} from "lucide-react";
import {navLinks} from "@/data/navLinks";
import useWindowInnerWidth from '@/hooks/useWindowInnerWidth';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const innerWidth = useWindowInnerWidth();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 && window.innerWidth >= 768) {
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
                className={`fixed top-0 left-0 w-full bg-beige bg-cover bg-center flex items-start z-40 transition-all duration-300 min-h-20 ${isScrolled ? 'md:h-28' : 'md:h-32'}`}
                style={{ 
                    clipPath: innerWidth >= 768 ? 
                    `ellipse(54% ${isScrolled ? '80px' : '100px'} at 50% 3%)`
                    : `none`,

                    borderRadius: innerWidth <= 768 ?
                    `0 0 100% 100% / 0 0 40px 40px`
                    : 'none'
                }}>
                <div className='h-full px-4 md:px-20 w-full'>
                    <div className='flex items-start justify-between h-full'>
                        <nav className={`flex gap-0.5 md:gap-5 flex-1 ${isScrolled ? 'mt-4' : 'mt-6'}`}>
                            {isDropdownOpen 
                                ? 
                                <>
                                    <div className='flex flex-col gap-2 px-1 pb-2 absolute z-50 bg-beige'>
                                        <div onClick={() => setIsDropdownOpen(false)}>
                                            <Image src={'/img/icons/minus.svg'} width={24} height={24} alt={''}/>
                                        </div>
                                        <Link href={'#'}>
                                            <Image src={'/img/icons/whatsapp.svg'} width={24} height={24} alt={'Whatsapp'} />
                                        </Link>
                                        <Link href={'#'}>
                                            <Image src={'/img/icons/messenger.svg'} width={24} height={24} alt={'Messenger'} />
                                        </Link>
                                        <Link href={'#'}>
                                            <Image src={'/img/icons/telegram.svg'} width={24} height={24} alt={'Telegram'}/>
                                        </Link>
                                        
                                    </div>
                                </>
                                : 
                                <>
                                    <Link href={'#'}>
                                        <Image src={'/img/icons/whatsapp.svg'} width={24} height={24} alt={'Whatsapp'} />
                                    </Link>
                                    <Link href={'#'} className={'hidden md:inline-block'}>
                                        <Image src={'/img/icons/messenger.svg'} width={24} height={24} alt={'Messenger'} />
                                    </Link>
                                    <Link href={'#'} className={'hidden md:inline-block'}>
                                        <Image src={'/img/icons/telegram.svg'} width={24} height={24} alt={'Telegram'}/>
                                    </Link>
                                    {innerWidth <= 768 && <div onClick={() => setIsDropdownOpen(true)}>
                                        <Image src={'/img/icons/plus.svg'} width={24} height={24} alt={''}/>
                                    </div>}

                                </>
                            }
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
                <div className="fixed top-0 right-0 w-full h-full px-3 py-2 md:p-0 md:h-fit md:mr-20 md:mt-2  z-50 flex justify-end">
                    <div className="bg-black h-full px-10 md:px-20 py-14 max-w-[480px] w-full text-white bg-opacity-90 md:bg-opacity-100">
                        <button onClick={toggleModal} className="text-white text-xl mb-4 absolute right-4 top-4"><X/></button>
                        <nav className="flex flex-col gap-[60px] md:gap-[70px]">
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
