import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

// useCallback - performance optimization

// useCallback is a hook that will return a memoized verison
// of the callback func that only change if one of the
// dependencies has changed

// why?
// if is usefull when passing callbacks top optimized child
// comp that rely on reference equality to prevent unnecessary renders

function UseCallbackComponent() {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(50000);

  //   const incrementAge = () => {
  //       setAge(age+1);
  //   }

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  //   const incrementSalary = () => {
  //       setSalary(salary+2000);
  //   }

  const incrementSalary = useCallback(() => {
    setSalary(salary + 2000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text={'Age'} count={age} />
      <Button handelClick={incrementAge}>increment age</Button>
      <Count text={'salary'} count={salary} />
      <Button handelClick={incrementSalary}>
        increment salary
      </Button>

      {/* when button clicked all the 5 comp is re-rendering every time - visit console */}
      {/* we need to restrict re-render only to the comp which needs to be re-rendered */}

      {/* we can use React.memo(Higher Order Comp) prevents the functional comp from being re-render if its props and states do not change */}

      {/* still problem : both button is re-rendering , need to restict that also */}

      {/* we sending reference of the func as a props , while re-redering reference of both func is changing
          so react.memo() see that props gets changed , so it will not memo prevent re-render */}

      {/* so we have to use useCallback */}
    </div>
  );
}

export default UseCallbackComponent;
