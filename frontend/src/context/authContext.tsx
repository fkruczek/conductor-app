import { FullPageSpinner } from 'components'
import { LoginResponse } from 'models'
import React, { createContext, ReactNode, useCallback, useEffect } from 'react'
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login'
import { api } from 'utils/apiClient'
import { useAsync } from 'utils/useAsync'

if (process.env.NODE_ENV === 'test') {
  process.env.REACT_APP_GOOGLE_CLIENT_ID = 'a'
}

if (!process.env.REACT_APP_GOOGLE_CLIENT_ID) {
  throw new Error('❌ REACT_APP_GOOGLE_CLIENT_ID is undefined!!!')
}

interface AuthContext {
  user: LoginResponse | null
  setData: (data: LoginResponse) => void
  handleLoginSuccess?: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void
  handleLogoutSuccess?: () => Promise<void>
  handleLoginFailure?: () => void
}

const localStorageKey = '__google_auth_token__'

const AuthContext = createContext<AuthContext>({ user: null, setData: () => null })
AuthContext.displayName = 'AuthContext'

const fetchUser = (token: string): Promise<LoginResponse> => {
  return api.post('auth/google', { token }).then((res) => res.data)
}

const getUser = async (): Promise<LoginResponse | null> => {
  const token = window.localStorage.getItem(localStorageKey)
  if (!token) return Promise.resolve(null)
  return fetchUser(token)
}

const AuthProvider = (props: { children: ReactNode }) => {
  const { data: user, isLoading, isIdle, run, setData, isError } = useAsync<LoginResponse | null>(
    null
  )

  const handleLoginFailure = useCallback(() => {
    window.localStorage.removeItem(localStorageKey)
    setData(null)
  }, [setData])

  const handleLoginSuccess = useCallback(
    async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      if (!('tokenId' in response)) return handleLoginFailure()
      const { tokenId } = response

      window.localStorage.setItem(localStorageKey, tokenId)

      run(fetchUser(tokenId))
    },
    [handleLoginFailure, run]
  )

  const handleLogoutSuccess = useCallback(async () => {
    window.localStorage.removeItem(localStorageKey)
    setData(null)
  }, [setData])

  useEffect(() => {
    run(getUser())
  }, [run])
  const value = React.useMemo(
    () => ({ user, setData, handleLoginSuccess, handleLogoutSuccess, isIdle, isLoading }),
    [handleLoginSuccess, handleLogoutSuccess, user, isIdle, isLoading, setData]
  )
  if (isLoading) {
    return <FullPageSpinner />
  }

  if (isError) {
    handleLoginFailure()
  }

  return <AuthContext.Provider value={value} {...props} />
}

const useAuthContext = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be AuthProvider!')
  }
  return context
}

export { AuthProvider, useAuthContext }
