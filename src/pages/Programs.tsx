import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, Flame, Dumbbell, Heart, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

const programs = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    subtitle: 'Build Power & Muscle',
    description: 'Our comprehensive strength program is designed to help you build lean muscle, increase power, and develop functional strength. Using premium equipment and proven methodologies, you\'ll work with experienced coaches to achieve your strength goals.',
    features: ['Personalized workout plans', 'Progressive overload system', 'Form correction & technique', 'Nutrition guidance'],
    schedule: 'Mon-Sat | 6 AM - 10 PM',
    duration: '60-90 min sessions',
    level: 'All Levels',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    trainer: 'Ahmed Al-Farsi',
  },
  {
    id: 'cross-training',
    title: 'Cross Training',
    subtitle: 'Functional Fitness Excellence',
    description: 'High-intensity functional training that combines cardio, strength, and mobility. Our CrossFit-inspired classes will push your limits and help you develop all-around athletic performance.',
    features: ['HIIT workouts', 'Olympic lifting fundamentals', 'Metabolic conditioning', 'Team-based challenges'],
    schedule: 'Daily | 5 AM, 6 AM, 5 PM, 7 PM',
    duration: '45-60 min sessions',
    level: 'Intermediate to Advanced',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    trainer: 'Sarah Mitchell',
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss Program',
    subtitle: 'Transform Your Body',
    description: 'A scientifically-backed program combining cardio, strength training, and nutritional guidance to help you lose fat and build a leaner physique. Includes regular body composition tracking and personalized adjustments.',
    features: ['Body composition analysis', 'Customized meal plans', 'Cardio & resistance training', 'Weekly progress tracking'],
    schedule: 'Mon-Fri | Flexible timing',
    duration: '8-12 week programs',
    level: 'All Levels',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    trainer: 'Dr. Fatima Hassan',
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    subtitle: 'One-on-One Excellence',
    description: 'Experience the ultimate in personalized fitness with our elite personal training service. Your dedicated trainer will design a completely customized program based on your unique goals, schedule, and preferences.',
    features: ['1-on-1 dedicated sessions', 'Customized programming', 'Flexible scheduling', '24/7 coach support'],
    schedule: 'By Appointment',
    duration: '60 min sessions',
    level: 'All Levels',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    trainer: 'Multiple Trainers Available',
  },
  {
    id: 'functional-training',
    title: 'Functional Training',
    subtitle: 'Move Better Every Day',
    description: 'Focus on movements that translate to real-life activities. This program emphasizes mobility, stability, and functional strength to help you move better and feel stronger in everyday life.',
    features: ['Mobility work', 'Core stability training', 'Balance & coordination', 'Injury prevention'],
    schedule: 'Mon-Sat | 7 AM, 10 AM, 4 PM',
    duration: '45 min sessions',
    level: 'All Levels',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
    trainer: 'Mohammed Ali',
  },
  {
    id: 'group-classes',
    title: 'Group Classes',
    subtitle: 'Energy & Community',
    description: 'Join our energizing group fitness classes led by passionate instructors. From spinning to yoga, HIIT to boxing, find the perfect class to match your mood and fitness goals.',
    features: ['Variety of class types', 'Motivating instructors', 'Social atmosphere', 'All fitness levels welcome'],
    schedule: 'See Class Schedule',
    duration: '30-60 min classes',
    level: 'All Levels',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=800&q=80',
    trainer: 'Various Instructors',
  },
];

const Programs = () => {
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

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Our Programs
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Programs Designed for <span className="text-gradient-gold">Results</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From strength building to weight loss, personal training to group classes — 
              find the perfect program to achieve your fitness goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-6 left-6 w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center">
                      <program.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
                    {program.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {program.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {program.schedule}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      {program.level}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-gradient-gold hover:shadow-gold transition-all duration-300">
                      <Link to="/contact">
                        Book Free Trial <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/schedule">View Schedule</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              subtitle="Get Started"
              title="Not Sure Which Program Is Right for You?"
              description="Book a free consultation with one of our fitness experts and we'll help you find the perfect program for your goals."
            />
            <Button asChild size="lg" className="bg-gradient-gold hover:shadow-gold transition-all duration-300 text-lg px-10">
              <Link to="/contact">
                Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
