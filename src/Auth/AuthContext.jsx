/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("all_users");
    return saved
      ? JSON.parse(saved)
      : [{ email: "admin@school.com", password: "admin", role: "admin" }];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("all_users", JSON.stringify(users));
  }, [users]);

  const registerUser = (userData) => {
    setUsers((prev) => [...prev, userData]);
  };

  const login = (email, password) => {
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setCurrentUser(found);
      localStorage.setItem("user", JSON.stringify(found));
      return found;
    }
    return null;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, registerUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};