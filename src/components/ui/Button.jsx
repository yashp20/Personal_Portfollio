import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  ...props 
}) {
  const baseStyles = 'px-8 py-3 font-mono text-sm uppercase tracking-widest rounded transition-all duration-300 inline-block';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_30px_rgba(255,107,53,0.4)]',
    secondary: 'border-2 border-accent text-accent hover:bg-accent hover:text-dark',
    ghost: 'text-accent hover:bg-accent/10',
  };

  const Component = motion[href ? 'a' : 'button'];

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
}
