import style from "./Auth.module.scss";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className={style["auth"]}>
      <div className="container">
        <div className={style["auth__grid"]}>
          <div className={style["auth__logo"]}>
            <img src="/img/logo.svg" alt="" width={363} />
          </div>
          <div className={style["auth__content"]}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
