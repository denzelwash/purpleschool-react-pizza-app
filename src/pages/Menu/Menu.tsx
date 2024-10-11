import PageTitle from "../../components/PageTitle/PageTitle";
import clsx from "clsx";
import style from "./Menu.module.scss";
import Input from "../../components/Input/Input";
import CardItem from "../../components/CardItem/CardItem";
import { MOCK_CARDS } from "../../mocks/cards";

export default function Menu() {
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
      <div className={style["grid"]}>
        {MOCK_CARDS.map((card) => (
          <CardItem {...card} toggleFavorite={() => {}} />
        ))}
      </div>
    </>
  );
}
