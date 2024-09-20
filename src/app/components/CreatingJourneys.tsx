'use client'
import React from 'react';
import Box from "@/components/Box";
import FormBook from "@/app/components/FormBook";
import Title from "@/components/Title";
import {motion} from "framer-motion";

const CreatingJourneys = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.05 }}
        >
            <Box>
                <Title>
                    Creating <br /> Unforgettable Journeys
                </Title>
                <p className="text-center mt-7 md:w-2/3 mx-auto">
                    We create personalized, premium experiences for concerts, sports, theater, and festivals,
                    ensuring you enjoy every moment to the full.
                </p>
                <div className='mt-10 md:mt-24'>
                    <FormBook/>
                </div>
            </Box>
        </motion.div>
    );
};

export default CreatingJourneys;
