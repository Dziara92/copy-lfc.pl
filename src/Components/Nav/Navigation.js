import Submenu from "./Submenu";
import style from "./navigation.module.css";
import { useGlobalContext } from "../../context";

function Navigation() {
  const { menuLeft, menuRight, openSubmenu, closeSubmenu } = useGlobalContext();

  const displeySubmenu = (e) => {
    openSubmenu();
  };

  return (
    <div className={style.container}>
      <ul className={style.menuLeft}>
        {menuLeft.map((itemMenu, index) => {
          const { menu } = itemMenu;
          return (
            <li key={index} onMouseOver={displeySubmenu}>
              {menu}
            </li>
          );
        })}
      </ul>
      <ul className={style.menuRight}>
        {menuRight.map((itemMenu, index) => {
          const { menu } = itemMenu;
          return <li key={index}>{menu}</li>;
        })}
      </ul>
      <Submenu />
    </div>
  );
}

export default Navigation;
