import { Banner, MovieList } from '../layouts/homeComponents'

function Home() {
    return (
        <div>
            <Banner className='mb-20' />
            <MovieList title='Now Playing' className='mb-20' />
            <MovieList title='Top Rating' className='mb-20' />
            <MovieList title='Trending' />
        </div>
    )
}

export default Home
