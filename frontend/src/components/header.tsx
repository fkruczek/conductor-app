/** @jsxImportSource @emotion/react */
import { useAuthContext } from 'context/authContext'
import React from 'react'
import 'twin.macro'

export const Header = () => {
  const { user } = useAuthContext()
  return (
    <nav tw="h-14 px-4 flex justify-end items-center text-2xl capitalize relative  z-10">
      {user ? (
        <div tw="flex items-center">
          {user.name}
          <img tw="ml-4 h-12 w-12 rounded-full bg-white text-xs" src={user.picture} alt="avatar" />
        </div>
      ) : null}
    </nav>
  )
}
