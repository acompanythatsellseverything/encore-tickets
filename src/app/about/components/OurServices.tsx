'use client'
import React from 'react';
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import Box from "@/components/Box";
import { motion } from 'framer-motion';

interface IService {
    icon: string
    title: string | JSX.Element
    txt: string
}

const services: IService[] = [
    {
        icon: '/img/about/icons/alarm.svg',
        title: <>VIP Concierge<br className='hidden md:block'/> Services</>,
        txt: 'Our VIP concierge services offer tailored support for travel, luxury accommodations, fine dining, and special requests, ensuring a seamless experience.'
    },
    {
        icon: '/img/about/icons/vip.svg',
        title: <>Customized Event<br className='hidden md:block'/> Packages</>,
        txt: 'We create custom packages with event tickets and exclusive perks like backstage passes, meet-and-greets, and VIP receptions.'
    },
    {
        icon: '/img/about/icons/access.svg',
        title: <>Access to Invitation-<br className='hidden md:block'/>Only Events</>,
        txt: 'Provide clients with invites to exclusive, members-only events like private parties, charity galas, and fashion shows not open to the public.'
    },{
        icon: '/img/about/icons/booking.svg',
        title: <>Last-Minute<br className='hidden md:block'/> Booking Services</>,
        txt: 'Offer the ability to secure tickets and arrangements on short notice, leveraging industry connections to provide access even to sold-out events.'
    },
    {
        icon: '/img/about/icons/ticket.svg',
        title: <>Ticket Buying and<br className='hidden md:block'/> Selling Services</>,
        txt: 'Facilitate effortless ticket purchases and resales for all events, ensuring secure transactions and access to high-demand options.'
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
                <div className='flex flex-wrap gap-10 justify-center mt-8 md:mt-20'>
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