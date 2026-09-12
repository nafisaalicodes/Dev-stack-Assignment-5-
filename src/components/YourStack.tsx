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

type YourStackProps = {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="border border-gray-200 rounded-2xl p-5 bg-white">

     
      <div className="mb-4">
        <h2 className="text-xl font-bold">
          Your Stack
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} Technology Selected`}
        </p>
      </div>

      
      {stack.length === 0 && (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center mt-4">
          <p className="text-gray-400 text-sm">
            Your stack is empty.
          </p>
        </div>
      )}

     
      {stack.length > 0 && (
        <div className="flex flex-col gap-3 mt-4">

          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 border border-gray-200 rounded-lg p-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-10 h-10 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-semibold">
                  {technology.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-red-500 font-bold px-2 py-1"
              >
                ✕
              </button>

            </div>
          ))}

         
          <button
            onClick={onRemoveAll}
            className="w-full border border-red-500 text-red-500 py-2 rounded-lg mt-3"
          >
            Remove All
          </button>

        </div>
      )}

    </aside>
  )
}

export default YourStack