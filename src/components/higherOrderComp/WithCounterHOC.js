import React from 'react';

// HOC
// *to share common functionality bw comp
// *takes comp as a arguments and return new comp
// by adding extra features to that comp

//steps
//1) write the func which has to be shared among comps
//   (that should be common functionality)

//proper naming
//  UpdatedComponent -> withCounter
//  OriginalComponent -> wrapperCounter

// const UpdatedComponent = (OriginalComponent) => {
//   class NewComponent extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         count: 0,
//       };
//     }

//     incrementCount = () => {
//       this.setState((prevState) => {
//         return { count: prevState.count + 1 };
//       });
//     };

//     render() {
//       //sending this props to original comp
//       return (
//         <OriginalComponent
//           count={this.state.count}
//           incrementCount={this.incrementCount}
//           // passing all parameter
//           // (important thing , all pass all parameter to comp)
//           {...this.props}
//         />
//       );
//     }
//   }
//   return NewComponent;
// };


// passing parameter to HOC function
const UpdatedComponent = (OriginalComponent,incCount) => {
    class NewComponent extends React.Component {
      constructor(props) {
        super(props);
  
        this.state = {
          count: 0,
        };
      }
  
      incrementCount = () => {
        this.setState((prevState) => {
          return { count: prevState.count + incCount };
        });
      };
  
      render() {
        //sending this props to original comp
        return (
          <OriginalComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            // passing all parameter
            // (important thing , all pass all parameter to comp)
            {...this.props}
          />
        );
      }
    }
    return NewComponent;
  };
  

export default UpdatedComponent;
