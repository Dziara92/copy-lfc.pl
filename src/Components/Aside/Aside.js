import React from "react";
import style from "./aside.module.css";

import Table from "./Tablea/Table";

const Aside = () => {
  return (
    <div className={style.wrapperaside}>
      <Table />
    </div>
  );
};

export default Aside;
