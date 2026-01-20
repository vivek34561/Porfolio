import React from 'react';
import { Code2, Sparkles, Rocket, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="text-primary-accent" size={24} />,
      title: 'Problem Solver',
      description: '550+ DSA problems solved',
    },
    {
      icon: <Sparkles className="text-primary-green" size={24} />,
      title: 'ML/DL Expertise',
      description: 'End-to-end AI solutions',
    },
    {
      icon: <Rocket className="text-primary-accent" size={24} />,
      title: 'Full-Stack Dev',
      description: 'From training to deployment',
    },
    {
      icon: <Heart className="text-primary-green" size={24} />,
      title: 'MLOps',
      description: 'DVC, MLflow, FastAPI',
    },
  ];

  return (
    <section id="about" className="section-spacing bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-heading-gap">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary-accent to-primary-green p-1">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="text-6xl font-bold text-primary-accent">VKG</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-accent text-white px-6 py-3 rounded-full shadow-lg">
                <p className="font-semibold">AI/ML Engineer</p>
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
              Hello! I'm Vivek Kumar Gupta, a passionate{' '}
              <span className="text-primary-accent font-semibold">AI/ML Engineer</span> and B.Tech student 
              specializing in Mathematics and Computing at{' '}
              <span className="font-semibold text-text-primary">IIIT Bhagalpur</span>.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              I specialize in building intelligent systems using{' '}
              <span className="font-semibold text-text-primary">Machine Learning, Deep Learning, NLP, and Generative AI</span>. 
              My expertise spans from conceptualizing AI solutions to deploying production-ready models with robust MLOps pipelines.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              With hands-on experience in advanced techniques like{' '}
              <span className="font-semibold text-text-primary">RAG, Multi-Agent Systems, Transfer Learning</span>, 
              and frameworks like <span className="font-semibold text-text-primary">LangChain, LangGraph, and TensorFlow</span>, 
              I'm driven by the challenge of transforming complex problems into elegant, scalable solutions.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-primary-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <p className="text-xl font-semibold text-primary-accent">
                Let's build something amazing together! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
