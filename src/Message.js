import React, { Component } from 'react'

export default class Message extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <p className="mb-0 username">{this.props.message.author == this.props.user ? 'You' : this.props.message.author}</p>
        <div className={"alert "+(this.props.message.author == this.props.user ? 'alert-secondary':' alert-primary ')}>
          {this.props.message.message}
        </div>
      </div>
    )
  }
}
