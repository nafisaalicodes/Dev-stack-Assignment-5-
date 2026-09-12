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

function TechnologyCard({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white">

      
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-12 h-12 object-contain"
        />

        <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
          {technology.badge}
        </span>
      </div>

      
      <h2 className="text-xl font-bold mt-5">
        {technology.name}
      </h2>

      
      <p className="text-gray-500 mt-2 min-h-[48px]">
        {technology.description}
      </p>

  <div className="flex items-center justify-between mt-5">

  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
    {technology.category}
  </span>

  <span className="text-sm text-gray-600">
    {technology.difficulty}
  </span>

  <span className="text-sm">
    ⭐ {technology.rating}
  </span>

</div>

      
      <button
        onClick={() => onAdd(technology)}
        className="w-full mt-5 bg-black text-white py-2 rounded-lg disabled:bg-gray-400"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </div>
  )
}

export default TechnologyCard