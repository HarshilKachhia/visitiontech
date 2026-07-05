import React from "react";
import { CONTACT_INFO } from "../services/contactService";

const WhatsAppButton = () => {
  const whatsappUrl = CONTACT_INFO.whatsapp.getLink();

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        .whatsapp-btn-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #25D366;
          border-radius: 50%;
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          z-index: -1;
        }
      `}</style>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="whatsapp-btn-pulse"></div>
        {/* WhatsApp SVG Icon */}
        <svg
          className="w-9 h-9 text-white fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.004 2C6.48 2 2 6.48 2 12c0 2.17.7 4.18 1.89 5.83L2.05 22l4.3-1.8c1.6.9 3.47 1.4 5.65 1.4 5.52 0 10-4.48 10-10S17.524 2 12.004 2zm5.72 14.33c-.24.68-1.2 1.25-1.92 1.33-.49.05-1.13.08-3.23-.79-2.69-1.11-4.42-3.85-4.55-4.03-.13-.18-1.07-1.42-1.07-2.71 0-1.29.67-1.93.91-2.19.24-.26.53-.32.71-.32.18 0 .36.01.51.02.16.01.37-.06.58.45.21.52.73 1.79.8 1.93.07.14.11.31.02.49-.09.18-.14.29-.28.45-.14.16-.3.36-.43.48-.15.14-.31.3-.13.61.18.31.8 1.31 1.71 2.12.91.81 1.67 1.06 2.02 1.23.36.17.57.14.78-.1.21-.24.91-1.06 1.15-1.42.24-.36.49-.3.82-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.08.15.08.87-.16 1.55z" />
        </svg>
        {/* Hover Label */}
        <span className="absolute right-20 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </>
  );
};

export default WhatsAppButton;
