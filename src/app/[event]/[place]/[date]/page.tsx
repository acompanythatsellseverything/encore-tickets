import CreatingJourneys from '@/app/components/CreatingJourneys';
import StayAhead from '@/app/components/StayAhead';
import JoinUs from '@/app/components/JoinUs';
import React from 'react';
import Hero from '@/app/components/Hero';
import {MockEvents} from "@/data/MockEvents";

// or Dynamic metadata
// export async function generateMetadata({ params }: { params: any }) {
// 	return {
// 		title: 'Test metadata',
// 		description: 'Test description',
// 	};
// }

const api_token = 'Bearer 56c9378cf8d5f88877bac67b55894b62bf92807b1f2d17e060028947be72c53088c14637e79a95bade9521fadb4fe41c6cfeb7b7692bccc48aa403661f20c1dc8ef7243587d2fb7c257bcfaf523cb290f801ea5cf7277fa2fdd754f5d4a6d1316a8855d4ae54509dd73217045bc3803bc53f0ec630fc7498729fa9ba3200bd926'

// export const HOST = 'https://c3c1-46-201-91-62.ngrok-free.app';

export default async function Home({ params }: { params: any }) {
	// console.log(params);
	const res = await fetch(
		`${process.env.API_URL}/api/articles?filters[title][$contains]=${params.event}&populate=*`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: process.env.API_TOKEN!,
			},
		}
	);

	const data = await res.json();
	// console.log('Data - ', data)
	const element = data.data[0];
	// console.log('Element - ', element)
	const resStay = await fetch(
		`${process.env.API_URL}/api/articles?filters[event_type][id]=${element.event_type.id}&populate=*`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: process.env.API_TOKEN!,
			},
		}
	);
	const {data: stayData} = await resStay.json();
	// console.log('Stay data - ', stayData);
	return (
		<main className='bg-beige w-full flex-1 '>
			<Hero
				title={element?.title}
				image={
					element?.cover.url
						? `${process.env.API_URL}${element.cover.url}`
						: undefined
				}
			/>
			<CreatingJourneys />
			<StayAhead data={stayData.length > 0 ? stayData : MockEvents} apiUrl={process.env.API_URL!} />
			<JoinUs />
		</main>
	);
}
