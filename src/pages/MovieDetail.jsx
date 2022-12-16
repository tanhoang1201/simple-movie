import { useParams } from 'react-router-dom'

function MovieDetail() {
    const { movieId } = useParams()
    console.log(movieId)
    return <div>ok</div>
}

export default MovieDetail
