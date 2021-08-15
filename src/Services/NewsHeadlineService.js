export default async function newsHeadlineService(country) {
    try {
        const baseUrl = "https://gnews.io/api/v4/top-headlines?token=6df4a91ddccf4f4fcbd8812fa447d560&country=";
        const endpointUrl = baseUrl + country
        const headlines = await fetch(endpointUrl).then(response => response.json())
        return headlines.articles
    } catch (err) {
        console.log(err)
        return []
    }
}
