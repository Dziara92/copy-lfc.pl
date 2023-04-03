import React from "react";
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
                <h3>{title} </h3>
                <p className={style.shorttext}>{text}</p>
                <p className={style.footer}>{data}</p>
              </div>
            </div>
          )
        );
      })}
      <div className={style.rest_news_and_aside}>
        <div>
          {news.map((restPost) => (
            <RestNews key={restPost.id} {...restPost} />
          ))}
        </div>
        <div className={style.aside}>
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default News;
