import { createTheme } from '@mui/material'

const themeConfigs = ({ mode }) => {
    const customPalette =
        mode === 'dark'
            ? {
                  primary: {
                      main: '#facc15',
                  },

                  secondary: {
                      main: '#86efac',
                  },

                  common: {
                      light: '#fff',
                      dark: '#000',
                  },

                  background: {
                      default: '#0f172a',
                  },
              }
            : {
                  primary: {
                      main: '#c084fc',
                  },

                  secondary: {
                      main: '#ef4444',
                  },

                  common: {
                      light: '#fff',
                      dark: '#000',
                  },

                  background: {
                      default: '#f3f4f6',
                  },
              }
    return createTheme({
        palette: {
            mode,
            ...customPalette,
        },
        typography: {
            fontFamily: ['DM Sans', 'sans-serif'].join(','),
        },
        spacing: 4,
        breakpoints: {
            values: {
                xs: 0,
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
            },
        },
    })
}

export default themeConfigs
