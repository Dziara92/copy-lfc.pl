import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context";
import style from "./submenu.module.css";

const Submenu = () => {
  const {
    ishoverSubmenu,
    location,
    page: { page, links = [] },
  } = useGlobalContext();

  const container = useRef(null);

  useEffect(() => {
    const { center, bottom } = location;
    const submenu = container.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <div
      className={
        ishoverSubmenu ? `${style.submenu} ${style.show}` : style.submenu
      }
      ref={container}
    >
      <div className={style.triangle}></div>
      {links.map((link, index) => {
        const { label, url } = link;
        return <li key={index}>{label}</li>;
      })}
    </div>
  );
};

export default Submenu;
