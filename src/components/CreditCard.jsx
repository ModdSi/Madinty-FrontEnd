import React from "react";

const MastercardCard = () => {
  return (
    // Main Card Container (standard credit card aspect ratio and rounded corners)
    <div className="relative w-96 h-60 bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col justify-between text-white">
      {/* Optional: Card Texture or Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl opacity-80"></div>

      {/* Chip and Network Logo (e.g., MasterCard Circles) */}
      <div className="relative flex justify-between items-start z-10">
        {/* Chip Placeholder */}
        <div className="w-12 h-10 bg-yellow-400 rounded-md"></div>

        {/* MasterCard Logo Circles */}
        <div className="relative w-16 h-10">
          {/* Red Circle */}
          <div className="absolute top-0 left-0 w-10 h-10 bg-red-600 rounded-full opacity-90"></div>
          {/* Yellow/Orange Overlapping Circle */}
          <div className="absolute top-0 right-0 w-10 h-10 bg-yellow-500 rounded-full opacity-90 mix-blend-screen"></div>
        </div>
      </div>

      {/* Card Number */}
      <div className="relative z-10">
        <p className="text-2xl font-mono tracking-widest">
          **** **** **** 1234
        </p>
      </div>
    </div>
  );
};

export default MastercardCard;
