import React, { useState, useRef } from 'react';
import { ShoppingCart, User, Menu, X, Pi, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [cartCount] = useState(0);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'All Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: '3D Printing', path: '/printing-service' },
    { name: 'Contact', path: '#contact' }
  ];

  const handleAuthClick = () => {
    if (currentUser) {
      logout();
    } else {
      navigate('/login');
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); // Close mobile menu if open
      }
    }
  };

  return (
    <nav className="relative w-full z-50 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Pi className="text-blue-500 h-8 w-8" />
              <span className="ml-2 text-2xl font-bold text-blue-500">PiCraft</span>
            </div>
          </div>

          {/* Desktop Menu with Animation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <ul
              className="relative mx-auto flex w-fit rounded-full bg-gray-800/50 p-1"
              onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
            >
              {menuItems.map((item) => (
                <Tab
                  key={item.name}
                  setPosition={setPosition}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                >
                  {item.name}
                </Tab>
              ))}
              <Cursor position={position} />
            </ul>
          </div>

          {/* Utility buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-500 transition-colors bg-gray-800 rounded-lg px-4 py-2"
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm">{currentUser.email}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-800 shadow-lg py-1 border border-gray-700">
                    <div className="px-4 py-2 border-b border-gray-700">
                      <p className="text-sm text-gray-300">Signed in as</p>
                      <p className="text-sm font-medium text-blue-500 truncate">
                        {currentUser.email}
                      </p>
                    </div>
                    <a
                      href="#profile"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-500"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#settings"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-500"
                    >
                      Settings
                    </a>
                    <button
                      onClick={handleAuthClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-500"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={handleAuthClick}
                className="text-gray-300 hover:text-blue-500 flex items-center space-x-2 transition-colors"
              >
                <User className="h-6 w-6" />
                <span>Login</span>
              </button>
            )}

            <div className="relative">
              <button className="text-gray-300 hover:text-blue-500 transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {currentUser ? (
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="text-gray-300 hover:text-blue-500 transition-colors mr-4"
              >
                <User className="h-6 w-6" />
              </button>
            ) : null}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            {currentUser && (
              <>
                <div className="border-t border-gray-700 my-2 pt-2">
                  <p className="px-3 py-2 text-sm text-gray-400">Signed in as</p>
                  <p className="px-3 py-1 text-sm font-medium text-blue-500 truncate">
                    {currentUser.email}
                  </p>
                </div>
                <button
                  onClick={handleAuthClick}
                  className="text-gray-300 hover:text-blue-500 block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  Sign out
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

// Tab component with href prop added
const Tab = ({
  children,
  setPosition,
  href,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
    >
      <Link
        to={href}
        onClick={onClick}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-gray-300 hover:text-blue-500 transition-colors md:px-5 md:py-3 md:text-base"
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-gray-700 md:h-12"
    />
  );
};

export default Navbar;