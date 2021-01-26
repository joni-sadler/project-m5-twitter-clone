import React, { useState, useEffect } from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/me/profile', {
      method: "GET",
    })
    .then(res => res.json())
    .then(data => {
      setCurrentUser(data);
    })
    .catch(err => {
      console.log("CurrentUserContext: An error has occurred.");
      setError(err);
    })
    .finally(() => {
      setStatus('idle');
    })
  }, []);

  console.log("current user in context", currentUser)


  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, status, setStatus, error }}>
        {children}
    </CurrentUserContext.Provider>
  );
};

