import { useState } from "react"
/// const categories = ['Primera Categoría', 'Segunda Categoría']
export const ComponentApp = () => {
    // Challenge3:
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const addingCategories = () => {
        setCategories(array => [...array, category])
        setCategory('')
    }
    const settingCategory = (evt) => {
        setCategory(evt.target.value)
    }

    const subtractingCategories = () => {
        if (categories.length > 0) {
            categories.pop()
            setCategories(array1 => [...array1])
        }
    }
    return (
        <>
            <h1>GifExpert</h1>
            <input type="text" value={category} onChange={(event) => { settingCategory(event) }} />
            <button onClick={() => addingCategories()}> + </button>
            <button onClick={() => subtractingCategories()}> - </button>
            <ol>
                {
                    categories.map(
                        (category, key) => {
                            return <li key={key}>{category}</li>
                        }
                    )
                }
            </ol>
        </>
    )
}