import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import { education } from '../data/experience';

export default function Education() {
  return (
    <div className="page-transition pt-32 pb-20">
      <Container>
        <SectionTitle >
          Education
        </SectionTitle>

        {/* Education Details */}
        <div className="max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="glass-effect rounded-xl p-8 md:p-10 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Header Section */}
              <div className="text-center mb-8">
                <h4 className="text-3xl md:text-4xl font-display font-black text-accent mb-3">
                  {edu.school}
                </h4>
                <p className="text-primary font-bold text-xl mb-3">{edu.degree}</p>
                <div className="flex items-center justify-center gap-6 md:gap-8 text-light/70 flex-wrap">
                  <div className="flex items-center gap-2">
                    {/* <span className="text-accent">📅</span> */}
                    <span className="font-mono text-sm whitespace-nowrap">{edu.duration}</span>
                  </div>
                  <div className="h-4 w-px bg-accent/30 hidden md:block"></div>
                  <div className="flex items-center gap-2">
                    {/* <span className="text-accent">🎓</span> */}
                    <span className="font-mono text-sm whitespace-nowrap">GPA: <span className="text-accent font-bold">{edu.gpa}</span></span>
                  </div>
                </div>
              </div>

              {/* Coursework Section */}
              <div>
                <h5 className="text-accent font-bold text-lg mb-6 text-center flex items-center justify-center gap-2">
                  {/* 📚  */}
                  Relevant Coursework
                </h5>
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 max-w-4xl">
                    {edu.coursework.map((course, i) => (
                      <div key={i} className="flex items-start gap-2 min-w-[280px]">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        <span className="text-light/80 text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements Section - Only show if there are achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-8 pt-8 border-t border-white/10">
                  <h5 className="text-accent font-bold text-lg mb-6 text-center flex items-center justify-center gap-2">
                    🏆 Achievements
                  </h5>
                  <div className="flex justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3 max-w-4xl">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 min-w-[280px]">
                          <span className="text-accent mt-1 flex-shrink-0">★</span>
                          <span className="text-light/80 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
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
            Academic Focus 
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🤖",
                title: "Artificial Intelligence",
                // description: "Machine Learning, Deep Learning, NLP"
              },
              {
                icon: "💻",
                title: "Software Engineering",
                // description: "Full-Stack Development, System Design"
              },
              {
                icon: "📊",
                title: "Mathematics",
                // description: "Discrete Math, Linear Algebra, Statistics"
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
              The curriculum, faculty, and vibrant tech community provide the perfect environment for learning, 
              innovation, and growth. Being part of this community has shaped my technical skills and problem-solving mindset.
            </p>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}