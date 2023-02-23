import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs"

export const useFetchGifs = (category) => {
    const [gifsList, setGifsList] = useState([]);

    const newFunction = async () => {
        const gifsList = await getGifs(category)
        setGifsList(gifsList)
    }


    useEffect(() => {
        newFunction(); // eslint-disable-next-line
    }, [])
    return {
        images: gifsList,
        isLoading: false,
        error: null
    }
}