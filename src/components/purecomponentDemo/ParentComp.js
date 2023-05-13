import React, { Component } from 'react';
import RecComp from './RecComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'dhilip',
    };
  }

  componentDidMount() {
    setInterval(() => {
        this.setState({
            name: 'dhilip'
        })
     
    }, 2000);
  }

//   pure component only work with class based compenent
//   regular,parent component will be rendered after every 2sec
//   pure component never render
//   even if there is change in data, component will not rerended

//   where to use pure  component
//   *to avoid unnecessary renders
//   eg: if we have list of 50 items , by not rerendering them we can give better user experience


  render() {
      console.log('Parent component render');
      
    return (
      <div>
        parent Component
        {/* <MemoComp name={this.state.name}/> */}
        {/* <RecComp name={this.state.name}></RecComp> */}
        {/* <PureComp name={this.state.name}></PureComp>  */}
      </div>
    );
  }
}

export default ParentComp;
