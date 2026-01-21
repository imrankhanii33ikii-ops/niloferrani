
import React, { useState, useRef } from 'react';
import { analyzeImage, transcribeAudio, startVeoGeneration, pollVeoOperation } from '../services/geminiService';

const AdvancedTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'vision' | 'audio'>('video');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [status, setStatus] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleAction = async () => {
    if (!preview && activeTab !== 'audio') return;
    setLoading(true);
    setResult(null);
    setStatus('Processing...');

    try {
      const base64 = preview?.split(',')[1];
      
      if (activeTab === 'vision') {
        const text = await analyzeImage(base64!, "Describe this image in detail and tell me how it relates to facilities management or design if applicable.");
        setResult(text);
      } else if (activeTab === 'video') {
        // Check for API Key selection
        const hasKey = await (window as any).aistudio?.hasSelectedApiKey();
        if (!hasKey) {
          setStatus('Please select a paid API key for Veo...');
          await (window as any).aistudio?.openSelectKey();
        }
        
        setStatus('Initializing Veo Video Generation...');
        const op = await startVeoGeneration("Animate this image with cinematic motion, 4k detail.", base64);
        setStatus('Generating video (this may take 1-3 minutes)...');
        const videoUri = await pollVeoOperation(op);
        setResult(`${videoUri}&key=${process.env.API_KEY}`);
      } else if (activeTab === 'audio') {
        // Mocking audio capture for transcription logic
        setStatus('Transcription requires a file upload for this demo...');
      }
    } catch (err: any) {
      setStatus(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">AI Innovation Lab</h2>
          <p className="text-slate-400">Experience advanced Gemini capabilities: Veo, Vision, and Transcription.</p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {(['video', 'vision', 'audio'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setResult(null); setPreview(null); }}
              className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="glass p-8 rounded-3xl border border-slate-700 bg-slate-800/50 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div 
                className="aspect-video bg-slate-900 rounded-2xl border-2 border-dashed border-slate-700 flex items-center justify-center cursor-pointer hover:border-blue-500 transition-colors overflow-hidden relative group"
                onClick={() => fileInputRef.current?.click()}
              >
                {preview ? (
                  <img src={preview} className="w-full h-full object-cover" alt="Preview" />
                ) : (
                  <div className="text-center p-4">
                    <svg className="w-12 h-12 text-slate-500 mx-auto mb-2 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-500 font-medium">Click to upload image</p>
                  </div>
                )}
                <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} accept="image/*" />
              </div>
              
              <button 
                onClick={handleAction}
                disabled={loading || (!preview && activeTab !== 'audio')}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-bold shadow-xl hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? 'Processing...' : `Run ${activeTab === 'video' ? 'Veo Generation' : activeTab === 'vision' ? 'Visual Analysis' : 'Transcription'}`}
              </button>
              {status && <p className="text-sm text-blue-400 text-center animate-pulse">{status}</p>}
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 min-h-[300px] border border-slate-700 flex flex-col justify-center">
              {!result && !loading && (
                <div className="text-center text-slate-600">
                  <p>Results will appear here...</p>
                </div>
              )}
              {loading && (
                <div className="space-y-4">
                  <div className="h-4 bg-slate-800 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-slate-800 rounded animate-pulse w-full"></div>
                  <div className="h-4 bg-slate-800 rounded animate-pulse w-5/6"></div>
                </div>
              )}
              {result && activeTab === 'video' && (
                <video src={result} controls className="w-full rounded-lg shadow-2xl" autoPlay loop muted />
              )}
              {result && activeTab !== 'video' && (
                <p className="text-slate-300 leading-relaxed overflow-y-auto max-h-[400px]">{result}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTools;
