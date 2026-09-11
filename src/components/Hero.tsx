function Hero() {
  return (
    <section className="py-20 px-6">

      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-4xl md:text-6xl font-bold">
          Build Your{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Developer Stack
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600">
          Discover the best technologies and build your perfect
          developer stack for modern web development.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white px-6 py-3 rounded-full">
            Explore Technologies
          </button>

          <button className="border px-6 py-3 rounded-full">
            Learn More
          </button>

        </div>

      </div>

    </section>
  )
}

export default Hero