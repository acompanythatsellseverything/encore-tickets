'use client';
import React from 'react';
import Box from '@/components/Box';
import Title from '@/components/Title';
import { motion } from 'framer-motion';
import Text from '@/components/Text';

const YourAccess = () => {
	return (
		<Box>
			<motion.div
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
				viewport={{ once: true, amount: 0.05 }}
			>
				<div className='pt-32'>
					<Title>
						Encore Experiences:Your Gateway to <br /> Unforgettable Experiences
					</Title>
					<div className='mt-7 md:w-1/2 mx-auto text-sm md:text-lg'>
						<Text>
							At Encore Experiences, we specialize in curating bespoke access to
							the world’s most coveted events and exceptional experiences.
							Whether it’s securing tickets for private concerts, VIP sports
							events, or unforgettable encounters with your favorite
							celebrities, we transform extraordinary moments into reality.
						</Text>
						<Text className='mt-3'>
							With our exclusive global network and personalized concierge
							service, we attend to every detail with the utmost care, ensuring
							you enjoy the finest in entertainment—effortlessly and without
							compromise.
						</Text>
					</div>
				</div>
			</motion.div>
		</Box>
	);
};

export default YourAccess;
