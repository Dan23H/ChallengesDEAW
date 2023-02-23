import { useState } from "react";

export const Counter = ({value}) => {
    const [counter, setCounter] = useState( value )

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    // Challenge 2:
    const handleSustract = () => {
        setCounter(counter - 1)
    }
    
    const handleReset = () => {
        setCounter(value)
    }

    return (
        <>
            <h1>Counter</h1>
            <span>{ counter }</span>
            <button onClick={ () => handleAdd()}> +1 </button>
            <button onClick={ () => handleSustract()}> -1 </button>
            <button onClick={ () => handleReset()}> RESET </button>
        </>
    )
}