import React, { Component } from 'react';
import PropTypes from 'porp-types';

export class AddTodo extends Component {
    state = {
        title:''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }

    onChange = (e) => this.setState( { title: e.target.value });

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <input
                    type = "text"
                    name = "title"
                    value = {this.state.title}
                    onChange = {this.onChange}
                />
                <input
                    type = "submit"
                    value = "Add"
                />
            </form>
        )
    }
}

AddTodo.PropTypes = {
    addTodo:PropTypes.func.isRequired
}

export default AddTodo;