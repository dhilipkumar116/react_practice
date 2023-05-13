import React, { useState, useMemo } from 'react';

// useMemo - is used for performance optimization
// useMemo is a HOC 

// difference
// useCallback - catches the provided func instance itself
// useMemo - invokes the provided func and catches its result

function UseMemoCounter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
    console.log('counter one rendered');
  };

  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
    console.log('counter two rendered');
  };

  //   const isEven = () => {
  //     // in business logic there will be lot of operation that might took long time to execute
  //     // so inducing some mock time dealy here
  //     let i = 0;
  //     while(i<2000000000) {
  //       i++;
  //     }
  //     return countOne % 2 === 0;
  //   };

  //   using memo
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <button onClick={incrementOne}>
        count one : {countOne}
      </button>
      {/* <span>{isEven() ? ' even' : ' odd'}</span> */}
      <span>{isEven ? ' even' : ' odd'}</span>
      <br />
      <button onClick={incrementTwo}>
        count two : {countTwo}
      </button>
      {/* when we click counter two , there is a delay do to isEven() 
      bcoz , on clicking btn state change which in result, comps will be rerendered 
      on rerendring isEven() is called 
      -- we need to prevent this */}

      {/* we should not calculate unnecessary operations on every rerender */}

      {/* useMemo - only recompute when catch value when one of the dependency has changed ,
       we can avoid expensive un necessay calculation */}
    </div>
  );
}

export default UseMemoCounter;
