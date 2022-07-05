
import Button from "../../common/button"
import s from "./todo-list.module.scss"

const TodoList = ({ list = [], onEditClick, onDeleteClick, onTodoSelect }) => {

    const renderTodoList = (list) => {
        return (
            <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                {list.length ? list.map(todo => {
                    return (
                        <div key={todo.id} className={s.todoElementContainer}>
                            <div className={s.todoElementTitle}>
                                <div >
                                    <input
                                        id="selected"
                                        type="checkbox"
                                        checked={todo.isSelected}
                                        onChange={() => { onTodoSelect(todo) }}
                                    />
                                    {/* <input checked={todo.isSelected} defaultChecked={todo.isSelected} id={todo.id} onClick={() => onTodoSelect(todo)} type="radio" /> */}
                                    {todo.title}
                                </div>
                                <div>
                                    <Button onClick={() => onDeleteClick(todo)} className={s.todoElementButton} label="Delete" />
                                    <Button onClick={() => onEditClick(todo)} className={s.todoElementButton} label="Edit" />
                                </div>
                            </div>
                        </div>
                    )
                })
                    :
                    <p>No Todos Added</p>
                }
            </div>
        )
    }


    return (
        <div className={s.container}>
            {renderTodoList(list)}
        </div>
    )
}

export default TodoList