import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import { education } from '../data/experience';

export default function Education() {
  return (
    <div className="page-transition pt-32 pb-20">
      <Container>
        <SectionTitle subtitle="My academic journey at UIUC">
          Education
        </SectionTitle>

        {/* Education Details */}
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="glass-effect rounded-xl p-6 md:p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h4 className="text-2xl md:text-3xl font-display font-bold text-accent mb-2">
                    {edu.school}
                  </h4>
                  <p className="text-primary font-bold text-lg mb-2">{edu.degree}</p>
                  <p className="text-light/60 text-lg">GPA: <span className="text-accent font-bold">{edu.gpa}</span></p>
                </div>
                <p className="text-light/60 text-sm mt-2 md:mt-0">{edu.duration}</p>
              </div>

              {/* Coursework and Achievements */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-accent font-bold text-lg mb-3 flex items-center gap-2">
                    📚 Relevant Coursework
                  </h5>
                  <ul className="space-y-2">
                    {edu.coursework.map((course, i) => (
                      <li key={i} className="text-light/70 text-sm flex items-start gap-2">
                        <span className="text-accent">▸</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h5 className="text-accent font-bold text-lg mb-3 flex items-center gap-2">
                      🏆 Achievements
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-light/70 text-sm flex items-start gap-2">
                          <span className="text-accent">★</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Interests */}
        <motion.div
          className="max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-accent mb-6 text-center">
            Academic Focus Areas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🤖",
                title: "Artificial Intelligence",
                description: "Machine Learning, Deep Learning, NLP"
              },
              {
                icon: "💻",
                title: "Software Engineering",
                description: "Full-Stack Development, System Design"
              },
              {
                icon: "📊",
                title: "Mathematics",
                description: "Discrete Math, Linear Algebra, Statistics"
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: 'var(--accent)' }}
              >
                <div className="text-4xl mb-3">{area.icon}</div>
                <h4 className="text-lg font-display font-bold text-accent mb-2">
                  {area.title}
                </h4>
                <p className="text-light/70 text-sm">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why UIUC */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-xl p-8 md:p-12">
            <h3 className="text-2xl font-display font-bold text-accent mb-6 text-center">
              Why UIUC?
            </h3>
            <p className="text-light/80 leading-relaxed text-center">
              The University of Illinois Urbana-Champaign is consistently ranked among the top computer science programs in the world. 
              The rigorous curriculum, world-class faculty, and vibrant tech community provide the perfect environment for learning, 
              innovation, and growth. Being part of this community has shaped my technical skills and problem-solving mindset.
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
