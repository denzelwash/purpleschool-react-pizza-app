import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ROUTE_PATH } from "../../const";
import style from "./Login.module.scss";
import clsx from "clsx";
import { FormEvent } from "react";
import api from "../../services/api";

interface LoginForm {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

export default function Login() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginForm;
    const email = target.email.value;
    const password = target.password.value;
    sendLogin(email, password);
  };

  const sendLogin = async (email: string, password: string) => {
    const { data } = await api.post("/auth/login", {
      email,
      password,
    });
    console.log(data);
  };

  return (
    <form className={style["form"]} onSubmit={onSubmit}>
      <PageTitle>Вход</PageTitle>
      <Input label="Ваш email" name="email" placeholder="Email" />
      <Input
        type="password"
        className="mb-0"
        label="Ваш пароль"
        name="password"
        placeholder="Пароль"
      />
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
