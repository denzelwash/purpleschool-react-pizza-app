import clsx from "clsx";
import style from "./CardItem.module.scss";

interface CardItemProps {
  title: string;
  poster: string;
  desc: string;
  count: number;
  toggleFavorite: () => void;
}

export default function CardItem({
  title,
  poster,
  count,
  desc,
}: CardItemProps) {
  return (
    <div className={style["card-item"]}>
      <div className={style["card-item__count"]}>
        <span>{count}</span>₽
      </div>
      <img className={style["card-item__poster"]} src={poster} alt={title} />
      <div className={style["card-item__text"]}>
        <a href="#" className={style["card-item__title"]}>
          {title}
        </a>
        <p className={style["card-item__desc"]}>{desc}</p>
      </div>
      <button className={clsx(style["card-item__order"])}>
        <img src="/img/cart-icon.svg" alt="" width={16} height={17} />
      </button>
    </div>
  );
}
