import React, { useState } from 'react';

// Todo form
// Should contain state only for form control
// Should use submit logic passed from parent function (containg list state)
const NewTodoForm = ({addTodo}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e=>setValue(e.target.value)}/>
    </form>
  )
}

export default NewTodoForm;