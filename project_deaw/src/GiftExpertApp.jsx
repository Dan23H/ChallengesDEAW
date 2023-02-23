import { useState } from "react"
import { AddCategory, GifGrid } from "./components"
export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Zodiac'])
    const onAddCategory = (category) => {
        setCategories(array => [...array, category])
    }

    return (
        <>
            <h1>GifExpert</h1>

            <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map(
                    (category, key) => {
                        return <GifGrid category={category} key={key} />
                    }
                )
            }

        </>
    )
}