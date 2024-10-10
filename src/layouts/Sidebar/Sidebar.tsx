import { Link, Outlet } from "react-router-dom";
import style from "./Sidebar.module.scss";
import Button from "../../components/Button/Button";
import clsx from "clsx";

export default function Sidebar() {
  return (
    <>
      <div className={style["page-wrapper"]}>
        <div className={style["sidebar"]}>
          <img
            className={style["avatar"]}
            src="/img/avatar.png"
            width={80}
            height={80}
            alt=""
          />
          <h2 className={style["title"]}>Антон Ларичев</h2>
          <p className={style["email"]}>alaricode@ya.ru</p>
          <ul className={style["menu"]}>
            <li>
              <img src="/img/menu-icon.svg" width={23} height={23} alt="" />
              <Link to="/">Меню</Link>
            </li>
            <li>
              <img src="/img/cart-icon.svg" width={23} height={23} alt="" />
              <Link to="/cart">Корзина</Link>
              <div className={style["cart-count"]}>2</div>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Button className={clsx("primary", style["exit-btn"])} size="small">
            <img src="/img/exit-icon.svg" alt="" width={26} height={26} />
            <span>Выйти</span>
          </Button>
        </div>
        <div className={style["content"]}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
