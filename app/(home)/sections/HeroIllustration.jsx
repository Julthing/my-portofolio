"use client";

import { useTheme } from "@/app/components/ThemeProvider";

export default function HeroIllustration() {
  const { theme } = useTheme();
  const isDark = theme !== "light";

  const stroke = isDark ? "#fff" : "#1C252E";
  const strokeMuted = isDark ? "#28323D" : "#DFE3E8";
  const accent = "#14B8A6";
  const accentLight = "#5EEAD4";

  return (
    <div className="relative w-full max-w-sm">
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Glow behind editor */}
        <circle cx="200" cy="200" r="140" fill={accent} opacity="0.04" />
        <circle cx="200" cy="200" r="100" fill={accent} opacity="0.03" />

        {/* Editor window */}
        <rect x="50" y="65" width="300" height="230" rx="12" stroke={stroke} strokeWidth="1.5" fill={isDark ? "#1C252E" : "#F4F6F8"} fillOpacity="0.5" className="draw-long" />

        {/* Title bar */}
        <circle cx="75" cy="87" r="5" fill="#FF5F57" className="fade-in fi-d1" />
        <circle cx="93" cy="87" r="5" fill="#FEBC2E" className="fade-in fi-d1" />
        <circle cx="111" cy="87" r="5" fill="#28C840" className="fade-in fi-d1" />
        <line x1="50" y1="105" x2="350" y2="105" stroke={strokeMuted} strokeWidth="1" className="draw-line draw-d2" style={{ strokeDasharray: 300, strokeDashoffset: 300 }} />

        {/* Code lines */}
        <rect x="75" y="122" width="55" height="6" rx="3" fill={accent} opacity="0.8" className="fade-in fi-d2" />
        <rect x="138" y="122" width="90" height="6" rx="3" fill={stroke} opacity="0.3" className="fade-in fi-d2" />

        <rect x="90" y="145" width="40" height="6" rx="3" fill={accentLight} opacity="0.6" className="fade-in fi-d2" />
        <rect x="138" y="145" width="120" height="6" rx="3" fill={stroke} opacity="0.2" className="fade-in fi-d3" />

        <rect x="90" y="168" width="70" height="6" rx="3" fill={stroke} opacity="0.25" className="fade-in fi-d3" />
        <rect x="168" y="168" width="55" height="6" rx="3" fill={accent} opacity="0.5" className="fade-in fi-d3" />

        <rect x="90" y="191" width="100" height="6" rx="3" fill={stroke} opacity="0.2" className="fade-in fi-d3" />

        <rect x="75" y="214" width="35" height="6" rx="3" fill={accent} opacity="0.8" className="fade-in fi-d4" />

        <rect x="75" y="237" width="60" height="6" rx="3" fill={stroke} opacity="0.3" className="fade-in fi-d4" />
        <rect x="143" y="237" width="80" height="6" rx="3" fill={accentLight} opacity="0.4" className="fade-in fi-d4" />

        {/* Blinking cursor */}
        <rect x="225" y="234" width="2" height="12" rx="1" fill={accent} className="fade-in fi-d4" style={{ animation: "fade-in 0.6s ease forwards, blink 1s step-end 2.4s infinite" }} />

        {/* Floating component card */}
        <g className="fade-in fi-d3 animate-float">
          <rect x="290" y="300" width="90" height="60" rx="10" fill={isDark ? "#1C252E" : "#fff"} stroke={strokeMuted} strokeWidth="1" />
          <rect x="305" y="318" width="40" height="5" rx="2.5" fill={accent} opacity="0.6" />
          <rect x="305" y="330" width="60" height="5" rx="2.5" fill={stroke} opacity="0.15" />
          <rect x="305" y="342" width="30" height="5" rx="2.5" fill={stroke} opacity="0.1" />
        </g>

        {/* Floating palette */}
        <g className="fade-in fi-d2 animate-float-2">
          <rect x="20" y="310" width="65" height="65" rx="14" fill={isDark ? "#1C252E" : "#fff"} stroke={strokeMuted} strokeWidth="1" />
          <circle cx="41" cy="335" r="7" fill="#FF5F57" opacity="0.7" />
          <circle cx="62" cy="335" r="7" fill="#FEBC2E" opacity="0.7" />
          <circle cx="41" cy="355" r="7" fill={accent} opacity="0.7" />
          <circle cx="62" cy="355" r="7" fill="#5856D6" opacity="0.7" />
        </g>

        {/* Bracket decorations */}
        <text x="15" y="180" fontSize="28" fontFamily="monospace" fill={accent} opacity="0.2" className="fade-in fi-d1 animate-float">{"<"}</text>
        <text x="365" y="150" fontSize="28" fontFamily="monospace" fill={accent} opacity="0.2" className="fade-in fi-d2 animate-float-2">{"/>"}</text>

        {/* Dots */}
        <circle cx="370" cy="75" r="3" fill={accent} opacity="0.3" className="fade-in fi-d1" />
        <circle cx="25" cy="70" r="2" fill={accent} opacity="0.2" className="fade-in fi-d2" />
        <circle cx="380" cy="280" r="4" fill={accent} opacity="0.15" className="fade-in fi-d3" />
      </svg>
    </div>
  );
}
