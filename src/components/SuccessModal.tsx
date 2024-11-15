import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-secondary bg-opacity-50 flex items-center justify-center px-4 z-50"
            onClick={onClose}
        >
            <div className="bg-beige p-4 rounded lg:w-[689px] lg:h-[442px] relative text-secondary py-20" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}
                        className="text-secondary text-xl absolute right-5 top-5 w-[35px] h-[16px]">
                    <motion.span
                        className="block w-9 h-0.5 bg-secondary absolute"
                        initial={{rotate: 80, y: 0}}
                        animate={{rotate: 160, y: 0}}
                        transition={{duration: 0.3}}
                    />
                    <motion.span
                        className="block w-9 h-0.5 bg-secondary absolute"
                        initial={{rotate: -80, y: 0}}
                        animate={{rotate: -160, y: 0}}
                        transition={{duration: 0.3}}
                    />
                </button>
                <p className='font-bold italic uppercase text-3xl text-center'>success!</p>
                <div className='text-center mt-10'>
                    <p className='text-lg'>
                        Your request has been successfully submitted.
                        <br/>
                        We’ll be in touch shortly.
                    </p>
                </div>
                <div className='flex justify-center mt-10 gap-5'>
                    <Link href={'tel:2406906136'} className='underline font-bold text-secondary'>
                    (240) 690.6136
                    </Link>
                    <nav className='flex gap-5 w-fit text-secondary'>
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
                </div>
                <Image src={'/img/main/qr-code.png'} alt='Qr code' width={284} height={45} className='mt-12 mx-auto'/>
            </div>
        </div>
    );
};

export default SuccessModal;
