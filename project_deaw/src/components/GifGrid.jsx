import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => { // eslint-disable-next-line
    const {gifsList, isLoading} = useFetchGifs( category )
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