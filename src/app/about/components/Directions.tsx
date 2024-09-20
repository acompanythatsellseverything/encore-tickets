'use client'
import React from 'react';
import Box from "@/components/Box";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import { motion } from 'framer-motion';

const directionsMockData = [
    {
        img: '/img/about/music.png',
        title: 'Music'
    },
    {
        img: '/img/about/sport.png',
        title: 'sport'
    },
    {
        img: '/img/about/festivals.png',
        title: 'Festivals'
    },
    {
        img: '/img/about/theatre.png',
        title: 'theatre'
    },
    {
        img: '/img/about/comedy.png',
        title: 'comedy'
    },
    {
        img: '/img/about/tv.png',
        title: 'Film, TV, fashion '
    },
]

const Directions = () => {
    return (
        <Box>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                viewport={{ once: true, amount: 0.05 }}
            >
                <Subtitle>Directions</Subtitle>
                <div className='flex gap-2.5 md:gap-10 flex-wrap mt-8 md:mt-20'>
                    {directionsMockData.map((card, i) => (
                        <div className='w-full h-[200px] md:w-[400px] md:h-96 relative overflow-hidden cursor-pointer' key={i}>
                            <Image
                                src={card.img}
                                width={280}
                                height={380}
                                alt={card.title}
                                className='object-cover hover:scale-110 transition-all duration-500 '
                                layout="responsive"
                            />
                            <div className='absolute bottom-5 left-5 text-white'>
                                <h2 className='uppercase'>{card.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

        </Box>
    );
};

export default Directions;