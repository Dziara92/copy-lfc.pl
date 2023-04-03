import React from "react";
import style from "./pagecontent.module.css";

const PageContent = ({ children }) => {
  return <main className={style.main}>{children}</main>;
};

export default PageContent;
