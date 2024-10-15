import clsx from "clsx";
import style from "./CardItem.module.scss";
import { Product } from "../../types/product";
import { Link } from "react-router-dom";

interface CardItemProps extends Product {
  toggleFavorite: () => void;
}

export default function CardItem({
  id,
  name,
  image,
  price,
  ingredients,
  rating,
}: CardItemProps) {
  return (
    <div className={style["card-item"]}>
      <div className={style["card-item__price"]}>
        <span>{price}</span>₽
      </div>
      <img className={style["card-item__poster"]} src={image} alt={name} />
      <div className={style["card-item__text"]}>
        <Link to={`/product/${id}`} className={style["card-item__title"]}>
          {name}
        </Link>
        <p className={style["card-item__desc"]}>{ingredients.join(", ")}</p>
      </div>
      <button className={clsx(style["card-item__order"])}>
        <img src="/img/cart-icon.svg" alt="" width={16} height={17} />
      </button>
      <div className={clsx(style["card-item__rating"])}>
        <span>{rating}</span>
        <img src="/img/star-icon.svg" alt="" width={16} height={17} />
      </div>
    </div>
  );
}
