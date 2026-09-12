
function Footer() {
  return (
    <footer className="bg-white text-gray-900 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

        
          <div className="text-center md:text-left">
            <a
              href="#"
              className="flex items-center justify-center md:justify-start gap-2"
            >
              <div className="brand-gradient flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold text-white">
                DS
              </div>

              <span className="text-base font-bold">
                Dev <span className="brand-gradient-text">Stack</span>
              </span>
            </a>

            <p className="text-gray-500 mt-4 leading-6">
              Discover the technologies and tools you need to build
              modern web applications.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
              <a
                href="#"
                className="text-gray-600"
              >
                GitHub
              </a>

              <span className="text-gray-800">•</span>

              <a
                href="#"
                className="text-gray-600"
              >
                Twitter
              </a>

              <span className="text-gray-800">•</span>

              <a
                href="#"
                className="text-gray-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          
          <div className="hidden md:block">
            <h3 className="font-semibold text-lg">Product</h3>

            <div className="flex flex-col gap-3 mt-4 text-gray-400">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>
          </div>

       
          <div className="hidden md:block">
            <h3 className="font-semibold text-lg">Company</h3>

            <div className="flex flex-col gap-3 mt-4 text-gray-400">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>

          
          <div className="hidden md:block">
            <h3 className="font-semibold text-lg">Legal</h3>

            <div className="flex flex-col gap-3 mt-4 text-gray-400">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>

        
        <div className="border-t border-gray-200 mt-10 pt-6 flex items-center justify-between gap-2 text-gray-400 text-xs whitespace-nowrap">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex justify-center md:justify-start gap-3">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer

