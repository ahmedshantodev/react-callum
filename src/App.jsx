import './App.css'
import AboutMe from './section/AboutME'
import Banner from './section/Banner'
import Navbar from './section/Navbar'
import Resume from './section/Resume'
import WhatiDo from './section/WhatiDo'
import Portfolio from './section/Portfolio'
import Interested from './section/Interested'
import Faq from './section/Faq'
import Client from './section/Client'
import ContactMe from './section/ContactMe'
import Footer from './section/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutMe />
      <WhatiDo />
      <Resume />
      <Portfolio />
      <Interested />
      <Faq />
      <Client />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
