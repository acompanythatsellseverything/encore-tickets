'use client'
import React from 'react';
import Box from "@/components/Box";
import FormBook from "@/app/components/FormBook";
import Title from "@/components/Title";

const CreatingJourneys = () => {
    return (
        <Box>
            {/*<h2 className="text-center font-extrabold text-4xl -tracking-tighter uppercase">*/}
            <Title>
                Creating <br /> Unforgettable Journeys
            </Title>

            {/*</h2>*/}
            <p className="text-center mt-7 w-2/3 mx-auto">
                We create personalized, premium experiences for concerts, sports, theater, and festivals,
                ensuring you enjoy every moment to the full.
            </p>
            <div className='mt-24'>
                <FormBook/>
            </div>
        </Box>
    );
};

export default CreatingJourneys;