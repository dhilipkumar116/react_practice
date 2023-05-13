import React from 'react'
import ReactDOM  from 'react-dom';


// portals provides a way to render children into a DOM
// node that exists outside the DOM hierarchy of the parent component.


// 1) insert DOM element falls outside the root element
//    in index.html add <div id="portal-root"></div>

function PortalDemo() {
    // takes 2 parameter (JSX,root id on which we have to mount)
    return ReactDOM.createPortal(
        <h2>
            portal demo
        </h2>,
        document.getElementById("portal-root")
    )
}

export default PortalDemo;
