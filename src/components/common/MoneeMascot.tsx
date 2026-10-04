import React from 'react';

export type MascotMood = 'confused' | 'curious' | 'welcoming' | 'worried' | 'celebrating';

interface MoneeMascotProps {
  mood?: MascotMood;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showThoughtBubble?: boolean;
  thoughtText?: string;
}

export const MoneeMascot: React.FC<MoneeMascotProps> = ({
  mood = 'curious',
  size = 'md',
  className = '',
  showThoughtBubble = false,
  thoughtText
}) => {
  const sizeMap = {
    sm: { width: 56, height: 56 },
    md: { width: 96, height: 96 },
    lg: { width: 140, height: 140 },
    hero: { width: 180, height: 180 }
  };

  const { width, height } = sizeMap[size];

  return (
    <div className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}>
      {/* Optional Editorial Thought Bubble */}
      {showThoughtBubble && thoughtText && (
        <div className="absolute -top-7 px-3 py-1 bg-white border border-[#E8DFD3] rounded-full shadow-soft text-[11px] font-bold text-[#1F1B18] whitespace-nowrap animate-bounce-soft z-10">
          <span>{thoughtText}</span>
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-r border-b border-[#E8DFD3] transform rotate-45" />
        </div>
      )}

      <svg
        width={width}
        height={height}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        aria-label={`monee mascot: ${mood}`}
      >
        {/* Soft Drop Shadow under body */}
        <ellipse cx="80" cy="146" rx="44" ry="7" fill="#1F1B18" fillOpacity="0.08" />

        {/* ================= BACKGROUND ACCESSORIES BY MOOD ================= */}
        {mood === 'celebrating' && (
          <g className="animate-pulse-subtle">
            {/* Golden Star Sparks */}
            <path d="M 28 42 L 31 32 L 41 35 L 33 42 L 36 52 L 28 46 L 20 52 L 23 42 L 15 35 L 25 32 Z" fill="#E5A124" />
            <path d="M 132 38 L 134 30 L 142 32 L 136 38 L 138 46 L 132 41 L 126 46 L 128 38 L 122 32 L 130 30 Z" fill="#E5A124" />
            <circle cx="80" cy="14" r="3.5" fill="#287D54" />
            <circle cx="20" cy="75" r="3" fill="#E85D38" />
            <circle cx="140" cy="72" r="3" fill="#287D54" />
          </g>
        )}

        {mood === 'confused' && (
          <g className="animate-bounce-soft">
            {/* Hand-drawn whimsical squiggly thought mark */}
            <path
              d="M 122 32 C 120 20, 134 16, 133 24 C 132 30, 126 34, 126 40"
              stroke="#E85D38"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="126" cy="48" r="2.5" fill="#E85D38" />
            <path
              d="M 32 36 Q 38 28 46 34 T 54 28"
              stroke="#9E9285"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="2 3"
            />
          </g>
        )}

        {mood === 'worried' && (
          <g>
            {/* Startled sweat bead */}
            <path
              d="M 128 48 C 128 42, 133 34, 133 34 C 133 34, 138 42, 138 48 C 138 52, 134 55, 128 55 C 128 55, 128 52, 128 48 Z"
              fill="#5299D3"
            />
            {/* Alarming zigzag drops */}
            <path
              d="M 24 50 L 32 46 L 28 56 L 36 52"
              stroke="#D63D2E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        )}

        {/* ================= MAIN CHARACTER BODY ================= */}
        {/* Soft Terracotta rounded silhouette */}
        <rect
          x="32"
          y="36"
          width="96"
          height="102"
          rx="46"
          fill="#E85D38"
          stroke="#1F1B18"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Friendly Top Nodule / Gullak slot / coin sprout */}
        <rect
          x="68"
          y="28"
          width="24"
          height="12"
          rx="6"
          fill="#D34B26"
          stroke="#1F1B18"
          strokeWidth="3"
        />
        {/* Coin Slot line */}
        <line x1="74" y1="34" x2="86" y2="34" stroke="#1F1B18" strokeWidth="2.5" strokeLinecap="round" />

        {/* Warm Cream Tummy Patch */}
        <ellipse cx="80" cy="100" rx="32" ry="28" fill="#FAF7F2" stroke="#1F1B18" strokeWidth="2" strokeDasharray="3 3" />

        {/* ================= FACIAL FEATURES BY MOOD ================= */}

        {/* Rosy Cheeks */}
        <circle cx="48" cy="84" r="6" fill="#FFA58B" fillOpacity="0.8" />
        <circle cx="112" cy="84" r="6" fill="#FFA58B" fillOpacity="0.8" />

        {/* MOOD 1: CONFUSED (Head tilted look, asymmetric brows, squiggly mouth) */}
        {mood === 'confused' && (
          <g>
            {/* Asymmetrical curious eyebrows */}
            <path d="M 52 64 Q 60 58 68 64" stroke="#1F1B18" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 92 61 Q 100 66 108 61" stroke="#1F1B18" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Left Eye */}
            <ellipse cx="60" cy="74" rx="4.5" ry="5.5" fill="#1F1B18" />
            <circle cx="62" cy="72" r="1.5" fill="#FFFFFF" />

            {/* Right Eye (slightly squinting/curious) */}
            <ellipse cx="100" cy="73" rx="5" ry="4" fill="#1F1B18" />
            <circle cx="102" cy="71.5" r="1.5" fill="#FFFFFF" />

            {/* Wavy inquisitive mouth */}
            <path
              d="M 72 88 Q 76 91 80 88 T 88 89"
              stroke="#1F1B18"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Left hand scratching head */}
            <path
              d="M 32 94 C 22 88, 20 72, 34 64"
              stroke="#1F1B18"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Right hand on hip */}
            <path
              d="M 128 96 C 136 94, 138 88, 126 84"
              stroke="#1F1B18"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {/* MOOD 2: CURIOUS (Bright round eyes looking up, small hopeful smile) */}
        {mood === 'curious' && (
          <g>
            {/* Eyebrows up */}
            <path d="M 52 60 Q 60 56 68 60" stroke="#1F1B18" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 92 60 Q 100 56 108 60" stroke="#1F1B18" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* Big Shiny Eyes */}
            <circle cx="60" cy="72" r="6" fill="#1F1B18" />
            <circle cx="58" cy="70" r="2" fill="#FFFFFF" />

            <circle cx="100" cy="72" r="6" fill="#1F1B18" />
            <circle cx="98" cy="70" r="2" fill="#FFFFFF" />

            {/* Gentle gentle smile */}
            <path
              d="M 73 85 Q 80 92 87 85"
              stroke="#1F1B18"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Small paws holding a tiny gold coin */}
            <circle cx="80" cy="106" r="10" fill="#E5A124" stroke="#1F1B18" strokeWidth="2.5" />
            <text x="76.5" y="110" fontSize="10" fontWeight="900" fill="#1F1B18">₹</text>

            <path d="M 34 100 Q 42 108 52 106" stroke="#1F1B18" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 126 100 Q 118 108 108 106" stroke="#1F1B18" strokeWidth="3" strokeLinecap="round" fill="none" />
          </g>
        )}

        {/* MOOD 3: WELCOMING (Warm eyes, open smile, friendly waving arm) */}
        {mood === 'welcoming' && (
          <g>
            {/* Friendly eyes */}
            <circle cx="60" cy="72" r="5.5" fill="#1F1B18" />
            <circle cx="58.5" cy="70" r="1.8" fill="#FFFFFF" />

            <circle cx="100" cy="72" r="5.5" fill="#1F1B18" />
            <circle cx="98.5" cy="70" r="1.8" fill="#FFFFFF" />

            {/* Warm open smile */}
            <path
              d="M 72 84 Q 80 94 88 84"
              stroke="#1F1B18"
              strokeWidth="3"
              strokeLinecap="round"
              fill="#D34B26"
            />

            {/* Left arm waving high */}
            <path
              d="M 32 86 C 18 80, 16 54, 26 44"
              stroke="#1F1B18"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="26" cy="44" r="5" fill="#E85D38" stroke="#1F1B18" strokeWidth="2.5" />

            {/* Right arm rested */}
            <path
              d="M 128 92 C 136 94, 138 98, 126 102"
              stroke="#1F1B18"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {mood === 'worried' && (
          <g>
            {/* Worried tilted eyebrows */}
            <path d="M 52 64 Q 60 70 68 66" stroke="#1F1B18" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 92 66 Q 100 70 108 64" stroke="#1F1B18" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Wide startled eyes */}
            <circle cx="60" cy="75" r="7" fill="#FFFFFF" stroke="#1F1B18" strokeWidth="2.5" />
            <circle cx="60" cy="75" r="3" fill="#1F1B18" />

            <circle cx="100" cy="75" r="7" fill="#FFFFFF" stroke="#1F1B18" strokeWidth="2.5" />
            <circle cx="100" cy="75" r="3" fill="#1F1B18" />

            {/* Shivering wavy mouth */}
            <path
              d="M 70 92 Q 75 88 80 92 T 90 92"
              stroke="#1F1B18"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Paws held to cheeks in shock */}
            <circle cx="42" cy="88" r="6" fill="#E85D38" stroke="#1F1B18" strokeWidth="2.5" />
            <circle cx="118" cy="88" r="6" fill="#E85D38" stroke="#1F1B18" strokeWidth="2.5" />
          </g>
        )}

        {mood === 'celebrating' && (
          <g>
            {/* Happy curved eyes (^ _ ^) */}
            <path
              d="M 54 74 Q 60 66 66 74"
              stroke="#1F1B18"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 94 74 Q 100 66 106 74"
              stroke="#1F1B18"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Wide celebratory open grin */}
            <path
              d="M 70 82 Q 80 98 90 82 Z"
              fill="#D34B26"
              stroke="#1F1B18"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M 74 85 Q 80 91 86 85" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Both arms raised in triumph! */}
            <path
              d="M 32 82 C 16 72, 14 44, 24 36"
              stroke="#1F1B18"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 128 82 C 144 72, 146 44, 136 36"
              stroke="#1F1B18"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {/* Two cute little feet */}
        <ellipse cx="62" cy="138" rx="10" ry="5" fill="#D34B26" stroke="#1F1B18" strokeWidth="2.5" />
        <ellipse cx="98" cy="138" rx="10" ry="5" fill="#D34B26" stroke="#1F1B18" strokeWidth="2.5" />
      </svg>
    </div>
  );
};
