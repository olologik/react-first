import React from 'react';
import TodoList from './todo/TodoList';
import Context from './context';
import AddTodo from './todo/AddTodo';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Купить хлеб' },
    { id: 2, completed: false, title: 'Купить масло' },
    { id: 3, completed: false, title: 'Купить молоко' },
    { id: 4, completed: false, title: 'Купить колбасу' },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
        ) : (
          <p>No Todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
