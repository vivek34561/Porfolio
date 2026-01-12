import React from 'react';
import { ArrowDown, Download, Code2, Sparkles, Rocket, Heart } from 'lucide-react';

const Hero = () => {
  const highlights = [
    {
      icon: <Code2 className="text-white" size={24} />,
      title: 'Problem Solver',
      description: '550+ DSA problems solved',
    },
    {
      icon: <Sparkles className="text-white" size={24} />,
      title: 'ML/DL Expertise',
      description: 'End-to-end AI solutions',
    },
    {
      icon: <Rocket className="text-white" size={24} />,
      title: 'Full-Stack Dev',
      description: 'From training to deployment',
    },
    {
      icon: <Heart className="text-white" size={24} />,
      title: 'MLOps',
      description: 'DVC, MLflow, FastAPI',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 50%, #2ec4b6 100%)',
      }}
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Hero Content */}
          <div className="text-center lg:text-left animate-fade-in pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                Vivek Kumar Gupta
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-medium mb-6">
              AI/ML Engineer | Deep Learning Specialist | Generative AI Enthusiast
            </p>

            <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed">
              I build intelligent systems that solve real-world problems using Machine Learning and AI. 
              Passionate about crafting end-to-end ML solutions from training to deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-primary-accent font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View My Projects
                <ArrowDown size={20} />
              </a>
              <a
                href="/Vivek_resume.pdf"
                download
                className="px-8 py-4 bg-primary-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20"
                >
                  <div className="flex items-start gap-2">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-white/80">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="flex flex-col items-center space-y-6 animate-fade-in">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-white/30 to-white/10 p-1 backdrop-blur-sm">
                <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/image.png" 
                    alt="Vivek Kumar Gupta" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                <p className="font-semibold text-primary-accent whitespace-nowrap">AI/ML Engineer</p>
              </div>
            </div>

            {/* About Text */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 w-full">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">About Me</h2>
              <p className="text-white/90 leading-relaxed mb-4">
                Hello! I'm Vivek Kumar Gupta, a passionate{' '}
                <span className="text-yellow-200 font-semibold">AI/ML Engineer</span> and B.Tech student 
                specializing in Mathematics and Computing at{' '}
                <span className="font-semibold text-white">IIIT Bhagalpur</span>.
              </p>
              <p className="text-white/90 leading-relaxed mb-4">
                I specialize in building intelligent systems using{' '}
                <span className="font-semibold text-white">Machine Learning, Deep Learning, NLP, and Generative AI</span>.
              </p>
              <p className="text-white/90 leading-relaxed">
                With hands-on experience in advanced techniques like{' '}
                <span className="font-semibold text-white">RAG, Multi-Agent Systems, Transfer Learning</span>, 
                and frameworks like <span className="font-semibold text-white">LangChain, LangGraph, and TensorFlow</span>, 
                I'm driven by the challenge of transforming complex problems into elegant, scalable solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 text-center animate-bounce">
          <a href="#skills">
            <ArrowDown className="mx-auto text-white/60" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
