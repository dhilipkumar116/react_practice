import React from "react";

const Hello = () => {
  //  this is using jsx
  //     return(
  //         <div className: 'dummyclass'>
  //             <h1>hello dhilip how r u</h1>
  //         </div>
  //     )

  // without using jsx
  return React.createElement(
    "div",
    { id: "hello", className: "dummyclass" },
    React.createElement("h1", null, "hello dhilip how r uuuuuuuuuuuu")
  );
};

export default Hello;
