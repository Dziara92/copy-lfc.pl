import React from "react";
import style from "./aside.module.css";

import Table from "./Tablea/Table";
import Login from "./Login/Login";
import NextMatch from "./NextMatch/NextMatch";

const Aside = () => {
  return (
    <div className={style.wrapperaside}>
      <Login />
      <NextMatch />
      <Table />
    </div>
  );
};

export default Aside;
