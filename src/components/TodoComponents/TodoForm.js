import React from 'react';
import './Todo.css';


const TodoForm = props => {
    return (
      <div>
          <form onSubmit={props.onSubmit}>
                <input 
                type="text"
                placeholder="Enter your todo here" 
                value={props.value}
                onChange={props.onChange}
                name="todo"
                 />
                <button>Add todo</button>
          </form>
      </div>
    );
}

export default TodoForm;