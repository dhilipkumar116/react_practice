import React from 'react';

const Greet = (props) => {
  
            // props is immutable so we cannot 
            //change the props explicity 
            //like props.name = 'kumar'

  const {name} = props // this is destructuring props in fnc component
  return (
    <div>
      <h1>hello {name}</h1>
      {props.children}
    </div>
    
  );
};
export default Greet;


