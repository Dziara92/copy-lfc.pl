import React from "react";
import { useGlobalContext } from "../../context";
import style from "./submenu.module.css";

const Submenu = () => {
  const { menuLeft, hoverSubmenu } = useGlobalContext();

  return (
    <div
      className={
        hoverSubmenu ? `${style.submenu} ${style.show}` : style.submenu
      }
    >
      {menuLeft.map((item) => {
        const { links } = item;
        if (links) {
          return links.map((link, index) => {
            const { label, url } = link;
            return (
              <li key={index}>
                <a href={url}>{label}</a>
              </li>
            );
          });
        }
      })}
    </div>
  );
};

export default Submenu;
