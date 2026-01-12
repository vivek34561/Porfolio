import React, { useState } from 'react';
import { Github, ExternalLink, Calendar, Youtube, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: 'CardioCare AI',
      subtitle: 'Heart Disease Prediction with Multilingual Support',
      date: 'Apr 2025',
      description: [
        'Heart disease risk prediction with FastAPI backend and multilingual guidance',
        'ML model with 98% accuracy for cardiovascular risk assessment',
        'Real-time health insights with conversational AI interface',
      ],
      technologies: ['XGBoost', 'LangChain', 'Groq LLaMA', 'FastAPI', 'Streamlit'],
      github: 'https://github.com/vivek34561/End-to-End-Heart-Disease-Prediction',
      demo: 'https://heart-diseasefrontend-5a7a8554af50.herokuapp.com/',
      video: 'https://www.youtube.com/watch?v=-chceQbgZ8E',
    },
    {
      title: 'ResuMate',
      subtitle: 'AI-Powered Interview Preparation Tool',
      date: 'May 2025',
      description: [
        'Mock interviews and resume screening using LangChain with real-time voice',
        'Intelligent ATS-based resume analysis and scoring',
        'Personalized interview questions based on job description',
      ],
      technologies: ['LangChain', 'FastAPI', 'Streamlit', 'OpenAI', 'Voice Recognition'],
      github: 'https://github.com/vivek34561/Resume-Tracking-And-AI-Based-Mock-Interview',
      demo: 'https://interview-preparation-tool-7eabdc1176ed.herokuapp.com/',
    },
    {
      title: 'Lovable Clone',
      subtitle: 'AI Software Engineer Agent',
      date: 'Dec 2024',
      description: [
        'Minimalist, end-to-end agentic pipeline: planner → architect → coder',
        '88% successful end-to-end generation rate across diverse projects',
        'Automated code generation writing real files into safe sandbox',
      ],
      technologies: ['LangGraph', 'Pydantic', 'FastAPI', 'Multi-Agent System'],
      github: 'https://github.com/vivek34561/Lovable_Clone',
      demo: 'https://lovable-clone-8d4d13d08df1.herokuapp.com/',
      video: 'https://youtu.be/9Vno_kFh9T4',
    },
    {
      title: 'KrishiGPT',
      subtitle: 'AI-Based Farmer Query Support System',
      date: 'Sep 2025',
      description: [
        'Streamlit suite for farmers: chatbot, disease detection, crop planning',
        'Multi-lingual support for agricultural queries and recommendations',
        'Integrated market price tracking and weather forecasting',
      ],
      technologies: ['LangChain', 'Streamlit', 'Computer Vision', 'FastAPI', 'APIs'],
      github: 'https://github.com/vivek34561/AIBasedFarmerQuerySupportandAdvisorySystemNew',
      demo: 'https://ai-based-farmer-query-system-f-13e43c423885.herokuapp.com/',
      video: 'https://www.youtube.com/watch?v=GMXjgJX-v4k',
    },
    {
      title: 'RAG-Based Document Q&A App',
      subtitle: 'Retrieval-Augmented Generation Chatbot',
      date: 'Aug 2024',
      description: [
        'Retrieval-Augmented Generation app for querying documents',
        'Supports multiple LLMs including Llama3 and OpenAI',
        'Context-aware responses with source attribution',
      ],
      technologies: ['LangChain', 'FAISS', 'Llama3', 'OpenAI', 'RAG'],
      github: 'https://github.com/vivek34561/RAG-Based-Document-Q-A-Chatbot',
      demo: 'https://rag-llama3-and-open-ai-w7dt.vercel.app/chat.html',
    },
    {
      title: 'LangGraph Chatbot with News Tools',
      subtitle: 'Agentic AI with External Tools Integration',
      date: 'Nov 2024',
      description: [
        'Graph-driven workflows with LangGraph/LangChain integration',
        'Real-time news aggregation using external APIs',
        'GROQ LLMs for fast and efficient response generation',
      ],
      technologies: ['LangGraph', 'LangChain', 'GROQ', 'Streamlit', 'APIs'],
      github: 'https://github.com/vivek34561/Agentic-ChatNews-Graph',
      demo: 'https://agentic-chatnews-graph-etiidyumd5fjvghyakp3yw.streamlit.app/',
    },
    {
      title: 'Kidney Disease Classification',
      subtitle: 'MLOps Pipeline with DVC',
      date: 'Nov 2024',
      description: [
        'End-to-end ML pipeline with DVC orchestration and experiment tracking',
        '92% validation accuracy using VGG16 transfer learning',
        'Fully containerized deployment with CI/CD integration',
      ],
      technologies: ['DVC', 'MLflow', 'TensorFlow', 'Docker', 'Streamlit'],
      github: 'https://github.com/vivek34561/kidney_disease_classification',
      demo: 'https://ajcdkkwddbgygkkooyffjj.streamlit.app/',
    },
    {
      title: 'Movie Recommender System',
      subtitle: 'Content-Based Recommendation Engine',
      date: 'Sep 2024',
      description: [
        'Content-based recommendation system over 45,000+ movies',
        'Sub-2-second latency with FastAPI backend',
        'Interactive UI with real-time poster fetching from TMDB API',
      ],
      technologies: ['TF-IDF', 'FastAPI', 'Streamlit', 'TMDB API'],
      github: 'https://github.com/vivek34561/Movie-Recommendation',
      demo: 'https://movie-recommendation2-70698c1dbbef.herokuapp.com/',
    },
    {
      title: 'Olympics Data Analysis',
      subtitle: '120 Years of Olympic History',
      date: 'Jul 2024',
      description: [
        'Exploratory analysis and visualizations of 120 years of Olympic history',
        'Interactive dashboards with medal trends and athlete statistics',
        'Country-wise performance analysis and predictions',
      ],
      technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
      github: 'https://github.com/vivek34561/Olympics_analysis',
      demo: 'https://olympicsanalysis-rnegm7gkcgfrt3xyy4c4ul.streamlit.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-accent mx-auto mb-4"></div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Building intelligent solutions that make a real-world impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, showAll ? projects.length : 6).map((project, index) => (
            <div
              key={index}
              className="bg-primary-white rounded-xl shadow-md hover-lift border border-border overflow-hidden cursor-pointer"
              onClick={(e) => {
                // Only open link if not clicking on a button
                if (!e.target.closest('a')) {
                  if (project.demo) {
                    window.open(project.demo, '_blank', 'noopener,noreferrer');
                  }
                }
              }}
            >
              {/* Project Header with Gradient */}
              <div className="h-2 bg-gradient-to-r from-primary-accent to-primary-green"></div>

              <div className="p-6">
                {/* Title and Date */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-text-primary">
                    {project.title}
                  </h3>
                  <span className="text-xs text-text-secondary flex items-center gap-1 whitespace-nowrap">
                    <Calendar size={14} />
                    {project.date}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-sm text-primary-accent font-medium mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <ul className="space-y-2 mb-6">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="text-sm text-text-secondary flex items-start">
                      <span className="text-primary-green mr-2 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary-bg text-primary-accent text-xs rounded border border-primary-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 bg-primary-green/10 text-primary-green border border-primary-green/30 rounded-lg hover:bg-primary-green hover:text-white transition-all text-xs font-semibold whitespace-nowrap"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-600 hover:text-white transition-all text-xs font-semibold whitespace-nowrap"
                    >
                      <Youtube size={16} />
                      Video
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 bg-primary-accent/10 text-primary-accent border border-primary-accent/30 rounded-lg hover:bg-primary-accent hover:text-white transition-all text-xs font-semibold whitespace-nowrap"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {projects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-primary-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              {showAll ? (
                <>
                  <ChevronUp size={20} />
                  Show Less Projects
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  View All Projects ({projects.length - 6} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
