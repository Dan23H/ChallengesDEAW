import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef()
    
    const onClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />
            <input 
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
            />

            <button
                onClick={() => onClick()}>
                Focus
            </button>
        </>
    )
}