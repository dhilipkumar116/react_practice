import React ,{useState}from 'react'

function FunctionClick() {

    const[info , setInfo] = useState('not clicked')

    function clickhandler() {
        setInfo('clicked')
        console.log('button clicked');  
    }
    return (
        <div>
            {/*
                function - clickhandler
                function call - clickhandler() 
                (function will be called implicitly before
                    clicking button)
                (we dont want function call)
             */}
             <p>{info}</p>
            <button onClick={clickhandler}>click me</button>
        </div>
    )
}

export default FunctionClick
