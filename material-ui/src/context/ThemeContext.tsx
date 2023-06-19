'use client'

import { DarkTheme, LightTheme } from '@/themes'
import { ThemeProvider } from '@mui/material'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface IAppThemeContextData {
  themeName: 'light' | 'dark'
  toggleTheme: () => void
}

const AppThemeContext = createContext({} as IAppThemeContextData)

export const useAppThemeContext = () => useContext(AppThemeContext)

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    setThemeName((currentTime) => (currentTime === 'light' ? 'dark' : 'light'))
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme

    return DarkTheme
  }, [themeName])

  return (
    <AppThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  )
}
