import CreatingJourneys from '@/app/components/CreatingJourneys';
import StayAhead from '@/app/components/StayAhead';
import JoinUs from '@/app/components/JoinUs';
import React from 'react';
import Hero from '@/app/components/Hero';

// or Dynamic metadata
export async function generateMetadata({ params }: { params: any }) {
	console.log(params)
	return {
		title: 'Test metadata',
        description: 'Test description'
	};
}

export default async function Home() {
	return (
		<main className='bg-beige w-full flex-1 '>
			<Hero />
			<CreatingJourneys />
			<StayAhead />
			<JoinUs />
		</main>
	);
}
