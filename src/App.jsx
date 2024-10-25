import { BackgroundLines } from "./components/ui/background-lines"
import SpeacialFood from "./components/Speacial Food/SpeacialFood";
import Servies from "./components/Servies";
import Navbar2 from "./components/Navbar2"
import Buttons from "./components/Menu/Buttons";
import Hero from "./components/Hero"
import './App.css';
import Contact from "./components/Contact";
import Footer from "./components/Footer";



const App = () => {
  return (
  <>
  <BackgroundLines>
   <Navbar2 />
   <Hero />?
   <SpeacialFood />
   <Servies />
   <Buttons />
   <Contact />
   <Footer />
  </BackgroundLines>
  </>
  )
}

export default App