/** @jsxImportSource @emotion/react */
import React from 'react'
import { Link } from 'react-router-dom'
import tw, { styled } from 'twin.macro'

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { isLoading?: boolean }

const Button = styled.button(({ isLoading }: ButtonProps) => [
  tw`px-10 py-2 bg-button text-base cursor-pointer rounded-lg border-none shadow-lg focus:outline-none transform duration-75 text-white font-extrabold hover:scale-105`,
  isLoading && tw`pointer-events-none opacity-50`,
])
const LinkButton = tw(
  Link
)`cursor-pointer px-10 py-2 bg-secondary no-underline text-xl rounded-lg border-none shadow-lg focus:outline-none transform duration-75 hocus:scale-105 text-white font-bold`

export { Button, LinkButton }
