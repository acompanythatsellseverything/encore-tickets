'use client'
import React from 'react';
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import Box from "@/components/Box";
import { motion } from 'framer-motion';
import Link from "next/link";

interface IService {
    icon: string
    title: string | JSX.Element
    txt: string | JSX.Element
}

const services: IService[] = [
    {
        icon: '/img/about/icons/vip.svg',
        title: <>Exclusive Event<br className='hidden md:block'/> Packages</>,
        txt: 'We curate personalized event packages with exclusive perks like VIP receptions, meet-and-greets, and premium accommodations.'
    },
    {
        icon: '/img/about/icons/ticket.svg',
        title: <>Buy and Sell<br className='hidden md:block'/> Tickets</>,
        txt: 'Effortlessly facilitate ticket purchases or discreetly and confidently resell tickets if you can no longer attend the event. Enjoy the peace of mind that comes with our commitment to quality and authenticity.'
    },
    {
        icon: '/img/about/icons/alarm.svg',
        title: <>Exclusive VIP <br className='hidden md:block'/>Benefits</>,
        txt: 'Gain access to exclusive perks such as fine dining reservations, luxury transportation, and complimentary upgrades ensuring a luxurious experience.'
    },
    {
        icon: '/img/about/icons/access.svg',
        title: <>Travel <br className='hidden md:block'/>Concierge</>,
        txt: (<>
            Our sister company, <Link href='https://www.beroexperiences.com/' className='font-semibold'>Bero Experiences</Link>, redefines luxury travel by offering bespoke, custom-tailored trip planning services. We handle every aspect from flights and hotel accommodations to personalized experience itineraries that guarantee a seamless and stress-free experience..
        </>)
    },{
        icon: '/img/about/icons/booking.svg',
        title: <>Last-Minute<br className='hidden md:block'/> Booking Services</>,
        txt: 'We leverage our exclusive global network to effortlessly secure access to events tickets. Whether you need tickets at the last-minute or access to a sold-out event, our concierge team is at your service.'
    },


]

const OurServices = () => {

    return (
        <Box>
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                viewport={{ once: true, amount: 0.05 }}
            >
                <Subtitle>Our Services</Subtitle>
                <div className='flex flex-wrap gap-10 justify-center mt-8 md:mt-20 text-secondary'>
                    {services.map((card, i) => (
                        <div className='lg:w-[30%]' key={i}>
                            <div className='flex flex-col md:flex-row gap-5 justify-center items-center md:justify-start md:items-start'>
                                {/*@ts-ignore*/}
                                <Image src={card.icon} alt={card.title} width={55} height={35} className='w-[94px] h-[43px] md:w-[55px] md:h-[35px] md:mt-[4px]'/>
                                <h5 className='text-lg md:text-2xl md:font-semibold uppercase'>{card.title}</h5>
                            </div>
                            <hr className='w-full border border-dashed border-gray-500 my-6'/>
                            <p className='text-sm md:text-xl'>
                                {card.txt}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Box>
    );
};

export default OurServices;