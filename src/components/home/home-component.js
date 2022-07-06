import TodoList from "../todos/list/todo-list.component";
import TodoEdit from "../todos/edit/todo-edit.component";

import s from "./home.module.scss"
import Button from "../common/button";
import { useState } from "react";
import { connect } from "react-redux";

import { a__addTodo, a__removeTodo, a__selectTodo } from "../../redux/action"
import { s__getTodoList, s__loading } from "../../redux/selector";


const HomeComponent = (props) => {

    const { s__todoList, d__addTodo, d__removeTodo, d__selectTodo, s__loading } = props

    const [currentTodo, setCurrentTodo] = useState({})


    const todos = s__todoList
    const saveTodo = (newTodo) => {
        setCurrentTodo({})
        d__addTodo(newTodo)
    }

    const deleteTodo = (todo) => {
        d__removeTodo(todo.id)
    }

    const editTodo = (todo) => {
        setCurrentTodo(todo)
    }

    const selectTodo = (todo) => {
        d__selectTodo(todo.id);
    }

    return (
        <div className={s.container}>
            {s__loading ? <div className={s.loading}>loading...</div> : <div></div>}

            <>
                <div className={s.thirteen}>
                    <h1>Todo Application</h1>
                </div>
                <TodoEdit
                    onSaveClick={saveTodo}
                    currentTodo={currentTodo}
                />
                <TodoList
                    list={todos}
                    onEditClick={editTodo}
                    onDeleteClick={deleteTodo}
                    onTodoSelect={selectTodo}
                />
            </>

        </div >
    )
}

function mapStateToProps(state) {
    return {
        s__todoList: s__getTodoList(state),
        s__loading: s__loading(state)
    }
}


function mapDispatchToProps(dispatch) {

    return {
        d__addTodo: (data) => dispatch(a__addTodo.request(data)),
        d__removeTodo: (data) => dispatch(a__removeTodo(data)),
        d__selectTodo: (data) => dispatch(a__selectTodo(data))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)