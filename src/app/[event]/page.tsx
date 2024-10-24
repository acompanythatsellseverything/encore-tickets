import CreatingJourneys from '@/app/components/CreatingJourneys';
import StayAhead from '@/app/components/StayAhead';
import JoinUs from '@/app/components/JoinUs';
import React from 'react';
import Hero from '@/app/components/Hero';

export async function generateMetadata({ params }: { params: any }) {

	const res = await fetch(
		`${process.env.API_URL}/api/articles?filters[slug][$contains]=${params.event}&populate=*`,
		{
			method: 'GET',
			cache: "no-cache",
			headers: {
				'Content-Type': 'application/json',
				Authorization: process.env.API_TOKEN!,
			},
		}
	)

	const data = await res.json();
	const element = data.data[0];
	return {
		title: element.metaTitle,
		description: element.metaDescription,
		keywords: element.metaKeywords,
		openGraph: {
			title: element.metaTitle,
			description: element.metaDescription,
			siteName: 'ENCORE TICKETS',
			images: [`${process.env.API_URL}${element.stay_ahead.url}`]
		},
		twitter: {
			title: element.metaTitle,
			description: element.metaDescription,
			images: [`${process.env.API_URL}${element.stay_ahead.url}`]
		},
	};
}

export default async function Home({ params }: { params: any }) {
	// console.log('Params - ', params);

	// Fetch some event
	const res = await fetch(
		`${process.env.API_URL}/api/articles?filters[slug][$contains]=${params.event}&populate=*`,
		{
			method: 'GET',
			cache: "no-cache",
			headers: {
				'Content-Type': 'application/json',
				Authorization: process.env.API_TOKEN!,
			},
		}
	);


	const data = await res.json();
	const element = data.data[0];
	// console.log('Element - ', element)

	// Fetch all events from this category
	const resStay = await fetch(
		`${process.env.API_URL}/api/articles?filters[event_type][id]=${element.event_type.id}&filters[id][$ne]=${element.id}&filters[title][$ne]=${element.title}&populate=*`,
		{
			method: 'GET',
			cache: "no-cache",
			headers: {
				'Content-Type': 'application/json',
				Authorization: process.env.API_TOKEN!,
			},
		}
	)
	const {data: stayData} = await resStay.json();
	// console.log('Stay data - ', stayData)
	// @ts-ignore
	const uniqueStayData = stayData.filter((article, index, self) =>
		index === self.findIndex((a:any) => a.title === article.title)
	);
	return (
		<main className='bg-beige w-full flex-1 '>
			<Hero
				title={element?.title}
				element={element}
				apiUrl={process.env.API_URL!}
			/>
			<CreatingJourneys />
			<StayAhead data={uniqueStayData} apiUrl={process.env.API_URL!} />
			<JoinUs />
		</main>
	);
}
