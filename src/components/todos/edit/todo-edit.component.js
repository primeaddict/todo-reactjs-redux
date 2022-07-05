import { useEffect, useState } from "react"
import Button from "../../common/button"
import s from "./todo-edit.module.scss"

const TodoEdit = ({ onSaveClick, currentTodo }) => {

    const [todo, setTodo] = useState(currentTodo);
    const { title = "", id = "" } = todo;

    const setTodoValue = (e) => {
        setTodo(() => ({ ...todo, [e.target.id]: e.target.value, id: id ? id : new Date().getTime(), isSelected: false }))
    }

    useEffect(() => {
        if (Object.keys(currentTodo).length) setTodo(currentTodo)
    }, [currentTodo])

    const onSaveClickLocal = (e) => {
        e.preventDefault()
        if (title) {
            onClearClick()
            onSaveClick(todo)
        }
    }

    const onClearClick = () => {
        setTodo(() => ({ title: "", id: "" }))
    }

    return (
        <div className={s.container}>
            <input id="title" onChange={setTodoValue} placeholder="Todo" autoFocus required value={title} />
            <Button label="Save" onClick={onSaveClickLocal} />
            {todo.id && <Button label="Clear" onClick={onClearClick} style={{ color: "white", background: "#f55a5a" }} />}
        </  div>
    )
}

export default TodoEdit