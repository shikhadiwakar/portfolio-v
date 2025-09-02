import React from 'react';
import { TrendingUp } from 'lucide-react';
import { activities } from '../../data/activities';

const ExperienceSection = ({ theme, isDark }) => {
  return (
    <section id="experience" className="min-h-screen py-20 px-4 lg:px-16 xl:px-24 2xl:px-32">
      <div className="w-full">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 ${theme.text}`}>
          Experience & <span className={`text-${theme.secondary.replace('text-', '')} font-bold`}>Leadership</span>
        </h2>
        
        <div className="space-y-8">
          {activities.map((activity, index) => (
            <div key={index} className={`${theme.cardBg} rounded-2xl p-6 lg:p-8 border ${theme.cardBorder} ${theme.cardHoverBorder} ${theme.cardHoverBg} transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className={`text-xl md:text-2xl font-bold ${theme.text} mb-2`}>{activity.title}</h3>
                  <p className={`${theme.primary} font-semibold text-lg mb-1`}>{activity.role}</p>
                  <p className={theme.textSecondary}>{activity.location} • {activity.period}</p>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <span className={`bg-gradient-to-r ${theme.gradient} bg-opacity-20 ${theme.primary} px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm`}>
                    {activity.category}
                  </span>
                </div>
              </div>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-lg mb-6 leading-relaxed`}>{activity.description}</p>
              <div className={`flex items-center ${theme.textSecondary}`}>
                <TrendingUp className={`w-5 h-5 mr-3 ${theme.primary}`} />
                <span className="font-medium">{activity.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;