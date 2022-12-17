import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);
export const imageInstance = (path) => `https://image.tmdb.org/t/p/original${path}`;
export const baseURL = `https://api.themoviedb.org/3/movie/`;
export const api_key = `?api_key=74c051a9a759397e400c5b9e1297574d`;

export const api = {
	getMovies: (type, page = 1) => `${baseURL}${type}${api_key}&page=${page}`,
	searchMovie: (query, page = 1) =>
		`https://api.themoviedb.org/3/search/movie${api_key}&query=${query}&page=${page}`,
};

export const fetchApi = (url) => {
	const { data, error } = useSWR(url, fetcher);
	return { data, error };
};
