import React from "react"
import WithCounter from "./WithCounter";

const HoverCounter = (props) => {
    const {count, incrementCounter, name} = props
    return (
        <div>
        <button onMouseOver={incrementCounter}>
            {name} hover counter - {count}
        </button>
        </div>
    );
}

export default WithCounter(HoverCounter,10)