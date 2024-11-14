import clsx from "clsx";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import Input from "../../components/Input/Input";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useAppSelector } from "../../store/store";
import style from "./Cart.module.scss";
import { CartItemFull } from "../../types/product";
import { useEffect, useState } from "react";
import api from "../../services/api";

const DELIVERY_COST = 196;

export default function Cart() {
  const [cartProducts, setCartProducts] = useState<CartItemFull[]>([]);
  const products = useAppSelector((store) => store.cart.products);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const getCartProduct = async (id: number) => {
    const { data } = await api.get<CartItemFull>(`/products/${id}`);
    return data;
  };

  const loadAllProducts = async () => {
    const res = await Promise.all(products.map((p) => getCartProduct(p.id)));
    setCartProducts(res);
  };

  const totalProductsCost = products.reduce((acc, val) => {
    const product = cartProducts.find((p) => p.id === val.id);
    if (product) {
      return acc + val.count * product.price;
    }
    return 0;
  }, 0);

  return (
    <>
      <PageTitle>Корзина</PageTitle>
      {!products.length && <p>Корзина пуста</p>}
      {!!cartProducts.length && !!products.length && (
        <>
          <div className={style["cart-grid"]}>
            {products.map((product) => (
              <CartItem
                key={product.id}
                {...product}
                {...cartProducts.find((p) => p.id === product.id)!}
              ></CartItem>
            ))}
          </div>
          <div className={style["cart-promo"]}>
            <Input className={clsx(style["cart-promo__input"], "mb-0")} />
            <Button
              size="small"
              className={clsx(style["cart-promo__button"], "primary")}
            >
              Применить
            </Button>
          </div>
          <ul className={style["cart-result"]}>
            <li>
              <p>Итог</p>
              <p>
                {totalProductsCost}
                <span>₽</span>
              </p>
            </li>
            <li>
              <p>Доставка</p>
              <p>
                {DELIVERY_COST} <span>₽</span>
              </p>
            </li>
            <li>
              <p>
                Итог <span>({products.length})</span>
              </p>
              <p>
                {totalProductsCost + DELIVERY_COST} <span>₽</span>
              </p>
            </li>
          </ul>
          <Button className={clsx(style["cart-submit"], "primary")}>
            оформить
          </Button>
        </>
      )}
    </>
  );
}
