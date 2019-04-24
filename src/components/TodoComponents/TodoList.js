import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = props => {
    return (
      <div className="toDoListContainer">
          <h1>todo List:</h1>
          {props.todosArr.map(todo => (
          <Todo 
          todo={todo} 
          key={todo.id} 
            />
          ))}
      </div>
    );
}

export default TodoList;