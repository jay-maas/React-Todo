import React, {Component} from 'react';
import './app.css';
import TodoList from './components/TodoComponents/TodoList';

const todos = [
  {
    task: 'Learn How to use React',
    id: 1528817084358,
    completed: "false"
  },
  {
    task: 'Make an Awesome ToDo List App with React',
    id: 1528817077286,
    completed: "false"
  },
]


class App extends Component {
  constructor() {
    super()
    this.state = {
      todosState: todos,
      todo: [
        {
        task: '',
        id: '',
        completed: "false"
        }
      ]
    }
  }
  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
      todo: {
      ...this.state.todo,
      [event.target.name]: event.target.value
      }
    });
  };

  addTodo = event => {

    event.preventDefault();
    this.setState({
      todosState: [...this.state.todosState, this.state.todo],
      todo: {}
    });
  };

  render() {
    return (
      <div className="container">
        <TodoList
        todosArr={this.state.todosState}
        newTodosArr={this.state.todo}
        onSubmit={this.addTodo}
        onChange={this.handleChanges}
         />
      </div>
    );
  }
}

export default App;
