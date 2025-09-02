import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { createTheme } from './styles/themes';
import { useActiveSection } from './hooks/useActiveSection';
import Sidebar from './components/Sidebar';
import TopNavigation from './components/TopNavigation';
import StatsSection from './components/sections/StatsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTheme, setActiveTheme] = useState('lavender');
  const { activeSection, scrollToSection } = useActiveSection();

  // Generate theme based on current settings
  const theme = createTheme(activeTheme, darkMode);

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    setSidebarOpen(false);
  };

  const handleThemeChange = (newTheme) => {
    setActiveTheme(newTheme);
  };

  // Get mobile button gradient
  const getMobileButtonGradient = () => {
    const gradientMap = {
      lavender: 'from-violet-400 to-violet-500',
      rose: 'from-rose-400 to-rose-500',
      ocean: 'from-sky-400 to-sky-500',
      mint: 'from-emerald-400 to-emerald-500',
      sunset: 'from-amber-400 to-amber-500',
      cosmos: 'from-purple-400 to-purple-500'
    };
    return gradientMap[activeTheme] || gradientMap.lavender;
  };

  // Get light mode background gradient
  const getLightModeBackground = () => {
    const backgroundMap = {
      lavender: 'bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100',
      rose: 'bg-gradient-to-br from-rose-50 via-pink-50 to-red-100',
      ocean: 'bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100',
      mint: 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100',
      sunset: 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100',
      cosmos: 'bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-100'
    };
    return backgroundMap[activeTheme] || backgroundMap.lavender;
  };

  return (
    <div className={`min-h-screen ${darkMode ? theme.bg : getLightModeBackground()} overflow-x-hidden transition-all duration-500 relative`}>
      {/* Light mode animated background elements */}
      {!darkMode && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${theme.sidebarGradient} opacity-10`}></div>
          <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${theme.cardGradient} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
          <div className={`absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br ${theme.buttonGradient} rounded-full blur-3xl opacity-15 animate-pulse`} style={{animationDelay: '2s'}}></div>
          <div className={`absolute top-1/3 left-1/2 w-64 h-64 bg-gradient-to-br ${theme.gradient} rounded-full blur-3xl opacity-10 animate-pulse`} style={{animationDelay: '1s'}}></div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* Top Navigation */}
      <TopNavigation 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        theme={theme}
      />

      {/* Theme Switcher */}
      <ThemeSwitcher 
        currentTheme={activeTheme}
        onThemeChange={handleThemeChange}
        isDark={darkMode}
      />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className={`lg:hidden fixed top-6 left-6 z-40 bg-gradient-to-r ${getMobileButtonGradient()} p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Full Width Layout */}
      <div className="min-h-screen w-full flex relative">
        {/* Desktop Sidebar - Fixed Full Height */}
        <div className={`hidden lg:block w-80 ${darkMode ? 'border-r border-gray-800/50' : `border-r ${theme.sidebarBorder}`} shadow-2xl transition-all duration-500`}>
          <div className={`fixed top-0 left-0 w-80 h-screen overflow-hidden ${darkMode ? 'border-r border-gray-800/50' : `border-r ${theme.sidebarBorder}`} transition-all duration-500 ${!darkMode ? getLightModeBackground() : ''}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${theme.sidebarGradient} opacity-${darkMode ? '60' : '30'}`}></div>
            {/* Additional light mode overlay */}
            {!darkMode && (
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
            )}
            <Sidebar theme={theme} isDark={darkMode} activeTheme={activeTheme} />
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div 
              className={`absolute inset-0 backdrop-blur-sm transition-all duration-300 ${darkMode ? 'bg-black/80' : 'bg-white/80'}`} 
              onClick={() => setSidebarOpen(false)} 
            />
            <div className={`absolute left-0 top-0 w-80 h-full overflow-y-auto ${darkMode ? 'border-r border-gray-800/50' : `border-r ${theme.sidebarBorder}`} shadow-2xl transition-all duration-300 transform ${!darkMode ? getLightModeBackground() : ''}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${theme.sidebarGradient} opacity-${darkMode ? '60' : '30'}`}></div>
              {/* Additional light mode overlay for mobile */}
              {!darkMode && (
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
              )}
              <button
                onClick={() => setSidebarOpen(false)}
                className={`absolute top-6 right-6 z-10 p-2 rounded-lg transition-all duration-300 hover:scale-110 ${theme.text} ${theme.hoverPrimary} ${theme.hoverBg}`}
              >
                <X className="w-6 h-6" />
              </button>
              <Sidebar theme={theme} isDark={darkMode} activeTheme={activeTheme} />
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className={`flex-1 min-h-screen w-full ${darkMode ? theme.mainBg : 'bg-transparent'} ${theme.text} relative transition-all duration-500`}>
          {/* Dark mode animated background elements */}
          {darkMode && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className={`absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r ${theme.cardGradient} rounded-full blur-3xl animate-pulse`}></div>
              <div className={`absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r ${theme.cardGradient} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
            </div>
          )}

          {/* Light mode content background */}
          {!darkMode && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className={`absolute top-10 right-10 w-72 h-72 bg-gradient-to-r ${theme.cardGradient} rounded-full blur-3xl opacity-30 animate-pulse`}></div>
              <div className={`absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r ${theme.buttonGradient} rounded-full blur-3xl opacity-25 animate-pulse`} style={{animationDelay: '1.5s'}}></div>
              <div className={`absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r ${theme.gradient} rounded-full blur-2xl opacity-20 animate-pulse`} style={{animationDelay: '0.5s'}}></div>
            </div>
          )}

          {/* All Sections */}
          <StatsSection 
            theme={theme} 
            scrollToSection={handleScrollToSection}
          />
          
          <ExperienceSection 
            theme={theme} 
            isDark={darkMode}
          />
          
          <ProjectsSection 
            theme={theme} 
            isDark={darkMode}
          />
          
          <SkillsSection 
            theme={theme} 
            isDark={darkMode}
          />
          
          <ContactSection 
            theme={theme}
          />

          {/* Footer */}
          <Footer theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default App;