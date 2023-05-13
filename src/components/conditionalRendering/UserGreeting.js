import React, { Component } from 'react';

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: true,
    };
  }
  // methods
  // 1) if/else
  // 2) element variables
  // 3) ternary conditional operator
  // 4) short circuit operator

  render() {
    // // method 1
    // if (this.state.isLoggedin) {
    //   return <div>hello dhilip</div>;
    // } else {
    //   return <div>hello guest</div>;
    // }

    // // method 2: A BETTER APPROACH USING ELEMENT VARIABLE ,
    // // in this approach we store elements in js variable
    // let message;
    // if (this.state.isLoggedin) {
    //   message = <div>hello dhilip</div>;
    // } else {
    //   message = <div>hello guest</div>;
    // }
    // return <div>{message}</div>;

    // //method 3: using ternary conditional operator
    // // in this method it can be used conditions inside JSX code
    // return(
    //     this.state.isLoggedin ?  <div>hello dhilip</div>:
    //     <div>hello guest</div>
    // )

    // method 4: short circuit operator method
    // we can render  either something or nothing
    return this.state.isLoggedin && <div>hello dhilip</div>;
  }
}

export default UserGreeting;
