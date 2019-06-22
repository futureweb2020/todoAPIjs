import React from 'react';

const TodoList = ({ items }) => {
  const listItems = items.map((item) =>
    <li key={item.id.toString()}>
      <TodoItem todoId={item.id} todoContent={item.content} />
    </li>
  );
  
  return (
    <div className="todo-list">
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default TodoList;
