import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/tailwind.css'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-lg">Your Logo</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 hover:text-accent">Home</Link>
              <Link to="/services" className="py-4 px-2 hover:text-accent">Services</Link>
              <Link to="/contact" className="py-4 px-2 hover:text-accent">Contact</Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-accent hover:text-accent-foreground">Home</Link>
          <Link to="/services" className="block py-2 px-4 text-sm hover:bg-accent hover:text-accent-foreground">Services</Link>
          <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-accent hover:text-accent-foreground">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;