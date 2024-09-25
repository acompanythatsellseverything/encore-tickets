import React from 'react';
import Image from 'next/image';

interface IProps {
	title?: string;
	image?: string;
}
const Hero = (props: IProps) => {
	return (
		<div className='relative'>
			{props.image && (
				<Image
					src={props.image}
					alt={'Hero img'}
					width={1440}
					height={766}
					className={'w-full h-[600px] md:h-[96vh]'}
				/>
			)}

			<div className='absolute inset-0 flex flex-col items-center justify-center -tracking-tight'>
				<h1 className='text-white font-black text-2xl md:text-4xl italic uppercase text-center'>
					{props.title}
				</h1>
				<button className='py-4 px-6 mt-20 bg-white text-sm md:text-base text-secondary mix-blend-difference uppercase'>
					Contact Us
				</button>
			</div>
		</div>
	);
};

export default Hero;
