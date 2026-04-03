import LaceSection from "../components/LaceSection"
import AnkaraSection from "../components/AnkaraSection"
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import Navbar from "../components/Navbar"


const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Marquee text="Office Address" />
      <Hero />
      <AnkaraSection />
      <LaceSection />
    </div>
  )
}

export default Home