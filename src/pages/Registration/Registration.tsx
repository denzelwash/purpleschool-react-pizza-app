import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ROUTE_PATH } from "../../const";
import style from "./Registration.module.scss";
import clsx from "clsx";

export default function Login() {
  return (
    <form className={style["form"]}>
      <PageTitle>Вход</PageTitle>
      <Input type="email" label="Ваш email" />
      <Input type="password" label="Ваш пароль" />
      <Input className="mb-0" label="Ваше имя" />
      <Button className={clsx("primary", style["form__btn"])} size="default">
        Зарегистрироваться
      </Button>
      <div className={style["form__text"]}>
        Есть акканут?
        <br />
        <Link to={`../${ROUTE_PATH.Login}`}>Войти</Link>
      </div>
    </form>
  );
}
