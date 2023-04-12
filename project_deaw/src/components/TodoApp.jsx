import { useEffect, useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import * as types from './types'

const initialState = [{
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(TodoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    /* Forma tradicional:
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo
        }
        dispatchTodo(action)
    }
    */

    const handleNewTodo = (todo) => {
        const action = {
            type: types.CREATE_TODO,
            payload: todo
        }
        dispatch(action)
    }
    
    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <div>
                <div>
                    <TodoList todos={todos} />
                </div>
                <div>
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>

    )
}