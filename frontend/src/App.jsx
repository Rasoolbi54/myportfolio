import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import ProjectsSection from './components/Projects'
import ContactPage from './components/Contact'

function App() {

  return (
   <div>
       <Navbar />
       <Home />
       <About />
       <Experience />
       <ProjectsSection />
       <ContactPage />
   </div>
  )
}

export default App
