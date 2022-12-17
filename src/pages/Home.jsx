import { Banner } from "../layouts/homeComponents";
import MovieSlide from "../components/MovieSlide";

function Home() {
	return (
		<div>
			<Banner className="mb-20" />
			<MovieSlide title="Now Playing" className="mb-20" type="now_playing" />
			<MovieSlide title="Top Rating" className="mb-20" type="top_rated" />
			<MovieSlide title="Trending" type="popular" />
		</div>
	);
}

export default Home;
