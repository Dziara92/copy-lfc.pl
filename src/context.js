import React, { useState, useContext } from "react";
import { menuLeft, menuRight } from "./Data-menu";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [hoverSubmenu, setHoverSubmenu] = useState(false);

  const openSubmenu = () => {
    setHoverSubmenu(true);
  };
  const closeSubmenu = () => {
    setHoverSubmenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        menuLeft,
        menuRight,
        hoverSubmenu,
        setHoverSubmenu,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
