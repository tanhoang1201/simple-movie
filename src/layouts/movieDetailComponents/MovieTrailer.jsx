import PropTypes from 'prop-types'
import Loading from '../../components/Loading'
import { api, fetchApi, imageInstance } from '../../configs/api.config'

function MovieTrailer({ movieId, className }) {
    const { data, error } = fetchApi(api.getMovies(`${movieId}/videos`))

    if (error) {
        return 'Error...'
    }
    if (!data) {
        return <Loading />
    }

    const { results: videos } = data

    if (videos.length < 1) {
        return (
            <h2 className='text-primary text-2xl font-semibold mb-10 text-center'>No Videos...</h2>
        )
    }

    return (
        <section className={`${className} flex flex-col gap-14`}>
            {videos.slice(0, 3).map((video) => (
                <div key={video.id} className='text-center'>
                    <h3 className='text-lg mb-5 bg-primary p-2 inline-block rounded-md'>
                        {video.name}
                    </h3>
                    <iframe
                        className='aspect-video w-1/2 mx-auto'
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title="NCT DREAM 엔시티 드림 'Candy' MV"
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </section>
    )
}

MovieTrailer.propTypes = {
    movieId: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default MovieTrailer
