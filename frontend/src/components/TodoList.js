import React from 'react';

import TodoItem from './TodoItem'

class TodoList extends React.Component {

    render() {
        return (
            <div>
                <h3>Todo List</h3>
                <div>
                    {
                        this.props.todoList.map (item => {
                            return (
                                <TodoItem todoText={item.todo}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TodoList;