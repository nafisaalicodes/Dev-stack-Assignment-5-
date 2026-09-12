import picture from "../assets/banner-stack.png";
function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

        <div className="grid min-w-0 md:grid-cols-2 gap-10 items-center">

        
          <div className="min-w-0 text-center md:text-left">

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build Your Ideal
              <span className="block brand-gradient-text">
                Development Stack
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-xl mx-auto md:mx-0">
              Explore Frontend,Backend,database and data options,
              Compare them step by step, and put together the stack that fits your
              next project. 
            </p>

            <div className="flex  gap-2 mt-8">

              <button className="brand-gradient text-white px-3 py-3 rounded-lg font-semibold flex-1 whitespace-nowrap">
                Explore Technologies
              </button>

              <button className="border border-gray-300 px-3 py-3 rounded-lg font-semibold flex-1 ">
                Learn More
              </button>

            </div>

          </div>

          <div className="min-w-0 flex justify-center">

          <img 
           src={picture} 
           alt="Developer working with technology" 
           className="w-full max-w-lg" 
          />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero