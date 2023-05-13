import React, { Component } from 'react'
//regular component
class RecComp extends Component {
    render() {
        console.log(`regular component render ${this.props.name}`);
        return (
            <div>
                Reg Component {this.props.name}
            </div>
        )
    }
}

export default RecComp
