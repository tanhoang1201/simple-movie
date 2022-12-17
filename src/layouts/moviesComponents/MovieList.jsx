import PropTypes from "prop-types";
import { Pagination } from "@mui/material";

import { fetchApi, api } from "../../configs/api.config";
import Loading from "../../components/Loading";
import MovieCart from "../../components/MovieCart";
import { useEffect, useState } from "react";

function MovieList({ query, className }) {
	const [pages, setPage] = useState(1);
	const [url, setUrl] = useState(api.getMovies("popular"));
	const { data, error } = fetchApi(url);
	useEffect(() => {
		if (query) {
			setUrl(api.searchMovie(query, pages));
		} else {
			setUrl(api.getMovies("popular", pages));
		}
	}, [query, pages]);

	const handleChangePaginate = (e, page) => {
		setPage(page);
	};

	if (!data) {
		return <Loading />;
	}

	const { results: movies, total_results } = data;

	const pageCount = Math.ceil(total_results / movies.length);

	return (
		<div>
			<div className="mb-10 text-center">
				<Pagination
					page={pages}
					sx={{
						display: "inline-block",
					}}
					count={pageCount}
					color="primary"
					size="large"
					onChange={handleChangePaginate}
					siblingCount={3}
				/>
			</div>
			<section className={`${className} grid grid-cols-4 gap-5 auto-rows-fr`}>
				{movies.map((result, index) => (
					<MovieCart key={result.id} movie={result} />
				))}
			</section>
			<div className="mb-10 text-center">
				<Pagination
					page={pages}
					sx={{
						display: "inline-block",
					}}
					count={pageCount}
					color="primary"
					size="large"
					onChange={handleChangePaginate}
					siblingCount={3}
				/>
			</div>
		</div>
	);
}

MovieList.propTypes = {
	query: PropTypes.string,
	className: PropTypes.string,
};

export default MovieList;
