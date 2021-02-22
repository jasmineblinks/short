export default async function shortenURL(value, setResult) {
  let el = document.getElementById("link_shortner");
  // console.log(el);
  const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${el.value}`);

  const data = await res.json();
  setResult(data.result.short_link);
}
