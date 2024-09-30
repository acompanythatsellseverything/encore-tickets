import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const res = await fetch(`${process.env.API_URL}/api/articles?populate=*`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.API_TOKEN!,
        },
    });

    const { data } = await res.json();

    const urls = data.map((article: any) => ({
        url: `https://encore-tickets.com/${article.slug}`,
        lastModified: new Date(article.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    const staticUrls = [
        {
            url: 'https://encore-tickets.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];

    return [...staticUrls, ...urls];
}
