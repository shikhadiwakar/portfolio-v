import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = ({ theme }) => {
  return (
    <section id="contact" className={`min-h-screen py-20 px-4 lg:px-16 xl:px-24 2xl:px-32 ${theme.sectionBg}`}>
      <div className="w-full">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 ${theme.text}`}>
          Let's <span className={`text-${theme.accent.replace('text-', '')} font-bold`}>Connect</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${theme.text}`}>Get in touch</h3>
            <p className={`${theme.textSecondary} text-lg leading-relaxed mb-8`}>
              I'm always open to discussing new opportunities, collaborations, or ways to create positive social impact.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Mail, text: "vannia@example.com" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: MapPin, text: "New Delhi, India" }
              ].map((contact, index) => (
                <div key={index} className={`flex items-center space-x-4 p-4 ${theme.cardBg} rounded-xl border ${theme.cardBorder} ${theme.cardHoverBg} transition-all duration-300 hover:scale-105 group`}>
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${theme.buttonGradient} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-lg ${theme.text} group-hover:${theme.primary} transition-colors duration-300`}>
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full ${theme.inputBg} border ${theme.inputBorder} ${theme.inputFocusBorder} rounded-xl px-6 py-4 ${theme.text} placeholder-gray-400 focus:outline-none ${theme.inputFocusBg} transition-all text-lg`}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full ${theme.inputBg} border ${theme.inputBorder} ${theme.inputFocusBorder} rounded-xl px-6 py-4 ${theme.text} placeholder-gray-400 focus:outline-none ${theme.inputFocusBg} transition-all text-lg`}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className={`w-full ${theme.inputBg} border ${theme.inputBorder} ${theme.inputFocusBorder} rounded-xl px-6 py-4 ${theme.text} placeholder-gray-400 focus:outline-none ${theme.inputFocusBg} transition-all resize-none text-lg`}
              />
            </div>
            <button
              onClick={() => alert('Message sent! (Demo only)')}
              className={`w-full bg-gradient-to-r ${theme.buttonGradient} hover:shadow-2xl text-white py-4 px-8 rounded-xl transition-all duration-300 font-semibold text-lg shadow-xl transform hover:scale-105 hover:-rotate-1 relative overflow-hidden group`}
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;