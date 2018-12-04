import React, { Component } from 'react'

class Picture extends Component{
  constructor(){
    super()
  }
  
  render(){
    return (<img src={this.props.pictureSrc} alt='youre better off not knowing'/>)
  }
  
}

export default Picture