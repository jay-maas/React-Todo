import React, {Component} from 'react';
import './app.css';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
//If you would like to use local storage please use the following import
//import SimpleStorage from 'react-simple-storage'; 
//Put this into the return inside the wrapping div
//<SimpleStorage parent={this} />

const anotherTodo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Organize Garage',
    id: 1528817077886,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817884358,
    completed: false
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      todosState: anotherTodo,
      todo: '',
      searchString: ''
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
          event.target.style.color = "white"
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

    searchChange() {
      this.setState({
        search: this.refs.search.value
      });
    }



    clearCompleted = id => {
      console.log(id)
      let clearTodo = [...this.state.todosState]
      clearTodo = clearTodo.filter(todo => !todo.completed);
      this.setState({ todosState:clearTodo })
    }

    componentDidMount() {
    }

    handleChange = event => {
      this.setState({
        searchString: event.target.value
      });
    }
  render() {
    return (
      <div className="container">
      
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
