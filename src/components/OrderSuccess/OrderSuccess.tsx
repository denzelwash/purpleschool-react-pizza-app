import clsx from "clsx";
import Button from "../Button/Button";
import style from "./OrderSuccess.module.scss";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../const";

export default function OrderSuccess() {
  return (
    <div className={style["order-success"]}>
      <img
        className={style["order-success__image"]}
        src="/img/pizza.png"
        alt=""
        width={319}
        height={319}
      />
      <p className={style["order-success__text"]}>
        Ваш заказ успешно <br /> оформлен!
      </p>
      <Link to={ROUTE_PATH.Main}>
        <Button className={clsx(style["order-success__btn"], "primary")}>
          Сделать новый
        </Button>
      </Link>
    </div>
  );
}
