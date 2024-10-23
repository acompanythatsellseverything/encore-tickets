import { SellTicketBlock } from './components/SellTicketBlock';
import {Metadata} from "next";

export const metadata: Metadata = {
	title: 'Encore Tickets: Sell Tickets',
	description: 'Discover personalized premium experiences for concerts, sports, theater, and festivals worldwide. Get VIP access and elevate your event journey with Encore Tickets',
	keywords: 'VIP tickets, premium live events, concert tickets, sports tickets, theater experiences, festival tickets, exclusive events, personalized event experiences, Encore Tickets',
	openGraph: {
		title: 'Encore Tickets: Sell Tickets',
		description: 'Discover personalized premium experiences for concerts, sports, theater, and festivals worldwide. Get VIP access and elevate your event journey with Encore Tickets',
		siteName: 'ENCORE TICKETS',
	},
	twitter: {
		title: 'Encore Tickets: Sell Tickets',
		description: 'Discover personalized premium experiences for concerts, sports, theater, and festivals worldwide. Get VIP access and elevate your event journey with Encore Tickets',
	},
};

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
