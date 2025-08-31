"use client";

import { useState } from "react";

export const FloatingQuoteButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleGetQuote = () => {
    const subject = encodeURIComponent("AI Calling Services Quote Request");
    const body = encodeURIComponent(
      `Hi Voxyr Team,\n\nI'm interested in getting a quote for your AI calling services. Please provide more information about:\n\n- My specific use case\n- Expected call volume\n- Custom requirements\n\nLooking forward to hearing from you!\n\nBest regards,\n[Your Name]`
    );
    
    window.open(`mailto:contact.voxyr@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleGetQuote}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full p-4 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110"
        title="Get AI Calling Quote"
      >
        {/* AI Calling Icon */}
        <div className="relative">
          <div className="w-6 h-6 flex items-center justify-center">
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
          </div>
          
          {/* AI Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75"></div>
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-pulse opacity-50"></div>
        </div>

        {/* Floating Label */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-black/90 text-white text-sm rounded-lg whitespace-nowrap shadow-lg transform transition-all duration-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Get AI Calling Quote
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
          </div>
        )}

        {/* AI Status Indicator */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
      </button>
    </div>
  );
};
