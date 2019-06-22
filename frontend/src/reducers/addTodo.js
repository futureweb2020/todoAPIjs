import { actionTypes } from '../actions';

const addTodo = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          content: action.content,
        },
      ];
    case actionTypes.UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            id: todo.id,
            content: action.content
          })
        }
        return todo;
      });
    case actionTypes.DELETE_TODO:
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
      });
    default:
      return state;
  }
}

export default addTodo;