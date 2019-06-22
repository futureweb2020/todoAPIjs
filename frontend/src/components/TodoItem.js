import React from 'react';

class TodoItem extends React.Component {

    render() {
        return (
            <div>
                <label>{this.props.todoText}</label>
                <button>Complete</button>
                <hr />
            </div>
        )
    }
}

export default TodoItem;