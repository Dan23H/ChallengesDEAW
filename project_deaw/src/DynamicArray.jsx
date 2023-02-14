import { useState } from "react";

export const DynamicArrayTraditional = () => {
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')

    const addCategory = (evt) => {
        setCategory(evt.target.value)
    }

    const addCategories = () => {
        setCategories(array => [...array, category])
        setCategory('')
    }

    const removeCategories = () => {
        if (categories.length > 0) {
            categories.pop()
            setCategories(array1 => [...array1])
        }
    }


    return (
        <>
            <h1>GifExpert</h1>
            <input onChange={(event) => addCategory(event)} value={category} type="text"></input>
            <button onClick={() => addCategories()} > + </button>
            <button onClick={() => removeCategories()}> Remove </button>
            <ol>
                {
                    categories.map(
                        (valor, llave) => {
                            return <li key={llave}>{valor}</li>
                        }
                    )
                }
            </ol>
        </>
    )
} 

import { AddCategory, GifGrid } from './components'

export const DynamicArrayReact = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = ( category ) => {
        setCategories( list => [...list, category])
    }

    return (
        <>
            <h1>GifExpert</h1>

            <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map(
                    (category, key) =>
                    {
                        return <GifGrid category={ category } key={key} />
                    }
                )
            }
        </>
    )
}