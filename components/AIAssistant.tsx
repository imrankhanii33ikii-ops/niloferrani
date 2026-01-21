
import React, { useState, useRef } from 'react';
import { PROFILE } from '../constants';
import { generateSpeech, playPCM, chatWithAssistant } from '../services/geminiService';
import Avatar from './Avatar';

const EXAMPLE_PROMPTS = [
  "What CAFM systems have you worked with?",
  "Tell me about your UI/UX design background.",
  "Are you available for roles in Doha?",
  "What are your core technical skills?",
  "How do you ensure operational data accuracy?"
];

const AIAssistant: React.FC = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatLog, setChatLog] = useState<{ role: string; content: string }[]>([]);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const handleSpeak = async (text: string) => {
    if (!text) return;
    setIsSpeaking(true);
    
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    const audioData = await generateSpeech(text);
    if (audioData && audioCtxRef.current) {
      await playPCM(audioData, audioCtxRef.current);
      // Mock end of speech detection (better to use events, but PCM buffer playback is simple here)
      setTimeout(() => setIsSpeaking(false), (text.length * 60)); // Approximate duration
    } else {
      setIsSpeaking(false);
    }
  };

  const processChat = async (input: string) => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    const newChatLog = [...chatLog, { role: 'user', content: input }];
    setChatLog(newChatLog);

    try {
      const response = await chatWithAssistant(input, chatLog);
      if (response) {
        setChatLog(prev => [...prev, { role: 'assistant', content: response }]);
        handleSpeak(response);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentInput = userInput;
    setUserInput('');
    await processChat(currentInput);
  };

  const handlePromptClick = (prompt: string) => {
    setUserInput('');
    processChat(prompt);
  };

  return (
    <section id="ai-assistant" className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Meet My AI Assistant</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="text-center md:sticky md:top-24">
            <Avatar isSpeaking={isSpeaking} />
            <p className="mt-6 text-slate-500 font-medium">Assistant Nilofer</p>
            
            <div className="mt-8 text-left hidden md:block">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">Try asking...</h3>
              <div className="flex flex-wrap gap-2">
                {EXAMPLE_PROMPTS.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handlePromptClick(prompt)}
                    className="text-left px-3 py-2 text-xs font-medium bg-slate-50 text-slate-600 rounded-lg border border-slate-100 hover:bg-blue-50 hover:border-blue-100 hover:text-blue-700 transition-all"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl shadow-sm min-h-[220px] flex flex-col">
              <div className="flex-1 overflow-y-auto max-h-[400px] mb-4 space-y-4 pr-2">
                {chatLog.length === 0 ? (
                  <p className="text-slate-700 leading-relaxed text-lg italic">
                    Hello! I'm Nilofer's AI representative. You can ask me anything about her skills, experience, or availability.
                  </p>
                ) : (
                  chatLog.map((message, i) => (
                    <div key={i} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                        message.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-none' 
                          : 'bg-slate-100 text-slate-800 rounded-tl-none'
                      }`}>
                        {message.content}
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              <div className="mt-auto flex gap-3 pt-4 border-t border-slate-100">
                <button 
                  onClick={() => handleSpeak(PROFILE.summary)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-200 disabled:opacity-50"
                  disabled={isSpeaking}
                >
                  Play Introduction
                </button>
                <button 
                  onClick={() => handleSpeak("Nilofer is an expert in CAFM systems and UI/UX design, currently based in Doha, Qatar. She has over 5 years of experience in facility management administration.")}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                  disabled={isSpeaking}
                >
                  Quick Bio
                </button>
              </div>
            </div>

            {/* Mobile Prompts */}
            <div className="md:hidden">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {EXAMPLE_PROMPTS.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handlePromptClick(prompt)}
                    className="whitespace-nowrap px-3 py-1.5 text-xs font-medium bg-slate-50 text-slate-600 rounded-full border border-slate-100"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleChat} className="relative">
              <input 
                type="text" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask me something..."
                className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1.5 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
