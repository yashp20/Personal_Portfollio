import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <div className="page-transition pt-32 pb-20">
      <Container>
        <SectionTitle >
          Work Experience
        </SectionTitle>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="glass-effect rounded-xl p-6 md:p-8 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ borderColor: 'var(--accent)' }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-accent rounded-full border-4 border-dark hidden md:block" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-display font-bold text-accent mb-1">
                      {exp.position}
                    </h4>
                    <p className="text-primary font-bold mb-2">{exp.company}</p>
                  </div>
                  <div className="text-light/60 text-sm">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                <p className="text-light/80 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-accent/20 border border-accent/50 rounded-full text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-accent mb-4">
              Interested in working together?
            </h3>
            <p className="text-light/70 mb-6">
              I'm always open to new opportunities and collaborations. Let's connect and build something amazing!
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-mono text-sm uppercase tracking-widest rounded"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
