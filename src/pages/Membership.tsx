import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Shield, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

const plans = [
  {
    name: 'Monthly',
    subtitle: 'Flexible Start',
    price: 45,
    period: '/month',
    description: 'Perfect for those who want to try our facilities before committing long-term.',
    features: [
      'Full gym access',
      'Locker room & sauna',
      'Basic fitness assessment',
      '2 group classes/week',
      'Mobile app access',
    ],
    notIncluded: [
      'Personal training sessions',
      'Nutrition consultation',
      'Priority booking',
    ],
    popular: false,
    cta: 'Start Monthly',
  },
  {
    name: 'Quarterly',
    subtitle: 'Best Value',
    price: 35,
    period: '/month',
    billing: 'Billed 105 OMR quarterly',
    description: 'Our most popular plan. Commit to your fitness journey and save 22%.',
    features: [
      'Full gym access',
      'Locker room & sauna',
      'Comprehensive fitness assessment',
      'Unlimited group classes',
      'Mobile app access',
      '2 personal training sessions',
      'Nutrition consultation',
      'Priority class booking',
    ],
    notIncluded: [],
    popular: true,
    cta: 'Get Quarterly',
    savings: 'Save 30 OMR',
  },
  {
    name: 'Yearly',
    subtitle: 'Elite Commitment',
    price: 30,
    period: '/month',
    billing: 'Billed 360 OMR yearly',
    description: 'Maximum savings for the dedicated. Includes all premium perks.',
    features: [
      'Full gym access',
      'Locker room & sauna',
      'Comprehensive fitness assessment',
      'Unlimited group classes',
      'Mobile app access',
      '6 personal training sessions',
      'Monthly nutrition consultations',
      'Priority class booking',
      'Guest passes (4/year)',
      'Exclusive member events',
    ],
    notIncluded: [],
    popular: false,
    cta: 'Go Yearly',
    savings: 'Save 180 OMR',
  },
];

const benefits = [
  {
    icon: Shield,
    title: '7-Day Money Back',
    description: 'Not satisfied? Get a full refund within the first week.',
  },
  {
    icon: Clock,
    title: 'Freeze Anytime',
    description: 'Put your membership on hold for up to 30 days per year.',
  },
  {
    icon: Zap,
    title: 'No Joining Fee',
    description: 'Start immediately with zero upfront costs or hidden fees.',
  },
];

const Membership = () => {
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
            className="max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Membership Plans
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Invest in Your <span className="text-gradient-gold">Best Self</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the membership that fits your lifestyle. All plans include full access 
              to our premium facilities and equipment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-3xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-primary/20 to-card border-2 border-primary shadow-gold'
                    : 'bg-card border border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold px-6 py-2 rounded-full flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary-foreground" fill="currentColor" />
                    <span className="text-sm font-semibold text-primary-foreground">Most Popular</span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-primary text-sm font-medium">{plan.subtitle}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-muted-foreground">OMR</span>
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.billing && (
                    <p className="text-sm text-muted-foreground mt-2">{plan.billing}</p>
                  )}
                  {plan.savings && (
                    <span className="inline-block mt-3 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {plan.savings}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-center mb-8 text-sm">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-gold hover:shadow-gold'
                      : 'bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground'
                  } transition-all duration-300`}
                  size="lg"
                >
                  <Link to="/contact">
                    {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Member Benefits"
            title="More Than Just a Gym"
            description="Every membership includes these premium benefits."
          />

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              subtitle="Questions?"
              title="Membership FAQs"
            />

            <div className="space-y-6">
              {[
                {
                  q: 'Can I cancel my membership anytime?',
                  a: 'Monthly memberships can be cancelled anytime with 30 days notice. Quarterly and yearly plans are commitment-based but can be transferred to another person.',
                },
                {
                  q: 'Do you offer corporate rates?',
                  a: 'Yes! We offer special rates for companies with 5+ employees. Contact us for a custom corporate wellness package.',
                },
                {
                  q: 'What are your opening hours?',
                  a: 'We\'re open Monday-Friday from 5 AM to 11 PM, and weekends from 6 AM to 10 PM. The facility is never closed on public holidays.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl border border-border"
                >
                  <h4 className="text-foreground font-semibold mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
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
              Ready to Join the <span className="text-gradient-gold">Elite?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Start your transformation today. Book a free tour and get a complimentary 
              trial session with one of our expert trainers.
            </p>
            <Button asChild size="lg" className="bg-gradient-gold hover:shadow-gold transition-all duration-300 text-lg px-10">
              <Link to="/contact">
                Book Free Tour <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Membership;
