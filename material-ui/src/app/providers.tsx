'use client'
import { DrawerProvider } from '@/context/DrawerContext'
import { AppThemeProvider } from '@/context/ThemeContext'
import { CssBaseline } from '@mui/material'
import { ReactNode } from 'react'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AppThemeProvider>
        <DrawerProvider>
          <CssBaseline />
          {children}
        </DrawerProvider>
      </AppThemeProvider>
    </>
  )
}

export default Providers
