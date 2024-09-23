'use client'
import React from 'react';
import Image from "next/image";
import Box from "@/components/Box";
import Title from "@/components/Title";
import {    ArrowUpRight} from "lucide-react";
import { motion } from 'framer-motion';

const JoinUsMobile = () => {
    return(
        <div className='md:hidden'>
            <Title>Join us on Instagram</Title>
            <div className='flex flex-col gap-5'>
                <div className='grid grid-cols-2 grid-rows-2 gap-5 mt-8'>
                    <Image src={'/img/main/gallery/Photo_1.png'} width={400} height={400} alt={'Image'}/>
                    <Image src={'/img/main/gallery/Photo_2.png'} width={400} height={400} alt={'Image'}/>
                    <Image src={'/img/main/gallery/Photo_3.png'} width={400} height={400} alt={'Image'}/>
                    <Image src={'/img/main/gallery/Photo_4.png'} width={400} height={400} alt={'Image'}/>
                </div>
                <div className='grid grid-cols-2 grid-rows-2 gap-5'>
                    <div className='my-auto text-xl flex items-center gap-3'>
                        <p className='mt-2 text-secondary'>Follow for more</p>
                        <ArrowUpRight color={'#000'} size={32} strokeWidth={1.5}/>
                    </div>
                    <Image src={'/img/main/gallery/Photo_5.png'} width={418} height={418} alt={'Image'}/>
                    <Image src={'/img/main/gallery/Photo_6.png'} width={418} height={418} alt={'Image'}/>
                    <Image src={'/img/main/gallery/Photo_7.png'} width={418} height={418} alt={'Image'}/>
                </div>
                <div className='flex gap-5'>
                    <Image src={'/img/main/gallery/mb-tolpa1.png'} alt={'img'} width={164} height={290} className='w-1/2 h-auto'/>
                    <Image src={'/img/main/gallery/mb-tolpa2.png'} alt={'img'} width={164} height={290} className='w-1/2 h-auto'/>
                </div>
            </div>

        </div>
    )
}

const JoinUs = () => {
    return (

        <Box>
            <motion.div
                initial={{opacity: 0, x: 200}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.7, type: "spring", stiffness: 50}}
                viewport={{once: true, amount: 0.05}}
            >
                <div className='gap-5 hidden md:flex'>
                    <div className='w-1/3 flex flex-col gap-5 justify-between'>
                        <div className='flex justify-between flex-col h-full'>
                            <Title>Join us on Instagram</Title>
                            <div className='my-auto text-xl flex items-center gap-4 text-secondary'><p>Follow for more</p>
                                <ArrowUpRight
                                    color={'#001942'} size={32} strokeWidth={1.5}/></div>
                        </div>
                        <div className='grid grid-cols-2 grid-rows-2 gap-5'>
                            <Image src={'/img/main/gallery/Photo_1.png'} width={400} height={400} alt={'Image'}/>
                            <Image src={'/img/main/gallery/Photo_2.png'} width={400} height={400} alt={'Image'}/>
                            <Image src={'/img/main/gallery/Photo_3.png'} width={400} height={400} alt={'Image'}/>
                            <Image src={'/img/main/gallery/Photo_4.png'} width={400} height={400} alt={'Image'}/>
                        </div>
                    </div>
                    <div className='w-1/3 flex flex-col gap-5 justify-between'>
                        <div className='grid grid-cols-2 grid-rows-2 gap-5'>
                            <div></div>
                            <Image src={'/img/main/gallery/Photo_5.png'} width={418} height={418} alt={'Image'}/>
                            <Image src={'/img/main/gallery/Photo_6.png'} width={418} height={418} alt={'Image'}/>
                            <Image src={'/img/main/gallery/Photo_7.png'} width={418} height={418} alt={'Image'}/>
                        </div>
                        <div>
                            <Image src={'/img/main/gallery/big-area.png'} width={418} height={418} alt={'Image'}/>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <Image src={'/img/main/gallery/tolpa.png'} width={410} height={847} alt={'Image'}/>
                    </div>
                </div>
                <JoinUsMobile/>
            </motion.div>
        </Box>



)
    ;
};

export default JoinUs;