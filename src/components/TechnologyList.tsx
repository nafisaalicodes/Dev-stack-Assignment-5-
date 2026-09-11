import TechnologyCard from "./TechnologyCard"

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

type TechnologyListProps = {
  technologies: Technology[]
   stack: Technology[]
  onAdd: (technology: Technology) => void
}

function TechnologyList({ technologies }: TechnologyListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
           onAdd={onAdd}
         isAdded={stack.some((item) => item.id === technology.id)}
        />
      ))}

    </div>
  )
}

export default TechnologyList