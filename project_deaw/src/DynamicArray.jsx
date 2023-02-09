import { useState } from "react";

export const DynamicArray = () => {
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')

    const addCategory = (evt) => {
        setCategory(evt.target.value)
    }
    
    const addCategories = () => {
        setCategories(array => [...array,category])
        setCategory('')
    }
    

    return (
        <>
            <h1>GifExpert</h1>
            <input onChange={(event) => addCategory(event)} value={category} type="text"></input>
            <button onClick={() => addCategories()} > + </button>
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