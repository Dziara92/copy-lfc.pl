import Submenu from "./Submenu";
import style from "./navigation.module.css";
import { useGlobalContext } from "../../context";

function Navigation() {
  const { menuLeft, menuRight, handleSubmenu, closeSubmenu } =
    useGlobalContext();

  const displeySubmenu = (e) => {
    if (e.target.classList.contains("menuLi")) {
      const page = e.target.textContent;
      const tempLi = e.target.getBoundingClientRect();
      const center = (tempLi.left + tempLi.right) / 2;
      const bottom = tempLi.bottom - 55;
      handleSubmenu(page, { center, bottom });
    }
  };

  return (
    <nav className={style.container} onMouseOver={displeySubmenu}>
      <ul className={style.menuLeft}>
        {menuLeft.map((itemMenu, index) => {
          const { page } = itemMenu;
          return (
            <li className="menuLi" key={index}>
              {page}
            </li>
          );
        })}
      </ul>

      <ul className={style.menuRight}>
        {menuRight.map((itemMenu, index) => {
          const { page } = itemMenu;
          return (
            <li className="menuLi" key={index}>
              {page}
            </li>
          );
        })}
      </ul>

      <Submenu />
    </nav>
  );
}

export default Navigation;
