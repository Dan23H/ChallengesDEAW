import { useState } from "react"

export const TodoAdd = ({ onNewTodo }) => {
    const [todo, setTodo] = useState('')
    const handleTodo = (e) => {
        setTodo(e.target.value)
    }
    const onFormSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            id: new Date().getTime(),
            description: `Hacer el proyecto ${todo}`,
            done: false
        }
        setTodo('')
        onNewTodo(newTodo)
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={(event) => onFormSubmit(event)}>
                <input
                    type="text"
                    placeholder="Agregar TODO"
                    value={todo}
                    onChange={(event) => handleTodo(event)}
                />
                <button
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </>

    )
}