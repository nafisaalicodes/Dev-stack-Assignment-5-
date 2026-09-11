function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build Your Ideal
              <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-xl">
              Explore Frontend,Backend,database and data options,
              Compare them step by step, and put together the stack that fits your
              next project. 
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold">
                Explore Technologies
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold">
                Learn More
              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">

            <img
              src="/assets/banner-stack.png"
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