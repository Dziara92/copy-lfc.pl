import React, { useState, useContext } from "react";
import { menuLeft, menuRight } from "./Data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [ishoverSubmenu, setHoverSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSubmenu = (text, coordinates) => {
    const page = menuLeft.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
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
        ishoverSubmenu,
        setHoverSubmenu,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
