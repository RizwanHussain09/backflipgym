import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Dumbbell, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Membership', path: '/membership' },
  { name: 'Trainers', path: '/trainers' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4 }}
            className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:shadow-gold transition-shadow duration-300"
          >
            <Dumbbell className="w-6 h-6 text-primary-foreground" />
          </motion.div>
          <span className="text-xl font-bold text-black">
            Prime<span className="text-primary"> Fitness</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              className="relative"
              onMouseEnter={() => setHoveredLink(link.path)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                to={link.path}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-black/80 group-hover:text-white'
                }`}>
                  {link.name}
                </span>
                
                {/* Animated underline effect */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                    location.pathname === link.path 
                      ? 'bg-gradient-to-r from-primary via-primary/80 to-primary' 
                      : 'bg-gradient-to-r from-primary via-secondary to-accent'
                  }`}
                  initial={false}
                  animate={{
                    scaleX: location.pathname === link.path || hoveredLink === link.path ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                {/* Hover background */}
                {hoveredLink === link.path && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg"
                    layoutId="nav-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                {/* Active indicator dot */}
                {location.pathname === link.path && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 right-3 w-2 h-2 bg-primary rounded-full"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            asChild
            className="relative overflow-hidden group bg-gradient-gold hover:shadow-gold transition-all duration-300 hover:scale-105"
          >
            <Link to="/membership" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span className="relative z-10">Join Now</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden text-black p-2 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark border-t border-border backdrop-blur-xl"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`relative px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                      location.pathname === link.path
                        ? 'bg-gradient-to-r from-primary/20 via-primary/10 to-transparent text-primary border-l-4 border-primary'
                        : 'text-black hover:text-primary hover:bg-secondary/10'
                    }`}
                  >
                    {/* Animated indicator */}
                    <motion.div
                      animate={{
                        scale: location.pathname === link.path ? 1 : 0,
                      }}
                      className={`w-2 h-2 rounded-full ${
                        location.pathname === link.path ? 'bg-primary' : 'bg-transparent'
                      }`}
                    />
                    
                    <span className="flex-1">{link.name}</span>
                    
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    
                    {/* Hover line effect */}
                    <motion.div
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                className="mt-4"
              >
                <Button
                  asChild
                  className="w-full bg-gradient-gold hover:shadow-gold text-black group relative overflow-hidden"
                >
                  <Link to="/membership" className="flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                    <span>Start Your Journey Today</span>
                    
                    {/* Pulse effect for CTA */}
                    <motion.div
                      className="absolute inset-0 border-2 border-primary/30 rounded-lg"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>6
    </header>
  );
};

export default Header;