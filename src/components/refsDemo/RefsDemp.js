import React, { Component } from 'react';

class RefsDemp extends Component {
  // refs - can be used only in class components
  // refs - make us to access the DOM directly in react
  // ref-  inorder to focus element as soon as page is rendered
  // ref - this is used in login page to give better user exp

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    

    //method 2
    this.callBackRef = null
    this.setCallBackRef = (element) => {
        this.callBackRef=element
    }
  }

  componentDidMount() {
    //   //method 1
    // this.inputRef.current.focus();
    // console.log(this.inputRef);

    //method 2
    if(this.callBackRef){
        this.callBackRef.focus()
    }
  }


  clickHandler = () => {
    //   //method 1
    //   alert(this.inputRef.current.value)

    //method 2
    alert(this.createref.value)
  }

  render() {
    return (
      <div>

        {/* method 1
        <input type='text' ref={this.inputRef}></input> */}


        <button onClick={this.clickHandler}>click</button>
        
        {/* method 2 */}
        <input type='text' ref={this.setCallBackRef}></input>
      </div>
    );
  }
}

export default RefsDemp;
