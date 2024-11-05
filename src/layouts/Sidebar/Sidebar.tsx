import { Link, Outlet, useNavigate } from "react-router-dom";
import style from "./Sidebar.module.scss";
import Button from "../../components/Button/Button";
import clsx from "clsx";
import { ROUTE_PATH } from "../../const";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { logout } from "../../store/slices/auth";

export default function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <div className="container">
      <div className={style["grid"]}>
        <div className={style["sidebar"]}>
          <img
            className={style["avatar"]}
            src="/img/avatar.png"
            width={80}
            height={80}
            alt=""
          />
          <h2 className={style["title"]}>{user?.name}</h2>
          <p className={style["email"]}>{user?.email}</p>
          <ul className={style["menu"]}>
            <li>
              <img src="/img/menu-icon.svg" width={23} height={23} alt="" />
              <Link to={ROUTE_PATH.Main}>Меню</Link>
            </li>
            <li>
              <img src="/img/cart-icon.svg" width={23} height={23} alt="" />
              <Link to={ROUTE_PATH.Cart}>Корзина</Link>
              <div className={style["cart-count"]}>2</div>
            </li>
          </ul>
          <Button
            className={clsx("primary", style["exit-btn"])}
            size="small"
            onClick={handleLogout}
          >
            <img src="/img/exit-icon.svg" alt="" width={26} height={26} />
            <span>Выйти</span>
          </Button>
        </div>
        <div className={style["content"]}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
