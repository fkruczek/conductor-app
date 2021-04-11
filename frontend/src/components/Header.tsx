/** @jsxImportSource @emotion/react */
import 'twin.macro'
import React from 'react'
import { useAuthContext } from 'context/auth.context'

export const Header = () => {
  const { user } = useAuthContext()
  return (
    <nav tw="bg-primary p-2 flex justify-end items-center text-2xl">
      {user ? (
        <>
          {user.name}
          <img tw="ml-4 h-12 w-12 rounded-full bg-white" src={user.picture} alt="avatar"></img>
        </>
      ) : null}
    </nav>
  )
}
