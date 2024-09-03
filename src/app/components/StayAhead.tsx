import Box from "@/components/Box";
import Title from "@/components/Title";
import React from "react";
import Image from "next/image";
import { MockEvents } from "@/data/MockEvents";
import Link from "next/link";

const Slider = () => {
    // scrollbar-hide
    return (
        <div className='relative mt-24 overflow-x-scroll overflow-y-clip'>
            <div className='flex gap-5 relative w-max'>
                {MockEvents.map((card, i) => (
                    <div className='w-72 h-96 relative overflow-hidden' key={i}>
                        <Image
                            src={card.img}
                            width={280}
                            height={380}
                            alt={card.title}
                            className='object-cover hover:scale-110 transition-all duration-500'
                            layout="responsive"
                        />
                        <div className='absolute bottom-5 left-5 text-white'>
                            <h2 className='uppercase'>{card.title}</h2>
                            <p>{card.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const StayAhead = () => {
    return (
        <Box>
            <Title>Stay ahead of the crowd with our<br /> selection of trending events</Title>
            <p className="text-center mt-7 w-2/3 mx-auto">
                From the hottest concerts and must-see theater shows to thrilling sports matches
                and exclusive festivals, these are the events everyone is talking about.
            </p>
            <Slider />
            <div className='flex justify-center mt-8'>
                <Link href='#' className='uppercase bg-inherit border border-black text-xl px-8 py-4'>
                    contact us
                </Link>
            </div>

        </Box>
    );
};

export default StayAhead;
