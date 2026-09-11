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

type TechnologyCardProps = {
  technology: Technology
   onAdd: (technology: Technology) => void
  isAdded: boolean
}


function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="border rounded-2xl p-5 bg-white shadow-sm">

      <div className="flex items-center justify-between">

        <img
          src={technology.icon}
          alt={technology.name}
          className="w-12 h-12"
        />

        <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
          {technology.badge}
        </span>

      </div>

      <h2 className="text-xl font-bold mt-5">
        {technology.name}
      </h2>

      <p className="text-gray-600 mt-2">
        {technology.description}
      </p>

      <div className="flex justify-between mt-5">

        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          {technology.category}
        </span>

        <span className="text-sm">
          {technology.difficulty}
        </span>

      </div>

      <div className="mt-4">
        ⭐ {technology.rating}
      </div>

       <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className="w-full mt-5 bg-black text-white py-2 rounded-lg disabled:bg-gray-400"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  )
}

export default TechnologyCard