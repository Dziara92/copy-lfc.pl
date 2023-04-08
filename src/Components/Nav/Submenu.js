import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../../context";
import style from "./submenu.module.css";

const Submenu = () => {
  const {
    ishoverSubmenu,
    setHoverSubmenu,
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

  const handleMouseLeave = (event) => {
    const subMenu = container.current;
    const result = subMenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (
      clientX < result.left - 1 ||
      clientX < result.right + 1 ||
      clientY < result.bottom - 1
    ) {
      setHoverSubmenu(false);
    }
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
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
