import HomeCards from '../components/HomeCards'
import { laceStyles } from '../constant'

const Laice = () => {
  return (
    <div className="relative">
      <HomeCards products={laceStyles} />
    </div>
  )
}

export default Laice