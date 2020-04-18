import React, { useState } from 'react';
import TodoItem from './TodoItem';
import NewTodoForm from './NewTodoForm';

// Todo container
const TodoList = () => {

  //state
  const [todos, setTodos] = useState([
    {text: 'do something', isCompleted: false},
    {text: 'fix something', isCompleted: false},
    {text: 'eat something', isCompleted: false},
  ]);

  //state handler functions
  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = todos.filter((t,i)=>i !== index);
    setTodos(newTodos);
  }

  //return
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo,idx) => (
          <TodoItem key={idx} index={idx} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
        ))}
        <NewTodoForm addTodo={addTodo}/>
      </div>
    </div>
  )

}

export default TodoList;