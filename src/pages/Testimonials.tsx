import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    role: 'Business Executive',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    content: 'Backflip Gym transformed my life. After years of failed fitness attempts, I finally found a place that understands my goals. The trainers are exceptional — they pushed me when I needed it and supported me through every challenge. I\'ve lost 25kg and gained confidence I never knew I had.',
    rating: 5,
    memberSince: '2022',
  },
  {
    name: 'Fatima Hassan',
    role: 'Doctor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    content: 'As a healthcare professional, I\'m particular about fitness facilities. Backflip exceeds all expectations. The cleanliness is impeccable, the equipment is world-class, and the trainers are genuinely certified experts. I recommend it to all my patients looking to improve their health.',
    rating: 5,
    memberSince: '2021',
  },
  {
    name: 'Mohammed Ali',
    role: 'Professional Athlete',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    content: 'Training at Backflip has taken my athletic performance to the next level. The specialized equipment, the knowledgeable coaches, and the motivating atmosphere make it the perfect training ground. This is where champions are made.',
    rating: 5,
    memberSince: '2023',
  },
  {
    name: 'Sara Al-Balushi',
    role: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    content: 'The group classes at Backflip are incredible! I used to dread working out, but now I actually look forward to my sessions. The energy, the music, the instructors — everything comes together to create an amazing experience.',
    rating: 5,
    memberSince: '2022',
  },
  {
    name: 'Yusuf Al-Farsi',
    role: 'Engineer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    content: 'I\'ve been a member of many gyms over the years, but Backflip is in a league of its own. The attention to detail, the premium equipment, and the sense of community make it worth every rial. This is not just a gym — it\'s a lifestyle.',
    rating: 5,
    memberSince: '2021',
  },
];

const transformations = [
  {
    name: 'Khalid M.',
    duration: '6 months',
    weightLoss: '28 kg',
    beforeImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
    quote: 'I never thought I could look and feel this good. The team at Backflip made it possible.',
  },
  {
    name: 'Amira S.',
    duration: '8 months',
    weightLoss: '22 kg',
    beforeImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    quote: 'From size 18 to size 10. Backflip gave me my confidence back.',
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrev = () => {
    setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1);
  };

  const handleNext = () => {
    setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80)',
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
              Testimonials
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Real Results, <span className="text-gradient-gold">Real Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our members who have transformed their lives at Backflip Gym.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 md:p-12 border border-border relative"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary flex-shrink-0"
                />
                
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div>
                    <h4 className="text-foreground font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                    <p className="text-primary text-sm">Member since {testimonials[currentTestimonial].memberSince}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-secondary'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Member Reviews"
            title="What Everyone Is Saying"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-foreground font-medium text-sm">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Transformations"
            title="Incredible Before & After"
            description="Witness the amazing transformations our members have achieved."
          />

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {transformations.map((transformation, index) => (
              <motion.div
                key={transformation.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-3xl overflow-hidden border border-border"
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="aspect-[3/4]">
                      <img
                        src={transformation.beforeImage}
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-[3/4]">
                      <img
                        src={transformation.afterImage}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-primary px-3 py-1 rounded-full text-sm font-medium text-primary-foreground">
                      After
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-foreground font-bold text-lg">{transformation.name}</h4>
                    <div className="flex gap-4 text-sm">
                      <span className="text-muted-foreground">{transformation.duration}</span>
                      <span className="text-primary font-semibold">-{transformation.weightLoss}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{transformation.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Start Your Own <span className="text-gradient-gold">Success Story</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join the hundreds who have transformed their lives at Backflip Gym. 
              Your journey starts with a single step.
            </p>
            <Button asChild size="lg" className="bg-gradient-gold hover:shadow-gold transition-all duration-300 text-lg px-10">
              <Link to="/contact">
                Start Your Transformation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
