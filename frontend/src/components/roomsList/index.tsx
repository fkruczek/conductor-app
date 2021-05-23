import { LinkButton } from 'components/button'
import { useAuthContext } from 'context/authContext'
import React from 'react'
import GoogleLogin from 'react-google-login'
const MainSection = () => {
  const { handleLoginSuccess, handleLoginFailure, user } = useAuthContext()

  if (!user) {
    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
        buttonText="Log in with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
        accessType="offline"
      />
    )
  }

  if (user.ownedRoom) {
    return (
      <LinkButton to={`lobby/${user.ownedRoom._id}`} tw="bg-button text-base">
        {user.ownedRoom.name}
      </LinkButton>
    )
  }

  return <LinkButton to="/create-concert">Create concert</LinkButton>
}

export { MainSection }
