import React, { Component } from 'react'
import Child from './child'

 class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'naveen'
      }
    }
    Parent(childName){
alert(`hai my name is ${this.state.name} and i am ${childName} years old`)
    }
    
  render() {
    return (
        <div>
        <Child  />
      </div>
    )
  }
}

export default Parent

