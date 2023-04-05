import React from "react";
import style from "./nextmatch.module.css";
import { useState } from "react";

import ChelseaFc from "../../../images/Chelsea2005.svg";

const NextMatch = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={style.wrapper}>
      <div className={style.match_top}>
        <p
          className={isActive ? style.active : null}
          onClick={() => setIsActive(true)}
        >
          Poprzedni mecz
        </p>
        <p
          className={!isActive ? style.active : null}
          onClick={() => setIsActive(false)}
        >
          Następny mecz
        </p>
      </div>
      <div className={style.content}>
        {isActive && (
          <>
            <p className={style.data}>Premier League, 04.04.2023 21:00</p>
            <div className={style.match}>
              <div>
                <p>
                  Chelsea <span className={style.score}>0</span>
                </p>
                <p>
                  Liverpol <span className={style.score}>0</span>
                </p>
              </div>
              <img src={ChelseaFc} alt="logo chelsea" />
            </div>
          </>
        )}
        {!isActive && <p>następny mecz</p>}
      </div>
    </div>
  );
};

export default NextMatch;
