import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper'
import 'swiper/css/scrollbar'
import 'swiper/css'

import MovieCart from '../../components/MovieCart'
import { fetchApi } from '../../configs/api.config'
import Loading from '../../components/Loading'

function MovieList({ className, title, type }) {
    const { data, isLoading } = fetchApi.movies(type)
    const movies = data?.results || []

    return (
        <section className={className}>
            <h2 className='text-2xl font-semibold mb-10'>{title}</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                grabCursor={true}
                slidesPerGroup={2}
                className='mySwiper movieSlide'
                scrollbar={{
                    hide: false,
                    draggable: true,
                }}
                modules={[Scrollbar]}
            >
                {movies.map((result, index) => (
                    <SwiperSlide key={result.id}>
                        <MovieCart movie={result} />
                    </SwiperSlide>
                ))}{' '}
                {isLoading && <Loading />}
            </Swiper>
        </section>
    )
}

MovieList.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default MovieList
