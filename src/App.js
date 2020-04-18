import React from 'react';
import BoxList from './BoxList';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>reactforms exercise</h1>
      <BoxList />
      <h1>Todo list</h1>
      <TodoList />
    </div>
  );
}

export default App;
