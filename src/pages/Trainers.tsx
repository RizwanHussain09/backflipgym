import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

const trainers = [
  {
    name: 'Ahmed Al-Farsi',
    role: 'Head Strength Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&q=80',
    experience: '12 years',
    specialization: 'Strength & Powerlifting',
    certifications: ['NSCA-CSCS', 'USA Weightlifting Level 2', 'Precision Nutrition'],
    bio: 'Former national powerlifting champion with over a decade of coaching experience. Ahmed has transformed hundreds of athletes and everyday people into the strongest versions of themselves.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'CrossFit & HIIT Specialist',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80',
    experience: '8 years',
    specialization: 'CrossFit & Functional Fitness',
    certifications: ['CrossFit Level 3', 'NASM-CPT', 'TRX Certified'],
    bio: 'CrossFit Games regional competitor turned elite coach. Sarah brings intensity, expertise, and a supportive coaching style that pushes clients beyond their perceived limits.',
  },
  {
    name: 'Dr. Fatima Hassan',
    role: 'Nutrition & Weight Loss Expert',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80',
    experience: '10 years',
    specialization: 'Weight Loss & Nutrition',
    certifications: ['PhD Sports Nutrition', 'ISSN Certified', 'ACE Health Coach'],
    bio: 'With a doctorate in sports nutrition, Dr. Fatima combines scientific precision with practical guidance to help clients achieve sustainable weight loss and optimal health.',
  },
  {
    name: 'Mohammed Ali',
    role: 'Functional Movement Specialist',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
    experience: '9 years',
    specialization: 'Mobility & Rehab',
    certifications: ['FMS Level 2', 'SFMA', 'Yoga Alliance RYT-500'],
    bio: 'A master of movement who blends traditional training with yoga and mobility work. Mohammed helps clients move pain-free and perform at their peak.',
  },
  {
    name: 'Layla Al-Rashid',
    role: 'Group Fitness Director',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80',
    experience: '7 years',
    specialization: 'Group Classes & Dance Fitness',
    certifications: ['Les Mills Elite', 'Zumba Pro', 'ACE-GFI'],
    bio: 'Layla brings energy and joy to every class. Her dynamic group sessions have earned a cult following, making fitness feel like a celebration.',
  },
  {
    name: 'Khalid Omar',
    role: 'Combat Sports Coach',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
    experience: '15 years',
    specialization: 'Boxing & MMA',
    certifications: ['USA Boxing Coach', 'Krav Maga Level 4', 'First Aid Certified'],
    bio: 'A former professional boxer with 15 years in combat sports. Khalid teaches technique, discipline, and mental toughness through boxing and martial arts.',
  },
];

const Trainers = () => {
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

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Our Trainers
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Meet Your <span className="text-gradient-gold">Elite Coaches</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our team of internationally certified trainers brings decades of combined 
              experience to help you achieve your fitness goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href="#" className="w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{trainer.name}</h3>
                    <p className="text-primary font-medium">{trainer.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {trainer.experience} exp
                    </span>
                    <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-full">
                      {trainer.specialization}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {trainer.bio}
                  </p>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Award className="w-4 h-4 text-primary" />
                    <span>{trainer.certifications.length} certifications</span>
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
              title="Train With the Best"
              description="Book a free consultation and get matched with the perfect trainer for your goals."
            />
            <Button asChild size="lg" className="bg-gradient-gold hover:shadow-gold transition-all duration-300 text-lg px-10">
              <Link to="/contact">
                Book Free Session <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainers;
