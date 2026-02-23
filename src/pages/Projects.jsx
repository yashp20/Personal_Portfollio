import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="page-transition pt-32 pb-20">
      <Container>
        <SectionTitle subtitle="Check out what I've been building">
          My Projects
        </SectionTitle>

        {/* Projects List */}
        <div className="max-w-7xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-effect rounded-xl overflow-hidden hover:border-accent transition-colors min-h-[450px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="md:w-2/5 relative overflow-hidden bg-dark/50">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-64 md:h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                      <span className="text-6xl">💻</span>
                    </div>
                  )}
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-accent mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-light/80 leading-relaxed mb-6 text-base">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs bg-accent/20 border border-accent/50 rounded-full text-accent font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent rounded-lg text-accent text-sm font-mono transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>💻</span> View Code
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary rounded-lg text-primary text-sm font-mono transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>🚀</span> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect rounded-2xl p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-display font-bold text-accent mb-4">
              Want to see more?
            </h3>
            <p className="text-light/70 mb-8">
              These are just some highlights. Check out my GitHub for a complete list 
              of projects, contributions, and experiments.
            </p>
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-mono text-sm uppercase tracking-widest rounded"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}