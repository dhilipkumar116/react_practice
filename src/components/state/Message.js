import React, { Component } from 'react';

// state using class component

class Message extends Component {
  constructor() {
    super();
    this.state = {
      mess: 'welcome user',
    };
  }

  changemessage() {
    // states can be changed within the component
    this.setState({
      mess: 'thanks for subcribing',
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.mess}</h1>
        <button onClick={() => this.changemessage()}>subscribe</button>
      </div>
    );
  }
}

export default Message;





