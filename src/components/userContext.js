import React from 'react'

// const UserContext = React.createContext()
const UserContext = React.createContext("Heyllo") // you can provide a default value like this

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext