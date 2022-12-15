import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);
export const imageInstance = "https://image.tmdb.org/t/p/original";

export const fetchApi = (url) => {
	const { data, isLoading } = useSWR(url, fetcher);
	return {
		data,
		isLoading,
	};
};
