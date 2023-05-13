import React, { Component } from "react";

class Classcomponent extends Component {
  render() {
    const {name}=this.props
    return (
      <div>
        <h1>{`class Component ${name}`}</h1>
      </div>
    );
  }
}

export default Classcomponent;








