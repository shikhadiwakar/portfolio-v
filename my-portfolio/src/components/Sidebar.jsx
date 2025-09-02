import React from 'react';
import { Mail, Phone, MapPin, Download, Github, Linkedin, Twitter } from 'lucide-react';

const Sidebar = ({ theme, isDark, activeTheme }) => {
  // Function to get text color based on theme
  const getTextColor = (colorType) => {
    const colorMap = {
      lavender: { primary: 'text-violet-400', secondary: 'text-violet-300', accent: 'text-violet-500' },
      rose: { primary: 'text-rose-400', secondary: 'text-rose-300', accent: 'text-rose-500' },
      ocean: { primary: 'text-sky-400', secondary: 'text-sky-300', accent: 'text-sky-500' },
      mint: { primary: 'text-emerald-400', secondary: 'text-emerald-300', accent: 'text-emerald-500' },
      sunset: { primary: 'text-amber-400', secondary: 'text-amber-300', accent: 'text-amber-500' },
      cosmos: { primary: 'text-purple-400', secondary: 'text-purple-300', accent: 'text-purple-500' }
    };
    return colorMap[activeTheme] || colorMap.lavender;
  };

  // Function to get light mode text colors
  const getLightTextColor = (colorType) => {
    const colorMap = {
      lavender: { primary: 'text-violet-700', secondary: 'text-violet-600', accent: 'text-violet-800' },
      rose: { primary: 'text-rose-700', secondary: 'text-rose-600', accent: 'text-rose-800' },
      ocean: { primary: 'text-sky-700', secondary: 'text-sky-600', accent: 'text-sky-800' },
      mint: { primary: 'text-emerald-700', secondary: 'text-emerald-600', accent: 'text-emerald-800' },
      sunset: { primary: 'text-amber-700', secondary: 'text-amber-600', accent: 'text-amber-800' },
      cosmos: { primary: 'text-purple-700', secondary: 'text-purple-600', accent: 'text-purple-800' }
    };
    return colorMap[activeTheme] || colorMap.lavender;
  };

  // Function to get border colors based on theme and mode
  const getBorderColor = (colorType) => {
    const darkColorMap = {
      lavender: { primary: 'violet-500/30', secondary: 'violet-400/20' },
      rose: { primary: 'rose-500/30', secondary: 'rose-400/20' },
      ocean: { primary: 'sky-500/30', secondary: 'sky-400/20' },
      mint: { primary: 'emerald-500/30', secondary: 'emerald-400/20' },
      sunset: { primary: 'amber-500/30', secondary: 'amber-400/20' },
      cosmos: { primary: 'purple-500/30', secondary: 'purple-400/20' }
    };
    
    const lightColorMap = {
      lavender: { primary: 'violet-400', secondary: 'violet-300' },
      rose: { primary: 'rose-400', secondary: 'rose-300' },
      ocean: { primary: 'sky-400', secondary: 'sky-300' },
      mint: { primary: 'emerald-400', secondary: 'emerald-300' },
      sunset: { primary: 'amber-400', secondary: 'amber-300' },
      cosmos: { primary: 'purple-400', secondary: 'purple-300' }
    };
    
    const colorMap = isDark ? darkColorMap : lightColorMap;
    const colors = colorMap[activeTheme] || colorMap.lavender;
    return {
      primary: colors.primary,
      secondary: colors.secondary
    };
  };

  const colors = isDark ? getTextColor(activeTheme) : getLightTextColor(activeTheme);
  const borderColors = getBorderColor(activeTheme);
  
  return (
    <div className="h-full flex items-center justify-center p-6 relative">
      <div className="w-full max-w-xs space-y-8 relative z-10">
        {/* Floating decorative elements */}
        <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${theme.cardGradient} rounded-full blur-xl animate-pulse opacity-${isDark ? '20' : '60'}`}></div>
        <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br ${theme.cardGradient} rounded-full blur-xl animate-pulse opacity-${isDark ? '20' : '60'}`} style={{animationDelay: '1s'}}></div>
        
        {/* Profile Section */}
        <div className="text-center relative">
          {/* Animated ring around profile */}
          <div className="relative w-36 h-36 mx-auto mb-6">
            <div className={`absolute inset-0 rounded-full border-2 border-${borderColors.primary} animate-spin`} style={{animationDuration: '8s'}}></div>
            <div className={`absolute inset-2 rounded-full border-2 border-${borderColors.secondary} animate-spin`} style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
            <div className={`absolute inset-4 w-28 h-28 rounded-full ${isDark ? 'border-2 border-gray-700/50' : `border-4 border-${borderColors.primary.split('/')[0]}-600`} overflow-hidden bg-gradient-to-br ${theme.gradient} shadow-2xl transform hover:scale-105 transition-all duration-300`}>
              <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.buttonGradient} opacity-${isDark ? '50' : '70'} rounded-full`}></div>
                <span className="relative z-10">V</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <h1 className={`${colors.primary} text-3xl font-bold mb-2`}>Vannia</h1>
            <div className="relative mb-4">
              <p className={`${colors.secondary} text-lg font-semibold mb-1`}>High School Student</p>
              <div className={`h-px w-16 bg-gradient-to-r ${theme.gradient} mx-auto rounded-full`}></div>
            </div>
            <p className={`${isDark ? theme.textSecondary : 'text-gray-700'} text-sm leading-relaxed px-3 relative`}>
              <span className="relative z-10">Passionate about creating sustainable solutions for social good through innovation and strategic thinking.</span>
              <div className={`absolute inset-0 bg-gradient-to-r ${theme.cardGradient} rounded-lg -m-2 opacity-${isDark ? '20' : '60'}`}></div>
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4">
          {[
            { icon: Mail, text: "vannia@example.com", color: isDark ? "text-blue-400" : "text-blue-600" },
            { icon: Phone, text: "+91 98765 43210", color: isDark ? "text-green-400" : "text-green-600" },
            { icon: MapPin, text: "New Delhi, India", color: isDark ? "text-red-400" : "text-red-600" }
          ].map((item, index) => (
            <div key={index} className={`flex items-center space-x-4 p-4 rounded-2xl ${isDark ? theme.cardBg : 'bg-white/60 backdrop-blur-sm'} border ${isDark ? theme.cardBorder : 'border-white/40'} ${theme.cardHoverBorder} ${isDark ? theme.cardHoverBg : 'hover:bg-white/80'} transition-all duration-300 hover:scale-105 group shadow-lg hover:shadow-xl`}>
              <div className={`p-3 rounded-xl bg-gradient-to-r ${theme.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <item.icon className={`w-5 h-5 ${item.color} drop-shadow-sm`} />
              </div>
              <span className={`text-sm font-medium ${isDark ? theme.text : 'text-gray-800'} ${theme.hoverPrimary} transition-colors`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Mini Cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { number: "11+", label: "Projects" },
            { number: "4+", label: "Years" },
            { number: "3", label: "Awards" }
          ].map((stat, index) => (
            <div key={index} className={`text-center p-3 rounded-xl ${isDark ? theme.cardBg : 'bg-white/60 backdrop-blur-sm'} border ${isDark ? theme.cardBorder : 'border-white/40'} transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${isDark ? '' : 'hover:bg-white/80'}`}>
              <div className={`text-lg font-bold ${colors.primary} mb-1`}>{stat.number}</div>
              <div className={`text-xs ${isDark ? theme.textSecondary : 'text-gray-700'} font-medium`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="relative">
          <div className="flex justify-center space-x-6 mb-6">
            {[
              { icon: Github, href: "#", color: isDark ? "text-gray-300" : "text-gray-700" },
              { icon: Linkedin, href: "#", color: isDark ? "text-blue-400" : "text-blue-600" },
              { icon: Twitter, href: "#", color: isDark ? "text-sky-400" : "text-sky-600" }
            ].map((social, index) => (
              <a key={index} href={social.href} className={`p-3 rounded-full ${isDark ? theme.cardBg : 'bg-white/60 backdrop-blur-sm'} border ${isDark ? theme.cardBorder : 'border-white/40'} transition-all duration-300 hover:scale-110 hover:rotate-12 group ${isDark ? theme.textSecondary : 'text-gray-700'} hover:${colors.accent.replace('text-', '')} transition-colors shadow-lg hover:shadow-xl ${isDark ? '' : 'hover:bg-white/80'}`}>
                <social.icon className={`w-5 h-5 ${social.color}`} />
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced Download CV Button */}
        <div className="relative">
          <button className={`w-full bg-gradient-to-r ${theme.buttonGradient} hover:shadow-2xl text-white py-4 px-6 rounded-2xl transition-all duration-300 font-semibold shadow-xl flex items-center justify-center space-x-3 transform hover:scale-105 group relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Download className="w-5 h-5 relative z-10 group-hover:animate-bounce text-white" />
            <span className="relative z-10">Download CV</span>
          </button>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center space-x-2 text-sm">
          <div className={`w-2 h-2 ${isDark ? 'bg-green-400' : 'bg-green-500'} rounded-full animate-pulse`}></div>
          <span className={`${isDark ? theme.textSecondary : 'text-gray-700'} font-medium`}>Available for opportunities</span>
        </div>
      </div>

      {/* Additional light mode background elements */}
      {!isDark && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r ${theme.gradient} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
          <div className={`absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r ${theme.buttonGradient} rounded-full blur-2xl opacity-25 animate-pulse`} style={{animationDelay: '1.5s'}}></div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;