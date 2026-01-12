import React from 'react';
import {
  Code2,
  Brain,
  MessageSquare,
  Wrench,
  Layers,
  Database,
  Users,
  BookOpen,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="text-primary-accent" size={28} />,
      title: 'Programming Languages',
      skills: ['Python', 'C++'],
    },
    {
      icon: <Brain className="text-primary-green" size={28} />,
      title: 'Machine Learning',
      skills: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Feature Engineering',
        'Model Evaluation',
      ],
    },
    {
      icon: <Layers className="text-primary-accent" size={28} />,
      title: 'Deep Learning',
      skills: [
        'Neural Networks',
        'CNNs',
        'Transfer Learning',
        'LoRA',
        'QLoRA',
      ],
    },
    {
      icon: <MessageSquare className="text-primary-green" size={28} />,
      title: 'NLP & GenAI',
      skills: [
        'Text Preprocessing',
        'Tokenization',
        'Embeddings',
        'RAG',
        'Prompt Engineering',
      ],
    },
    {
      icon: <Wrench className="text-primary-accent" size={28} />,
      title: 'Developer Tools',
      skills: ['Git', 'FastAPI', 'Streamlit', 'MLflow', 'DVC'],
    },
    {
      icon: <BookOpen className="text-primary-green" size={28} />,
      title: 'Frameworks & Libraries',
      skills: [
        'LangChain',
        'LangGraph',
        'TensorFlow',
        'scikit-learn',
        'Pydantic',
      ],
    },
    {
      icon: <Database className="text-primary-accent" size={28} />,
      title: 'Cloud/Databases',
      skills: ['FAISS', 'ChromaDB', 'Pinecone'],
    },
    {
      icon: <Users className="text-primary-green" size={28} />,
      title: 'Soft Skills',
      skills: [
        'Problem Solving',
        'Analytical Thinking',
        'Technical Writing',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-4"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit for building end-to-end AI/ML solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-primary-bg p-6 rounded-xl border border-border hover-lift hover:border-primary-accent transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary-white text-text-secondary text-sm rounded-full border border-border hover:border-primary-accent hover:text-primary-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
