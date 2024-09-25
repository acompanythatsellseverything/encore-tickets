import CreatingJourneys from '@/app/components/CreatingJourneys';
import StayAhead from '@/app/components/StayAhead';
import JoinUs from '@/app/components/JoinUs';
import React from 'react';
import Hero from '@/app/components/Hero';

// or Dynamic metadata
// export async function generateMetadata({ params }: { params: any }) {
// 	return {
// 		title: 'Test metadata',
// 		description: 'Test description',
// 	};
// }

const api_key =
	'Bearer 56c9378cf8d5f88877bac67b55894b62bf92807b1f2d17e060028947be72c53088c14637e79a95bade9521fadb4fe41c6cfeb7b7692bccc48aa403661f20c1dc8ef7243587d2fb7c257bcfaf523cb290f801ea5cf7277fa2fdd754f5d4a6d1316a8855d4ae54509dd7321705bc3803bc53f0ec630fc7498729fa9ba3200bd926';

export const HOST = 'https://6462-46-201-91-62.ngrok-free.app';

export default async function Home({ params }: { params: any }) {
	const res = await fetch(
		`${HOST}/api/articles?filters[title][$contains]=${params.event}&populate=*`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: api_key,
			},
		}
	);
	const data = await res.json();
	const element = data.data[0];

	const resStay = await fetch(
		`${HOST}/api/articles?filters[event_type][id]=${element.event_type.id}&populate=*`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: api_key,
			},
		}
	);
	const {data: stayData} = await resStay.json();

	console.log('params', stayData.length);
	return (
		<main className='bg-beige w-full flex-1 '>
			<Hero
				title={element?.title}
				image={
					element?.cover.url
						? `${HOST}${element.cover.url}`
						: undefined
				}
			/>
			<CreatingJourneys />
			<StayAhead data={stayData} />
			<JoinUs />
		</main>
	);
}
