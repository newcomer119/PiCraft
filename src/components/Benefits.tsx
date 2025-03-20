import React from 'react';
import { Truck, RefreshCcw, HeadphonesIcon, ShieldCheck } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: 'Free Shipping',
      description: 'On Your First Order',
    },
    {
      icon: <RefreshCcw className="h-12 w-12 text-blue-600" />,
      title: '30-Day Returns',
      description: 'Money-Back Guarantee',
    },
    {
      icon: <HeadphonesIcon className="h-12 w-12 text-blue-600" />,
      title: '24/7 Support',
      description: 'Technical Assistance',
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-blue-600" />,
      title: 'Secure Payment',
      description: 'Multiple Payment Options',
    },
  ];

  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <div className="bg-gray-700/50 p-4 rounded-lg">
                {benefit.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-gray-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;