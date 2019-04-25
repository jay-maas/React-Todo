import React, {Component} from 'react';
import './Todo.css';


class TodoForm extends Component {
  render() {
    return (
      <div className="addTodo">
          <form onSubmit={this.props.onSubmit}>
                <input 
                type="text"
                placeholder="Enter your todo here" 
                value={this.props.value}
                onChange={this.props.onChange}
                name="todo"
                 />
                <button className="add">Add todo</button>
          </form>
          <button className="clear" onClick={this.props.clearAll}>Clear All</button>
      </div>
    );
  }
}

export default TodoForm;