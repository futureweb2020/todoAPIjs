import { combineReducers } from 'redux';

import {
    ADD_TODO
} from "../constants/ActionTypes";

const initState = {
    todoList: []
}

const todoReducer = (state = initState, action) => {
    // console.log('state: ', state);
    switch(action.type) {
        case ADD_TODO:
            let todo = {todo: action.todoText}
            return {
                ...state,
                todoList: [todo, ...state.todoList]
            };
        default:
            return { ...state };
    }
}

export default combineReducers({
    todo: todoReducer
})