import React from "react";
import style from "./restnews.module.css";

const RestNews = ({ title, img, text, data, main }) => {
  return (
    !main && (
      <div className={style.rest_news}>
        <img src={img} alt="main news foto" />
        <div className={style.content}>
          <h3>{title} </h3>
          <p className={style.shorttext}>{text}</p>
          <p className={style.footer}>{data}</p>
        </div>
      </div>
    )
  );
};

export default RestNews;
