import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, Award, Dumbbell, Clock, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTitle from '@/components/ui/SectionTitle';
import Layout from '@/components/layout/Layout';

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'Active Members' },
  { icon: Award, value: 15, suffix: '', label: 'Expert Trainers' },
  { icon: Dumbbell, value: 50, suffix: '+', label: 'Equipment Pieces' },
  { icon: Clock, value: 18, suffix: 'h', label: 'Daily Open Hours' },
];

const programs = [
  {
    title: 'Strength Training',
    description: 'Build muscle and increase your power with our state-of-the-art equipment.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    color: 'from-blue-500/20',
  },
  {
    title: 'Cross Training',
    description: 'High-intensity functional movements for complete body conditioning.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    color: 'from-red-500/20',
  },
  {
    title: 'Personal Training',
    description: 'One-on-one sessions tailored to your specific goals and needs.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    color: 'from-amber-500/20',
  },
  {
    title: 'Group Classes',
    description: 'Energizing group sessions that make fitness fun and social.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
    color: 'from-emerald-500/20',
  },
];

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'Member since 2022',
    content: 'Backflip Gym transformed my life. The trainers are exceptional and the facilities are world-class. I\'ve never felt more confident.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
  },
  {
    name: 'Fatima Hassan',
    role: 'Member since 2021',
    content: 'The personal training program here is unmatched. I achieved my weight loss goals faster than I ever imagined possible.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
  },
  {
    name: 'Mohammed Ali',
    role: 'Member since 2023',
    content: 'Premium experience from start to finish. The attention to detail and cleanliness is impeccable. Worth every rial.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary relative">
      <span className="relative">
        {count}{suffix}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: hasAnimated ? 1 : 0, scale: hasAnimated ? 1 : 0.5 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="absolute -top-2 -right-2"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
        </motion.span>
      </span>
    </div>
  );
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-amber-500/20"
          />
        </motion.div>

        <motion.div
          className="relative z-10 container mx-auto px-4 text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-2 bg-primary/10 rounded-full backdrop-blur-sm"
          >
            🏆 Muscat's Premier Fitness Destination
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
          >
            Train <span className="relative">
              Strong
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-amber-400 rounded-full"
              />
            </span>.<br />
            <span className="text-gradient-gold relative inline-block">
              Move Better
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-normal text-primary"
              >
                👆
              </motion.span>
            </span>.<br />
            Live <span className="relative">
              Elite
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-2 -right-4"
              >
                <Sparkles className="w-6 h-6 text-amber-400" />
              </motion.div>
            </span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Experience fitness redefined at Backflip Gym. Where state-of-the-art equipment 
            meets world-class training in Oman's most exclusive fitness environment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-gradient-gold hover:shadow-gold hover:scale-105 transition-all duration-300 text-lg px-8 group">
              <Link to="/membership">
                Join Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 text-lg px-8 group">
              <Link to="/contact">
                Book Free Trial <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2 group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            subtitle="Our Programs"
            title="Elevate Your Fitness Journey"
            description="Choose from our range of premium programs designed to help you achieve your goals faster."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {program.description}
                  </p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 group">
              <Link to="/programs">
                View All Programs <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-amber-500/10" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ready to Transform <span className="text-gradient-gold relative">
                Your Body?
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                />
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join Backflip Gym today and start your journey towards a stronger, healthier you. 
              First week is on us.
            </p>
            <Button asChild size="lg" className="bg-gradient-gold hover:shadow-gold hover:scale-105 transition-all duration-300 text-lg px-10 group">
              <Link to="/contact">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Members Say"
            description="Real stories from real people who transformed their lives at Backflip Gym."
          />

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.img
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow-lg"
                />
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-primary hover:scale-110 transition-transform" />
                    ))}
                  </div>
                  <p className="text-lg text-foreground mb-6 italic relative">
                    <span className="absolute -top-4 -left-4 text-3xl text-primary/30">"</span>
                    {testimonials[currentTestimonial].content}
                    <span className="absolute -bottom-4 -right-4 text-3xl text-primary/30">"</span>
                  </p>
                  <h4 className="text-foreground font-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => {
                  setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
                  setIsAutoPlaying(false);
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentTestimonial(index);
                      setIsAutoPlaying(false);
                    }}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary w-6' 
                        : 'bg-border hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => {
                  setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
                  setIsAutoPlaying(false);
                }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;