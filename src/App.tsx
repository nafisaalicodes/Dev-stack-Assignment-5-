import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechnologyList from "./components/TechnologyList"
import YourStack from "./components/YourStack"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "./components/Footer"

type Technology = {
  id: string
  name: string
  category: string
  description: string
  icon: string
  rating: number
  difficulty: string
  badge: string
}

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
     fetch("/data/technologies.json")
    .then((response) => response.json())
    .then((data) => {
    setTechnologies(data)
    setLoading(false)
       })
  }, [])

  if (loading) {
    return <h1>Loading technologies...</h1>
    
  }

  return (
    <>
      <Navbar />
      <Hero />
        <Footer />
      
    
    </>
  )
}

export default App