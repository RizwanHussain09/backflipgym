import { motion } from 'framer-motion';
import { Target, Heart, Trophy, Sparkles, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We pursue excellence in everything we do, from equipment selection to training methodologies.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for fitness drives us to help every member achieve their personal best.',
  },
  {
    icon: Trophy,
    title: 'Results',
    description: 'We focus on delivering measurable results through proven training methods.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We continuously adopt the latest in fitness technology and training techniques.',
  },
];

const facilities = [
  '10,000 sq ft premium training floor',
  'State-of-the-art cardio zone',
  'Olympic weightlifting area',
  'Functional training zone',
  'Premium locker rooms with sauna',
  'Juice bar & lounge area',
  'Private training studios',
  'Recovery & stretching area',
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1920&q=80)',
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
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Where Strength Meets <span className="text-gradient-gold">Elegance</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Backflip Gym is more than a fitness center — it's a sanctuary for those who demand 
              excellence in their pursuit of physical greatness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                subtitle="Our Story"
                title="Born from a Vision of Excellence"
                align="left"
              />
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Founded in 2018, Backflip Gym emerged from a simple yet powerful vision: to create 
                  Muscat's most prestigious fitness destination. We believed that Oman deserved a gym 
                  that matched the aspirations of its most ambitious citizens.
                </p>
                <p>
                  Our founders, former professional athletes and fitness entrepreneurs, combined their 
                  expertise to design a facility that would redefine what a gym could be. Every detail, 
                  from the imported Italian flooring to the precision-calibrated equipment, was chosen 
                  to create an unparalleled training environment.
                </p>
                <p>
                  Today, Backflip Gym stands as a testament to that vision — a place where elite 
                  athletes train alongside dedicated beginners, all united by their commitment to 
                  becoming the best versions of themselves.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                  alt="Backflip Gym Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl border border-border shadow-xl">
                <div className="text-4xl font-bold text-primary mb-1">6+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Empowering Oman's Fitness Elite
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our mission is to provide an unparalleled fitness experience that inspires, 
                challenges, and transforms. We are committed to creating a community where 
                every member feels valued, motivated, and equipped with the tools they need 
                to achieve extraordinary results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Our Values"
            title="The Principles That Drive Us"
            description="These core values guide everything we do at Backflip Gym."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=80"
                      alt="Gym Equipment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80"
                      alt="Training Area"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400&q=80"
                      alt="Cardio Zone"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&q=80"
                      alt="Weight Room"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <SectionTitle
                subtitle="Our Facilities"
                title="World-Class Equipment & Amenities"
                align="left"
              />
              <p className="text-muted-foreground mb-8">
                Step into a space designed for serious training. Our facility features 
                the finest equipment from leading brands, meticulously maintained and 
                arranged for optimal workflow.
              </p>
              <ul className="space-y-4">
                {facilities.map((facility, index) => (
                  <motion.li
                    key={facility}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{facility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Why Backflip Gym"
            title="The Premium Difference"
            description="What sets us apart from every other gym in Muscat."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Elite Equipment',
                description: 'Hand-selected machines and free weights from Technogym, Hammer Strength, and Eleiko.',
              },
              {
                title: 'Expert Coaching',
                description: 'Internationally certified trainers with proven track records in transforming lives.',
              },
              {
                title: 'Exclusive Community',
                description: 'Join a network of motivated individuals who push each other to new heights.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-gold rounded-2xl flex items-center justify-center text-3xl font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
