import React from 'react'

// memo - is used to implement pure comp in func comp
// feature avail above 16.6 react & react dom

function MemoComp({name}) {
    console.log('memo comp rendering');
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
// higher order comp , React.memo accepts a comp
// add some things to that comp , and returns back enhanced comp.
