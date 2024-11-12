import style from "./CartItem.module.scss";
import { CartItemFull } from "../../types/product";

interface CartItemProps extends CartItemFull {}

export default function CartItem({ name, price, image, count }: CartItemProps) {
  return (
    <div className={style["cart-item"]}>
      <div className={style["cart-item__image"]}>
        <img src={image} alt="" />
      </div>
      <div className={style["cart-item__info"]}>
        <h5>{name}</h5>
        <p>{price}₽</p>
      </div>
      <div className={style["cart-item__counter"]}>
        <button>-</button>
        <span>{count}</span>
        <button>+</button>
      </div>
      <button className={style["cart-item__delete"]}>
        <img src="/img/delete-icon.svg" width={16} height={16} alt="" />
      </button>
    </div>
  );
}
