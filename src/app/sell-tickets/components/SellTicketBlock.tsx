'use client'
import SellTicketForm from './SellTicketForm';
import Box from '@/components/Box';
import Text from '@/components/Text';
import { SellTicketTitle } from './SellTicketTitle';
import { SellTicketCode } from './SellTicketCode';
import { Divider } from '@/components/Divider';
import { motion } from 'framer-motion';

export const SellTicketBlock = () => {
	return (
		<Box className='flex justify-center pt-36'>
			<motion.div
				initial={{opacity: 0, x: 200}}
				whileInView={{opacity: 1, x: 0}}
				transition={{duration: 0.7, type: "spring", stiffness: 50}}
				viewport={{once: true, amount: 0.05}}
			>
				<div className='flex flex-col gap-8 md:w-[570px] py-8 md:px-9 bg-beige border-2 border-secondary'>
					<SellTicketTitle/>
					<Divider/>
					<div className='px-4'>
						<Text className='text-sm text-center uppercase'>Fill form</Text>
						<SellTicketForm/>
					</div>
					<SellTicketCode/>
				</div>
			</motion.div>

		</Box>
	);
};
