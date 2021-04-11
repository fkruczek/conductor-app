import React, { ReactNode } from 'react'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { AuthProvider } from './auth.context'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <RouterProvider>
      <AuthProvider>{children}</AuthProvider>
    </RouterProvider>
  )
}
