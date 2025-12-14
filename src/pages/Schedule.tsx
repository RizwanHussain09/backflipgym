import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/ui/SectionTitle';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const classTypes = ['All', 'Strength', 'Cardio', 'HIIT', 'Yoga', 'Boxing'];

const schedule = [
  // Monday
  { day: 'Monday', time: '05:00', name: 'Early Bird Strength', type: 'Strength', duration: '60 min', trainer: 'Ahmed Al-Farsi', spots: 12 },
  { day: 'Monday', time: '06:30', name: 'HIIT Blast', type: 'HIIT', duration: '45 min', trainer: 'Sarah Mitchell', spots: 20 },
  { day: 'Monday', time: '09:00', name: 'Power Yoga', type: 'Yoga', duration: '60 min', trainer: 'Mohammed Ali', spots: 15 },
  { day: 'Monday', time: '17:00', name: 'CrossFit WOD', type: 'HIIT', duration: '60 min', trainer: 'Sarah Mitchell', spots: 20 },
  { day: 'Monday', time: '19:00', name: 'Boxing Fundamentals', type: 'Boxing', duration: '60 min', trainer: 'Khalid Omar', spots: 12 },
  
  // Tuesday
  { day: 'Tuesday', time: '05:00', name: 'Spin & Burn', type: 'Cardio', duration: '45 min', trainer: 'Layla Al-Rashid', spots: 25 },
  { day: 'Tuesday', time: '07:00', name: 'Functional Strength', type: 'Strength', duration: '60 min', trainer: 'Mohammed Ali', spots: 15 },
  { day: 'Tuesday', time: '10:00', name: 'Low Impact Cardio', type: 'Cardio', duration: '45 min', trainer: 'Layla Al-Rashid', spots: 20 },
  { day: 'Tuesday', time: '18:00', name: 'Power Hour', type: 'Strength', duration: '60 min', trainer: 'Ahmed Al-Farsi', spots: 12 },
  { day: 'Tuesday', time: '20:00', name: 'Evening Yoga', type: 'Yoga', duration: '60 min', trainer: 'Mohammed Ali', spots: 15 },
  
  // Wednesday
  { day: 'Wednesday', time: '05:00', name: 'Early Bird Strength', type: 'Strength', duration: '60 min', trainer: 'Ahmed Al-Farsi', spots: 12 },
  { day: 'Wednesday', time: '06:30', name: 'HIIT Blast', type: 'HIIT', duration: '45 min', trainer: 'Sarah Mitchell', spots: 20 },
  { day: 'Wednesday', time: '12:00', name: 'Lunch Express', type: 'HIIT', duration: '30 min', trainer: 'Layla Al-Rashid', spots: 15 },
  { day: 'Wednesday', time: '17:00', name: 'Boxing Advanced', type: 'Boxing', duration: '60 min', trainer: 'Khalid Omar', spots: 10 },
  { day: 'Wednesday', time: '19:00', name: 'CrossFit WOD', type: 'HIIT', duration: '60 min', trainer: 'Sarah Mitchell', spots: 20 },
  
  // Thursday
  { day: 'Thursday', time: '05:00', name: 'Spin & Burn', type: 'Cardio', duration: '45 min', trainer: 'Layla Al-Rashid', spots: 25 },
  { day: 'Thursday', time: '07:00', name: 'Mobility Flow', type: 'Yoga', duration: '45 min', trainer: 'Mohammed Ali', spots: 15 },
  { day: 'Thursday', time: '17:00', name: 'Power Hour', type: 'Strength', duration: '60 min', trainer: 'Ahmed Al-Farsi', spots: 12 },
  { day: 'Thursday', time: '19:00', name: 'Tabata Inferno', type: 'HIIT', duration: '45 min', trainer: 'Sarah Mitchell', spots: 20 },
  
  // Friday
  { day: 'Friday', time: '07:00', name: 'Weekend Warrior', type: 'Strength', duration: '75 min', trainer: 'Ahmed Al-Farsi', spots: 15 },
  { day: 'Friday', time: '09:00', name: 'Dance Cardio', type: 'Cardio', duration: '60 min', trainer: 'Layla Al-Rashid', spots: 25 },
  { day: 'Friday', time: '11:00', name: 'Boxing Basics', type: 'Boxing', duration: '60 min', trainer: 'Khalid Omar', spots: 12 },
  { day: 'Friday', time: '16:00', name: 'HIIT & Core', type: 'HIIT', duration: '45 min', trainer: 'Sarah Mitchell', spots: 20 },
  
  // Saturday
  { day: 'Saturday', time: '06:00', name: 'Saturday Strength', type: 'Strength', duration: '90 min', trainer: 'Ahmed Al-Farsi', spots: 12 },
  { day: 'Saturday', time: '08:00', name: 'Partner WOD', type: 'HIIT', duration: '60 min', trainer: 'Sarah Mitchell', spots: 24 },
  { day: 'Saturday', time: '10:00', name: 'Yoga Flow', type: 'Yoga', duration: '75 min', trainer: 'Mohammed Ali', spots: 20 },
  { day: 'Saturday', time: '15:00', name: 'Open Boxing', type: 'Boxing', duration: '90 min', trainer: 'Khalid Omar', spots: 15 },
  
  // Sunday
  { day: 'Sunday', time: '07:00', name: 'Recovery Yoga', type: 'Yoga', duration: '60 min', trainer: 'Mohammed Ali', spots: 20 },
  { day: 'Sunday', time: '09:00', name: 'Light Cardio', type: 'Cardio', duration: '45 min', trainer: 'Layla Al-Rashid', spots: 25 },
  { day: 'Sunday', time: '11:00', name: 'Open Gym', type: 'Strength', duration: '120 min', trainer: 'Staff', spots: 50 },
];

const typeColors: Record<string, string> = {
  Strength: 'bg-red-500/20 text-red-400 border-red-500/30',
  Cardio: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  HIIT: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  Yoga: 'bg-green-500/20 text-green-400 border-green-500/30',
  Boxing: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const [activeType, setActiveType] = useState('All');

  const filteredSchedule = schedule.filter(item => {
    const dayMatch = item.day === activeDay;
    const typeMatch = activeType === 'All' || item.type === activeType;
    return dayMatch && typeMatch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80)',
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
              Class Schedule
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Find Your <span className="text-gradient-gold">Perfect Class</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse our weekly schedule and book your spot in our energizing group classes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          {/* Day Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex overflow-x-auto pb-4 mb-8 gap-2 scrollbar-hide"
          >
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeDay === day
                    ? 'bg-gradient-gold text-primary-foreground shadow-gold-sm'
                    : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                }`}
              >
                {day}
              </button>
            ))}
          </motion.div>

          {/* Type Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {classTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                  activeType === type
                    ? 'bg-primary/20 text-primary border-primary/50'
                    : 'bg-transparent text-muted-foreground border-border hover:border-primary/30 hover:text-foreground'
                }`}
              >
                {type}
              </button>
            ))}
          </motion.div>

          {/* Schedule Grid */}
          <div className="space-y-4">
            {filteredSchedule.length > 0 ? (
              filteredSchedule.map((item, index) => (
                <motion.div
                  key={`${item.day}-${item.time}-${item.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <div className="text-center min-w-[80px]">
                        <div className="text-2xl font-bold text-primary">{item.time}</div>
                        <div className="text-xs text-muted-foreground">{item.duration}</div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${typeColors[item.type]}`}>
                            {item.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {item.trainer}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.spots} spots
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Link to="/contact">Book Now</Link>
                    </Button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No classes scheduled for this day/filter combination.</p>
              </div>
            )}
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
            <SectionTitle
              subtitle="Can't Find the Right Class?"
              title="Try Personal Training"
              description="Work one-on-one with our expert trainers on your own schedule."
            />
            <Button asChild size="lg" className="bg-gradient-gold hover:shadow-gold transition-all duration-300 text-lg px-10">
              <Link to="/contact">
                Book Personal Session <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
