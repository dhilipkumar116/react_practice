import React ,{useState,useEffect} from 'react'

function UseEffectWithIncorrectDependency() {

    const [count,setCount] = useState(0);

    const tick = () => {
        // setCount(count+1);
        setCount(prevCount => prevCount+1)
    }

    useEffect(()=>{
        const interval = setInterval(tick,1000);
        return()=>{
            clearInterval(interval);
        }
    },[]);
    // interval will not increase
    // 2 method to solve this
    // 1) we can add count in dependency array -> [count]
    // 2) add prevCount in tick function
    return (
        <div>
            interval count - {count}
        </div>
    )
}

export default UseEffectWithIncorrectDependency
