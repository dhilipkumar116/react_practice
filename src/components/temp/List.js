import React, { Component } from 'react';
import Product from './Product';

class List extends Component {
  names = [
    { id:1, name: 'dhilip', age: 12 },
    { id:1, name: 'kumar', age: 12 },
    { id:1, name: 'ramesh', age: 12 },
  ];
  render() {
    return (<div>
        {this.names.map((name) => <Product key={name.id} name={name.name}/>)}
    </div>);
  }
}
export default List;
