
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AIAssistant from './components/AIAssistant';
import ExperienceSection from './components/ExperienceSection';
import SkillsGrid from './components/SkillsGrid';
import AdvancedTools from './components/AdvancedTools';
import LiveConversation from './components/LiveConversation';
import Avatar from './components/Avatar';
import { PROFILE, EDUCATIONS, LANGUAGES } from './constants';

const App: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState(false);

  const generateShareLink = () => {
    navigator.clipboard.writeText(PROFILE.portfolioUrl);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 3000);
  };

  const shareViaWhatsApp = () => {
    const text = `Check out Nilofer Rani's professional portfolio: ${PROFILE.portfolioUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Hero Section */}
      <header id="about" className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/20 via-sky-400/20 to-indigo-400/20 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-500"></div>
              <div className="relative z-10 transform transition-all duration-700 hover:scale-[1.02]">
                <Avatar size={320} />
              </div>
              <div className="absolute -bottom-2 -right-6 bg-white/90 backdrop-blur px-5 py-2.5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-float z-20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-black text-slate-800 tracking-tight">Active in Doha</span>
              </div>
            </div>
          </div>

          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-black tracking-widest text-blue-700 uppercase bg-blue-100/60 rounded-full border border-blue-200/50">
            Certified Engineer & CAFM Expert
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
            Nilofer <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Rani</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-slate-600 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
            {PROFILE.title}
          </p>
          
          <div className="max-w-3xl mx-auto mb-14">
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed px-4 text-center">
              Specializing in <strong>CAFM Administration</strong> and <strong>UI/UX Design</strong>. 
              I bridge the gap between complex facility data and intuitive user experiences, driving operational 
              excellence in Qatar's dynamic engineering landscape.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 relative">
            <a 
              href={`mailto:${PROFILE.email}`}
              className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95"
            >
              Contact Me
            </a>
            
            <button 
              onClick={generateShareLink}
              className="px-10 py-5 bg-white text-blue-600 border-2 border-blue-100 rounded-2xl font-black hover:bg-blue-50 transition-all shadow-sm flex items-center gap-3 hover:border-blue-400 group overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Generate Link
              </span>
              <div className="absolute inset-0 bg-blue-600/5 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </button>

            <div className={`absolute -top-16 left-1/2 -translate-x-1/2 transition-all duration-500 pointer-events-none ${copyStatus ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="bg-slate-900 text-white px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border border-slate-700">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-bold">Portfolio Link Copied!</span>
              </div>
            </div>

            <a 
              href="#ai-assistant"
              className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-sm flex items-center gap-3 hover:border-blue-200"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Talk to AI
            </a>
          </div>
        </div>
      </header>

      <AIAssistant />

      {/* Quick Link & Share Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-white flex flex-col md:flex-row items-center gap-12 group transition-all duration-500 hover:shadow-blue-200/50">
            <div className="w-48 h-48 bg-slate-50 rounded-[2.5rem] p-6 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50/50 transition-colors">
              {/* Mock QR Code SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-slate-800 opacity-80 group-hover:text-blue-600 transition-colors">
                <path d="M0 0h30v10H10v20H0V0zm70 0h30v30h-10V10H70V0zM0 70h10v20h20v10H0V70zm100 30H70v-10h20v-20h10v30zM20 20h20v20H20V20zm40 0h20v20H60V20zm0 40h20v20H60V60zM20 60h20v20H20V60z" fill="currentColor"/>
                <rect x="25" y="25" width="10" height="10" fill="currentColor"/>
                <rect x="65" y="25" width="10" height="10" fill="currentColor"/>
                <rect x="25" y="65" width="10" height="10" fill="currentColor"/>
                <rect x="45" y="45" width="10" height="10" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Share My Profile</h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                Scan this code or copy the link below to share my professional portfolio with your network or hiring managers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 bg-slate-100 px-6 py-4 rounded-2xl flex items-center gap-3 border border-slate-200 group/link">
                  <span className="text-slate-400 font-medium text-sm truncate">{PROFILE.portfolioUrl}</span>
                  <button 
                    onClick={generateShareLink}
                    className="ml-auto p-2 hover:bg-white rounded-xl transition-colors text-blue-600"
                    title="Copy Link"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                  </button>
                </div>
                
                <button 
                  onClick={shareViaWhatsApp}
                  className="bg-green-500 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-green-200 hover:bg-green-600 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Design */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-100 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>
      </section>

      <AdvancedTools />
      <SkillsGrid />
      
      {/* Education & Other Sections continue as before... */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                Academic Background
              </h2>
              <div className="space-y-8">
                {EDUCATIONS.map((edu, idx) => (
                  <div key={idx} className="relative p-8 bg-slate-50/50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">{edu.degree}</h3>
                        <p className="text-lg text-slate-600 font-medium">{edu.institution}</p>
                      </div>
                      <span className="text-sm font-bold text-blue-700 bg-blue-100 px-4 py-1.5 rounded-full">{edu.period}</span>
                    </div>
                    <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">{edu.location}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h2 className="text-3xl font-black text-slate-900 mb-10">Languages</h2>
              <div className="space-y-4">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="group p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-black text-slate-800 tracking-tight">{lang}</span>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">Fluent</span>
                    </div>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div key={dot} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${dot <= (lang === 'Tamil' || lang === 'English' ? 5 : 4) ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection />

      <section id="contact" className="py-28 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">Get in touch with Nilofer</h2>
          <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto leading-relaxed">
            Ready to bring data-driven design and operational precision to your next project. 
            Available for consulting and full-time roles in Qatar.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            <div className="p-10 bg-slate-900/40 rounded-[2.5rem] border border-slate-800 backdrop-blur-xl group hover:border-blue-500/50 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg shadow-blue-500/20">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-slate-400 font-black text-sm uppercase tracking-widest mb-2">Direct Inquiry</h3>
              <a href={`mailto:${PROFILE.email}`} className="text-2xl font-black hover:text-blue-400 transition-colors break-all leading-none">{PROFILE.email}</a>
            </div>
            
            <div className="p-10 bg-slate-900/40 rounded-[2.5rem] border border-slate-800 backdrop-blur-xl group hover:border-indigo-500/50 transition-all duration-500">
              <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform shadow-lg shadow-indigo-500/20">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-slate-400 font-black text-sm uppercase tracking-widest mb-2">Call Support</h3>
              <a href={`tel:${PROFILE.phone}`} className="text-2xl font-black hover:text-indigo-400 transition-colors leading-none">{PROFILE.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <LiveConversation />

      <footer className="py-16 bg-white text-center border-t border-slate-100">
        <p className="text-slate-400 font-bold text-sm tracking-widest uppercase mb-4">
          &copy; {new Date().getFullYear()} {PROFILE.name}
        </p>
        <div className="flex justify-center gap-6 mb-8">
           <button onClick={generateShareLink} className="text-slate-400 hover:text-blue-600 transition-colors text-sm font-bold flex items-center gap-2">
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
             Generate Link
           </button>
           <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-blue-600 transition-colors text-sm font-bold flex items-center gap-2">
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
             Email Profile
           </a>
        </div>
        <p className="text-slate-300 text-xs font-medium italic">
          Designed with precision & powered by Gemini Intelligence
        </p>
      </footer>
    </div>
  );
};

export default App;
