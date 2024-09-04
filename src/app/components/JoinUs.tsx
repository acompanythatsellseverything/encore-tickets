import React from 'react';
import Image from "next/image";
import Box from "@/components/Box";
import Title from "@/components/Title";
import {    ArrowUpRight} from "lucide-react";

const JoinUs = () => {
    return (
        <Box>
            <div className='flex gap-5'>
                <div className='w-1/3 flex flex-col gap-5 justify-between'>
                    <div className='flex justify-between flex-col h-full'>
                        <Title>Join us on Instagram</Title>
                        <div className='my-auto text-xl flex items-center gap-4'><p>Follow for more</p> <ArrowUpRight color={'#000'} size={32} strokeWidth={1.5} /></div>
                    </div>
                    <div className='grid grid-cols-2 grid-rows-2 gap-5 grid'>
                        <Image src={'/img/main/gallery/Photo_1.png'} width={400} height={400} alt={'Image'}/>
                        <Image src={'/img/main/gallery/Photo_2.png'} width={400} height={400} alt={'Image'}/>
                        <Image src={'/img/main/gallery/Photo_3.png'} width={400} height={400} alt={'Image'}/>
                        <Image src={'/img/main/gallery/Photo_4.png'} width={400} height={400} alt={'Image'}/>
                    </div>
                </div>
                <div className='w-1/3 flex flex-col gap-5 justify-between'>
                    <div className='grid grid-cols-2 grid-rows-2 gap-5 grid'>
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
        </Box>

    );
};

export default JoinUs;