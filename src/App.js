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
  constructor(props) {
    super(props)
    this.state = {
      todos: todos,
      todo: {
        newTodo: ''
      }
    }
  }
  click = completed => {
    if(completed === "false") {
      this.add()
    } 
    else if(completed === "true") {
      this.remove()
    }
  }
  add = () => {
    this.setState({

    })
  }
  remove = () => {
    this.setState({

    })
  }
  render() {
    return (
      <div className="container">
        <TodoList
        onClick={(e) => this.click(e.target.todoEntry)}
        todosArr={this.state.todos}
         />
        {/* <TodoForm
        todoEntrys={this.state.todoEntry}
         /> */}
      </div>
    );
  }
}

export default App;
