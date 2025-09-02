import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { availableThemes } from '../styles/themes';

const ThemeSwitcher = ({ currentTheme, onThemeChange, isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const themeColors = {
    lavender: ['bg-violet-300', 'bg-violet-400', 'bg-violet-500'],
    rose: ['bg-rose-300', 'bg-rose-400', 'bg-rose-500'],
    ocean: ['bg-sky-300', 'bg-sky-400', 'bg-sky-500'],
    mint: ['bg-emerald-300', 'bg-emerald-400', 'bg-emerald-500'],
    sunset: ['bg-amber-300', 'bg-amber-400', 'bg-amber-500'],
    cosmos: ['bg-purple-300', 'bg-purple-400', 'bg-purple-500']
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Theme Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 transform ${
          isDark 
            ? 'bg-gray-800 hover:bg-gray-700 text-white' 
            : 'bg-white hover:bg-gray-50 text-gray-900'
        } border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
      >
        <Palette className="w-6 h-6" />
      </button>

      {/* Theme Options Panel */}
      {isOpen && (
        <div className={`absolute bottom-16 right-0 w-80 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all duration-300 transform ${
          isDark 
            ? 'bg-gray-900/95 border-gray-700' 
            : 'bg-white/95 border-gray-200'
        }`}>
          <div className="p-6">
            <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Choose Color Theme
            </h3>
            
            <div className="space-y-3">
              {Object.entries(availableThemes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => {
                    onThemeChange(key);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 hover:scale-105 border ${
                    isDark 
                      ? 'bg-gray-800/50 hover:bg-gray-800/70 border-gray-700/50 hover:border-gray-600' 
                      : 'bg-gray-50/50 hover:bg-gray-100/70 border-gray-200/50 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    {/* Color Preview Dots */}
                    <div className="flex space-x-1">
                      {themeColors[key]?.map((colorClass, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 ${colorClass} rounded-full shadow-lg`}
                        />
                      ))}
                    </div>
                    
                    <div className="text-left">
                      <div className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {theme.name}
                      </div>
                      <div className={`text-sm capitalize ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {key} palette
                      </div>
                    </div>
                  </div>

                  {currentTheme === key && (
                    <Check className="w-5 h-5 text-green-500" />
                  )}
                </button>
              ))}
            </div>
            
            <div className={`mt-4 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <p className={`text-xs text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Theme changes apply instantly
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;