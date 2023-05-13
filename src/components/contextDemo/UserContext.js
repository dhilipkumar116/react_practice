import React from  'react'


// context provides a way to pass date through
// the comp tree without having to pass props down 
// manually at every level

// steps
// 1) create the context
// 2) provide a context value
// 3) consume the context value


// step - 1
const UserContext  = React.createContext();

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider , UserConsumer}
// step - 1 ending