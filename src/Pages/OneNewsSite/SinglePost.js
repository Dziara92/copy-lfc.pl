import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context";
import style from "./singlepost.module.css";

const SinglePost = () => {
  const { news } = useGlobalContext();
  const { title } = useParams();

  const post = news.find((post) => post.title === title);
  const { title: titlePost, img, text, data } = post;
  return (
    <div className={style.wrapper}>
      <div>
        <img src={img} alt={titlePost} />
        <span className={style.postspan}></span>
      </div>
      <div className={style.content}>
        <article>
          <h2>{titlePost}</h2>
          <p>{text}</p>
        </article>
        <div className={style.authoranddate}>
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
