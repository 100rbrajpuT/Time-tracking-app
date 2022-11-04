import "./TodoItem.css"

export const TodoItem = ({ todo }) => {

    
    return (
        <div className="Divitem">
            { todo.title }
        </div>
    )
}