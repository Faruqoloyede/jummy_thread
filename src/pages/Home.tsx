import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import Navbar from "../components/Navbar"


const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Marquee text="Welcome" />
      <Hero />
    </div>
  )
}

export default Home