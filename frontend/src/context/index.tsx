import React, { ReactNode } from 'react'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { AuthProvider } from './authContext'
import { IconProvider } from './iconContext'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <RouterProvider>
      <AuthProvider>
        <IconProvider>{children}</IconProvider>
      </AuthProvider>
    </RouterProvider>
  )
}
