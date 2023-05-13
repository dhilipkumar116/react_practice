import React, { Component } from 'react';
import Input from './Input';

//parent component for input
class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentref = React.createRef();
  }

  clickhandle = () => {
    this.componentref.current.focusInput();
    // focusInput() is defined in Input comp
  };

  render() {
    return (
      <div>
        <Input ref={this.componentref} />
        <button onClick={this.clickhandle}>Focus input</button>
      </div>
    );
  }
}

export default FocusInput;
