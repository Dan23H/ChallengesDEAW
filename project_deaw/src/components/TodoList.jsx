import { TodoItem } from "./TodoItem"
export const TodoList = ({todos = [], deleteTodo}) => {
    return (
        <ul>
           {
            todos.map((todo, key) => {
                return(
                    <TodoItem key={key} todo={todo} deleteTodo={deleteTodo} />
                )
            })
           } 
        </ul>
    )
}