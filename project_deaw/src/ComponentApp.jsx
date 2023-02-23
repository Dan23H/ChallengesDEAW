/// const categories = ['Primera Categoría', 'Segunda Categoría']
export const ComponentApp = () => {
    // Challenge3:
    const [categories,setCategories] = useState([])
    const [category, setCategory] = useState('')
    const onAddCategory = () => {
        setCategories(array => [...array, category])
        setCategory('')
    }
    const onSetCategory = (evt) => {
        setCategory(evt.target.value)

    }
    return(
        <>
            <h1>GifExpert</h1>
            <input type="text" value={category} onChange={(event) => {onSetCategory(event)}} />
            <button onClick={() => onAddCategory()}> Add Category </button>
            <ol>
                {
                    categories.map(
                        (category, key) => 
                        {
                            return <li key={key}>{ category }</li>
                        }
                    )
                }
            </ol>
        </>
    )
}