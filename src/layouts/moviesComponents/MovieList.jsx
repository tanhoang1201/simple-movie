import PropTypes from 'prop-types'

import { fetchApi, api } from '../../configs/api.config'
import Loading from '../../components/Loading'
import MovieCart from '../../components/MovieCart'
import { useEffect, useState } from 'react'

function MovieList({ query }) {
    const [url, setUrl] = useState(api.getMovies('popular'))
    const { data, error } = fetchApi(url)
    useEffect(() => {
        if (query) {
            setUrl(api.searchMovie(query))
        } else {
            setUrl(api.getMovies('popular'))
        }
    }, [query])

    if (!data) {
        return <Loading />
    }

    const { results: movies } = data

    return (
        <section className={`grid grid-cols-4 gap-5 auto-rows-fr`}>
            {movies.map((result, index) => (
                <MovieCart key={result.id} movie={result} />
            ))}
        </section>
    )
}

MovieList.propTypes = {
    query: PropTypes.string,
}

export default MovieList
