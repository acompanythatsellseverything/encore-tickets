import Image from 'next/image';
import { SellTicketBlock } from './components/SellTicketBlock';

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
					<SellTicketBlock/>
				</div>
			</div>
		</main>
	);
}
