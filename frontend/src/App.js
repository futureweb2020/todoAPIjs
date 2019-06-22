import React from 'react';
import './App.css';
import AddTodoItem from './components/AddTodoItem';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <AddTodoItem />
      <TodoList />
    </div>
  );
}

export default App;
