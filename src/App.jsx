
import About from './Sections/About/About'
import AreaOfPractices from './Sections/AreaOfPractices/AreaOfPractices'
import Subscribe from './Sections/Subscribe/Subscribe'
import Landing from './Sections/Landing/Landing'
import OurTeam from './Sections/OurTeam/OurTeam'
import Reviews from './Sections/Reviews/Reviews'
import Footer from './Sections/Footer/Footer'
import Faq from './Sections/Faq/Faq'
import Navbar from './Components/Navbar/Navbar'
import HeroContent from './Components/HeroContent/HeroContent'
function App() {
  

  return (
    <div>
      <Navbar />
      <HeroContent />
      
      <About />
      <AreaOfPractices />
      <Reviews />
      <OurTeam />
      <Faq />
      <Subscribe />
      <Footer />
      
    </div>
  )
}

export default App