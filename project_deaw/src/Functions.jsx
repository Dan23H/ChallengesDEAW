
const Function = ({ value }) => {
    const handleAdd = () => {
        console.log('calling handleAdd')
    }

    return (
        <>
            <h1> Counter </h1>
            <span> { value } </span>
            <br/>
            <button onClick={ () => handleAdd() }> +1 </button>
        </>
    )
} 
export default Function;