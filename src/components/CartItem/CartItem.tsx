import style from "./CartItem.module.scss";
import { CartItemFull } from "../../types/product";
import cartSlice from "../../store/slices/cart";
import { useAppDispatch } from "../../store/store";

interface CartItemProps extends CartItemFull {}

export default function CartItem({
  id,
  name,
  price,
  image,
  count,
}: CartItemProps) {
  const dispatch = useAppDispatch();

  const handleIncreaseProduct = () => {
    dispatch(cartSlice.actions.addProduct(id));
  };

  const handleDecreaseProduct = () => {
    dispatch(cartSlice.actions.removeProduct(id));
  };

  const handleClearProduct = () => {
    dispatch(cartSlice.actions.clearProduct(id));
  };

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
        <button onClick={handleDecreaseProduct}>-</button>
        <span>{count}</span>
        <button onClick={handleIncreaseProduct}>+</button>
      </div>
      <button
        onClick={handleClearProduct}
        className={style["cart-item__delete"]}
      >
        <img src="/img/delete-icon.svg" width={16} height={16} alt="" />
      </button>
    </div>
  );
}
