import { Link, NavLink } from "react-router-dom"
import { FaFacebook, FaInstagram} from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";
const Footer = () => {

    const getYear = new Date().getFullYear();
  return (
    <footer className='relative w-full bg-[#dfdbd2] py-12'>
        <div className="container">
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
            <div className='flex flex-col items-start gap-y-3'>
                <NavLink to="/" className='block'>
                    <span className='font-bold text-3xl lg:text-4xl'>Jummy</span>
                    <span className='block text-sm font-serif logo_threads'>Threads</span>
                </NavLink>
                <div className="flex items-center gap-x-4 mt-5">
                    <FaFacebook size={25} />
                    <FaInstagram size={25} />
                </div>
            </div>
            <div className='flex flex-col items-start gap-y-3'>
                <p className="uppercase text-lg font-light">contact</p>
                <ul className="flex flex-col items-start gap-y-4">
                    <li className="flex gap-x-2">
                        <MapPin />
                        <address className="text-base font-roboto">office address</address>
                    </li>
                    <li className="flex gap-x-2">
                        <Mail />
                        <a href="mailto:hassanaishat593@gmail.com" className="text-base font-roboto">hassanaishat593@gmail.com</a>
                    </li>
                    <li className="flex gap-x-2">
                        <Phone />
                        <a href="tel:+2348159168859" className="text-base font-roboto">+234 8159168859</a>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col items-start gap-y-3'>
                <p className="uppercase text-lg font-light">products</p>
                <ul className="flex flex-col items-start gap-y-4">
                    <li className="flex gap-x-2">
                        <Link to='/ankara' className="text-base font-roboto">Ankara</Link>
                    </li>
                   <li className="flex gap-x-2">
                        <Link to='/ankara' className="text-base font-roboto">Lace</Link>
                    </li>
                   <li className="flex gap-x-2">
                        <Link to='/ankara' className="text-base font-roboto">Drawing Materials</Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col items-start gap-y-3'>
                <p className="uppercase text-lg font-light">Quick Links</p>
                <ul className="flex flex-col items-start gap-y-4">
                    <li className="flex gap-x-2">
                        <Link to='/about' className="text-base font-roboto">About</Link>
                    </li>
                   <li className="flex gap-x-2">
                        <Link to='/Contact' className="text-base font-roboto">Contact</Link>
                    </li>
                </ul>
            </div>
           
        </div>
         <p className="w-full text-center text-sm mt-20 py-7 border-t border-[#6c757d]">
                {`Jummy Threads © ${getYear} All Rights Reserved`}
            </p>
        </div>
    </footer>
  )
}

export default Footer