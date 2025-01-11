import React, { useState } from 'react'
import Logo from "../assets/koinx.png"
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 py-1 md:py-2">
        <div className="flex justify-between h-12 md:h-16">
          <div className="flex items-center">
            <img src={Logo} alt="KoinX" className="h-5 md:h-6" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Crypto Taxes
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Free Tools
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Resource Center
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 md:h-6 md:w-6" />
              ) : (
                <Menu className="h-5 w-5 md:h-6 md:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-2 px-4 space-y-2">
            <a 
              href="#" 
              className="block text-gray-700 hover:text-blue-600 transition duration-300 py-1.5"
            >
              Crypto Taxes
            </a>
            <a 
              href="#" 
              className="block text-gray-700 hover:text-blue-600 transition duration-300 py-1.5"
            >
              Free Tools
            </a>
            <a 
              href="#" 
              className="block text-gray-700 hover:text-blue-600 transition duration-300 py-1.5"
            >
              Resource Center
            </a>
            <button className="w-full bg-blue-600 text-white px-6 py-1.5 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
