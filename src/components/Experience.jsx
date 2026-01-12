import React from 'react';
import { Briefcase, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'AI Response Evaluator',
      company: 'Outlier',
      type: 'Freelance',
      location: 'Remote',
      duration: 'Mar 2025 – Jul 2025',
      achievements: [
        'Evaluated 300+ AI-generated responses for accuracy, quality, and relevance',
        'Improved evaluation reliability by 25% through detailed feedback protocols',
        'Collaborated with cross-functional teams to refine evaluation metrics',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 border-l-2 border-primary-accent/30 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] bg-primary-accent rounded-full border-4 border-primary-white"></div>

              {/* Content Card */}
              <div className="bg-primary-bg p-6 rounded-xl border border-border hover-lift">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-accent font-medium mb-2">
                      <Briefcase size={18} />
                      <span>
                        {exp.company} • {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-text-secondary">
                    <span className="font-medium">{exp.duration}</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-text-secondary"
                    >
                      <TrendingUp
                        size={18}
                        className="text-primary-green mr-3 mt-1 flex-shrink-0"
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
