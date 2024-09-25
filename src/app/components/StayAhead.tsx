'use client';
import Box from '@/components/Box';
import Title from '@/components/Title';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { MockEvents } from '@/data/MockEvents';
import ContactModal from '@/components/ContactModal';
import { motion } from 'framer-motion';
import Text from '@/components/Text';
import { data } from 'framer-motion/client';
import { HOST } from '../[event]/[place]/[date]/page';

interface ISliderProps {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	data: any[];
}

const Slider: React.FC<ISliderProps> = ({ setIsModalOpen, data }) => {
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
						className='w-72 h-96 relative overflow-hidden'
						key={i}
						onClick={() => setIsModalOpen(true)}
					>
						{card?.cover?.url && (
							<Image
								src={`${HOST}${card.cover.url}`}
								width={280}
								height={380}
								alt={card.title}
								className='object-cover hover:scale-110 transition-all duration-500 '
								layout='responsive'
							/>
						)}
						<div className='absolute bottom-5 left-5 text-black'>
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
}

const StayAhead = ({ data }: IProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

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
				<Slider data={data} setIsModalOpen={setIsModalOpen} />
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
