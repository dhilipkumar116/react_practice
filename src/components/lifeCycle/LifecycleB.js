import React, { Component } from 'react';

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log('lifecyle B  constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycle B getDerivedStateFormProps');
    return null;
  }

  componentDidMount() {
    console.log('lifecyle B componentDidMount');
  }

  render() {
    console.log('lifecyle B render');

    return (
        <div>
            <div>lifeCycle B</div>
        </div>
    )
  }
}

export default LifecycleB;
