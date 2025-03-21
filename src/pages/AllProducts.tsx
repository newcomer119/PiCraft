import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Professional 3D Printer',
    description: 'High-precision 3D printer with dual extruders and large build volume',
    price: 49999,
    image: 'path_to_3d_printer_image.jpg'
  },
  {
    id: '2',
    name: 'Laser Engraver Pro',
    description: '40W CO2 laser engraver with precision control and safety features',
    price: 89999,
    image: 'path_to_laser_engraver_image.jpg'
  },
  {
    id: '3',
    name: 'CNC Milling Machine',
    description: '3-axis CNC machine for professional milling needs',
    price: 149999,
    image: 'path_to_cnc_image.jpg'
  },
  // Add more products as needed
];

const AllProducts = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">All Products</h1>
        
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Categories</h2>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              3D Printers
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              Laser Engravers
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              CNC Machines
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
              Accessories
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts; 