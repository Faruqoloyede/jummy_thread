
const Hero = () => {
  return (
    <div className="relative w-full">
      <div className='hidden xl:block'>
        <img src="/ankara4.jfif" alt="hero" className='w-full ' />
      </div>
      <div className='xl:hidden'>
        <img src="/ankara4.jfif" alt="hero" className='h-125 object-cover sm:h-[unset] ' />
      </div>
    </div>
  )
}

export default Hero