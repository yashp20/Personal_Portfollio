import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="glass-effect rounded-xl p-6 group cursor-pointer overflow-hidden relative"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

      {/* Image */}
      {project.image && (
        <div className="mb-4 rounded-lg overflow-hidden aspect-video bg-dark/50">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      <h4 className="text-xl font-display font-bold text-accent mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h4>

      <p className="text-light/80 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs bg-accent/20 border border-accent/50 rounded-full text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-primary transition-colors flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span>💻</span> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-primary transition-colors flex items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span>🚀</span> Demo
          </a>
        )}
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded-full">
          Featured
        </div>
      )}
    </motion.div>
  );
}
