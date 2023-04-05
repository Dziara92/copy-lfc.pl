import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../../context";
import Btn from "../Btn/Btn";
import style from "./table.module.css";

const Table = () => {
  const { table, goalScorers } = useGlobalContext();
  const [showMoreTable, setShowMoreTable] = useState(5);
  const [isActive, setIsActive] = useState(true);

  const btnShowMoreTable = () => {
    return showMoreTable >= 12 ? setShowMoreTable(5) : setShowMoreTable(12);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.table_top}>
        <p
          className={isActive && style.selected}
          onClick={() => setIsActive(true)}
        >
          Tabela
        </p>
        <p
          className={!isActive && style.selected}
          onClick={() => setIsActive(false)}
        >
          Strzelcy
        </p>
      </div>
      <div className={style.table}>
        {isActive && (
          <>
            <table>
              {table
                .map((item) => {
                  return (
                    <tbody key={item.id}>
                      <tr>
                        <td>{item.place}</td>
                        <td>{item.team}</td>
                        <td>{item.games}</td>
                        <td>{item.score}</td>
                      </tr>
                    </tbody>
                  );
                })
                .slice(0, showMoreTable)}
            </table>
            <Btn clickHandler={btnShowMoreTable}>
              {showMoreTable === 5 ? "Rozwiń" : "Zwiń"}
            </Btn>
          </>
        )}
        {!isActive && (
          <table>
            {goalScorers.map((item) => {
              return (
                <tbody key={item.id}>
                  <tr>
                    <td>{item.place}</td>
                    <td className={style.player}>{item.player}</td>
                    <td>{item.score}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
