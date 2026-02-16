import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import { experience, education } from '../data/experience';
import { skillCategories } from '../data/skills';

export default function Experience() {
  return (
    <div className="page-transition pt-32 pb-20">
      <Container>
        <SectionTitle subtitle="My professional journey and technical expertise">
          Experience & Skills
        </SectionTitle>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-display font-bold text-accent mb-8">Work Experience</h3>
          
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

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-display font-bold text-accent mb-8">Education</h3>
          
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="glass-effect rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-display font-bold text-accent mb-1">
                    {edu.school}
                  </h4>
                  <p className="text-primary font-bold mb-2">{edu.degree}</p>
                  <p className="text-light/60">GPA: {edu.gpa}</p>
                </div>
                <p className="text-light/60 text-sm">{edu.duration}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="text-accent font-bold mb-3">Relevant Coursework</h5>
                  <ul className="space-y-2">
                    {edu.coursework.map((course, i) => (
                      <li key={i} className="text-light/70 text-sm flex items-start gap-2">
                        <span className="text-accent">▸</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-accent font-bold mb-3">Achievements</h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-light/70 text-sm flex items-start gap-2">
                        <span className="text-accent">★</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-display font-bold text-accent mb-8 text-center">Technical Skills</h3>
          
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
      </Container>
    </div>
  );
}
