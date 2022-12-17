import { ThemeProvider } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '../layouts/Header'
import themeConfigs from '../configs/theme.config'
import useDarkMode from '../hooks/useDarkMode'

function Container() {
    const { theme, toggleDarkMode } = useDarkMode()
    return (
        <ThemeProvider theme={themeConfigs(theme)}>
            <div className='px-10'>
                <Header className='mb-10' onClick={toggleDarkMode} />
                <Outlet />
            </div>
        </ThemeProvider>
    )
}

export default Container
