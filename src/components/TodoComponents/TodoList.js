import React, {Component} from 'react';
import './Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
  render() {
      const todoList = this.props.todosArr.map((arr, index) => {
          return <Todo key={index} {...arr} />
      });
    return (
      <div className="toDoListContainer">
          <h1>ToDo List:</h1>
          {todoList}
          <TodoForm
        todoEntrys={this.state.todoEntry}
         />
      </div>
    );
  }
}

export default TodoList;