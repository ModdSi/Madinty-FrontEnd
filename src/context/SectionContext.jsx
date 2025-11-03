// src/context/SectionContext.jsx
import { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
const SectionContext = createContext();

// 2️⃣ Create a provider component
export function SectionProvider({ children }) {
  const [selectedSection, setSelectedSection] = useState("عام");

  return (
    <SectionContext.Provider value={{ selectedSection, setSelectedSection }}>
      {children}
    </SectionContext.Provider>
  );
}

// 3️⃣ Custom hook (optional, just for cleaner code)
export function useSection() {
  return useContext(SectionContext);
}
