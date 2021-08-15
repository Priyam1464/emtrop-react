export default async function newsHeadlineService(country)
{
try
{
  const baseUrl="https://gnews.io/api/v4/top-headlines?token=1e14cdeaceaef63deb0bbdf489c9a3ce&country=";
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