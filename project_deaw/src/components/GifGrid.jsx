import { useEffect } from "react"
export const GifGrid = ({ category }) => {
    
    useEffect(() => {
        console.log(category) // eslint-disable-next-line
    }, [])

    return (
        <>
            <h3>{ category }</h3>
            <p>Hello World!</p>
        </>
    )
}