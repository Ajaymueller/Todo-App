import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import '../styles/App.css'

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn react hooks',
      isCompleted: false
    },
    {
      text: 'Cook dinner',
      isCompleted: false
    },
    {
      text: 'Walk the dog',
      isCompleted: false
    },
  ])

const addTodo = (text) => {
  const newTodos = [...todos, { text, isCompleted: false }];
  setTodos(newTodos);
};

const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
};

const removeTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos)
};

  return (
    <div className="app">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
  )
}



export default App;
