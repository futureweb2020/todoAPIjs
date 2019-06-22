import React from 'react';
import { addAction } from '../actions'

const AddTodoItem = ({dispatch}) => {
  return (
    <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addAction(input.value))
          input.value = ''
        }}
      >
      <input ref={node => (input = node)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default connect()(AddTodoItem);
