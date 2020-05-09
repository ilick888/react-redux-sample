import React, { Component } from 'react';

const App = () => {
  return (
    <Counter></Counter>

  );
}

class Counter extends Component{

  constructor(props){
    super(props)
    this.state = {count : 0}
  }

  handleplus = () => {
    this.setState({
      count : this.state.count + 1
    })
  }

  handleminus = () => {
    this.setState({
      count : this.state.count - 1
    })
  }

  render(){
    return (
    <div>
      counter: {this.state.count}
      <button onClick={this.handleplus}>+1</button>
      <button onClick={this.handleminus}>-1</button>
    </div>
    )
  }
}

export default App;
