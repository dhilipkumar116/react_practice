import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false,
        }
    }
    
    // method 1
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    //method 2
    componentDidCatch(error,info){
        // this method used to log errors
        console.log(error);
        console.log(info);
    }

    render() {
        if(this.state.hasError){
            return <h2>something went wrong...</h2>
        }
        return this.props.children;
        // refers to comp actually rendering
    }
}

export default ErrorBoundary
