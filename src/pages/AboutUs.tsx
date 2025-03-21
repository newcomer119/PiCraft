import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About PiCraft</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We're passionate about bringing professional-grade manufacturing capabilities to creators, engineers, and businesses.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <Target className="h-12 w-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400">
              To democratize advanced manufacturing technologies and empower creators with professional-grade tools.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <Award className="h-12 w-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400">
              To be the leading provider of accessible, high-quality manufacturing solutions in India.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Add team member cards here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 