import { css, Global } from '@emotion/react'
import React from 'react'
import tw, { theme } from 'twin.macro'

const customStyles = css`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
  }
  img,
  video {
    max-width: 100%;
    // height: 0;
  }
`

const GlobalStyles = () => <Global styles={customStyles} />

export default GlobalStyles
