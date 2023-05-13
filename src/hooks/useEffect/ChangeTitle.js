import React, { useEffect, useState } from 'react';

// useEffect
// useEffect - used to make side effects in functional comp
// can use this instead of componentDidMount,componentWillMount,componentDidUpdate

function ChangeTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
      document.title = `clicked ${count} times`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        clicked {count} times
      </button>
    </div>
  );
}

export default ChangeTitle;
