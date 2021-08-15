export default async function newsHeadlineService(country)
{
try
{
  const baseUrl="https://gnews.io/api/v4/top-headlines?token=304aa793b6c80154472b3db4fd6b6265&country=";
  const endpointUrl=baseUrl+country
  const headlines=await fetch(endpointUrl).then(response=>response.json())
  return headlines.articles
}
catch(err)
{
    console.log(err)
    return []
}
}