import { LinkButton } from 'components/button'
import { useAuthContext } from 'context/authContext'
import React from 'react'
import GoogleLogin from 'react-google-login'
const MainSection = () => {
  const { handleLoginSuccess, handleLoginFailure, user } = useAuthContext()

  return (
    <>
      {user ? (
        <LinkButton to="/create-concert">Create concert</LinkButton>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          buttonText="Log in with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          accessType="offline"
        />
      )}
    </>
  )
}

export { MainSection }
