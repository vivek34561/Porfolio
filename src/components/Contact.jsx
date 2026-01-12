import React from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="text-primary-accent" size={24} />,
      label: 'Email',
      value: 'vivekgupta3749@gmail.com',
      href: 'mailto:vivekgupta3749@gmail.com',
    },
    {
      icon: <Phone className="text-primary-green" size={24} />,
      label: 'Phone',
      value: '+91-9151429036',
      href: 'tel:+919151429036',
    },
    {
      icon: <Linkedin className="text-primary-accent" size={24} />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://linkedin.com/in/vivek-kumar-gupta-profile',
    },
    {
      icon: <Github className="text-primary-green" size={24} />,
      label: 'GitHub',
      value: 'View My Repositories',
      href: 'https://github.com/vivekgupta3749',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-accent/5 to-primary-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-4"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborations, or just chat about AI/ML!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="bg-primary-white p-6 rounded-xl shadow-md hover-lift border border-border hover:border-primary-accent transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary-bg p-3 rounded-full group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary font-medium mb-1">
                      {method.label}
                    </p>
                    <p className="text-text-primary font-semibold">
                      {method.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="mailto:vivekgupta3749@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Send size={20} />
              Send Me an Email
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-text-secondary">
              Or download my resume to learn more about my work
            </p>
            <a
              href="/Vivek_resume.pdf"
              download
              className="inline-block mt-4 text-primary-accent hover:text-primary-green font-semibold underline transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
