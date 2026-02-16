import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';

export default function Contact() {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@illinois.edu',
      link: 'mailto:your.email@illinois.edu',
      description: 'Drop me a line anytime'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: '@yourusername',
      link: 'https://github.com/yourusername',
      description: 'Check out my code'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Your Name',
      link: 'https://linkedin.com/in/yourprofile',
      description: "Let's connect professionally"
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@yourusername',
      link: 'https://twitter.com/yourusername',
      description: 'Follow my tech journey'
    }
  ];

  return (
    <div className="page-transition pt-32 pb-20">
      <Container>
        <SectionTitle subtitle="Let's build something amazing together">
          Get In Touch
        </SectionTitle>

        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-light/80 leading-relaxed max-w-2xl mx-auto">
              I'm always open to new opportunities, collaborations, and interesting conversations. 
              Whether you have a question, want to work together, or just want to say hi, 
              feel free to reach out through any of the channels below!
            </p>
          </motion.div>

          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect rounded-xl p-6 hover:border-accent transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-accent mb-2">
                  {method.title}
                </h3>
                <p className="text-light/90 font-mono text-sm mb-2">
                  {method.value}
                </p>
                <p className="text-light/60 text-sm">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Resume download */}
          <motion.div
            className="glass-effect rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-accent mb-4">
              Want to know more?
            </h3>
            <p className="text-light/70 mb-6">
              Download my resume for a detailed overview of my experience, projects, and skills.
            </p>
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-mono text-sm uppercase tracking-widest rounded"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>📄</span>
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Availability status */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-light/80 text-sm font-mono">
                Available for Summer 2026 Internships
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
