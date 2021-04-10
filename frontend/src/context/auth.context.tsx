import React, { createContext, useState } from 'react'

const AuthContext = createContext(null)
AuthContext.displayName = 'AuthContext'

// auth strategy
//

const AuthProvider = (props: any) => {
  const [user, setUser] = useState(null)

  // TODO: add spinner, error returns?
  return <AuthContext.Provider value={user} {...props} />
}

const useAuthContext = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('use AuthContext in AuthProvider')
  }
  return context
}

export { AuthProvider }
