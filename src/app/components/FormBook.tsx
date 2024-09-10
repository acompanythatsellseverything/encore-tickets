import React from 'react';
import Image from "next/image";
import MainForm from "@/app/components/MainForm";
import Title from "@/components/Title";

const FormBook = () => {
    return (
        <div className="border border-black flex flex-col md:flex-row justify-between max-w-7xl">
            <div className="mx-4 my-8 md:my-10 md:mx-10 md:w-1/2 flex flex-col justify-between">
                <div>
                    <Title className='md:text-start'>VIP access for premium live events around the World</Title>
                    <p className="mt-10 md:mt-8 text-sm md:text-base">
                        If you’re looking to buy tickets for a unique experience, share your preferences,
                        and
                        Encore Tickets will help make it happen. Just fill out the form, and our team will
                        get back
                        to you promptly.
                        <br/>
                        <br/>
                        If you are interested in selling tickets feel free to contact us via this form.
                    </p>
                </div>
                <div className='mt-12 md:mt-0'>
                    <p className='uppercase text-sm'>by phone</p>
                    <p className='font-bold underline mt-6 text-xl md:text-2xl'>(305) 125 22 88</p>
                    <Image src={'/img/main/qr-code.png'} alt='Qr code' width={284} height={45} className='mt-12'/>
                </div>
            </div>
            <span className="border border-dashed border-gray-500 my-12 md:my-0"></span>
            <div className="mx-4 my-8 md:my-10 md:mx-10 md:w-1/2">
                <MainForm/>
            </div>
        </div>
    );
};

export default FormBook;