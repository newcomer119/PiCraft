import React, { useState } from 'react';
import { Printer, Upload, Clock, Calculator } from 'lucide-react';

const PrintingService = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    material: '',
    dimensions: '',
    quantity: '',
    description: '',
    file: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">3D Printing Services</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional 3D printing services for prototypes, end-use parts, and custom projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Form */}
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-6">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Project Type</label>
                <select
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="prototype">Prototype</option>
                  <option value="production">Production Part</option>
                  <option value="custom">Custom Project</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Description</label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Service Info */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Printer className="h-6 w-6 text-blue-500 mr-2" />
                Available Technologies
              </h3>
              <ul className="text-gray-400 space-y-2">
                <li>• FDM (Fused Deposition Modeling)</li>
                <li>• SLA (Stereolithography)</li>
                <li>• SLS (Selective Laser Sintering)</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Calculator className="h-6 w-6 text-blue-500 mr-2" />
                Pricing
              </h3>
              <p className="text-gray-400">
                Pricing is based on material volume, print time, and complexity. Contact us for a detailed quote.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Clock className="h-6 w-6 text-blue-500 mr-2" />
                Turnaround Time
              </h3>
              <p className="text-gray-400">
                Standard turnaround time is 3-5 business days. Rush services available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintingService; 