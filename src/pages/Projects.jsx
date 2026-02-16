import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const allTags = ['all', ...new Set(projects.flatMap(p => p.tags))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="page-transition pt-32 pb-20">
      <Container>
        <SectionTitle subtitle="Check out what I've been building">
          My Projects
        </SectionTitle>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-mono uppercase tracking-wider transition-all ${
                filter === tag
                  ? 'bg-accent text-dark'
                  : 'glass-effect text-accent hover:border-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-accent mb-6">Featured</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter(p => p.featured)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>

        {/* All projects */}
        {filteredProjects.filter(p => !p.featured).length > 0 && (
          <div>
            <h3 className="text-2xl font-display font-bold text-accent mb-6">More Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter(p => !p.featured)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-light/60 text-lg">No projects found with this filter.</p>
          </motion.div>
        )}

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
