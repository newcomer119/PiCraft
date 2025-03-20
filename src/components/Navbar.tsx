import React, { useState, useRef } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import { Pi } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const menuItems = ['Home', 'All Products', 'About Us', 'Contact Us', '3D Printing'];

  const handleAuthClick = () => {
    if (currentUser) {
      logout();
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <>
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
                    key={item}
                    setPosition={setPosition}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item}
                  </Tab>
                ))}
                <Cursor position={position} />
              </ul>
            </div>

            {/* Utility buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={handleAuthClick}
                className="text-gray-300 hover:text-blue-500 flex items-center space-x-2 transition-colors"
              >
                <User className="h-6 w-6" />
                <span>{currentUser ? 'Logout' : 'Login'}</span>
              </button>
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
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

// Tab component with href prop added
const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
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
      <a
        href={href}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-gray-300 hover:text-blue-500 transition-colors md:px-5 md:py-3 md:text-base"
      >
        {children}
      </a>
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