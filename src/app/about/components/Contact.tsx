'use client'
import React, {useState} from 'react';
import Box from "@/components/Box";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div id='contact'>
            <Box>
                <Subtitle>Contact</Subtitle>
                <div className='mt-20 text-center' >
                    <p className='uppercase'>call</p>
                    <div className='flex flex-col gap-2 mt-5'>
                        <nav className='flex gap-5 w-fit mx-auto'>
                            <Link href={'#'}>
                                <Image src={'/img/icons/whatsapp.svg'} width={24} height={24} alt={'Whatsapp'}/>
                            </Link>
                            <Link href={'#'}>
                                <Image src={'/img/icons/messenger.svg'} width={24} height={24} alt={'Messenger'}/>
                            </Link>
                            <Link href={'#'}>
                                <Image src={'/img/icons/telegram.svg'} width={24} height={24} alt={'Telegram'}/>
                            </Link>
                        </nav>
                        <Link href={'tel:3051252288'} className='underline font-bold'>
                            (305)&#32;125&#32;22&#32;88
                        </Link>
                    </div>
                    <p className='uppercase mt-20'>email</p>
                    <Link href={'mailto:info@encoretix.com'} className='underline font-bold mt-5'>
                        info@encoretix.com
                    </Link>
                    <div className='flex justify-center mt-20'>
                        <button
                            className='uppercase bg-inherit border border-black text-xl px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'
                            onClick={() => setIsModalOpen(true)}
                        >
                            Contact Us
                        </button>
                    </div>

                    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
                </div>
            </Box>
        </div>

    );
};

export default Contact;