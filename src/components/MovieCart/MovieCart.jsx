import images from '../../assets/images'
import Button from '../Button'

function MovieCart({}) {
    return (
        <div className='rounded-xl p-4 bg-slate-800'>
            <div
                className='pt-[100%] bg-top bg-cover rounded-xl mb-4'
                style={{ backgroundImage: `url(${images.banner})` }}
            ></div>
            <div>
                <h3 className='mb-3 text-lg font-semibold'>Spiderman: Homecoming</h3>
                <div className='flex items-center justify-between opacity-50 mb-10'>
                    <span>2017</span>
                    <span>7.4</span>
                </div>
                <Button className='w-full'>Watch Now</Button>
            </div>
        </div>
    )
}

export default MovieCart
