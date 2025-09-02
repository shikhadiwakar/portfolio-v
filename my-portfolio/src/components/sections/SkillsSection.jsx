import React from 'react';
import { skills } from '../../data/skills';

const SkillsSection = ({ theme, isDark }) => {
  return (
    <section id="skills" className="min-h-screen py-20 px-4 lg:px-16 xl:px-24 2xl:px-32">
      <div className="w-full">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 ${theme.text}`}>
          Skills & <span className={`text-${theme.lighter.replace('text-', '')} font-bold`}>Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
          {skills.map((skill, index) => (
            <div key={index} className={`${theme.cardBg} rounded-2xl p-6 lg:p-8 border ${theme.cardBorder} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}>
              <div className="flex justify-between mb-4">
                <span className={`${theme.text} font-semibold text-lg group-hover:${theme.primary} transition-colors duration-300`}>{skill.name}</span>
                <span className={`${theme.primary} font-bold text-lg`}>{skill.level}%</span>
              </div>
              <div className={`w-full rounded-full h-3 mb-3 transition-all duration-300 ${
                isDark ? 'bg-gray-800' : 'bg-gray-200'
              }`}>
                <div
                  className={`bg-gradient-to-r ${theme.buttonGradient} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden`}
                  style={{ width: `${skill.level}%` }}
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              </div>
              <span className={`${theme.textSecondary} font-medium`}>{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;