import PageTitle from "../../components/PageTitle/PageTitle";
import clsx from "clsx";
import style from "./Menu.module.scss";
import Input from "../../components/Input/Input";
import CardItem from "../../components/CardItem/CardItem";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import Loader from "../../components/Loader/Loader";
import api from "../../services/api";
import { useAppDispatch } from "../../store/store";
import { addProduct } from "../../store/slices/cart";

export default function Menu() {
  const [menu, setMenu] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();
  const dispatch = useAppDispatch();

  async function getMenu() {
    setIsLoading(true);
    const res = await api.get<Product[]>("/products");
    if (res) {
      setMenu(res.data);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getMenu();
  }, []);

  const handleAddToCart = (id: number) => {
    dispatch(addProduct(id));
  };

  return (
    <>
      <div className={clsx(style["page-header"])}>
        <PageTitle className="mb-0">Меню</PageTitle>
        <Input
          icon="./img/search-icon.svg"
          className="m-0"
          placeholder="Введите блюдо или состав"
        ></Input>
      </div>
      {!isLoading ? (
        <div className={style["grid"]}>
          {menu.map((card) => (
            <CardItem
              {...card}
              key={card.id}
              addToCart={() => handleAddToCart(card.id)}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
