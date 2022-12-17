import PropTypes from "prop-types";
import Loading from "../../components/Loading";
import { api, fetchApi, imageInstance } from "../../configs/api.config";
import images from "../../assets/images";

function MovieCredits({ movieId, className }) {
	const { data, error } = fetchApi(api.getMovies(`${movieId}/credits`));

	if (error) {
		return "Error...";
	}

	if (!data) {
		return <Loading />;
	}

	const { cast } = data;

	return (
		<section className={className}>
			<h2 className="text-center text-2xl font-semibold mb-8">Cast</h2>
			<div className="grid grid-cols-5 gap-8 ">
				{cast.slice(0, 5).map((item, index) => (
					<div key={item.id}>
						<img
							src={item.profile_path ? `${imageInstance(item.profile_path)}` : images.errorImg}
							alt="Actor"
							className="rounded mb-3"
						/>
						<h3 className="text-center font-semibold text-lg">{item.name}</h3>
					</div>
				))}
			</div>
		</section>
	);
}

MovieCredits.propTypes = {
	movieId: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default MovieCredits;
