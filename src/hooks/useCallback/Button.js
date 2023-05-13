import React from 'react';

function Button({ handelClick, children }) {
  console.log('rendering button - ', children);
  return (
    <div>
      <button onClick={handelClick}>{children}</button>
    </div>
  );
}

// React.memo() is not a feature of Hooks
export default React.memo(Button);
