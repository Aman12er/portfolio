import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import About from '../About';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent z-50">
      <div className="menuicon flex justify-between items-center px-4 py-3">
        <button 
          className="text-white block md:hidden" 
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Desktop Menu (visible on medium and larger screens) */}
        <ul className="navbar-list hidden md:flex justify-end text-lg text-white space-x-10">
          <li className="relative group pt-2">
            <NavLink to="/" className="hover:no-underline">Home</NavLink>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group pt-2">
            <NavLink to="/About" className="hover:no-underline">About</NavLink>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group pt-2">
            <NavLink to="/Project" className="hover:no-underline">Projects</NavLink>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group pt-2">
            <NavLink to="/Contact" className="hover:no-underline">Contact</NavLink>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (visible when the hamburger icon is clicked) */}
      {/* Mobile Menu (visible when the hamburger icon is clicked) */}
<div className={`${isOpen ? 'block ' : 'hidden'} md:hidden `}>
  <ul className="flex flex-col items-center text-lg text-white">
    <li className="relative group py-2">
      <NavLink to="/" className="hover:no-underline">Home</NavLink>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </li>
    <li className="relative group py-2">
      <NavLink to="/About" className="hover:no-underline">About</NavLink>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </li>
    <li className="relative group py-2">
      <NavLink to="/Project" className="hover:no-underline">Projects</NavLink>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </li>
    <li className="relative group py-2">
      <NavLink to="/Contact" className="hover:no-underline">Contact</NavLink>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </li>
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
