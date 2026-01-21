
import React from 'react';
import { SKILLS } from '../constants';

const SkillsGrid: React.FC = () => {
  const categories = ['CAFM', 'Design', 'Technical', 'Soft Skills'] as const;

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Core Expertise</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div key={cat} className="space-y-6">
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">{cat}</h3>
              </div>
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div key={skill.name} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-semibold text-sm group-hover:text-blue-700 transition-colors">{skill.name}</span>
                      <span className="text-blue-600 font-bold text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
