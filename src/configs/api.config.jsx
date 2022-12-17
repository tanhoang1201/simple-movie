import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)
export const imageInstance = 'https://image.tmdb.org/t/p/original'
export const baseURL = `https://api.themoviedb.org/3/movie/`
export const api_key = `?api_key=74c051a9a759397e400c5b9e1297574d`

export const api = {
    getMovies: (type) => `${baseURL}${type}${api_key}`,
    searchMovie: (query) => `https://api.themoviedb.org/3/search/movie${api_key}&query=${query}`,
}

export const fetchApi = (url) => {
    const { data, error } = useSWR(url, fetcher)
    return { data, error }
}
