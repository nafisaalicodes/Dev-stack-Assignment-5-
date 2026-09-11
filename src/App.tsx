import { useEffect, useState } from "react"
import technologiesData from "./data/technologies.json"
import Navbar from "./components/Navbar"

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
    setTechnologies(technologiesData)
    setLoading(false)
  }, [])

  if (loading) {
    return <h1>Loading technologies...</h1>
  }

  return (
    <>
      <Navbar />

      <main>
        <h1 className="text-4xl font-bold text-center mt-20">
          Dev Stack
        </h1>

        {technologies.map((technology) => (
          <div key={technology.id}>
            <h2>{technology.name}</h2>
          </div>
        ))}
      </main>
    </>
  )
}

export default App