import React, { useState, useContext } from "react";
import { menuLeft, menuRight, news, forum, table, goalScorers } from "./Data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [ishoverSubmenu, setHoverSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const handleSubmenu = (text, coordinates) => {
    setHoverSubmenu(false);
    const menuLeftpage = menuLeft.find((link) => link.page === text);
    const menuRightpage = menuRight.find((link) => link.page === text);
    if (menuLeftpage) {
      setPage(menuLeftpage);
    }
    if (menuRightpage) {
      setPage(menuRightpage);
    }

    if (page.links && page.links.length > 0) {
      setLocation(coordinates);
      setHoverSubmenu(true);
    }
  };
  const closeSubmenu = () => {};

  return (
    <AppContext.Provider
      value={{
        menuLeft,
        menuRight,
        ishoverSubmenu,
        setHoverSubmenu,
        handleSubmenu,
        closeSubmenu,
        location,
        page,
        news,
        forum,
        table,
        goalScorers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
