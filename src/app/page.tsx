import CreatingJourneys from '@/app/components/CreatingJourneys';
import StayAhead from '@/app/components/StayAhead';
import JoinUs from '@/app/components/JoinUs';
import React from 'react';
import Hero from '@/app/components/Hero';

export default async function Home() {
	const typesRes = await fetch(
		`${process.env.API_URL}/api/event-types`,
		{
			method: 'GET',
			cache: "no-cache",
			headers: {
				'Content-Type': 'application/json',
				Authorization: process.env.API_TOKEN!,
			},
		}
	);
	const types = await typesRes.json();

	const ids: number[] = types.data.map((event: { id: any; }) => event.id);

	const articlesPromises = ids.map(id =>
		fetch(
			`${process.env.API_URL}/api/articles?populate=*&sort[1]=createdAt:desc&pagination[limit]=4&filters[event_type][id]=${id}`,
			{
				method: 'GET',
				cache: "no-cache",
				headers: {
					'Content-Type': 'application/json',
					Authorization: process.env.API_TOKEN!,
				}
			}
		)
	);

	const articlesResponses = await Promise.all(articlesPromises)

	const articlesData = await Promise.all(articlesResponses.map(res => res.json()))

	const allArticles = articlesData.flatMap(data => data.data);

	function shuffle(array: any[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 2));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const shuffledArticles = shuffle(allArticles);

	return (
		<main className='bg-beige w-full flex-1 '>
			<Hero />
			<CreatingJourneys />
			<StayAhead data={shuffledArticles} apiUrl={process.env.API_URL!}/>
			<JoinUs />
		</main>
	);
}
