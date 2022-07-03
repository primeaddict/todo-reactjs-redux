import { useEffect, useState } from "react"
import Button from "../../common/button"
import s from "./todo-edit.module.scss"

const TodoEdit = ({ openEditPopup = false, onCloseClick, onSaveClick, currentTodo }) => {

    const [todo, setTodo] = useState(currentTodo);
    const { title = "", content = "", id = "" } = todo;

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
        setTodo(() => ({ title: "", content: "", id: "" }))
    }

    return (

        openEditPopup ?
            <div className={s.container} >
                <span onClick={onCloseClick} className={s.close}>✖</span>
                <div className={s.modal}>
                    <h1>Edit Todo </h1>
                    <form>
                        <input id="title" onChange={setTodoValue} placeholder="Title" autoFocus required value={title} />
                        {/* <textarea id="content" value={content} onChange={setTodoValue} placeholder="content" /> */}
                        <div className={s.buttonContainer}>
                            {todo.id && <Button label="Clear" onClick={onClearClick} style={{ color: "white", background: "#f55a5a" }} />}
                            <Button label="Save" onClick={onSaveClickLocal} />
                        </div>
                    </form>
                </div>
            </div >
            :
            null

    )
}

export default TodoEdit