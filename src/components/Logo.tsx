import React from 'react';
// Import the logo directly
import logoImage from '../assets/logo.png';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={logoImage}
        alt="Vision of Good Logo" 
        className="h-12 w-12 object-contain"
      />
      <div className="flex flex-col">
        <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Vision of Good
        </span>
        <span className="text-lg text-gray-600 font-semibold">
          5.0 Itinerary
        </span>
      </div>
    </div>
  );
}; 