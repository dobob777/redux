import { connect } from 'react-redux';

import { addTodo } from '../Services/Actions/action'

import Todolist from '../componets/Todolist';

const mapStateToProps = state => ({
    todoData: state.todoList.todoData
})

const mapDisptchToProps = dispatch => ({
    addTodoHandler: data => dispatch(addTodo(data))
})

export default connect(mapStateToProps, mapDisptchToProps)(Todolist)