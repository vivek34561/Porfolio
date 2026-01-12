import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-white shadow-md' : 'bg-white/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-xl font-bold text-text-primary hover:text-primary-accent transition-colors"
            >
              Vivek Kumar Gupta
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-primary-accent transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/vivek34561"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-gupta-0400452b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:vivekgupta3749@gmail.com"
              className="text-text-secondary hover:text-primary-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-primary-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-text-secondary hover:text-primary-accent hover:bg-primary-bg rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <a
                href="https://github.com/vivek34561"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-gupta-0400452b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:vivekgupta3749@gmail.com"
                className="text-text-secondary hover:text-primary-accent transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
