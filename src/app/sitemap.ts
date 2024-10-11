import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const res = await fetch(`${process.env.API_URL}/api/articles?populate=*`, {
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.API_TOKEN!,
        },
    });

    const { data } = await res.json();
    // console.log(data)

    const urls = data.map((article: any) => {
        return {
            url: `https://acg-properties.com/${article.slug}`,
            lastModified: new Date(article.updatedAt),
            changeFrequency: 'daily',
            priority: 0.8,
        };
    });

    const staticUrls = [
        {
            url: 'https://acg-properties.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];

    return [...staticUrls, ...urls];
}
