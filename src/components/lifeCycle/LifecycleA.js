import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

// lifecycle methods not present in functional comp.
                                                        
// lifecycle method
// 1) Mounting - when an instance of a comp is being created and inserted into the DOM
// 2) Updating - when a comp is being re-rendered as a result of changes to either its props
// 3) unmounting - when a comp is being removed from the DOM
// 4) Error Handling - when there is an error during rendering,in a lifecycle method,
//                    or in the constructor of any child comp

// mounting method has 4 method
// 1 constructor
// 2 getDerivedStateFormProps
// 3 render
// 4 componentDidMount

// *mounting phase
// order of execution if we called another class compentent(lifecyleB)
// 1 constructorA
// 2 getDerivedStateFromPropsA
// 3 renderA
// 4 constructorB
// 5 getDerivedStateFromPropsB
// 6 renderB
// 7 componentDidMountB
// 8 componentDidMountA

// *updating phase
// order of execution if we called another class compentent(lifecyleB)
// 1 getDerivedStateFromPropsA
// 2 shouldComponentUpdateA
// 3 renderA
// 4 getDerivedStateFromPropsB
// 5 shouldComponentUpdateB
// 6 renderB
// 7 getSnapshotBeforeUpdateB
// 8 getSnapshotBeforeUpdateA
// 9 componentDidUpadateB
// 10 componentDidUpadateA

// *umounting phase
// 1 compenentWillUnmount

// *error handling phase
// 1 static getDerivedStateFromError
// 2 componentDidCatch

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log('lifecyle A  constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycle A getDerivedStateFormProps');
    return null;
  }

  componentDidMount() {
    console.log('lifecyle A componentDidMount');
  }

  render() {
    console.log('lifecyle A render');

    return (
      <div>
        <div>Lifecycle A</div>
        <LifecycleB></LifecycleB>
      </div>
    )
  }
}

export default LifecycleA;
