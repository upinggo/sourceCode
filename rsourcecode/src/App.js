import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      a:1,
      n:2
    }
  }
  change=()=>{
    this.setState({
      a:'change'
    })
  }
  render(){
    console.log(this)
    return (
      <>
      {this.state.a}
  <Child data={this.state}>你好,我是father</Child>
    <button onClick={this.change}>变化</button>
    </>    )
  }
}
function App1() {
  console.log(this)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
