import React from 'react';
import Box from "@/components/Box";
import Title from "@/components/Title";

const YourAccess = () => {
    return (
        <Box>
            <div className='pt-32'>
                <Title>Encore tickets Your Access to<br/> Unforgettable Moments</Title>
                <div className='mt-7  md:w-1/2 mx-4 md:mx-auto'>
                    <p className='text-lg'>
                        At EncoreTix, we specialize in providing unparalleled access to the world’s
                        most sought-after events and experiences. From exclusive concerts and VIP
                        sports events to once-in-a-lifetime encounters with your favorite celebrities,
                        we make extraordinary moments happen.
                    </p>
                    <p className='text-lg mt-3'>
                        Our global network and personalized concierge service ensure that every detail is
                        taken care of, so you can enjoy the very best in entertainment without the hassle.
                    </p>
                </div>
            </div>

        </Box>
    );
};

export default YourAccess;