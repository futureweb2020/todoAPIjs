import React from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

import { connect } from 'react-redux'

import {asyncAddTodo} from "./actions";

class App extends React.Component {

  render() {
      const { todoList, handleAddTodo } = this.props;

      return (
          <div className="App">
              <TodoForm onAddTodo={handleAddTodo} />
              <TodoList todoList={todoList}/>
          </div>
      )
  }
}

const mapStateToProps = state => ({
  todoList: state.todo.todoList
})

const mapDispatchToProps = dispatch => ({
  handleAddTodo: (todoText) => {
      console.log(todoText);
      return dispatch(asyncAddTodo(todoText))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);