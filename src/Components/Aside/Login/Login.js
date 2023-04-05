import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../Btn/Btn";
import style from "./login.module.css";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorLog, setErrorLog] = useState(false);
  const [errorPas, setErrorPas] = useState(false);
  const [user, setUser] = useState({});

  const handleLoginForm = (e) => {
    e.preventDefault();
    setErrorLog(false);
    setErrorPas(false);
    if (login.length < 3 && password.length < 6) {
      setErrorLog(true);
      setErrorPas(true);
      return;
    }
    if (login.length < 3) {
      setErrorLog(true);
      return;
    }
    if (password.length < 6) {
      setErrorPas(true);
      return;
    }
    setUser({ name: login });
    setLogin("");
    setPassword("");
  };

  const handleLogOut = () => {
    setUser({});
  };

  return (
    <div className={style.wrapper}>
      {user.name ? (
        <div className={style.userLogin}>
          <p>Witaj jesteś zalogowany jako:</p>
          <h4>{user.name}</h4>
          <Btn clickHandler={handleLogOut}>Wyloguj</Btn>
        </div>
      ) : (
        <>
          <h4>Logowanie</h4>
          <form onSubmit={(e) => handleLoginForm(e)}>
            <div className={style.logdiv}>
              <input
                type="text"
                placeholder="Login"
                name="username"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            {errorLog && (
              <div className={style.errorLogPass}>
                <div className={style.triangle}></div>
                <p>Nazwa użytkownika musi posiadać minimum 3 znaki!</p>
              </div>
            )}
            <div className={style.logdiv}>
              <input
                type="password"
                placeholder="Hasło"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorPas && (
              <div className={style.errorLogPass}>
                <div className={style.triangle}></div>
                <p>Hasło użytkownika musi posiadać minimum 6 znaków!</p>
              </div>
            )}
            <Btn>Zaloguj</Btn>
          </form>
          <div className={style.registerandreset}>
            <Link to="/registration">
              <p>Rejstracja</p>
            </Link>

            <p>Resetowanie hasła</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
