import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)
export const imageInstance = 'https://image.tmdb.org/t/p/original'
export const baseURL = `https://api.themoviedb.org/3/movie/`
export const api_key = `?api_key=74c051a9a759397e400c5b9e1297574d`

export const fetchApi = {
    movies: (type) => useSWR(`${baseURL}${type}${api_key}`, fetcher),
}
