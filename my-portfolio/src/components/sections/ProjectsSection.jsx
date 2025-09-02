import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectsSection = ({ theme, isDark }) => {
  return (
    <section id="projects" className={`min-h-screen py-20 px-4 lg:px-16 xl:px-24 2xl:px-32 ${theme.sectionBg}`}>
      <div className="w-full">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 ${theme.text}`}>
          Featured <span className={`text-${theme.light.replace('text-', '')} font-bold`}>Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index} className={`${theme.cardBg} rounded-2xl p-6 lg:p-8 border ${theme.cardBorder} ${theme.cardHoverBorder} ${theme.cardHoverBg} transition-all duration-300 hover:transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-2xl group`}>
              <h3 className={`text-xl md:text-2xl font-bold mb-4 ${theme.text} group-hover:${theme.primary} transition-colors duration-300`}>{project.title}</h3>
              <p className={`${theme.textSecondary} mb-6 text-lg leading-relaxed`}>{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50' 
                      : 'bg-gray-200/50 text-gray-700 hover:bg-gray-300/50'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className={`${theme.textSecondary} font-medium`}>{project.period}</span>
                <ExternalLink className={`w-6 h-6 ${theme.primary} ${theme.hoverPrimary} transition-all duration-300 hover:scale-110 cursor-pointer`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;