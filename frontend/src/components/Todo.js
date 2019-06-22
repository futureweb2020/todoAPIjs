import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text, onUpdate }) => (
  <div>
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </li>
    <input type="text" value={text} />
    <button onClick={onUpdate}>Update</button>
    <button onClick={onDelete}>Delete</button>
    {/* <button onClick={}>Update</button>
    <button onClick={}>Delete</button> */}
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
