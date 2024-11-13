'use client'
import React, {useState} from 'react';
import Box from "@/components/Box";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";
import { motion } from 'framer-motion';
import Text from "@/components/Text";

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div id='contact'>
            <Box>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.05 }}
                >
                    <Subtitle>Contact</Subtitle>
                    <div className='mt-20 text-center' >
                        <Text className='uppercase'>call</Text>
                        <div className='flex flex-col gap-2 mt-5'>
                            <nav className='flex gap-5 w-fit mx-auto text-secondary'>
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
                            <Link href={'tel:2406906136'} className='underline font-bold text-secondary'>
                                240-690-6136
                            </Link>
                        </div>
                        <Text className='uppercase mt-20'>email</Text>
                        <Link href={'mailto:concierge@encoretix.com'} className='underline font-bold mt-5 text-secondary'>
                            concierge@encoretix.com
                        </Link>
                        <div className='flex justify-center mt-20'>
                            <button
                                className='text-secondary uppercase bg-inherit border border-secondary text-xl px-8 py-4 hover:bg-secondary hover:text-white transition-all duration-500'
                                onClick={() => setIsModalOpen(true)}
                            >
                                Contact Us
                            </button>
                        </div>

                        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
                    </div>
                </motion.div>

            </Box>
        </div>

    );
};

export default Contact;