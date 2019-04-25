import React, {Component} from 'react';
import './Todo.css';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div className="toDoListContainer">
          <h1>todo List:</h1>
          {this.props.todosArr.map(todo => (
          <Todo 
          clear={this.props.clear}
          todo={todo} 
          key={todo.id}
          onClick={this.props.markComplete} 
            />
          ))}
      </div>
    );
  }
}

export default TodoList;