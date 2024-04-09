import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [welcomed, setWelcomed] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        welcomed,
        setWelcomed,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
