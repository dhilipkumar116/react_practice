import React, { useContext } from 'react';
// creating context and providing context remains same
// in hooks - context consumption is different

import { UserContext, TechContext } from '../App';

function ComponentC() {
  const user = useContext(UserContext);
  const tech = useContext(TechContext);

  return (
    <div>
      {user} studying {tech}
    </div>
  );
}

export default ComponentC;
