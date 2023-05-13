import React, { Component } from 'react';

export class EventHand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Mess: 'welcome',
    };

    // method 3:
    // this.clickhandle = this.clickhandle.bind(this)
  }

//   clickhandle(){
//       this.setState({
//           Mess:'thankyou'
//       })
//       console.log(this);
//   }

  clickhandle=()=>{
      this.setState({
          Mess: 'thankyou'
      })
  }
  render() {
    return (
      <div>
      
      <div>{this.state.Mess}</div>

      {/* method 1: this would be an trouble for larger application for binding , low performance  */}
      {/* <button onClick={this.clickhandle.bind(this)}>click</button>  */}


      {/* method 2:arrow function in render method ,
      in this method we can pass parameters to clickhandler*/}
      {/* <button onClick={()=>this.clickhandle()}>click</button> */}

      {/* method 3: constructor to bind the clickhandler */}
      {/* <button onClick={this.clickhandle}>click</button> */}

      {/* method 4: arrow function as a class property */}
      <button onClick={this.clickhandle}>click</button>

      {/* method 3,4 is often used */}
      </div>
    );
  }
}

export default EventHand;
