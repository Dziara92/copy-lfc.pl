import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={style.wrapper}>
        <div className={style.content}>
          <div className={style.ssl}>
            <p>Secured with SSL</p>
            <span className={style.separator}>|</span>
            <p>© 2004-2023 LFC.pl</p>
          </div>
          <div className={style.design}>
            <p>
              Website by <span>Okayitsokay.com</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
