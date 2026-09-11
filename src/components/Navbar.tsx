function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b">

      <div className="max-w-7xl mx-auto px-4 py-4">

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">

          <div className="text-2xl font-bold">
            Dev Stack
          </div>

          <div className="flex gap-6">
            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="flex gap-3">
            <button>Sign In</button>

            <button className="bg-black text-white px-5 py-2 rounded-full">
              Sign Up
            </button>
          </div>

        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between">

          <button className="text-2xl">
            ☰
          </button>

          <div className="text-xl font-bold">
            Dev Stack
          </div>

          <div className="flex gap-2">
            <button className="text-sm">
              Sign In
            </button>

            <button className="bg-black text-white px-3 py-1 rounded-full text-sm">
              Sign Up
            </button>
          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar