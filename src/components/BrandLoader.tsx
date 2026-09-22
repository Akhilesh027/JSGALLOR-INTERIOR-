import React, { useState, useEffect, useRef } from 'react';
import brandLogo from '../assets/images/JSGALORE.png';

interface BrandLoaderProps {
  onComplete: () => void;
}

export const BrandLoader: React.FC<BrandLoaderProps> = ({ onComplete }) => {
  // Writing state
  const [writtenCount, setWrittenCount] = useState(0); // 0 to 8 for "JSGALLOR"
  const [subWrittenCount, setSubWrittenCount] = useState(0); // 0 to 9 for "INTERIORS"
  const [showFlourish, setShowFlourish] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const mainLetters = ['J', 'S', 'G', 'A', 'L', 'L', 'O', 'R'];
  const interiorLetters = ['I', 'N', 'T', 'E', 'R', 'I', 'O', 'R', 'S'];

  useEffect(() => {
    // 1. Sequentially write each letter of "JSGALLOR"
    let currentMain = 0;
    const mainInterval = setInterval(() => {
      currentMain += 1;
      setWrittenCount(currentMain);
      if (currentMain >= mainLetters.length) {
        clearInterval(mainInterval);
        
        // 2. Pause slightly, then write "INTERIORS"
        setTimeout(() => {
          let currentSub = 0;
          const subInterval = setInterval(() => {
            currentSub += 1;
            setSubWrittenCount(currentSub);
            if (currentSub >= interiorLetters.length) {
              clearInterval(subInterval);
              
              // 3. Draw flourish signature underline
              setTimeout(() => {
                setShowFlourish(true);
                setIsGlowing(true);
              }, 180);

              // 4. Smooth curtain dissolve into website
              setTimeout(() => {
                setIsExiting(true);
              }, 1400);

              // 5. Unmount loader
              setTimeout(() => {
                onComplete();
              }, 2100);
            }
          }, 85);
        }, 220);
      }
    }, 130);

    return () => clearInterval(mainInterval);
  }, [onComplete]);

  // Click anywhere to skip immediately
  const handleQuickSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      onClick={handleQuickSkip}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07080c] text-white select-none transition-all duration-700 ease-out cursor-pointer ${
        isExiting ? 'opacity-0 pointer-events-none scale-105 filter blur-md' : 'opacity-100 scale-100'
      }`}
    >
      <style>{`
        @keyframes jsGallorIconSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes jsGallorOrbitSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Ambient background lighting blooms */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c5a880]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#c5a880]/15 rounded-full blur-[80px] pointer-events-none animate-pulse-soft" />

      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full px-6 text-center">
        
        {/* Official Gold Brand Emblem Rotating Stage */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6">
          {/* Ambient Gold Halo */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#c5a880]/30 via-[#e2cfb4]/20 to-transparent blur-xl pointer-events-none" />

          {/* Outer Rotating Celestial Dashed Orbit Ring with Diamond Jewel */}
          <div
            className="absolute -inset-2.5 rounded-full border border-dashed border-[#c5a880]/50 pointer-events-none"
            style={{
              animation: 'jsGallorOrbitSpin 8s linear infinite',
              transformOrigin: '50% 50%',
            }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#fcd34d]" />
          </div>
          
          {/* Medallion Base with Rotating Gold Brand Icon */}
          <div className="relative w-full h-full rounded-full bg-[#0c0e14]/95 border border-[#c5a880]/60 shadow-[0_0_40px_rgba(197,168,128,0.35)] flex items-center justify-center p-3.5">
            <img
              src={brandLogo}
              alt="JS GALLOR Official Emblem"
              className="w-full h-full object-contain filter drop-shadow-[0_0_16px_rgba(197,168,128,0.7)]"
              style={{
                animation: 'jsGallorIconSpin 3.5s linear infinite',
                transformOrigin: '50% 50%',
                willChange: 'transform',
              }}
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* "JSGALLOR" HANDWRITTEN / LETTER-BY-LETTER CALLIGRAPHIC REVELATION         */}
        {/* ========================================================================= */}
        <div className="relative flex items-center justify-center my-2 select-none min-h-[70px]">
          
          {/* Main Letters Container */}
          <div className="flex items-center gap-1 sm:gap-2">
            {mainLetters.map((char, index) => {
              const isRevealed = index < writtenCount;
              const isCurrentlyWriting = index === writtenCount - 1 && writtenCount < mainLetters.length;

              return (
                <div
                  key={index}
                  className="relative flex items-center justify-center"
                >
                  {/* The Letter */}
                  <span
                    className={`font-serif-luxury text-5xl sm:text-7xl font-bold tracking-wider inline-block transition-all duration-300 ${
                      isRevealed
                        ? 'opacity-100 scale-100 translate-y-0 gold-gradient-text drop-shadow-[0_0_20px_rgba(197,168,128,0.5)]'
                        : 'opacity-0 scale-75 translate-y-4 text-transparent'
                    }`}
                  >
                    {char}
                  </span>

                  {/* Golden Pen Nib Particle following active writing stroke */}
                  {isCurrentlyWriting && (
                    <span className="absolute -top-2 -right-1 w-3 h-3 rounded-full bg-[#ffffff] shadow-[0_0_15px_#c5a880] animate-ping" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* "INTERIORS" HIGHLIGHTED WRITTEN CALLIGRAPHY                               */}
        {/* ========================================================================= */}
        <div className="relative flex items-center justify-center gap-2.5 my-2 select-none min-h-[36px]">
          {/* Left Golden Diamond Star */}
          {subWrittenCount > 0 && (
            <span className="text-[#c5a880] text-xs sm:text-sm animate-in fade-in zoom-in duration-300">
              ✦
            </span>
          )}

          {/* Sub Letters Container ("INTERIORS") */}
          <div className="flex items-center gap-1 sm:gap-2">
            {interiorLetters.map((char, index) => {
              const isRevealed = index < subWrittenCount;
              const isCurrentlyWriting = index === subWrittenCount - 1 && subWrittenCount < interiorLetters.length;

              return (
                <div
                  key={index}
                  className="relative flex items-center justify-center"
                >
                  <span
                    className={`font-serif-luxury text-xl sm:text-2xl font-bold tracking-widest inline-block transition-all duration-200 ${
                      isRevealed
                        ? 'opacity-100 scale-100 text-amber-300 drop-shadow-[0_0_12px_rgba(252,211,77,0.7)]'
                        : 'opacity-0 scale-75 translate-y-2 text-transparent'
                    }`}
                  >
                    {char}
                  </span>

                  {/* Pen tip glow for secondary text */}
                  {isCurrentlyWriting && (
                    <span className="absolute -top-1 -right-0.5 w-2 h-2 rounded-full bg-amber-200 shadow-[0_0_10px_#fcd34d] animate-ping" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Golden Diamond Star */}
          {subWrittenCount >= interiorLetters.length && (
            <span className="text-[#c5a880] text-xs sm:text-sm animate-in fade-in zoom-in duration-300">
              ✦
            </span>
          )}
        </div>

        {/* ========================================================================= */}
        {/* ARTISAN SIGNATURE FLOURISH UNDERLINE & PEDIGREE                           */}
        {/* ========================================================================= */}
        <div className="w-full max-w-xs sm:max-w-md my-2 flex flex-col items-center">
          <svg viewBox="0 0 400 30" className="w-full h-auto overflow-visible">
            <defs>
              <linearGradient id="flourishGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c5a880" stopOpacity="0" />
                <stop offset="25%" stopColor="#c5a880" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="75%" stopColor="#c5a880" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c5a880" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Cursive sweep stroke */}
            <path
              d="M 20 15 Q 200 25, 380 15"
              fill="none"
              stroke="url(#flourishGrad)"
              strokeWidth="1.5"
              strokeDasharray={400}
              strokeDashoffset={showFlourish ? 0 : 400}
              style={{
                transition: 'stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />

            {/* Central Diamond Accent */}
            {showFlourish && (
              <polygon
                points="200,10 205,15 200,20 195,15"
                fill="#c5a880"
                className="animate-in fade-in zoom-in duration-400"
              />
            )}
          </svg>
        </div>

        {/* Subtitle Revelation */}
        <div
          className={`space-y-1.5 mt-2 transition-all duration-700 ${
            showFlourish ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase text-[#c5a880] font-semibold">
            Jaghsora Luxore Private Limited
          </p>
          <p className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-gray-400 font-light">
            Bespoke Turnkey Residential Architecture
          </p>
        </div>

        {/* Subtle Skip Prompt */}
        <div className="mt-10 text-[10px] text-gray-400 tracking-widest uppercase font-light opacity-50 hover:opacity-90 transition-opacity">
          Click anywhere to skip
        </div>

      </div>
    </div>
  );
};
