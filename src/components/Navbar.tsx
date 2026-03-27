import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navitems } from '../constant';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className='sticky top-0 w-full bg-white z-50'>
      <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
        
        {/* Logo */}
        <NavLink to="/" className='block'>
          <span className='font-bold text-3xl lg:text-4xl'>Jummy</span>
          <span className='block text-sm logo_threads'>Threads</span>
        </NavLink>

        {/* Desktop Links */}
        <ul className='hidden md:flex list-none'>
          {navitems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `text-[16px] mr-6 uppercase hover:border-b-2 ${
                    isActive ? 'text-red-500 border-b-2 border-red-500' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className='flex items-center'>
          <Heart aria-label='favorites' className='mr-4' />
          
          {/* Hamburger Menu for Mobile */}
          <button className='md:hidden' onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='flex flex-col md:hidden bg-white w-full text-center py-4 shadow-lg'>
          {navitems.map((item, index) => (
            <li key={index} className='mb-4'>
              <NavLink
                to={item.link}
                onClick={() => setIsOpen(false)} // close menu on click
                className={({ isActive }) =>
                  `text-[18px] uppercase ${
                    isActive ? 'text-red-500' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;