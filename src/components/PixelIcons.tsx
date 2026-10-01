import React from 'react';

// Crisp 16x16 Pixel Art SVGs rendered with shape-rendering="crispEdges"
export function PixelComputer({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ shapeRendering: 'crispEdges' }}>
      {/* Outer Monitor Frame */}
      <rect x="2" y="2" width="12" height="9" fill="currentColor" />
      {/* Screen Inset */}
      <rect x="4" y="3" width="8" height="6" fill="#000000" />
      {/* CRT Smile */}
      <rect x="5" y="4" width="1" height="2" fill="#00ff66" />
      <rect x="10" y="4" width="1" height="2" fill="#00ff66" />
      <rect x="6" y="7" width="4" height="1" fill="#00ff66" />
      <rect x="5" y="6" width="1" height="1" fill="#00ff66" />
      <rect x="10" y="6" width="1" height="1" fill="#00ff66" />
      {/* Stand */}
      <rect x="7" y="11" width="2" height="1" fill="currentColor" />
      <rect x="5" y="12" width="6" height="1" fill="currentColor" />
      {/* Keyboard */}
      <rect x="3" y="14" width="10" height="1" fill="currentColor" />
      <rect x="5" y="13" width="6" height="1" fill="currentColor" />
    </svg>
  );
}

export function PixelFloppy({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ shapeRendering: 'crispEdges' }}>
      <path d="M2 1h10l2 2v12H2V1z" />
      <rect x="4" y="2" width="7" height="4" fill="#ffffff" />
      <rect x="5" y="3" width="2" height="2" fill="#000000" />
      <rect x="4" y="9" width="8" height="5" fill="#ffffff" />
      <rect x="6" y="10" width="4" height="3" fill="#000000" />
    </svg>
  );
}

export function PixelJoystick({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ shapeRendering: 'crispEdges' }}>
      {/* Ball */}
      <rect x="7" y="2" width="2" height="2" fill="#ff0055" />
      {/* Stick */}
      <rect x="7.5" y="4" width="1" height="5" fill="#cccccc" />
      {/* Base */}
      <rect x="2" y="9" width="12" height="5" fill="currentColor" />
      <rect x="3" y="8" width="10" height="1" fill="currentColor" />
      {/* Buttons */}
      <rect x="11" y="10" width="2" height="2" fill="#00e5ff" />
      <rect x="4" y="10" width="2" height="2" fill="#ffea00" />
    </svg>
  );
}

export function PixelShield({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ shapeRendering: 'crispEdges' }}>
      <rect x="3" y="2" width="10" height="2" fill="currentColor" />
      <rect x="2" y="3" width="12" height="5" fill="currentColor" />
      <rect x="3" y="8" width="10" height="3" fill="currentColor" />
      <rect x="4" y="11" width="8" height="2" fill="currentColor" />
      <rect x="6" y="13" width="4" height="1" fill="currentColor" />
      <rect x="7" y="14" width="2" height="1" fill="currentColor" />
      {/* Emblem */}
      <rect x="7" y="4" width="2" height="7" fill="#00ff66" />
      <rect x="5" y="6" width="6" height="2" fill="#00ff66" />
    </svg>
  );
}

export function PixelTerminal({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ shapeRendering: 'crispEdges' }}>
      <rect x="1" y="2" width="14" height="12" fill="currentColor" />
      <rect x="2" y="4" width="12" height="9" fill="#000000" />
      {/* Prompt > _ */}
      <rect x="3" y="6" width="1" height="1" fill="#00ff66" />
      <rect x="4" y="7" width="1" height="1" fill="#00ff66" />
      <rect x="3" y="8" width="1" height="1" fill="#00ff66" />
      <rect x="6" y="9" width="3" height="1" fill="#00ff66" />
    </svg>
  );
}

export function PixelDatabase({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ shapeRendering: 'crispEdges' }}>
      {/* Cylinder 1 */}
      <rect x="3" y="2" width="10" height="3" fill="currentColor" />
      <rect x="5" y="3" width="6" height="1" fill="#00e5ff" />
      {/* Cylinder 2 */}
      <rect x="3" y="6" width="10" height="3" fill="currentColor" />
      <rect x="5" y="7" width="6" height="1" fill="#00e5ff" />
      {/* Cylinder 3 */}
      <rect x="3" y="10" width="10" height="3" fill="currentColor" />
      <rect x="5" y="11" width="6" height="1" fill="#00e5ff" />
    </svg>
  );
}

export function PixelPotion({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ shapeRendering: 'crispEdges' }}>
      {/* Stopper */}
      <rect x="6" y="2" width="4" height="2" fill="#c084fc" />
      {/* Neck */}
      <rect x="7" y="4" width="2" height="2" fill="currentColor" />
      {/* Flask Body */}
      <rect x="4" y="6" width="8" height="7" fill="currentColor" />
      <rect x="3" y="8" width="10" height="4" fill="currentColor" />
      {/* Liquid */}
      <rect x="5" y="9" width="6" height="3" fill="#ff007f" />
      <rect x="6" y="8" width="2" height="1" fill="#ffffff" />
    </svg>
  );
}

export function PixelSword({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ shapeRendering: 'crispEdges' }}>
      <rect x="11" y="2" width="3" height="3" fill="#00e5ff" />
      <rect x="9" y="4" width="3" height="3" fill="#00e5ff" />
      <rect x="7" y="6" width="3" height="3" fill="#00e5ff" />
      <rect x="5" y="8" width="3" height="3" fill="#00e5ff" />
      {/* Guard */}
      <rect x="4" y="10" width="4" height="2" fill="#ffea00" />
      <rect x="3" y="11" width="2" height="3" fill="#ffea00" />
      {/* Handle */}
      <rect x="2" y="12" width="2" height="2" fill="#854d0e" />
      {/* Pommel */}
      <rect x="1" y="13" width="2" height="2" fill="#ffea00" />
    </svg>
  );
}
