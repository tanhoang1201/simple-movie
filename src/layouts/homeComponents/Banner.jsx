import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { fetchApi, api } from '../../configs/api.config'
import BannerItem from './BannerItem'
import Loading from '../../components/Loading'

function Banner({ className }) {
    const { data, error } = fetchApi(api.getMovies('upcoming'))

    if (!data) {
        return <Loading />
    }
    const { results: movies } = data

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
