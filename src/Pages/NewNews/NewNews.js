import React from "react";
import { useState } from "react";
import style from "./NewNews.module.css";

const NewNews = () => {
  const [title, setTitle] = useState("");
  const [txt, setTxt] = useState("");
  const [newPost, setNewPost] = useState({});

  const handleNewNews = (e) => {
    e.preventDefault();
    setNewPost({ title, txt });
    console.log(newPost);
  };
  return (
    <div className={style.wrapper}>
      <form onSubmit={handleNewNews}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="text"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
        <button>send</button>
      </form>
    </div>
  );
};

export default NewNews;
