import PageTitle from "../../components/PageTitle/PageTitle";
import clsx from "clsx";
import style from "./Menu.module.scss";
import Input from "../../components/Input/Input";
import CardItem from "../../components/CardItem/CardItem";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import Loader from "../../components/Loader/Loader";
import api from "../../services/api";

export default function Menu() {
  const [menu, setMenu] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();

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
            <CardItem {...card} key={card.id} toggleFavorite={() => {}} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
