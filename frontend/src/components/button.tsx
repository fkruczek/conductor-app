/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom'
import tw from 'twin.macro'

const Button = tw.button`px-10 py-2 bg-button text-base rounded-lg border-none shadow-lg focus:outline-none transform duration-75 text-white font-extrabold hover:scale-105`

const LinkButton = tw(
  Link
)`px-10 py-2 bg-secondary no-underline text-xl rounded-lg border-none shadow-lg focus:outline-none transform duration-75 hocus:scale-105 text-white font-bold`

export { Button, LinkButton }
