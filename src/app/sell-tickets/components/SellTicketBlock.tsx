import SellTicketForm from './SellTicketForm';
import Box from '@/components/Box';
import Text from '@/components/Text';
import { SellTicketTitle } from './SellTicketTitle';
import { SellTicketCode } from './SellTicketCode';
import { Divider } from '@/components/Divider';

export const SellTicketBlock = () => {
	return (
		<Box className='flex justify-center py-32'>
			<div className='flex flex-col gap-8 w-[570px] py-8 px-4 md:px-9 bg-beige border-2 border-black'>
				<SellTicketTitle />
				<Divider/>
				<div className=''>
					<Text className='text-sm text-center uppercase'>Fill form</Text>
					<SellTicketForm />
				</div>
				<SellTicketCode />
			</div>
		</Box>
	);
};
