import React from 'react';
import Image from 'next/image';
import MainForm from '@/app/components/MainForm';
import Title from '@/components/Title';
import Text from '@/components/Text';

const FormBook = () => {
	return (
		<div className='border border-secondary flex flex-col md:flex-row justify-between max-w-7xl'>
			<div className='mx-4 my-8 md:my-10 md:mx-10 md:w-1/2 flex flex-col justify-between'>
				<div>
					<Title className='md:text-start'>
						Exclusive VIP access to the world&apos;s most prestigious live events
					</Title>
					<Text className='mt-10 md:mt-8 '>
						For those seeking tickets to an exceptional experience, simply share
						your preferences with us, and Encore Experiences will curate a
						bespoke solution tailored to your desires. <br /><br /> Kindly complete the form,
						and our dedicated team will respond to you promptly. Should you wish
						to sell tickets, we invite you to contact us through the form
						provided.
					</Text>
				</div>
				<div className='mt-12 md:mt-4'>
					<Text className='uppercase text-sm'>by phone</Text>
					<Text className='font-bold underline mt-6 text-xl md:text-2xl'>
					(240) 690.6136
					</Text>
					<Image
						src={'/img/main/qr-code.png'}
						alt='Qr code'
						width={284}
						height={45}
						className='mt-12'
					/>
				</div>
			</div>
			<span className='border border-dashed border-gray-500 my-12 md:my-0'></span>
			<div className='mx-4 my-8 md:my-10 md:mx-10 md:w-1/2'>
				<MainForm />
			</div>
		</div>
	);
};

export default FormBook;
