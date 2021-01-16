import React, { useState } from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("unloading");

  const fetchUserData = (ev) => {
    ev.preventDefault();
    fetch("/me/profile", {
      method: "GET",
      body: JSON.stringify({...currentUser}),
      headers: {"Accept": "application/json", "Content-type": "application/json"},
    })
    .then((res) => res.json())
    .then((res) => {
      setCurrentUser(currentUser);
      setStatus("idle");
    })
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
        {children}
    </CurrentUserContext.Provider>
  );
};

