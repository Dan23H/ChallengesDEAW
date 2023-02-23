import { useEffect, useState } from "react"
const getGifs = async (category) => {
    const url = ``
}

export const GifGrid = ({ category }) => {
    const [images,getImages] = useState([])
    getGifs = async() => {
        console.log(images)
    }
    useEffect(() => {
        getGifs() // eslint-disable-next-line
    }, [])

    return (
        <>
            <h3>{ category }</h3>
            <p>Hello World!</p>
        </>
    )
}