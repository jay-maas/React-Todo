import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div>
      <button onClick={() =>this.props.clear(this.props.todo.id)} />
        <h1 
        data-completed={this.props.todo.completed}
        //onClick={() => this.props.onClick(this.props.todo.id)}
        onClick={this.props.onClick}
        id={this.props.todo.id}
        className="todo"
        >{this.props.todo.task}</h1>
      </div>
    );
  }
}

export default Todo;