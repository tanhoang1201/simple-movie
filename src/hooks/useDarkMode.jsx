import { useEffect, useState } from 'react'

function useDarkMode() {
    const [theme, setTheme] = useState(
        JSON.parse(localStorage.getItem('theme')) ?? { mode: 'light' }
    )
    const toggleDarkMode = () => {
        setTheme(theme.mode === 'light' ? { ...theme, mode: 'dark' } : { ...theme, mode: 'light' })
    }
    useEffect(() => {
        window.document.documentElement.classList.add(theme.mode)
        localStorage.setItem('theme', JSON.stringify(theme))
        return () => {
            window.document.documentElement.classList.remove(theme.mode)
        }
    }, [theme.mode])

    return {
        theme,
        toggleDarkMode,
    }
}

export default useDarkMode
