
  
import { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem"
import { TodoInput } from "./TodoInput"
import "./Todo.css"

export const Todo = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (data) => {
        const t = {
            id: 1,
            title: data,
            status: false
        }
        setTodos([...todos, t])
    }
    return (
        <div className="mainDiv">
            <div className="Divtodo">
                { todos.map((e) => (
                    <TodoItem  todo={e} key={e.id}  />
                   
                ))}
            </div>
            <TodoInput handleAdd={ addTodo } />
            Note: - run localhost 
        </div>
    )
}