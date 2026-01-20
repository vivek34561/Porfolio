import React from 'react';
import { Trophy, Code, Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="text-yellow-500" size={32} />,
      title: 'Ranked 7th out of 40 Teams',
      subtitle: 'IIIT Bhagalpur Internal Hackathon 2024',
      description: 'Built an innovative solution under tight deadlines',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: <Trophy className="text-blue-500" size={32} />,
      title: 'Ranked 13th out of 60 Teams',
      subtitle: 'IIIT Bhagalpur Internal Hackathon 2025',
      description: 'Demonstrated strong problem-solving and teamwork skills',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: <Code className="text-green-500" size={32} />,
      title: '550+ DSA Problems Solved',
      subtitle: 'Competitive Programming',
      description: 'Strong foundation in algorithms and data structures',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <section id="achievements" className="section-spacing bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-heading-gap">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-4"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Celebrating milestones and competitive successes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-primary-bg rounded-xl shadow-md hover-lift border border-border overflow-hidden"
            >
              {/* Gradient Header */}
              <div
                className={`h-2 bg-gradient-to-r ${achievement.color}`}
              ></div>

              <div className="p-6">
                {/* Icon */}
                <div className="mb-4 flex justify-center">{achievement.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary text-center mb-2">
                  {achievement.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-medium text-primary-accent text-center mb-3">
                  {achievement.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-text-secondary text-center">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-primary-bg rounded-xl border border-border">
            <p className="text-4xl font-bold text-primary-accent mb-2">5+</p>
            <p className="text-text-secondary">Projects</p>
          </div>
          <div className="text-center p-6 bg-primary-bg rounded-xl border border-border">
            <p className="text-4xl font-bold text-primary-green mb-2">300+</p>
            <p className="text-text-secondary">AI Evaluations</p>
          </div>
          <div className="text-center p-6 bg-primary-bg rounded-xl border border-border">
            <p className="text-4xl font-bold text-primary-accent mb-2">550+</p>
            <p className="text-text-secondary">Problems Solved</p>
          </div>
          <div className="text-center p-6 bg-primary-bg rounded-xl border border-border">
            <p className="text-4xl font-bold text-primary-green mb-2">2</p>
            <p className="text-text-secondary">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
