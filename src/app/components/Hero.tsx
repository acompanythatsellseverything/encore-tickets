import React from 'react';
import Image from 'next/image';

interface IProps {
	title?: string;
	image?: string;
}
const Hero = (props: IProps) => {
	return (
		<div className='relative'>
			{props.image ? (
					<Image
						src={props.image}
						alt={'Hero img'}
						width={1440}
						height={766}
						className={'w-full h-[600px] md:h-screen'}
					/>
				)
				: <div>
					<video
						width="100%"
						height="600px"
						autoPlay
						muted
						loop
						className="h-[600px] md:h-screen object-cover"
					>
						<source src="/vid/hero.mp4" type="video/mp4"/>
						Your browser does not support the video tag.
					</video>
				</div>
			}
			<div className='absolute inset-0 flex flex-col items-center justify-center -tracking-tight'>
				<h1 className='text-white font-black text-2xl md:text-4xl italic uppercase text-center'>
					{props.title}
				</h1>
				<button
					className='py-4 px-6 mt-20 bg-white text-sm md:text-base text-secondary mix-blend-difference uppercase'>
					Contact Us
				</button>
			</div>
			<div
				className='absolute bg-beige bottom-0 z-10 h-16 md:h-48 w-full rounded-t-[40px_40px_0_0] [clip-path:ellipse(52%_30px_at_50%_100%)] md:[clip-path:ellipse(52%_80px_at_50%_100%)]'
			>
			</div>
		</div>
	);
};

export default Hero;
