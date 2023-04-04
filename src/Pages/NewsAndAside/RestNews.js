import React from "react";
import { Link } from "react-router-dom";
import style from "./restnews.module.css";

const RestNews = ({ title, img, text, data, main }) => {
  return (
    !main && (
      <div className={style.rest_news}>
        <img className={style.rest_news_img} src={img} alt="main news foto" />
        <div className={style.content}>
          <Link to={title}>
            <h3>{title}</h3>
          </Link>
          <p className={style.shorttext}>{text.slice(0, 65)}...</p>
          <p className={style.footer}>{data}</p>
        </div>
      </div>
    )
  );
};

export default RestNews;
