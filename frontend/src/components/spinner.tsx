/** @jsxImportSource @emotion/react */
import React from 'react'
import 'twin.macro'

const Spinner = () => {
  return (
    <div tw="h-20 w-20" aria-label="loading">
      <svg tw="animate-spin mr-3 h-20 w-20 text-field" fill="none" viewBox="0 0 24 24">
        <circle
          tw="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          tw="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  )
}

const FullPageSpinner = () => {
  return (
    <div tw="fixed inset-0 w-screen flex place-items-center justify-center h-screen">
      <Spinner />
    </div>
  )
}

export { Spinner, FullPageSpinner }
