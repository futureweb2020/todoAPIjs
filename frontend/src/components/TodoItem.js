import React from 'react';

const TodoItem = ({ todoContent, onUpdate, onDelete }) => (
    <div className="todo-item">
      <input type="text" value={todoContent}></input>
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </div>
);

export default TodoItem;
