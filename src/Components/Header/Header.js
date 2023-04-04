import React from "react";
import { Link } from "react-router-dom";

import Navigation from "../Nav/Navigation";
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <span></span>
        <Link to="/">
          <h1 className={style.logo}>
            LFC<span className={style.dot}>.</span>pl
          </h1>
        </Link>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
