import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function Header({ className }) {
    const styles = 'transition-colors'
    return (
        <header className={className}>
            <nav className='flex gap-5 justify-center p-8 text-lg font-semibold'>
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
