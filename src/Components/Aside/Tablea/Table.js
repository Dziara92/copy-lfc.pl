import React from "react";
import { useState } from "react";
import style from "./table.module.css";

const Table = () => {
  const [selectedTable, setSelectedTable] = useState(true);
  const [selectedScore, setSelectedScore] = useState(false);

  const handleSelectedTable = () => {
    if (selectedTable === false) {
      setSelectedTable(true);
      setSelectedScore(false);
    }
  };
  const handleSelectedScore = () => {
    if (selectedScore === false) {
      setSelectedScore(true);
      setSelectedTable(false);
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.table_top}>
        <p
          className={selectedTable ? style.selected : null}
          onClick={handleSelectedTable}
        >
          Tabela
        </p>
        <p
          className={selectedScore ? style.selected : null}
          onClick={handleSelectedScore}
        >
          Strzelcy
        </p>
      </div>
      <div className={style.table}>
        {selectedTable && <p>tabbb</p>}
        {selectedScore && <p>score</p>}
      </div>
    </div>
  );
};

export default Table;
