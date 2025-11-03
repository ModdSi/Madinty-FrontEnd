import React from "react";

const VisaCard = () => {
  return (
    // Main Card Container (standard credit card aspect ratio and rounded corners)
    <div className="relative w-96 h-60 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl shadow-2xl p-6 flex flex-col justify-between text-white">
      {/* Optional: Card Holographic/Chip Area */}
      <div className="absolute top-4 left-6 w-12 h-10 bg-gray-400 rounded-md"></div>

      {/* Visa Logo and 'V' shape */}
      <div className="relative flex justify-end items-center z-10 pt-4">
        <div className="flex items-end space-x-0.5">
          {/* Blue V-Shape (Conceptual representation) */}
          <div className="text-4xl font-extrabold leading-none text-blue-300 transform -skew-x-12 opacity-80">
            V
          </div>
          {/* VISA Text Logo */}
          <div className="text-3xl font-bold italic tracking-wide">VISA</div>
        </div>
      </div>

      {/* Card Number */}
      <div className="relative z-10 mt-8">
        <p className="text-2xl font-mono tracking-widest">
          4123 **** **** 5678
        </p>
      </div>
    </div>
  );
};

export default VisaCard;
