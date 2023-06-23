import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
      super(props)
    
      this.inf = React.createRef(); // inf value is chanable as per our requirment.
    }
    componentDidMount(){
        this.inf.current.focus()
    }
    change = () => {
     alert(`${ this.inf.current.value}`)
    }
  render() {
    return (
      <div>
        <input  ref={this.inf} /><br/>
        <button onClick={this.change}>submit</button>
      </div>
    )
  }
}

export default Refs
