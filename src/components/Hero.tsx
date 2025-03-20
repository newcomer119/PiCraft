import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900 pt-16">
      {/* Glowing Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative h-full w-full">
          {/* Base grid */}
          <div className="absolute inset-0 grid-bg animate-glow"></div>
          
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent"></div>
          
          {/* Center glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15)_0%,transparent_50%)]"></div>
          
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(17,24,39,0.8)_100%)]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-cyan-600/10 text-cyan-400 mb-8">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            New! Professional CNC Machines Available
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Craft Your Future{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              With Precision
            </span>
            <br />
            Engineering Excellence.
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-12">
            Discover our range of professional CNC machines, 3D printers, and laser engravers. 
            Elevate your manufacturing capabilities with PiCraft.
          </p>
          <button className="inline-flex items-center px-8 py-4 rounded-lg bg-cyan-600 text-white font-semibold text-lg hover:bg-cyan-700 transition-colors duration-200">
            Explore Products
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-cyan-500/5 rounded-xl backdrop-blur-lg transform rotate-12 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-cyan-500/5 rounded-xl backdrop-blur-lg transform -rotate-12 animate-float-delayed"></div>
      </div>
    </div>
  );
};

export default Hero;