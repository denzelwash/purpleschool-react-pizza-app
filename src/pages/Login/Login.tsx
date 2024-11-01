import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ROUTE_PATH } from "../../const";
import style from "./Login.module.scss";
import clsx from "clsx";
import { FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { login } from "../../store/thunks/user";

interface LoginForm {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const jwt = useAppSelector((store) => store.user.jwt);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginForm;
    const email = target.email.value;
    const password = target.password.value;
    dispatch(login({ email, password }));
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
