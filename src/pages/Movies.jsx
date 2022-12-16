import Button from '../components/Button'
import { SearchIcon } from '../components/icons'
import MovieList from '../layouts/moviesComponents/MovieList'

function Movies() {
    return (
        <div>
            <div className='flex justify-center gap-1 pb-6'>
                <input
                    type='text'
                    className='w-1/3 rounded-md px-3 outline-none bg-slate-700'
                    placeholder='Search movies...'
                />
                <Button style='primary'>
                    <SearchIcon />
                </Button>
            </div>
            <MovieList />
        </div>
    )
}

export default Movies
