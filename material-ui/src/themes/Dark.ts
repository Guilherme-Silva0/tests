import { createTheme } from '@mui/material'
import { cyan, blue } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[500],
      dark: blue[700],
      light: blue[400],
      contrastText: '#fefefe',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#fefefe',
    },
    background: {
      paper: '#090909',
      default: '#000000',
    },
  },
})
