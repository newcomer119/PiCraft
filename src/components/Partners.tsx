import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const partners = [
    {
      id: 1,
      image: "/picraft1.webp",
      name: "Partner 1"
    },
    {
      id: 2,
      image: "/picraft2.webp",
      name: "Partner 2"
    },
    {
      id: 3,
      image: "/picraft3.webp",
      name: "Partner 3"
    },
    {
      id: 4,
      image: "/picraft4.webp",
      name: "Partner 4"
    },
    // Duplicate partners to create continuous scrolling effect
    {
      id: 5,
      image: "/picraft1.webp",
      name: "Partner 1"
    },
    {
      id: 6,
      image: "/picraft2.webp",
      name: "Partner 2"
    },
    {
      id: 7,
      image: "/picraft3.webp",
      name: "Partner 3"
    },
    {
      id: 8,
      image: "/picraft4.webp",
      name: "Partner 4"
    }
  ];

  // Reference to the carousel container
  const carouselRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Calculate the width of the carousel to set constraints for dragging
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="bg-gray-900 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Our Trusted Partners
        </h2>
        
        <motion.div 
          ref={carouselRef}
          className="cursor-grab overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            initial={{ x: 0 }}
            animate={{ 
              x: isDragging ? 0 : -width / 2, 
            }}
            transition={{
              x: {
                repeat: isDragging ? 0 : Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
                repeatDelay: 0
              }
            }}
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                className="flex-shrink-0 min-w-[50%] md:min-w-[25%] px-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-40 bg-gray-800 rounded-lg flex items-center justify-center p-6 hover:border-2 hover:border-blue-500 transition-all">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                    draggable="false"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;