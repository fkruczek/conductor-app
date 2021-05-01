import { Button } from 'components'
import { useAuthContext } from 'context/auth.context'
import React from 'react'
import GoogleLogin from 'react-google-login'
import { Link } from 'react-router-dom'

const MainSection = () => {
  const { handleLoginSuccess, handleLoginFailure, user } = useAuthContext()

  return (
    <div>
      {user ? (
        <Link to="/create-concert">
          <Button>Create concert</Button>
        </Link>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          buttonText="Log in with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          tw="w-48 m-auto"
          accessType="offline"
        />
      )}
    </div>
  )
}

export { MainSection }
