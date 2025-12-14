import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionTitle = ({ subtitle, title, description, align = 'center', className }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      {subtitle && (
        <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-muted-foreground text-lg max-w-2xl',
          align === 'center' && 'mx-auto'
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
