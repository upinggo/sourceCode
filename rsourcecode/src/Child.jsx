import React from 'react';

class Child extends React.Component{
  constructor(props){
    super(props)
    this.a=React.createRef()
    this.state={
      a:props.data,
      n:2
    }
    
  }
  componentDidMount(){
    console.log(this,this.a)
    this.a.current.innerHTML=this.a.current.innerHTML+'<span>这是ref</span>'
  }
  render(){
    console.log(this,this.a)
    return (
    <div ref={this.a}>Child:{this.state.a.a},{this.props.children},{this.props.data.a}</div>
    )
  }
}


export default Child;
