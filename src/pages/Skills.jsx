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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="text-4xl mb-4">{category.icon}</div>
                <h4 className="text-xl font-display font-bold text-accent mb-4">
                  {category.category}
                </h4>
                
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-light/80 text-sm">{skill.name}</span>
                        <span className="text-accent text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-dark rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
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
