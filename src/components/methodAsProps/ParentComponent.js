import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

// calling method in parent container from child component 
// by passing method as a prop to child component

// steps
// 1) define method in parent comp
// 2) pass method as prop to child comp
// 3) access the method in child comp using props
// 4) call method onClick in child comp

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
              parentName:'parent'
        }

        this.greetparent = this.greetparent.bind(this)
    }

    //method 1: without passing parameters
    greetparent(){
        // ES6 - template literals
        alert(`Hello ${this.state.parentName}`)
    }

    //method 2: passing parameters
    greetparent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler ={this.greetparent}/>
            </div>
        )
    }
}

export default ParentComponent
