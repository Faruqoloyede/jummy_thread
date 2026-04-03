
import HomeCards from './HomeCards'
import { laceStyles } from '../constant'
import { Link } from 'react-router-dom'


const AnkaraSection = () => {
  return (
    <div className='relative pt-16 container'>
        <h2 className='uppercase'>lace</h2>
        <HomeCards products={laceStyles} />
        <div className='flex items-center justify-center'>
            <Link to="/ankara" className='uppercase  bg-[#7F563F] text-white p-4 mb-3'>View All</Link>
        </div>
    </div>
  )
}

export default AnkaraSection