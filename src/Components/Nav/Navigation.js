import Submenu from "./Submenu";
import style from "./navigation.module.css";
import { useGlobalContext } from "../../context";

function Navigation() {
  const { menuLeft, menuRight, openSubmenu, closeSubmenu } = useGlobalContext();

  const displeySubmenu = (e) => {
    const page = e.target.textContent;
    const tempLi = e.target.getBoundingClientRect();
    const center = (tempLi.left + tempLi.right) / 2;
    const bottom = tempLi.bottom - 65;
    openSubmenu(page, { center, bottom });
  };

  return (
    <div className={style.container}>
      <ul className={style.menuLeft}>
        {menuLeft.map((itemMenu, index) => {
          const { page } = itemMenu;
          return (
            <li key={index} onMouseOver={displeySubmenu}>
              {page}
            </li>
          );
        })}
      </ul>

      <ul className={style.menuRight}>
        {menuRight.map((itemMenu, index) => {
          const { page } = itemMenu;
          return <li key={index}>{page}</li>;
        })}
      </ul>
      <Submenu />
    </div>
  );
}

export default Navigation;
