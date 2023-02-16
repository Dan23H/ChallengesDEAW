import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "./GetGifs"

export const GifGrid = ({ category }) => {
    const [gifsList, setGifsList] = useState([]);

    const newFunction = async() => {
        const gifsList = await getGifs(category)
        setGifsList(gifsList)
    }

    
    useEffect(() => {
        newFunction(); // eslint-disable-next-line
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className="GifsCSS">
                {
                    gifsList.map((image, key) => {
                        return <GifItem key={key} {...image}></GifItem>
                    })
                }
            </div>
        </>
    )

}