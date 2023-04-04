import React from "react";
import { useState } from "react";
import { useGlobalContext } from "../../../context";
import style from "./table.module.css";

const Table = () => {
  const { table } = useGlobalContext();
  const [selectedTable, setSelectedTable] = useState(true);
  const [selectedScore, setSelectedScore] = useState(false);

  const handleSelected = (e) => {
    const select = e.target.textContent;
    if (select === "Tabela") {
      setSelectedTable(true);
      setSelectedScore(false);
      return;
    }
    if (select === "Strzelcy") {
      setSelectedTable(false);
      setSelectedScore(true);
      return;
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.table_top}>
        <p
          className={selectedTable ? style.selected : null}
          onClick={(e) => handleSelected(e)}
        >
          Tabela
        </p>
        <p
          className={selectedScore ? style.selected : null}
          onClick={(e) => handleSelected(e)}
        >
          Strzelcy
        </p>
      </div>
      <div className={style.table}>
        {selectedTable && (
          <table>
            {table.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.place}</td>
                  <td>{item.team}</td>
                  <td>{item.games}</td>
                  <td>{item.score}</td>
                </tr>
              );
            })}
          </table>
        )}
        {selectedScore && <p>score</p>}
      </div>
    </div>
  );
};

export default Table;
