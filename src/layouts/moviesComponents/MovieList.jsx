import { fetchApi } from '../../configs/api.config'
import Loading from '../../components/Loading'
import MovieCart from '../../components/MovieCart'

function MovieList() {
    const { data, isLoading } = fetchApi.movies('popular')

    const movies = data?.results || []

    return (
        <section className={`grid grid-cols-4 gap-5 auto-rows-fr`}>
            {isLoading && <Loading />}
            {movies.map((result, index) => (
                <MovieCart key={result.id} movie={result} />
            ))}
        </section>
    )
}

export default MovieList
