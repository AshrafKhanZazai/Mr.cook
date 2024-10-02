import Hero from "./components/Hero"
import './App.css';
import Navbar2 from "./components/Navbar2"

import { BackgroundLines } from "./components/ui/background-lines"



const App = () => {
  return (
  <>
  <BackgroundLines>
   <Navbar2 />
   <Hero />?
  </BackgroundLines>
  </>
  )
}

export default App