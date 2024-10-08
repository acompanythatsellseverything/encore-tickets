'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import ContactModal from "@/components/ContactModal";

interface IProps {
	title?: string;
	image?: string;
	element?: any
}
const Hero = (props: IProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<div className='relative'>
				{props.element && (
					(props.element.cover.ext === '.mp4' || props.element.cover.ext === '.mpeg' || props.element.cover.ext === '.quicktime' || props.element.cover.ext === '.wmv' || props.element.cover.ext === '.avi' || props.element.cover.ext === '.flv') ?
						<div>
							<video
								width="100%"
								height="600px"
								autoPlay
								muted
								loop
								className="h-[600px] md:h-screen object-cover"
							>
								<source src={`${process.env.API_URL}${props.element.cover.url}`} type="video/mp4"/>
								Your browser does not support the video tag.
							</video>
						</div>
						: <Image
							src={`${process.env.API_URL}${props.element.cover.url}`}
							alt={'Hero img'}
							width={1440}
							height={766}
							className={'w-full h-[600px] md:h-screen'}
						/>

				)}
				{!props.element && (
					<div>
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
				)}
				<div className='absolute inset-0 flex flex-col items-center justify-center -tracking-tight'>
					<div className='flex w-full flex-col gap-2'>
						<h1 className='text-white font-black text-2xl md:text-4xl italic uppercase text-center'>
							{props.title ? props.title : "Your Access to Elevating Experiences"}
						</h1>
						{props.element && <p className='text-white font-black text-2xl md:text-4xl italic uppercase text-center'>{props.element.city}</p>}
						{props.element && <p className='text-white font-black text-2xl md:text-4xl italic uppercase text-center'>{props.element.date}</p>}
					</div>

					<button
						className='py-4 px-6 mt-20 bg-white text-sm md:text-base text-secondary mix-blend-difference uppercase'
						onClick={() => setIsModalOpen(true)}
					>
						Contact Us
					</button>
				</div>
				<div
					className='absolute bg-beige bottom-0 z-10 h-16 md:h-48 w-full rounded-t-[40px_40px_0_0] [clip-path:ellipse(52%_30px_at_50%_100%)] md:[clip-path:ellipse(52%_80px_at_50%_100%)]'
				>
				</div>
				<ContactModal
					isOpen={isModalOpen}
					onClose={() => setIsModalOpen(false)}
				/>
			</div>
		</>

	);
};

export default Hero;
