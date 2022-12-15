import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

import MovieCart from "../../components/MovieCart";

function MovieList({ className, title }) {
	return (
		<section className={className}>
			<h2 className="text-2xl font-semibold mb-10">{title}</h2>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				grabCursor={true}
				className="mySwiper"
				freeMode={true}
				pagination={{
					clickable: true,
				}}
				modules={[FreeMode, Pagination]}
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
	);
}

MovieList.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
};

export default MovieList;
