import { useState } from "react";
import lodash from "lodash";

import Button from "../components/Button";
import { SearchIcon } from "../components/icons";
import MovieList from "../layouts/moviesComponents/MovieList";

function Movies() {
	const [filter, setFilter] = useState("");
	const handleChange = lodash.debounce((e) => {
		setFilter(e.target.value);
	}, 600);

	return (
		<div>
			<div className="flex justify-center gap-1 pb-6">
				<input
					spellCheck={false}
					defaultValue={filter}
					onChange={handleChange}
					type="text"
					className="w-1/3 rounded-md px-3 outline-none bg-slate-700"
					placeholder="Search movies..."
				/>
				<Button style="primary">
					<SearchIcon />
				</Button>
			</div>

			<MovieList query={filter} className="mb-10" />
		</div>
	);
}

export default Movies;
