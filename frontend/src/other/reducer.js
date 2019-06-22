function cloneObject(data)
{
    return JSON.parse(JSON.stringify(data));
}

const todos = (state = [], action) => {
    let todos;
    switch (action.type) {
        case 'START_FETCHING':
            return [...state, {isFetching: true}];
        case 'RECEIVE_TODOLIST':
            return [...state, {todoList: action.data}];
        case 'UPDATE_TODO':
        case 'ADD_TODO':
            todos = cloneObject(state.todoList);
            todos[action.id] = todos[action.data];
            return [...state, {todoList: todos}];
        case 'DELETE_TODO':
            todos = cloneObject(state.todoList);
            todos[action.id] = todos[action.data];
            delete todos[action.id];
            return [...state, {todoList: todos}];
        default:
            return state;
    }
}

export default todos;