import React, { useReducer } from 'react';

const initalState = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initalState;
    default:
      return state;
  }
};

function SimpleReducer() {
  const [count, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <h4>count : {count}</h4>
      <button
        onClick={() => {
          dispatch('INCREMENT');
        }}>
        increment
      </button>
      <button
        onClick={() => {
          dispatch('DECREMENT');
        }}>
        decrement
      </button>
      <button
        onClick={() => {
          dispatch('RESET');
        }}>
        reset
      </button>
    </div>
  );
}

export default SimpleReducer;
