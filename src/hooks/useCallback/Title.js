import React from 'react'

function Title() {
    console.log('rendering title');
    return (
        <div>
            title - useCallback hook
        </div>
    )
}

export default React.memo(Title);
