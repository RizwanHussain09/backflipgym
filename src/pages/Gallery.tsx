import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

const categories = ['All', 'Facility', 'Training', 'Equipment', 'Events'];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', category: 'Facility', alt: 'Main Training Floor' },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80', category: 'Training', alt: 'CrossFit Session' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80', category: 'Equipment', alt: 'Premium Dumbbells' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', category: 'Training', alt: 'Personal Training' },
  { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80', category: 'Equipment', alt: 'Cardio Zone' },
  { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=80', category: 'Facility', alt: 'Weight Room' },
  { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80', category: 'Training', alt: 'Group Class' },
  { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80', category: 'Facility', alt: 'Gym Interior' },
  { src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80', category: 'Training', alt: 'Functional Training' },
  { src: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=800&q=80', category: 'Events', alt: 'Fitness Competition' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', category: 'Training', alt: 'Weight Training' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', category: 'Equipment', alt: 'Barbell Rack' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Gallery
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              See Our <span className="text-gradient-gold">Premium Space</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a visual tour of our world-class facilities, state-of-the-art equipment, 
              and the energy of our training sessions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-gold text-primary-foreground shadow-gold-sm'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                    index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className={`${index === 0 || index === 5 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.alt}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[selectedImage].src.replace('w=800', 'w=1600')}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-foreground font-medium">{filteredImages[selectedImage].alt}</p>
              <p className="text-muted-foreground text-sm">{selectedImage + 1} / {filteredImages.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
