import React, {Component} from 'react';
import './app.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
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
    console.log(event.target.value,event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    const newTodo = {task: this.state.todo, completed: "false", id: Date.now() };
    this.setState({
      todosState: [...this.state.todosState, newTodo],
      todo: ''
    });
  };

  render() {
    return (
      <div className="container">
        <TodoList
        todosArr={this.state.todosState}
         />

         <TodoForm
        value={this.state.todo}
        onSubmit={this.addTodo}
        handleChanges={this.handleChanges}
         />
      </div>
    );
  }
}

export default App;
