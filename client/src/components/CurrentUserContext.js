import React, { useState, useEffect } from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("unloading");

  useEffect(() => {
    fetch('/api/me/profile', {
      method: "GET",
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setCurrentUser(currentUser);
      setStatus('idle');
    })
  });

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
        {children}
    </CurrentUserContext.Provider>
  );
};

