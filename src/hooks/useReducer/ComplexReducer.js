import React, { useReducer } from 'react';

const initalState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        firstCounter: state.firstCounter + action.value,
      };
    case 'DECREMENT':
      return {
        ...state,
        firstCounter: state.firstCounter - action.value,
      };
    case 'INCREMENT2':
      return {
        ...state,
        secondCounter: state.secondCounter + action.value,
      };
    case 'DECREMENT2':
      return {
        ...state,
        secondCounter: state.secondCounter - action.value,
      };
    case 'RESET':
      return initalState;
    default:
      return state;
  }
};

function ComplexReducer() {
  const [count, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <h4>First Counter : {count.firstCounter}</h4>
      <h4>Second Counter : {count.secondCounter}</h4>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT', value: 1 });
        }}>
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT', value: 1 });
        }}>
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT', value: 5 });
        }}>
        increment 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT', value: 5 });
        }}>
        decrement 5
      </button>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'INCREMENT2', value: 10 });
          }}>
          increment 10 - counter2
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'DECREMENT2', value: 10 });
          }}>
          decrement 10 - counter2
        </button>
      </div>
      <button
        onClick={() => {
          dispatch({ type: 'RESET' });
        }}>
        reset
      </button>
    </div>
  );
}

export default ComplexReducer;
