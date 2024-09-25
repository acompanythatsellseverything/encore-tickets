import Image from 'next/image';

export const SellTicketCode = () => {
	return (
		<div className='mt-8 px-2'>
			<Image
				className='m-auto'
				src={'/img/main/qr-code.png'}
				alt='code'
				width={300}
				height={45}
			/>
		</div>
	);
};
