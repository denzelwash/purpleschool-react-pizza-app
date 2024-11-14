import clsx from "clsx";
import Button from "../../components/Button/Button";
import CartItem from "../../components/CartItem/CartItem";
import Input from "../../components/Input/Input";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useAppDispatch, useAppSelector } from "../../store/store";
import style from "./Cart.module.scss";
import { CartItemFull, OrderResponse } from "../../types/cart";
import { useEffect, useState } from "react";
import api from "../../services/api";
import OrderSuccess from "../../components/OrderSuccess/OrderSuccess";
import cartSlice from "../../store/slices/cart";

const DELIVERY_COST = 196;

export default function Cart() {
  const [cartProducts, setCartProducts] = useState<CartItemFull[]>([]);
  const products = useAppSelector((store) => store.cart.products);
  const jwt = useAppSelector((store) => store.auth.jwt);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const dispatch = useAppDispatch();

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

  const handleSubmit = async () => {
    const { data } = await api.post<OrderResponse>(
      `/order`,
      {
        products,
      },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    if (data) {
      setOrderSuccess(true);
      dispatch(cartSlice.actions.clearAllProducts());
      setCartProducts([]);
    }
  };

  return (
    <>
      <PageTitle>Корзина</PageTitle>
      {!orderSuccess ? (
        <>
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
              <Button
                className={clsx(style["cart-submit"], "primary")}
                onClick={handleSubmit}
              >
                оформить
              </Button>
            </>
          )}
        </>
      ) : (
        <OrderSuccess />
      )}
    </>
  );
}
