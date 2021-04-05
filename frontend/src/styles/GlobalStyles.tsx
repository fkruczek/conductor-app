import { css, Global } from '@emotion/react'
import React from 'react'
import tw, { theme } from 'twin.macro'

const customStyles = css`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased m-0 min-h-screen`}
  }
`
const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
