import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import useDarkMode from '../../hooks/useDarkMode'
import { Button } from '@mui/material'

function Header({ className, onClick }) {
    const styles = 'transition-colors'
    return (
        <header className={className}>
            <nav className='flex gap-5 justify-center p-8 text-lg font-semibold '>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'text-primary' : styles)}>
                    Home
                </NavLink>
                <NavLink
                    to='/movies'
                    className={({ isActive }) => (isActive ? 'text-primary' : styles)}
                >
                    Movies
                </NavLink>
            </nav>
        </header>
    )
}

Header.propTypes = {
    className: PropTypes.string,
}

export default Header
