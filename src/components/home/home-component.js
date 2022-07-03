import TodoList from "../todos/list/todo-list.component";
import TodoEdit from "../todos/edit/todo-edit.component";

import s from "./home.module.scss"
import Button from "../common/button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrEditTodoReducer, deleteSelectedTodosReduces, removeTodoReducer, selectTodoReducer } from "../../redux/todo/todoSlice";


// const setListLocal = (oldList, newTodo) => {
//     localStorage && localStorage.setItem("list", JSON.stringify([...oldList, newTodo]))
// }

const HomeComponent = () => {

    const todos = useSelector(store => store.todos.todos)
    const dispatch = useDispatch()

    const [showEditor, setShowEditor] = useState(false)
    const [currentTodo, setCurrentTodo] = useState({})


    const saveTodo = (newTodo) => {
        setShowEditor(false)
        setCurrentTodo({})
        dispatch(addOrEditTodoReducer(newTodo))
    }

    const deleteTodo = (todo) => {
        dispatch(removeTodoReducer(todo))
    }

    const editTodo = (todo) => {
        setCurrentTodo(todo)
        setShowEditor(true)
    }

    const selectTodo = (todo) => {
        dispatch(selectTodoReducer(todo))
    }

    return (
        <div className={s.container}>
            <h1>
                Todo Application
            </h1>

            <div style={{ display: "flex" }}>
                <Button onClick={() => setShowEditor(true)} label="+ ADD TODO" />
                <span style={{ width: "20px" }} >{"  "}</span>
                <Button onClick={() => dispatch(deleteSelectedTodosReduces())} label="DELETE SELECTED" />
            </div>

            <TodoEdit
                onCloseClick={() => setShowEditor(false)}
                openEditPopup={showEditor}
                onSaveClick={saveTodo}
                currentTodo={currentTodo}
            />
            <TodoList
                list={todos}
                onEditClick={editTodo}
                onDeleteClick={deleteTodo}
                onTodoSelect={selectTodo}
            />
        </div>
    )
}

export default HomeComponent