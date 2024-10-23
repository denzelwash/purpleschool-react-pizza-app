import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ROUTE_PATH } from "../../const";
import style from "./Login.module.scss";
import clsx from "clsx";

export default function Login() {
  return (
    <form className={style["form"]}>
      <PageTitle>Вход</PageTitle>
      <Input label="Ваш email" />
      <Input type="password" className="mb-0" label="Ваш пароль" />
      <Button className={clsx("primary", style["form__btn"])} size="default">
        Вход
      </Button>
      <div className={style["form__text"]}>
        Нет акканута?
        <br />
        <Link to={`../${ROUTE_PATH.Registration}`}>Зарегистрироваться</Link>
      </div>
    </form>
  );
}
