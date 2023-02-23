import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => { // eslint-disable-next-line
    const {images, isLoading, error} = useFetchGifs( category )
    return (
        <>
            <h3>{category}</h3>
            <div className="GifsCSS">
                {
                    images.map((image, key) => {
                        return <GifItem key={key} {...image} />
                    })
                }
            </div>
        </>
    )

}