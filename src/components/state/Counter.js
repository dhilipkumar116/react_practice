import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log('callback method', this.state.count)
    // );

    // setState has 2 parameter
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log('callback method', this.state.count)
    );
    console.log(this.state.count);
  }

  incrementFive() {
    //this statement calls all the fnc in same time
    // in order to resolve this error , we have to
    // pass the previous state of this method to setstate method
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h3>count - {this.state.count}</h3>
        <button onClick={() => this.increment()}>increment</button>
      </div>
    );
  }
}

export default Counter;
