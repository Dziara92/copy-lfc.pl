import React from "react";
import { Link } from "react-router-dom";
import style from "./archives.module.css";
import { useGlobalContext } from "../../context";

const Archives = () => {
  const { news } = useGlobalContext();
  return (
    <div className={style.wrapper}>
      <h3>Archiwum</h3>
      <ul>
        {news.map((post) => {
          const { title, data, id } = post;
          return (
            <li key={id}>
              <Link to={`/${title}`}>
                <h5>{title}</h5>
              </Link>
              <p>{data}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Archives;
