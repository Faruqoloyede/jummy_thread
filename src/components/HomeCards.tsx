import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

type productsProps = {
  id: string
  name: string
  price: number
  image: string
}

type HomecardProps = {
  products: productsProps[]
}

// 🔹 Replace with actual tailor phone number (include country code, no +)
const tailorPhoneNumber = "2347066156172"

const HomeCards = ({ products }: HomecardProps) => {

  // 🔹 Function to generate WhatsApp link
  const getWhatsAppLink = (item: productsProps) => {
    const message = `Hello 👋

I'm interested in this outfit:

Name: ${item.name}
Price: ₦${item.price.toLocaleString()}
Can you make this for me?
`

    return `https://wa.me/${tailorPhoneNumber}?text=${encodeURIComponent(message)}`
  }

  return (
    <div className='gap-x-4 gap-y-8 item_container py-4'>
      {products.slice(0, 3).map((item) => (
        <div key={item.id} className='flex flex-col'>

          {/* 🔹 Clickable product section */}
          <Link to={`/ankaradetails/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className='product-image home-photos'
            />

            <div className='px-4 mt-3'>
              <div className='flex justify-center items-baseline gap-x-3'>
                <p>{item.name}</p>
                <Heart aria-label='favorites' className='mr-4' size={20} />
              </div>

              <p>₦{item.price.toLocaleString()}</p>
            </div>
          </Link>

          {/* 🔹 WhatsApp button (outside Link to avoid conflict) */}
          <div className='flex items-center justify-center mt-2'>
            <a
              href={getWhatsAppLink(item)}
              target="_blank"
              rel="noopener noreferrer"
              className='uppercase underline'
            >
              chat tailor
            </a>
          </div>

        </div>
      ))}
    </div>
  )
}

export default HomeCards