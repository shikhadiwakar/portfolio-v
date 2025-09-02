import React from 'react';
import { Sun, Moon } from 'lucide-react';

const TopNavigation = ({ darkMode, setDarkMode, activeSection, scrollToSection, theme }) => {
  return (
    <>
      {/* Theme Toggle - Top Right */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-xl ${theme.cardBg} border ${theme.cardBorder} ${theme.cardHoverBg} transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl`}
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-400 transition-all duration-300" />
        ) : (
          <Moon className={`w-5 h-5 ${theme.primary} transition-all duration-300`} />
        )}
      </button>

      {/* Navigation Menu - Top Center */}
      <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex items-center space-x-2 p-3 rounded-full ${theme.cardBg} shadow-2xl transition-all duration-300 border ${theme.cardBorder}`}>
        {[
          { id: 'stats', label: 'Overview' },
          { id: 'experience', label: 'Experience' },
          { id: 'projects', label: 'Projects' },
          { id: 'skills', label: 'Skills' },
          { id: 'contact', label: 'Contact' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg relative overflow-hidden group min-w-[120px] ${
              activeSection === item.id
                ? `bg-gradient-to-r ${theme.buttonGradient} text-white shadow-xl transform scale-105`
                : `${theme.text} ${theme.hoverBg} hover:scale-105 ${theme.hoverPrimary}`
            }`}
          >
            <span className="relative z-10 transition-all duration-300">{item.label}</span>
            {activeSection !== item.id && (
              <div className={`absolute inset-0 bg-gradient-to-r ${theme.cardGradient} opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full`}></div>
            )}
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping bg-current"></div>
          </button>
        ))}
      </nav>
    </>
  );
};

export default TopNavigation;