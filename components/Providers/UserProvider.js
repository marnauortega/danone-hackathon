"use client";

import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userJSON = localStorage.getItem("user");

    if (userJSON) {
      const user = JSON.parse(userJSON);
      setUser(user);
    }
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
