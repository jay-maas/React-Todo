import React, {Component} from 'react';
import './app.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Learn JavaScript',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Learn React',
    id: 1528817084358,
    completed: false
  }
];


class App extends Component {
  constructor() {
    super()
    this.state = {
      todosState: todos,
      todo: ''
    };
  };
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.todo,
      completed: false,
      id: Date.now()
    }
    this.setState({
      todosState: [...this.state.todosState, newTodo],
      todo: ''
    });
  };

  markComplete = event => {
    let id = event.target.id
    id = parseInt(id, 10)
    const doneTodos = [...this.state.todosState]
    doneTodos.map(todo=> {
      if(id===todo.id) {
        todo.completed = !todo.completed;
        if(todo.completed===true) {
          event.target.style.textDecoration = "line-through"} else {
            event.target.style.textDecoration = "initial"
          }
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({doneTodos})
    }


  lineThrough = event => {
    if(check==="false") {
      event.target.style.textDecoration = "line-through"
    } else {
      event.target.style.textDecoration = "initial"
    }
  }

  render() {
    return (
      <div className="container">
        <TodoList
        todosArr={this.state.todosState}
        markComplete={this.markComplete}
         />

         <TodoForm
        value={this.state.todo}
        onSubmit={this.addTodo}
        onChange={this.handleChanges}
         />
      </div>
    );
  }
}

export default App;
