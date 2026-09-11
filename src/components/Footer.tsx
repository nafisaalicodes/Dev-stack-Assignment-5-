function Footer() {
  return (
    <footer className="bg-white text-gray-900 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2">
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

            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-white">
                GitHub
              </a>

              <a href="#" className="text-gray-500 hover:text-white">
                Twitter
              </a>

              <a href="#" className="text-gray-500 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg">Product</h3>

            <div className="flex flex-col gap-3 mt-4 text-gray-400">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg">Company</h3>

            <div className="flex flex-col gap-3 mt-4 text-gray-400">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg">Legal</h3>

            <div className="flex flex-col gap-3 mt-4 text-gray-400">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-gray-400 text-sm">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer