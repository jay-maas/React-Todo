import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <h2 
        onClick={this.props.onClick}
        id={this.props.todo.id}
        >{this.props.todo.task}</h2>
      </div>
    );
  }
}

export default Todo;