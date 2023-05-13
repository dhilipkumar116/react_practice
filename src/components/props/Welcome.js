import React,{Component} from 'react'


class Welcome extends Component{
    render(){
        return (
            // props is reserved in class comp
            // props is immutable so we cannot 
            // change the props explicity 
            // like props.name = 'kumar'
            <h1>{`class comp props ${this.props.name}`}</h1>
        )
    }
}
export default Welcome;