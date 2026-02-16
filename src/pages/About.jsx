import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import { interests } from '../data/skills';

export default function About() {
  return (
    <div className="page-transition pt-32 pb-20">
      <Container>
        <SectionTitle subtitle="Get to know me better">
          About Me
        </SectionTitle>

        {/* Main content */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-effect rounded-2xl p-8 md:p-12 mb-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-light/90 leading-relaxed mb-6">
                I'm a Computer Science + student at the <span className="text-accent font-bold">University of Illinois Urbana-Champaign</span>
                . My journey in tech is driven by an insatiable curiosity 
                and a passion for creating innovative solutions that make a real impact.
              </p>
              
              <p className="text-light/90 leading-relaxed mb-6">
                From building machine learning models that push the boundaries of what's possible to creating 
                software that scale to millions of users, I thrive on tackling complex challenges. 
                My experience spans <span className="text-accent font-bold">Full-Dtack Development</span>, 
                <span className="text-accent font-bold"> Artificial Intelligence</span>,
                and <span className="text-accent font-bold">Systems Programming</span>.
              </p>

              <p className="text-light/90 leading-relaxed">
                Outside of coding, I enjoy staying active and balanced. You’ll usually find me at the <span className="text-accent font-bold">Gym</span>, 
                playing <span className="text-accent font-bold">Pickleball</span>, or spending time with friends. Whether it’s workouts, pickleball, 
                or time with friends, I value the energy and balance that keep me motivated in and out of tech.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interests */}
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-3xl font-display font-bold text-accent mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What I'm Passionate About
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.id}
                className="glass-effect rounded-xl p-6 hover:border-accent transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{interest.icon}</div>
                <h4 className="text-xl font-display font-bold text-accent mb-2">
                  {interest.name}
                </h4>
                <p className="text-light/70 text-sm leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fun facts */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-accent mb-6 text-center">
            Quick Facts
          </h3>
          <div className="glass-effect rounded-xl p-8">
            <ul className="space-y-4 text-light/80">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">▸</span>
                <span>Currently learning Rust and diving deep into systems programming</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">▸</span>
                <span>Maintainer of several open-source projects with 500+ GitHub stars</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">▸</span>
                <span>Coffee enthusiast ☕ - debugging is 90% better with caffeine</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">▸</span>
                <span>Vim user (yes, I know how to exit it)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">▸</span>
                <span>Believe that the best code is the code you don't have to write</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
