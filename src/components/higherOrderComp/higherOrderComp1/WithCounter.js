import React from 'react';
import { useState } from 'react';
const UpdatedComponent = (OriginalComponent, incrementValue) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(0);
    return (
      <OriginalComponent
        count={counter}
        incrementCounter={() => setCounter((count) => count + incrementValue)}
        {...props}
      />
    );
  }
  return NewComponent;
};

export default UpdatedComponent;
