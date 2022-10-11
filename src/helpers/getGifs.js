export const getGifs = async (category) => {
  const api_key='L1JtQ9dpG1gNT4ESjVcMMBS1GXWh25e6'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=20`

  const res = await fetch(url);

  const { data=[] } = await res.json()

  const gifs = data.map((image) => (
    {
      id: image.id,
      title: image.title,
      url: image.images.downsized_medium.url
    }
  ));


  console.log(gifs)
    return gifs;
}