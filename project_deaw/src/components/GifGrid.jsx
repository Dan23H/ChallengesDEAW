import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {
    const {images,isLoading} = useFetchGifs( category ) 
    
    return (
        <>
            <h3>{ category }</h3>
            <div className="GifsCSS">
                {
                    images.map((image,key) => {
                        return <GifItem key={key} {...image} ></GifItem>
                    })
                }
            </div>
        </>
    )
}
