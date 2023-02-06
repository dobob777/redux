import { ADD_TODO } from '../Constants'

const initialState = {
    todoData: [],
}

export default function todoList(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            state.todoData.push(action.data);
            console.log("state", state);
            return state
            break;
        default:
            return state;
    }
}