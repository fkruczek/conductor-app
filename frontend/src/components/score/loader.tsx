/** @jsxImportSource @emotion/react */
import React from 'react'
import 'twin.macro'

export const Loader = () => {
  return (
    <div tw="absolute inset-0 z-40 bg-primary-transparent">
      <div tw="grid justify-center h-screen items-center text-4xl font-extralight shadow-xl italic">
        Prepairing your score...
      </div>
    </div>
  )
}
