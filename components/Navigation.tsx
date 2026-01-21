
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Nilofer Rani
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Skills</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Experience</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
