import PropTypes from 'prop-types'

import MovieCart from '../../components/MovieCart'

function MovieList({ className, title }) {
    return (
        <section className={className}>
            <h2 className='text-2xl font-semibold mb-10'>{title}</h2>
            <div className='grid grid-cols-4'>
                <MovieCart />
            </div>
        </section>
    )
}

MovieList.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default MovieList
