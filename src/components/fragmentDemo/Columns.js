import React from 'react';

function columns() {
  const items = [];
  return (
    <React.Fragment>
      {items.map((item) => (
        //key attribute is the only attribute can pass to fragments
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>

        //other structure for fragments, here we cannot pass key to fragments
        //<>
        //</>
      ))}
      <td>Name</td>
      <td>Dhilip</td>
    </React.Fragment>
  );
}

export default columns;
