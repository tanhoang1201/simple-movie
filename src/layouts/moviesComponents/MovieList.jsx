import { fetchApi } from '../../configs/api.config'
import Loading from '../../components/Loading'
import MovieCart from '../../components/MovieCart'

function MovieList() {
    const { data, isLoading } = fetchApi(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=74c051a9a759397e400c5b9e1297574d`
    )
    return (
        <section className={`grid grid-cols-4 gap-5 auto-rows-fr`}>
            {isLoading && <Loading />}
            {data &&
                data.results.map((result, index) => <MovieCart key={result.id} movie={result} />)}
        </section>
    )
}

export default MovieList
