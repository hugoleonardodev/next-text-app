import { teal } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            light: teal[700],
            main: teal[800],
            dark: teal[900],
            contrastText: teal[50],
        },
        secondary: {
            light: teal[50],
            main: teal[100],
            dark: teal[200],
            contrastText: teal[900],
        },
    },
})

export default theme
