
import HomeCards from './HomeCards'
import { ankara } from '../constant'
import { Link } from 'react-router-dom'


const AnkaraSection = () => {
  return (
    <div className='relative pt-16 container'>
        <h2 className='uppercase'>Ankara</h2>
        <HomeCards ankara={ankara} />
        <div className='flex items-center justify-center'>
            <Link to="/ankara" className='uppercase  bg-[#7F563F] text-white p-4'>View All</Link>
        </div>
    </div>
  )
}

export default AnkaraSection