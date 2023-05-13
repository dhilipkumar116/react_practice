import React, { Component } from 'react';
import UpdatedComponent from './WithCounterHOC';

class HoverCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h3 onMouseOver={incrementCount}>   
          hovered {count} times
        </h3>
      </div>
    );
  }
}

//export default UpdatedComponent(HoverCounter);

//passing parameters
export default UpdatedComponent(HoverCounter,10);

