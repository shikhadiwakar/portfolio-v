import React from 'react';

const Footer = ({ theme }) => {
  return (
    <footer className={`py-12 px-4 lg:px-16 xl:px-24 2xl:px-32 border-t ${theme.footerBorder}`}>
      <div className="w-full text-center">
        <p className={`${theme.textSecondary} text-lg`}>
          © 2024 Vannia. Built with passion for <span className={`${theme.primary} font-semibold`}>social impact</span>.
        </p>
        <div className="mt-4">
          <div className={`w-16 h-px bg-gradient-to-r ${theme.gradient} mx-auto rounded-full`}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;