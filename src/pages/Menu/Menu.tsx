import PageTitle from "../../components/PageTitle/PageTitle";
import clsx from "clsx";
import style from "./Menu.module.scss";
import Input from "../../components/Input/Input";
import CardItem from "../../components/CardItem/CardItem";
import { useEffect, useRef, useState } from "react";
import { Product } from "../../types/product";
import Loader from "../../components/Loader/Loader";
import api from "../../services/api";
import { useAppDispatch } from "../../store/store";
import { addProduct } from "../../store/slices/cart";

export default function Menu() {
  const [menu, setMenu] = useState<Product[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const mountedRef = useRef(false);
  const [isLoading, setIsLoading] = useState<boolean>();
  const dispatch = useAppDispatch();

  async function getMenu(name?: string) {
    setIsLoading(true);
    const res = await api.get<Product[]>("/products", {
      params: { name },
    });
    if (res) {
      setMenu(res.data);
    }
    setIsLoading(false);
  }

  const handleAddToCart = (id: number) => {
    dispatch(addProduct(id));
  };

  useEffect(() => {
    if (mountedRef.current) {
      const timerId = setTimeout(() => {
        searchInput.length ? getMenu(searchInput) : getMenu();
      }, 500);
      return () => clearTimeout(timerId);
    } else {
      getMenu();
      mountedRef.current = true;
    }
  }, [searchInput]);

  return (
    <>
      <div className={clsx(style["page-header"])}>
        <PageTitle className="mb-0">Меню</PageTitle>
        <Input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          icon="./img/search-icon.svg"
          className="m-0"
          placeholder="Введите блюдо или состав"
        ></Input>
      </div>
      {!isLoading ? (
        menu.length ? (
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
          <div>Ничего не найдено</div>
        )
      ) : (
        <Loader />
      )}
    </>
  );
}
