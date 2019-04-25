import React, {Component} from 'react';
import './app.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SimpleStorage from 'react-simple-storage';


const anotherTodo = []



class App extends Component {
  constructor() {
    super()
    this.state = {
      todosState: anotherTodo,
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
          event.target.style.color = "lightgrey"
          event.target.style.textDecoration = "line-through"} else {
            event.target.style.color = "initial"
            event.target.style.textDecoration = "initial"
          }
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({doneTodos})
    }

    clearAllCompleted = event => {
      event.preventDefault();
      console.log(event.target)
      let clearTodos = [...this.state.todosState]
      clearTodos = clearTodos.filter(todo => !todo.completed);
      this.setState({ todosState:clearTodos })
      console.log(clearTodos)
    }

    clearCompleted = id => {
      console.log(id)
      let clearTodo = [...this.state.todosState]
      clearTodo = clearTodo.filter(todo => !todo.completed);
      this.setState({ todosState:clearTodo })
    }

  render() {
    return (
      <div className="container">
      <SimpleStorage parent={this} />
        <TodoList
        clear={this.clearCompleted}
        todosArr={this.state.todosState}
        markComplete={this.markComplete}
         />

         <TodoForm
        value={this.state.todo}
        onSubmit={this.addTodo}
        onChange={this.handleChanges}
        clearAll={this.clearAllCompleted}
         />
      </div>
    );
  }
}

export default App;
