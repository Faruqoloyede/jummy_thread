import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'


type productsProps={
  id: string,
  name: string,
  price: number,
  image: string,
}

type cardProps = {
  products: productsProps[],
}

const Cards = ({products}: cardProps) => {
   return (
    <div className='gap-x-4 gap-y-8 item_container py-4'>
      {products.map((item)=>(
        <Link to={`/ankaradetails/${item.id}`} key={item.id} className='flex flex-col'>
          <img src={item.image} alt={item.name} className='product-image home-photos' />
          <div className='px-4 mt-3'>
            <div className='flex justify-center items-baseline gap-x-3'>
              <p>{item.name}</p>
              <Heart aria-label='favorites' className='mr-4' size={20} />
            </div>
            <p>₦{item.price.toLocaleString()}</p>
            <div className='flex items-center justify-center'>
              <a href="" className='uppercase underline'>chat tailor</a>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cards