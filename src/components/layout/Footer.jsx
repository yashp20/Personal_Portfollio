import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: '💻' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '🐦' },
    { name: 'Email', url: 'mailto:your.email@illinois.edu', icon: '📧' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-black text-gradient mb-4">YASH PATEL</h3>
            <p className="text-light/60 text-sm">
              Computer Science @ UIUC
              <br />
              Building the future, one line at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/resume.pdf" className="text-light/60 hover:text-accent transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#projects" className="text-light/60 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light/60 hover:text-accent transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-accent font-display font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform"
                  whileHover={{ y: -5 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-light/40 text-sm">
          <p>&copy; {currentYear} Your Name. Built with React + Vite. Designed with passion at UIUC.</p>
        </div>
      </div>
    </footer>
  );
}
