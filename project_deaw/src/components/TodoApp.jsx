import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

const initialState = [{
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}]

export const TodoApp = () => {
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState)
    return (
        <>
            <h1>TodoApp</h1>
            <hr />
        </>
    )
}