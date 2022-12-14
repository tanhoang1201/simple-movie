import { Outlet } from 'react-router-dom'
import Header from '../layouts/Header'

function Container() {
    return (
        <div className='px-10'>
            <Header className='mb-10' />
            <Outlet />
        </div>
    )
}

export default Container
