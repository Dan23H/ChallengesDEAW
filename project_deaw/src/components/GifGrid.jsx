import { useEffect, useState } from "react"
const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KYxmtA1qz27qrW5rSjakDwV8FCRLJHf2&q=${category}&limit=25&offset=0&rating=g&lang=en`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}

export const GifGrid = ({ category }) => {
    const [images,setImages] = useState([])
    getGifs = async() => {
        const images = await getGifs(category)
        setImages(images)
    }

    useEffect(() => {
        getGifs() // eslint-disable-next-line
    }, [])

    return (
        <>
            <h3>{ category }</h3>
            <div className="GifsCSS">
                {
                    images.map((image,key) => {
                        return GifItem(image,key)
                    })
                }
            </div>
        </>
    )
}

const GifItem = (image,key) => {
    return 
}