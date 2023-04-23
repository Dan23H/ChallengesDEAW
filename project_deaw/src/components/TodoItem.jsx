export const TodoItem = ({ todo, deleteTodo, onToggleTodo }) => {
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
                onClick={() => { deleteTodo(todo.id) }}
            >
                Borrar
            </button>
        </li>
    )
}