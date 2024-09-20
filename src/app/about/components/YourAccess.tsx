'use client'
import React from 'react';
import Box from "@/components/Box";
import Title from "@/components/Title";
import { motion } from 'framer-motion';

const YourAccess = () => {
    return (
        <Box>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
                viewport={{ once: true, amount: 0.05 }}
            >
                <div className='pt-32'>
                    <Title>Encore tickets Your Access to<br/> Unforgettable Moments</Title>
                    <div className='mt-7 md:w-1/2 mx-auto text-sm md:text-lg'>
                        <p>
                            At EncoreTix, we specialize in providing unparalleled access to the world’s
                            most sought-after events and experiences. From exclusive concerts and VIP
                            sports events to once-in-a-lifetime encounters with your favorite celebrities,
                            we make extraordinary moments happen.
                        </p>
                        <p className='mt-3'>
                            Our global network and personalized concierge service ensure that every detail is
                            taken care of, so you can enjoy the very best in entertainment without the hassle.
                        </p>
                    </div>
                </div>
            </motion.div>
        </Box>
    );
};

export default YourAccess;