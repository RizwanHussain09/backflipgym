import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '1086, Muscat 420, Oman',
    link: 'https://maps.google.com/?q=1086+Muscat+420+Oman',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+968 1234 5678',
    link: 'tel:+96812345678',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@backflipgym.com',
    link: 'mailto:info@backflipgym.com',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    content: 'Mon-Fri: 5AM-11PM\nSat-Sun: 6AM-10PM',
    link: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`
    );
    
    window.open(`https://wa.me/96812345678?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Message Prepared!",
      description: "Complete sending your message via WhatsApp.",
    });
  };

  const handleFreeTrial = () => {
    const message = encodeURIComponent(
      `Hello! I'd like to book a FREE TRIAL at Backflip Gym. Please contact me to schedule my visit.`
    );
    window.open(`https://wa.me/96812345678?text=${message}`, '_blank');
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
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Get In <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your fitness journey? Have questions? We're here to help. 
              Reach out and let's talk about your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/30 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book Your Free Trial Today!
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Experience our premium facilities and expert training with a complimentary trial session. 
              No commitment required.
            </p>
            <Button
              onClick={handleFreeTrial}
              size="lg"
              className="bg-gradient-gold hover:shadow-gold transition-all duration-300 text-lg px-10"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Book Free Trial via WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                subtitle="Send a Message"
                title="We'd Love to Hear From You"
                align="left"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">Phone</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+968 1234 5678"
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-foreground text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Membership Inquiry"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-foreground text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness goals..."
                    rows={5}
                    required
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-gold hover:shadow-gold transition-all duration-300"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send via WhatsApp
                </Button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                subtitle="Find Us"
                title="Visit Our Facility"
                align="left"
              />

              <div className="rounded-3xl overflow-hidden h-[400px] lg:h-[500px] border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d58.5456789!3d23.6145678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzUyLjQiTiA1OMKwMzInNDQuNCJF!5e0!3m2!1sen!2som!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Backflip Gym Location"
                />
              </div>

              <div className="mt-6 p-6 bg-card rounded-2xl border border-border">
                <h4 className="text-foreground font-semibold mb-2">Backflip Gym</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  1086, Muscat 420, Oman
                </p>
                <a
                  href="https://maps.google.com/?q=1086+Muscat+420+Oman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
