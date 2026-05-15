import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import HowItWorks from '../components/sections/HowItWorks'
import MostPopular from '../components/sections/MostPopular'
import Testimonials from '../components/sections/Testimonials'
import Footer from '../components/sections/Footer'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowItWorks />
      <MostPopular />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage