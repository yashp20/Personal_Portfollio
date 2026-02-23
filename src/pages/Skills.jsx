import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <div className="page-transition pt-32 pb-20">
      <Container>
        <SectionTitle subtitle="My technical expertise and tools I work with">
          Skills & Technologies
        </SectionTitle>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="glass-effect rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ borderColor: 'var(--accent)', y: -5 }}
              >
                <div className="text-4xl mb-4 text-center">{category.icon}</div>
                <h4 className="text-xl font-display font-bold text-accent mb-4 text-center">
                  {category.category}
                </h4>
                
                {/* Skill Bubbles */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-mono hover:bg-accent/20 hover:border-accent/50 transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications or Additional Skills (Optional) */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-accent mb-6 text-center">
            What I'm Currently Learning
          </h3>
          <div className="glass-effect rounded-xl p-8">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-light/80">
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">▸</span>
                <span>Advanced Machine Learning & Deep Learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">▸</span>
                <span>Cloud Architecture & Distributed Systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">▸</span>
                <span>System Design & Scalability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-xl">▸</span>
                <span>DevOps & CI/CD Best Practices</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}