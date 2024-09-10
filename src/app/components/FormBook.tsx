import React from 'react';
import Image from "next/image";
import MainForm from "@/app/components/MainForm";
import Title from "@/components/Title";

const FormBook = () => {
    return (
        <div className="border border-black flex flex-col md:flex-row justify-between max-w-7xl">
            <div className="m-10 md:w-1/2 flex flex-col justify-between">
                <div>
                    <Title className='text-start'>VIP access for premium live events around the World</Title>
                    <p className="mt-8">
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
                <div>
                    <p className='uppercase text-sm'>by phone</p>
                    <p className='font-bold underline mt-6 text-2xl'>(305) 125 22 88</p>
                    <Image src={'/img/main/qr-code.png'} alt='Qr code' width={284} height={45} className='mt-12'/>
                </div>
            </div>
            <span className="border border-dashed border-gray-500"></span>
            <div className="m-10 md:w-1/2">
                <MainForm/>
            </div>
        </div>
    );
};

export default FormBook;