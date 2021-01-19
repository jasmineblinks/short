
export default async function shortenURL(value){
   const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
  const data = await res.json();
  console.log(data.result.short_link2)     
}