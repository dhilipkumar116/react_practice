import React, { Component } from 'react'

 class ClassClick extends Component {

    constructor(){
        super();
        this.state = {
            info:'not clicked'
        }
    }

    clickHandler() {
        console.log('class clicked me');
    }
    render() {
        return (
            <div>
              {/* if we use clickHandler() it become call back method 
                  to change state we need to bind the event -- refer EventHand.js*/}
              <p>{this.state.info}</p>
              <button onClick={this.clickHandler}>click me</button>  
            </div>
        )
    }
}

export default ClassClick
