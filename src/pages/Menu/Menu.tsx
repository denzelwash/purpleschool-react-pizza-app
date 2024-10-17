import PageTitle from "../../components/PageTitle/PageTitle";
import clsx from "clsx";
import style from "./Menu.module.scss";
import Input from "../../components/Input/Input";
import CardItem from "../../components/CardItem/CardItem";
import { API_URL } from "../../const";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import axios, { AxiosError } from "axios";
import Loader from "../../components/Loader/Loader";

export default function Menu() {
  const [menu, setMenu] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>();

  async function getMenu() {
    try {
      setIsLoading(true);
      const { data } = await axios.get<Product[]>(`${API_URL}/products`);
      setMenu(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      setIsLoading(false);
    }
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
      {error && <div>{error}</div>}
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
