import React, { ReactNode } from 'react'
/** @jsxImportSource @emotion/react */
import 'twin.macro'

interface TitleProps {
  children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return <h1 tw="text-3xl">{children}</h1>
}
