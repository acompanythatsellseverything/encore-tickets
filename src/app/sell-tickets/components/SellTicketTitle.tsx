import Title from '@/components/Title';
import Subtitle from '@/components/Subtitle';
import Text from '@/components/Text';

export const SellTicketTitle = () => {
	return (
		<div className='flex flex-col gap-8 justify-between px-4'>
			<Title className='text-lg md:text-xl font-extrabold normal-case'>Sell Tickets</Title>
			<Text className='text-sm'>
				Got a ticket to an exclusive event you can’t attend?
				<br />
				<br />
				Encoretixmakes it easy to sell your unique, hard-to-get tickets to
				someone who values them just as much as you do. Fill out the form below,
				and we’ll help you find the right buyer for your one-of-a-kind event.
			</Text>
			<Text className='text-sm md:text-center'>BY PHONE</Text>
			<Subtitle className='underline text-start md:text-center'>240-690-6136</Subtitle>
		</div>
	);
};
