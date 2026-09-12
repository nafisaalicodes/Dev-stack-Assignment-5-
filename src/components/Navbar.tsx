import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full overflow-x-hidden  border-b border-gray-100 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        
        
        <div className="hidden h-14 items-center justify-between md:flex">
          
          
          <a href="#" className="flex items-center gap-2">
            <div className="brand-gradient flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold text-white">
              DS
            </div>

            <span className="text-base font-bold whitespace-nowrap  flex items-center gap-0">
              <span>Dev</span><span className="brand-gradient-text">Stack</span>
            </span>
          </a>

          
          <div className="flex items-center gap-7 text-xs text-gray-600">
            <a href="#" className="text-pink-500">
              Home
            </a>

            <a href="#technologies" className="hover:text-pink-500">
              Technologies
            </a>

            <a href="#" className="hover:text-pink-500">
              Projects
            </a>

            <a href="#" className="hover:text-pink-500">
              About
            </a>

            <a href="#contact" className="hover:text-pink-500">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-xs text-gray-600">
              Sign In
            </button>

            <button className="brand-gradient rounded-full px-5 py-2 text-xs font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>

        
        <div className="flex h-14 items-center justify-between gap-2 md:hidden">
          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="shrink-0 text-xl"
          >
            ☰
          </button>

          <a href="#" className="flex min-w-0 items-center gap-2">
            <div className="brand-gradient flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold text-white">
              DS
            </div>

            <span className="text-base font-bold whitespace-nowrap">
              Dev<span className="brand-gradient-text">Stack</span>
            </span>
          </a>

          <div className="flex shrink-0 items-center gap-2">
            <button className="whitespace-nowrap text-xs text-gray-600">
              Sign In
            </button>

            <button className="brand-gradient whitespace-nowrap rounded-full px-3 py-1.5 text-xs text-white">
              Sign Up
            </button>
          </div>
        </div>

        
        {menuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-gray-600">
              <a href="#">Home</a>
              <a href="#technologies">Technologies</a>
              <a href="#">Projects</a>
              <a href="#">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar