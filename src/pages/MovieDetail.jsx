import { useParams } from 'react-router-dom'

import { imageInstance } from '../configs/api.config'
import { fetchApi, api } from '../configs/api.config'
import { MovieSlide } from '../layouts/homeComponents'
import { MovieTrailer } from '../layouts/movieDetailComponents'
import MovieCredits from '../layouts/movieDetailComponents/MovieCredits'
import images from '../assets/images'
import Loading from '../components/Loading'

function MovieDetail() {
    const { movieId } = useParams()
    const { data: movie, error } = fetchApi(api.getMovies(movieId))

    if (!movie) return <Loading />

    const { genres } = movie

    return (
        <div>
            <section className='relative pt-[50%] mb-10'>
                <div
                    className='absolute h-[75%] w-full top-0 left-0 bg-center bg-cover'
                    style={{
                        backgroundImage: `url(${imageInstance}${movie.poster_path})`,
                    }}
                >
                    <div className='absolute inset-0 bg-gradient-to-t from-black to-[rgba(0,0,0,0.3)]'></div>
                </div>
                <img
                    src={
                        movie.backdrop_path
                            ? `${imageInstance}${movie.backdrop_path}`
                            : images.errorAvatar
                    }
                    className='absolute h-1/2 bottom-0 left-1/2 -translate-x-1/2 object-cover object-center rounded-md'
                    alt=''
                />
            </section>
            <section className='mb-10 '>
                <h2 className='text-center text-2xl font-semibold mb-7 '> {movie.title}</h2>
                <div className='flex justify-center gap-5 mb-10'>
                    {genres.map((genre, index) => (
                        <span className='border-2 px-2 py-1 rounded-3xl' key={index}>
                            {genre.name}
                        </span>
                    ))}
                </div>
                <p className='w-2/3 text-center mx-auto'>{movie.overview}</p>
            </section>
            <MovieCredits movieId={movieId} className='mb-14' />
            <MovieTrailer movieId={movieId} className='mb-10' />
            <MovieSlide title='Similar' type={`${movieId}/similar`} />
        </div>
    )
}

export default MovieDetail
