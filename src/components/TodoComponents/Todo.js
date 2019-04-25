import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <h2 
        data-completed={this.props.todo.completed}
        //onClick={() => this.props.onClick(this.props.todo.id)}
        onClick={this.props.onClick}
        id={this.props.todo.id}
        className="todo"
        >{this.props.todo.task}</h2>
        <button className="delete" onClick={() =>this.props.clear(this.props.todo.id)}></button>
      </div>
    );
  }
}

export default Todo;