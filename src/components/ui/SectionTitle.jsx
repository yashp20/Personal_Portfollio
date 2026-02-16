import { motion } from 'framer-motion';

export default function SectionTitle({ children, subtitle, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-gradient animate-gradient-flow mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-light/60 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
