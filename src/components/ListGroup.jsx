import React, { Component } from 'react'
import Child from './Memo'

 class ListGroup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {color:'red'
       
    }
   //1
  }
  
  componentDidMount() {//5
    setInterval(() => {
      this.setState({color: "yellow"}) 
    }, 1000)
  }
  // getSnapshotBeforeUpdate(prevProps, prevState) {//6
  //   document.getElementById("div1").innerHTML =
  //   "Before the update, the favorite was " + prevState.color;
  //   return null;
  // }
  // componentDidUpdate() {//7
  //   document.getElementById("div2").innerHTML =
  //   "The updated favorite is " + this.state.color;
  // }
  render() {
    console.log('pa');
    return (
      <div>
        <h2>{this.state.color}</h2>  {/* 4 */}
        <Child name={this.state.color} />
      </div>
    )
  }
}

export default ListGroup
