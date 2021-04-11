import { LoginResponse } from 'models'
import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react'
import { GoogleLoginResponse, GoogleLoginResponseOffline, useGoogleLogin } from 'react-google-login'
import { useAsync } from 'utils/useAsync'

if (!process.env.REACT_APP_GOOGLE_CLIENT_ID) {
  throw new Error('REACT_APP_GOOGLE_CLIENT_ID is undefined!!!')
}

interface AuthContext {
  user: LoginResponse | null
  handleLoginSuccess?: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void
  handleLogoutSuccess?: () => Promise<void>
}

const localStorageKey = '__google_auth_token__'

const AuthContext = createContext<AuthContext>({ user: null })
AuthContext.displayName = 'AuthContext'

// async function getUser() {
//   let user = null

//   const token = await auth.getToken()
//   if (token) {
//     const data = await client('me', { token })
//     user = data.user
//   }

//   return user
// }
const fetchUser = (token: string): Promise<LoginResponse> => {
  return fetch('http://localhost:3001/api/auth/google', {
    method: 'POST',
    body: JSON.stringify({
      token,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => res.json())
}

const getUser = (): Promise<LoginResponse | null> => {
  const token = window.localStorage.getItem(localStorageKey)
  if (!token) return Promise.resolve(null)
  return fetchUser(token)
}

const handleLoginFailure = async () => {
  // TODO: maybe clear auth context here?
  console.log('login failure')
}

const AuthProvider = (props: { children: ReactNode }) => {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
    status,
  } = useAsync<LoginResponse | null>(null)
  // const [user, setUser] = useState<LoginResponse | null>(null)

  const handleLoginSuccess = useCallback(
    async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      if (!('tokenId' in response)) return handleLoginFailure()
      const { tokenId } = response

      window.localStorage.setItem(localStorageKey, tokenId)

      run(fetchUser(tokenId))
    },
    [run]
  )

  const handleLogoutSuccess = useCallback(async () => {
    console.log('login out')

    window.localStorage.removeItem(localStorageKey)

    setData(null)
  }, [setData])

  useEffect(() => {
    run(getUser())
  }, [run])
  const value = React.useMemo(() => ({ user, handleLoginSuccess, handleLogoutSuccess }), [
    handleLoginSuccess,
    handleLogoutSuccess,
    user,
  ])

  // TODO: add spinner, error returns?
  return <AuthContext.Provider value={value} {...props} />
}

const useAuthContext = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be AuthProvider!')
  }
  return context
}

export { AuthProvider, useAuthContext, handleLoginFailure }
