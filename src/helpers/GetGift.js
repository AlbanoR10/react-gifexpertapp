export const getGifts = async (category) => {
    console.log(category)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=DRfAuOJRJ111aV4AAUvJaeqD1p1Brm7B&q=${encodeURI(category)}&limit=5`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gif = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
    }))
    // console.log(gif)
    return gif;
}