import React from "react";
import { useGlobalContext } from "../../context";

import style from "./aside.module.css";

const Aside = () => {
  const { forum } = useGlobalContext();

  return (
    <div className={style.aside}>
      <div>
        <span>
          <p>Forum</p>
        </span>
      </div>
      <div className={style.content}>
        <ul>
          {forum.map((subject) => (
            <li key={subject.id}>{subject.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
