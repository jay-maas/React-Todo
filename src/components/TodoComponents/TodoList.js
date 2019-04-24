import React, {Component} from 'react';
import './Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
  render() {
    return (
      <div className="toDoListContainer">
          <h1>ToDo List:</h1>
          {this.props.todosArr.map(todo => (
          <Todo 
          todo={todo} 
          key={todo.id} 
            />
          ))}
          <TodoForm
        newTodosArr={this.props.todo}
        onSubmit={this.props.onSubmit}
        onChange={this.props.onChange}
         />
      </div>
    );
  }
}

export default TodoList;