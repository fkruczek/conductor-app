import { css, Global } from '@emotion/react'
import React from 'react'
import tw, { theme } from 'twin.macro'

const customStyles = css`
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased m-0 min-h-screen`}
    font-family: sans-serif;
    overflow-x: hidden;
    background: #fff5e3;
    color: #31291b;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  hr {
    border: none;
    height: 1px;
    background: #928670;
    width: 100%;
  }
`
const GlobalStyles = () => <Global styles={customStyles} />

export default GlobalStyles
