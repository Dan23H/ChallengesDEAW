/*
    Implement followed methods to handle counter:
    1. Increment
    2. Decrement
    3. Reset
    Use above hook into your current component.
*/

import { useState } from "react";

export const useCounter = (value) => {

    const [count, setCount] = useState(value);

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubstract = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(value);
    }

    return {
        count: count,
        add: handleAdd,
        substract: handleSubstract,
        reset: handleReset
    }
}