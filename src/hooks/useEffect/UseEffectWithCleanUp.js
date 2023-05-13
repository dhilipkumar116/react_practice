import React,{useState} from 'react'
import MousePosition from './RunEffectOnlyOnce'

// implementing componentWillUnmount using useEffect
function UseEffectWithCleanUp() {

    const [display,setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>toggle display</button>
            {display&&<MousePosition/>}
            {/* error - after clicking btn MousePostion comp is unMounted  
            but still logMousePositon is running in background that cannot 
            able to setState in unmounted comp*/}
            {/* we have to remove eventHandler in MousePosition Component */}

            {/* add removeEventListener inside useEffect in MousePostion comp */}
        </div>
    )
}

export default UseEffectWithCleanUp
