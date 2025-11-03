import React, { useState, useEffect } from "react";
import "../style/clearcache.css";
// Utility component to display a temporary success message
const SuccessAlert = ({ message }) => {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-xl transition-all duration-300 transform animate-slideIn">
      {message}
    </div>
  );
};

// Main Button Component
const ClearCacheButton = () => {
  const [isCacheCleared, setIsCacheCleared] = useState(false);
  const [testValue, setTestValue] = useState("");

  // 1. Initialize localStorage with a test key for demonstration
  useEffect(() => {
    if (!localStorage.getItem("testDataKey")) {
      localStorage.setItem("testDataKey", "This is initial dummy data.");
    }
    setTestValue(localStorage.getItem("testDataKey"));
  }, []);

  // 2. Effect to handle the disappearance of the success alert
  useEffect(() => {
    if (isCacheCleared) {
      // Set a timeout to clear the success message after 3 seconds
      const timer = setTimeout(() => {
        setIsCacheCleared(false);
      }, 3000);

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [isCacheCleared]);

  // 3. The core function to clear the local storage
  const handleClearCache = () => {
    // Check if local storage is supported before clearing
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.clear();
      setIsCacheCleared(true); // Show the success message
      setTestValue(localStorage.getItem("testDataKey")); // Update the display value (will be null)
      console.log("Local Storage Cleared.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-24  p-4">
      {/* Test Data Display */}

      {/* Clear Cache Button */}
      <button
        onClick={handleClearCache}
        className="px-8 py-3 bg-red-600 text-white font-bold cursor-pointer rounded-xl shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105 active:scale-95"
      >
        Clear All Local Storage Cache
      </button>

      {/* Confirmation Alert (Conditional Rendering) */}
      {isCacheCleared && (
        <SuccessAlert message="Local Storage has been successfully cleared!" />
      )}
    </div>
  );
};

export default ClearCacheButton;
