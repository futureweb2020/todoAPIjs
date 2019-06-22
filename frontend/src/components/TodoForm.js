import React from 'react';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    changeTodoText(e) {
        this.setState({todo: e.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.todo} onChange={(e) => this.changeTodoText(e)} />
                <button onClick={this.props.onAddTodo(this.state.todo)}>Add Todo</button>
            </div>
        )
    }
}

export default TodoForm;