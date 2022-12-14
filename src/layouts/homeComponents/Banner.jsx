import PropTypes from 'prop-types'

import images from '../../assets/images'
import Button from '../../components/Button'

function Banner({ className }) {
    return (
        <section
            className={`${className} h-[500px] rounded-lg bg-center bg-cover relative overflow-hidden`}
            style={{ backgroundImage: `url(${images.banner})` }}
        >
            <div className='absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)]'></div>
            <div className='absolute left-0 bottom-0 w-full p-6 '>
                <h2 className='text-4xl font-bold mb-5'>Avengers: Endgame</h2>
                <div className='flex gap-5 mb-8'>
                    <Button style='outline'>Adventure</Button>
                    <Button style='outline'>Adventure</Button>
                    <Button style='outline'>Adventure</Button>
                </div>
                <Button style='primary'>Watch Now</Button>
            </div>
        </section>
    )
}

Banner.propTypes = {
    className: PropTypes.string,
}

export default Banner
