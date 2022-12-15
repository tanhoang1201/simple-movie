import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Scrollbar } from 'swiper'
import 'swiper/css/scrollbar'
import 'swiper/css'

import MovieCart from '../../components/MovieCart'

function MovieList({ className, title }) {
    return (
        <section className={className}>
            <h2 className='text-2xl font-semibold mb-10'>{title}</h2>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                grabCursor={true}
                slidesPerGroup={2}
                className='mySwiper pb-8'
                scrollbar={{
                    hide: false,
                    draggable: true,
                }}
                modules={[Scrollbar]}
            >
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCart />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

MovieList.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default MovieList
