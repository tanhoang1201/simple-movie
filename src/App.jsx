import { Routes, Route } from 'react-router-dom'
import Container from './pages/Container'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Movies from './pages/Movies'
import NotFound from './pages/NotFound'
import { ScrollToTop } from './hooks'
function App() {
    return (
        <div className=''>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Container />}>
                    <Route index element={<Home />} />
                    <Route path='movies' element={<Movies />} />
                    <Route path='movies/:movieId' element={<MovieDetail />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
