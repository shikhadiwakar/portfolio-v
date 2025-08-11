import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Download, Github, Linkedin, Twitter, Menu, X, ExternalLink, Calendar, Users, Award, TrendingUp, Sun, Moon } from 'lucide-react';

const HybridPortfolio = () => {
  const [activeSection, setActiveSection] = useState('stats');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    awards: 0,
    impact: 0
  });

  // Animate counters when component mounts
  useEffect(() => {
    const targets = { projects: 11, experience: 4, awards: 3, impact: 1000 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const animate = () => {
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          projects: Math.floor(targets.projects * progress),
          experience: Math.floor(targets.experience * progress),
          awards: Math.floor(targets.awards * progress),
          impact: Math.floor(targets.impact * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepTime);
    };

    const timer = setTimeout(animate, 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['stats', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSidebarOpen(false);
  };

  const activities = [
    {
      title: "Goodnight Project",
      role: "Founder & Organizer",
      location: "New Delhi, India",
      period: "4+ years (Grades 9-12)",
      description: "Collected unused food from schools/restaurants and redistributed it to the underprivileged in Delhi to reduce food waste and hunger.",
      impact: "3 hrs/week, 30 weeks/year",
      category: "Social Impact"
    },
    {
      title: "Masters Union Bootcamp",
      role: "Product Designer",
      location: "Gurgaon",
      period: "1 week program (Grade 11)",
      description: "Created BioPod, a smart pod for growing vegetables at home; won 1st place; gained product design and market analysis skills.",
      impact: "1st Place Winner",
      category: "Innovation"
    },
    {
      title: "Zero Waste Campaign",
      role: "Outreach Volunteer",
      location: "New Delhi, India (with Khushi NGO)",
      period: "3 years (Grades 10-12)",
      description: "Led zero-waste awareness sessions and food nutrition workshops in underprivileged schools; promoted recycling, reuse, and food redistribution.",
      impact: "2 hrs/week, 10 weeks/year",
      category: "Environmental"
    },
    {
      title: "Brand Strategy Intern",
      role: "Intern",
      location: "Matter of Form, London",
      period: "3 weeks (Grade 12)",
      description: "Contributed to luxury brand strategy for clients like One&Only Resorts and Champion. Assisted in storytelling, client research, and pitch deck creation.",
      impact: "40 hrs/week",
      category: "Professional"
    },
    {
      title: "LaunchX Innovation Program",
      role: "Business Consultant",
      location: "Online",
      period: "3 weeks (Grade 12)",
      description: "Collaborated with startup Abia Marketplace to improve artisan onboarding and trust-building; led UX research, brand strategy, and marketing outreach.",
      impact: "20-25 hrs/week",
      category: "Consulting"
    }
  ];

  const projects = [
    {
      title: "Food Waste Reduction Research",
      description: "Explored how tech-enabled social enterprises address global food waste through real-world case studies.",
      tech: ["Research", "Analysis", "Sustainability"],
      period: "1 year"
    },
    {
      title: "BioPod Smart Gardening",
      description: "Smart pod for growing vegetables at home - 1st place winner at Masters Union Bootcamp.",
      tech: ["Product Design", "IoT", "Sustainability"],
      period: "1 week intensive"
    },
    {
      title: "Economic Impact Analysis",
      description: "Finalist essay on the economic impact of Taylor Swift's Eras Tour analyzing tourism, transport, and cultural effects.",
      tech: ["Economic Analysis", "Writing", "Research"],
      period: "4 weeks"
    }
  ];

  const skills = [
    { name: "Product Design", level: 90, category: "Design" },
    { name: "Brand Strategy", level: 85, category: "Strategy" },
    { name: "Research & Analysis", level: 95, category: "Research" },
    { name: "Social Impact", level: 90, category: "Leadership" },
    { name: "Business Consulting", level: 80, category: "Business" },
    { name: "Project Management", level: 85, category: "Management" }
  ];

  const theme = {
    dark: {
      bg: 'bg-gradient-to-br from-black via-gray-900 to-black',
      cardBg: 'bg-gray-900/50',
      cardBorder: 'border-gray-800',
      cardHoverBorder: 'hover:border-indigo-500/50',
      cardHoverBg: 'hover:bg-gray-900/70',
      text: 'text-white',
      textSecondary: 'text-gray-400',
      textAccent: 'text-indigo-500',
      sidebarBg: 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900',
      sidebarOverlay: 'bg-gradient-to-br from-indigo-500/5 to-purple-500/5',
      mainBg: 'bg-gradient-to-br from-black via-gray-950 to-black',
      inputBg: 'bg-gray-800/50',
      inputBorder: 'border-gray-700',
      inputFocusBg: 'focus:bg-gray-800',
      sectionBg: 'bg-gray-950/50',
      footerBorder: 'border-gray-800'
    },
    light: {
      bg: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
      cardBg: 'bg-white/70',
      cardBorder: 'border-gray-200',
      cardHoverBorder: 'hover:border-indigo-400/50',
      cardHoverBg: 'hover:bg-white/90',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textAccent: 'text-indigo-600',
      sidebarBg: 'bg-gradient-to-b from-white via-gray-50 to-gray-100',
      sidebarOverlay: 'bg-gradient-to-br from-indigo-500/5 to-purple-500/5',
      mainBg: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
      inputBg: 'bg-gray-100/50',
      inputBorder: 'border-gray-300',
      inputFocusBg: 'focus:bg-white',
      sectionBg: 'bg-gray-100/50',
      footerBorder: 'border-gray-300'
    }
  };

  const currentTheme = darkMode ? theme.dark : theme.light;

  const Sidebar = () => (
    <div className="h-full flex items-center justify-center p-6 relative">
      <div className="w-full max-w-xs space-y-8 relative z-10">
        {/* Floating decorative elements */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        {/* Profile Section */}
        <div className="text-center relative">
          {/* Animated ring around profile */}
          <div className="relative w-36 h-36 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="absolute inset-2 rounded-full border-2 border-purple-500/30 animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
            <div className="absolute inset-4 w-28 h-28 rounded-3xl border-4 border-indigo-500 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/50 to-purple-700/50 rounded-3xl"></div>
                <span className="relative z-10">V</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <h1 className={`${currentTheme.text} text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent`}>Vannia</h1>
            <div className="relative mb-4">
              <p className="text-indigo-400 text-lg font-semibold mb-1">High School Student</p>
              <div className="h-px w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <p className={`${currentTheme.textSecondary} text-sm leading-relaxed px-3 relative`}>
              <span className="relative z-10">Passionate about creating sustainable solutions for social good through innovation and strategic thinking.</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent rounded-lg -m-2"></div>
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4">
          {[
            { icon: Mail, text: "vannia@example.com", gradient: "from-blue-500 to-indigo-500" },
            { icon: Phone, text: "+91 98765 43210", gradient: "from-indigo-500 to-purple-500" },
            { icon: MapPin, text: "New Delhi, India", gradient: "from-purple-500 to-pink-500" }
          ].map((item, index) => (
            <div key={index} className={`flex items-center space-x-4 p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 group ${
              darkMode 
                ? 'bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50' 
                : 'bg-white/50 border-gray-200/50 hover:bg-white/70'
            }`}>
              <div className={`p-2 rounded-xl bg-gradient-to-r ${item.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <span className={`text-sm font-medium ${currentTheme.text} group-hover:text-indigo-500 transition-colors`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Stats Mini Cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { number: "11+", label: "Projects", color: "text-blue-500" },
            { number: "4+", label: "Years", color: "text-indigo-500" },
            { number: "3", label: "Awards", color: "text-purple-500" }
          ].map((stat, index) => (
            <div key={index} className={`text-center p-3 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'bg-gray-800/30 border-gray-700/50' 
                : 'bg-white/50 border-gray-200/50'
            }`}>
              <div className={`text-lg font-bold ${stat.color} mb-1`}>{stat.number}</div>
              <div className={`text-xs ${currentTheme.textSecondary} font-medium`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social Links with Creative Layout */}
        <div className="relative">
          <div className="flex justify-center space-x-6 mb-6">
            {[
              { icon: Github, href: "#", color: "hover:text-gray-900 dark:hover:text-white" },
              { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
              { icon: Twitter, href: "#", color: "hover:text-sky-500" }
            ].map((social, index) => (
              <a key={index} href={social.href} className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-110 hover:rotate-12 group ${
                darkMode 
                  ? 'bg-gray-800/30 border-gray-700/50 text-gray-400' 
                  : 'bg-white/50 border-gray-200/50 text-gray-600'
              } ${social.color}`}>
                <social.icon className="w-5 h-5" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Enhanced Download CV Button */}
        <div className="relative">
          <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white py-4 px-6 rounded-2xl transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 transform hover:scale-105 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
            <Download className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Download CV</span>
          </button>
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center space-x-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className={`${currentTheme.textSecondary} font-medium`}>Available for opportunities</span>
        </div>
      </div>
    </div>
  );
  const TopNavigation = () => (
      <>
        {/* Theme Toggle - Top Right */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`fixed top-6 right-6 z-50 p-3 rounded-xl backdrop-blur-md border transition-all duration-200 ${
            darkMode 
              ? 'bg-gray-900/80 border-gray-700 hover:bg-gray-800/80' 
              : 'bg-white/80 border-gray-200 hover:bg-white/90'
          }`}
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600" />
          )}
        </button>

        {/* Navigation Menu - Top Center */}
        <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex items-center space-x-2 p-3 rounded-full backdrop-blur-xl shadow-2xl transition-all duration-300 border-0 ${
          darkMode 
            ? 'bg-gray-900/95' 
            : 'bg-white/95'
        }`}>
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
              className={`px-10 py-5 rounded-full transition-all duration-300 font-medium text-xl relative overflow-hidden group min-w-[140px] ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl transform scale-105'
                  : darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800/60 hover:scale-102'
                    : 'text-gray-800 bg-gray-100 hover:text-gray-900 hover:bg-gray-200 hover:scale-102'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection !== item.id && (
                <div className={`absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}></div>
              )}
            </button>
          ))}
        </nav>
      </>
    );
  return (
    <div className={`min-h-screen ${currentTheme.bg} overflow-x-hidden transition-all duration-300`}>
      {/* Top Navigation */}
      <TopNavigation />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-6 left-6 z-40 bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-xl shadow-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Full Width Layout - No Containers */}
      <div className="min-h-screen w-full flex">
        {/* Desktop Sidebar - Fixed Full Height */}
        <div className={`hidden lg:block w-80 ${currentTheme.sidebarBg} border-r ${darkMode ? 'border-indigo-500/20' : 'border-indigo-400/20'} shadow-2xl transition-all duration-300`}>
          <div className={`fixed top-0 left-0 w-80 h-screen overflow-hidden ${currentTheme.sidebarBg} border-r ${darkMode ? 'border-indigo-500/20' : 'border-indigo-400/20'} transition-all duration-300`}>
            <div className={`absolute inset-0 ${currentTheme.sidebarOverlay}`}></div>
            <Sidebar />
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className={`absolute inset-0 ${darkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm`} onClick={() => setSidebarOpen(false)} />
            <div className={`absolute left-0 top-0 w-80 h-full ${currentTheme.sidebarBg} overflow-y-auto border-r ${darkMode ? 'border-indigo-500/20' : 'border-indigo-400/20'} shadow-2xl transition-all duration-300`}>
              <div className={`absolute inset-0 ${currentTheme.sidebarOverlay}`}></div>
              <button
                onClick={() => setSidebarOpen(false)}
                className={`absolute top-6 right-6 ${currentTheme.text} hover:text-indigo-400 z-10 p-2 rounded-lg hover:bg-gray-800/50 transition-all`}
              >
                <X className="w-6 h-6" />
              </button>
              <Sidebar />
            </div>
          </div>
        )}

        {/* Main Content Area - Full Width Right Side */}
        <div className={`flex-1 min-h-screen w-full ${currentTheme.mainBg} ${currentTheme.text} relative transition-all duration-300`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r ${darkMode ? 'from-indigo-500/10 to-purple-500/10' : 'from-indigo-400/20 to-purple-400/20'} rounded-full blur-3xl animate-pulse`}></div>
            <div className={`absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r ${darkMode ? 'from-purple-500/10 to-pink-500/10' : 'from-purple-400/20 to-pink-400/20'} rounded-full blur-3xl animate-pulse delay-1000`}></div>
          </div>

          {/* Stats Section - Full Width */}
          <section id="stats" className="min-h-screen flex items-center justify-center px-4 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full">
              <div className="text-center mb-16">
                <h2 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 ${currentTheme.text}`}>
                  Transforming Ideas Into 
                  <span className={currentTheme.textAccent}> Impact</span>
                </h2>
                <p className={`text-lg md:text-xl lg:text-2xl ${currentTheme.textSecondary} max-w-4xl mx-auto`}>
                  4+ years of experience in social entrepreneurship, product design, and strategic consulting with measurable impact across multiple initiatives.
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-16">
                <div className="text-center">
                  <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${currentTheme.textAccent} mb-4`}>{counters.projects}+</div>
                  <div className={`text-lg md:text-xl ${currentTheme.textSecondary}`}>Major Projects</div>
                </div>
                <div className="text-center">
                  <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${currentTheme.textAccent} mb-4`}>{counters.experience}+</div>
                  <div className={`text-lg md:text-xl ${currentTheme.textSecondary}`}>Years Experience</div>
                </div>
                <div className="text-center">
                  <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${currentTheme.textAccent} mb-4`}>{counters.awards}</div>
                  <div className={`text-lg md:text-xl ${currentTheme.textSecondary}`}>Awards Won</div>
                </div>
                <div className="text-center">
                  <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${currentTheme.textAccent} mb-4`}>{counters.impact}+</div>
                  <div className={`text-lg md:text-xl ${currentTheme.textSecondary}`}>Lives Impacted</div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => scrollToSection('experience')}
                  className={`${currentTheme.textAccent} hover:text-indigo-400 transition-colors animate-bounce`}
                >
                  <ChevronDown className="w-8 h-8" />
                </button>
              </div>
            </div>
          </section>

          {/* Experience Section - Full Width */}
          <section id="experience" className="min-h-screen py-20 px-4 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 ${currentTheme.text}`}>
                Experience & <span className={currentTheme.textAccent}>Leadership</span>
              </h2>
              
              <div className="space-y-8">
                {activities.map((activity, index) => (
                  <div key={index} className={`${currentTheme.cardBg} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border ${currentTheme.cardBorder} ${currentTheme.cardHoverBorder} transition-all duration-300 ${currentTheme.cardHoverBg} shadow-lg`}>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-2xl font-bold ${currentTheme.text} mb-2`}>{activity.title}</h3>
                        <p className="text-indigo-400 font-semibold text-lg mb-1">{activity.role}</p>
                        <p className={currentTheme.textSecondary}>{activity.location} • {activity.period}</p>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <span className="bg-indigo-500 bg-opacity-20 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium">
                          {activity.category}
                        </span>
                      </div>
                    </div>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg mb-6 leading-relaxed`}>{activity.description}</p>
                    <div className={`flex items-center ${currentTheme.textSecondary}`}>
                      <TrendingUp className="w-5 h-5 mr-3 text-indigo-500" />
                      <span className="font-medium">{activity.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section - Full Width */}
          <section id="projects" className={`min-h-screen py-20 px-4 lg:px-16 xl:px-24 2xl:px-32 ${currentTheme.sectionBg}`}>
            <div className="w-full">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 ${currentTheme.text}`}>
                Featured <span className={currentTheme.textAccent}>Projects</span>
              </h2>
              
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                {projects.map((project, index) => (
                  <div key={index} className={`${currentTheme.cardBg} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border ${currentTheme.cardBorder} ${currentTheme.cardHoverBorder} transition-all duration-300 hover:transform hover:scale-105 ${currentTheme.cardHoverBg} shadow-lg`}>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h3>
                    <p className={`${currentTheme.textSecondary} mb-6 text-lg leading-relaxed`}>{project.description}</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className={`${darkMode ? 'bg-gray-800/50 text-gray-300' : 'bg-gray-200/50 text-gray-700'} px-3 py-2 rounded-lg text-sm font-medium`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`${currentTheme.textSecondary} font-medium`}>{project.period}</span>
                      <ExternalLink className="w-6 h-6 text-indigo-500 hover:text-indigo-400 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section - Full Width */}
          <section id="skills" className="min-h-screen py-20 px-4 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 ${currentTheme.text}`}>
                Skills & <span className={currentTheme.textAccent}>Expertise</span>
              </h2>
              
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                {skills.map((skill, index) => (
                  <div key={index} className={`${currentTheme.cardBg} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border ${currentTheme.cardBorder} shadow-lg`}>
                    <div className="flex justify-between mb-4">
                      <span className={`${currentTheme.text} font-semibold text-lg`}>{skill.name}</span>
                      <span className="text-indigo-400 font-bold text-lg">{skill.level}%</span>
                    </div>
                    <div className={`w-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-full h-3 mb-3`}>
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className={`${currentTheme.textSecondary} font-medium`}>{skill.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section - Full Width */}
          <section id="contact" className={`min-h-screen py-20 px-4 lg:px-16 xl:px-24 2xl:px-32 ${currentTheme.sectionBg}`}>
            <div className="w-full">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 ${currentTheme.text}`}>
                Let's <span className={currentTheme.textAccent}>Connect</span>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${currentTheme.text}`}>Get in touch</h3>
                  <p className={`${currentTheme.textSecondary} text-lg leading-relaxed mb-8`}>
                    I'm always open to discussing new opportunities, collaborations, or ways to create positive social impact.
                  </p>
                  
                  <div className="space-y-6">
                    <div className={`flex items-center space-x-4 p-4 ${currentTheme.cardBg} rounded-xl border ${currentTheme.cardBorder}`}>
                      <Mail className="w-6 h-6 text-indigo-500" />
                      <span className="text-lg">vannia@example.com</span>
                    </div>
                    <div className={`flex items-center space-x-4 p-4 ${currentTheme.cardBg} rounded-xl border ${currentTheme.cardBorder}`}>
                      <Phone className="w-6 h-6 text-indigo-500" />
                      <span className="text-lg">+91 98765 43210</span>
                    </div>
                    <div className={`flex items-center space-x-4 p-4 ${currentTheme.cardBg} rounded-xl border ${currentTheme.cardBorder}`}>
                      <MapPin className="w-6 h-6 text-indigo-500" />
                      <span className="text-lg">New Delhi, India</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full ${currentTheme.inputBg} border ${currentTheme.inputBorder} rounded-xl px-6 py-4 ${currentTheme.text} placeholder-gray-400 focus:border-indigo-500 focus:outline-none ${currentTheme.inputFocusBg} transition-all text-lg`}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full ${currentTheme.inputBg} border ${currentTheme.inputBorder} rounded-xl px-6 py-4 ${currentTheme.text} placeholder-gray-400 focus:border-indigo-500 focus:outline-none ${currentTheme.inputFocusBg} transition-all text-lg`}
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={6}
                      className={`w-full ${currentTheme.inputBg} border ${currentTheme.inputBorder} rounded-xl px-6 py-4 ${currentTheme.text} placeholder-gray-400 focus:border-indigo-500 focus:outline-none ${currentTheme.inputFocusBg} transition-all resize-none text-lg`}
                    />
                  </div>
                  <button
                    onClick={() => alert('Message sent! (Demo only)')}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-4 px-8 rounded-xl transition-all duration-200 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer - Full Width */}
          <footer className={`py-12 px-4 lg:px-16 xl:px-24 2xl:px-32 border-t ${currentTheme.footerBorder}`}>
            <div className="w-full text-center">
              <p className={`${currentTheme.textSecondary} text-lg`}>
                © 2024 Vannia. Built with passion for social impact.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default HybridPortfolio;