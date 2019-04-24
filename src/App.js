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
      completed: "false",
      id: Date.now()
    }
    this.setState({
      todosState: [...this.state.todosState, newTodo],
      todo: ''
    });
  };

  markComplete = event => {
    console.log(event.target.id)
    let thisTodo = event.target.id;
    console.log(thisTodo)
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
