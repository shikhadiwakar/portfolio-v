import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Download, Github, Linkedin, Twitter, Menu, X, ExternalLink, Calendar, Users, Award, TrendingUp } from 'lucide-react';

const HybridPortfolio = () => {
  const [activeSection, setActiveSection] = useState('stats');
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const Sidebar = () => (
    <div className="h-full flex items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-8">
        {/* Profile Section */}
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-3xl border-4 border-indigo-500 overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
            <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold">
              V
            </div>
          </div>
          <h1 className="text-white text-2xl font-bold mb-2">Vannia</h1>
          <p className="text-indigo-400 text-base font-medium mb-3">High School Student</p>
          <p className="text-gray-400 text-sm leading-relaxed px-2">
            Passionate about creating sustainable solutions for social good through innovation and strategic thinking.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-3 text-gray-400">
            <Mail className="w-4 h-4 text-indigo-500" />
            <span className="text-sm">vannia@example.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-400">
            <Phone className="w-4 h-4 text-indigo-500" />
            <span className="text-sm">+91 98765 43210</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-gray-400">
            <MapPin className="w-4 h-4 text-indigo-500" />
            <span className="text-sm">New Delhi, India</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="w-full">
          <ul className="space-y-2">
            {[
              { id: 'stats', label: 'Overview' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'skills', label: 'Skills' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-center py-3 px-4 rounded-xl transition-all duration-200 font-medium ${
                    activeSection === item.id
                      ? 'bg-indigo-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors transform hover:scale-110">
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        {/* Download CV */}
        <div className="w-full">
          <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl transition-all duration-200 font-medium shadow-lg flex items-center justify-center space-x-2 transform hover:scale-105">
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-6 left-6 z-50 bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-xl shadow-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Full Width Layout - No Containers */}
      <div className="min-h-screen w-full flex">
        {/* Desktop Sidebar - Fixed Full Height */}
        <div className="hidden lg:block w-80 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-r border-indigo-500/20 shadow-2xl">
          <div className="fixed top-0 left-0 w-80 h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-r border-indigo-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
            <Sidebar />
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
            <div className="absolute left-0 top-0 w-80 h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-y-auto border-r border-indigo-500/20 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="absolute top-6 right-6 text-white hover:text-indigo-400 z-10 p-2 rounded-lg hover:bg-gray-800/50 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <Sidebar />
            </div>
          </div>
        )}

        {/* Main Content Area - Full Width Right Side */}
        <div className="flex-1 min-h-screen w-full bg-gradient-to-br from-black via-gray-950 to-black text-white relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Stats Section - Full Width */}
          <section id="stats" className="min-h-screen flex items-center justify-center px-4 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
                  Transforming Ideas Into 
                  <span className="text-indigo-500"> Impact</span>
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto">
                  4+ years of experience in social entrepreneurship, product design, and strategic consulting with measurable impact across multiple initiatives.
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-16">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-500 mb-4">{counters.projects}+</div>
                  <div className="text-lg md:text-xl text-gray-400">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-500 mb-4">{counters.experience}+</div>
                  <div className="text-lg md:text-xl text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-500 mb-4">{counters.awards}</div>
                  <div className="text-lg md:text-xl text-gray-400">Awards Won</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-500 mb-4">{counters.impact}+</div>
                  <div className="text-lg md:text-xl text-gray-400">Lives Impacted</div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-indigo-500 hover:text-indigo-400 transition-colors animate-bounce"
                >
                  <ChevronDown className="w-8 h-8" />
                </button>
              </div>
            </div>
          </section>

          {/* Experience Section - Full Width */}
          <section id="experience" className="min-h-screen py-20 px-4 lg:px-16 xl:px-24 2xl:px-32">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
                Experience & <span className="text-indigo-500">Leadership</span>
              </h2>
              
              <div className="space-y-8">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover:bg-gray-900/70">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{activity.title}</h3>
                        <p className="text-indigo-400 font-semibold text-lg mb-1">{activity.role}</p>
                        <p className="text-gray-400">{activity.location} • {activity.period}</p>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-6">
                        <span className="bg-indigo-500 bg-opacity-20 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium">
                          {activity.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{activity.description}</p>
                    <div className="flex items-center text-gray-400">
                      <TrendingUp className="w-5 h-5 mr-3 text-indigo-500" />
                      <span className="font-medium">{activity.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section - Full Width */}
          <section id="projects" className="min-h-screen py-20 px-4 lg:px-16 xl:px-24 2xl:px-32 bg-gray-950/50">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
                Featured <span className="text-indigo-500">Projects</span>
              </h2>
              
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-900/70">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-400 mb-6 text-lg leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-800/50 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 font-medium">{project.period}</span>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
                Skills & <span className="text-indigo-500">Expertise</span>
              </h2>
              
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-800/50">
                    <div className="flex justify-between mb-4">
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <span className="text-indigo-400 font-bold text-lg">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 mb-3">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-gray-400 font-medium">{skill.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section - Full Width */}
          <section id="contact" className="min-h-screen py-20 px-4 lg:px-16 xl:px-24 2xl:px-32 bg-gray-950/50">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
                Let's <span className="text-indigo-500">Connect</span>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Get in touch</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    I'm always open to discussing new opportunities, collaborations, or ways to create positive social impact.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-gray-900/30 rounded-xl">
                      <Mail className="w-6 h-6 text-indigo-500" />
                      <span className="text-lg">vannia@example.com</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-900/30 rounded-xl">
                      <Phone className="w-6 h-6 text-indigo-500" />
                      <span className="text-lg">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-900/30 rounded-xl">
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
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:bg-gray-800 transition-all text-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:bg-gray-800 transition-all text-lg"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:bg-gray-800 transition-all resize-none text-lg"
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
          <footer className="py-12 px-4 lg:px-16 xl:px-24 2xl:px-32 border-t border-gray-800">
            <div className="w-full text-center">
              <p className="text-gray-400 text-lg">
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