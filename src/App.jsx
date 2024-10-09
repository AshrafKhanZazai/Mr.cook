import Hero from "./components/Hero"
import './App.css';
import Navbar2 from "./components/Navbar2"

import { BackgroundLines } from "./components/ui/background-lines"
import SpeacialFood from "./components/SpeacialFood";
import Servies from "./components/Servies";



const App = () => {
  return (
  <>
  <BackgroundLines>
   <Navbar2 />
   <Hero />?
   <SpeacialFood />
   <Servies />
  </BackgroundLines>
  </>
  )
}

export default App