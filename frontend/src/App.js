import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './other/reducer.js';

const store = createStore(todoApp)

class TodoEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <input type="text"></input>
      <input type="submit" value="Add"></input>
    </div>);
  }
}

const Todo = ({todo, editHandler, deleteHandler}) => (
  <li>
  <input type="text" value="{todo.text}"></input>
  <input type="submit" value="Update"></input>
  <input type="submit" value="Delete"></input>
  </li>
);

const TodoList = ({ todos, editHandler }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={todo.id} todo={todo} editHandler={editHandler} deleteHandler={deleteHandler} />
    ))}
  </ul>
)


function App() {
  return (
    <Provider store={store}>
      <TodoEditor />
      <TodoList />
    </Provider>
  );
}

export default App;
