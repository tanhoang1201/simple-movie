import images from '../assets/images'

function NotFound() {
    return (
        <div
            className='h-screen bg-no-repeat bg-contain bg-center'
            style={{ backgroundImage: `url(${images.notFound})` }}
        ></div>
    )
}

export default NotFound
