import React, { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
    const { count, add } = useCounter(10)
    const [first, setFirst] = useState(10)

    return (
        <>
            <h1>Memorize <Small value={count} /></h1>
            <button
                className="btn btn-primary"
                onClick={() => add()}>
                +1
            </button>
            <button
                className="btn btn-primary"
                onClick={() => setFirst(20)}>
                First 
            </button>
        </>
    )
}