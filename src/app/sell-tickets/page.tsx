import Image from 'next/image';
import SellTicketForm from './components/SellTicketForm';
import Box from '@/components/Box';
import Text from '@/components/Text';
import { SellTicketTitle } from './components/SellTicketTitle';
import { SellTicketCode } from './components/SellTicketCode';

export default function page() {
	return (
		<main className='bg-beige w-full flex-1 pt-44'>
			<div className='relative'>
				<div className='absolute z-0 w-full top-32'>
					<Image
						src={'/img/sell-tickets/hero.png'}
						alt={'Hero img'}
						width={1440}
						height={766}
						className={'w-full h-[96vh]'}
					/>
				</div>
				<div className='relative z-10'>
					<Box className='flex justify-center'>
						<div className='flex flex-col gap-8 w-[570px] py-8 px-9 bg-beige border-2 border-black'>
							<SellTicketTitle/>
							<div className='mt-8'>
								<Text className='text-sm text-center uppercase'>Fill form</Text>
								<SellTicketForm />
							</div>
							<SellTicketCode/>
						</div>
					</Box>
				</div>
			</div>
		</main>
	);
}
