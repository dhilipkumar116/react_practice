import React, { Component } from 'react';
import UpdatedComponent from './WithCounterHOC';

class ClickCounter extends Component {
  
  render() {
    // using that props from HOC
    const { count ,incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} clicked {count} times
        </button>
      </div>
    );
  }
}

// export default UpdatedComponent(ClickCounter);

//passing parameters
export default UpdatedComponent(ClickCounter,5);
