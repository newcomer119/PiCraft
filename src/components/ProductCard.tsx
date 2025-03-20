import React from 'react';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all hover:scale-105 border border-gray-700 hover:border-blue-500">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">
          {product.name}
        </h3>
        <p className="mt-1 text-gray-400 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-500">
            ₹{product.price.toLocaleString()}
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all hover:scale-105">
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;