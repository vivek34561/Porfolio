import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Oracle Cloud Infrastructure Certification',
      issuer: 'Oracle',
      date: '2024',
      image: '/img/image1.png',
      link: '/Oracle.pdf',
    },
    {
      title: 'Complete Generative AI Course',
      issuer: 'Udemy',
      date: '2025',
      description: 'LangChain and HuggingFace',
      image: '/img/image2.png',
      link: '/Udemy.pdf',
    },
    {
      title: 'Complete Agentic AI Bootcamp',
      issuer: 'Udemy',
      date: '2025',
      description: 'LangGraph and LangChain',
      image: 'https://udemy-certificate.s3.amazonaws.com/image/UC-6c45c4d0-157a-4377-bc82-c796b11031da.jpg',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-6c45c4d0-157a-4377-bc82-c796b11031da.jpg',
    },
  ];

  return (
    <section id="certificates" className="section-spacing bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-heading-gap">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-4"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-primary-bg rounded-xl shadow-md hover-lift border border-border overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Certificate Image */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-accent/10 to-primary-green/10 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="text-6xl">🏆</div>';
                    }}
                  />
                </div>
              </a>

              {/* Certificate Info */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="text-primary-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary-accent font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {cert.description && (
                  <p className="text-sm text-text-secondary mb-3">
                    {cert.description}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs text-text-secondary">{cert.date}</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-accent hover:text-primary-green transition-colors text-sm font-medium"
                  >
                    View Certificate
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
