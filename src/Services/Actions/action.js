import { ADD_TODO } from '../Constants'


export const addTodo = (data) => {

    return {
        type: ADD_TODO,
        data: data
    }
}