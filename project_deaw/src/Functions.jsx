import { useState } from "react";

const Function = ({ value }) => {
    const [counter, setCounter] = useState( value );
    
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <h1> Counter </h1>
            <span> { counter } </span>
            <br/>
            <button onClick={ () => handleAdd() }> +1 </button>
        </>
    )
} 
export default Function;