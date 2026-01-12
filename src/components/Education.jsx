import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const education = {
    institution: 'Indian Institute of Information Technology, Bhagalpur',
    degree: 'B.Tech in Mathematics and Computing',
    duration: '2023 - 2027',
    cgpa: '7.75',
  };

  const coursework = [
    'Machine Learning',
    'Deep Learning',
    'Data Structures & Algorithms',
    'Linear Algebra',
    'Probability & Statistics',
    'Database Management Systems',
  ];

  return (
    <section id="education" className="py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Card - Main */}
          <div className="bg-gradient-to-br from-primary-accent/5 to-primary-green/5 p-8 md:p-10 rounded-2xl shadow-lg border-2 border-border hover:border-primary-accent transition-all mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-gradient-to-br from-primary-accent to-primary-green p-5 rounded-2xl shadow-lg">
                <GraduationCap size={40} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                  {education.degree}
                </h3>
                <p className="text-lg md:text-xl text-primary-accent font-semibold mb-3">
                  {education.institution}
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  <div className="flex items-center gap-2 bg-primary-white px-4 py-2 rounded-lg shadow-sm">
                    <Calendar size={18} className="text-primary-accent" />
                    <span className="font-medium text-text-primary">{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-primary-white px-4 py-2 rounded-lg shadow-sm">
                    <Award size={18} className="text-primary-green" />
                    <span className="font-medium text-text-primary">CGPA: {education.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="bg-primary-bg p-8 rounded-xl shadow-md border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-primary-accent to-primary-green rounded-full"></div>
              <h3 className="text-2xl font-bold text-text-primary">
                Relevant Coursework
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coursework.map((course, index) => (
                <div
                  key={index}
                  className="group relative px-5 py-4 bg-primary-white rounded-lg border border-border hover:border-primary-accent transition-all duration-300 hover-lift"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-accent group-hover:scale-125 transition-transform"></div>
                    <span className="font-medium text-text-secondary group-hover:text-primary-accent transition-colors">
                      {course}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
