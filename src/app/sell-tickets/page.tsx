import { SellTicketBlock } from './components/SellTicketBlock';

export default function page() {
	return (
		<main className='bg-beige w-full flex-1 pt-16 md:pt-44'>
			<div className='relative'>
				<div
					className='absolute z-0 w-full h-full bg-sell-tickets-mob bg-auto bg-fixed 
						md:bg-sell-tickets md:bg-no-repeat md:bg-scroll md:bg-center md:bg-contain'
						style={{
							
						}}
				>
				</div>
				<div className='relative z-10'>
					<SellTicketBlock />
				</div>
			</div>
		</main>
	);
}
