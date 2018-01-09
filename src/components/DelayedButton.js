// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{

  handleClick = (event) => {
    event.persist()

    setTimeout(() => {
      this.props.onDelayedClick(event, 
      this.delay)
    })
  }
  
  render(){
    return(
      <button onClick={this.handleClick}
    )
  }
}

export default DelayedButton