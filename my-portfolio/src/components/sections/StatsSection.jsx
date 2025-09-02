import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useCounters } from '../../hooks/useCounters';

const StatsSection = ({ theme, scrollToSection }) => {
  const counters = useCounters();

  return (
    <section id="stats" className="min-h-screen flex items-center justify-center px-4 lg:px-16 xl:px-24 2xl:px-32">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 ${theme.text} animate-fade-in-up`}>
            Transforming Ideas Into 
            <span className={`text-${theme.accent.replace('text-', '')} font-bold`}> Impact</span>
          </h2>
          <p className={`text-lg md:text-xl lg:text-2xl ${theme.textSecondary} max-w-4xl mx-auto animate-fade-in-up`} style={{animationDelay: '0.2s'}}>
            4+ years of experience in social entrepreneurship, product design, and strategic consulting with measurable impact across multiple initiatives.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-16">
          {[
            { key: 'projects', value: counters.projects, suffix: '+', label: 'Major Projects' },
            { key: 'experience', value: counters.experience, suffix: '+', label: 'Years Experience' },
            { key: 'awards', value: counters.awards, suffix: '', label: 'Awards Won' },
            { key: 'impact', value: counters.impact, suffix: '+', label: 'Lives Impacted' }
          ].map((stat, index) => (
            <div key={stat.key} className={`text-center p-6 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} transition-all duration-500 hover:scale-105 ${theme.cardHoverBg} shadow-lg hover:shadow-xl animate-fade-in-up`} style={{animationDelay: `${0.3 + index * 0.1}s`}}>
              <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${theme.primary} mb-4 transition-all duration-300`}>
                {stat.value}{stat.suffix}
              </div>
              <div className={`text-lg md:text-xl ${theme.textSecondary} font-medium`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => scrollToSection('experience')}
            className={`${theme.primary} ${theme.hoverPrimary} transition-all duration-300 animate-bounce hover:scale-110 p-2 rounded-full ${theme.hoverBg}`}
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;