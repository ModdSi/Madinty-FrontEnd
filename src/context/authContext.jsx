import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  // 'user' will hold the user object from localStorage, or null if logged out
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- PERSISTENCE: Check localStorage on load ---
  useEffect(() => {
    // Check for the 'currentUser' key
    try {
      const storedUser = localStorage.getItem("currentUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (e) {
      console.error("Failed to parse currentUser from localStorage:", e);
      localStorage.removeItem("currentUser");
    }
    setLoading(false);
  }, []);

  // --- AUTHENTICATION ACTIONS ---

  const login = (userObject) => {
    // 1. Update the state
    setUser(userObject);
    // 2. Store the user object for persistence
    localStorage.setItem("currentUser", JSON.stringify(userObject));
  };

  const logout = () => {
    // 1. Clear the state
    setUser(null);

    // 2. Remove the key
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const isLoggedIn = !!user;

  const value = {
    isLoggedIn,
    login,
    logout,
    user,
    loading,
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p>loading</p>{" "}
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
