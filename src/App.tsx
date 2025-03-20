import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './contexts/AuthContext';
import FaqContact from './components/FaqContact';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? <>{children}</> : <Navigate to="/login" />;
};

const products = [
  {
    id: '1',
    name: 'Professional 3D Printer',
    description: 'High-precision 3D printer with dual extruders and large build volume',
    price: 49999,
    image: 'https://images.unsplash.com/photo-1631733433203-cc19ff6e9de1?auto=format&fit=crop&q=80&w=800',
    category: '3D Printers'
  },
  {
    id: '2',
    name: 'Laser Engraver Pro',
    description: '40W CO2 laser engraver with precision control and safety features',
    price: 89999,
    image: 'https://images.unsplash.com/photo-1635837118917-29743e027257?auto=format&fit=crop&q=80&w=800',
    category: 'Laser Engravers'
  },
  {
    id: '3',
    name: 'CNC Milling Machine',
    description: '3-axis CNC milling machine for precise manufacturing needs',
    price: 149999,
    image: 'https://images.unsplash.com/photo-1581092436484-28961a8b8d8d?auto=format&fit=crop&q=80&w=800',
    category: 'CNC Machines'
  },
];

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={
              <>
                <Hero />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <section className="py-24">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                      {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </section>
                  <Benefits />
                  <FaqContact/>
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;