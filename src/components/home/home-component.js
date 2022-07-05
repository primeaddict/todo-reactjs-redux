import TodoList from "../todos/list/todo-list.component";
import TodoEdit from "../todos/edit/todo-edit.component";

import s from "./home.module.scss"
import Button from "../common/button";
import { useState } from "react";
import { connect } from "react-redux";

import { a__addTodo, a__removeTodo, a__selectTodo } from "../../redux/action"
import { s__getTodoList } from "../../redux/selector";


const HomeComponent = (props) => {

    const { s__todoList, d__addTodo, d__removeTodo, d__selectTodo } = props
    console.log("🚀 ~ file: home-component.js ~ line 16 ~ HomeComponent ~ s__todoList", s__todoList)

    const [showEditor, setShowEditor] = useState(false)
    const [currentTodo, setCurrentTodo] = useState({})


    const todos = s__todoList
    const saveTodo = (newTodo) => {
        setShowEditor(false)
        setCurrentTodo({})
        d__addTodo(newTodo)
    }

    const deleteTodo = (todo) => {
        d__removeTodo(todo.id)
    }

    const editTodo = (todo) => {
        setCurrentTodo(todo)
        setShowEditor(true)
    }

    const selectTodo = (todo) => {
        d__selectTodo(todo.id);
    }

    return (
        <div className={s.container}>
            <h1>
                Todo Application
            </h1>
            <TodoEdit
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

function mapStateToProps(state) {
    return {
        s__todoList: s__getTodoList(state)
    }
}


function mapDispatchToProps(dispatch) {

    return {
        d__addTodo: (data) => dispatch(a__addTodo(data)),
        d__removeTodo: (data) => dispatch(a__removeTodo(data)),
        d__selectTodo: (data) => dispatch(a__selectTodo(data))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)