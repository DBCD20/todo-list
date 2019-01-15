import React, { Component } from 'react';
import './TodoApp.css';


class TodoApp extends Component {
  constructor(props){
    super(props)
    this.state = {todoList:[], todo: '', key: '1'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.done = this.done.bind(this);
  }
  
handleChange(e){
    this.setState({[e.target.name]: e.target.value});
} 
handleSubmit(e){
  e.preventDefault()
  if(this.state.todo === ''){
    return;
  }
  this.setState({todoList: [...this.state.todoList, this.state.todo], todo: ''});
}
done(e){
    e.target.classList.toggle('done');
}
  render() {
    return (
      <div className='wrapper'>
        <div className="App" style={{}}>
          <h2>What do you want to do today?</h2>
          <form onSubmit={this.handleSubmit}>
              <input type='text' name='todo' onChange={this.handleChange} value={this.state.todo}/>
              <button style={{padding: '1em', border: 'none', background: '#31CEC1', color: 'white'}}><strong>Submit</strong></button>
          </form>
          <ol style={{textAlign: 'left'}}>
            {this.state.todoList.map(i => (<li onClick={this.done} >{i}</li>))}
            <li>{this.state.todo}</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default TodoApp;
