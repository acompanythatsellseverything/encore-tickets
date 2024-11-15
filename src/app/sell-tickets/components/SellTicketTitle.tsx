import Title from '@/components/Title';
import Subtitle from '@/components/Subtitle';
import Text from '@/components/Text';

export const SellTicketTitle = () => {
	return (
		<div className='flex flex-col gap-8 justify-between px-4'>
			<Title className='text-lg md:text-xl font-extrabold normal-case'>
				Sell Tickets
			</Title>
			<Text className='text-sm'>
				Unable to attend an exclusive event for which you hold a coveted ticket?
				<br />
				<br />
				Encore Experiences offers a seamless and discreet service to connect you
				with discerning buyers who will appreciate your rare, hard-to-come-by
				tickets. Simply complete the form below, and we will assist in finding
				the perfect match for your unique event.
			</Text>
			<Text className='text-sm md:text-center'>BY PHONE</Text>
			<Subtitle className='underline text-start md:text-center'>
			(240) 690.6136
			</Subtitle>
		</div>
	);
};
