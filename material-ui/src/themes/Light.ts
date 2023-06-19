import { createTheme } from '@mui/material'
import { cyan, indigo } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: indigo[700],
      dark: indigo[800],
      light: indigo[600],
      contrastText: '#fefefe',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#fefefe',
    },
    background: {
      paper: '#ffffff',
      default: '#f7f6f3',
    },
  },
})
