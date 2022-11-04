import { useState } from "react"
import "./TodoInput.css"

export const TodoInput = ({ handleAdd }) => {
    const [text, setText] = useState([])
    return (
        <div className="DivInput">
            <input 
            className="input1"
            type="text"
            placeholder="add Task"
            onChange={(e) => {
                setText(e.target.value)
            }}
             />
             <button className="button1"
             onClick={() => {
                handleAdd(text)
                fetch("http://localhost:4000/TodoList", {
                    method: "POST",
                    body: JSON.stringify({ title: text, purchased: false }),
                    headers: {
                        "content-type": "application/json"
                    },
                })
             }} 
             > Add Task</button>
            
        </div>
    )
}