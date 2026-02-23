import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Container from '../components/layout/Container';

export default function Home() {
  return (
    <div className="page-transition">

      {/* HERO SECTION */}
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">

        <Container className="py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-gradient animate-gradient-flow">
                INNOVATE.
                <br />
                CODE.
                <br />
                CREATE.
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl text-accent font-mono mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              CS + MATH @ UIUC
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-light/80 max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Building the future, one line of code at a time.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link to="/projects">
                <Button variant="primary">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>

        {/* SCROLL INDICATOR */}
        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="w-7 h-11 border-2 border-accent rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-2 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* QUICK STATS */}
      <Container className="py-20">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: 'GPA', value: '3.8' },
            { label: 'Technologies', value: '20+' },
            { label: 'DUPER SCORE', value: '3.2' },
            { label: 'Coffee Cups', value: '∞' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-xl p-6 text-center"
              whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-4xl font-display font-black text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-light/60 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

    </div>
  );
}