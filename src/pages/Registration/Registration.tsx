import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PageTitle from "../../components/PageTitle/PageTitle";
import { ROUTE_PATH } from "../../const";
import style from "./Registration.module.scss";
import clsx from "clsx";
import { FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { registration } from "../../store/thunks/auth";
import { setAuthStatus } from "../../store/slices/auth";
import { AuthStatus } from "../../types/auth";

interface RegistrationForm {
  name: {
    value: string;
  };
  email: {
    value: string;
  };
  password: {
    value: string;
  };
}

export default function Registration() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { jwt } = useAppSelector((store) => store.auth);

  useEffect(() => {
    if (jwt) {
      dispatch(setAuthStatus(AuthStatus.Unknown));
      navigate("/");
    }
  }, [jwt]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & RegistrationForm;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    dispatch(registration({ name, email, password }));
  };

  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      <PageTitle>Регистрация</PageTitle>
      <Input type="email" name="email" label="Ваш email" />
      <Input type="password" name="password" label="Ваш пароль" />
      <Input className="mb-0" name="name" label="Ваше имя" />
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
