import React, {Component} from 'react';
import './Todo.css';


class Todo extends Component {
  render() {
      const {task, id, completed} = this.props;
    return (
      <div className="todo">
        <h2 className="uncomplete" id={id}completed={completed}>{task}</h2>
      </div>
    );
  }
}

export default Todo;