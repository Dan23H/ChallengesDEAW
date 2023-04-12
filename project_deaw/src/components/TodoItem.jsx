export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li>
            <span
                onClick={() => onToggleTodo(todo.id)}
                className={
                    `align-selft-center
                    ${todo.done ? 'text-decoration-line-through' : ''}`
                }
            >
                {todo.description}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => { onDeleteTodo(todo.id) }}
            >
                Borrar
            </button>
        </li>
    )
}