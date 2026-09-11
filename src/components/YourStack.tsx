type Technology = {
  id: string
  name: string
  category: string
  icon: string
}

type YourStackProps = {
  stack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

function YourStack({ stack }: YourStackProps) {
  return (
    <aside className="border rounded-2xl p-5">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">
          Your Stack
        </h2>

        <span className="text-sm text-gray-500">
          {stack.length} Selected
        </span>

      </div>

      {stack.length === 0 ? (

        <p className="text-gray-500 text-center py-10">
          No technologies selected yet.
        </p>

      ) : (

        <div className="mt-5 space-y-3">

          {stack.map((technology) => (

            <div
              key={technology.id}
              className="flex items-center gap-3 border rounded-lg p-3"
            >

              <img
                src={technology.icon}
                alt={technology.name}
                className="w-8 h-8"
              />

              <div className="flex-1">
                <h3 className="font-semibold">
                  {technology.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {technology.category}
                </p>
              </div>

              <button onClick={() => onRemove(technology.id)}>
                ✕
              </button>

            </div>

          ))}

          <button  onClick={onRemoveAll} className="w-full border py-2 rounded-lg">
            Remove All
          </button>

        </div>

      )}

    </aside>
  )
}

export default YourStack