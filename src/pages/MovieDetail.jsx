import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

import { imageInstance } from "../configs/api.config";
import { fetchApi } from "../configs/api.config";

function MovieDetail() {
	const { movieId } = useParams();
	const { data, isLoading } = fetchApi.movies(movieId);
	const movie = data || {};
	console.log(movie);
	const genres = movie.genres || [];
	return (
		<div>
			{isLoading && <Loading />}
			<section className="relative pt-[50%] mb-10">
				<div
					className="absolute h-[75%] w-full top-0 left-0 bg-center bg-cover"
					style={{ backgroundImage: `url(${imageInstance}${movie.poster_path})` }}
				>
					<div className="absolute inset-0 bg-gradient-to-t from-black to-[rgba(0,0,0,0.3)]"></div>
				</div>
				<img
					src={`${imageInstance}${movie.backdrop_path}`}
					className="absolute h-1/2 bottom-0 left-1/2 -translate-x-1/2 object-cover object-center rounded-md"
					alt=""
				/>
			</section>
			<div>
				<h2 className="text-center text-2xl font-semibold mb-7 "> {movie.title}</h2>
				<div className="flex justify-center gap-5 mb-10">
					{genres.map((genre, index) => (
						<span className="border-2 px-2 py-1 rounded-3xl" key={index}>
							{genre.name}
						</span>
					))}
				</div>
				<p className="w-2/3 text-center mx-auto">{movie.overview}</p>
			</div>
		</div>
	);
}

export default MovieDetail;
