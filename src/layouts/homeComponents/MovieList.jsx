import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css/scrollbar";
import "swiper/css";

import MovieCart from "../../components/MovieCart";
import { fetchApi } from "../../configs/api.config";
import Loading from "../../components/Loading";

function MovieList({ className, title }) {
	const { data, isLoading } = fetchApi(
		"https://api.themoviedb.org/3/movie/now_playing?api_key=74c051a9a759397e400c5b9e1297574d"
	);
	console.log(data);
	return (
		<section className={className}>
			<h2 className="text-2xl font-semibold mb-10">{title}</h2>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				grabCursor={true}
				slidesPerGroup={2}
				className="mySwiper"
				scrollbar={{
					hide: false,
					draggable: true,
				}}
				modules={[Scrollbar]}
			>
				{data &&
					data.results.map((result, index) => (
						<SwiperSlide key={result.id}>
							<MovieCart movie={result} />
						</SwiperSlide>
					))}{" "}
				{isLoading && <Loading />}
			</Swiper>
		</section>
	);
}

MovieList.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string.isRequired,
};

export default MovieList;
