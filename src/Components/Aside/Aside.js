import React from "react";
import style from "./aside.module.css";

import Table from "./Tablea/Table";
import Login from "./Login/Login";

const Aside = () => {
  return (
    <div className={style.wrapperaside}>
      <Login />
      <Table />
    </div>
  );
};

export default Aside;
