import { useTodoHook } from "../hooks/useTodoHook"
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

/*const initialState = [{
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}*/

export const TodoApp = () => {
    /*const [todos, dispatch] = useReducer(TodoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

     Forma tradicional:
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo
        }
        dispatchTodo(action)
    }
    

    const handleNewTodo = (todo) => {
        const action = {
            type: types.CREATE_TODO,
            payload: todo
        }
        dispatch(action)
    }*/
    const {todos, newTodo, deleteTodo, countTodos, countTodosP} = useTodoHook()

    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <div>
                <div>
                    <TodoList todos={todos} deleteTodo={deleteTodo} />
                </div>
                <div>
                    <TodoAdd onNewTodo={newTodo} />
                </div>
                <div>
                    <span>Total todos: {countTodos()}</span>
                    <span>Todos pendientes: {countTodosP()}</span>
                </div>
            </div>
        </>

    )
}