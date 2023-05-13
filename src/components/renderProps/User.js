import React, { Component } from 'react'


class User extends Component {
    render() {
        return (
            <div>
                {/* possible to send props whose type is 
                 function and we can control what is
                 rendered by comp*/}

                 {/* the term render prop refers to a 
                 technique for sharing code bw react 
                 comp using a props whose value is a 
                 function */}

                 {/* refer counter comp */}
                {this.props.name(true)}
            </div>
        )
    }
}

export default User
