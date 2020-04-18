import React from 'react';

// Todo list item - props only, stateless.
// Should use handler logic passed in from parent function
const Todo = ({index, todo, completeTodo, deleteTodo}) => {
  return(
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : 'none'}} className="todo">
      {index} - { todo.text } - { todo.isCompleted ? 'done' : 'not yet' }
      <div>
        <button onClick={()=>{completeTodo(index)}}>complete</button>
        <button onClick={()=>{deleteTodo(index)}}>delete</button>
      </div>
    </div>
  )
}

export default Todo;