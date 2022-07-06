
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

                                </div>
                                <div className={s.todoElementContent}> <span>
                                    {todo.title}</span></div>
                                <div>
                                    <Button style={{ color: "#ff4848" }} onClick={() => onDeleteClick(todo)} className={s.todoElementButton} label="Delete" />
                                    <Button style={{ color: "#6969ff" }} onClick={() => onEditClick(todo)} className={s.todoElementButton} label="Edit" />
                                </div>
                            </div>
                        </div>
                    )
                })
                    :
                    <div className={s.one}>
                        <h1>No Todos Added</h1>
                    </div>
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