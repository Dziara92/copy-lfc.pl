import React from "react";
import style from "./btn.module.css";

const Btn = ({ children, clickHandler }) => {
  return <button onClick={clickHandler}>{children}</button>;
};

export default Btn;
