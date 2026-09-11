import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechnologyCard from "./components/TechnologyCard"
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
  const [stack, setStack] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
     fetch("/data/technologies.json")
    .then((response) => response.json())
    .then((data) => {
    setTechnologies(data)
    setLoading(false)
       })
  }, [])
  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    )

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack!")
      return
    }

    setStack([...stack, technology])
    toast.success(`${technology.name} added to your stack!`)
  }

  const handleRemove = (id: string) => {
  const technology = stack.find(
    (item) => item.id === id
  )

  setStack(
    stack.filter((technology) => technology.id !== id)
  )

  toast.info(`${technology?.name} removed from your stack!`)
}

  const handleRemoveAll = () => {
    setStack([])
    toast.info("All technologies removed from your stack!")
  }

  if (loading) {
    return <h1>Loading technologies...</h1>
    
  }

  return (
    <>
      <Navbar />
      <Hero />
       <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-left mb-10">
  <h2 className="text-3xl md:text-4xl font-bold">
    Explore the{" "}
    <span className="brand-gradient-text">
      Technologies
    </span>
  </h2>

  <p className="text-gray-500 mt-3">
    Pick one technology per category to build your ideal stack.
  </p>
</div>

        <div className="grid lg:grid-cols-4 gap-6">

          {/* Technology Cards */}
          <div className="lg:col-span-3">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAdd}
                  isAdded={stack.some(
                    (item) => item.id === technology.id
                  )}
                />
              ))}

            </div>

          </div>

          {/* Your Stack */}
          <div className="lg:col-span-1">

            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />

          </div>

        </div>

      </main>

      <Footer />
        <ToastContainer />
    
    </>
  )
}

export default App