import PropTypes from "prop-types";
import Button from "../Button";
import { imageInstance } from "../../configs/api.config";

function MovieCart({ movie }) {
	return (
		<div className="rounded-xl p-4 bg-slate-800 h-full select-none flex flex-col">
			<div
				className="pt-[100%] bg-top bg-cover rounded-xl mb-4"
				style={{ backgroundImage: `url(${imageInstance}${movie.poster_path})` }}
			></div>
			<div className="flex-1 flex flex-col">
				<h3 className="mb-3 text-lg font-semibold text-overflow">{movie.title}</h3>
				<div className="flex items-center justify-between opacity-50 mb-10">
					<span>{new Date(movie.release_date).getFullYear()}</span>
					<span>{movie.vote_average}</span>
				</div>
				<Button className="w-full mt-auto">Watch Now</Button>
			</div>
		</div>
	);
}

MovieCart.propTypes = {
	movie: PropTypes.object.isRequired,
};

export default MovieCart;
