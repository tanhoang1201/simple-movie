import PropTypes from 'prop-types'

import { fetchApi } from '../../configs/api.config'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, EffectFade } from 'swiper'

import BannerItem from './BannerItem'
import Loading from '../../components/Loading'

function Banner({ className }) {
    const { data, isLoading } = fetchApi.movies('upcoming')
    const movies = data?.results || []

    return (
        <section className={`${className}`}>
            <Swiper
                spaceBetween={30}
                effect='fade'
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, EffectFade]}
                className='mySwiper banner'
            >
                {isLoading && <Loading />}
                {movies.map((result, index) => (
                    <SwiperSlide key={result.id}>
                        <BannerItem movie={result} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

Banner.propTypes = {
    className: PropTypes.string,
}

export default Banner
