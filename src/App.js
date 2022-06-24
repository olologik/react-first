import React from 'react';
import TodoList from './todo/TodoList';

function App() {
  const todos = [
    { id: 1, completed: false, title: 'Купить хлеб' },
    { id: 2, completed: false, title: 'Купить масло' },
    { id: 3, completed: false, title: 'Купить молоко' },
    { id: 4, completed: false, title: 'Купить колбасу' },
  ];
  return (
    <div className="wrapper">
      <h1>react</h1>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
