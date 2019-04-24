import React, {Component} from 'react';
import './Todo.css';


class TodoForm extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
}

handleChange(event) {
    this.setState({value: event.target.value});
}

handleSubmit(event) {
    alert('push this info: ' + this.state.value);
    
    event.preventDefault();
}
handleClearCompleted(event) {
    alert('clear selected');
    event.preventDefault();
}
  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
                <input type="submit" value="add Todo" />
          </form>
      </div>
    );
  }
}

export default TodoForm;