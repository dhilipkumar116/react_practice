import React,{ useState,useEffect } from 'react'

function RunEffectOnlyOnce() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("mouse moving...");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log("useEffect called");
        window.addEventListener('mousemove',logMousePosition)

        //to remove eventListener on compWillUnMount
        return()=>{
            console.log('component unmounting code');
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[]);
    // [] - componentDidMount equivalent
    // useEffect does not depends on state,props so there is no reason to call useEffects while rerender 
    // [] - useEffect calls only on initial render after that it wont call anymore
    return (
        <div>
            x - {x} y - {y};
        </div>
    )
}

export default RunEffectOnlyOnce
