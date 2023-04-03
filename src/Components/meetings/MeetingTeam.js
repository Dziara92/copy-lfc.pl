import React from "react";
import Opponents from "../../images/ManchesterCity2016.svg";
import Liverpool from "../../images/Liverpool";

import style from "./meetings.module.css";

const MeetingTeam = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.nextgame}>
        <div className={style.away}>
          <p>Machaster City</p>
          <img
            className={style.logoteam}
            src={Opponents}
            alt="Opponents Team Logo"
          />
        </div>
        <div className="game">
          <div className={style.data_game}>
            <div className={style.date}>
              <p className={style.games}>Premier Legue</p>
              <p>16.03.2023</p>
            </div>
            <div className={style.time}>
              <p>12:30</p>
            </div>
          </div>
        </div>
        <div className={style.home}>
          <p>Liverpol Fc</p>
          <Liverpool />
        </div>
      </div>
      <div className={style.social}></div>
    </div>
  );
};

export default MeetingTeam;
