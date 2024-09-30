'use client';
import Box from '@/components/Box';
import Title from '@/components/Title';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import ContactModal from '@/components/ContactModal';
import { motion } from 'framer-motion';
import Text from '@/components/Text';

interface ISliderProps {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	data: any[];
	apiUrl?: string
}

const Slider: React.FC<ISliderProps> = ({ setIsModalOpen, data, apiUrl }) => {
	const sliderRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleMouseDown = (e: {
		preventDefault: () => void;
		pageX: number;
	}) => {
		e.preventDefault();
		setIsDragging(true);
		// @ts-ignore
		setStartX(e.pageX - sliderRef.current.offsetLeft);
		// @ts-ignore
		setScrollLeft(sliderRef.current.scrollLeft);
	};

	const handleMouseLeave = () => {
		setIsDragging(false);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e: {
		preventDefault: () => void;
		pageX: number;
	}) => {
		if (!isDragging) return;
		e.preventDefault();
		// @ts-ignore
		const x = e.pageX - sliderRef.current.offsetLeft;
		const walk = (x - startX) * 2;
		// @ts-ignore
		sliderRef.current.scrollLeft = scrollLeft - walk;
	};

	return (
		<div
			className='relative mt-10 md:mt-24 overflow-x-scroll overflow-y-clip scrollbar-hide cursor-grab active:cursor-grabbing select-none'
			ref={sliderRef}
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseLeave}
			onMouseUp={handleMouseUp}
			onMouseMove={handleMouseMove}
			onDragStart={(e) => e.preventDefault()}
		>
			<div className='flex gap-5 relative w-max'>
				{data.map((card, i) => (
					<div
						className='w-72 h-96 relative overflow-hidden object-cover'
						key={i}
						onClick={() => setIsModalOpen(true)}
					>
						{card?.stay_ahead?.url ? (
								<Image
									src={`${apiUrl}${card.stay_ahead.url}`}
									alt={card.title}
									layout="fill"
									objectFit="cover"
									className='hover:scale-110 transition-all duration-500'
								/>
						)
						: (
								<Image
									src={card.img}
									// width={280}
									// height={380}
									alt={card.title}
									layout="fill"
									objectFit="cover"
									className='hover:scale-110 transition-all duration-500'
								/>
							)
						}
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

interface IProps {
	data: any[];
	apiUrl?: string
}



const StayAhead = ({ data, apiUrl }: IProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	// console.log('Data', data)
	return (
		<Box className='relative'>
			<motion.div
				initial={{ opacity: 0, x: -200 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.7, type: 'spring', stiffness: 50 }}
				viewport={{ once: true, amount: 0.05 }}
			>
				<Title>
					Stay ahead of the crowd with our
					<br className='hidden md:block' /> selection of trending events
				</Title>
				<Text className='text-center mt-7 md:w-2/3 mx-auto text-sm md:text-base'>
					From the hottest concerts and must-see theater shows to thrilling
					sports matches and exclusive festivals, these are the events everyone
					is talking about.
				</Text>
				<Slider data={data} setIsModalOpen={setIsModalOpen} apiUrl={apiUrl} />
				<div className='flex justify-center mt-16 md:mt-8'>
					<button
						className='uppercase bg-inherit border border-secondary text-sm text-secondary md:text-xl px-8 py-4 hover:bg-secondary hover:text-white transition-all duration-500'
						onClick={() => setIsModalOpen(true)}
					>
						Contact Us
					</button>
				</div>

				<ContactModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			</motion.div>
		</Box>
	);
};

export default StayAhead;
