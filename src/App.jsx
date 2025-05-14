

import  { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import Aos from 'aos';
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init();
    }, [])
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects/>
        <Contact />
      </div>
    </>
  )
}

export default App