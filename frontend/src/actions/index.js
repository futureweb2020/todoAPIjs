import * as types from '../constants/ActionTypes'

export const addTodo = (todoText) => ({
    type: types.ADD_TODO,
    todoText
})

export const asyncAddTodo = (todoText) => {
    return async dispatch => {

        await new Promise ( (resolve) => {
            setTimeout(() => {
                dispatch(addTodo(todoText))
                //resolve();
            }, 1000)
        })
    }
}