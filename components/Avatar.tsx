
import React from 'react';

const Avatar: React.FC<{ isSpeaking?: boolean; size?: number }> = ({ isSpeaking, size = 240 }) => {
  return (
    <div className={`relative inline-block transition-all duration-700 ${isSpeaking ? 'scale-105' : 'hover:scale-105'}`}>
      <svg width={size} height={size} viewBox="0 0 200 200" className="overflow-visible">
        <defs>
          <linearGradient id="softBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f5f9" />
          </linearGradient>
          <linearGradient id="hijabPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="50%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="hijabDeep" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <filter id="beautyShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
            <feOffset dx="0" dy="10" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.15" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="eyeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Aura Shimmer */}
        <circle cx="100" cy="100" r="98" fill="white" className="animate-shimmer opacity-30" />
        <circle cx="100" cy="100" r="92" fill="none" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="6 6" className="animate-[spin_40s_linear_infinite]" />

        <g className="animate-float">
          <g className="animate-sway">
            {/* Elegant Professional Attire */}
            <g filter="url(#beautyShadow)">
              <path d="M30 185 Q100 140 170 185 L170 200 L30 200 Z" fill="#ffffff" />
              {/* Refined Pattern Detail */}
              {[45, 65, 85, 105, 125, 145].map((x, i) => (
                <circle key={i} cx={x} cy={168 + (i % 2 * 8)} r="1.6" fill="#38bdf8" opacity="0.2" />
              ))}
            </g>

            {/* Hijab - Layers of Depth */}
            <path d="M40 100 Q40 25 100 25 Q160 25 160 100 L165 145 Q165 170 35 170 L40 145 Z" fill="url(#hijabDeep)" filter="url(#beautyShadow)" />

            {/* Face - Radiant Glow */}
            <path d="M68 95 C68 62 132 62 132 95 L130 122 C130 145 70 145 70 122 Z" fill="#fffaf0" />

            {/* Hijab Inner Frame - Silk Finish */}
            <path d="M68 88 C72 70 128 70 132 88 L134 105 Q138 150 100 162 Q62 150 66 105 Z" fill="url(#hijabPrimary)" opacity="0.98" />
            
            {/* Delicate Fold Highlights */}
            <path d="M85 40 Q92 32 105 32" fill="none" stroke="white" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
            <path d="M115 40 Q108 32 95 32" fill="none" stroke="white" strokeWidth="1" opacity="0.6" strokeLinecap="round" />

            {/* Expressive Eyes - Life-like Animation */}
            <g className="animate-blink">
              {/* Left Eye */}
              <ellipse cx="85" cy="100" rx="5" ry="2.5" fill="#0f172a" />
              <circle cx="87" cy="98.5" r="1.5" fill="url(#eyeGlow)" />
              <path d="M80 95 Q85 92 90 95" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
              
              {/* Right Eye */}
              <ellipse cx="115" cy="100" rx="5" ry="2.5" fill="#0f172a" />
              <circle cx="117" cy="98.5" r="1.5" fill="url(#eyeGlow)" />
              <path d="M110 95 Q115 92 120 95" fill="none" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* Subtle Defined Nose */}
            <path d="M100 108 Q103 112 100 115" fill="none" stroke="#e2e8f0" strokeWidth="1.5" opacity="0.8" />

            {/* Mouth - Responsive to Speaking (Elegant Rose Shade) */}
            <g className={isSpeaking ? 'animate-speak' : ''}>
              <path 
                d={isSpeaking ? "M88 128 Q100 138 112 128" : "M93 129 Q100 132 107 129"} 
                stroke="#f43f5e" 
                strokeWidth="3" 
                fill="none" 
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            </g>

            {/* Gentle Radiant Blush */}
            <circle cx="75" cy="118" r="7" fill="#fecaca" opacity="0.25" />
            <circle cx="125" cy="118" r="7" fill="#fecaca" opacity="0.25" />

            {/* Detailed Silk Hijab Draping Lines */}
            <path d="M50 130 Q35 150 45 165" fill="none" stroke="white" strokeWidth="0.8" opacity="0.4" />
            <path d="M150 130 Q165 150 155 165" fill="none" stroke="white" strokeWidth="0.8" opacity="0.4" />
          </g>
        </g>
      </svg>
      
      {/* Dynamic Soundwave Indicator */}
      <div className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex items-end space-x-2 px-6 py-3 rounded-full bg-white/95 backdrop-blur-xl border border-blue-100 shadow-2xl transition-all duration-700 ${isSpeaking ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className="w-1.5 rounded-full bg-gradient-to-t from-blue-600 to-sky-400 animate-[bounce_0.6s_infinite]" 
            style={{ 
              height: `${12 + Math.random() * 24}px`,
              animationDelay: `${i * 0.1}s` 
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Avatar;
