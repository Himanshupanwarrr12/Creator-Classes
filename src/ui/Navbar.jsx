import { useState } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X, GraduationCap } from "lucide-react"

function NavBar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/programs", label: "Programs" },
    { path: "/about", label: "About" },
    { path: "/results", label: "Results" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-gradient-to-r from-slate-900/95 via-indigo-900/95 to-slate-900/95 backdrop-blur-md py-4 px-4 sticky top-0 z-50 shadow-2xl border-b border-indigo-700/50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Branding */}
        <div className="flex items-center group">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-700 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300">
        
           <img src="/cclogo.png" alt="Logo" className="w-10 h-10  object-contain" />
          </div>
          <div className="ml-3">
            <h1 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
              Creator Classes
            </h1>
            <p className="text-sm text-indigo-300 font-medium">We are here to create toppers</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition-all duration-300 relative group px-3 py-2 rounded-lg ${
                  isActive
                    ? "text-indigo-400 bg-indigo-800/30 border border-indigo-500/30"
                    : "text-indigo-200 hover:text-indigo-300 hover:bg-indigo-800/20"
                }`
              }
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}

          {/* CTA Button */}
          <NavLink
            to="/contact"
            className="bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-900/30 ml-3"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-indigo-800/30 transition-all duration-300 border border-indigo-700/50 hover:border-indigo-500/50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 mx-4">
          <div className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl border border-indigo-700/50 shadow-2xl overflow-hidden">
            <div className="flex flex-col">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium transition-all duration-300 py-4 px-6 ${
                      isActive
                        ? "bg-indigo-500/10 text-indigo-400 border-r-4 border-indigo-500"
                        : "text-indigo-200 hover:bg-indigo-800/30 hover:text-indigo-300"
                    } ${index !== navItems.length - 1 ? "border-b border-indigo-700/30" : ""}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-3 text-indigo-400" />
                    {item.label}
                  </div>
                </NavLink>
              ))}

              {/* Mobile CTA */}
              <div className="p-4 border-t border-indigo-700/30">
                <NavLink
                  to="/contact"
                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-700 hover:from-indigo-700 hover:to-violet-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar