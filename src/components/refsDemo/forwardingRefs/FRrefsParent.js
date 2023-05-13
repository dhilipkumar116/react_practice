import React ,{Component} from 'react';
import FRrefs from './FRrefs';

//steps
// 1) create ref
// 2) attach ref in input
// 3) forward ref to the child comp
// 4) add ref parameter in child comp
// 5) add click handler

class FRrefsParent extends Component{


    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                <FRrefs ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }

}

export default FRrefsParent;