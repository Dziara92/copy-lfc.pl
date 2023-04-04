import React from "react";
import { Link } from "react-router-dom";
import RestNews from "./RestNews";
import Aside from "./Aside";
import { useGlobalContext } from "../../context";
import style from "./news.module.css";

const News = () => {
  const { news } = useGlobalContext();
  return (
    <div className={style.wrappernews}>
      {news.map((newPost) => {
        const { title, img, text, data, main, id } = newPost;

        return (
          main && (
            <div key={id} className={`${style.news} ${style.main}`}>
              <img src={img} alt="main news foto" />
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
      })}
      <div className={style.rest_news_and_aside}>
        <div className={style.left_div}>
          {news
            .map((restPost) => <RestNews key={restPost.id} {...restPost} />)
            .slice(0, 6)}
        </div>
        <div className={style.aside}>
          <Aside />
        </div>
      </div>
      <Link to="/archives">
        <button className={style.btn_archiwum}>Archiwum</button>
      </Link>
    </div>
  );
};

export default News;
