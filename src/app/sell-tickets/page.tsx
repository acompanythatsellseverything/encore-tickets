import Image from 'next/image';
import { SellTicketBlock } from './components/SellTicketBlock';

export default function page() {
	return (
		<main className='bg-beige w-full flex-1 pt-16 md:pt-44'>
			<div className='relative'>
				<div className='absolute z-0 w-full h-full md:top-32 bg-sell-tickets-mob bg-auto md:bg-none'>
					<Image
						src={'/img/sell-tickets/hero.png'}
						alt={'Hero img'}
						width={1440}
						height={766}
						className={'hidden md:block w-full h-full md:h-[96vh]  md:object-cover lg:object-fill'}
					/>
				</div>
				<div className='relative z-10'>
					<SellTicketBlock/>
				</div>
			</div>
		</main>
	);
}
