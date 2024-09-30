export async function generateMetadata({ params }: { params: any }) {

    const res = await fetch(
        `${process.env.API_URL}/api/articles?filters[title][$contains]=${params.event}&populate=*`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: process.env.API_TOKEN!,
            },
        }
    )

    const data = await res.json();
    const element = data.data[0];
    // console.log('Meta Title - ', element);
    return {
        title: element.metaTitle,
        description: element.metaDescription,
        keywords: element.metaKeywords,
    };
}