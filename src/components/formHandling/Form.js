import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comment: '',
      topic: 'react',
    };
  }

  handelUsernamechange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handlecommentchange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handletopicchange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  
  handlesubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault()
  };
  render() {
    // this is known as destructuring ,now we can remove this.state in all occurance 
    // const{username,comment,topic}=this.state
    return (
      <form onSubmit={this.handlesubmit}>
        <div>
          <label>Username</label>
          <input
            type='text'
            value={this.state.username}
            onChange={this.handelUsernamechange}
          ></input>
        </div>
        <div>
          <label>comments</label>
          <textarea
            value={this.state.comment}
            onChange={this.handlecommentchange}
          ></textarea>
        </div>
        <div>
          <label>topic</label>
          <select value={this.state.topic} onChange={this.handletopicchange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
          </select>
        </div>
        <button>submit</button>
      </form>
    );
  }
}

export default Form;
