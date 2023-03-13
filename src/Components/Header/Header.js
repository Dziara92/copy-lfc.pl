import React from "react";

import Navigation from "../Nav/Navigation";
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <span></span>
        <h1 className={style.logo}>
          LFC<span className={style.dot}>.</span>pl
        </h1>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
