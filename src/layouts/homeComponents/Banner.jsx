import PropTypes from 'prop-types'

import { fetchApi } from '../../configs/api.config'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'

import BannerItem from './BannerItem'

function Banner({ className }) {
    const { data, isLoading } = fetchApi(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=74c051a9a759397e400c5b9e1297574d`
    )
    console.log(data)
    return (
        <section className={`${className}`}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className='mySwiper banner'
            >
                {data &&
                    data.results.map((result, index) => (
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
